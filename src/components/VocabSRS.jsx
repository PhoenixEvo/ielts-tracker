import React, { useState } from 'react';
import { calculateNextSRS, isDueForReview } from '../services/srsAlgorithm';
import { BookOpen, Layers, Plus, RotateCw, CheckCircle, Brain, Sparkles, Filter, Search, Trash2 } from 'lucide-react';

export default function VocabSRS({ vocabList, setVocabList }) {
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'flashcard'
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSkill, setFilterSkill] = useState('all');
  const [filterType, setFilterType] = useState('all');

  // Flashcard state
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Form state
  const [newTerm, setNewTerm] = useState('');
  const [newDefinition, setNewDefinition] = useState('');
  const [newType, setNewType] = useState('collocation');
  const [newSkillTag, setNewSkillTag] = useState('Writing Task 2');
  const [newExample, setNewExample] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  // Filter items for review
  const dueItems = vocabList.filter(isDueForReview);

  // Filter items for table view
  const filteredTableList = vocabList.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = filterSkill === 'all' || item.skillTag === filterSkill;
    const matchesType = filterType === 'all' || item.type === filterType;
    return matchesSearch && matchesSkill && matchesType;
  });

  const handleAddVocab = (e) => {
    e.preventDefault();
    if (!newTerm.trim() || !newDefinition.trim()) return;

    const newItem = {
      id: Date.now(),
      term: newTerm,
      definition: newDefinition,
      type: newType,
      skillTag: newSkillTag,
      example: newExample,
      dateAdded: new Date().toISOString().split('T')[0],
      srsStage: 0,
      intervalDays: 1,
      easeFactor: 2.5,
      nextReviewDate: new Date().toISOString().split('T')[0]
    };

    setVocabList([newItem, ...vocabList]);
    setNewTerm('');
    setNewDefinition('');
    setNewExample('');
    setShowAddForm(false);
  };

  const handleDeleteVocab = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa từ vựng này?")) {
      setVocabList(vocabList.filter(v => v.id !== id));
    }
  };

  // SRS Flashcard Response
  const handleSRSResponse = (rating) => {
    if (dueItems.length === 0) return;
    const currentItem = dueItems[cardIndex];
    const updatedItem = calculateNextSRS(currentItem, rating);

    const updatedList = vocabList.map(item => item.id === currentItem.id ? updatedItem : item);
    setVocabList(updatedList);

    setIsFlipped(false);
    if (cardIndex >= dueItems.length - 1) {
      setCardIndex(0);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* View Switcher & Action Header */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Sổ Tay Từ Vựng & Lỗi Sai SRS
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Ghi nhớ từ vựng B2-C2, Collocations, Idioms và lỗi sai bằng thuật toán Lặp Lại Ngắt Quãng (SM-2).
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          {/* Mode Switcher Buttons */}
          <div className="flex bg-slate-100 dark:bg-slate-700 p-1 rounded-2xl border border-slate-200 dark:border-slate-600 text-xs font-semibold">
            <button
              onClick={() => setViewMode('table')}
              className={`px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                viewMode === 'table'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              <Layers className="w-3.5 h-3.5" /> Danh Sách
            </button>
            <button
              onClick={() => { setViewMode('flashcard'); setIsFlipped(false); setCardIndex(0); }}
              className={`px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                viewMode === 'flashcard'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              <Brain className="w-3.5 h-3.5 text-amber-500" />
              Flashcard ({dueItems.length} từ cần ôn)
            </button>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 transition shadow-sm"
          >
            <Plus className="w-4 h-4" /> Thêm Từ Mới
          </button>
        </div>
      </div>

      {/* Add Word Form */}
      {showAddForm && (
        <form onSubmit={handleAddVocab} className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800 space-y-4">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Plus className="w-4 h-4 text-emerald-600" /> Ghi Chép Từ Vựng / Cấu Trúc / Lỗi Sai Mới
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">Từ vựng / Cấu trúc / Lỗi sai</label>
              <input
                type="text"
                value={newTerm}
                onChange={(e) => setNewTerm(e.target.value)}
                placeholder="VD: Exacerbate the problem"
                required
                className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">Giải nghĩa & Ngữ cảnh</label>
              <input
                type="text"
                value={newDefinition}
                onChange={(e) => setNewDefinition(e.target.value)}
                placeholder="VD: Làm trầm trọng thêm vấn đề"
                required
                className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">Loại từ</label>
              <select
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
                className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800"
              >
                <option value="collocation">Collocation</option>
                <option value="vocab">C1/C2 Vocab</option>
                <option value="idiom">Idiom</option>
                <option value="error">Lỗi sai hay gặp</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">Phân loại kỹ năng</label>
              <select
                value={newSkillTag}
                onChange={(e) => setNewSkillTag(e.target.value)}
                className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800"
              >
                <option>Writing Task 1</option>
                <option>Writing Task 2</option>
                <option>Speaking</option>
                <option>Reading</option>
                <option>Listening</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">Ví dụ minh họa (Example sentence)</label>
              <input
                type="text"
                value={newExample}
                onChange={(e) => setNewExample(e.target.value)}
                placeholder="VD: Rapid urbanisation can exacerbate environmental pollution."
                className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-700"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-5 py-2 rounded-xl"
            >
              Lưu Từ Mới
            </button>
          </div>
        </form>
      )}

      {/* VIEW MODE 1: SRS FLASHCARD INTERFACE */}
      {viewMode === 'flashcard' && (
        <div className="max-w-2xl mx-auto space-y-4">
          {dueItems.length > 0 ? (
            <div className="space-y-4">
              
              <div className="flex justify-between items-center text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>Thẻ học {cardIndex + 1} / {dueItems.length} (Cần ôn hôm nay)</span>
                <span className="text-amber-500">SRS Stage: {dueItems[cardIndex].srsStage || 0}</span>
              </div>

              {/* Flip Card Container */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="cursor-pointer min-h-[260px] bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border-2 border-indigo-200 dark:border-indigo-800 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-xl hover:border-indigo-400 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-[10px] uppercase font-extrabold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                  {dueItems[cardIndex].skillTag} • {dueItems[cardIndex].type}
                </div>

                <div className="my-auto space-y-4 w-full">
                  {!isFlipped ? (
                    // Front of card
                    <div>
                      <h3 className="text-2xl font-black text-indigo-950 dark:text-white mb-2">
                        {dueItems[cardIndex].term}
                      </h3>
                      {dueItems[cardIndex].example && (
                        <p className="text-xs italic text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                          "{dueItems[cardIndex].example}"
                        </p>
                      )}
                      <p className="text-[11px] text-indigo-500 font-semibold mt-4">
                        (Nhấp vào mặt thẻ để lật xem đáp án & ví dụ)
                      </p>
                    </div>
                  ) : (
                    // Back of card
                    <div className="animate-fadeIn">
                      <div className="text-xs uppercase text-indigo-500 font-bold tracking-wider mb-1">Ý Nghĩa & Ngữ Cảnh</div>
                      <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                        {dueItems[cardIndex].definition}
                      </h4>
                      {dueItems[cardIndex].example && (
                        <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-2xl text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-left">
                          <span className="font-bold text-indigo-600">Ví dụ: </span>
                          {dueItems[cardIndex].example}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="text-[10px] text-slate-400">
                  {isFlipped ? 'Đánh giá khả năng ghi nhớ bên dưới' : 'Chạm để lật thẻ'}
                </div>
              </div>

              {/* Rating Buttons */}
              {isFlipped && (
                <div className="grid grid-cols-4 gap-2 pt-2 animate-fadeIn">
                  <button
                    onClick={() => handleSRSResponse('again')}
                    className="p-3 bg-rose-100 dark:bg-rose-950/60 hover:bg-rose-200 text-rose-700 dark:text-rose-300 rounded-2xl font-bold text-xs border border-rose-300 dark:border-rose-800 transition"
                  >
                    Quên (Again)
                    <div className="text-[10px] font-normal opacity-80">Ôn lại 1 ngày</div>
                  </button>

                  <button
                    onClick={() => handleSRSResponse('hard')}
                    className="p-3 bg-amber-100 dark:bg-amber-950/60 hover:bg-amber-200 text-amber-800 dark:text-amber-300 rounded-2xl font-bold text-xs border border-amber-300 dark:border-amber-800 transition"
                  >
                    Khó (Hard)
                    <div className="text-[10px] font-normal opacity-80">Ôn lại 2 ngày</div>
                  </button>

                  <button
                    onClick={() => handleSRSResponse('good')}
                    className="p-3 bg-indigo-100 dark:bg-indigo-950/60 hover:bg-indigo-200 text-indigo-700 dark:text-indigo-300 rounded-2xl font-bold text-xs border border-indigo-300 dark:border-indigo-800 transition"
                  >
                    Tốt (Good)
                    <div className="text-[10px] font-normal opacity-80">Ôn lại 4 ngày</div>
                  </button>

                  <button
                    onClick={() => handleSRSResponse('easy')}
                    className="p-3 bg-emerald-100 dark:bg-emerald-950/60 hover:bg-emerald-200 text-emerald-800 dark:text-emerald-300 rounded-2xl font-bold text-xs border border-emerald-300 dark:border-emerald-800 transition"
                  >
                    Dễ (Easy)
                    <div className="text-[10px] font-normal opacity-80">Ôn lại 7+ ngày</div>
                  </button>
                </div>
              )}

            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl text-center border border-slate-200 dark:border-slate-700 space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-base font-bold text-slate-800 dark:text-white">
                Tuyệt vời! Bạn đã hoàn thành tất cả thẻ cần ôn hôm nay.
              </h3>
              <p className="text-xs text-slate-500">
                Thuật toán SRS sẽ tự động xếp lịch ôn tập các từ này vào đúng thời điểm bạn sắp quên.
              </p>
              <button
                onClick={() => setViewMode('table')}
                className="mt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 underline"
              >
                Quay lại danh sách từ vựng
              </button>
            </div>
          )}
        </div>
      )}

      {/* VIEW MODE 2: TABLE SEARCH & FILTER LIST */}
      {viewMode === 'table' && (
        <div className="space-y-4">
          
          {/* Search & Filter Bar */}
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between gap-3 text-xs">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm từ vựng, collocation, lỗi sai..."
                className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={filterSkill}
                onChange={(e) => setFilterSkill(e.target.value)}
                className="p-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300"
              >
                <option value="all">Tất cả Kỹ năng</option>
                <option value="Writing Task 1">Writing Task 1</option>
                <option value="Writing Task 2">Writing Task 2</option>
                <option value="Speaking">Speaking</option>
                <option value="Reading">Reading</option>
                <option value="Listening">Listening</option>
              </select>

              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="p-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300"
              >
                <option value="all">Tất cả Loại từ</option>
                <option value="collocation">Collocation</option>
                <option value="vocab">C1/C2 Vocab</option>
                <option value="idiom">Idiom</option>
                <option value="error">Lỗi sai</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 font-semibold border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3.5 w-1/4">Từ / Cấu trúc / Lỗi sai</th>
                    <th className="p-3.5 w-2/5">Ý nghĩa & Cách dùng</th>
                    <th className="p-3.5 w-1/5">Phân loại</th>
                    <th className="p-3.5 w-28 text-center">Lịch ôn tiếp</th>
                    <th className="p-3.5 w-12 text-center">Xóa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                  {filteredTableList.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                      <td className="p-3.5 font-bold text-indigo-950 dark:text-indigo-300">
                        {item.term}
                      </td>

                      <td className="p-3.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                        <div>{item.definition}</div>
                        {item.example && (
                          <div className="text-[11px] italic text-slate-500 dark:text-slate-400 mt-1">
                            "{item.example}"
                          </div>
                        )}
                      </td>

                      <td className="p-3.5">
                        <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                          {item.skillTag} • {item.type}
                        </span>
                      </td>

                      <td className="p-3.5 text-center font-medium text-slate-500 dark:text-slate-400">
                        {item.nextReviewDate || 'Hôm nay'}
                      </td>

                      <td className="p-3.5 text-center">
                        <button
                          onClick={() => handleDeleteVocab(item.id)}
                          className="text-rose-500 hover:text-rose-700 transition p-1"
                          title="Xóa từ"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
