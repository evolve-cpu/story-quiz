// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { QuizProvider } from "../../context/QuizContext";
// // import { useQuizProgress } from "../../hooks/useQuizProgress";
// // import Module1 from "./modules/Module1";
// // import Module2 from "./modules/Module2";
// // import Module3 from "./modules/Module3";
// // import QuizHeader from "./QuizHeader";
// // import QuizComplete from "./QuizComplete";
// // import { ArrowLeft } from "lucide-react";

// // function QuizContent() {
// //   const { currentModule, isComplete } = useQuizProgress();
// //   const navigate = useNavigate();

// //   const modules = {
// //     1: Module1,
// //     2: Module2,
// //     3: Module3,
// //   };

// //   const CurrentModuleComponent = modules[currentModule];

// //   if (isComplete) {
// //     return <QuizComplete />;
// //   }

// //   return (
// //     <div className="min-h-screen bg-evolve-black scrollbar-hide">
// //       {/* <QuizHeader /> */}

// //       {/* Back button */}
// //       {/* <div className="absolute top-6 left-6 z-20">
// //         <button
// //           onClick={() => navigate('/quiz-selection')}
// //           className="flex items-center gap-2 text-evolve-gray hover:text-evolve-white
// //                    transition-colors duration-300 bg-evolve-charleston-green/80
// //                    backdrop-blur-sm px-4 py-2 rounded-10px"
// //         >
// //           <ArrowLeft className="w-5 h-5" />
// //           <span className="font-montserrat">Back to Selection</span>
// //         </button>
// //       </div> */}

// //       {CurrentModuleComponent && <CurrentModuleComponent />}
// //     </div>
// //   );
// // }

// // export default function QuizContainer() {
// //   return (
// //     <QuizProvider>
// //       <QuizContent />
// //     </QuizProvider>
// //   );
// // }

// // import React, { useEffect } from "react";
// // import { QuizProvider } from "../../context/QuizContext";
// // import { useQuiz } from "../../context/QuizContext";
// // import Module1 from "./modules/Module1";
// // import Module2 from "./modules/Module2";
// // import Module3 from "./modules/Module3";
// // import QuizComplete from "./QuizComplete";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // function QuizContent() {
// //   const { quizState, dispatch, actions } = useQuiz();

// //   useEffect(() => {
// //     ScrollTrigger.create({
// //       trigger: "#module-1",
// //       start: "top center",
// //       onEnter: () => dispatch({ type: actions.SET_CURRENT_MODULE, payload: 1 }),
// //     });

// //     ScrollTrigger.create({
// //       trigger: "#module-2",
// //       start: "top center",
// //       onEnter: () => dispatch({ type: actions.SET_CURRENT_MODULE, payload: 2 }),
// //     });

// //     ScrollTrigger.create({
// //       trigger: "#module-3",
// //       start: "top center",
// //       onEnter: () => dispatch({ type: actions.SET_CURRENT_MODULE, payload: 3 }),
// //     });

// //     return () => {
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// //     };
// //   }, [dispatch, actions]);

// //   if (quizState.isComplete) {
// //     return <QuizComplete />;
// //   }

// //   return (
// //     <div className="bg-evolve-black scrollbar-hide">
// //       <div id="module-1">
// //         <Module1 />
// //       </div>
// //       <div id="module-2" className="scroll-container">
// //         <Module2 />
// //       </div>
// //       <div id="module-3">
// //         <Module3 />
// //       </div>
// //     </div>
// //   );
// // }

// // export default function QuizContainer() {
// //   return (
// //     <QuizProvider>
// //       <QuizContent />
// //     </QuizProvider>
// //   );
// // }

// // import React, { useEffect } from "react";
// // import { QuizProvider } from "../../context/QuizContext";
// // import { useQuiz } from "../../context/QuizContext";
// // import Module1 from "./modules/Module1";
// // import Module2 from "./modules/Module2";
// // import Module3 from "./modules/Module3";
// // import QuizComplete from "./QuizComplete";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // function QuizContent() {
// //   const { quizState, dispatch, actions } = useQuiz();

