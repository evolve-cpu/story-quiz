// import React, { createContext, useContext, useReducer } from 'react';

// const QuizContext = createContext();

// // Quiz state actions
// const QUIZ_ACTIONS = {
//   SET_CURRENT_MODULE: 'SET_CURRENT_MODULE',
//   SET_CURRENT_SCENE: 'SET_CURRENT_SCENE',
//   SUBMIT_RESPONSE: 'SUBMIT_RESPONSE',
//   UPDATE_SCORE: 'UPDATE_SCORE',
//   RESET_QUIZ: 'RESET_QUIZ',
//   SET_QUIZ_COMPLETE: 'SET_QUIZ_COMPLETE',
//   SET_LOADING: 'SET_LOADING',
// };

// // Initial quiz state
// const initialQuizState = {
//   currentModule: 1,
//   currentScene: 1,
//   responses: {},
//   score: 0,
//   totalQuestions: 0,
//   isComplete: false,
//   isLoading: false,
//   startTime: null,
//   endTime: null,
// };

// // Quiz reducer
// function quizReducer(state, action) {
//   switch (action.type) {
//     case QUIZ_ACTIONS.SET_CURRENT_MODULE:
//       return {
//         ...state,
//         currentModule: action.payload,
//         currentScene: 1, // Reset scene when changing modules
//       };

//     case QUIZ_ACTIONS.SET_CURRENT_SCENE:
//       return {
//         ...state,
//         currentScene: action.payload,
//       };

//     case QUIZ_ACTIONS.SUBMIT_RESPONSE:
//       const { questionId, response, isCorrect } = action.payload;
//       return {
//         ...state,
//         responses: {
//           ...state.responses,
//           [questionId]: response,
//         },
//         score: isCorrect ? state.score + 1 : state.score,
//         totalQuestions: state.totalQuestions + 1,
//       };

//     case QUIZ_ACTIONS.UPDATE_SCORE:
//       return {
//         ...state,
//         score: action.payload,
//       };

//     case QUIZ_ACTIONS.SET_QUIZ_COMPLETE:
//       return {
//         ...state,
//         isComplete: true,
//         endTime: new Date(),
//       };

//     case QUIZ_ACTIONS.SET_LOADING:
//       return {
//         ...state,
//         isLoading: action.payload,
//       };

//     case QUIZ_ACTIONS.RESET_QUIZ:
//       return {
//         ...initialQuizState,
//         startTime: new Date(),
//       };

//     default:
//       return state;
//   }
// }

// // Quiz context provider
// export function QuizProvider({ children }) {
//   const [quizState, dispatch] = useReducer(quizReducer, initialQuizState);

//   const value = {
//     quizState,
//     dispatch,
//     actions: QUIZ_ACTIONS,
//   };

//   return (
//     <QuizContext.Provider value={value}>
//       {children}
//     </QuizContext.Provider>
//   );
// }

// // Custom hook to use quiz context
// export function useQuiz() {
//   const context = useContext(QuizContext);
//   if (!context) {
//     throw new Error('useQuiz must be used within a QuizProvider');
//   }
//   return context;
// }

// import React, {
//   createContext,
//   useContext,
//   useReducer,
//   useCallback
// } from "react";

// const QuizContext = createContext();

// const QUIZ_ACTIONS = {
//   SET_CURRENT_MODULE: "SET_CURRENT_MODULE",
//   SET_CURRENT_SCENE: "SET_CURRENT_SCENE",
//   SUBMIT_RESPONSE: "SUBMIT_RESPONSE",
//   UPDATE_SCORE: "UPDATE_SCORE",
//   RESET_QUIZ: "RESET_QUIZ",
//   SET_QUIZ_COMPLETE: "SET_QUIZ_COMPLETE",
//   SET_LOADING: "SET_LOADING",
//   SET_QUIZ_ACTIVE: "SET_QUIZ_ACTIVE"
// };

