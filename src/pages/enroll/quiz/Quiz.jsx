import React, { useState, useEffect } from "react";
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
              className="md:w-fit w-1/2 bg-sky-500 text-neutral-50 py-2 px-4 rounded-lg shadow disabled:opacity-50 disabled: cursor-not-allowed font-semibold"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="md:w-fit w-1/2 bg-sky-500 text-neutral-50 py-2 px-4 rounded-lg shadow disabled:opacity-50 disabled: cursor-not-allowed font-semibold"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