// //   // 🔁 Setup scroll triggers for each module
// //   useEffect(() => {
// //     const triggers = [
// //       ScrollTrigger.create({
// //         trigger: "#module-1",
// //         start: "top center",
// //         onEnter: () =>
// //           dispatch({ type: actions.SET_CURRENT_MODULE, payload: 1 }),
// //       }),
// //       ScrollTrigger.create({
// //         trigger: "#module-2",
// //         start: "top center",
// //         onEnter: () =>
// //           dispatch({ type: actions.SET_CURRENT_MODULE, payload: 2 }),
// //       }),
// //       ScrollTrigger.create({
// //         trigger: "#module-3",
// //         start: "top center",
// //         onEnter: () =>
// //           dispatch({ type: actions.SET_CURRENT_MODULE, payload: 3 }),
// //       }),
// //     ];

// //     return () => {
// //       triggers.forEach((t) => t.kill());
// //     };
// //   }, [dispatch, actions]);

// //   // ❄️ Freeze scroll and ScrollTrigger when quiz modal is active
// //   useEffect(() => {
// //     if (quizState.quizActive) {
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
// //       document.body.style.overflow = "hidden";
// //     } else {
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
// //       document.body.style.overflow = "auto";
// //     }

// //     return () => {
// //       document.body.style.overflow = "auto";
// //     };
// //   }, [quizState.quizActive]);

// //   // ✅ Show final screen if quiz is complete
// //   if (quizState.isComplete) {
// //     return <QuizComplete />;
// //   }

// //   return (
// //     <div className="bg-evolve-black scrollbar-hide">
// //       <div id="module-1">
// //         <Module1 />
// //       </div>
// //       <div id="module-2" className="scroll-container">
// //         <Module2 />
// //       </div>
// //       <div id="module-3">
// //         <Module3 />
// //       </div>
// //     </div>
// //   );
// // }

// // export default function QuizContainer() {
// //   return (
// //     <QuizProvider>
// //       <QuizContent />
// //     </QuizProvider>
// //   );
// // }

// // function QuizContent() {
// //   const { quizState, dispatch, actions } = useQuiz();

// //   useEffect(() => {
// //     if (quizState.isComplete) {
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// //       return;
// //     }

// //     ScrollTrigger.create({
// //       trigger: "#module-1",
// //       start: "top center",
// //       onEnter: () => dispatch({ type: actions.SET_CURRENT_MODULE, payload: 1 })
// //     });

// //     ScrollTrigger.create({
// //       trigger: "#module-2",
// //       start: "top center",
// //       onEnter: () => dispatch({ type: actions.SET_CURRENT_MODULE, payload: 2 })
// //     });

// //     ScrollTrigger.create({
// //       trigger: "#module-3",
// //       start: "top center",
// //       onEnter: () => dispatch({ type: actions.SET_CURRENT_MODULE, payload: 3 })
// //     });

// //     return () => {
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// //     };
// //   }, [dispatch, actions, quizState.isComplete]);

// //   if (quizState.isComplete) {
// //     return <QuizComplete />;
// //   }

// //   return (
// //     <div className="bg-evolve-black scrollbar-hide">
// //       <div id="module-1">
// //         <Module1 />
// //       </div>
// //       <div id="module-2">
// //         <Module2 />
// //       </div>
// //       <div id="module-3">
// //         <Module3 />
// //       </div>
// //     </div>
// //   );
// // }

// // function QuizContent() {
// //   const { quizState, dispatch, actions } = useQuizProgress();

// //   useEffect(() => {
// //     if (quizState.isComplete) {
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// //       return;
// //     }

// //     const triggers = [
// //       ScrollTrigger.create({
// //         trigger: "#module-1",
// //         start: "top center",
// //         onEnter: () =>
// //           dispatch({ type: actions.SET_CURRENT_MODULE, payload: 1 })
// //       }),
// //       ScrollTrigger.create({
// //         trigger: "#module-2",
// //         start: "top center",
// //         onEnter: () =>
// //           dispatch({ type: actions.SET_CURRENT_MODULE, payload: 2 })
// //       }),
// //       ScrollTrigger.create({
// //         trigger: "#module-3",
// //         start: "top center",
// //         onEnter: () =>
// //           dispatch({ type: actions.SET_CURRENT_MODULE, payload: 3 })
// //       })
// //     ];