// const initialQuizState = {
//   currentModule: 1,
//   currentScene: 1,
//   responses: {}, // { [questionId]: response }
//   score: 0,
//   totalQuestions: 0,
//   isComplete: false,
//   isLoading: false,
//   startTime: new Date(),
//   endTime: null,
//   quizIsActive: false
// };

// // Reducer
// function quizReducer(state, action) {
//   switch (action.type) {
//     case QUIZ_ACTIONS.SET_CURRENT_MODULE:
//       return {
//         ...state,
//         currentModule: action.payload,
//         currentScene: 1
//       };

//     case QUIZ_ACTIONS.SET_CURRENT_SCENE:
//       return {
//         ...state,
//         currentScene: action.payload
//       };

//     case QUIZ_ACTIONS.SUBMIT_RESPONSE:
//       const { questionId, response, isCorrect } = action.payload;
//       return {
//         ...state,
//         responses: {
//           ...state.responses,
//           [questionId]: response
//         },
//         score: isCorrect ? state.score + 1 : state.score,
//         totalQuestions: state.totalQuestions + 1
//       };

//     case QUIZ_ACTIONS.UPDATE_SCORE:
//       return {
//         ...state,
//         score: action.payload
//       };

//     case QUIZ_ACTIONS.SET_QUIZ_COMPLETE:
//       return {
//         ...state,
//         isComplete: true,
//         endTime: new Date()
//       };

//     case QUIZ_ACTIONS.SET_LOADING:
//       return {
//         ...state,
//         isLoading: action.payload
//       };

//     case QUIZ_ACTIONS.RESET_QUIZ:
//       return {
//         ...initialQuizState,
//         startTime: new Date()
//       };

//     case QUIZ_ACTIONS.SET_QUIZ_ACTIVE:
//       return {
//         ...state,
//         quizActive: action.payload
//       };

//     default:
//       return state;
//   }
// }

// // Provider
// export function QuizProvider({ children }) {
//   const [quizState, dispatch] = useReducer(quizReducer, initialQuizState);

//   const submitResponse = useCallback(
//     async ({ questionId, response, correctAnswer }) => {
//       const isCorrect = response === correctAnswer;

//       dispatch({
//         type: QUIZ_ACTIONS.SUBMIT_RESPONSE,
//         payload: { questionId, response, isCorrect }
//       });

//       return isCorrect;
//     },
//     []
//   );

//   const freezeScroll = () => {
//     document.documentElement.classList.add("quiz-active");
//     document.body.classList.add("quiz-active");
//   };

//   const resumeScroll = () => {
//     document.documentElement.classList.remove("quiz-active");
//     document.body.classList.remove("quiz-active");
//   };

//   const value = {
//     quizState,
//     dispatch,
//     actions: QUIZ_ACTIONS,
//     submitResponse,
//     freezeScroll,
//     resumeScroll
//   };

//   return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
// }

// // Hook
// export function useQuiz() {
//   const context = useContext(QuizContext);
//   if (!context) {
//     throw new Error("useQuiz must be used within a QuizProvider");
//   }
//   return context;
// }

// import React, {
//   createContext,
//   useContext,
//   useReducer,
//   useCallback,
//   useEffect
// } from "react";

// const QuizContext = createContext();

// const QUIZ_ACTIONS = {
//   SET_CURRENT_MODULE: "SET_CURRENT_MODULE",
//   SET_CURRENT_SCENE: "SET_CURRENT_SCENE",
//   SUBMIT_RESPONSE: "SUBMIT_RESPONSE",
//   UPDATE_SCORE: "UPDATE_SCORE",
//   RESET_QUIZ: "RESET_QUIZ",
//   SET_QUIZ_COMPLETE: "SET_QUIZ_COMPLETE",
//   SET_LOADING: "SET_LOADING",
//   SET_QUIZ_ACTIVE: "SET_QUIZ_ACTIVE"
// };

// const initialQuizState = {
//   currentModule: 1,
//   currentScene: 1,
//   responses: {}, // { [questionId]: response }
//   score: 0,
//   totalQuestions: 0,
//   isComplete: false,
//   isLoading: false,
//   startTime: new Date(),
//   endTime: null,
//   quizActive: false // ✅ FIXED naming here
// };

