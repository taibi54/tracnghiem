import React from 'react';
import { X, BookOpen, Layers } from 'lucide-react';

interface ReadingPassageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
  excerpt?: string;
}

export const ReadingPassageModal: React.FC<ReadingPassageModalProps> = ({
  isOpen,
  onClose,
  title = 'Bài Đọc Tham Khảo',
  content,
  excerpt
}) => {
  if (!isOpen || !content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-800/90 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-purple-400">Tài liệu bài đọc</span>
              <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/60 rounded-xl transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm md:text-base leading-relaxed text-slate-200">
          {excerpt && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200">
              <div className="flex items-center gap-2 mb-1.5 font-bold text-amber-400 text-xs uppercase tracking-wider">
                <Layers className="w-4 h-4" /> Dữ kiện trọng tâm trong câu hỏi này
              </div>
              <p className="italic font-medium">{excerpt}</p>
            </div>
          )}

          <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 font-sans leading-relaxed whitespace-pre-line text-slate-200 selection:bg-purple-600 selection:text-white">
            {content}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-800/80 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
          <span>Peace International School · Class 12.1</span>
          <button
            onClick={onClose}
            className="px-5 py-2 font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition shadow-lg shadow-purple-600/30 cursor-pointer"
          >
            Đã hiểu, quay lại trả lời
          </button>
        </div>
      </div>
    </div>
  );
};
