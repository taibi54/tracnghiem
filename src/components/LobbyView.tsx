import React, { useState } from 'react';
import { Play, BookOpen, Settings, Sparkles, Check, Users, HelpCircle, Shuffle } from 'lucide-react';
import { SECTIONS } from '../data/questions';
import { GameSettings, Player } from '../types/quiz';
import { soundManager } from '../utils/sound';

interface LobbyViewProps {
  player: Player;
  onUpdatePlayer: (updated: Partial<Player>) => void;
  settings: GameSettings;
  onUpdateSettings: (updated: Partial<GameSettings>) => void;
  onStartGame: () => void;
  onOpenStudyGuide: () => void;
}

const AVATARS = [
  { emoji: '🌿', name: 'Mầm Xanh' },
  { emoji: '🦊', name: 'Cáo Nhanh Trí' },
  { emoji: '🐼', name: 'Gấu Chill' },
  { emoji: '🦉', name: 'Cú Uyên Bác' },
  { emoji: '🚀', name: 'Tên Lửa' },
  { emoji: '🐯', name: 'Hổ Quyết Thắng' },
  { emoji: '🤖', name: 'Robot AI' },
  { emoji: '⚡', name: 'Tia Chớp' },
];

export const LobbyView: React.FC<LobbyViewProps> = ({
  player,
  onUpdatePlayer,
  settings,
  onUpdateSettings,
  onStartGame,
  onOpenStudyGuide,
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [pinCode] = useState(() => Math.floor(100000 + Math.random() * 900000).toString());

  const handleStart = () => {
    soundManager.playClick();
    onStartGame();
  };

  return (
    <div className="min-h-screen bg-radial from-purple-900 via-indigo-950 to-slate-950 text-white flex flex-col items-center justify-between p-4 sm:p-6 overflow-x-hidden relative">
      {/* Decorative Kahoot-like geometric floating elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

      {/* Top Banner: School, Class & PIN */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 pb-4 border-b border-purple-800/40">
        <div className="text-center sm:text-left">
          <div className="text-xs uppercase tracking-widest font-extrabold text-purple-300 flex items-center gap-1.5 justify-center sm:justify-start">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            {settings.selectedSubject === 'informatics'
              ? 'Đề Cương Ôn Tập Kiểm Tra Cuối Học Kì I · Môn Tin Học 12'
              : settings.selectedSubject === 'chemistry'
              ? 'Đề Cương Ôn Tập Kiểm Tra Cuối Học Kì I · Môn Hóa Học 12'
              : 'Peace International School · Class 12.1 · Tiếng Anh 12'}
          </div>
          <div className="text-xs text-purple-300/80">
            {settings.selectedSubject === 'informatics' ? (
              <span>Năm học 2026–2027 · <span className="text-sky-300 font-bold">Phạm vi Bài 3 đến Bài 8 (72 câu ⭐)</span></span>
            ) : settings.selectedSubject === 'chemistry' ? (
              <span>Năm học 2026–2027 · <span className="text-amber-300 font-bold">Phạm vi Chương 1 đến Chương 5</span></span>
            ) : (
              <span>Giáo viên phụ trách: <span className="text-amber-300 font-bold">Thầy Đặng Thanh Danh</span></span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-900/90 border border-purple-500/50 px-4 py-1.5 rounded-2xl shadow-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mã PIN:</span>
          <span className="font-mono text-xl font-black text-amber-400 tracking-widest">{pinCode}</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-2xl my-auto py-6 flex flex-col items-center gap-6 z-10">
        {/* Kahoot Big Playful Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur rounded-full text-xs font-bold text-purple-200 border border-white/10 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            {settings.selectedSubject === 'informatics'
              ? '💻 Chế độ thi đấu Kahoot Tin Học 12 (Bài 3 - 8)'
              : settings.selectedSubject === 'chemistry'
              ? '🧪 Chế độ thi đấu Kahoot Hóa Học 12 (Chương 1 - 5)'
              : '🇬🇧 Chế độ thi đấu Kahoot Tiếng Anh 12'}
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-md">
            KAHOOT<span className="text-amber-400">!</span>{' '}
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              {settings.selectedSubject === 'informatics'
                ? 'TIN HỌC 12'
                : settings.selectedSubject === 'chemistry'
                ? 'HÓA HỌC 12'
                : 'TIẾNG ANH 12'}
            </span>
          </h1>
          <p className="text-sm sm:text-base text-purple-200/90 max-w-lg mx-auto font-medium">
            {settings.selectedSubject === 'informatics'
              ? 'Trọn bộ 72 câu hỏi chuẩn 100% Đề cương Ôn tập Cuối kì I Tin Học 12: Thiết bị mạng, Giao thức TCP/IP, Chia sẻ tài nguyên, Giao tiếp không gian mạng, HTML & Định dạng văn bản kèm đáp án chuẩn!'
              : settings.selectedSubject === 'chemistry'
              ? 'Trọn bộ đề cương cuối học kì I Hóa Học 12: Ester - Lipid, Carbohydrate, Hợp chất chứa Nitrogen, Polymer, Pin điện - Điện phân kèm lời giải chi tiết!'
              : 'Trọn bộ đề thi học kì và ôn tập chuyên đề Tiếng Anh 12: Đề minh họa 2026-2027, Unit 3 Môi Trường, Unit Đô Thị Hóa.'}
          </p>
        </div>

        {/* Player Setup Card */}
        <div className="w-full bg-slate-900/80 backdrop-blur-md border border-purple-700/60 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/80 space-y-6">
          {/* Nickname & Avatar Selection */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-purple-300">
              Biệt danh của bạn trong phòng thi
            </label>
            <div className="flex gap-2">
              <div className="w-14 h-12 bg-purple-950/80 border border-purple-500/50 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                {player.avatar}
              </div>
              <input
                type="text"
                value={player.name}
                maxLength={24}
                onChange={(e) => onUpdatePlayer({ name: e.target.value })}
                placeholder="Nhập tên của bạn..."
                className="flex-1 bg-slate-800/90 border border-purple-600/40 focus:border-purple-400 rounded-2xl px-4 py-2.5 text-white font-bold placeholder-slate-500 outline-none transition"
              />
            </div>

            {/* Avatar picker row */}
            <div className="flex items-center justify-center gap-2 pt-1 overflow-x-auto py-1">
              {AVATARS.map((av) => (
                <button
                  key={av.emoji}
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    onUpdatePlayer({ avatar: av.emoji });
                  }}
                  className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center transition-all cursor-pointer ${
                    player.avatar === av.emoji
                      ? 'bg-purple-600 scale-110 shadow-lg shadow-purple-600/50 ring-2 ring-white'
                      : 'bg-slate-800/70 hover:bg-slate-700 opacity-80 hover:opacity-100'
                  }`}
                  title={av.name}
                >
                  {av.emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Subject Switcher: Môn Tin Học 12 vs Môn Hóa Học 12 vs Môn Tiếng Anh 12 */}
          <div className="space-y-2 p-3.5 rounded-2xl bg-slate-950/90 border-2 border-sky-500/60 shadow-xl">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-purple-300">
              <span className="flex items-center gap-1.5 text-sky-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Chọn Môn Học Thi Đấu:
              </span>
              <span className="text-[11px] font-bold text-slate-300">
                {settings.selectedSubject === 'informatics'
                  ? '💻 Đang chọn Môn Tin Học'
                  : settings.selectedSubject === 'chemistry'
                  ? '🧪 Đang chọn Môn Hóa Học'
                  : '🇬🇧 Đang chọn Môn Tiếng Anh'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onUpdateSettings({
                    selectedSubject: 'informatics',
                    selectedUnit: 'it-12',
                    selectedSection: 'all',
                  });
                }}
                className={`p-3 rounded-2xl text-xs font-black transition cursor-pointer border flex flex-col items-center justify-center gap-1 ${
                  settings.selectedSubject === 'informatics'
                    ? 'bg-gradient-to-r from-sky-600 to-indigo-600 border-white text-white shadow-xl shadow-sky-600/40 ring-2 ring-sky-300'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span className="text-xl">💻</span>
                <span className="text-sm">MÔN TIN HỌC 12</span>
                <span className="text-[10px] text-sky-300 font-bold">72 câu • Đề cương Cuối kì I ⭐</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onUpdateSettings({
                    selectedSubject: 'chemistry',
                    selectedUnit: 'chem-sem1',
                    selectedSection: 'all',
                  });
                }}
                className={`p-3 rounded-2xl text-xs font-black transition cursor-pointer border flex flex-col items-center justify-center gap-1 ${
                  settings.selectedSubject === 'chemistry'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 border-white text-white shadow-xl shadow-emerald-600/40 ring-2 ring-emerald-300'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span className="text-xl">🧪</span>
                <span className="text-sm">MÔN HÓA HỌC 12</span>
                <span className="text-[10px] text-amber-300 font-bold">55 câu • Đề cương Cuối kì I ⭐</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onUpdateSettings({
                    selectedSubject: 'english',
                    selectedUnit: 'mock2026',
                    selectedSection: 'all',
                  });
                }}
                className={`p-3 rounded-2xl text-xs font-black transition cursor-pointer border flex flex-col items-center justify-center gap-1 ${
                  settings.selectedSubject === 'english'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 border-white text-white shadow-xl shadow-purple-600/40 ring-2 ring-purple-300'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span className="text-xl">🇬🇧</span>
                <span className="text-sm">MÔN TIẾNG ANH 12</span>
                <span className="text-[10px] text-purple-300 font-bold">219 câu • Đề thi & Các Unit</span>
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* INFORMATICS SECTION: When Môn Tin Học 12 is active */}
          {/* ========================================================= */}
          {settings.selectedSubject === 'informatics' && (
            <div className="space-y-3 p-4 rounded-2xl bg-sky-950/40 border-2 border-sky-500/40 animate-fadeIn">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-sky-300">
                <span>Chọn nội dung ôn tập Tin Học 12:</span>
                <span className="text-amber-300">Chuẩn 100% đề cương ôn tập có đáp án</span>
              </div>

              {/* 3 Main Parts */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'all' })}
                  className={`p-2.5 rounded-xl border text-center font-bold text-xs transition cursor-pointer ${
                    settings.selectedSection === 'all'
                      ? 'bg-sky-500 text-slate-950 border-white shadow-md'
                      : 'bg-slate-900/80 border-sky-500/30 text-sky-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-sm">🌟</div>
                  <div className="font-black">Toàn bộ đề cương</div>
                  <div className="text-[10px] opacity-80">72 câu trọn bộ</div>
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'it-mcq' })}
                  className={`p-2.5 rounded-xl border text-center font-bold text-xs transition cursor-pointer ${
                    settings.selectedSection === 'it-mcq'
                      ? 'bg-sky-500 text-slate-950 border-white shadow-md'
                      : 'bg-slate-900/80 border-sky-500/30 text-sky-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-sm">🔘</div>
                  <div className="font-black">Trắc nghiệm 4 lựa chọn</div>
                  <div className="text-[10px] opacity-80">60 câu trắc nghiệm</div>
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'it-tf' })}
                  className={`p-2.5 rounded-xl border text-center font-bold text-xs transition cursor-pointer ${
                    settings.selectedSection === 'it-tf'
                      ? 'bg-sky-500 text-slate-950 border-white shadow-md'
                      : 'bg-slate-900/80 border-sky-500/30 text-sky-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-sm">⚖️</div>
                  <div className="font-black">Trắc nghiệm Đúng / Sai</div>
                  <div className="text-[10px] opacity-80">12 câu tổng hợp</div>
                </button>
              </div>

              {/* 6 Lessons from the Review Document */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-1 text-xs">
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'it-b3' })}
                  className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                    settings.selectedSection === 'it-b3'
                      ? 'bg-cyan-500 text-slate-950 border-white shadow-sm'
                      : 'bg-slate-900/80 border-cyan-500/30 text-cyan-200 hover:bg-slate-800'
                  }`}
                >
                  🔌 B3: Thiết bị mạng (12 câu)
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'it-b4' })}
                  className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                    settings.selectedSection === 'it-b4'
                      ? 'bg-cyan-500 text-slate-950 border-white shadow-sm'
                      : 'bg-slate-900/80 border-cyan-500/30 text-cyan-200 hover:bg-slate-800'
                  }`}
                >
                  🌐 B4: Giao thức mạng (12 câu)
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'it-b5' })}
                  className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                    settings.selectedSection === 'it-b5'
                      ? 'bg-cyan-500 text-slate-950 border-white shadow-sm'
                      : 'bg-slate-900/80 border-cyan-500/30 text-cyan-200 hover:bg-slate-800'
                  }`}
                >
                  📁 B5: Chia sẻ tài nguyên (12 câu)
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'it-b6' })}
                  className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                    settings.selectedSection === 'it-b6'
                      ? 'bg-cyan-500 text-slate-950 border-white shadow-sm'
                      : 'bg-slate-900/80 border-cyan-500/30 text-cyan-200 hover:bg-slate-800'
                  }`}
                >
                  💬 B6: Ứng xử không gian mạng (12 câu)
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'it-b7' })}
                  className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                    settings.selectedSection === 'it-b7'
                      ? 'bg-cyan-500 text-slate-950 border-white shadow-sm'
                      : 'bg-slate-900/80 border-cyan-500/30 text-cyan-200 hover:bg-slate-800'
                  }`}
                >
                  📄 B7: HTML & cấu trúc web (12 câu)
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'it-b8' })}
                  className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                    settings.selectedSection === 'it-b8'
                      ? 'bg-cyan-500 text-slate-950 border-white shadow-sm'
                      : 'bg-slate-900/80 border-cyan-500/30 text-cyan-200 hover:bg-slate-800'
                  }`}
                >
                  🎨 B8: Định dạng văn bản (12 câu)
                </button>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* CHEMISTRY SECTION: When Môn Hóa Học 12 is active */}
          {/* ========================================================= */}
          {settings.selectedSubject === 'chemistry' && (
            <div className="space-y-3 p-4 rounded-2xl bg-teal-950/40 border-2 border-teal-500/40 animate-fadeIn">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-teal-300">
                <span>Chọn nội dung ôn tập Hóa học 12:</span>
                <span className="text-amber-300">Có đáp án & hướng dẫn giải chi tiết</span>
              </div>

              {/* 3 Main Parts */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'all' })}
                  className={`p-2.5 rounded-xl border text-center font-bold text-xs transition cursor-pointer ${
                    settings.selectedSection === 'all'
                      ? 'bg-teal-500 text-slate-950 border-white shadow-md'
                      : 'bg-slate-900/80 border-teal-500/30 text-teal-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-sm">🌟</div>
                  <div className="font-black">Toàn bộ đề cương</div>
                  <div className="text-[10px] opacity-80">55 câu trọn bộ</div>
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'chem-part1' })}
                  className={`p-2.5 rounded-xl border text-center font-bold text-xs transition cursor-pointer ${
                    settings.selectedSection === 'chem-part1' || settings.selectedSection.startsWith('chem-ch')
                      ? 'bg-teal-500 text-slate-950 border-white shadow-md'
                      : 'bg-slate-900/80 border-teal-500/30 text-teal-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-sm">🔘</div>
                  <div className="font-black">Phần I: 4 lựa chọn</div>
                  <div className="text-[10px] opacity-80">40 câu trắc nghiệm</div>
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'chem-part2' })}
                  className={`p-2.5 rounded-xl border text-center font-bold text-xs transition cursor-pointer ${
                    settings.selectedSection === 'chem-part2'
                      ? 'bg-teal-500 text-slate-950 border-white shadow-md'
                      : 'bg-slate-900/80 border-teal-500/30 text-teal-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-sm">⚖️</div>
                  <div className="font-black">Phần II: Đúng / Sai</div>
                  <div className="text-[10px] opacity-80">6 câu tổng hợp</div>
                </button>
              </div>

              {/* Individual Chapters & Short Answer */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-1 text-xs">
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'chem-ch1' })}
                  className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                    settings.selectedSection === 'chem-ch1'
                      ? 'bg-emerald-500 text-slate-950 border-white shadow-sm'
                      : 'bg-slate-900/80 border-emerald-500/30 text-emerald-200 hover:bg-slate-800'
                  }`}
                >
                  ⚗️ C1: Ester – Lipid (5 câu)
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'chem-ch2' })}
                  className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                    settings.selectedSection === 'chem-ch2'
                      ? 'bg-emerald-500 text-slate-950 border-white shadow-sm'
                      : 'bg-slate-900/80 border-emerald-500/30 text-emerald-200 hover:bg-slate-800'
                  }`}
                >
                  🌾 C2: Carbohydrate (5 câu)
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'chem-ch3' })}
                  className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                    settings.selectedSection === 'chem-ch3'
                      ? 'bg-emerald-500 text-slate-950 border-white shadow-sm'
                      : 'bg-slate-900/80 border-emerald-500/30 text-emerald-200 hover:bg-slate-800'
                  }`}
                >
                  🧪 C3: Chứa Nitrogen (10 câu)
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'chem-ch4' })}
                  className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                    settings.selectedSection === 'chem-ch4'
                      ? 'bg-emerald-500 text-slate-950 border-white shadow-sm'
                      : 'bg-slate-900/80 border-emerald-500/30 text-emerald-200 hover:bg-slate-800'
                  }`}
                >
                  🧵 C4: Polymer (10 câu)
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'chem-ch5' })}
                  className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                    settings.selectedSection === 'chem-ch5'
                      ? 'bg-emerald-500 text-slate-950 border-white shadow-sm'
                      : 'bg-slate-900/80 border-emerald-500/30 text-emerald-200 hover:bg-slate-800'
                  }`}
                >
                  ⚡ C5: Pin điện – Điện phân (10 câu)
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ selectedSection: 'chem-part3' })}
                  className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                    settings.selectedSection === 'chem-part3'
                      ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                      : 'bg-slate-900/80 border-amber-500/30 text-amber-200 hover:bg-slate-800'
                  }`}
                >
                  🔢 Phần III: Bài tập tính toán (9 câu)
                </button>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* ENGLISH SECTION: When Môn Tiếng Anh 12 is active */}
          {/* ========================================================= */}
          {settings.selectedSubject === 'english' && (
            <>
              {/* Unit Selector: Đề Minh Họa 2026 vs Unit Môi Trường vs Đô Thị Hóa */}
              <div className="space-y-2 p-3.5 rounded-2xl bg-slate-950/80 border-2 border-purple-500/40 shadow-inner">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-purple-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Chọn Bộ Đề Tiếng Anh:
                  </span>
                  <span className="text-[11px] text-emerald-300 font-extrabold">Đã tích hợp 219 câu hỏi</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      onUpdateSettings({ selectedUnit: 'mock2026', selectedSection: 'all' });
                    }}
                    className={`p-2.5 rounded-xl text-xs font-black transition cursor-pointer border flex flex-col items-center justify-center ${
                      settings.selectedUnit === 'mock2026'
                        ? 'bg-gradient-to-r from-rose-600 to-amber-600 border-white text-white shadow-lg shadow-rose-600/40 ring-2 ring-rose-400'
                        : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-sm">🎯 Đề Cuối Kì I</span>
                    <span className="text-[10px] font-bold text-amber-300">40 câu (2026-2027 MỚI ⭐)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      onUpdateSettings({ selectedUnit: 'environment', selectedSection: 'all' });
                    }}
                    className={`p-2.5 rounded-xl text-xs font-black transition cursor-pointer border flex flex-col items-center justify-center ${
                      settings.selectedUnit === 'environment'
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 border-white text-white shadow-lg shadow-emerald-600/40 ring-2 ring-emerald-400'
                        : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-sm">📄 Unit 3: Môi Trường</span>
                    <span className="text-[10px] font-bold text-emerald-300">75 câu trắc nghiệm</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      onUpdateSettings({ selectedUnit: 'urbanisation', selectedSection: 'all' });
                    }}
                    className={`p-2.5 rounded-xl text-xs font-black transition cursor-pointer border flex flex-col items-center justify-center ${
                      settings.selectedUnit === 'urbanisation'
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-white text-white shadow-lg shadow-cyan-600/40 ring-2 ring-cyan-400'
                        : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-sm">🏙️ Đô Thị Hóa</span>
                    <span className="text-[10px] font-bold text-cyan-300">104 câu mở rộng</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      onUpdateSettings({ selectedUnit: 'all', selectedSection: 'all' });
                    }}
                    className={`p-2.5 rounded-xl text-xs font-black transition cursor-pointer border flex flex-col items-center justify-center ${
                      settings.selectedUnit === 'all'
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 border-white text-white shadow-lg shadow-purple-600/40 ring-2 ring-purple-400'
                        : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-sm">🌟 Tất Cả Các Đề</span>
                    <span className="text-[10px] font-bold text-purple-300">219 câu trọn bộ</span>
                  </button>
                </div>
              </div>

              {/* Section Selection: Dedicated Grammar & Reading Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wider text-purple-300">
                    Chọn nội dung câu hỏi muốn chơi
                  </label>
                  <span className="text-[11px] font-bold text-amber-300">
                    {settings.selectedSection === 'grammar-only' || settings.selectedSection.includes('ex2') || settings.selectedSection.includes('ex3') || settings.selectedSection.includes('arrangement')
                      ? `📐 Ngữ pháp & Cấu trúc (${settings.selectedUnit === 'mock2026' ? '5' : settings.selectedUnit === 'urbanisation' ? '40' : settings.selectedUnit === 'environment' ? '20' : '65'} câu)`
                      : settings.selectedSection === 'reading-all' || settings.selectedSection.includes('reading') || settings.selectedSection.includes('read') || settings.selectedSection.includes('practice') || settings.selectedSection.includes('xanh') || settings.selectedSection.includes('leaflet') || settings.selectedSection.includes('health')
                      ? `📖 Bài đọc riêng (${settings.selectedUnit === 'mock2026' ? '35' : settings.selectedUnit === 'urbanisation' ? '35' : settings.selectedUnit === 'environment' ? '35' : '105'} câu kèm trích dẫn)`
                      : settings.selectedSection === 'vocab-only'
                      ? `🌿 Từ vựng riêng (${settings.selectedUnit === 'mock2026' ? '12' : settings.selectedUnit === 'urbanisation' ? '29' : settings.selectedUnit === 'environment' ? '20' : '61'} câu)`
                      : `🌟 Toàn bộ đề (${settings.selectedUnit === 'mock2026' ? '40' : settings.selectedUnit === 'urbanisation' ? '104' : settings.selectedUnit === 'environment' ? '75' : '219'} câu)`}
                  </span>
                </div>

                {/* Quick 4 Category Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      onUpdateSettings({ selectedSection: 'all' });
                    }}
                    className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1 transition text-center cursor-pointer ${
                      settings.selectedSection === 'all'
                        ? 'bg-purple-600 border-white text-white shadow-lg shadow-purple-600/40 ring-2 ring-purple-400'
                        : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">🌟</span>
                    <span className="text-xs font-black">Toàn bộ đề</span>
                    <span className="text-[10px] opacity-80 font-bold">
                      {settings.selectedUnit === 'mock2026' ? '40 câu' : settings.selectedUnit === 'urbanisation' ? '104 câu' : settings.selectedUnit === 'environment' ? '75 câu' : '219 câu'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      onUpdateSettings({ selectedSection: 'grammar-only' });
                    }}
                    className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1 transition text-center cursor-pointer ${
                      settings.selectedSection === 'grammar-only' || settings.selectedSection.includes('ex2') || settings.selectedSection.includes('ex3') || settings.selectedSection.includes('arrangement')
                        ? 'bg-blue-600 border-white text-white shadow-lg shadow-blue-600/40 ring-2 ring-blue-400'
                        : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">📐</span>
                    <span className="text-xs font-black">Ngữ pháp riêng</span>
                    <span className="text-[10px] opacity-80 font-bold">
                      {settings.selectedUnit === 'mock2026' ? '5 câu sắp xếp' : settings.selectedUnit === 'urbanisation' ? '40 câu (2 phần)' : settings.selectedUnit === 'environment' ? '20 câu' : '65 câu'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      onUpdateSettings({ selectedSection: 'reading-all' });
                    }}
                    className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1 transition text-center cursor-pointer ${
                      settings.selectedSection === 'reading-all' || settings.selectedSection.includes('reading') || settings.selectedSection.includes('read') || settings.selectedSection.includes('practice') || settings.selectedSection.includes('xanh') || settings.selectedSection.includes('leaflet') || settings.selectedSection.includes('health')
                        ? 'bg-amber-600 border-white text-white shadow-lg shadow-amber-600/40 ring-2 ring-amber-400'
                        : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">📖</span>
                    <span className="text-xs font-black">Bài đọc riêng</span>
                    <span className="text-[10px] opacity-80 font-bold">
                      {settings.selectedUnit === 'mock2026' ? '35 câu (5 bài)' : settings.selectedUnit === 'urbanisation' ? '35 câu (5 bài)' : settings.selectedUnit === 'environment' ? '35 câu' : '105 câu'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      onUpdateSettings({ selectedSection: 'vocab-only' });
                    }}
                    className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1 transition text-center cursor-pointer ${
                      settings.selectedSection === 'vocab-only'
                        ? 'bg-emerald-600 border-white text-white shadow-lg shadow-emerald-600/40 ring-2 ring-emerald-400'
                        : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">🌿</span>
                    <span className="text-xs font-black">Từ vựng riêng</span>
                    <span className="text-[10px] opacity-80 font-bold">
                      {settings.selectedUnit === 'mock2026' ? '12 câu điền từ' : settings.selectedUnit === 'urbanisation' ? '29 câu' : settings.selectedUnit === 'environment' ? '20 câu' : '61 câu'}
                    </span>
                  </button>
                </div>
              </div>

            {/* Context sub-card when Grammar is chosen */}
            {(settings.selectedSection === 'grammar-only' || settings.selectedSection === 'mock-arrangement' || settings.selectedSection === 'ex2' || settings.selectedSection === 'urb-ex2' || settings.selectedSection === 'urb-ex3') && (
              <div className="p-3.5 rounded-2xl bg-blue-950/50 border border-blue-500/40 text-xs text-blue-200 space-y-2 animate-fadeIn">
                <div className="font-black text-white flex items-center justify-between">
                  <span>📐 Chuyên đề Ngữ pháp ({settings.selectedUnit === 'mock2026' ? 'Đề Cuối Kì I 2026' : settings.selectedUnit === 'urbanisation' ? 'Đô thị hóa' : settings.selectedUnit === 'environment' ? 'Môi trường' : 'Toàn bộ'}):</span>
                  <button
                    type="button"
                    onClick={() => onUpdateSettings({ selectedSection: 'grammar-only' })}
                    className="text-amber-300 font-extrabold hover:underline cursor-pointer"
                  >
                    Làm toàn bộ ngữ pháp
                  </button>
                </div>
                {settings.selectedUnit === 'mock2026' && (
                  <div className="pt-1 space-y-1.5">
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'mock-arrangement' })}
                      className={`w-full p-2.5 rounded-xl border text-left font-black transition cursor-pointer flex items-center justify-between ${
                        settings.selectedSection === 'mock-arrangement'
                          ? 'bg-blue-600 text-white border-white shadow-sm'
                          : 'bg-blue-950/70 border-blue-500/30 text-blue-200 hover:bg-blue-900/50'
                      }`}
                    >
                      <span>🔹 Phần 3: Sắp xếp câu & đoạn văn logic (Câu 13 - 17)</span>
                      <span className="text-amber-300 bg-blue-950 px-2 py-0.5 rounded-md text-[11px] font-bold">5 câu</span>
                    </button>
                    <p className="leading-relaxed text-blue-200/90 text-[11px] pl-1">
                      Bao gồm: Sắp xếp thứ tự hội thoại (lãng phí thức ăn, mua sắm online), thư phàn nàn rác điện tử, đoạn văn thời trang nhanh (fast fashion).
                    </p>
                  </div>
                )}
                {settings.selectedUnit === 'urbanisation' && (
                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'urb-ex2' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'urb-ex2'
                          ? 'bg-blue-600 text-white border-white shadow-sm'
                          : 'bg-slate-900 border-blue-400/30 text-blue-200 hover:bg-blue-900/40'
                      }`}
                    >
                      🔹 Ex 2: Hiện tại hoàn thành & Hòa hợp (20 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'urb-ex3' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'urb-ex3'
                          ? 'bg-blue-600 text-white border-white shadow-sm'
                          : 'bg-slate-900 border-blue-400/30 text-blue-200 hover:bg-blue-900/40'
                      }`}
                    >
                      🔹 Ex 3: So sánh kép (20 câu)
                    </button>
                  </div>
                )}
                {settings.selectedUnit === 'environment' && (
                  <div className="pt-1 space-y-1.5">
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'ex2' })}
                      className={`w-full p-2.5 rounded-xl border text-left font-black transition cursor-pointer flex items-center justify-between ${
                        settings.selectedSection === 'ex2'
                          ? 'bg-blue-600 text-white border-white shadow-sm'
                          : 'bg-blue-950/70 border-blue-500/30 text-blue-200 hover:bg-blue-900/50'
                      }`}
                    >
                      <span>🔹 Exercise 2: Mệnh đề quan hệ & Cụm động từ</span>
                      <span className="text-amber-300 bg-blue-950 px-2 py-0.5 rounded-md text-[11px] font-bold">20 câu</span>
                    </button>
                    <p className="leading-relaxed text-blue-200/90 text-[11px] pl-1">
                      Bao gồm: Mệnh đề quan hệ (who, which, whose, that), rút gọn V-ing/V-ed và cụm động từ quan trọng trong file.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Context sub-card when Reading is chosen */}
            {(settings.selectedSection === 'reading-all' || settings.selectedSection.includes('reading') || settings.selectedSection.includes('read') || settings.selectedSection.includes('practice') || settings.selectedSection.includes('xanh') || settings.selectedSection.includes('leaflet') || settings.selectedSection.includes('health')) && (
              <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-500/40 space-y-2.5 animate-fadeIn">
                <div className="flex items-center justify-between text-xs text-amber-300 font-black">
                  <span>📖 Chọn bài đọc muốn luyện tập:</span>
                  <span className="text-[11px] text-amber-200/80 font-normal">Kèm trích dẫn dữ kiện trong bài</span>
                </div>
                {settings.selectedUnit === 'mock2026' && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'reading-all' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'reading-all'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      📚 Toàn bộ bài đọc Đề 2026 (35 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'mock-xanh-sm' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'mock-xanh-sm'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      🚕 Quảng cáo Xanh SM (6 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'mock-leaflet' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'mock-leaflet'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      🏙️ Tờ rơi Áp lực nội đô (6 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'mock-cloze-health' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'mock-cloze-health'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      🏥 Y tế đô thị (5 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'mock-reading-greenwishing' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'mock-reading-greenwishing'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      🌿 The Promise - Greenwishing (8 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'mock-reading-density' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'mock-reading-density'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      🇸🇬 Too Close for Comfort? Singapore (10 câu)
                    </button>
                  </div>
                )}
                {settings.selectedUnit === 'urbanisation' && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'reading-all' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'reading-all'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      📚 Toàn bộ bài đọc Đô Thị Hóa (35 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'urb-read-1' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'urb-read-1'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      🚲 Reading 1: Flow & Field (6 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'urb-read-2' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'urb-read-2'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      🔧 Reading 2: Ride & Repair (6 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'urb-read-3' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'urb-read-3'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      🏥 Reading 3: Y tế đô thị (5 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'urb-read-4' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'urb-read-4'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      🤖 Reading 4: Smart Cities OECD (8 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'urb-read-5' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'urb-read-5'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      🌊 Reading 5: Sụt lún TP.HCM NASA (10 câu)
                    </button>
                  </div>
                )}

                {settings.selectedUnit === 'environment' && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'reading-all' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'reading-all'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      📚 Toàn bộ bài đọc trong file (35 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'practice-heat-island' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'practice-heat-island'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      🏙️ Đảo nhiệt EPA (10 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'practice-greenhushing' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'practice-greenhushing'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      🔇 Greenhushing KPMG (8 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'practice-green-housing' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'practice-green-housing'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      🏡 Green Housing (5 câu)
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateSettings({ selectedSection: 'practice-cloze' })}
                      className={`p-2 rounded-xl border text-left font-bold transition cursor-pointer ${
                        settings.selectedSection === 'practice-cloze'
                          ? 'bg-amber-500 text-slate-950 border-white shadow-sm'
                          : 'bg-slate-900/70 border-amber-500/20 text-amber-100 hover:bg-slate-900'
                      }`}
                    >
                      🏷️ Ripple Jar & Nhãn xanh (12 câu)
                    </button>
                  </div>
                )}

                {settings.selectedUnit === 'all' && (
                  <div className="text-xs text-amber-200">
                    Bao gồm toàn bộ 70 câu hỏi đọc hiểu và điền từ của cả 2 Unit Đô Thị Hóa & Môi Trường!
                  </div>
                )}
              </div>
            )}

            {/* Comprehensive Dropdown List */}
            <div className="pt-1">
              <select
                value={settings.selectedSection}
                onChange={(e) => onUpdateSettings({ selectedSection: e.target.value })}
                className="w-full bg-slate-800/90 border border-purple-600/50 rounded-2xl px-4 py-2.5 text-white font-semibold text-xs sm:text-sm outline-none focus:border-amber-400 transition cursor-pointer"
              >
                <optgroup label="── Chuyên Đề Chính ──">
                  <option value="all">🌟 Tất cả câu hỏi trong Unit đang chọn</option>
                  <option value="grammar-only">📐 Chuyên đề Ngữ pháp riêng</option>
                  <option value="reading-all">📖 Toàn bộ bài đọc riêng</option>
                  <option value="vocab-only">🌿 Chuyên đề Từ vựng riêng</option>
                </optgroup>
                <optgroup label="── ĐỀ MINH HỌA CUỐI KÌ I 2026-2027 (MỚI ⭐) ──">
                  <option value="mock-xanh-sm">Quảng cáo XANH SM (6 câu)</option>
                  <option value="mock-leaflet">Tờ rơi Inner-City Pressure (6 câu)</option>
                  <option value="mock-arrangement">Sắp xếp câu & đoạn văn logic (5 câu)</option>
                  <option value="mock-cloze-health">Đọc điền câu: Y tế đô thị (5 câu)</option>
                  <option value="mock-reading-greenwishing">Đọc hiểu: The Promise - Greenwishing (8 câu)</option>
                  <option value="mock-reading-density">Đọc hiểu: Too Close for Comfort? Singapore (10 câu)</option>
                </optgroup>
                <optgroup label="── Đô Thị Hóa (File Mới) ──">
                  <option value="urb-ex1">Exercise 1: Từ vựng Đô thị hóa (29 câu)</option>
                  <option value="urb-ex2">Exercise 2: Hiện tại hoàn thành & Hòa hợp (20 câu)</option>
                  <option value="urb-ex3">Exercise 3: So sánh kép (20 câu)</option>
                  <option value="urb-read-1">Reading 1: Flow & Field City Weekend (6 câu)</option>
                  <option value="urb-read-2">Reading 2: Ride & Repair Morning (6 câu)</option>
                  <option value="urb-read-3">Reading 3: Y tế đô thị (5 câu)</option>
                  <option value="urb-read-4">Reading 4: Smart Cities OECD (8 câu)</option>
                  <option value="urb-read-5">Reading 5: Sụt lún TP.HCM - NASA (10 câu)</option>
                </optgroup>
                <optgroup label="── Môi Trường & Sống Xanh ──">
                  <option value="ex1">Exercise 1: Từ vựng Môi trường (20 câu)</option>
                  <option value="ex2">Exercise 2: Mệnh đề quan hệ (20 câu)</option>
                  <option value="practice-heat-island">Đảo nhiệt đô thị - EPA (10 câu)</option>
                  <option value="practice-greenhushing">Greenhushing - KPMG (8 câu)</option>
                  <option value="practice-green-housing">Kiến trúc xanh Quy Nhơn (5 câu)</option>
                  <option value="practice-cloze">The Ripple Jar & Leaflet (12 câu)</option>
                </optgroup>
                <optgroup label="── Chế Độ Nhanh (Blitz) ──">
                  <option value="blitz-10">⚡ Blitz ngẫu nhiên (10 câu hỏi nhanh)</option>
                  <option value="blitz-20">⚡ Blitz ngẫu nhiên (20 câu hỏi nhanh)</option>
                </optgroup>
              </select>
            </div>
            </>
          )}

          {/* Prominent Question & Answer Shuffling Controls */}
          <div className="space-y-2.5 p-4 rounded-2xl bg-purple-950/70 border-2 border-purple-500/50 shadow-inner">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold transition ${
                  settings.shuffleQuestions ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30' : 'bg-slate-800 text-slate-400'
                }`}>
                  <Shuffle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-white flex items-center gap-2">
                    Trộn thứ tự câu hỏi
                    {settings.shuffleQuestions ? (
                      <span className="text-[10px] bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
                        BẬT
                      </span>
                    ) : (
                      <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full font-bold">
                        Theo thứ tự gốc
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-purple-200/80">
                    {settings.shuffleQuestions
                      ? 'Thứ tự các câu hỏi sẽ được xáo trộn ngẫu nhiên'
                      : 'Các câu hỏi xuất hiện lần lượt từ câu 1 đến hết'}
                  </div>
                </div>
              </div>

              {/* Big Toggle Switch */}
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onUpdateSettings({ shuffleQuestions: !settings.shuffleQuestions });
                }}
                className={`w-13 h-7 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                  settings.shuffleQuestions ? 'bg-emerald-500' : 'bg-slate-700'
                }`}
                title="Bật/Tắt trộn câu hỏi"
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white absolute top-1 transition-transform ${
                    settings.shuffleQuestions ? 'left-7' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Sub-option: Shuffle Answers A, B, C, D */}
            <div className="flex items-center justify-between pt-2.5 border-t border-purple-900/50">
              <div className="text-xs text-purple-200">
                <span className="font-bold text-white">Trộn ngẫu nhiên 4 đáp án (A, B, C, D)</span>
                <p className="text-[11px] text-purple-300/70">Hoán đổi vị trí các đáp án trong từng câu hỏi</p>
              </div>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onUpdateSettings({ shuffleAnswers: !settings.shuffleAnswers });
                }}
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                  settings.shuffleAnswers ? 'bg-purple-500' : 'bg-slate-750 bg-slate-700'
                }`}
                title="Bật/Tắt hoán đổi đáp án"
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                    settings.shuffleAnswers ? 'left-6' : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Settings Collapsible for Timer */}
          <div className="pt-1 border-t border-purple-800/40">
            <button
              type="button"
              onClick={() => setShowSettings(!showSettings)}
              className="w-full flex items-center justify-between text-xs font-bold text-purple-300 hover:text-white transition py-1 cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <Settings className="w-3.5 h-3.5" /> Thời gian trả lời câu hỏi
              </span>
              <span>{showSettings ? '▲ Thu gọn' : '▼ Mở rộng'}</span>
            </button>

            {showSettings && (
              <div className="mt-3 p-4 rounded-2xl bg-slate-950/60 border border-purple-900/40 space-y-3 animate-fadeIn">
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Thời gian trả lời mỗi câu:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: '15s (Căng)', val: 15 },
                    { label: '20s (Chuẩn)', val: 20 },
                    { label: '30s (Thoải mái)', val: 30 },
                    { label: 'Vô hạn', val: 0 },
                  ].map(t => (
                    <button
                      key={t.val}
                      type="button"
                      onClick={() => onUpdateSettings({ timePerQuestion: t.val })}
                      className={`py-2 px-1 text-xs font-bold rounded-xl transition cursor-pointer ${
                        settings.timePerQuestion === t.val
                          ? 'bg-purple-600 text-white shadow-md'
                          : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleStart}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-lg tracking-wide uppercase transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Play className="w-6 h-6 fill-slate-950" />
              Bắt đầu trò chơi ngay
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                onOpenStudyGuide();
              }}
              className="w-full py-3 px-6 rounded-2xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/40 text-purple-200 font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              Xem Toàn Bộ Ngân Hàng 72 Câu Hỏi & Dữ Kiện
            </button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-xl text-center text-xs text-purple-300/80">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1">
            <span className="text-base">⚡</span>
            <span className="font-bold text-white">Đáp án in đậm</span>
            <span>Chuẩn 100% từ file gốc</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1">
            <span className="text-base">📖</span>
            <span className="font-bold text-white">Trích dẫn bài đọc</span>
            <span>Hiển thị ngay tại câu hỏi</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1">
            <span className="text-base">🏆</span>
            <span className="font-bold text-white">Bảng xếp hạng</span>
            <span>Cạnh tranh điểm & chuỗi đúng</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center text-xs text-purple-400/60 pt-4 pb-2 border-t border-purple-900/30">
        Peace International School · Lớp 12.1 · Biên soạn cho học sinh ôn tập Tiếng Anh
      </footer>
    </div>
  );
};
