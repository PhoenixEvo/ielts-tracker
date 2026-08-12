import React, { useState } from 'react';
import { CheckSquare, Calendar, Clock, ExternalLink, Plus, Flame, Edit3, Trash2 } from 'lucide-react';

export default function DailySchedule({
  scheduleTasks,
  setScheduleTasks,
  userProfile,
  setUserProfile
}) {
  const [selectedPhase, setSelectedPhase] = useState('all');
  const [newTaskDay, setNewTaskDay] = useState('Thứ Hai');
  const [newTaskSkill, setNewTaskSkill] = useState('Reading & Writing T1');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [newTaskSite, setNewTaskSite] = useState('IELTS Online Tests');
  const [newTaskUrl, setNewTaskUrl] = useState('https://ieltsonlinetests.com');
  const [newTaskTime, setNewTaskTime] = useState('90 phút');
  const [newTaskPhase, setNewTaskPhase] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);

  // Filter tasks by phase
  const filteredTasks = scheduleTasks.filter(task => {
    if (selectedPhase === 'all') return true;
    return task.phase === parseInt(selectedPhase, 10);
  });

  // Calculate completion
  const totalCount = filteredTasks.length;
  const completedCount = filteredTasks.filter(t => t.completed).length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Toggle task completion status
  const toggleTask = (id) => {
    const updated = scheduleTasks.map(t => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setScheduleTasks(updated);

    // Update study streak if today has completed items
    const today = new Date().toISOString().split('T')[0];
    if (userProfile.lastActiveDate !== today) {
      setUserProfile(prev => ({
        ...prev,
        streakCount: prev.streakCount + 1,
        lastActiveDate: today
      }));
    }
  };

  // Update personal note
  const updateNote = (id, noteVal) => {
    const updated = scheduleTasks.map(t => {
      if (t.id === id) {
        return { ...t, note: noteVal };
      }
      return t;
    });
    setScheduleTasks(updated);
  };

  // Delete task
  const deleteTask = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa nhiệm vụ này?")) {
      setScheduleTasks(scheduleTasks.filter(t => t.id !== id));
    }
  };

  // Add custom task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskDesc.trim()) return;

    const newTask = {
      id: Date.now(),
      day: newTaskDay,
      skill: newTaskSkill,
      task: newTaskDesc,
      site: newTaskSite,
      url: newTaskUrl || "https://ieltsonlinetests.com",
      time: newTaskTime,
      phase: parseInt(newTaskPhase, 10),
      completed: false,
      note: ""
    };

    setScheduleTasks([...scheduleTasks, newTask]);
    setNewTaskDesc('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header controls & Phase selector */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Lịch Học & Checklist Hàng Ngày
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Tích chọn nhiệm vụ đã hoàn thành. Ghi chú cá nhân & tiến độ được tự động đồng bộ hóa.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
            <span>Giai đoạn:</span>
            <select
              value={selectedPhase}
              onChange={(e) => setSelectedPhase(e.target.value)}
              className="bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 text-xs rounded-xl p-2 font-medium focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">Toàn bộ lộ trình (T8/2026 - T3/2027)</option>
              <option value="1">Giai đoạn 1: Nền tảng (T8 - T10/2026)</option>
              <option value="2">Giai đoạn 2: Nâng Band (T11/2026 - T1/2027)</option>
              <option value="3">Giai đoạn 3: Thực chiến (T2 - T3/2027)</option>
            </select>
          </div>

          <button
            onClick={() => setShowAddModal(!showAddModal)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 transition shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Thêm Nhiệm Vụ
          </button>
        </div>
      </div>

      {/* Progress Bar & Streak Card */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
            <span>Tiến độ hoàn thành</span>
            <span className="text-[11px] font-normal text-slate-400">({completedCount}/{totalCount} nhiệm vụ)</span>
          </span>
          <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
            {progressPercent}%
          </span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Add Task Modal / Collapse Form */}
      {showAddModal && (
        <form onSubmit={handleAddTask} className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-800 space-y-4">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Plus className="w-4 h-4 text-indigo-600" /> Thêm Nhiệm Vụ Học Tập Mới
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">Thứ / Ngày</label>
              <select
                value={newTaskDay}
                onChange={(e) => setNewTaskDay(e.target.value)}
                className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800"
              >
                <option>Thứ Hai</option>
                <option>Thứ Ba</option>
                <option>Thứ Tư</option>
                <option>Thứ Năm</option>
                <option>Thứ Sáu</option>
                <option>Thứ Bảy</option>
                <option>Chủ Nhật</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">Kỹ năng</label>
              <input
                type="text"
                value={newTaskSkill}
                onChange={(e) => setNewTaskSkill(e.target.value)}
                placeholder="VD: Speaking Part 2"
                className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">Thời lượng</label>
              <input
                type="text"
                value={newTaskTime}
                onChange={(e) => setNewTaskTime(e.target.value)}
                placeholder="90 phút"
                className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">Trang web hỗ trợ</label>
              <input
                type="text"
                value={newTaskSite}
                onChange={(e) => setNewTaskSite(e.target.value)}
                placeholder="IELTS Online Tests"
                className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-4">
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">Nhiệm vụ chi tiết</label>
              <input
                type="text"
                value={newTaskDesc}
                onChange={(e) => setNewTaskDesc(e.target.value)}
                placeholder="VD: Luyện 1 bài Reading Passage 3 + thu âm 2 bài Speaking..."
                required
                className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-xs"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-700"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-5 py-2 rounded-xl"
            >
              Lưu Nhiệm Vụ
            </button>
          </div>
        </form>
      )}

      {/* Schedule Table */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 font-semibold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-3.5 w-12 text-center">Done</th>
                <th className="p-3.5 w-24">Thứ / Ngày</th>
                <th className="p-3.5 w-32">Kỹ năng</th>
                <th className="p-3.5">Nhiệm vụ chi tiết</th>
                <th className="p-3.5 w-36">Web hỗ trợ</th>
                <th className="p-3.5 w-24 text-center">Thời lượng</th>
                <th className="p-3.5 w-44">Ghi chú cá nhân</th>
                <th className="p-3.5 w-12 text-center">Xóa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {filteredTasks.map((item) => (
                <tr
                  key={item.id}
                  className={`transition-colors ${
                    item.completed
                      ? 'bg-emerald-50/40 dark:bg-emerald-950/20 text-slate-500 dark:text-slate-400'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-100'
                  }`}
                >
                  <td className="p-3.5 text-center">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => toggleTask(item.id)}
                      className="w-4 h-4 text-indigo-600 rounded border-slate-300 dark:border-slate-600 focus:ring-indigo-500 cursor-pointer"
                    />
                  </td>

                  <td className="p-3.5 font-bold text-slate-800 dark:text-slate-100">
                    {item.day}
                  </td>

                  <td className="p-3.5">
                    <span className="inline-block px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-slate-100 dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-600">
                      {item.skill}
                    </span>
                  </td>

                  <td className={`p-3.5 leading-relaxed ${item.completed ? 'line-through opacity-70' : ''}`}>
                    {item.task}
                  </td>

                  <td className="p-3.5">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium inline-flex items-center gap-1"
                    >
                      {item.site}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>

                  <td className="p-3.5 text-center font-medium text-slate-500 dark:text-slate-400">
                    {item.time}
                  </td>

                  <td className="p-3.5">
                    <input
                      type="text"
                      value={item.note || ''}
                      onChange={(e) => updateNote(item.id, e.target.value)}
                      placeholder="Thêm ghi chú..."
                      className="w-full text-xs p-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                  </td>

                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => deleteTask(item.id)}
                      className="text-slate-400 hover:text-rose-500 transition p-1"
                      title="Xóa nhiệm vụ"
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
  );
}
