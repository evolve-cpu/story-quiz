// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { QuizProvider } from "../../context/QuizContext";
// import { useQuizProgress } from "../../hooks/useQuizProgress";
// import Module1 from "./modules/Module1";
// import Module2 from "./modules/Module2";
// import Module3 from "./modules/Module3";
// import QuizHeader from "./QuizHeader";
// import QuizComplete from "./QuizComplete";
// import { ArrowLeft } from "lucide-react";

// function QuizContent() {
//   const { currentModule, isComplete } = useQuizProgress();
//   const navigate = useNavigate();

//   const modules = {
//     1: Module1,
//     2: Module2,
//     3: Module3,
//   };

//   const CurrentModuleComponent = modules[currentModule];

//   if (isComplete) {
//     return <QuizComplete />;
//   }

//   return (
//     <div className="min-h-screen bg-evolve-black scrollbar-hide">
//       {/* <QuizHeader /> */}

//       {/* Back button */}
//       {/* <div className="absolute top-6 left-6 z-20">
//         <button
//           onClick={() => navigate('/quiz-selection')}
//           className="flex items-center gap-2 text-evolve-gray hover:text-evolve-white
//                    transition-colors duration-300 bg-evolve-charleston-green/80
//                    backdrop-blur-sm px-4 py-2 rounded-10px"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           <span className="font-montserrat">Back to Selection</span>
//         </button>
//       </div> */}

//       {CurrentModuleComponent && <CurrentModuleComponent />}
//     </div>
//   );
// }

// export default function QuizContainer() {
//   return (
//     <QuizProvider>
//       <QuizContent />
//     </QuizProvider>
//   );
// }

// import React, { useEffect } from "react";
// import { QuizProvider } from "../../context/QuizContext";
// import { useQuiz } from "../../context/QuizContext";
// import Module1 from "./modules/Module1";
// import Module2 from "./modules/Module2";
// import Module3 from "./modules/Module3";
// import QuizComplete from "./QuizComplete";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function QuizContent() {
//   const { quizState, dispatch, actions } = useQuiz();

//   useEffect(() => {
//     ScrollTrigger.create({
//       trigger: "#module-1",
//       start: "top center",
//       onEnter: () => dispatch({ type: actions.SET_CURRENT_MODULE, payload: 1 }),
//     });

//     ScrollTrigger.create({
//       trigger: "#module-2",
//       start: "top center",
//       onEnter: () => dispatch({ type: actions.SET_CURRENT_MODULE, payload: 2 }),
//     });

//     ScrollTrigger.create({
//       trigger: "#module-3",
//       start: "top center",
//       onEnter: () => dispatch({ type: actions.SET_CURRENT_MODULE, payload: 3 }),
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [dispatch, actions]);

//   if (quizState.isComplete) {
//     return <QuizComplete />;
//   }

//   return (
//     <div className="bg-evolve-black scrollbar-hide">
//       <div id="module-1">
//         <Module1 />
//       </div>
//       <div id="module-2" className="scroll-container">
//         <Module2 />
//       </div>
//       <div id="module-3">
//         <Module3 />
//       </div>
//     </div>
//   );
// }

// export default function QuizContainer() {
//   return (
//     <QuizProvider>
//       <QuizContent />
//     </QuizProvider>
//   );
// }

// import React, { useEffect } from "react";
// import { QuizProvider } from "../../context/QuizContext";
// import { useQuiz } from "../../context/QuizContext";
// import Module1 from "./modules/Module1";
// import Module2 from "./modules/Module2";
// import Module3 from "./modules/Module3";
// import QuizComplete from "./QuizComplete";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function QuizContent() {
//   const { quizState, dispatch, actions } = useQuiz();

//   // 🔁 Setup scroll triggers for each module
//   useEffect(() => {
//     const triggers = [
//       ScrollTrigger.create({
//         trigger: "#module-1",
//         start: "top center",
//         onEnter: () =>
//           dispatch({ type: actions.SET_CURRENT_MODULE, payload: 1 }),
//       }),
//       ScrollTrigger.create({
//         trigger: "#module-2",
//         start: "top center",
//         onEnter: () =>
//           dispatch({ type: actions.SET_CURRENT_MODULE, payload: 2 }),
//       }),
//       ScrollTrigger.create({
//         trigger: "#module-3",
//         start: "top center",
//         onEnter: () =>
//           dispatch({ type: actions.SET_CURRENT_MODULE, payload: 3 }),
//       }),
//     ];

//     return () => {
//       triggers.forEach((t) => t.kill());
//     };
//   }, [dispatch, actions]);

//   // ❄️ Freeze scroll and ScrollTrigger when quiz modal is active
//   useEffect(() => {
//     if (quizState.quizActive) {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
//       document.body.style.overflow = "hidden";
//     } else {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [quizState.quizActive]);

