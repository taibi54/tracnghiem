import React from 'react';
import { Volume2, VolumeX, Flame, Trophy, Home, Shuffle } from 'lucide-react';
import { soundManager } from '../utils/sound';

interface KahootHeaderProps {
  currentIndex: number;
  totalQuestions: number;
  score: number;
  streak: number;
  soundEnabled: boolean;
  isShuffled?: boolean;
  onToggleSound: () => void;
  onExitGame: () => void;
}

export const KahootHeader: React.FC<KahootHeaderProps> = ({
  currentIndex,
  totalQuestions,
  score,
  streak,
  soundEnabled,
  isShuffled = false,
  onToggleSound,
  onExitGame,
}) => {
  return (
    <header className="w-full bg-slate-900/90 backdrop-blur-md border-b border-purple-900/50 px-4 py-3 flex items-center justify-between z-30 shadow-md">
      {/* Left: Exit + Question counter */}
      <div className="flex items-center gap-3">
        <button
          onClick={onExitGame}
          title="Quay lại sảnh"
          className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
        >
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline">Thoát</span>
        </button>

        <div className="bg-purple-950/80 border border-purple-700/60 text-purple-200 px-3.5 py-1 rounded-xl text-xs sm:text-sm font-black tracking-wide flex items-center gap-1.5">
          <span>Câu {currentIndex + 1} <span className="text-purple-400 font-normal">/ {totalQuestions}</span></span>
          {isShuffled && (
            <span title="Đang trộn câu hỏi ngẫu nhiên" className="text-emerald-400 text-xs flex items-center gap-0.5 ml-1">
              <Shuffle className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>

      {/* Middle: Streak badge if > 1 */}
      {streak > 1 && (
        <div className="animate-bounce flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 font-black px-3.5 py-1 rounded-full text-xs sm:text-sm shadow-lg shadow-amber-500/30">
          <Flame className="w-4 h-4 fill-amber-900 text-amber-900 animate-pulse" />
          <span>Chuỗi {streak}x!</span>
        </div>
      )}

      {/* Right: Score + Audio Toggle */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700 px-3.5 py-1 rounded-xl font-black text-amber-400 text-sm sm:text-base tracking-wider shadow-inner">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span>{score.toLocaleString()} <span className="text-xs font-medium text-slate-400">pts</span></span>
        </div>

        <button
          onClick={() => {
            onToggleSound();
            soundManager.playClick();
          }}
          title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
          className={`p-2 rounded-xl transition cursor-pointer ${
            soundEnabled 
              ? 'bg-purple-800/60 hover:bg-purple-700 text-purple-200' 
              : 'bg-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
