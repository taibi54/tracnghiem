import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, RotateCcw, BookOpen, CheckCircle, XCircle, Award, Sparkles, ChevronDown, ChevronUp, Shuffle } from 'lucide-react';
import { Player, Question } from '../types/quiz';
import { soundManager } from '../utils/sound';

interface UserAnswerLog {
  question: Question;
  selectedOption: string | null;
  isCorrect: boolean;
  points: number;
}

interface PodiumViewProps {
  players: Player[];
  userPlayer: Player;
  userLogs: UserAnswerLog[];
  onPlayAgain: () => void;
  onPlayAgainShuffled: () => void;
  onOpenStudyGuide: () => void;
}

export const PodiumView: React.FC<PodiumViewProps> = ({
  players,
  userPlayer,
  userLogs,
  onPlayAgain,
  onPlayAgainShuffled,
  onOpenStudyGuide,
}) => {
  const [showReview, setShowReview] = useState(false);

  // Sort players for podium
  const sorted = [...players].sort((a, b) => b.score - a.score);
  const first = sorted[0];
  const second = sorted[1];
  const third = sorted[2];
  const userRank = sorted.findIndex((p) => p.isUser) + 1;

  useEffect(() => {
    soundManager.playPodium();

    // Trigger confetti fireworks
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const interval: any = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }
      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const totalQuestions = userLogs.length;
  const correctCount = userLogs.filter((l) => l.isCorrect).length;
  const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return (
    <div className="flex-1 w-full max-w-4xl mx-auto flex flex-col items-center justify-between p-4 sm:p-6 gap-8 animate-fadeIn text-white">
      {/* Title */}
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
          <Sparkles className="w-3.5 h-3.5" />
          Tổng kết chung cuộc
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-lg">
          BỤC VINH DANH <span className="text-amber-400">!</span>
        </h1>
        <p className="text-sm sm:text-base text-purple-200">
          Chúc mừng các bạn học sinh Lớp 12.1 đã hoàn thành xuất sắc thử thách!
        </p>
      </div>

      {/* 3-Step Podium */}
      <div className="w-full max-w-xl flex items-end justify-center gap-3 sm:gap-6 pt-12 pb-4">
        {/* 2nd Place */}
        {second && (
          <div className="flex-1 flex flex-col items-center animate-slideUp" style={{ animationDelay: '200ms' }}>
            <div className="text-2xl sm:text-3xl mb-1">{second.avatar}</div>
            <div className="text-xs sm:text-sm font-black text-slate-200 truncate max-w-[90px] sm:max-w-[120px] text-center">
              {second.name}
            </div>
            <div className="text-[11px] font-bold text-amber-300 mb-2">
              {second.score.toLocaleString()} pts
            </div>
            <div className="w-full h-32 sm:h-40 bg-gradient-to-t from-slate-600 to-slate-400 rounded-t-2xl flex flex-col items-center justify-start pt-3 shadow-xl border-t-2 border-slate-300 text-slate-950 font-black text-2xl sm:text-3xl">
              2
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800">Bạc</span>
            </div>
          </div>
        )}

        {/* 1st Place */}
        {first && (
          <div className="flex-1 flex flex-col items-center z-10 animate-slideUp">
            <div className="text-3xl sm:text-4xl mb-1 filter drop-shadow">{first.avatar}</div>
            <div className="text-xs sm:text-sm font-black text-white truncate max-w-[100px] sm:max-w-[140px] text-center">
              {first.name}
            </div>
            <div className="text-xs font-black text-amber-400 mb-2">
              {first.score.toLocaleString()} pts
            </div>
            <div className="w-full h-44 sm:h-56 bg-gradient-to-t from-amber-600 via-amber-500 to-yellow-300 rounded-t-2xl flex flex-col items-center justify-start pt-3 shadow-2xl border-t-4 border-amber-200 text-slate-950 font-black text-3xl sm:text-4xl relative overflow-hidden">
              <Trophy className="w-8 h-8 text-amber-900 mb-1" />
              1
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-950">Vàng</span>
            </div>
          </div>
        )}

        {/* 3rd Place */}
        {third && (
          <div className="flex-1 flex flex-col items-center animate-slideUp" style={{ animationDelay: '400ms' }}>
            <div className="text-2xl sm:text-3xl mb-1">{third.avatar}</div>
            <div className="text-xs sm:text-sm font-black text-slate-300 truncate max-w-[90px] sm:max-w-[120px] text-center">
              {third.name}
            </div>
            <div className="text-[11px] font-bold text-amber-300 mb-2">
              {third.score.toLocaleString()} pts
            </div>
            <div className="w-full h-24 sm:h-32 bg-gradient-to-t from-amber-900 to-amber-700 rounded-t-2xl flex flex-col items-center justify-start pt-3 shadow-xl border-t-2 border-amber-500 text-amber-100 font-black text-2xl sm:text-3xl">
              3
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200">Đồng</span>
            </div>
          </div>
        )}
      </div>

      {/* User Performance Stats Card */}
      <div className="w-full bg-slate-900/90 border border-purple-700/60 rounded-3xl p-6 shadow-2xl space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-purple-800/40">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{userPlayer.avatar}</div>
            <div>
              <div className="text-xs text-purple-300 font-bold uppercase tracking-wider">Kết quả của bạn</div>
              <h3 className="text-lg font-black text-white">{userPlayer.name}</h3>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-purple-950/80 px-4 py-2 rounded-2xl border border-purple-600/50">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold text-slate-200">Xếp hạng:</span>
            <span className="text-lg font-black text-amber-400">#{userRank}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-2xl bg-slate-800/70 border border-slate-700">
            <div className="text-xs text-slate-400 font-semibold">Điểm số</div>
            <div className="text-xl sm:text-2xl font-black text-amber-400">{userPlayer.score.toLocaleString()}</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-800/70 border border-slate-700">
            <div className="text-xs text-slate-400 font-semibold">Số câu đúng</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400">{correctCount} / {totalQuestions}</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-800/70 border border-slate-700">
            <div className="text-xs text-slate-400 font-semibold">Tỷ lệ chính xác</div>
            <div className="text-xl sm:text-2xl font-black text-cyan-400">{accuracy}%</div>
          </div>
        </div>

        {/* Toggle Question Review */}
        <button
          onClick={() => setShowReview(!showReview)}
          className="w-full flex items-center justify-between p-3 rounded-xl bg-purple-950/40 hover:bg-purple-950/70 border border-purple-700/40 text-xs sm:text-sm font-bold text-purple-200 transition cursor-pointer"
        >
          <span>Xem lại toàn bộ câu hỏi và đáp án vừa làm ({userLogs.length} câu)</span>
          {showReview ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showReview && (
          <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1 animate-fadeIn">
            {userLogs.map((log, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl border ${
                  log.isCorrect
                    ? 'bg-emerald-950/20 border-emerald-500/40'
                    : 'bg-rose-950/20 border-rose-500/40'
                } space-y-2 text-xs sm:text-sm`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-white flex items-center gap-1.5">
                    {log.isCorrect ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    )}
                    Câu {index + 1}: {log.question.questionText}
                  </span>
                  <span className="font-bold text-amber-300">+{log.points} pts</span>
                </div>

                {log.question.excerpt && (
                  <div className="bg-amber-950/40 border border-amber-500/30 p-2.5 rounded-xl text-amber-200 italic text-xs">
                    "{log.question.excerpt}"
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2 rounded-lg bg-black/30">
                    <span className="text-slate-400">Bạn đã chọn: </span>
                    <span className={log.isCorrect ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                      {log.selectedOption || 'Hết giờ (Chưa chọn)'}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/30">
                    <span className="text-slate-400">
                      {log.question.subject === 'informatics'
                        ? 'Đáp án đúng (Chuẩn Tin Học): '
                        : log.question.subject === 'chemistry'
                        ? 'Đáp án đúng (Theo đáp án): '
                        : 'Đáp án đúng (In đậm): '}
                    </span>
                    <span className="text-emerald-400 font-bold">
                      {log.question.correctAnswer} - {log.question.options[log.question.correctAnswer]}
                    </span>
                  </div>
                </div>

                <div className="text-slate-300 text-[11px] leading-relaxed pt-1 border-t border-slate-700/50">
                  <span className="font-bold text-purple-300">Giải thích: </span>
                  {log.question.explanation}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Navigation */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          onClick={() => {
            soundManager.playClick();
            onPlayAgain();
          }}
          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm sm:text-base tracking-wide uppercase transition shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
        >
          <RotateCcw className="w-5 h-5" />
          Chơi lại vòng mới
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            onPlayAgainShuffled();
          }}
          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-sm sm:text-base tracking-wide uppercase transition shadow-xl shadow-purple-900/30 flex items-center justify-center gap-2 cursor-pointer border border-purple-400/40"
        >
          <Shuffle className="w-5 h-5 text-amber-300" />
          Chơi lại & Trộn câu hỏi
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            onOpenStudyGuide();
          }}
          className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-purple-950/60 hover:bg-purple-900 border border-purple-500/40 text-purple-200 font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          Xem ngân hàng câu hỏi & Lời giải
        </button>
      </div>
    </div>
  );
};