// //     return () => {
// //       triggers.forEach((trigger) => trigger.kill());
// //     };
// //   }, [dispatch, actions, quizState.isComplete]);

// //   // Scroll freeze logic
// //   // useEffect(() => {
// //   //   if (quizState.quizIsActive) {
// //   //     document.body.style.overflow = "hidden";
// //   //   } else {
// //   //     document.body.style.overflow = "auto";
// //   //   }
// //   // }, [quizState.quizIsActive]);

// //   if (quizState.isComplete) {
// //     return <QuizComplete />;
// //   }

// //   return (
// //     <div
// //       className={`bg-evolve-black scrollbar-hide transition-all lowercase duration-300 ${
// //         quizState.quizIsActive ? "pointer-events-none blur-sm" : ""
// //       }`}
// //     >
// //       <div id="module-1">
// //         <Module1 />
// //       </div>
// //       <div id="module-2">
// //         <Module2 />
// //       </div>
// //       {/* <div id="module-3">
// //         <Module3 />
// //       </div> */}
// //     </div>
// //   );
// // }
// // import React, { useEffect } from "react";
// // import { QuizProvider } from "../../context/QuizContext";
// // import { useQuizProgress } from "../../hooks/useQuizProgress";
// // import Module1 from "./modules/Module1";
// // import Module2 from "./modules/Module2";
// // import Module3 from "./modules/Module3";
// // import QuizComplete from "./QuizComplete";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // function QuizContent() {
// //   const quiz = useQuizProgress();

// //   if (!quiz) {
// //     console.error("useQuizProgress returned null");
// //     return null;
// //   }

// //   const { quizState, dispatch, actions } = quiz;

// //   if (!quizState) {
// //     console.error("quizState is undefined");
// //     return null;
// //   }

// //   console.log("QuizState:", quizState);

// //   // if (quizState.isComplete) {
// //   //   return <QuizComplete />;
// //   // }
// //   useEffect(() => {
// //     console.log("State changed:", quizState);
// //   }, [quizState]);

// // useEffect(() => {
// //   if (quizState.isComplete) {
// //     console.log("QUIZ IS COMPLETE! Showing QuizComplete page...");
// //   }
// // }, [quizState.isComplete]);

// //   // return (
// //   //   <div className="bg-evolve-black scrollbar-hide">
// //   //     <div id="module-1">
// //   //       <Module1 />
// //   //     </div>
// //   //     <div id="module-2">
// //   //       <Module2 />
// //   //     </div>
// //   //     <div style={{ height: "100vh" }} />
// //   //     <div id="module-3">
// //   //       <Module3 />
// //   //     </div>
// //   //   </div>
// //   // );

// //   return (
// //     <div className="bg-evolve-black scrollbar-hide">
// //       <div id="module-1">
// //         <Module1 />
// //       </div>

// //       {/* Spacer after Module1 to transition into Module2 */}
// //       <div className="h-[50vh] bg-transparent"></div>

// //       <div id="module-2">
// //         <Module2 />
// //       </div>

// //       {/* 👇 VERY IMPORTANT: Add scrollable spacer here */}
// //       <div className="h-[200vh] bg-red-500">
// //         <p className="text-white text-3xl text-center pt-20">
// //           SCROLL SPACER TO MODULE 3
// //         </p>
// //       </div>

// //       <div id="module-3">
// //         <Module3 />
// //       </div>

// //       {/* Final footer space */}
// //       <div className="h-[100vh] bg-black">jhdbcgh</div>
// //     </div>
// //   );
// // }

// // export default function QuizContainer() {
// //   return (
// //     <QuizProvider>
// //       <QuizContent />
// //     </QuizProvider>
// //   );
// // }

// // QuizContainer.jsx — No Lenis, Native Scroll

// import React, { useEffect } from "react";
// import { QuizProvider, useQuiz } from "../../context/QuizContext";
// import { useQuizProgress } from "../../hooks/useQuizProgress";
// import Module1 from "./modules/Module1";
// import Module2 from "./modules/Module2";
// import Module3 from "./modules/Module3";
// import QuizComplete from "./QuizComplete";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Module4 from "./modules/Module4";
// import Module5 from "./modules/Module5";
// import Module6 from "./modules/module6";
// import Module7 from "./modules/Module7";
// import Module8 from "./modules/Module8";
// import Module9 from "./modules/Module9";
// import Module10 from "./modules/Module10";
// import Module11 from "./modules/Module11";
// import Module12 from "./modules/Module12";
// import Module13 from "./modules/Module13";
// import Module14 from "./modules/Module14";
// import Module15 from "./modules/Module15";
// import Module16 from "./modules/Module16";
// import Module17 from "./modules/Module17";

