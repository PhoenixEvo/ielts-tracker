import React from 'react';
import { prepPhases } from '../data/initialData';
import { analyzeWeaknesses } from '../utils/ieltsCalculator';
import { Target, AlertTriangle, CheckCircle2, Compass, ArrowUpRight, Zap } from 'lucide-react';

export default function PrepTimeline({ mockScores, userProfile }) {
  // Use latest score or fallback to baseline score
  const latestMock = mockScores && mockScores.length > 0 ? mockScores[mockScores.length - 1] : userProfile.baselineBand;
  const weaknesses = analyzeWeaknesses(latestMock);

  return (
    <div className="space-y-6">
      
      {/* 1. Skill-specific Weakness Focus Module */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-850 to-slate-900 text-white p-6 rounded-3xl shadow-lg border border-indigo-700/50">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30 mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>Phân Tích Khoảng Cách Điểm Mục Tiêu (Gap Analysis)</span>
            </div>
            <h2 className="text-xl font-extrabold flex items-center gap-2">
              <Target className="w-6 h-6 text-emerald-400" />
              Chiến Lược Tập Trung Kỹ Năng Yếu (Focus Areas)
            </h2>
            <p className="text-indigo-200 text-xs mt-1">
              Phân tích khoảng cách giữa điểm số hiện tại (Mới nhất) với mốc <strong>7.5 Overall</strong>. Ưu tiên cao nhất cho Speaking & Writing.
            </p>
          </div>
        </div>

        {/* Grid of 4 skills with gap bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {weaknesses.map((item) => {
            const isTopPriority = item.code === 's' || item.code === 'w';
            return (
              <div
                key={item.code}
                className={`p-4 rounded-2xl border transition-all ${
                  isTopPriority
                    ? 'bg-indigo-950/80 border-amber-500/50 shadow-md ring-1 ring-amber-500/30'
                    : 'bg-indigo-950/40 border-indigo-700/40'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-sm text-indigo-100 flex items-center gap-1.5">
                    {item.name}
                    {isTopPriority && (
                      <span className="text-[10px] bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded font-extrabold border border-rose-500/30">
                        Ưu tiên cao
                      </span>
                    )}
                  </span>
                  <span className="text-xs font-bold text-amber-300">
                    Gap: +{item.gap} Band
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-black text-white">{item.score.toFixed(1)}</span>
                  <span className="text-xs text-indigo-300">→ Target 7.5</span>
                </div>

                {/* Progress bar to target */}
                <div className="w-full bg-indigo-900/60 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className={`h-2 rounded-full ${
                      item.score < 6.0 ? 'bg-rose-500' : item.score < 7.0 ? 'bg-amber-400' : 'bg-emerald-400'
                    }`}
                    style={{ width: `${Math.min(100, (item.score / 7.5) * 100)}%` }}
                  ></div>
                </div>

                <p className="text-[11px] text-indigo-200 leading-relaxed bg-indigo-900/40 p-2 rounded-xl border border-indigo-700/30">
                  <Zap className="w-3 h-3 text-yellow-400 inline mr-1" />
                  {item.recommendation}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Visual Prep Roadmap Phases */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Lộ Trình Tổng Thể 4 Giai Đoạn (Aug 2026 - Mar 2027)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Phân bổ mục tiêu nâng band rõ ràng từng thời điểm để đảm bảo đạt mốc 7.5 Overall đúng hạn thi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {prepPhases.map((phase, idx) => {
            const isCurrentPhase = phase.id === 1; // Phase 1 is currently active (Aug 2026)
            return (
              <div
                key={phase.id}
                className={`p-5 rounded-2xl border transition-all ${
                  isCurrentPhase
                    ? 'bg-indigo-50/60 dark:bg-indigo-950/40 border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                    : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700/60'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    isCurrentPhase
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}>
                    Giai đoạn {phase.id}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Goal: {phase.targetOverall.toFixed(1)}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100 mb-1">
                  {phase.title}
                </h3>

                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                  {phase.period}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                  {phase.focus}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
