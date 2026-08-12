import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PrepTimeline from './components/PrepTimeline';
import DailySchedule from './components/DailySchedule';
import MockTestTracker from './components/MockTestTracker';
import VocabSRS from './components/VocabSRS';
import IELTSChecklists from './components/IELTSChecklists';
import ResourcesDirectory from './components/ResourcesDirectory';
import WeeklyReview from './components/WeeklyReview';
import BackupModal from './components/BackupModal';

import { loadAppState, saveAppState } from './services/storage';
import {
  initialUserProfile,
  defaultScheduleTasks,
  initialMockScores,
  initialVocabList,
  initialResources,
  initialChecklists
} from './data/initialData';

import {
  CalendarCheck,
  Compass,
  LineChart as ChartIcon,
  BookOpen,
  Globe,
  ListChecks,
  BarChart3,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('ielts_theme') === 'dark';
  });

  const [isLoading, setIsLoading] = useState(true);
  const [syncMode, setSyncMode] = useState('local');
  const [isBackupModalOpen, setIsBackupModalOpen] = useState(false);

  // App State
  const [userProfile, setUserProfile] = useState(initialUserProfile);
  const [scheduleTasks, setScheduleTasks] = useState(defaultScheduleTasks);
  const [mockScores, setMockScores] = useState(initialMockScores);
  const [vocabList, setVocabList] = useState(initialVocabList);
  const [resources, setResources] = useState(initialResources);
  const [checklists, setChecklists] = useState(initialChecklists);

  // Handle dark mode class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ielts_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ielts_theme', 'light');
    }
  }, [darkMode]);

  // Load state on mount
  useEffect(() => {
    async function initData() {
      try {
        const data = await loadAppState();
        setUserProfile(data.userProfile);
        setScheduleTasks(data.scheduleTasks);
        setMockScores(data.mockScores);
        setVocabList(data.vocabList);
        setResources(data.resources);
        setChecklists(data.checklists);
        setSyncMode(data.syncMode);
      } catch (err) {
        console.error('State load error:', err);
      } finally {
        setIsLoading(false);
      }
    }
    initData();
  }, []);

  // Save state on mutations
  useEffect(() => {
    if (!isLoading) {
      saveAppState({
        userProfile,
        scheduleTasks,
        mockScores,
        vocabList,
        resources,
        checklists
      });
    }
  }, [userProfile, scheduleTasks, mockScores, vocabList, resources, checklists, isLoading]);

  // Restore imported data
  const handleRestoreData = (parsed) => {
    if (parsed.userProfile) setUserProfile(parsed.userProfile);
    if (parsed.scheduleTasks) setScheduleTasks(parsed.scheduleTasks);
    if (parsed.mockScores) setMockScores(parsed.mockScores);
    if (parsed.vocabList) setVocabList(parsed.vocabList);
    if (parsed.resources) setResources(parsed.resources);
    if (parsed.checklists) setChecklists(parsed.checklists);
  };

  // Reset to default sample data
  const handleResetToDefaults = () => {
    setUserProfile(initialUserProfile);
    setScheduleTasks(defaultScheduleTasks);
    setMockScores(initialMockScores);
    setVocabList(initialVocabList);
    setResources(initialResources);
    setChecklists(initialChecklists);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Đang tải dữ liệu IELTS 7.5 Tracker...
          </span>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', label: 'Lộ Trình & Target Gap', icon: Compass },
    { id: 'schedule', label: 'Lịch Học & Checklist', icon: CalendarCheck },
    { id: 'mocktests', label: 'Mock Test Log & Charts', icon: ChartIcon },
    { id: 'vocab', label: 'Từ Vựng SRS Flashcards', icon: BookOpen },
    { id: 'checklists', label: 'Template & Self-Review', icon: ListChecks },
    { id: 'resources', label: 'Kho Web Luyện Đề', icon: Globe },
    { id: 'review', label: 'Báo Cáo Tổng Kết', icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* Navbar Header */}
      <Navbar
        userProfile={userProfile}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        syncMode={syncMode}
        onOpenBackupModal={() => setIsBackupModalOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Navigation Tabs */}
        <div className="flex space-x-1 sm:space-x-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800 custom-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-semibold text-xs sm:text-sm rounded-2xl flex items-center gap-2 whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="animate-fadeIn">
          {activeTab === 'dashboard' && (
            <PrepTimeline
              mockScores={mockScores}
              userProfile={userProfile}
            />
          )}

          {activeTab === 'schedule' && (
            <DailySchedule
              scheduleTasks={scheduleTasks}
              setScheduleTasks={setScheduleTasks}
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
          )}

          {activeTab === 'mocktests' && (
            <MockTestTracker
              mockScores={mockScores}
              setMockScores={setMockScores}
            />
          )}

          {activeTab === 'vocab' && (
            <VocabSRS
              vocabList={vocabList}
              setVocabList={setVocabList}
            />
          )}

          {activeTab === 'checklists' && (
            <IELTSChecklists
              checklists={checklists}
              setChecklists={setChecklists}
            />
          )}

          {activeTab === 'resources' && (
            <ResourcesDirectory
              resources={resources}
              setResources={setResources}
            />
          )}

          {activeTab === 'review' && (
            <WeeklyReview
              scheduleTasks={scheduleTasks}
              mockScores={mockScores}
              vocabList={vocabList}
              userProfile={userProfile}
            />
          )}
        </div>

      </main>

      {/* JSON Backup & Restore Modal */}
      <BackupModal
        isOpen={isBackupModalOpen}
        onClose={() => setIsBackupModalOpen(false)}
        fullState={{
          userProfile,
          scheduleTasks,
          mockScores,
          vocabList,
          resources,
          checklists
        }}
        onRestoreData={handleRestoreData}
        onResetToDefaults={handleResetToDefaults}
      />

    </div>
  );
}
