// import { useQuiz } from "../context/QuizContext";

// export function useQuizProgress() {
//   const { quizState, dispatch, actions } = useQuiz();

//   const nextModule = () => {
//     dispatch({
//       type: actions.SET_CURRENT_MODULE,
//       payload: quizState.currentModule + 1
//     });
//   };

//   const previousModule = () => {
//     if (quizState.currentModule > 1) {
//       dispatch({
//         type: actions.SET_CURRENT_MODULE,
//         payload: quizState.currentModule - 1
//       });
//     }
//   };

//   const nextScene = () => {
//     dispatch({
//       type: actions.SET_CURRENT_SCENE,
//       payload: quizState.currentScene + 1
//     });
//   };

//   const previousScene = () => {
//     if (quizState.currentScene > 1) {
//       dispatch({
//         type: actions.SET_CURRENT_SCENE,
//         payload: quizState.currentScene - 1
//       });
//     }
//   };

//   const submitResponse = (questionId, response, isCorrect) => {
//     dispatch({
//       type: actions.SUBMIT_RESPONSE,
//       payload: { questionId, response, isCorrect }
//     });
//   };

//   const resetQuiz = () => {
//     dispatch({ type: actions.RESET_QUIZ });
//   };

//   const completeQuiz = () => {
//     dispatch({ type: actions.SET_QUIZ_COMPLETE });
//   };

//   const getProgress = () => {
//     const totalModules = 3; // Update based on your total modules
//     return {
//       moduleProgress: (quizState.currentModule / totalModules) * 100,
//       scorePercentage:
//         quizState.totalQuestions > 0
//           ? (quizState.score / quizState.totalQuestions) * 100
//           : 0
//     };
//   };

//   return {
//     ...quizState,
//     nextModule,
//     previousModule,
//     nextScene,
//     previousScene,
//     submitResponse,
//     resetQuiz,
//     completeQuiz,
//     getProgress
//   };
// }

// import { useQuiz } from "../context/QuizContext";

// export function useQuizProgress() {
//   const { quizState, dispatch, actions } = useQuiz();

//   const nextModule = () => {
//     dispatch({
//       type: actions.SET_CURRENT_MODULE,
//       payload: quizState.currentModule + 1
//     });
//   };

//   const previousModule = () => {
//     if (quizState.currentModule > 1) {
//       dispatch({
//         type: actions.SET_CURRENT_MODULE,
//         payload: quizState.currentModule - 1
//       });
//     }
//   };

//   const nextScene = () => {
//     dispatch({
//       type: actions.SET_CURRENT_SCENE,
//       payload: quizState.currentScene + 1
//     });
//   };

//   const previousScene = () => {
//     if (quizState.currentScene > 1) {
//       dispatch({
//         type: actions.SET_CURRENT_SCENE,
//         payload: quizState.currentScene - 1
//       });
//     }
//   };

//   const submitResponse = (questionId, response, isCorrect) => {
//     dispatch({
//       type: actions.SUBMIT_RESPONSE,
//       payload: { questionId, response, isCorrect }
//     });
//   };

//   const resetQuiz = () => {
//     dispatch({ type: actions.RESET_QUIZ });
//   };

//   const completeQuiz = () => {
//     console.log("📢 completeQuiz called");
//     dispatch({ type: actions.SET_QUIZ_COMPLETE });
//   };

//   const getProgress = (totalModules = 4) => {
//     return {
//       moduleProgress: (quizState.currentModule / totalModules) * 100,
//       scorePercentage:
//         quizState.totalQuestions > 0
//           ? (quizState.score / quizState.totalQuestions) * 100
//           : 0
//     };
//   };

//   return {
//     quizState, // ✅ retain structure
//     dispatch,
//     actions,
//     nextModule,
//     previousModule,
//     nextScene,
//     previousScene,
//     submitResponse,
//     resetQuiz,
//     completeQuiz,
//     getProgress
//   };
// }

import { useQuiz } from "../context/QuizContext";

export function useQuizProgress() {
  const {
    quizState,
    dispatch,
    actions,
    submitResponse: contextSubmitResponse
  } = useQuiz();

  const nextModule = () => {
    dispatch({
      type: actions.SET_CURRENT_MODULE,
      payload: quizState.currentModule + 1
    });
  };

  const previousModule = () => {
    if (quizState.currentModule > 1) {
      dispatch({
        type: actions.SET_CURRENT_MODULE,
        payload: quizState.currentModule - 1
      });
    }
  };

  const nextScene = () => {
    dispatch({
      type: actions.SET_CURRENT_SCENE,
      payload: quizState.currentScene + 1
    });
  };

  const previousScene = () => {
    if (quizState.currentScene > 1) {
      dispatch({
        type: actions.SET_CURRENT_SCENE,
        payload: quizState.currentScene - 1
      });
    }
  };

  // Use the context's submitResponse directly - it handles the correctAnswer format
  const submitResponse = (responseData) => {
    console.log("🎪 useQuizProgress submitResponse called with:", responseData);
    return contextSubmitResponse(responseData);
  };

  const resetQuiz = () => {
    console.log("🔄 Resetting quiz");
    dispatch({ type: actions.RESET_QUIZ });
  };

  const completeQuiz = () => {
    console.log("🏁 completeQuiz called");
    dispatch({ type: actions.SET_QUIZ_COMPLETE });
  };

  const getProgress = (totalModules = 7) => {
    return {
      moduleProgress: (quizState.currentModule / totalModules) * 100,
      scorePercentage:
        quizState.totalQuestions > 0
          ? (quizState.score / quizState.totalQuestions) * 100
          : 0
    };
  };

  console.log("📊 Current quiz state:", {
    score: quizState.score,
    totalQuestions: quizState.totalQuestions,
    responses: quizState.responses,
    isComplete: quizState.isComplete
  });

  return {
    quizState,
    dispatch,
    actions,
    nextModule,
    previousModule,
    nextScene,
    previousScene,
    submitResponse,
    resetQuiz,
    completeQuiz,
    getProgress
  };
}
