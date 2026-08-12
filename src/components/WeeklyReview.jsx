import React from 'react';
import { BarChart3, CheckCircle2, Flame, BookOpen, Award, TrendingUp, Calendar, Zap } from 'lucide-react';

export default function WeeklyReview({
  scheduleTasks,
  mockScores,
  vocabList,
  userProfile
}) {
  const totalTasks = scheduleTasks.length;
  const completedTasks = scheduleTasks.filter(t => t.completed).length;
  const taskPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const latestScore = mockScores.length > 0 ? mockScores[mockScores.length - 1] : userProfile.baselineBand;

  const bandDiff = (latestScore.overall - userProfile.baselineBand.overall).toFixed(1);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          Báo Cáo Tổng Kết Tiến Độ Tuần & Tháng (Weekly/Monthly Review)
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Hệ thống tự động tổng hợp mức độ hoàn thành bài học, sự tăng trưởng điểm số và số từ vựng đã tích lũy.
        </p>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Tasks Completion */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-slate-500">Nhiệm Vụ Tuần Này</span>
            <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-800 dark:text-white mb-1">
            {completedTasks} / {totalTasks}
          </div>
          <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">
            {taskPercent}% hoàn thành
          </div>
        </div>

        {/* Card 2: Current Streak */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-slate-500">Chuỗi Ngày Học (Streak)</span>
            <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-300 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-800 dark:text-white mb-1">
            {userProfile.streakCount} Ngày
          </div>
          <div className="text-xs text-amber-600 dark:text-amber-400 font-bold">
            Duy trì liên tục
          </div>
        </div>

        {/* Card 3: Latest Score */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-slate-500">Điểm Mock Test Mới Nhất</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mb-1">
            {latestScore.overall.toFixed(1)} Band
          </div>
          <div className="text-xs text-slate-500">
            {bandDiff >= 0 ? `+${bandDiff}` : bandDiff} so với Baseline (6.0)
          </div>
        </div>

        {/* Card 4: Vocab Mastered */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-slate-500">Từ Vựng & Lỗi Sai</span>
            <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-300 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-800 dark:text-white mb-1">
            {vocabList.length} Từ
          </div>
          <div className="text-xs text-purple-600 dark:text-purple-400 font-bold">
            Lưu trong sổ tay SRS
          </div>
        </div>

      </div>

      {/* Skill Band Comparison Table */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          So Sánh Điểm Thi Thật Đầu Vào (TRF) & Bài Thi Thử Mới Nhất
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="text-xs font-bold text-slate-500 mb-1">Listening</div>
            <div className="text-xl font-black text-slate-800 dark:text-white">
              {userProfile.baselineBand.l} → <span className="text-indigo-600 dark:text-indigo-400">{latestScore.l.toFixed(1)}</span>
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">Goal: 8.0</div>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="text-xs font-bold text-slate-500 mb-1">Reading</div>
            <div className="text-xl font-black text-slate-800 dark:text-white">
              {userProfile.baselineBand.r} → <span className="text-emerald-600 dark:text-emerald-400">{latestScore.r.toFixed(1)}</span>
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">Goal: 8.0</div>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="text-xs font-bold text-slate-500 mb-1">Writing</div>
            <div className="text-xl font-black text-slate-800 dark:text-white">
              {userProfile.baselineBand.w} → <span className="text-amber-600 dark:text-amber-400">{latestScore.w.toFixed(1)}</span>
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">Goal: 7.0</div>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="text-xs font-bold text-slate-500 mb-1">Speaking</div>
            <div className="text-xl font-black text-slate-800 dark:text-white">
              {userProfile.baselineBand.s} → <span className="text-rose-600 dark:text-rose-400">{latestScore.s.toFixed(1)}</span>
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">Goal: 7.0</div>
          </div>
        </div>
      </div>

    </div>
  );
}