// // Reducer
// function quizReducer(state, action) {
//   switch (action.type) {
//     case QUIZ_ACTIONS.SET_CURRENT_MODULE:
//       return {
//         ...state,
//         currentModule: action.payload,
//         currentScene: 1
//       };

//     case "LOAD_STATE":
//       return {
//         ...state,
//         ...action.payload
//       };

//     case QUIZ_ACTIONS.SET_CURRENT_SCENE:
//       return {
//         ...state,
//         currentScene: action.payload
//       };

//     case QUIZ_ACTIONS.SUBMIT_RESPONSE:
//       const { questionId, response, isCorrect } = action.payload;
//       return {
//         ...state,
//         responses: {
//           ...state.responses,
//           [questionId]: response
//         },
//         score: isCorrect ? state.score + 1 : state.score,
//         totalQuestions: state.totalQuestions + 1
//       };

//     case QUIZ_ACTIONS.UPDATE_SCORE:
//       return {
//         ...state,
//         score: action.payload
//       };

//     case QUIZ_ACTIONS.SET_QUIZ_COMPLETE:
//       console.log("✅ Reducer: Marking quiz as complete");
//       return {
//         ...state,
//         isComplete: true,
//         endTime: new Date()
//       };

//     case QUIZ_ACTIONS.SET_LOADING:
//       return {
//         ...state,
//         isLoading: action.payload
//       };

//     case QUIZ_ACTIONS.RESET_QUIZ:
//       return {
//         ...initialQuizState,
//         startTime: new Date()
//       };

//     case QUIZ_ACTIONS.SET_QUIZ_ACTIVE:
//       return {
//         ...state,
//         quizActive: action.payload // ✅ FIXED naming here
//       };

//     default:
//       return state;
//   }
// }

// // Provider
// export function QuizProvider({ children }) {
//   const [quizState, dispatch] = useReducer(quizReducer, initialQuizState);

//   // inside QuizProvider:
//   useEffect(() => {
//     const stored = localStorage.getItem("quizState");
//     if (stored) {
//       dispatch({ type: "LOAD_STATE", payload: JSON.parse(stored) });
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("quizState", JSON.stringify(quizState));
//   }, [quizState]);

//   const submitResponse = useCallback(
//     async ({ questionId, response, correctAnswer }) => {
//       const isCorrect = response === correctAnswer;

//       dispatch({
//         type: QUIZ_ACTIONS.SUBMIT_RESPONSE,
//         payload: { questionId, response, isCorrect }
//       });

//       return isCorrect;
//     },
//     []
//   );

//   const freezeScroll = () => {
//     document.documentElement.classList.add("quiz-active");
//     document.body.classList.add("quiz-active");
//   };

//   const resumeScroll = () => {
//     document.documentElement.classList.remove("quiz-active");
//     document.body.classList.remove("quiz-active");
//   };

//   const value = {
//     quizState,
//     dispatch,
//     actions: QUIZ_ACTIONS,
//     submitResponse,
//     freezeScroll,
//     resumeScroll
//   };

//   return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
// }

// // Hook
// export function useQuiz() {
//   const context = useContext(QuizContext);
//   if (!context) {
//     throw new Error("useQuiz must be used within a QuizProvider");
//   }
//   return context;
// }

// import React, {
//   createContext,
//   useContext,
//   useReducer,
//   useCallback,
//   useEffect,
//   useRef
// } from "react";

// const QuizContext = createContext();

// const QUIZ_ACTIONS = {
//   SET_CURRENT_MODULE: "SET_CURRENT_MODULE",
//   SET_CURRENT_SCENE: "SET_CURRENT_SCENE",
//   SUBMIT_RESPONSE: "SUBMIT_RESPONSE",
//   UPDATE_SCORE: "UPDATE_SCORE",
//   RESET_QUIZ: "RESET_QUIZ",
//   SET_QUIZ_COMPLETE: "SET_QUIZ_COMPLETE",
//   SET_LOADING: "SET_LOADING",
//   SET_QUIZ_ACTIVE: "SET_QUIZ_ACTIVE"
// };

