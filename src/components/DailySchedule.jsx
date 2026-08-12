import React, { useState } from 'react';
import { CheckSquare, Calendar, Clock, ExternalLink, Plus, Flame, ChevronDown, ChevronUp, Trash2, CheckCircle2, ListPlus } from 'lucide-react';

export default function DailySchedule({
  scheduleTasks,
  setScheduleTasks,
  userProfile,
  setUserProfile
}) {
  const [selectedPhase, setSelectedPhase] = useState('all');
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [expandedDays, setExpandedDays] = useState({});

  // Subtask addition form state per day
  const [newSubtaskText, setNewSubtaskText] = useState({});
  const [newSubtaskDuration, setNewSubtaskDuration] = useState({});
  const [addingSubtaskDayId, setAddingSubtaskDayId] = useState(null);

  // Available weeks
  const availableWeeks = Array.from(new Set(scheduleTasks.map(t => t.weekNumber || 1))).sort((a, b) => a - b);

  // Filter tasks by Phase and Week
  const weekTasks = scheduleTasks.filter(task => {
    const matchesPhase = selectedPhase === 'all' || task.phase === parseInt(selectedPhase, 10);
    const matchesWeek = (task.weekNumber || 1) === parseInt(selectedWeek, 10);
    return matchesPhase && matchesWeek;
  });

  // Calculate total subtasks across current week
  let totalSubtasks = 0;
  let completedSubtasks = 0;

  weekTasks.forEach(dayTask => {
    const subtasks = dayTask.subtasks || [];
    totalSubtasks += subtasks.length;
    completedSubtasks += subtasks.filter(st => st.completed).length;
  });

  const weekProgressPercent = totalSubtasks > 0 ? Math.round((completedSubtasks / totalSubtasks) * 100) : 0;

  // Toggle individual sub-task checkbox
  const toggleSubtask = (dayId, subtaskId) => {
    const updated = scheduleTasks.map(dayTask => {
      if (dayTask.id === dayId) {
        const updatedSubtasks = (dayTask.subtasks || []).map(st => {
          if (st.id === subtaskId) {
            return { ...st, completed: !st.completed };
          }
          return st;
        });

        // Day is completed if all subtasks are completed
        const allCompleted = updatedSubtasks.length > 0 && updatedSubtasks.every(st => st.completed);

        return {
          ...dayTask,
          subtasks: updatedSubtasks,
          completed: allCompleted
        };
      }
      return dayTask;
    });

    setScheduleTasks(updated);

    // Update streak counter
    const today = new Date().toISOString().split('T')[0];
    if (userProfile.lastActiveDate !== today) {
      setUserProfile(prev => ({
        ...prev,
        streakCount: prev.streakCount + 1,
        lastActiveDate: today
      }));
    }
  };

  // Add new sub-task to a day
  const handleAddSubtask = (dayId) => {
    const text = newSubtaskText[dayId];
    if (!text || !text.trim()) return;

    const duration = newSubtaskDuration[dayId] || "30p";

    const updated = scheduleTasks.map(dayTask => {
      if (dayTask.id === dayId) {
        const newSt = {
          id: `st-${Date.now()}`,
          text: text.trim(),
          duration: duration,
          skill: dayTask.skill,
          completed: false
        };
        return {
          ...dayTask,
          subtasks: [...(dayTask.subtasks || []), newSt]
        };
      }
      return dayTask;
    });

    setScheduleTasks(updated);
    setNewSubtaskText({ ...newSubtaskText, [dayId]: '' });
    setAddingSubtaskDayId(null);
  };

  // Delete a sub-task
  const handleDeleteSubtask = (dayId, subtaskId) => {
    const updated = scheduleTasks.map(dayTask => {
      if (dayTask.id === dayId) {
        return {
          ...dayTask,
          subtasks: (dayTask.subtasks || []).filter(st => st.id !== subtaskId)
        };
      }
      return dayTask;
    });
    setScheduleTasks(updated);
  };

  // Save personal note for day
  const updateDayNote = (dayId, noteVal) => {
    const updated = scheduleTasks.map(dayTask => {
      if (dayTask.id === dayId) {
        return { ...dayTask, note: noteVal };
      }
      return dayTask;
    });
    setScheduleTasks(updated);
  };

  // Expand/collapse day card
  const toggleExpandDay = (dayId) => {
    setExpandedDays(prev => ({ ...prev, [dayId]: !prev[dayId] }));
  };

  return (
    <div className="space-y-6">
      
      {/* Week & Phase Selector Header */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Lịch Học & Sub-Tasks Chi Tiết Từng Ngày
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Chia nhỏ nhiệm vụ từng ngày thành các **Sub-Tasks** cụ thể (bấm giờ, làm đề, sửa câu sai, nạp từ vựng).
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          
          {/* Phase Select */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <span>Giai đoạn:</span>
            <select
              value={selectedPhase}
              onChange={(e) => setSelectedPhase(e.target.value)}
              className="bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 text-xs rounded-xl p-2 font-medium focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">Tất cả các Giai Đoạn</option>
              <option value="1">Giai đoạn 1: Nền tảng (T8 - T10/2026)</option>
              <option value="2">Giai đoạn 2: Nâng Band (T11/2026 - T1/2027)</option>
              <option value="3">Giai đoạn 3: Thực chiến (T2 - T3/2027)</option>
            </select>
          </div>

          {/* Week Select */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <span>Tuần:</span>
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              className="bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs rounded-xl p-2 font-bold focus:ring-2 focus:ring-indigo-500"
            >
              {availableWeeks.map(w => (
                <option key={w} value={w}>
                  Tuần {w} {w === 1 ? '(12/08 - 18/08)' : w === 2 ? '(19/08 - 25/08)' : ''}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* Weekly Title & Subtask Progress Bar */}
      <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-6 rounded-3xl shadow-md border border-indigo-800">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-extrabold bg-indigo-500/30 text-indigo-200 px-3 py-1 rounded-full border border-indigo-400/30 mb-2 inline-block">
              {weekTasks[0]?.weekTitle || `Tuần ${selectedWeek}`}
            </span>
            <h3 className="text-xl font-extrabold text-white">
              Tiến Độ Hoàn Thành Sub-Tasks Tuần {selectedWeek}
            </h3>
          </div>

          <div className="flex items-center gap-2 bg-indigo-950/80 px-4 py-2 rounded-2xl border border-indigo-700/50">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-bold text-white">
              {completedSubtasks} / {totalSubtasks} Sub-tasks
            </span>
            <span className="text-sm font-extrabold text-emerald-400">
              ({weekProgressPercent}%)
            </span>
          </div>
        </div>

        <div className="w-full bg-indigo-950 rounded-full h-3 overflow-hidden border border-indigo-700/50">
          <div
            className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-3 rounded-full transition-all duration-500"
            style={{ width: `${weekProgressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Days List with Expandable Cards & Sub-tasks */}
      <div className="space-y-4">
        {weekTasks.map((dayTask) => {
          const subtasks = dayTask.subtasks || [];
          const dayCompletedCount = subtasks.filter(st => st.completed).length;
          const dayTotalCount = subtasks.length;
          const isAllDone = dayTotalCount > 0 && dayCompletedCount === dayTotalCount;
          const isCollapsed = expandedDays[dayTask.id] === true;

          return (
            <div
              key={dayTask.id}
              className={`bg-white dark:bg-slate-800 rounded-3xl border transition-all shadow-sm ${
                isAllDone
                  ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/20 dark:bg-emerald-950/10'
                  : 'border-slate-200 dark:border-slate-700'
              }`}
            >
              {/* Day Header */}
              <div className="p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm ${
                    isAllDone
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300'
                      : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300'
                  }`}>
                    {dayTask.day.slice(0, 3)}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-base text-slate-800 dark:text-white">
                        {dayTask.day} {dayTask.dateStr && `(${dayTask.dateStr})`}
                      </h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-600">
                        {dayTask.skill}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Tiến độ ngày: <span className="font-bold text-indigo-600 dark:text-indigo-400">{dayCompletedCount}/{dayTotalCount} Sub-tasks</span> hoàn thành
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                  {dayTask.site && (
                    <a
                      href={dayTask.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800"
                    >
                      {dayTask.site} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <button
                    onClick={() => toggleExpandDay(dayTask.id)}
                    className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                    title={isCollapsed ? "Mở rộng Sub-tasks" : "Thu gọn"}
                  >
                    {isCollapsed ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
                  </button>
                </div>

              </div>

              {/* Sub-tasks Section */}
              {!isCollapsed && (
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-700/60 space-y-3">
                  
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center justify-between">
                    <span>Nhiệm vụ nhỏ (Sub-tasks) cần thực hiện:</span>
                    <button
                      onClick={() => setAddingSubtaskDayId(addingSubtaskDayId === dayTask.id ? null : dayTask.id)}
                      className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <Plus className="w-3.5 h-3.5" /> Thêm Sub-task
                    </button>
                  </div>

                  {/* Add Sub-task Inline Form */}
                  {addingSubtaskDayId === dayTask.id && (
                    <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-2xl border border-indigo-200 dark:border-indigo-800 flex flex-col sm:flex-row items-center gap-2 animate-fadeIn">
                      <input
                        type="text"
                        placeholder="VD: Reading: Phân tích 5 câu sai Passage 2..."
                        value={newSubtaskText[dayTask.id] || ''}
                        onChange={(e) => setNewSubtaskText({ ...newSubtaskText, [dayTask.id]: e.target.value })}
                        className="w-full text-xs p-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl"
                      />
                      <input
                        type="text"
                        placeholder="Thời lượng (VD: 30p)"
                        value={newSubtaskDuration[dayTask.id] || '30p'}
                        onChange={(e) => setNewSubtaskDuration({ ...newSubtaskDuration, [dayTask.id]: e.target.value })}
                        className="w-full sm:w-28 text-xs p-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl"
                      />
                      <button
                        onClick={() => handleAddSubtask(dayTask.id)}
                        className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-4 py-2 rounded-xl whitespace-nowrap"
                      >
                        Thêm
                      </button>
                    </div>
                  )}

                  {/* List of Sub-tasks */}
                  <div className="space-y-2">
                    {subtasks.map((st) => (
                      <div
                        key={st.id}
                        className={`p-3 rounded-2xl border transition-colors flex items-start gap-3 ${
                          st.completed
                            ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60 text-slate-500 dark:text-slate-400'
                            : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={st.completed}
                          onChange={() => toggleSubtask(dayTask.id, st.id)}
                          className="mt-0.5 w-4 h-4 text-indigo-600 rounded border-slate-300 dark:border-slate-600 focus:ring-indigo-500 cursor-pointer"
                        />

                        <div className="flex-1 text-xs leading-relaxed">
                          <span className={`font-semibold ${st.completed ? 'line-through opacity-70' : ''}`}>
                            {st.text}
                          </span>
                        </div>

                        {st.duration && (
                          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
                            {st.duration}
                          </span>
                        )}

                        <button
                          onClick={() => handleDeleteSubtask(dayTask.id, st.id)}
                          className="text-slate-400 hover:text-rose-500 transition p-0.5"
                          title="Xóa sub-task"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Personal Day Note */}
                  <div className="pt-2">
                    <input
                      type="text"
                      value={dayTask.note || ''}
                      onChange={(e) => updateDayNote(dayTask.id, e.target.value)}
                      placeholder="Thêm ghi chú bài học ngày hôm nay (VD: Thuộc 10 từ vựng C1, làm sai câu 15 Reading...)"
                      className="w-full text-xs p-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