//   // ✅ Show final screen if quiz is complete
//   if (quizState.isComplete) {
//     return <QuizComplete />;
//   }

//   return (
//     <div className="bg-evolve-black scrollbar-hide">
//       <div id="module-1">
//         <Module1 />
//       </div>
//       <div id="module-2" className="scroll-container">
//         <Module2 />
//       </div>
//       <div id="module-3">
//         <Module3 />
//       </div>
//     </div>
//   );
// }

// export default function QuizContainer() {
//   return (
//     <QuizProvider>
//       <QuizContent />
//     </QuizProvider>
//   );
// }

// function QuizContent() {
//   const { quizState, dispatch, actions } = useQuiz();

//   useEffect(() => {
//     if (quizState.isComplete) {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       return;
//     }

//     ScrollTrigger.create({
//       trigger: "#module-1",
//       start: "top center",
//       onEnter: () => dispatch({ type: actions.SET_CURRENT_MODULE, payload: 1 })
//     });

//     ScrollTrigger.create({
//       trigger: "#module-2",
//       start: "top center",
//       onEnter: () => dispatch({ type: actions.SET_CURRENT_MODULE, payload: 2 })
//     });

//     ScrollTrigger.create({
//       trigger: "#module-3",
//       start: "top center",
//       onEnter: () => dispatch({ type: actions.SET_CURRENT_MODULE, payload: 3 })
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [dispatch, actions, quizState.isComplete]);

//   if (quizState.isComplete) {
//     return <QuizComplete />;
//   }

//   return (
//     <div className="bg-evolve-black scrollbar-hide">
//       <div id="module-1">
//         <Module1 />
//       </div>
//       <div id="module-2">
//         <Module2 />
//       </div>
//       <div id="module-3">
//         <Module3 />
//       </div>
//     </div>
//   );
// }

// function QuizContent() {
//   const { quizState, dispatch, actions } = useQuizProgress();

//   useEffect(() => {
//     if (quizState.isComplete) {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       return;
//     }

//     const triggers = [
//       ScrollTrigger.create({
//         trigger: "#module-1",
//         start: "top center",
//         onEnter: () =>
//           dispatch({ type: actions.SET_CURRENT_MODULE, payload: 1 })
//       }),
//       ScrollTrigger.create({
//         trigger: "#module-2",
//         start: "top center",
//         onEnter: () =>
//           dispatch({ type: actions.SET_CURRENT_MODULE, payload: 2 })
//       }),
//       ScrollTrigger.create({
//         trigger: "#module-3",
//         start: "top center",
//         onEnter: () =>
//           dispatch({ type: actions.SET_CURRENT_MODULE, payload: 3 })
//       })
//     ];

//     return () => {
//       triggers.forEach((trigger) => trigger.kill());
//     };
//   }, [dispatch, actions, quizState.isComplete]);

//   // Scroll freeze logic
//   // useEffect(() => {
//   //   if (quizState.quizIsActive) {
//   //     document.body.style.overflow = "hidden";
//   //   } else {
//   //     document.body.style.overflow = "auto";
//   //   }
//   // }, [quizState.quizIsActive]);

//   if (quizState.isComplete) {
//     return <QuizComplete />;
//   }

//   return (
//     <div
//       className={`bg-evolve-black scrollbar-hide transition-all lowercase duration-300 ${
//         quizState.quizIsActive ? "pointer-events-none blur-sm" : ""
//       }`}
//     >
//       <div id="module-1">
//         <Module1 />
//       </div>
//       <div id="module-2">
//         <Module2 />
//       </div>
//       {/* <div id="module-3">
//         <Module3 />
//       </div> */}
//     </div>
//   );
// }
// import React, { useEffect } from "react";
// import { QuizProvider } from "../../context/QuizContext";
// import { useQuizProgress } from "../../hooks/useQuizProgress";
// import Module1 from "./modules/Module1";
// import Module2 from "./modules/Module2";
// import Module3 from "./modules/Module3";
// import QuizComplete from "./QuizComplete";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function QuizContent() {
//   const quiz = useQuizProgress();

//   if (!quiz) {
//     console.error("useQuizProgress returned null");
//     return null;
//   }

//   const { quizState, dispatch, actions } = quiz;

//   if (!quizState) {
//     console.error("quizState is undefined");
//     return null;
//   }

//   console.log("QuizState:", quizState);

//   // if (quizState.isComplete) {
//   //   return <QuizComplete />;
//   // }
//   useEffect(() => {
//     console.log("State changed:", quizState);
//   }, [quizState]);

// useEffect(() => {
//   if (quizState.isComplete) {
//     console.log("QUIZ IS COMPLETE! Showing QuizComplete page...");
//   }
// }, [quizState.isComplete]);