// const initialQuizState = {
//   currentModule: 1,
//   currentScene: 1,
//   responses: {},
//   score: 0,
//   totalQuestions: 0,
//   isComplete: false,
//   isLoading: false,
//   startTime: new Date(),
//   endTime: null,
//   quizActive: false
// };

// function quizReducer(state, action) {
//   switch (action.type) {
//     case QUIZ_ACTIONS.SET_CURRENT_MODULE:
//       return {
//         ...state,
//         currentModule: action.payload,
//         currentScene: 1
//       };

//     case "LOAD_STATE":
//       return {
//         ...state,
//         ...action.payload
//       };

//     case QUIZ_ACTIONS.SET_CURRENT_SCENE:
//       return {
//         ...state,
//         currentScene: action.payload
//       };

//     case QUIZ_ACTIONS.SUBMIT_RESPONSE:
//       const { questionId, response, isCorrect } = action.payload;
//       return {
//         ...state,
//         responses: {
//           ...state.responses,
//           [questionId]: response
//         },
//         score: isCorrect ? state.score + 1 : state.score,
//         totalQuestions: state.totalQuestions + 1
//       };

//     case QUIZ_ACTIONS.UPDATE_SCORE:
//       return {
//         ...state,
//         score: action.payload
//       };

//     case QUIZ_ACTIONS.SET_QUIZ_COMPLETE:
//       console.log("✅ Reducer: Marking quiz as complete");
//       return {
//         ...state,
//         isComplete: true,
//         endTime: new Date()
//       };

//     case QUIZ_ACTIONS.SET_LOADING:
//       return {
//         ...state,
//         isLoading: action.payload
//       };

//     case QUIZ_ACTIONS.RESET_QUIZ:
//       return {
//         ...initialQuizState,
//         startTime: new Date()
//       };

//     case QUIZ_ACTIONS.SET_QUIZ_ACTIVE:
//       return {
//         ...state,
//         quizActive: action.payload
//       };

//     default:
//       return state;
//   }
// }

// export function QuizProvider({ children }) {
//   const [quizState, dispatch] = useReducer(quizReducer, initialQuizState);
//   const scrollPositionRef = useRef({ x: 0, y: 0 });
//   const lenisInstanceRef = useRef(null);

//   // Store reference to Lenis instance
//   const setLenisInstance = useCallback((instance) => {
//     lenisInstanceRef.current = instance;
//   }, []);

//   // Load state from localStorage on mount
//   useEffect(() => {
//     const stored = localStorage.getItem("quizState");
//     if (stored) {
//       try {
//         const parsedState = JSON.parse(stored);
//         dispatch({ type: "LOAD_STATE", payload: parsedState });
//       } catch (error) {
//         console.error("Failed to parse stored quiz state:", error);
//       }
//     }
//   }, []);

//   // Debounced localStorage save to prevent excessive writes
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       localStorage.setItem("quizState", JSON.stringify(quizState));
//     }, 500); // Debounce by 500ms

//     return () => clearTimeout(timeoutId);
//   }, [quizState]);

//   // Store scroll position before state changes
//   const preserveScrollPosition = useCallback(() => {
//     scrollPositionRef.current = {
//       x: window.scrollX,
//       y: window.scrollY
//     };
//   }, []);

//   // Restore scroll position after state changes
//   const restoreScrollPosition = useCallback(() => {
//     const { x, y } = scrollPositionRef.current;

//     // Use multiple methods to ensure scroll position is restored
//     requestAnimationFrame(() => {
//       window.scrollTo(x, y);

//       // Also restore Lenis position if available
//       if (lenisInstanceRef.current) {
//         lenisInstanceRef.current.scrollTo(y, { immediate: true });
//       }

//       // Double-check after another frame
//       requestAnimationFrame(() => {
//         if (window.scrollX !== x || window.scrollY !== y) {
//           window.scrollTo(x, y);
//         }
//       });
//     });
//   }, []);

