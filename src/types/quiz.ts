export type AnswerOption = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: number;
  subject?: 'chemistry' | 'english' | 'informatics';
  unit?: 'environment' | 'urbanisation' | 'mock2026' | 'chem-sem1' | 'it-12';
  unitTitle?: string;
  chapter?: string;
  sectionId: string;
  sectionTitle: string;
  category: 'vocabulary' | 'grammar' | 'cloze' | 'reading' | 'chemistry' | 'informatics';
  questionNumber: number;
  questionText: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: AnswerOption;
  excerpt?: string; // Dữ kiện trích từ bài đọc để trả lời
  fullPassage?: string; // Toàn bộ đoạn văn nếu cần xem chi tiết
  passageTitle?: string;
  explanation: string;
}

export interface Player {
  name: string;
  avatar: string;
  score: number;
  streak: number;
  correctCount: number;
  wrongCount: number;
  isUser?: boolean;
}

export type GameState = 'lobby' | 'question' | 'feedback' | 'leaderboard' | 'podium' | 'study';

export interface GameSettings {
  timePerQuestion: number; // in seconds, default 20
  soundEnabled: boolean;
  shuffleQuestions: boolean; // Trộn thứ tự câu hỏi
  shuffleAnswers: boolean; // Trộn thứ tự đáp án A, B, C, D
  selectedSubject: 'chemistry' | 'english' | 'informatics'; // Môn học: Hóa Học vs Tin Học vs Tiếng Anh
  selectedUnit: 'all' | 'urbanisation' | 'environment' | 'mock2026' | 'chem-sem1' | 'it-12'; // Bộ đề đang chọn
  selectedSection: string; // 'all' or section ID
}