// gsap.registerPlugin(ScrollTrigger);

// function QuizContent() {
//   // ✅ Temporary toggle to test score screen
//   // const DEV_SHOW_SCORE = true; // set to false when done testing

//   // if (DEV_SHOW_SCORE) {
//   //   return <QuizComplete />;
//   // }

//   const quiz = useQuizProgress();
//   const { setLenisInstance } = useQuiz(); // You can remove this line later if unused

//   if (!quiz) {
//     console.error("useQuizProgress returned null");
//     return null;
//   }

//   const { quizState } = quiz;

//   if (!quizState) {
//     console.error("quizState is undefined");
//     return null;
//   }

//   useEffect(() => {
//     ScrollTrigger.refresh(); // Ensure ScrollTrigger layout is updated
//   }, []);

//   useEffect(() => {
//     console.log("State changed:", quizState);
//   }, [quizState]);

//   useEffect(() => {
//     if (quizState.isComplete) {
//       console.log("QUIZ IS COMPLETE! Showing QuizComplete page...");
//     }
//   }, [quizState.isComplete]);

//   if (quizState.isComplete) {
//     console.log("QUIZ IS COMPLETE! Showing QuizComplete page...");
//     return <QuizComplete />;
//   }

//   return (
//     <div className="relative bg-evolve-black min-h-[1000vh] overflow-x-hidden overflow-y-visible scrollbar-hide">
//       <div id="module-1">
//         <Module1 lenisInstance={null} />
//       </div>

//       <div id="module-2">
//         <Module2 lenisInstance={null} />
//       </div>

//       <div id="module-3">
//         <Module3 lenisInstance={null} />
//       </div>

//       <div id="module-4">
//         <Module4 lenisInstance={null} />
//       </div>

//       <div id="module-5">
//         <Module5 lenisInstance={null} />
//       </div>
//       <div id="module-6">
//         <Module6 lenisInstance={null} />
//       </div>
//       <div id="module-7">
//         <Module7 lenisInstance={null} />
//       </div>
//       <div id="module-8">
//         <Module8 lenisInstance={null} />
//       </div>
//       <div id="module-9">
//         <Module9 lenisInstance={null} />
//       </div>
//       <div id="module-10">
//         <Module10 lenisInstance={null} />
//       </div>
//       <div id="module-11">
//         <Module11 lenisInstance={null} />
//       </div>
//       <div id="module-12">
//         <Module12 lenisInstance={null} />
//       </div>
//       <div id="module-13">
//         <Module13 lenisInstance={null} />
//       </div>
//       <div id="module-14">
//         <Module14 lenisInstance={null} />
//       </div>
//       <div id="module-15">
//         <Module15 lenisInstance={null} />
//       </div>
//       <div id="module-16">
//         <Module16 lenisInstance={null} />
//       </div>
//       <div id="module-17">
//         <Module17 lenisInstance={null} />
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

import React, { useEffect, Suspense, useState } from "react";
import { QuizProvider, useQuiz } from "../../context/QuizContext";
import { useQuizProgress } from "../../hooks/useQuizProgress";
import QuizComplete from "./QuizComplete";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { evolveLogo } from "../../assets/images/avatar";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// ✅ Lazy imports for modules
const Module1 = React.lazy(() => import("./modules/Module1"));
const Module2 = React.lazy(() => import("./modules/Module2"));
const Module3 = React.lazy(() => import("./modules/Module3"));
const Module4 = React.lazy(() => import("./modules/Module4"));
const Module5 = React.lazy(() => import("./modules/Module5"));
const Module6 = React.lazy(() => import("./modules/module6"));
const Module7 = React.lazy(() => import("./modules/Module7"));
const Module8 = React.lazy(() => import("./modules/Module8"));
const Module9 = React.lazy(() => import("./modules/Module9"));
const Module10 = React.lazy(() => import("./modules/Module10"));
const Module11 = React.lazy(() => import("./modules/Module11"));
const Module12 = React.lazy(() => import("./modules/Module12"));
const Module13 = React.lazy(() => import("./modules/Module13"));
const Module14 = React.lazy(() => import("./modules/Module14"));
const Module15 = React.lazy(() => import("./modules/Module15"));
const Module16 = React.lazy(() => import("./modules/Module16"));
const Module17 = React.lazy(() => import("./modules/Module17"));

