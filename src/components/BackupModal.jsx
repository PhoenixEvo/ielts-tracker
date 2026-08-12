import React, { useState } from 'react';
import { exportAppStateJSON } from '../services/storage';
import { Download, Upload, RefreshCw, X, Check, AlertCircle } from 'lucide-react';

export default function BackupModal({
  isOpen,
  onClose,
  fullState,
  onRestoreData,
  onResetToDefaults
}) {
  const [importStatus, setImportStatus] = useState('');

  if (!isOpen) return null;

  const handleExport = () => {
    exportAppStateJSON(fullState);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed.userProfile || parsed.scheduleTasks || parsed.mockScores) {
          onRestoreData(parsed);
          setImportStatus('Khôi phục dữ liệu thành công!');
          setTimeout(() => {
            setImportStatus('');
            onClose();
          }, 1500);
        } else {
          setImportStatus('File JSON không đúng định dạng!');
        }
      } catch (err) {
        setImportStatus('Lỗi đọc file JSON: ' + err.message);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-6 relative">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <Download className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Sao Lưu & Khôi Phục Dữ Liệu JSON
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Xuất dữ liệu lưu trữ thủ công hoặc chuyển tiếp giữa các thiết bị khác nhau.
          </p>
        </div>

        {importStatus && (
          <div className={`p-3 rounded-2xl text-xs font-semibold flex items-center gap-2 ${
            importStatus.includes('thành công')
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : 'bg-rose-50 text-rose-700 border border-rose-200'
          }`}>
            <AlertCircle className="w-4 h-4" />
            {importStatus}
          </div>
        )}

        <div className="space-y-3 text-xs font-semibold">
          
          {/* Export button */}
          <button
            onClick={handleExport}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-2xl flex items-center justify-center gap-2 transition shadow-sm"
          >
            <Download className="w-4 h-4" /> Tải Xuất File Backup (.JSON)
          </button>

          {/* Import file input */}
          <label className="w-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-650 text-slate-700 dark:text-slate-200 p-3 rounded-2xl flex items-center justify-center gap-2 cursor-pointer transition border border-slate-200 dark:border-slate-600">
            <Upload className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Tải Nhập File Backup JSON (.JSON)</span>
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          <div className="h-px bg-slate-200 dark:bg-slate-700 my-2"></div>

          {/* Reset button */}
          <button
            onClick={() => {
              if (window.confirm("Bạn có chắc muốn khôi phục về dữ liệu mẫu ban đầu? Toàn bộ dữ liệu hiện tại sẽ bị thay thế.")) {
                onResetToDefaults();
                onClose();
              }
            }}
            className="w-full bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 text-rose-600 dark:text-rose-300 p-2.5 rounded-2xl flex items-center justify-center gap-2 transition border border-rose-200 dark:border-rose-900 text-xs font-bold"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Khôi Phục Về Dữ Liệu Mẫu Ban Đầu
          </button>

        </div>

      </div>
    </div>
  );
}