//   const submitResponse = useCallback(
//     async ({ questionId, response, correctAnswer }) => {
//       // Preserve scroll position before state change
//       preserveScrollPosition();

//       const isCorrect = response === correctAnswer;

//       dispatch({
//         type: QUIZ_ACTIONS.SUBMIT_RESPONSE,
//         payload: { questionId, response, isCorrect }
//       });

//       // Restore scroll position after state change
//       setTimeout(restoreScrollPosition, 50);

//       return isCorrect;
//     },
//     [preserveScrollPosition, restoreScrollPosition]
//   );

//   const freezeScroll = useCallback(() => {
//     preserveScrollPosition();
//     document.documentElement.classList.add("quiz-active");
//     document.body.classList.add("quiz-active");
//   }, [preserveScrollPosition]);

//   const resumeScroll = useCallback(() => {
//     document.documentElement.classList.remove("quiz-active");
//     document.body.classList.remove("quiz-active");
//     setTimeout(restoreScrollPosition, 50);
//   }, [restoreScrollPosition]);

//   const value = {
//     quizState,
//     dispatch,
//     actions: QUIZ_ACTIONS,
//     submitResponse,
//     freezeScroll,
//     resumeScroll,
//     setLenisInstance, // Add this for Lenis integration
//     preserveScrollPosition,
//     restoreScrollPosition
//   };

//   return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
// }

// export function useQuiz() {
//   const context = useContext(QuizContext);
//   if (!context) {
//     throw new Error("useQuiz must be used within a QuizProvider");
//   }
//   return context;
// }

// COMPLETE FIXED QuizContext.js
// import React, {
//   createContext,
//   useContext,
//   useReducer,
//   useCallback,
//   useEffect,
//   useRef
// } from "react";

// const QuizContext = createContext();

// const QUIZ_ACTIONS = {
//   SET_CURRENT_MODULE: "SET_CURRENT_MODULE",
//   SET_CURRENT_SCENE: "SET_CURRENT_SCENE",
//   SUBMIT_RESPONSE: "SUBMIT_RESPONSE",
//   UPDATE_SCORE: "UPDATE_SCORE",
//   RESET_QUIZ: "RESET_QUIZ",
//   SET_QUIZ_COMPLETE: "SET_QUIZ_COMPLETE",
//   SET_LOADING: "SET_LOADING",
//   SET_QUIZ_ACTIVE: "SET_QUIZ_ACTIVE"
// };

// const initialQuizState = {
//   currentModule: 1,
//   currentScene: 1,
//   responses: {},
//   score: 0,
//   totalQuestions: 0,
//   isComplete: false,
//   isLoading: false,
//   startTime: new Date(),
//   endTime: null,
//   quizActive: false
// };

// function quizReducer(state, action) {
//   switch (action.type) {
//     case QUIZ_ACTIONS.SET_CURRENT_MODULE:
//       return {
//         ...state,
//         currentModule: action.payload,
//         currentScene: 1
//       };

//     case "LOAD_STATE":
//       return {
//         ...state,
//         ...action.payload
//       };

//     case QUIZ_ACTIONS.SET_CURRENT_SCENE:
//       return {
//         ...state,
//         currentScene: action.payload
//       };

//     case QUIZ_ACTIONS.SUBMIT_RESPONSE: {
//       const { questionId, response, isCorrect, correctAnswer } = action.payload;

//       const isNewQuestion = !state.responses.hasOwnProperty(questionId);
//       const previousResponse = state.responses[questionId];
//       const wasCorrectBefore = previousResponse?.isCorrect ?? false;

//       console.log("🎯 Reducer SUBMIT_RESPONSE:", {
//         questionId,
//         response,
//         isCorrect,
//         isNewQuestion,
//         wasCorrectBefore,
//         currentScore: state.score,
//         currentTotal: state.totalQuestions
//       });

