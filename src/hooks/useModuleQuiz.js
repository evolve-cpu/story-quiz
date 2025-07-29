// hooks/useModuleQuiz.js
import { useState, useRef, useEffect } from "react";
import { useQuizProgress } from "./useQuizProgress";

export const useModuleQuiz = ({
  lenisInstance,
  questionId,
  triggerTimelinePosition = 2.8
}) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizTriggered, setQuizTriggered] = useState(false);

  const { submitResponse } = useQuizProgress();
  const timelineRef = useRef(null);

  // Function to add quiz trigger to timeline
  const addQuizTriggerToTimeline = (timeline) => {
    timelineRef.current = timeline;

    timeline.add(() => {
      if (!quizTriggered && !quizCompleted) {
        console.log(`🎯 Quiz triggered for ${questionId}`);
        setQuizTriggered(true);
        setShowQuiz(true);

        // Pause timeline
        timeline.pause();

        // Disable scroll
        if (lenisInstance) {
          lenisInstance.stop();
        }
        document.body.style.overflow = "hidden";
      }
    }, triggerTimelinePosition);

    return timeline;
  };

  // Handle quiz completion
  useEffect(() => {
    if (quizCompleted && timelineRef.current) {
      console.log(`▶️ Resuming timeline after ${questionId} completion`);

      // Re-enable scroll
      if (lenisInstance) {
        lenisInstance.start();
      }
      document.body.style.overflow = "auto";

      // Resume timeline
      setTimeout(() => {
        timelineRef.current.resume();
      }, 200);
    }
  }, [quizCompleted, lenisInstance, questionId]);

  // Handle quiz submission
  const handleQuizSubmit = (response, isCorrect, correctAnswer) => {
    console.log(`📝 ${questionId} submitted:`, response, isCorrect);

    setShowQuiz(false);
    setQuizCompleted(true);

    // Submit response
    submitResponse({
      questionId,
      response,
      correctAnswer
    });
  };

  return {
    showQuiz,
    quizCompleted,
    quizTriggered,
    addQuizTriggerToTimeline,
    handleQuizSubmit
  };
};
