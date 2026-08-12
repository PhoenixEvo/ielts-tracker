import React, { useState } from 'react';
import { Globe, ExternalLink, Plus, Search, Bookmark, Trash2 } from 'lucide-react';

export default function ResourcesDirectory({ resources, setResources }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newCategory, setNewCategory] = useState('General Prep');
  const [newDescription, setNewDescription] = useState('');

  const filteredResources = resources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || res.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddResource = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) return;

    const newRes = {
      id: Date.now(),
      title: newTitle,
      url: newUrl,
      category: newCategory,
      isFree: true,
      description: newDescription
    };

    setResources([...resources, newRes]);
    setNewTitle('');
    setNewUrl('');
    setNewDescription('');
    setShowAddForm(false);
  };

  const handleDeleteResource = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa trang web này?")) {
      setResources(resources.filter(r => r.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header Bar */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Kho Web Luyện Đề & Tài Liệu IELTS Miễn Phí
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Tổng hợp các trang web thi thử, tra cứu từ vựng và bài học chất lượng từ các giám khảo & tổ chức uy tín.
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 transition shadow-sm"
        >
          <Plus className="w-4 h-4" /> Thêm Web Mới
        </button>
      </div>

      {/* Add Resource Form */}
      {showAddForm && (
        <form onSubmit={handleAddResource} className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-800 space-y-4">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Plus className="w-4 h-4 text-indigo-600" /> Thêm Trang Web / Tài Liệu Cá Nhân
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">Tên trang web / Tài liệu</label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="VD: Cambridge IELTS 19 Online"
                required
                className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">Đường dẫn URL</label>
              <input
                type="url"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="https://..."
                required
                className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">Danh mục</label>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Mock Test / Speaking / Writing"
                className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800"
              />
            </div>

            <div className="md:col-span-3">
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">Mô tả ngắn</label>
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Mô tả lý do hoặc nội dung chính..."
                className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-xs"
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
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-5 py-2 rounded-xl"
            >
              Lưu Trang Web
            </button>
          </div>
        </form>
      )}

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredResources.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between hover:shadow-md transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase tracking-wider font-extrabold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                  {item.category}
                </span>

                {item.isFree && (
                  <span className="text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                    Miễn phí
                  </span>
                )}
              </div>

              <h3 className="font-bold text-slate-800 dark:text-white text-base mb-2 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold text-xs py-2.5 px-4 rounded-2xl hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
              >
                Truy cập Web <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => handleDeleteResource(item.id)}
                className="text-slate-400 hover:text-rose-500 transition p-2"
                title="Xóa trang web"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
