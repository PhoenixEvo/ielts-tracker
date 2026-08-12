import React, { useState } from 'react';
import { calculateIeltsOverall } from '../utils/ieltsCalculator';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from 'recharts';
import { LineChart as ChartIcon, Plus, Award, Trash2, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MockTestTracker({ mockScores, setMockScores }) {
  const [testDate, setTestDate] = useState(new Date().toISOString().split('T')[0]);
  const [testSource, setTestSource] = useState('');
  const [testType, setTestType] = useState('Full Test');
  const [scoreL, setScoreL] = useState('6.5');
  const [scoreR, setScoreR] = useState('6.0');
  const [scoreW, setScoreW] = useState('6.0');
  const [scoreS, setScoreS] = useState('5.5');
  const [testNotes, setTestNotes] = useState('');

  // Calculated live overall
  const liveOverall = calculateIeltsOverall(scoreL, scoreR, scoreW, scoreS);

  const handleAddScore = (e) => {
    e.preventDefault();
    if (!testSource.trim()) return;

    const numL = parseFloat(scoreL);
    const numR = parseFloat(scoreR);
    const numW = parseFloat(scoreW);
    const numS = parseFloat(scoreS);

    const overallCalculated = calculateIeltsOverall(numL, numR, numW, numS);

    const newEntry = {
      id: Date.now().toString(),
      date: testDate,
      source: testSource,
      testType: testType,
      l: numL,
      r: numR,
      w: numW,
      s: numS,
      overall: overallCalculated,
      notes: testNotes
    };

    setMockScores([...mockScores, newEntry]);

    // Celebrate if overall reaches 7.5+
    if (overallCalculated >= 7.5) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    setTestSource('');
    setTestNotes('');
  };

  const handleDeleteScore = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa điểm thi thử này?")) {
      setMockScores(mockScores.filter(item => item.id !== id));
    }
  };

  // Prepare chart data sorted by date
  const chartData = [...mockScores].sort((a, b) => new Date(a.date) - new Date(b.date)).map(item => ({
    date: item.date,
    Listening: item.l,
    Reading: item.r,
    Writing: item.w,
    Speaking: item.s,
    Overall: item.overall,
    source: item.source
  }));

  return (
    <div className="space-y-6">
      
      {/* Input Score Form & Calculator */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5">
          <div>
            <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <ChartIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Nhật Ký Điểm Thi Thử (Mock Test Score Log)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Nhập điểm số 4 kỹ năng. Điểm Overall được tự động làm tròn theo đúng quy tắc làm tròn chính thức của IELTS.
            </p>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-950/60 px-4 py-2 rounded-2xl border border-indigo-200 dark:border-indigo-800 flex items-center gap-3">
            <span className="text-xs text-indigo-700 dark:text-indigo-300 font-semibold">Tự động làm tròn Overall:</span>
            <span className={`text-xl font-extrabold ${liveOverall >= 7.5 ? 'text-emerald-600 dark:text-emerald-400' : 'text-indigo-600 dark:text-indigo-400'}`}>
              {liveOverall.toFixed(1)}
            </span>
          </div>
        </div>

        <form onSubmit={handleAddScore} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-3 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div className="col-span-2 lg:col-span-3">
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Ngày làm bài</label>
            <input
              type="date"
              value={testDate}
              onChange={(e) => setTestDate(e.target.value)}
              required
              className="w-full p-2 text-xs border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800"
            />
          </div>

          <div className="col-span-2 lg:col-span-4">
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Nguồn đề / Trang web</label>
            <input
              type="text"
              value={testSource}
              onChange={(e) => setTestSource(e.target.value)}
              placeholder="VD: Cambridge 18 Test 2 / IOT Vol 5"
              required
              className="w-full p-2 text-xs border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800"
            />
          </div>

          <div className="col-span-2 lg:col-span-5 grid grid-cols-4 gap-2">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300 mb-1">Listening</label>
              <input
                type="number"
                step="0.5"
                min="0"
                max="9"
                value={scoreL}
                onChange={(e) => setScoreL(e.target.value)}
                required
                className="w-full p-2 text-xs border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-center font-semibold"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300 mb-1">Reading</label>
              <input
                type="number"
                step="0.5"
                min="0"
                max="9"
                value={scoreR}
                onChange={(e) => setScoreR(e.target.value)}
                required
                className="w-full p-2 text-xs border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-center font-semibold"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300 mb-1">Writing</label>
              <input
                type="number"
                step="0.5"
                min="0"
                max="9"
                value={scoreW}
                onChange={(e) => setScoreW(e.target.value)}
                required
                className="w-full p-2 text-xs border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-center font-semibold"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300 mb-1">Speaking</label>
              <input
                type="number"
                step="0.5"
                min="0"
                max="9"
                value={scoreS}
                onChange={(e) => setScoreS(e.target.value)}
                required
                className="w-full p-2 text-xs border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-center font-semibold"
              />
            </div>
          </div>

          <div className="col-span-2 lg:col-span-12 flex justify-end pt-2">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 transition shadow-sm"
            >
              <Plus className="w-4 h-4" /> Thêm Điểm Thi Thử
            </button>
          </div>
        </form>
      </div>

      {/* Progress Chart (Recharts) */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
          <ChartIcon className="w-5 h-5 text-indigo-600" />
          Biểu Đồ Tiến Độ Hướng Tới Band 7.5
        </h3>

        {chartData.length > 0 ? (
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                <YAxis domain={[4.5, 9.0]} ticks={[5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0]} tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    borderColor: '#334155',
                    color: '#fff',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />

                {/* Target Band Reference Line */}
                <ReferenceLine y={7.5} label={{ value: 'Target 7.5', fill: '#10b981', fontSize: 12, fontWeight: 'bold' }} stroke="#10b981" strokeDasharray="5 5" strokeWidth={2} />

                <Line type="monotone" dataKey="Overall" stroke="#6366f1" strokeWidth={3} dot={{ r: 5 }} />
                <Line type="monotone" dataKey="Listening" stroke="#3b82f6" strokeWidth={1.5} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="Reading" stroke="#10b981" strokeWidth={1.5} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="Writing" stroke="#f59e0b" strokeWidth={1.5} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="Speaking" stroke="#ec4899" strokeWidth={1.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="text-center py-10 text-slate-400 text-xs">
            Chưa có bài thi thử nào. Hãy nhập kết quả đầu tiên ở trên!
          </div>
        )}
      </div>

      {/* History Table */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-800 dark:text-white">
          Lịch Sử Bài Thi Thử ({mockScores.length} bài)
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 font-semibold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-3.5">Ngày</th>
                <th className="p-3.5">Nguồn Đề</th>
                <th className="p-3.5 text-center">Listening</th>
                <th className="p-3.5 text-center">Reading</th>
                <th className="p-3.5 text-center">Writing</th>
                <th className="p-3.5 text-center">Speaking</th>
                <th className="p-3.5 text-center font-bold text-indigo-600 dark:text-indigo-400">Overall</th>
                <th className="p-3.5 text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {mockScores.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                  <td className="p-3.5 text-slate-600 dark:text-slate-400 font-medium">{item.date}</td>
                  <td className="p-3.5 font-bold text-slate-800 dark:text-slate-100">{item.source}</td>
                  <td className="p-3.5 text-center font-semibold">{item.l.toFixed(1)}</td>
                  <td className="p-3.5 text-center font-semibold">{item.r.toFixed(1)}</td>
                  <td className="p-3.5 text-center font-semibold">{item.w.toFixed(1)}</td>
                  <td className="p-3.5 text-center font-semibold">{item.s.toFixed(1)}</td>
                  <td className="p-3.5 text-center font-extrabold text-base text-indigo-600 dark:text-indigo-400">
                    {item.overall.toFixed(1)}
                  </td>
                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => handleDeleteScore(item.id)}
                      className="text-rose-500 hover:text-rose-700 transition p-1"
                      title="Xóa điểm"
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