function QuizContent() {
  // ✅ Temporary toggle to test score screen
  // const DEV_SHOW_SCORE = true; // set to false when done testing

  // if (DEV_SHOW_SCORE) {
  //   return <QuizComplete />;
  // }
  const quiz = useQuizProgress();
  const { setLenisInstance } = useQuiz();

  if (!quiz) {
    console.error("useQuizProgress returned null");
    return null;
  }

  const { quizState } = quiz;
  if (!quizState) {
    console.error("quizState is undefined");
    return null;
  }

  const [loadedModules, setLoadedModules] = useState([1]); // Load only module 1 initially

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.globalTimeline.clear();
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    if (quizState.isComplete) {
      console.log("QUIZ COMPLETE! Showing QuizComplete page...");
    }
  }, [quizState.isComplete]);

  // Dynamically load next modules when scrolling down
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight;

    if (scrollY + windowHeight * 2 >= docHeight) {
      setLoadedModules((prev) => {
        const next = prev.length + 1;
        return next <= 17 && !prev.includes(next) ? [...prev, next] : prev;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   if (loadedModules.includes(3)) {
  //     // ✅ when Module3 is added to DOM, recalc GSAP
  //     setTimeout(() => ScrollTrigger.refresh(), 100);
  //   }
  // }, [loadedModules]);

  if (quizState.isComplete) {
    return <QuizComplete />;
  }

  return (
    <div className="relative bg-black  overflow-x-hidden overflow-y-visible scrollbar-hide">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
      {/* ✅ Fixed Logo at top-left */}
      {/* ✅ Fixed Logo at top-left, clickable */}
      <Link to="/" className="fixed top-6 left-6 z-50">
        <img
          src={evolveLogo}
          alt="Evolve Logo"
          className="w-20 sm:w-28 h-auto cursor-pointer transition-transform hover:scale-105 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
        />
      </Link>

      <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
        {loadedModules.includes(1) && (
          <div id="module-1">
            <Module1 />
          </div>
        )}
        {loadedModules.includes(2) && (
          <div id="module-2">
            <Module2 />
          </div>
        )}
        {loadedModules.includes(3) && (
          <div id="module-3">
            <Module3 />
          </div>
        )}
        {loadedModules.includes(4) && (
          <div id="module-4">
            <Module4 />
          </div>
        )}
        {loadedModules.includes(5) && (
          <div id="module-5">
            <Module5 />
          </div>
        )}
        {loadedModules.includes(6) && (
          <div id="module-6">
            <Module6 />
          </div>
        )}
        {loadedModules.includes(7) && (
          <div id="module-7">
            <Module7 />
          </div>
        )}
        {loadedModules.includes(8) && (
          <div id="module-8">
            <Module8 />
          </div>
        )}
        {loadedModules.includes(9) && (
          <div id="module-9">
            <Module9 />
          </div>
        )}
        {loadedModules.includes(10) && (
          <div id="module-10">
            <Module10 />
          </div>
        )}
        {loadedModules.includes(11) && (
          <div id="module-11">
            <Module11 />
          </div>
        )}
        {loadedModules.includes(12) && (
          <div id="module-12">
            <Module12 />
          </div>
        )}
        {loadedModules.includes(13) && (
          <div id="module-13">
            <Module13 />
          </div>
        )}
        {loadedModules.includes(14) && (
          <div id="module-14">
            <Module14 />
          </div>
        )}
        {loadedModules.includes(15) && (
          <div id="module-15">
            <Module15 />
          </div>
        )}
        {loadedModules.includes(16) && (
          <div id="module-16">
            <Module16 />
          </div>
        )}
        {loadedModules.includes(17) && (
          <div id="module-17">
            <Module17 />
          </div>
        )}
      </Suspense>
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none">
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent" />
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

// import React, { useEffect, Suspense, useState } from "react";
// import { QuizProvider, useQuiz } from "../../context/QuizContext";
// import { useQuizProgress } from "../../hooks/useQuizProgress";
// import QuizComplete from "./QuizComplete";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { evolveLogo } from "../../assets/images/avatar";
// import { Link } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

// const Module1 = React.lazy(() => import("./modules/Module1"));
// const Module2 = React.lazy(() => import("./modules/Module2"));
// const Module3 = React.lazy(() => import("./modules/Module3"));
// const Module4 = React.lazy(() => import("./modules/Module4"));
// const Module5 = React.lazy(() => import("./modules/Module5"));
// const Module6 = React.lazy(() => import("./modules/module6"));
// const Module7 = React.lazy(() => import("./modules/Module7"));
// const Module8 = React.lazy(() => import("./modules/Module8"));
// const Module9 = React.lazy(() => import("./modules/Module9"));
// const Module10 = React.lazy(() => import("./modules/Module10"));
// const Module11 = React.lazy(() => import("./modules/Module11"));
// const Module12 = React.lazy(() => import("./modules/Module12"));
// const Module13 = React.lazy(() => import("./modules/Module13"));
// const Module14 = React.lazy(() => import("./modules/Module14"));
// const Module15 = React.lazy(() => import("./modules/Module15"));
// const Module16 = React.lazy(() => import("./modules/Module16"));
// const Module17 = React.lazy(() => import("./modules/Module17"));

// function QuizContent() {
//   const quiz = useQuizProgress();
//   const { setLenisInstance } = useQuiz();

//   if (!quiz) {
//     console.error("useQuizProgress returned null");
//     return null;
//   }

//   const { quizState } = quiz;
//   if (!quizState) {
//     console.error("quizState is undefined");
//     return null;
//   }

//   const [loadedModules, setLoadedModules] = useState([1]);

//   useEffect(() => {
//     ScrollTrigger.refresh();
//   }, []);

//   useEffect(() => {
//     if (quizState.isComplete) {
//       console.log("✅ QUIZ COMPLETE! Showing QuizComplete page...");
//     }
//   }, [quizState.isComplete]);

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     const windowHeight = window.innerHeight;
//     const docHeight = document.body.scrollHeight;

//     if (scrollY + windowHeight * 2 >= docHeight) {
//       setLoadedModules((prev) => {
//         const next = prev.length + 1;
//         // ✅ allow loading up to module 17
//         return next <= 17 && !prev.includes(next) ? [...prev, next] : prev;
//       });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ If quiz is complete, render QuizComplete page
//   if (quizState.isComplete) {
//     return <QuizComplete />;
//   }

//   return (
//     <div className="relative bg-black overflow-x-hidden overflow-y-visible scrollbar-hide">
//       <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

//       <Link to="/" className="fixed top-6 left-6 z-50">
//         <img
//           src={evolveLogo}
//           alt="Evolve Logo"
//           className="w-20 sm:w-28 h-auto cursor-pointer transition-transform hover:scale-105 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
//         />
//       </Link>

//       <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
//         {loadedModules.includes(1) && <Module1 />}
//         {loadedModules.includes(2) && <Module2 />}
//         {/* {loadedModules.includes(3) && <Module3 />} */}
//         {loadedModules.includes(4) && <Module4 />}
//         {loadedModules.includes(5) && <Module5 />}
//         {loadedModules.includes(6) && <Module6 />}
//         {loadedModules.includes(7) && <Module7 />}
//         {loadedModules.includes(8) && <Module8 />}
//         {loadedModules.includes(9) && <Module9 />}
//         {loadedModules.includes(10) && <Module10 />}
//         {loadedModules.includes(11) && <Module11 />}
//         {loadedModules.includes(12) && <Module12 />}
//         {loadedModules.includes(13) && <Module13 />}
//         {loadedModules.includes(14) && <Module14 />}
//         {loadedModules.includes(15) && <Module15 />}
//         {loadedModules.includes(16) && <Module16 />}
//         {loadedModules.includes(17) && <Module17 />}
//       </Suspense>

//       <div className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none">
//         <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent" />
//         <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent" />
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
