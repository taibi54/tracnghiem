import React, { useEffect } from 'react';
import { CheckCircle2, XCircle, Clock, Flame, ArrowRight, Lightbulb, Trophy } from 'lucide-react';
import { AnswerOption, Question } from '../types/quiz';
import { soundManager } from '../utils/sound';

interface AnswerFeedbackViewProps {
  question: Question;
  selectedAnswer: AnswerOption | null;
  isCorrect: boolean;
  pointsEarned: number;
  streak: number;
  onNext: () => void;
  isLastQuestion: boolean;
}

const OPTION_COLORS: Record<AnswerOption, { bg: string; shape: string; name: string }> = {
  A: { bg: 'bg-[#e21b3c]', shape: '▲', name: 'Đỏ' },
  B: { bg: 'bg-[#1368ce]', shape: '◆', name: 'Xanh dương' },
  C: { bg: 'bg-[#d89e00]', shape: '●', name: 'Vàng' },
  D: { bg: 'bg-[#26890c]', shape: '◼', name: 'Xanh lá' },
};

export const AnswerFeedbackView: React.FC<AnswerFeedbackViewProps> = ({
  question,
  selectedAnswer,
  isCorrect,
  pointsEarned,
  streak,
  onNext,
  isLastQuestion,
}) => {
  const isTimeout = selectedAnswer === null;

  useEffect(() => {
    if (isCorrect) {
      soundManager.playCorrect();
      if (streak >= 3) {
        setTimeout(() => soundManager.playStreak(), 400);
      }
    } else {
      soundManager.playWrong();
    }
  }, [isCorrect, streak]);

  return (
    <div className="flex-1 w-full max-w-4xl mx-auto flex flex-col justify-between p-4 sm:p-6 gap-6 animate-fadeIn">
      {/* Top Splash Banner */}
      <div
        className={`w-full rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-center gap-3 shadow-2xl transition-all ${
          isCorrect
            ? 'bg-emerald-600/90 border-2 border-emerald-400 text-white shadow-emerald-950/60'
            : isTimeout
            ? 'bg-amber-600/90 border-2 border-amber-400 text-white shadow-amber-950/60'
            : 'bg-rose-600/90 border-2 border-rose-400 text-white shadow-rose-950/60'
        }`}
      >
        <div className="flex items-center gap-2">
          {isCorrect ? (
            <CheckCircle2 className="w-12 h-12 text-emerald-200 animate-bounce" />
          ) : isTimeout ? (
            <Clock className="w-12 h-12 text-amber-200 animate-pulse" />
          ) : (
            <XCircle className="w-12 h-12 text-rose-200 animate-pulse" />
          )}
        </div>

        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          {isCorrect ? 'CHÍNH XÁC!' : isTimeout ? 'HẾT THỜI GIAN!' : 'CHƯA CHÍNH XÁC!'}
        </h2>

        {isCorrect ? (
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-1">
            <span className="text-2xl font-black text-amber-300 bg-black/30 px-4 py-1.5 rounded-2xl shadow-inner">
              +{pointsEarned} pts
            </span>
            {streak > 1 && (
              <span className="flex items-center gap-1.5 text-sm font-bold bg-amber-400 text-slate-950 px-3 py-1 rounded-full shadow-md animate-pulse">
                <Flame className="w-4 h-4 fill-slate-950" /> Chuỗi {streak} câu đúng liên tiếp!
              </span>
            )}
          </div>
        ) : (
          <p className="text-sm sm:text-base font-medium opacity-90 max-w-md">
            {isTimeout
              ? 'Bạn chưa kịp chọn đáp án trước khi đồng hồ đếm ngược kết thúc.'
              : `Bạn đã chọn đáp án ${selectedAnswer}. Đừng nản lòng, hãy xem lời giải chi tiết dưới đây!`}
          </p>
        )}
      </div>

      {/* Answer & Explanation Section */}
      <div className="bg-slate-900/90 border border-purple-700/60 rounded-3xl p-6 sm:p-7 shadow-xl space-y-5">
        {/* Correct answer display */}
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider font-extrabold text-purple-300">
            {question.subject === 'informatics'
              ? 'Đáp án đúng (Chuẩn kiến thức Tin Học 12):'
              : question.subject === 'chemistry'
              ? 'Đáp án đúng (Theo đáp án ở cuối đề cương Hóa):'
              : 'Đáp án đúng (In đậm trong đề thi):'}
          </div>
          <div
            className={`flex items-center gap-4 p-4 rounded-2xl ${
              OPTION_COLORS[question.correctAnswer].bg
            } text-white shadow-lg`}
          >
            <div className="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center font-black text-2xl shrink-0">
              {OPTION_COLORS[question.correctAnswer].shape}
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider opacity-80">
                Đáp án {question.correctAnswer}
              </div>
              <div className="text-lg sm:text-xl font-bold">
                {question.options[question.correctAnswer]}
              </div>
            </div>
          </div>
        </div>

        {/* Reading excerpt context if available */}
        {question.excerpt && (
          <div className="bg-amber-950/30 border border-amber-500/40 rounded-2xl p-4 text-sm text-amber-100 space-y-1">
            <div className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
              Dữ kiện mấu chốt trong bài đọc:
            </div>
            <p className="italic font-medium leading-relaxed">
              "{question.excerpt}"
            </p>
          </div>
        )}

        {/* Detailed Explanation */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 sm:p-5 text-sm text-slate-200 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <Lightbulb className="w-4 h-4 text-emerald-400" />
            {question.subject === 'informatics'
              ? 'Giải thích chi tiết & Kiến thức Tin học trọng tâm:'
              : question.subject === 'chemistry'
              ? 'Giải thích chi tiết & Phương trình / Bài toán Hóa học:'
              : 'Giải thích chi tiết & Ngữ pháp:'}
          </div>
          <p className="leading-relaxed font-sans text-slate-200">
            {question.explanation}
          </p>
        </div>
      </div>

      {/* Action Button: Next Question or Leaderboard */}
      <div className="w-full flex justify-end pt-1">
        <button
          onClick={() => {
            soundManager.playClick();
            onNext();
          }}
          className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-lg tracking-wide uppercase shadow-xl shadow-purple-900/50 flex items-center justify-center gap-3 transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <span>{isLastQuestion ? 'Xem Tổng Kết Điểm Số' : 'Tiếp Tục Bảng Xếp Hạng'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
