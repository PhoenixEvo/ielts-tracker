import React, { useState } from 'react';
import { FileText, CheckCircle2, Mic, PenTool, Layout, ListChecks, HelpCircle } from 'lucide-react';

export default function IELTSChecklists({ checklists, setChecklists }) {
  const [activeSubTab, setActiveSubTab] = useState('writingTask1'); // 'writingTask1' | 'writingTask2' | 'speaking'

  const toggleCheck = (categoryKey, id) => {
    const list = checklists[categoryKey] || [];
    const updated = list.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setChecklists({ ...checklists, [categoryKey]: updated });
  };

  const getSubTabTitle = (key) => {
    if (key === 'writingTask1') return 'Writing Task 1 (Bar/Line/Map/Process)';
    if (key === 'writingTask2') return 'Writing Task 2 (Essay 250+ Words)';
    if (key === 'speaking') return 'Speaking Part 1, 2 & 3 Self-Review';
    return '';
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Checklist Tiêu Chí Chấm Điểm & Template Bài Làm Band 7.5
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Bộ checklist tự chấm dựa trên 4 tiêu chí giám khảo (Task Achievement, Coherence, Lexical Resource, Grammar / Fluency).
          </p>
        </div>

        {/* Sub-tab selection */}
        <div className="flex bg-slate-100 dark:bg-slate-700 p-1 rounded-2xl border border-slate-200 dark:border-slate-600 text-xs font-semibold">
          <button
            onClick={() => setActiveSubTab('writingTask1')}
            className={`px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
              activeSubTab === 'writingTask1'
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <PenTool className="w-3.5 h-3.5" /> Task 1
          </button>

          <button
            onClick={() => setActiveSubTab('writingTask2')}
            className={`px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
              activeSubTab === 'writingTask2'
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <FileText className="w-3.5 h-3.5" /> Task 2
          </button>

          <button
            onClick={() => setActiveSubTab('speaking')}
            className={`px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
              activeSubTab === 'speaking'
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <Mic className="w-3.5 h-3.5" /> Speaking
          </button>
        </div>
      </div>

      {/* Structured Guidelines Box */}
      <div className="bg-indigo-950 text-white p-6 rounded-3xl border border-indigo-800 shadow-md">
        <h3 className="text-base font-bold text-amber-300 mb-3 flex items-center gap-2">
          <Layout className="w-5 h-5 text-amber-400" />
          Khung Cấu Trúc Chuẩn Band 7.5+ - {getSubTabTitle(activeSubTab)}
        </h3>

        {activeSubTab === 'writingTask1' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs text-indigo-100">
            <div className="bg-indigo-900/60 p-3 rounded-2xl border border-indigo-700/50">
              <div className="font-bold text-yellow-400 mb-1">1. Introduction (1 câu)</div>
              <div>Paraphrase đề bài bằng cấu trúc khác (e.g., "The chart illustrates/depicts the proportion of...").</div>
            </div>
            <div className="bg-indigo-900/60 p-3 rounded-2xl border border-indigo-700/50">
              <div className="font-bold text-yellow-400 mb-1">2. Overview (2 câu)</div>
              <div>Nêu 2 xu hướng chính/đặc điểm nổi bật nhất. TUYỆT ĐỐI KHÔNG đưa số liệu chi tiết vào Overview.</div>
            </div>
            <div className="bg-indigo-900/60 p-3 rounded-2xl border border-indigo-700/50">
              <div className="font-bold text-yellow-400 mb-1">3. Body 1 (3-4 câu)</div>
              <div>Mô tả chi tiết nhóm dữ liệu lớn nhất/xu hướng chính 1 kèm số liệu cụ thể & từ so sánh.</div>
            </div>
            <div className="bg-indigo-900/60 p-3 rounded-2xl border border-indigo-700/50">
              <div className="font-bold text-yellow-400 mb-1">4. Body 2 (3-4 câu)</div>
              <div>Mô tả nhóm dữ liệu còn lại, so sánh tương quan với Body 1 bằng các từ nối mượt mà.</div>
            </div>
          </div>
        )}

        {activeSubTab === 'writingTask2' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs text-indigo-100">
            <div className="bg-indigo-900/60 p-3 rounded-2xl border border-indigo-700/50">
              <div className="font-bold text-yellow-400 mb-1">1. Introduction (2 câu)</div>
              <div>Sentence 1: Paraphrase topic. Sentence 2: Thesis statement (nêu rõ quan điểm bài viết).</div>
            </div>
            <div className="bg-indigo-900/60 p-3 rounded-2xl border border-indigo-700/50">
              <div className="font-bold text-yellow-400 mb-1">2. Body 1 (5 câu)</div>
              <div>Topic Sentence 1 → Explanation → Concrete Example → Impact/Result sentence.</div>
            </div>
            <div className="bg-indigo-900/60 p-3 rounded-2xl border border-indigo-700/50">
              <div className="font-bold text-yellow-400 mb-1">3. Body 2 (5 câu)</div>
              <div>Topic Sentence 2 → Explanation → Concrete Example → Counter-argument / Result.</div>
            </div>
            <div className="bg-indigo-900/60 p-3 rounded-2xl border border-indigo-700/50">
              <div className="font-bold text-yellow-400 mb-1">4. Conclusion (2 câu)</div>
              <div>Restate thesis statement & summarize 2 main supporting points (không đưa ý mới).</div>
            </div>
          </div>
        )}

        {activeSubTab === 'speaking' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-indigo-100">
            <div className="bg-indigo-900/60 p-3 rounded-2xl border border-indigo-700/50">
              <div className="font-bold text-yellow-400 mb-1">Part 1: Trả lời trực tiếp + Mở rộng</div>
              <div>Nói 2-3 câu. Áp dụng công thức Answer + Reason / Example. Tránh câu trả lời 1 từ.</div>
            </div>
            <div className="bg-indigo-900/60 p-3 rounded-2xl border border-indigo-700/50">
              <div className="font-bold text-yellow-400 mb-1">Part 2: PPF Storytelling Line</div>
              <div>Mở đầu bằng Quá khứ (Past context) → Chi tiết Hiện tại (Present details) → Cảm xúc/Tương lai (Future impact).</div>
            </div>
            <div className="bg-indigo-900/60 p-3 rounded-2xl border border-indigo-700/50">
              <div className="font-bold text-yellow-400 mb-1">Part 3: Mô hình PEEL Chuyên sâu</div>
              <div>Point (Ý chính) → Explanation (Giải thích tại sao) → Example (Ví dụ thực tế) → Link (Tóm lại).</div>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Self-Review Checklist Table */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-800 dark:text-white flex justify-between items-center">
          <span>Checklist Tự Đánh Giá Bài Làm Hàng Ngày ({getSubTabTitle(activeSubTab)})</span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
          {(checklists[activeSubTab] || []).map((item) => (
            <label
              key={item.id}
              className={`p-4 flex items-start gap-3 cursor-pointer transition-colors ${
                item.checked
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 text-slate-500'
                  : 'hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-100'
              }`}
            >
              <input
                type="checkbox"
                checked={Boolean(item.checked)}
                onChange={() => toggleCheck(activeSubTab, item.id)}
                className="mt-1 w-4 h-4 text-indigo-600 rounded border-slate-300 dark:border-slate-600 focus:ring-indigo-500"
              />
              <div className="flex-1">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 mb-1">
                  {item.category}
                </span>
                <p className={`text-xs leading-relaxed ${item.checked ? 'line-through opacity-70' : 'font-medium'}`}>
                  {item.text}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

    </div>
  );
}