//   // return (
//   //   <div className="bg-evolve-black scrollbar-hide">
//   //     <div id="module-1">
//   //       <Module1 />
//   //     </div>
//   //     <div id="module-2">
//   //       <Module2 />
//   //     </div>
//   //     <div style={{ height: "100vh" }} />
//   //     <div id="module-3">
//   //       <Module3 />
//   //     </div>
//   //   </div>
//   // );

//   return (
//     <div className="bg-evolve-black scrollbar-hide">
//       <div id="module-1">
//         <Module1 />
//       </div>

//       {/* Spacer after Module1 to transition into Module2 */}
//       <div className="h-[50vh] bg-transparent"></div>

//       <div id="module-2">
//         <Module2 />
//       </div>

//       {/* 👇 VERY IMPORTANT: Add scrollable spacer here */}
//       <div className="h-[200vh] bg-red-500">
//         <p className="text-white text-3xl text-center pt-20">
//           SCROLL SPACER TO MODULE 3
//         </p>
//       </div>

//       <div id="module-3">
//         <Module3 />
//       </div>

//       {/* Final footer space */}
//       <div className="h-[100vh] bg-black">jhdbcgh</div>
//     </div>
//   );
// }

// export default function QuizContainer() {
//   return (
//     <QuizProvider>
//       <QuizContent />
//     </QuizProvider>
//   );
// }

// QuizContainer.jsx — No Lenis, Native Scroll

import React, { useEffect } from "react";
import { QuizProvider, useQuiz } from "../../context/QuizContext";
import { useQuizProgress } from "../../hooks/useQuizProgress";
import Module1 from "./modules/Module1";
import Module2 from "./modules/Module2";
import Module3 from "./modules/Module3";
import QuizComplete from "./QuizComplete";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Module4 from "./modules/Module4";
import Module5 from "./modules/Module5";
import Module6 from "./modules/module6";
import Module7 from "./modules/Module7";
import Module8 from "./modules/Module8";
import Module9 from "./modules/Module9";
import Module10 from "./modules/Module10";
import Module11 from "./modules/Module11";
import Module12 from "./modules/Module12";
import Module13 from "./modules/Module13";
import Module14 from "./modules/Module14";
import Module15 from "./modules/Module15";
import Module16 from "./modules/Module16";
import Module17 from "./modules/Module17";

gsap.registerPlugin(ScrollTrigger);

function QuizContent() {
  const quiz = useQuizProgress();
  const { setLenisInstance } = useQuiz(); // You can remove this line later if unused

  if (!quiz) {
    console.error("useQuizProgress returned null");
    return null;
  }

  const { quizState } = quiz;

  if (!quizState) {
    console.error("quizState is undefined");
    return null;
  }

  useEffect(() => {
    ScrollTrigger.refresh(); // Ensure ScrollTrigger layout is updated
  }, []);

  useEffect(() => {
    console.log("State changed:", quizState);
  }, [quizState]);

  useEffect(() => {
    if (quizState.isComplete) {
      console.log("QUIZ IS COMPLETE! Showing QuizComplete page...");
    }
  }, [quizState.isComplete]);

  if (quizState.isComplete) {
    console.log("QUIZ IS COMPLETE! Showing QuizComplete page...");
    return <QuizComplete />;
  }

  return (
    <div className="relative bg-evolve-black min-h-[1000vh] overflow-x-hidden overflow-y-visible scrollbar-hide">
      <div id="module-1">
        <Module1 lenisInstance={null} />
      </div>

      <div id="module-2">
        <Module2 lenisInstance={null} />
      </div>

      <div id="module-3">
        <Module3 lenisInstance={null} />
      </div>

      <div id="module-4">
        <Module4 lenisInstance={null} />
      </div>

      <div id="module-5">
        <Module5 lenisInstance={null} />
      </div>
      <div id="module-6">
        <Module6 lenisInstance={null} />
      </div>
      <div id="module-7">
        <Module7 lenisInstance={null} />
      </div>
      <div id="module-8">
        <Module8 lenisInstance={null} />
      </div>
      <div id="module-9">
        <Module9 lenisInstance={null} />
      </div>
      <div id="module-10">
        <Module10 lenisInstance={null} />
      </div>
      <div id="module-11">
        <Module11 lenisInstance={null} />
      </div>
      <div id="module-12">
        <Module12 lenisInstance={null} />
      </div>
      <div id="module-13">
        <Module13 lenisInstance={null} />
      </div>
      <div id="module-14">
        <Module14 lenisInstance={null} />
      </div>
      <div id="module-15">
        <Module15 lenisInstance={null} />
      </div>
      <div id="module-16">
        <Module16 lenisInstance={null} />
      </div>
      <div id="module-17">
        <Module17 lenisInstance={null} />
      </div>
    </div>
  );
}

export default function QuizContainer() {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
}
