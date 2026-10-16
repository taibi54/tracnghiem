import React from 'react';
import { ArrowRight, Trophy, Flame, Sparkles } from 'lucide-react';
import { Player } from '../types/quiz';
import { soundManager } from '../utils/sound';

interface LeaderboardViewProps {
  players: Player[];
  userPlayer: Player;
  onNextQuestion: () => void;
  questionNumber: number;
  totalQuestions: number;
}

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({
  players,
  userPlayer,
  onNextQuestion,
  questionNumber,
  totalQuestions,
}) => {
  // Sort players descending by score
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const userRank = sortedPlayers.findIndex((p) => p.isUser) + 1;

  const handleNext = () => {
    soundManager.playClick();
    onNextQuestion();
  };

  return (
    <div className="flex-1 w-full max-w-3xl mx-auto flex flex-col justify-between p-4 sm:p-6 gap-6 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-900/40 border border-purple-500/30 rounded-full text-xs font-bold text-purple-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          Sau câu {questionNumber} / {totalQuestions}
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-md">
          BẢNG XẾP HẠNG
        </h2>
        <p className="text-xs sm:text-sm text-purple-200">
          Bạn đang xếp thứ <span className="font-extrabold text-amber-400 text-base">#{userRank}</span> trên tổng số {players.length} người chơi
        </p>
      </div>

      {/* Leaderboard Table */}
      <div className="w-full bg-slate-900/90 border border-purple-700/60 rounded-3xl p-4 sm:p-6 shadow-2xl shadow-purple-950/60 space-y-3">
        {sortedPlayers.slice(0, 6).map((player, idx) => {
          const rank = idx + 1;
          const isUser = player.isUser;

          return (
            <div
              key={player.name + idx}
              className={`flex items-center justify-between p-3 sm:p-4 rounded-2xl transition-all duration-300 ${
                isUser
                  ? 'bg-gradient-to-r from-purple-800 to-indigo-800 border-2 border-amber-400 shadow-lg shadow-purple-900/50 scale-[1.02]'
                  : 'bg-slate-800/70 border border-slate-700/60 hover:bg-slate-800'
              }`}
            >
              {/* Rank & Avatar & Name */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm ${
                    rank === 1
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/40'
                      : rank === 2
                      ? 'bg-slate-300 text-slate-950'
                      : rank === 3
                      ? 'bg-amber-700 text-white'
                      : 'bg-slate-700 text-slate-300'
                  }`}
                >
                  {rank}
                </div>

                <div className="text-2xl">{player.avatar}</div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-sm sm:text-base text-white">
                      {player.name}
                    </span>
                    {isUser && (
                      <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full">
                        Bạn
                      </span>
                    )}
                  </div>
                  {player.streak > 1 && (
                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-300">
                      <Flame className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{player.streak} câu liên tiếp</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Score */}
              <div className="text-right">
                <div className="text-base sm:text-xl font-black text-amber-400">
                  {player.score.toLocaleString()}{' '}
                  <span className="text-xs font-semibold text-slate-400">pts</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Next Button */}
      <div className="w-full flex justify-end">
        <button
          onClick={handleNext}
          className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-base sm:text-lg tracking-wide uppercase shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <span>
            {questionNumber >= totalQuestions ? 'Xem Bục Vinh Danh ➔' : 'Câu Hỏi Tiếp Theo ➔'}
          </span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
