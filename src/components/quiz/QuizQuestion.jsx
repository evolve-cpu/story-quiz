import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { CheckCircle, XCircle } from 'lucide-react';

export default function QuizQuestion({ questionData, onSubmit, disabled = false }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const questionRef = useRef(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    // Animate question entrance
    gsap.fromTo(questionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(optionsRef.current.children,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  const handleAnswerSelect = (optionId) => {
    if (isSubmitted || disabled) return;
    setSelectedAnswer(optionId);
  };

  const handleSubmit = () => {
    if (!selectedAnswer || isSubmitted || disabled) return;

    const selectedOption = questionData.options.find(opt => opt.id === selectedAnswer);
    setIsSubmitted(true);
    setShowExplanation(true);

    // Animate the result
    gsap.to(optionsRef.current.children, {
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out"
    });

    // Call parent callback after a brief delay for animation
    setTimeout(() => {
      onSubmit(questionData.id, selectedAnswer, selectedOption.isCorrect);
    }, 1000);
  };

  const getOptionStyle = (option) => {
    if (!isSubmitted) {
      return selectedAnswer === option.id
        ? 'bg-evolve-lavender-indigo border-evolve-lavender-indigo text-white shadow-option-hover'
        : 'bg-evolve-black border-evolve-arsenic text-evolve-white hover:border-evolve-lavender-indigo/50 shadow-option-normal hover:shadow-option-hover';
    }

    if (option.isCorrect) {
      return 'bg-evolve-inchworm/20 border-evolve-inchworm text-evolve-inchworm shadow-tick-hover';
    }

    if (selectedAnswer === option.id && !option.isCorrect) {
      return 'bg-evolve-flame/20 border-evolve-flame text-evolve-flame shadow-tick-normal';
    }

    return 'bg-evolve-charleston-green border-evolve-arsenic text-evolve-gray shadow-option-normal';
  };

  const getOptionIcon = (option) => {
    if (!isSubmitted) return null;

    if (option.isCorrect) {
      return <CheckCircle className="w-6 h-6 text-evolve-inchworm" />;
    }

    if (selectedAnswer === option.id && !option.isCorrect) {
      return <XCircle className="w-6 h-6 text-evolve-flame" />;
    }

    return null;
  };

  return (
    <div className="space-y-6">
      {/* Question */}
      <div ref={questionRef} className="text-center">
        <h3 className="text-2xl font-bricolage font-semibold text-evolve-white mb-4 leading-relaxed">
          {questionData.question}
        </h3>
      </div>

      {/* Options */}
      <div ref={optionsRef} className="space-y-4">
        {questionData.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleAnswerSelect(option.id)}
            disabled={isSubmitted || disabled}
            className={`w-full p-6 rounded-18px border-2 transition-all duration-300 
                       transform hover:scale-[1.02] disabled:cursor-not-allowed
                       font-montserrat font-medium text-left flex items-center justify-between
                       ${getOptionStyle(option)}`}
          >
            <span className="flex-1 text-lg">{option.text}</span>
            {getOptionIcon(option)}
          </button>
        ))}
      </div>

      {/* Submit Button */}
      {!isSubmitted && (
        <div className="text-center pt-4">
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer || disabled}
            className="bg-evolve-heliotrope hover:bg-evolve-lavender-indigo disabled:bg-evolve-arsenic
                     disabled:text-evolve-gray text-white font-montserrat font-semibold
                     py-4 px-12 rounded-18px transition-all duration-300 transform
                     hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed
                     shadow-button-hover hover:shadow-button-top"
          >
            Submit Answer
          </button>
        </div>
      )}

      {/* Explanation */}
      {showExplanation && (
        <div className="mt-8 p-6 bg-evolve-arsenic rounded-18px border border-evolve-lavender-indigo/30">
          <h4 className="text-lg font-bricolage font-semibold text-evolve-white mb-3">
            Explanation
          </h4>
          <p className="text-evolve-gray font-montserrat leading-relaxed">
            {questionData.explanation}
          </p>
        </div>
      )}
    </div>
  );
}