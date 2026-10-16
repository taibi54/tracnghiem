import React, { useEffect, useState } from 'react';
import { BookOpen, Clock, AlertCircle } from 'lucide-react';
import { AnswerOption, Question } from '../types/quiz';
import { soundManager } from '../utils/sound';

interface QuestionViewProps {
  question: Question;
  timeLimit: number; // in seconds, 0 = unlimited
  onAnswerSelected: (answer: AnswerOption, timeRemaining: number) => void;
  onOpenPassageModal: () => void;
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  timeLimit,
  onAnswerSelected,
  onOpenPassageModal,
}) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit > 0 ? timeLimit : 999);
  const [hasAnswered, setHasAnswered] = useState(false);

  useEffect(() => {
    setTimeLeft(timeLimit > 0 ? timeLimit : 999);
    setHasAnswered(false);
  }, [question, timeLimit]);

  // Timer countdown
  useEffect(() => {
    if (timeLimit <= 0 || hasAnswered) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setHasAnswered(true);
          onAnswerSelected('A', 0); // Timeout (treated as timeout)
          return 0;
        }

        // Play tick sound every second if < 10 seconds or every 2 seconds
        if (prev <= 10) {
          soundManager.playTick(prev / timeLimit);
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [question, timeLimit, hasAnswered, onAnswerSelected]);

  // Keyboard shortcut listener (1, 2, 3, 4 or A, B, C, D)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (hasAnswered) return;
      const key = e.key.toUpperCase();
      if (key === 'A' || key === '1') handleChoose('A');
      if (key === 'B' || key === '2') handleChoose('B');
      if (key === 'C' || key === '3') handleChoose('C');
      if (key === 'D' || key === '4') handleChoose('D');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasAnswered, timeLeft]);

  const handleChoose = (opt: AnswerOption) => {
    if (hasAnswered) return;
    setHasAnswered(true);
    soundManager.playClick();
    onAnswerSelected(opt, timeLimit > 0 ? timeLeft : 15);
  };

  const timerRatio = timeLimit > 0 ? timeLeft / timeLimit : 1;
  const isTimeCritical = timeLimit > 0 && timeLeft <= 5;

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto flex flex-col justify-between p-3 sm:p-5 gap-4">
      {/* Question Card & Excerpt Card */}
      <div className="w-full flex flex-col gap-3">
        {/* Category header line */}
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-purple-300 px-1">
          <span className="flex items-center gap-1.5 truncate">
            {question.unitTitle && (
              <span className="bg-purple-950/80 text-amber-300 px-2 py-0.5 rounded-lg border border-purple-600/40 shrink-0">
                {question.unitTitle}
              </span>
            )}
            {question.chapter && (
              <span className="bg-teal-950/90 text-teal-300 px-2 py-0.5 rounded-lg border border-teal-600/40 shrink-0">
                {question.chapter}
              </span>
            )}
            <span className="truncate">{question.sectionTitle}</span>
          </span>
          {question.fullPassage && (
            <button
              onClick={onOpenPassageModal}
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 px-3 py-1 rounded-xl transition cursor-pointer text-xs font-bold"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Xem toàn bài đọc</span>
            </button>
          )}
        </div>

        {/* Big Kahoot Question Banner */}
        <div className="bg-slate-900/90 border border-purple-600/40 rounded-3xl p-5 sm:p-7 shadow-xl shadow-purple-950/50 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[120px]">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-indigo-500/10 to-purple-500/5 pointer-events-none" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-relaxed z-10">
            {question.questionText}
          </h2>
        </div>

        {/* Reading Excerpt Card (Requested by user: "ở các câu hỏi của bài đọc thì trích thêm dữ kiện trong bài vào chỗ câu hỏi") */}
        {question.excerpt && (
          <div className="bg-amber-950/40 border-2 border-amber-500/50 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                Dữ kiện trích từ bài đọc để trả lời câu hỏi:
              </span>
              <span className="text-[11px] text-amber-300/80 font-semibold hidden sm:inline">
                {question.passageTitle}
              </span>
            </div>
            <p className="text-amber-100 text-sm sm:text-base italic font-medium leading-relaxed bg-black/20 p-3 rounded-xl border border-amber-500/20">
              "{question.excerpt.replace(/^Dữ kiện (trong bài|đoạn \d+|kết bài)?:?\s*"?/i, '').replace(/"?$/, '')}"
            </p>
          </div>
        )}
      </div>

      {/* Timer & Status Bar */}
      <div className="w-full flex items-center justify-center gap-4 py-1">
        {timeLimit > 0 && (
          <div className="flex items-center gap-3">
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-black text-2xl sm:text-3xl transition-all shadow-xl ${
                isTimeCritical
                  ? 'bg-rose-600 text-white animate-pulse scale-110 shadow-rose-600/50'
                  : timeLeft <= 10
                  ? 'bg-amber-500 text-slate-950 shadow-amber-500/40'
                  : 'bg-purple-600 text-white shadow-purple-600/40'
              }`}
            >
              {timeLeft}
            </div>

            {/* Progress bar line */}
            <div className="w-48 sm:w-80 h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div
                className={`h-full transition-all duration-1000 ease-linear rounded-full ${
                  isTimeCritical ? 'bg-rose-500' : timeLeft <= 10 ? 'bg-amber-400' : 'bg-emerald-400'
                }`}
                style={{ width: `${Math.max(0, timerRatio * 100)}%` }}
              />
            </div>
          </div>
        )}

        {timeLimit === 0 && (
          <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700">
            <Clock className="w-3.5 h-3.5" /> Không giới hạn thời gian (Thong thả trả lời)
          </div>
        )}
      </div>

      {/* 4 Iconic Kahoot Answers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pb-2">
        {/* Option A: Red Triangle */}
        <button
          onClick={() => handleChoose('A')}
          disabled={hasAnswered}
          className="group relative flex items-center p-4 sm:p-5 rounded-2xl bg-[#e21b3c] hover:bg-[#ff2447] active:scale-[0.98] transition-all duration-150 shadow-lg shadow-red-950/60 text-white text-left cursor-pointer border-b-4 border-red-800 disabled:opacity-80"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/20 flex items-center justify-center mr-3 sm:mr-4 shrink-0 font-black text-2xl group-hover:scale-110 transition-transform">
            ▲
          </div>
          <div className="flex-1">
            <div className="text-[11px] font-black uppercase tracking-wider text-red-200/90 mb-0.5">
              Đáp án A
            </div>
            <div className="text-base sm:text-lg font-bold leading-snug">
              {question.options.A}
            </div>
          </div>
        </button>

        {/* Option B: Blue Diamond */}
        <button
          onClick={() => handleChoose('B')}
          disabled={hasAnswered}
          className="group relative flex items-center p-4 sm:p-5 rounded-2xl bg-[#1368ce] hover:bg-[#1b7df6] active:scale-[0.98] transition-all duration-150 shadow-lg shadow-blue-950/60 text-white text-left cursor-pointer border-b-4 border-blue-900 disabled:opacity-80"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/20 flex items-center justify-center mr-3 sm:mr-4 shrink-0 font-black text-2xl group-hover:scale-110 transition-transform">
            ◆
          </div>
          <div className="flex-1">
            <div className="text-[11px] font-black uppercase tracking-wider text-blue-200/90 mb-0.5">
              Đáp án B
            </div>
            <div className="text-base sm:text-lg font-bold leading-snug">
              {question.options.B}
            </div>
          </div>
        </button>

        {/* Option C: Yellow Circle */}
        <button
          onClick={() => handleChoose('C')}
          disabled={hasAnswered}
          className="group relative flex items-center p-4 sm:p-5 rounded-2xl bg-[#d89e00] hover:bg-[#f5b300] active:scale-[0.98] transition-all duration-150 shadow-lg shadow-amber-950/60 text-white text-left cursor-pointer border-b-4 border-amber-800 disabled:opacity-80"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/20 flex items-center justify-center mr-3 sm:mr-4 shrink-0 font-black text-2xl group-hover:scale-110 transition-transform">
            ●
          </div>
          <div className="flex-1">
            <div className="text-[11px] font-black uppercase tracking-wider text-amber-100/90 mb-0.5">
              Đáp án C
            </div>
            <div className="text-base sm:text-lg font-bold leading-snug">
              {question.options.C}
            </div>
          </div>
        </button>

        {/* Option D: Green Square */}
        <button
          onClick={() => handleChoose('D')}
          disabled={hasAnswered}
          className="group relative flex items-center p-4 sm:p-5 rounded-2xl bg-[#26890c] hover:bg-[#2fa80f] active:scale-[0.98] transition-all duration-150 shadow-lg shadow-emerald-950/60 text-white text-left cursor-pointer border-b-4 border-green-900 disabled:opacity-80"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/20 flex items-center justify-center mr-3 sm:mr-4 shrink-0 font-black text-2xl group-hover:scale-110 transition-transform">
            ◼
          </div>
          <div className="flex-1">
            <div className="text-[11px] font-black uppercase tracking-wider text-emerald-200/90 mb-0.5">
              Đáp án D
            </div>
            <div className="text-base sm:text-lg font-bold leading-snug">
              {question.options.D}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
