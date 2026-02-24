import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import questions from "./../../../constants/quizData";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [finalized, setFinalized] = useState(false);
  const [answers, setAnswers] = useState(() => {
    return JSON.parse(localStorage.getItem("quizAnswers")) || {};
  });
  const [quizHistory, setQuizHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("quizHistory")) || [];
  });

  useEffect(() => {
    if (answers[currentQuestion] !== undefined) {
      const storedAnswer = answers[currentQuestion];
      setSelectedAnswerIndex(storedAnswer.index);
      setIsCorrect(storedAnswer.isCorrect);
      setFinalized(true);
    } else {
      setSelectedAnswerIndex(null);
      setIsCorrect(false);
      setFinalized(false);
    }
  }, [currentQuestion, answers]);

  // Calcular total de acertos
  const calculateCorrectAnswers = () => {
    return Object.values(answers).filter(
      (answer) => answer.isCorrect === true
    ).length;
  };

  const correctAnswersCount = calculateCorrectAnswers();
  const isQuizComplete =
    Object.keys(answers).length === questions.length &&
    currentQuestion === questions.length - 1;

  // Handler para reiniciar o quiz
  const handleRestart = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("pt-BR") + " às " + now.toLocaleTimeString("pt-BR");
    
    // Registrar tentativa no histórico
    const attempt = {
      id: quizHistory.length + 1,
      timestamp: formattedDate,
      score: correctAnswersCount,
      total: questions.length,
    };

    const updatedHistory = [...quizHistory, attempt];
    setQuizHistory(updatedHistory);
    localStorage.setItem("quizHistory", JSON.stringify(updatedHistory));

    // Limpar respostas do quiz atual
    localStorage.removeItem("quizAnswers");
    setAnswers({});

    // Resetar componente para início
    setCurrentQuestion(0);
    setSelectedAnswerIndex(null);
    setIsCorrect(false);
    setFinalized(false);
  };

  /** Automatically detect the answer is correct or not after one select of choosing the answer of option */
  const handleAnswerSelect = (index, isCorrect) => {
    if (selectedAnswerIndex !== null) return;
    setSelectedAnswerIndex(index);
    setFinalized(false);
    setTimeout(() => {
      setIsCorrect(isCorrect);
      setFinalized(true);
      const updatedAnswers = {
        ...answers,
        [currentQuestion]: { index, isCorrect },
      };
      setAnswers(updatedAnswers);
      localStorage.setItem("quizAnswers", JSON.stringify(updatedAnswers));
    }, 1000);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="w-full space-y-4">
      <h1 className="text-lg text-neutral-800 font-semibold border-b pb-1 border-neutral-200">
        Teste o seu aprendizado
      </h1>
      <div className="w-full bg-neutral-100/40 border border-neutral-200 md:p-6 p-3 rounded-lg space-y-6">
        <h1 className="text-lg text-neutral-800 font-semibold border-b pb-1 border-neutral-200">
          {currentQuestion + 1} . {questions[currentQuestion].question}
        </h1>
        {/** Options */}
        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="radio"
                name="answer"
                id={`option-${index}`}
                className="hidden peer"
                value={index}
                checked={selectedAnswerIndex === index}
                onChange={() => handleAnswerSelect(index, option.isCorrect)}
                disabled={finalized}
              />
              <label
                htmlFor={`option-${index}`}
                className={`inline-flex items-center w-full border rounded-lg p-3 cursor-pointer ${
                  selectedAnswerIndex === index
                    ? finalized
                      ? isCorrect
                        ? "border-green-500 bg-green-500/10 text-green-500"
                        : "border-red-500 bg-red-500/10 text-red-500"
                      : "border-sky-600 bg-sky-500/10 text-sky-600"
                    : "border-neutral-200 text-neutral-600"
                }
                ${
                  selectedAnswerIndex !== null && selectedAnswerIndex !== index
                    ? "opacity-50 !cursor-not-allowed"
                    : ""
                }
                `}
              >
                {/**   */}
                <div className="w-full flex items-center justify-between">
                  <span className="text-sm font-medium">{option.text}</span>
                  {selectedAnswerIndex === index && finalized && (
                    <span className="text-sm">
                      {isCorrect ? <FaCheck /> : <FaXmark />}
                    </span>
                  )}
                </div>
              </label>
            </div>
          ))}
        </div>
        {/** Buttons and total questions */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/** question counter */}
          <p className="text-base md:text-sm text-neutral-600">
            {currentQuestion + 1} of {questions.length} questions
          </p>
          {/** actions buttons */}
          <div className="flex items-center gap-4 md:w-fit w-full">
            <button
              className="md:w-fit w-1/2 bg-sky-500 text-neutral-50 py-2 px-4 rounded-lg shadow disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              disabled={currentQuestion === 0}
              onClick={handlePrevious}
            >
              Previous
            </button>
            {isQuizComplete ? (
              <button
                className="md:w-fit w-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 font-semibold"
                onClick={handleRestart}
              >
                🔄 Reiniciar Quiz
              </button>
            ) : (
              <button
                className="md:w-fit w-1/2 bg-sky-500 text-neutral-50 py-2 px-4 rounded-lg shadow disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                onClick={handleNext}
                disabled={currentQuestion === questions.length - 1}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>

      {/** Placar Final - Aparece quando quiz está completo */}
      {isQuizComplete && (
        <div className="w-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 md:p-6 p-4 rounded-lg space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-neutral-800">🎉 Quiz Concluído!</h2>
            <p className="text-lg font-semibold text-indigo-600">
              Você acertou {correctAnswersCount} de {questions.length} questões
            </p>
            <div className="w-full bg-neutral-300 rounded-full h-3">
              <div
                className="bg-indigo-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${(correctAnswersCount / questions.length) * 100}%` }}
              />
            </div>
            <p className="text-sm text-neutral-600">
              {Math.round((correctAnswersCount / questions.length) * 100)}% de acurácia
            </p>
          </div>

          {/** Histórico de Tentativas */}
          <div className="space-y-3 border-t border-indigo-200 pt-6">
            <h3 className="text-lg font-semibold text-neutral-800">📋 Histórico de Tentativas</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {quizHistory.length === 0 ? (
                <p className="text-sm text-neutral-500 italic">Nenhuma tentativa registrada</p>
              ) : (
                quizHistory.map((attempt) => (
                  <div
                    key={attempt.id}
                    className="flex items-center justify-between bg-white rounded-lg p-3 border border-neutral-200 hover:border-indigo-300 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-neutral-600">Tentativa {attempt.id}</span>
                      <span className="text-xs text-neutral-500">{attempt.timestamp}</span>
                    </div>
                    <span className="text-sm font-bold text-indigo-600">
                      {attempt.score}/{attempt.total} pontos
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