//       return {
//         ...state,
//         responses: {
//           ...state.responses,
//           [questionId]: {
//             response,
//             isCorrect
//           }
//         },
//         score: (() => {
//           if (isNewQuestion && isCorrect) {
//             console.log("📈 New question correct: +1");
//             return state.score + 1;
//           }
//           if (!isNewQuestion && !wasCorrectBefore && isCorrect) {
//             console.log("📈 Changed from wrong to correct: +1");
//             return state.score + 1;
//           }
//           if (!isNewQuestion && wasCorrectBefore && !isCorrect) {
//             console.log("📉 Changed from correct to wrong: -1");
//             return state.score - 1;
//           }
//           console.log("📊 Score unchanged");
//           return state.score;
//         })(),
//         totalQuestions: isNewQuestion
//           ? state.totalQuestions + 1
//           : state.totalQuestions
//       };
//     }

//     case QUIZ_ACTIONS.UPDATE_SCORE:
//       return {
//         ...state,
//         score: action.payload
//       };

//     case QUIZ_ACTIONS.SET_QUIZ_COMPLETE:
//       console.log("✅ Reducer: Marking quiz as complete");
//       return {
//         ...state,
//         isComplete: true,
//         endTime: new Date()
//       };

//     case QUIZ_ACTIONS.SET_LOADING:
//       return {
//         ...state,
//         isLoading: action.payload
//       };

//     case QUIZ_ACTIONS.RESET_QUIZ:
//       return {
//         ...initialQuizState,
//         startTime: new Date()
//       };

//     case QUIZ_ACTIONS.SET_QUIZ_ACTIVE:
//       return {
//         ...state,
//         quizActive: action.payload
//       };

//     default:
//       return state;
//   }
// }

// export function QuizProvider({ children }) {
//   const [quizState, dispatch] = useReducer(quizReducer, initialQuizState);
//   const scrollPositionRef = useRef({ x: 0, y: 0 });
//   const lenisInstanceRef = useRef(null);

//   // Store reference to Lenis instance
//   const setLenisInstance = useCallback((instance) => {
//     lenisInstanceRef.current = instance;
//   }, []);

//   // Load state from localStorage on mount
//   useEffect(() => {
//     const stored = localStorage.getItem("quizState");
//     if (stored) {
//       try {
//         const parsedState = JSON.parse(stored);
//         dispatch({ type: "LOAD_STATE", payload: parsedState });
//       } catch (error) {
//         console.error("Failed to parse stored quiz state:", error);
//       }
//     }
//   }, []);

//   // Debounced localStorage save to prevent excessive writes
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       localStorage.setItem("quizState", JSON.stringify(quizState));
//     }, 500); // Debounce by 500ms

//     return () => clearTimeout(timeoutId);
//   }, [quizState]);

//   // Store scroll position before state changes
//   const preserveScrollPosition = useCallback(() => {
//     scrollPositionRef.current = {
//       x: window.scrollX,
//       y: window.scrollY
//     };
//   }, []);

//   // Restore scroll position after state changes
//   const restoreScrollPosition = useCallback(() => {
//     const { x, y } = scrollPositionRef.current;

//     // Use multiple methods to ensure scroll position is restored
//     requestAnimationFrame(() => {
//       window.scrollTo(x, y);

//       // Also restore Lenis position if available
//       if (lenisInstanceRef.current) {
//         lenisInstanceRef.current.scrollTo(y, { immediate: true });
//       }

//       // Double-check after another frame
//       requestAnimationFrame(() => {
//         if (window.scrollX !== x || window.scrollY !== y) {
//           window.scrollTo(x, y);
//         }
//       });
//     });
//   }, []);

//   const submitResponse = useCallback(
//     async ({ questionId, response, correctAnswer }) => {
//       // Preserve scroll position before state change
//       preserveScrollPosition();

//       const isCorrect = response === correctAnswer;

//       console.log("📝 Context submitResponse:", {
//         questionId,
//         response,
//         correctAnswer,
//         isCorrect,
//         currentScore: quizState.score,
//         currentTotal: quizState.totalQuestions
//       });

