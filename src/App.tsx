import React, { useState, useEffect } from 'react';
import { ALL_QUESTIONS } from './data/questions';
import { GameSettings, GameState, Player, Question, AnswerOption } from './types/quiz';
import { soundManager } from './utils/sound';
import { KahootHeader } from './components/KahootHeader';
import { LobbyView } from './components/LobbyView';
import { QuestionView } from './components/QuestionView';
import { AnswerFeedbackView } from './components/AnswerFeedbackView';
import { LeaderboardView } from './components/LeaderboardView';
import { PodiumView } from './components/PodiumView';
import { StudyGuideView } from './components/StudyGuideView';
import { ReadingPassageModal } from './components/ReadingPassageModal';

const INITIAL_CLASSMATES: Player[] = [
  { name: 'Minh Thư', avatar: '🦊', score: 0, streak: 0, correctCount: 0, wrongCount: 0 },
  { name: 'Bảo Nam', avatar: '🐼', score: 0, streak: 0, correctCount: 0, wrongCount: 0 },
  { name: 'Hải Đăng', avatar: '🚀', score: 0, streak: 0, correctCount: 0, wrongCount: 0 },
  { name: 'Kim Ngân', avatar: '🦉', score: 0, streak: 0, correctCount: 0, wrongCount: 0 },
  { name: 'Thầy Thanh Danh', avatar: '👨‍🏫', score: 0, streak: 0, correctCount: 0, wrongCount: 0 },
];

