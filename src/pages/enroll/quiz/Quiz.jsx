import React, { useState, useEffect } from "react";
export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [finalized, setFinalized] = useState(false);
  const [answers, setAnswers] = useState(() => {
    return JSON.parse(localStorage.getItem("quizAnswers")) || {};
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
        Test Your Knowledge
      </h1>
      <div className="w-full bg-neutral-100/40 border border-neutral-200 md:p-6 p-3 rounded-lg space-y-6">
        Douglas
      </div>
    </div>
  );
};