//       dispatch({
//         type: QUIZ_ACTIONS.SUBMIT_RESPONSE,
//         payload: { questionId, response, isCorrect, correctAnswer }
//       });

//       // Restore scroll position after state change
//       setTimeout(restoreScrollPosition, 50);

//       return isCorrect;
//     },
//     [
//       preserveScrollPosition,
//       restoreScrollPosition,
//       quizState.score,
//       quizState.totalQuestions
//     ]
//   );

//   const freezeScroll = useCallback(() => {
//     preserveScrollPosition();
//     document.documentElement.classList.add("quiz-active");
//     document.body.classList.add("quiz-active");
//   }, [preserveScrollPosition]);

//   const resumeScroll = useCallback(() => {
//     document.documentElement.classList.remove("quiz-active");
//     document.body.classList.remove("quiz-active");
//     setTimeout(restoreScrollPosition, 50);
//   }, [restoreScrollPosition]);

//   const value = {
//     quizState,
//     dispatch,
//     actions: QUIZ_ACTIONS,
//     submitResponse,
//     freezeScroll,
//     resumeScroll,
//     setLenisInstance,
//     preserveScrollPosition,
//     restoreScrollPosition
//   };

//   return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
// }

// export function useQuiz() {
//   const context = useContext(QuizContext);
//   if (!context) {
//     throw new Error("useQuiz must be used within a QuizProvider");
//   }
//   return context;
// }

import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
  useRef
} from "react";

const QuizContext = createContext();

const QUIZ_ACTIONS = {
  SET_CURRENT_MODULE: "SET_CURRENT_MODULE",
  SET_CURRENT_SCENE: "SET_CURRENT_SCENE",
  SUBMIT_RESPONSE: "SUBMIT_RESPONSE",
  UPDATE_SCORE: "UPDATE_SCORE",
  RESET_QUIZ: "RESET_QUIZ",
  SET_QUIZ_COMPLETE: "SET_QUIZ_COMPLETE",
  SET_LOADING: "SET_LOADING",
  SET_QUIZ_ACTIVE: "SET_QUIZ_ACTIVE"
};

const initialQuizState = {
  currentModule: 1,
  currentScene: 1,
  responses: {},
  score: 0,
  totalQuestions: 0,
  totalModules: 15, // ✅ added for dynamic progress
  isComplete: false,
  isLoading: false,
  startTime: new Date(),
  endTime: null,
  quizActive: false
};

function quizReducer(state, action) {
  switch (action.type) {
    case QUIZ_ACTIONS.SET_CURRENT_MODULE:
      if (state.isComplete) return state; // ✅ Prevent navigation after complete
      return {
        ...state,
        currentModule: action.payload,
        currentScene: 1
      };

    case "LOAD_STATE":
      return {
        ...state,
        ...action.payload
      };

    case QUIZ_ACTIONS.SET_CURRENT_SCENE:
      if (state.isComplete) return state; // ✅ Prevent scene change after complete
      return {
        ...state,
        currentScene: action.payload
      };

    case QUIZ_ACTIONS.SUBMIT_RESPONSE: {
      const { questionId, response, isCorrect, correctAnswer } = action.payload;

      const isNewQuestion = !state.responses.hasOwnProperty(questionId);
      const previousResponse = state.responses[questionId];
      const wasCorrectBefore = previousResponse?.isCorrect ?? false;

      console.log("🎯 Reducer SUBMIT_RESPONSE:", {
        questionId,
        response,
        isCorrect,
        isNewQuestion,
        wasCorrectBefore,
        currentScore: state.score,
        currentTotal: state.totalQuestions
      });

      return {
        ...state,
        responses: {
          ...state.responses,
          [questionId]: {
            response,
            isCorrect
          }
        },
        score: (() => {
          if (isNewQuestion && isCorrect) return state.score + 1;
          if (!isNewQuestion && !wasCorrectBefore && isCorrect)
            return state.score + 1;
          if (!isNewQuestion && wasCorrectBefore && !isCorrect)
            return state.score - 1;
          return state.score;
        })(),
        totalQuestions: isNewQuestion
          ? state.totalQuestions + 1
          : state.totalQuestions
      };
    }

    case QUIZ_ACTIONS.UPDATE_SCORE:
      return {
        ...state,
        score: action.payload
      };

    case QUIZ_ACTIONS.SET_QUIZ_COMPLETE:
      console.log("✅ Reducer: Marking quiz as complete");
      return {
        ...state,
        isComplete: true,
        endTime: new Date()
      };

    case QUIZ_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case QUIZ_ACTIONS.RESET_QUIZ:
      return {
        ...initialQuizState,
        startTime: new Date()
      };

    case QUIZ_ACTIONS.SET_QUIZ_ACTIVE:
      return {
        ...state,
        quizActive: action.payload
      };

    default:
      return state;
  }
}

