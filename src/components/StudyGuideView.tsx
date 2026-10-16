import React, { useState } from 'react';
import { ArrowLeft, Search, BookOpen, CheckCircle, Filter, FileText, ChevronRight, Shuffle, Sparkles, FlaskConical, Laptop } from 'lucide-react';
import { ALL_QUESTIONS, SECTIONS, CHEMISTRY_SECTIONS, INFORMATICS_SECTIONS } from '../data/questions';
import { ReadingPassageModal } from './ReadingPassageModal';
import { Question } from '../types/quiz';

interface StudyGuideViewProps {
  onBackToLobby: () => void;
  initialSubject?: 'chemistry' | 'english' | 'informatics';
}

export const StudyGuideView: React.FC<StudyGuideViewProps> = ({
  onBackToLobby,
  initialSubject = 'informatics',
}) => {
  const [selectedSubject, setSelectedSubject] = useState<'chemistry' | 'english' | 'informatics'>(initialSubject);
  const [selectedUnit, setSelectedUnit] = useState<'all' | 'urbanisation' | 'environment' | 'mock2026' | 'chem-sem1' | 'it-12'>(
    initialSubject === 'informatics' ? 'it-12' : initialSubject === 'chemistry' ? 'chem-sem1' : 'mock2026'
  );
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isShuffled, setIsShuffled] = useState(false);
  const [activeModalPassage, setActiveModalPassage] = useState<{
    isOpen: boolean;
    title?: string;
    content?: string;
    excerpt?: string;
  }>({ isOpen: false });

  // Handle switching subject
  const handleSwitchSubject = (subj: 'chemistry' | 'english' | 'informatics') => {
    setSelectedSubject(subj);
    setSelectedSection('all');
    if (subj === 'informatics') {
      setSelectedUnit('it-12');
    } else if (subj === 'chemistry') {
      setSelectedUnit('chem-sem1');
    } else {
      setSelectedUnit('mock2026');
    }
  };

  const filteredQuestions = ALL_QUESTIONS.filter((q) => {
    // 0. Check subject
    if (selectedSubject === 'informatics' && q.subject !== 'informatics') return false;
    if (selectedSubject === 'chemistry' && q.subject !== 'chemistry') return false;
    if (selectedSubject === 'english' && q.subject !== 'english') return false;

    // 1. Check unit (for english)
    if (selectedSubject === 'english') {
      if (selectedUnit !== 'all' && q.unit !== selectedUnit) return false;
    }

    // 2. Check section
    const matchesSection = (() => {
      if (selectedSection === 'all') return true;
      if (selectedSubject === 'informatics') {
        if (selectedSection === 'it-mcq') return q.questionNumber <= 10;
        if (selectedSection === 'it-tf') return q.questionNumber >= 11;
        return q.sectionId === selectedSection;
      }
      if (selectedSubject === 'chemistry') {
        if (selectedSection === 'chem-part1') return q.sectionId?.startsWith('chem-ch');
        if (selectedSection === 'chem-part2') return q.sectionId === 'chem-part2';
        if (selectedSection === 'chem-part3') return q.sectionId === 'chem-part3';
        return q.sectionId === selectedSection;
      }
      // English sections
      if (selectedSection === 'grammar-only') return q.category === 'grammar';
      if (selectedSection === 'reading-all') return q.category === 'reading' || q.category === 'cloze';
      if (selectedSection === 'vocab-only') return q.category === 'vocabulary';
      return q.sectionId === selectedSection;
    })();

    if (!matchesSection) return false;

    // 3. Check search query
    const matchesQuery =
      searchQuery.trim() === '' ||
      q.questionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.options.A.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.options.B.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.options.C.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.options.D.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (q.explanation && q.explanation.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (q.chapter && q.chapter.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (q.excerpt && q.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesQuery;
  });

  const displayedQuestions = isShuffled
    ? [...filteredQuestions].sort(() => 0.5 - Math.sin(filteredQuestions.indexOf(filteredQuestions[0]) + 1))
    : filteredQuestions;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-8 flex flex-col">
      {/* Top Header */}
      <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-purple-800/40">
        <div>
          <button
            onClick={onBackToLobby}
            className="flex items-center gap-2 text-purple-300 hover:text-white transition font-bold text-sm mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại phòng chơi Kahoot
          </button>
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-amber-400" />
            {selectedSubject === 'informatics'
              ? 'Ngân Hàng 72 Câu Hỏi & Lời Giải Tin Học 12'
              : selectedSubject === 'chemistry'
              ? 'Ngân Hàng 55 Câu Hỏi & Lời Giải Hóa Học 12'
              : 'Ngân Hàng 219 Câu Hỏi & Lời Giải Tiếng Anh 12'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {selectedSubject === 'informatics'
              ? 'Đề Cương Ôn Tập Kiểm Tra Cuối Học Kì I · Bài 3 đến Bài 8 (Chuẩn 100% tài liệu ôn tập kèm đáp án chi tiết)'
              : selectedSubject === 'chemistry'
              ? 'Đề Cương Ôn Tập Kiểm Tra Cuối Học Kì I · Chương 1 đến Chương 5 (Có đáp án & hướng dẫn giải chi tiết từng câu)'
              : 'Peace International School · Class 12.1 · Đề Minh Họa Cuối Kì I 2026-2027 & Các Unit Ôn Tập'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsShuffled(!isShuffled)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold transition cursor-pointer border ${
              isShuffled
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-600/30'
                : 'bg-purple-950/60 text-purple-300 border-purple-600/40 hover:bg-purple-900/60'
            }`}
          >
            <Shuffle className="w-4 h-4" />
            <span>{isShuffled ? 'Đã trộn ngẫu nhiên' : 'Trộn câu hỏi'}</span>
          </button>

          <div className="flex items-center gap-2 bg-purple-950/60 border border-purple-600/40 px-4 py-2 rounded-2xl text-xs font-bold text-purple-200">
            <span>Tổng số:</span>
            <span className="text-amber-300 font-extrabold text-sm">{displayedQuestions.length} câu</span>
          </div>
        </div>
      </div>

      {/* Main Subject Switcher: Môn Tin Học 12 vs Môn Hóa Học 12 vs Môn Tiếng Anh 12 */}
      <div className="w-full max-w-5xl mx-auto pt-4 pb-2 flex flex-wrap items-center gap-3">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Môn học:</span>
        <div className="inline-flex flex-wrap p-1 rounded-2xl bg-slate-900 border border-purple-800/60 gap-1">
          <button
            type="button"
            onClick={() => handleSwitchSubject('informatics')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-2 ${
              selectedSubject === 'informatics'
                ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>💻</span>
            <span>MÔN TIN HỌC 12 (72 câu ⭐)</span>
          </button>
          <button
            type="button"
            onClick={() => handleSwitchSubject('chemistry')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-2 ${
              selectedSubject === 'chemistry'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🧪</span>
            <span>MÔN HÓA HỌC 12 (55 câu ⭐)</span>
          </button>
          <button
            type="button"
            onClick={() => handleSwitchSubject('english')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-2 ${
              selectedSubject === 'english'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🇬🇧</span>
            <span>MÔN TIẾNG ANH 12 (219 câu)</span>
          </button>
        </div>
      </div>

      {/* Informatics Category Filters */}
      {selectedSubject === 'informatics' && (
        <div className="w-full max-w-5xl mx-auto pt-2 flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
          <span className="text-xs font-bold uppercase text-sky-300 mr-1">Chủ đề / Phần:</span>
          {INFORMATICS_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSection(sec.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                selectedSection === sec.id
                  ? 'bg-sky-500 text-slate-950 border-white shadow-md font-black'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
              }`}
            >
              {sec.title}
            </button>
          ))}
        </div>
      )}

      {/* Chemistry Category Filters */}
      {selectedSubject === 'chemistry' && (
        <div className="w-full max-w-5xl mx-auto pt-2 flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
          <span className="text-xs font-bold uppercase text-teal-300 mr-1">Chương / Phần:</span>
          {CHEMISTRY_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSection(sec.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                selectedSection === sec.id
                  ? 'bg-teal-500 text-slate-950 border-white shadow-md font-black'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
              }`}
            >
              {sec.title}
            </button>
          ))}
        </div>
      )}

      {/* English Unit Selector Tabs in Study Guide */}
      {selectedSubject === 'english' && (
        <>
          <div className="w-full max-w-5xl mx-auto pt-2 flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
            <span className="text-xs font-bold uppercase text-purple-300 mr-1">Bộ đề:</span>
            <button
              onClick={() => {
                setSelectedUnit('mock2026');
                setSelectedSection('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer border ${
                selectedUnit === 'mock2026'
                  ? 'bg-rose-600 text-white border-white shadow-md'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              🎯 Đề Cuối Kì I 2026-2027 (40 câu ⭐)
            </button>
            <button
              onClick={() => {
                setSelectedUnit('environment');
                setSelectedSection('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer border ${
                selectedUnit === 'environment'
                  ? 'bg-emerald-600 text-white border-white shadow-md'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              📄 Unit 3: Môi Trường (75 câu)
            </button>
            <button
              onClick={() => {
                setSelectedUnit('urbanisation');
                setSelectedSection('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer border ${
                selectedUnit === 'urbanisation'
                  ? 'bg-cyan-600 text-white border-white shadow-md'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              🏙️ Đô Thị Hóa (104 câu)
            </button>
            <button
              onClick={() => {
                setSelectedUnit('all');
                setSelectedSection('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer border ${
                selectedUnit === 'all'
                  ? 'bg-purple-600 text-white border-white shadow-md'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              🌟 Tất Cả Các Đề (219 câu)
            </button>
          </div>

          {/* Quick Filter Buttons: All, Grammar Only, Reading Only, Vocab Only */}
          <div className="w-full max-w-5xl mx-auto pt-3 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedSection('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                selectedSection === 'all'
                  ? 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-600/30'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
              }`}
            >
              Tất cả câu hỏi
            </button>
            <button
              onClick={() => setSelectedSection('grammar-only')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                selectedSection === 'grammar-only'
                  ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
              }`}
            >
              📐 Ngữ pháp riêng
            </button>
            <button
              onClick={() => setSelectedSection('reading-all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                selectedSection === 'reading-all'
                  ? 'bg-amber-600 text-white border-amber-400 shadow-md shadow-amber-600/30'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
              }`}
            >
              📖 Bài đọc riêng (Có trích dẫn)
            </button>
            <button
              onClick={() => setSelectedSection('vocab-only')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                selectedSection === 'vocab-only'
                  ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-600/30'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
              }`}
            >
              🌿 Từ vựng riêng
            </button>
          </div>
        </>
      )}

      {/* Filter and Search Bar */}
      <div className="w-full max-w-5xl mx-auto py-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Search */}
        <div className="sm:col-span-3 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              selectedSubject === 'informatics'
                ? "Tìm kiếm câu hỏi tin học, chủ đề (AI, IP, switch, SQL, HTML, CSS...), đáp án..."
                : selectedSubject === 'chemistry'
                ? "Tìm kiếm câu hỏi hóa học, chất (ester, glucose...), phản ứng, đáp án..."
                : "Tìm kiếm câu hỏi, từ vựng, đáp án..."
            }
            className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-2xl text-white placeholder-slate-500 font-medium outline-none focus:border-purple-500 transition"
          />
        </div>
      </div>

      {/* Questions List */}
      <div className="w-full max-w-5xl mx-auto space-y-4 pb-12 flex-1">
        {displayedQuestions.length === 0 ? (
          <div className="p-12 text-center text-slate-400 bg-slate-900/50 rounded-2xl border border-slate-800">
            Không tìm thấy câu hỏi phù hợp với từ khóa của bạn.
          </div>
        ) : (
          displayedQuestions.map((q, idx) => (
            <div
              key={q.id}
              className={`bg-slate-900/80 border rounded-2xl p-5 sm:p-6 transition shadow-lg space-y-4 ${
                q.subject === 'informatics'
                  ? 'border-sky-800/60 hover:border-sky-500/60'
                  : q.subject === 'chemistry'
                  ? 'border-teal-800/60 hover:border-teal-500/60'
                  : 'border-slate-800 hover:border-purple-600/50'
              }`}
            >
              {/* Question Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-lg font-black text-xs flex items-center justify-center ${
                    q.subject === 'informatics'
                      ? 'bg-sky-900/90 text-sky-200'
                      : q.subject === 'chemistry'
                      ? 'bg-teal-900/90 text-teal-200'
                      : 'bg-purple-900/80 text-purple-200'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    q.subject === 'informatics'
                      ? 'text-sky-400'
                      : q.subject === 'chemistry'
                      ? 'text-teal-400'
                      : 'text-purple-400'
                  }`}>
                    {q.sectionTitle} · Câu {q.questionNumber}
                  </span>
                  {q.chapter && (
                    <span className={`hidden sm:inline text-xs font-semibold px-2 py-0.5 rounded-md ${
                      q.subject === 'informatics'
                        ? 'bg-sky-950 border border-sky-800 text-sky-300'
                        : 'bg-teal-950 border border-teal-800 text-teal-300'
                    }`}>
                      {q.chapter}
                    </span>
                  )}
                </div>

                {q.fullPassage && (
                  <button
                    onClick={() =>
                      setActiveModalPassage({
                        isOpen: true,
                        title: q.passageTitle,
                        content: q.fullPassage,
                        excerpt: q.excerpt,
                      })
                    }
                    className="flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-3 py-1 rounded-xl transition cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Xem bài đọc gốc
                  </button>
                )}
              </div>

              {/* Question Content */}
              <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {q.questionText}
              </h3>

              {/* Excerpt if present */}
              {q.excerpt && (
                <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-3 text-xs sm:text-sm text-amber-200">
                  <span className="font-extrabold uppercase text-[11px] text-amber-400 block mb-1">
                    📌 Dữ kiện bài đọc:
                  </span>
                  <span className="italic font-medium">{q.excerpt}</span>
                </div>
              )}

              {/* 4 Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                  const isCorrect = q.correctAnswer === opt;
                  return (
                    <div
                      key={opt}
                      className={`p-3 rounded-xl border flex items-center gap-3 transition ${
                        isCorrect
                          ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-950/40'
                          : 'bg-slate-950/40 border-slate-800 text-slate-300'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-md font-black text-xs flex items-center justify-center shrink-0 ${
                          isCorrect
                            ? 'bg-emerald-500 text-slate-950 font-black'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {opt}
                      </span>
                      <span className={`text-sm ${isCorrect ? 'font-extrabold text-white' : 'font-normal'}`}>
                        {q.options[opt]}
                      </span>
                      {isCorrect && (
                        <span className="ml-auto text-xs font-black bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Đúng (Theo đáp án)
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation Note */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <span className={`font-bold ${
                  q.subject === 'informatics'
                    ? 'text-sky-400'
                    : q.subject === 'chemistry'
                    ? 'text-teal-400'
                    : 'text-purple-400'
                }`}>
                  {q.subject === 'informatics'
                    ? '💡 Giải thích & Kiến thức Tin học trọng tâm:'
                    : '💡 Hướng dẫn giải chi tiết:'}
                </span>{' '}
                {q.explanation}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Reading Passage Modal */}
      <ReadingPassageModal
        isOpen={activeModalPassage.isOpen}
        onClose={() => setActiveModalPassage({ isOpen: false })}
        title={activeModalPassage.title}
        content={activeModalPassage.content}
        excerpt={activeModalPassage.excerpt}
      />
    </div>
  );
};
