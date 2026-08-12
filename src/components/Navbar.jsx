import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Calendar,
  Flame,
  Moon,
  Sun,
  Cloud,
  HardDrive,
  Download,
  Upload,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function Navbar({
  userProfile,
  darkMode,
  setDarkMode,
  syncMode,
  onOpenBackupModal
}) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const calculateCountdown = () => {
      const examDate = new Date(userProfile.examDate || '2027-03-31T00:00:00');
      const now = new Date();
      const diff = examDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / 1000 / 60) % 60);
        setTimeLeft({ days, hours, mins });
      } else {
        setTimeLeft({ days: 0, hours: 0, mins: 0 });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 60000);
    return () => clearInterval(timer);
  }, [userProfile.examDate]);

  return (
    <header className="bg-indigo-700 dark:bg-indigo-950 text-white shadow-xl sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Title & Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-indigo-600 dark:bg-indigo-800 flex items-center justify-center shadow-inner border border-indigo-400/30">
            <GraduationCap className="w-7 h-7 text-yellow-300" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight flex items-center gap-2">
              IELTS 7.5 Study Tracker
              <span className="text-xs bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-full border border-yellow-400/30 font-medium">
                Band 6.0 → 7.5
              </span>
            </h1>
            <p className="text-indigo-200 dark:text-indigo-300 text-xs mt-0.5">
              Lộ trình bứt phá Band cá nhân (T8/2026 - T3/2027) • {userProfile.name}
            </p>
          </div>
        </div>

        {/* Middle Stats Bar: Baseline vs Target & Exam Countdown */}
        <div className="flex flex-wrap items-center justify-center gap-3 bg-indigo-800/80 dark:bg-indigo-900/80 px-4 py-2 rounded-2xl border border-indigo-500/30 shadow-sm text-xs sm:text-sm">
          
          {/* Current Band */}
          <div className="text-center px-1">
            <div className="text-[10px] text-indigo-300 uppercase font-semibold">Hiện tại</div>
            <div className="text-base font-bold text-yellow-400">{userProfile.baselineBand.overall.toFixed(1)}</div>
          </div>

          <ArrowRight className="w-4 h-4 text-indigo-300 hidden sm:block" />

          {/* Target Band */}
          <div className="text-center px-1">
            <div className="text-[10px] text-indigo-300 uppercase font-semibold">Mục tiêu</div>
            <div className="text-base font-bold text-emerald-400">{userProfile.targetBand.toFixed(1)}</div>
          </div>

          <div className="h-6 w-px bg-indigo-600/50 hidden sm:block"></div>

          {/* Countdown timer */}
          <div className="flex items-center gap-2 text-indigo-100 bg-indigo-900/60 dark:bg-slate-900/60 px-3 py-1 rounded-xl">
            <Calendar className="w-4 h-4 text-yellow-400" />
            <div>
              <div className="text-[10px] text-indigo-300">Hạn Thi: 31/03/2027</div>
              <div className="font-bold text-xs text-white">
                Còn <span className="text-yellow-300 font-extrabold">{timeLeft.days}</span> ngày ({timeLeft.hours}h)
              </div>
            </div>
          </div>

          {/* Streak Counter */}
          <div className="flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-xl border border-amber-500/30 font-bold text-xs">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
            <span>{userProfile.streakCount} ngày liên tiếp</span>
          </div>

        </div>

        {/* Action Controls: Theme, Sync Status, Backup */}
        <div className="flex items-center gap-2">
          
          {/* Cloud Sync Status */}
          <div
            className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-xl font-medium border ${
              syncMode === 'cloud'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                : 'bg-slate-800/60 text-slate-300 border-slate-700'
            }`}
            title={syncMode === 'cloud' ? 'Data synced to Firebase cloud' : 'Offline / LocalStorage mode active'}
          >
            {syncMode === 'cloud' ? (
              <>
                <Cloud className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden lg:inline">Firebase Cloud</span>
              </>
            ) : (
              <>
                <HardDrive className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden lg:inline">Local Storage</span>
              </>
            )}
          </div>

          {/* Backup / Export JSON */}
          <button
            onClick={onOpenBackupModal}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-indigo-400/40 transition shadow-sm"
            title="Sao lưu hoặc khôi phục dữ liệu JSON"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Backup</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-indigo-800 hover:bg-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-700 text-white transition shadow-sm border border-indigo-500/30"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-4 h-4 text-yellow-300" /> : <Moon className="w-4 h-4 text-indigo-200" />}
          </button>

        </div>

      </div>
    </header>
  );
}