export function QuizProvider({ children }) {
  const [quizState, dispatch] = useReducer(quizReducer, initialQuizState);
  const scrollPositionRef = useRef({ x: 0, y: 0 });
  const lenisInstanceRef = useRef(null);

  // Store reference to Lenis instance
  const setLenisInstance = useCallback((instance) => {
    lenisInstanceRef.current = instance;
  }, []);

  // Load state from localStorage on mount with backward compatibility
  useEffect(() => {
    const stored = localStorage.getItem("quizState");
    if (stored) {
      try {
        const parsedState = { ...initialQuizState, ...JSON.parse(stored) }; // ✅ merge defaults
        dispatch({ type: "LOAD_STATE", payload: parsedState });
      } catch (error) {
        console.error("Failed to parse stored quiz state:", error);
      }
    }
  }, []);

  // Debounced localStorage save
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem("quizState", JSON.stringify(quizState));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [quizState]);

  const preserveScrollPosition = useCallback(() => {
    scrollPositionRef.current = {
      x: window.scrollX,
      y: window.scrollY
    };
  }, []);

  const restoreScrollPosition = useCallback(() => {
    const { x, y } = scrollPositionRef.current;
    requestAnimationFrame(() => {
      window.scrollTo(x, y);
      if (lenisInstanceRef.current) {
        lenisInstanceRef.current.scrollTo(y, { immediate: true });
      }
      requestAnimationFrame(() => {
        if (window.scrollX !== x || window.scrollY !== y) {
          window.scrollTo(x, y);
        }
      });
    });
  }, []);

  const submitResponse = useCallback(
    async ({ questionId, response, correctAnswer }) => {
      preserveScrollPosition();

      // ✅ Multi-answer safe check
      const isCorrect = Array.isArray(correctAnswer)
        ? Array.isArray(response) &&
          response.length === correctAnswer.length &&
          response.every((ans) => correctAnswer.includes(ans))
        : response === correctAnswer;

      console.log("📝 Context submitResponse:", {
        questionId,
        response,
        correctAnswer,
        isCorrect,
        currentScore: quizState.score,
        currentTotal: quizState.totalQuestions
      });

      dispatch({
        type: QUIZ_ACTIONS.SUBMIT_RESPONSE,
        payload: { questionId, response, isCorrect, correctAnswer }
      });

      setTimeout(restoreScrollPosition, 50);

      return isCorrect;
    },
    [
      preserveScrollPosition,
      restoreScrollPosition,
      quizState.score,
      quizState.totalQuestions
    ]
  );

  const freezeScroll = useCallback(() => {
    preserveScrollPosition();
    document.documentElement.classList.add("quiz-active");
    document.body.classList.add("quiz-active");
  }, [preserveScrollPosition]);

  const resumeScroll = useCallback(() => {
    document.documentElement.classList.remove("quiz-active");
    document.body.classList.remove("quiz-active");
    setTimeout(restoreScrollPosition, 50);
  }, [restoreScrollPosition]);

  const value = {
    quizState,
    dispatch,
    actions: QUIZ_ACTIONS,
    submitResponse,
    freezeScroll,
    resumeScroll,
    setLenisInstance,
    preserveScrollPosition,
    restoreScrollPosition
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}