// Fisher-Yates array shuffling algorithm
function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function App() {
  const [gameState, setGameState] = useState<GameState>('lobby');

  const [player, setPlayer] = useState<Player>({
    name: 'Học sinh 12.1',
    avatar: '🌿',
    score: 0,
    streak: 0,
    correctCount: 0,
    wrongCount: 0,
    isUser: true,
  });

  const [classmates, setClassmates] = useState<Player[]>(INITIAL_CLASSMATES);

  const [settings, setSettings] = useState<GameSettings>({
    timePerQuestion: 20,
    soundEnabled: true,
    shuffleQuestions: false,
    shuffleAnswers: false,
    selectedSubject: 'chemistry', // Mặc định mở Môn Hóa Học 12 theo yêu cầu mới
    selectedUnit: 'chem-sem1', // Đề cương kiểm tra cuối học kì I Hóa Học 12
    selectedSection: 'all',
  });

  const [activeQuestions, setActiveQuestions] = useState<Question[]>(ALL_QUESTIONS);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState<AnswerOption | null>(null);
  const [pointsEarned, setPointsEarned] = useState(0);
  const [isPassageModalOpen, setIsPassageModalOpen] = useState(false);

  const [userLogs, setUserLogs] = useState<
    Array<{
      question: Question;
      selectedOption: string | null;
      isCorrect: boolean;
      points: number;
    }>
  >([]);

  // Keep sound manager enabled state synced
  useEffect(() => {
    soundManager.enabled = settings.soundEnabled;
  }, [settings.soundEnabled]);

  const handleUpdatePlayer = (updated: Partial<Player>) => {
    setPlayer((prev) => ({ ...prev, ...updated }));
  };

  const handleUpdateSettings = (updated: Partial<GameSettings>) => {
    setSettings((prev) => ({ ...prev, ...updated }));
  };

  const handleToggleSound = () => {
    setSettings((prev) => {
      const next = !prev.soundEnabled;
      soundManager.enabled = next;
      return { ...prev, soundEnabled: next };
    });
  };

  // Prepare questions pool with subject, unit, section, question shuffle & answer option shuffle
  const prepareQuestionPool = (shuffleQ: boolean, shuffleA: boolean) => {
    // 1. Filter by selectedSubject and selectedUnit
    let baseList = ALL_QUESTIONS;
    if (settings.selectedSubject === 'informatics') {
      baseList = ALL_QUESTIONS.filter((q) => q.subject === 'informatics');
    } else if (settings.selectedSubject === 'chemistry') {
      baseList = ALL_QUESTIONS.filter((q) => q.subject === 'chemistry');
    } else {
      // English subject
      if (settings.selectedUnit === 'mock2026') {
        baseList = ALL_QUESTIONS.filter((q) => q.unit === 'mock2026');
      } else if (settings.selectedUnit === 'urbanisation') {
        baseList = ALL_QUESTIONS.filter((q) => q.unit === 'urbanisation');
      } else if (settings.selectedUnit === 'environment') {
        baseList = ALL_QUESTIONS.filter((q) => q.unit === 'environment');
      } else {
        baseList = ALL_QUESTIONS.filter((q) => q.subject === 'english');
      }
    }

    let pool: Question[] = [];

    // 2. Filter by selectedSection
    if (settings.selectedSection === 'all') {
      pool = [...baseList];
    } else if (settings.selectedSection === 'it-mcq') {
      pool = baseList.filter((q) => q.questionNumber <= 10);
    } else if (settings.selectedSection === 'it-tf') {
      pool = baseList.filter((q) => q.questionNumber >= 11);
    } else if (settings.selectedSection === 'chem-part1') {
      pool = baseList.filter((q) => q.sectionId?.startsWith('chem-ch'));
    } else if (settings.selectedSection === 'chem-part2') {
      pool = baseList.filter((q) => q.sectionId === 'chem-part2');
    } else if (settings.selectedSection === 'chem-part3') {
      pool = baseList.filter((q) => q.sectionId === 'chem-part3');
    } else if (settings.selectedSection === 'grammar-only') {
      pool = baseList.filter((q) => q.category === 'grammar');
    } else if (settings.selectedSection === 'reading-all') {
      pool = baseList.filter((q) => q.category === 'reading' || q.category === 'cloze');
    } else if (settings.selectedSection === 'reading-comprehension') {
      pool = baseList.filter((q) => q.category === 'reading');
    } else if (settings.selectedSection === 'reading-cloze') {
      pool = baseList.filter((q) => q.category === 'cloze');
    } else if (settings.selectedSection === 'vocab-only') {
      pool = baseList.filter((q) => q.category === 'vocabulary');
    } else if (settings.selectedSection === 'blitz-10') {
      pool = shuffleArray(baseList).slice(0, 10);
    } else if (settings.selectedSection === 'blitz-20') {
      pool = shuffleArray(baseList).slice(0, 20);
    } else {
      // Specific exercise/chapter ID (e.g. it-ai, it-network, it-db, chem-ch1, urb-ex1, mock-xanh-sm)
      pool = ALL_QUESTIONS.filter((q) => q.sectionId === settings.selectedSection);
    }

    // Shuffle questions if enabled or blitz
    if (shuffleQ && settings.selectedSection !== 'blitz-10' && settings.selectedSection !== 'blitz-20') {
      pool = shuffleArray(pool);
    }

    // Shuffle 4 answers (A, B, C, D) if enabled
    if (shuffleA) {
      pool = pool.map((q) => {
        const correctText = q.options[q.correctAnswer];
        const allOptionTexts = [q.options.A, q.options.B, q.options.C, q.options.D];
        const shuffledTexts = shuffleArray(allOptionTexts);
        const newOptions = {
          A: shuffledTexts[0],
          B: shuffledTexts[1],
          C: shuffledTexts[2],
          D: shuffledTexts[3],
        };
        const newCorrectLetter =
          (['A', 'B', 'C', 'D'] as const).find((key) => newOptions[key] === correctText) ||
          q.correctAnswer;

        return {
          ...q,
          options: newOptions,
          correctAnswer: newCorrectLetter,
        };
      });
    }

    return pool;
  };

  // Start new game session
  const handleStartGame = (overrideShuffleQuestions?: boolean) => {
    const shouldShuffleQ =
      overrideShuffleQuestions !== undefined ? overrideShuffleQuestions : settings.shuffleQuestions;
    const pool = prepareQuestionPool(shouldShuffleQ, settings.shuffleAnswers);

    // Reset scores & players
    setActiveQuestions(pool);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setPointsEarned(0);
    setUserLogs([]);
    setPlayer((prev) => ({
      ...prev,
      score: 0,
      streak: 0,
      correctCount: 0,
      wrongCount: 0,
    }));

    // Reset classmates scores with slight random baseline
    setClassmates(
      INITIAL_CLASSMATES.map((c) => ({
        ...c,
        score: 0,
        streak: 0,
        correctCount: 0,
        wrongCount: 0,
      }))
    );

    setGameState('question');
  };

  // Called when user selects an answer or time runs out
  const handleAnswerSelected = (answer: AnswerOption, timeRemaining: number) => {
    const currentQ = activeQuestions[currentIndex];
    const isTimeout = timeRemaining <= 0;
    const isCorrect = !isTimeout && answer === currentQ.correctAnswer;

    let pts = 0;
    let newStreak = player.streak;

    if (isCorrect) {
      newStreak += 1;
      const totalTime = settings.timePerQuestion > 0 ? settings.timePerQuestion : 20;
      const speedFraction = Math.max(0, Math.min(1, timeRemaining / totalTime));
      // Base score up to 1000 + streak bonus (100 * streak, max 500)
      const speedScore = Math.round(500 + 500 * speedFraction);
      const streakBonus = Math.min(500, newStreak * 80);
      pts = speedScore + streakBonus;
    } else {
      newStreak = 0;
    }

    // Update user player
    setPlayer((prev) => ({
      ...prev,
      score: prev.score + pts,
      streak: newStreak,
      correctCount: prev.correctCount + (isCorrect ? 1 : 0),
      wrongCount: prev.wrongCount + (isCorrect ? 0 : 1),
    }));

    // Update classmates scores realistically
    setClassmates((prev) =>
      prev.map((c) => {
        // Teacher has 95% accuracy, students have 70-85%
        const isTeacher = c.name.includes('Thầy');
        const prob = isTeacher ? 0.95 : 0.75 + Math.random() * 0.15;
        const botCorrect = Math.random() < prob;
        if (botCorrect) {
          const botTime = Math.floor(Math.random() * 15) + 5;
          const botPts = Math.round(600 + Math.random() * 350) + (c.streak * 60);
          return {
            ...c,
            score: c.score + botPts,
            streak: c.streak + 1,
            correctCount: c.correctCount + 1,
          };
        } else {
          return {
            ...c,
            streak: 0,
            wrongCount: c.wrongCount + 1,
          };
        }
      })
    );

    setSelectedAnswer(isTimeout ? null : answer);
    setPointsEarned(pts);

    setUserLogs((prev) => [
      ...prev,
      {
        question: currentQ,
        selectedOption: isTimeout ? null : answer,
        isCorrect,
        points: pts,
      },
    ]);

    setGameState('feedback');
  };

  const handleNextFromFeedback = () => {
    // Show leaderboard between questions
    setGameState('leaderboard');
  };

  const handleNextFromLeaderboard = () => {
    if (currentIndex + 1 >= activeQuestions.length) {
      setGameState('podium');
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setGameState('question');
    }
  };

  const currentQuestion = activeQuestions[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-slate-900 to-indigo-950 text-white flex flex-col font-['Montserrat',sans-serif] selection:bg-purple-600 selection:text-white">
      {/* Header during active gameplay */}
      {(gameState === 'question' ||
        gameState === 'feedback' ||
        gameState === 'leaderboard') && (
        <KahootHeader
          currentIndex={currentIndex}
          totalQuestions={activeQuestions.length}
          score={player.score}
          streak={player.streak}
          soundEnabled={settings.soundEnabled}
          isShuffled={settings.shuffleQuestions}
          onToggleSound={handleToggleSound}
          onExitGame={() => {
            soundManager.playClick();
            setGameState('lobby');
          }}
        />
      )}

      {/* Main View Router */}
      <main className="flex-1 flex flex-col relative">
        {gameState === 'lobby' && (
          <LobbyView
            player={player}
            onUpdatePlayer={handleUpdatePlayer}
            settings={settings}
            onUpdateSettings={handleUpdateSettings}
            onStartGame={() => handleStartGame()}
            onOpenStudyGuide={() => setGameState('study')}
          />
        )}

        {gameState === 'question' && currentQuestion && (
          <QuestionView
            question={currentQuestion}
            timeLimit={settings.timePerQuestion}
            onAnswerSelected={handleAnswerSelected}
            onOpenPassageModal={() => setIsPassageModalOpen(true)}
          />
        )}

        {gameState === 'feedback' && currentQuestion && (
          <AnswerFeedbackView
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            isCorrect={selectedAnswer === currentQuestion.correctAnswer}
            pointsEarned={pointsEarned}
            streak={player.streak}
            onNext={handleNextFromFeedback}
            isLastQuestion={currentIndex + 1 >= activeQuestions.length}
          />
        )}

        {gameState === 'leaderboard' && (
          <LeaderboardView
            players={[...classmates, player]}
            userPlayer={player}
            onNextQuestion={handleNextFromLeaderboard}
            questionNumber={currentIndex + 1}
            totalQuestions={activeQuestions.length}
          />
        )}

        {gameState === 'podium' && (
          <PodiumView
            players={[...classmates, player]}
            userPlayer={player}
            userLogs={userLogs}
            onPlayAgain={() => handleStartGame(false)}
            onPlayAgainShuffled={() => {
              setSettings((prev) => ({ ...prev, shuffleQuestions: true }));
              handleStartGame(true);
            }}
            onOpenStudyGuide={() => setGameState('study')}
          />
        )}

        {gameState === 'study' && (
          <StudyGuideView
            onBackToLobby={() => setGameState('lobby')}
            initialSubject={settings.selectedSubject}
          />
        )}
      </main>

      {/* Reading Passage Modal when user wants to read the full text */}
      {currentQuestion && (
        <ReadingPassageModal
          isOpen={isPassageModalOpen}
          onClose={() => setIsPassageModalOpen(false)}
          title={currentQuestion.passageTitle}
          content={currentQuestion.fullPassage}
          excerpt={currentQuestion.excerpt}
        />
      )}
    </div>
  );
}
