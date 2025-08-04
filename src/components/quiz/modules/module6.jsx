// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   story_scene_11_bg,
//   story_scene_11_char,
//   story_scene_11_bg_mobile,
//   story_scene_11_char_mobile
// } from "../../../assets/images/avatar";

// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module6 = () => {
//   const containerRef = useRef(null);
//   const bgRef = useRef(null);
//   const charRef = useRef(null);

//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   const { submitResponse } = useQuizProgress();
//   const isMobile = window.innerWidth <= 768;

//   useEffect(() => {
//     gsap.set([charRef.current, bgRef.current], { opacity: 0 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=4000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     // CHAR first
//     tl.to(charRef.current, {
//       opacity: 1,
//       duration: 1
//     });

//     // BG fades in and zooms slightly off-center to right
//     tl.set(bgRef.current, {
//       transformOrigin: "100% center"
//     });

//     tl.to(
//       bgRef.current,
//       {
//         opacity: 1,
//         duration: 1
//       },
//       "<"
//     );

//     tl.to(bgRef.current, {
//       scale: 1.3,
//       duration: 3,
//       ease: "power2.out"
//     });

//     // Pause for quiz
//     tl.call(() => {
//       if (!quizCompleted) {
//         setShowQuiz(true);
//         document.body.style.overflow = "hidden";
//         const scrollContainer = document.getElementById("module-6");
//         if (scrollContainer) scrollContainer.style.overflow = "hidden";
//         tl.pause();
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === containerRef.current) {
//           trigger.kill();
//         }
//       });
//       tl.kill();
//       document.body.style.overflow = "auto";
//       const scrollContainer = document.getElementById("module-6");
//       if (scrollContainer) scrollContainer.style.overflow = "auto";
//     };
//   }, [quizCompleted]);

//   const handleQuiz3Close = (response, isCorrect) => {
//     setShowQuiz(false);
//     setQuizCompleted(true);
//     document.body.style.overflow = "auto";
//     const scrollContainer = document.getElementById("module-6");
//     if (scrollContainer) scrollContainer.style.overflow = "auto";

//     submitResponse({
//       questionId: "scene11_q1",
//       response,
//       correctAnswer:
//         "The crossing used low-contrast paint that blends into the road"
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-6"
//       className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white lowercase relative bg-black"
//     >
//       {/* Scene 11 Visuals */}
//       <div className="absolute top-0 left-0 w-full h-full z-40 flex items-center justify-center overflow-visible pointer-events-none">
//         {/* BG */}
//         <img
//           ref={bgRef}
//           src={isMobile ? story_scene_11_bg_mobile : story_scene_11_bg}
//           alt="Scene 11 BG"
//           //   className="absolute object-cover w-full h-full opacity-0 z-10"

//           className={`absolute  opacity-0 z-10 ${
//             isMobile ? "mobile-bg" : " w-full h-full object-cover"
//           }`}
//         />
//         {/* CHAR */}
//         <img
//           ref={charRef}
//           src={isMobile ? story_scene_11_char_mobile : story_scene_11_char}
//           alt="Scene 11 Char"
//           className={`absolute bottom-0 left-0 z-50 opacity-0 ${
//             isMobile ? "mobile-char" : " h-full"
//           }`}
//         />

//         {/* Optional gradient overlays */}
//         <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
//           <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent" />
//           <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent" />
//         </div>
//       </div>

//       {/* Quiz Modal */}
//       {showQuiz && (
//         <QuizQuestionModal
//           isVisible={showQuiz}
//           onClose={handleQuiz3Close}
//           questionId="scene11_q1"
//           question="What went wrong here?"
//           options={[
//             "The crossing used low-contrast paint that blends into the road",
//             "The crossing was placed too close to the traffic signal",
//             "The stripes were painted using decorative patterns instead of standard ones",
//             "The crossing was missing tactile indicators for pedestrians"
//           ]}
//           correctIndex={0}
//           reason="Low-contrast paint makes the crossing hard to notice, especially for drivers, which reduces safety."
//           backgroundImage={
//             isMobile ? story_scene_11_bg_mobile : story_scene_11_bg
//           }
//           type="single"
//         />
//       )}
//     </div>
//   );
// };

// export default Module6;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   story_scene_11_bg,
//   story_scene_11_char,
//   story_scene_11_bg_mobile,
//   story_scene_11_char_mobile
// } from "../../../assets/images/avatar";

// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module6 = () => {
//   const containerRef = useRef(null);
//   const bgRef = useRef(null);
//   const charRef = useRef(null);
//   const timelineRef = useRef(null);

//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [animationPhase, setAnimationPhase] = useState("initial"); // 'initial', 'quiz', 'transition'

//   const { submitResponse } = useQuizProgress();
//   const isMobile = window.innerWidth <= 768;

//   useEffect(() => {
//     gsap.set([charRef.current, bgRef.current], { opacity: 0 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=4000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     timelineRef.current = tl;

//     // CHAR first
//     tl.to(charRef.current, {
//       opacity: 1,
//       duration: 1
//     });

//     // BG fades in and zooms slightly off-center to right
//     tl.set(bgRef.current, {
//       transformOrigin: "100% center"
//     });

//     tl.to(
//       bgRef.current,
//       {
//         opacity: 1,
//         duration: 1
//       },
//       "<"
//     );

//     tl.to(bgRef.current, {
//       scale: 1.3,
//       duration: 3,
//       ease: "power2.out"
//     });

//     // Pause for quiz - this is where the timeline should stop
//     tl.call(() => {
//       if (!quizCompleted) {
//         setShowQuiz(true);
//         setAnimationPhase("quiz");
//         document.body.style.overflow = "hidden";
//         const scrollContainer = document.getElementById("module-6");
//         if (scrollContainer) scrollContainer.style.overflow = "hidden";

//         // Pause the timeline here
//         tl.pause();
//       }
//     });

//     // This part will only run after quiz is completed and timeline is resumed
//     tl.to([charRef.current, bgRef.current], {
//       opacity: 0,
//       duration: 1,
//       ease: "power2.in"
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === containerRef.current) {
//           trigger.kill();
//         }
//       });
//       if (timelineRef.current) {
//         timelineRef.current.kill();
//       }
//       document.body.style.overflow = "auto";
//       const scrollContainer = document.getElementById("module-6");
//       if (scrollContainer) scrollContainer.style.overflow = "auto";
//     };
//   }, [quizCompleted]); // Removed showQuiz from dependencies

//   // Effect to handle quiz completion and timeline resumption
//   useEffect(() => {
//     if (quizCompleted && timelineRef.current && animationPhase === "quiz") {
//       setAnimationPhase("transition");
//       // Resume the timeline to continue to the fade out
//       timelineRef.current.resume();

//       // Allow scroll to continue
//       document.body.style.overflow = "auto";
//       const scrollContainer = document.getElementById("module-6");
//       if (scrollContainer) scrollContainer.style.overflow = "auto";
//     }
//   }, [quizCompleted, animationPhase]);

//   const handleQuiz3Close = () => {
//     // const handleQuiz3Close = (response, isCorrect) => {
//     setShowQuiz(false);
//     setQuizCompleted(true);

//     // submitResponse({
//     //   questionId: "scene11_q1",
//     //   response,
//     //   correctAnswer:
//     //     "The crossing used low-contrast paint that blends into the road"
//     // });
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-6"
//       className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white lowercase relative bg-black"
//     >
//       {/* Scene 11 Visuals */}
//       <div className="absolute top-0 left-0 w-full h-full z-40 flex items-center justify-center overflow-visible pointer-events-none">
//         {/* BG */}
//         <img
//           ref={bgRef}
//           src={isMobile ? story_scene_11_bg_mobile : story_scene_11_bg}
//           alt="Scene 11 BG"
//           className={`absolute opacity-0 z-10 ${
//             isMobile ? "mobile-bg" : " w-full h-full object-cover"
//           }`}
//         />
//         {/* CHAR */}
//         <img
//           ref={charRef}
//           src={isMobile ? story_scene_11_char_mobile : story_scene_11_char}
//           alt="Scene 11 Char"
//           className={`absolute bottom-0 left-0 z-50 opacity-0 ${
//             isMobile ? "mobile-char" : " h-full"
//           }`}
//         />

//         {/* Optional gradient overlays */}
//         <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
//           <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent" />
//           <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent" />
//         </div>
//       </div>

//       {/* Quiz Modal */}
//       {showQuiz && (
//         <QuizQuestionModal
//           isVisible={showQuiz}
//           onClose={handleQuiz3Close}
//           questionId="scene11_q1"
//           question="What went wrong here?"
//           options={[
//             "The crossing used low-contrast paint that blends into the road",
//             "The crossing was placed too close to the traffic signal",
//             "The stripes were painted using decorative patterns instead of standard ones",
//             "The crossing was missing tactile indicators for pedestrians"
//           ]}
//           correctIndex={0}
//           reason="Low-contrast paint makes the crossing hard to notice, especially for drivers, which reduces safety."
//           backgroundImage={
//             isMobile ? story_scene_11_bg_mobile : story_scene_11_bg
//           }
//           type="single"
//         />
//       )}
//     </div>
//   );
// };

// export default Module6;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   story_scene_11_bg,
//   story_scene_11_char,
//   story_scene_11_bg_mobile,
//   story_scene_11_char_mobile
// } from "../../../assets/images/avatar";

// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module6 = () => {
//   const containerRef = useRef(null);
//   const bgRef = useRef(null);
//   const charRef = useRef(null);
//   const sceneTextRef = useRef(null);
//   const timelineRef = useRef(null);

//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [animationPhase, setAnimationPhase] = useState("initial");

//   const { submitResponse } = useQuizProgress();
//   const isMobile = window.innerWidth <= 768;

//   useEffect(() => {
//     gsap.set([charRef.current, bgRef.current, sceneTextRef.current], {
//       opacity: 0
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=4000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     timelineRef.current = tl;

//     // Fade in CHAR + BG + Text at the same time
//     tl.to([charRef.current, bgRef.current, sceneTextRef.current], {
//       opacity: 1,
//       duration: 1,
//       stagger: 0, // no delay, simultaneous fade
//       ease: "power2.out"
//     });

//     // Slight zoom on BG after appearing
//     tl.to(bgRef.current, {
//       scale: 1.3,
//       duration: 3,
//       ease: "power2.out"
//     });

//     // Pause for quiz
//     tl.call(() => {
//       if (!quizCompleted) {
//         setShowQuiz(true);
//         setAnimationPhase("quiz");
//         document.body.style.overflow = "hidden";
//         const scrollContainer = document.getElementById("module-6");
//         if (scrollContainer) scrollContainer.style.overflow = "hidden";
//         tl.pause();
//       }
//     });

//     // Fade out text and visuals
//     tl.to(sceneTextRef.current, { opacity: 0, duration: 1 });
//     tl.to([charRef.current, bgRef.current], {
//       opacity: 0,
//       duration: 1,
//       ease: "power2.in"
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === containerRef.current) {
//           trigger.kill();
//         }
//       });
//       if (timelineRef.current) {
//         timelineRef.current.kill();
//       }
//       document.body.style.overflow = "auto";
//       const scrollContainer = document.getElementById("module-6");
//       if (scrollContainer) scrollContainer.style.overflow = "auto";
//     };
//   }, [quizCompleted]);

//   // Resume after quiz
//   useEffect(() => {
//     if (quizCompleted && timelineRef.current && animationPhase === "quiz") {
//       setAnimationPhase("transition");
//       timelineRef.current.resume();
//       document.body.style.overflow = "auto";
//       const scrollContainer = document.getElementById("module-6");
//       if (scrollContainer) scrollContainer.style.overflow = "auto";
//     }
//   }, [quizCompleted, animationPhase]);

//   const handleQuiz3Close = () => {
//     setShowQuiz(false);
//     setQuizCompleted(true);
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-6"
//       className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white lowercase relative bg-black"
//     >
//       {/* Scene 11 Visuals */}
//       <div className="absolute top-0 left-0 w-full h-full z-40 flex items-center justify-center overflow-visible pointer-events-none">
//         {/* BG */}
//         <img
//           ref={bgRef}
//           src={isMobile ? story_scene_11_bg_mobile : story_scene_11_bg}
//           alt="Scene 11 BG"
//           className={`absolute opacity-0 z-10 ${
//             isMobile ? "mobile-bg" : "w-full h-full object-cover"
//           }`}
//         />
//         {/* CHAR */}
//         <img
//           ref={charRef}
//           src={isMobile ? story_scene_11_char_mobile : story_scene_11_char}
//           alt="Scene 11 Char"
//           className={`absolute bottom-0 left-0 z-50 opacity-0 ${
//             isMobile ? "mobile-char" : "h-full"
//           }`}
//         />

//         {/* Gradient overlays */}
//         <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
//           <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent" />
//           <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent" />
//         </div>

//         {/* Scene Explanation Box */}
//         <div
//           ref={sceneTextRef}
//           className={`absolute bottom-6 left-6 z-50 opacity-0 bg-black/80 text-white rounded-md max-w-[80%] ${
//             isMobile ? "text-xs p-2" : "text-base p-4"
//           }`}
//         >
//           <p>gibbo startle as the car hit tilly</p>
//         </div>
//       </div>

//       {/* Quiz Modal */}
//       {showQuiz && (
//         <QuizQuestionModal
//           isVisible={showQuiz}
//           onClose={handleQuiz3Close}
//           questionId="scene11_q1"
//           question="What went wrong here?"
//           options={[
//             "The crossing used low-contrast paint that blends into the road",
//             "The crossing was placed too close to the traffic signal",
//             "The stripes were painted using decorative patterns instead of standard ones",
//             "The crossing was missing tactile indicators for pedestrians"
//           ]}
//           correctIndex={0}
//           reason="Low-contrast paint makes the crossing hard to notice, especially for drivers, which reduces safety."
//           backgroundImage={
//             isMobile ? story_scene_11_bg_mobile : story_scene_11_bg
//           }
//           type="single"
//         />
//       )}
//     </div>
//   );
// };

// export default Module6;

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  story_scene_11_bg,
  story_scene_11_char,
  story_scene_11_bg_mobile,
  story_scene_11_char_mobile
} from "../../../assets/images/avatar";

import QuizQuestionModal from "../QuizQuestionModal";
import { useQuizProgress } from "../../../hooks/useQuizProgress";

gsap.registerPlugin(ScrollTrigger);

const Module6 = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const charRef = useRef(null);
  const textRef = useRef(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { submitResponse } = useQuizProgress();
  const isMobile = window.innerWidth <= 768;

  const preventDefault = (e) => e.preventDefault();

  const disableScrollEvents = () => {
    document.body.style.overflow = "hidden";
    const scrollContainer = document.getElementById("module-6");
    if (scrollContainer) scrollContainer.style.overflow = "hidden";

    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
  };

  const enableScrollEvents = () => {
    document.body.style.overflow = "auto";
    const scrollContainer = document.getElementById("module-6");
    if (scrollContainer) scrollContainer.style.overflow = "auto";

    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
  };

  useEffect(() => {
    // ✅ Immediately set scene visible
    gsap.set([bgRef.current, charRef.current, textRef.current], { opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        markers: false
      }
    });

    // ✅ Only zoom (no fade-in)
    tl.to(bgRef.current, {
      scale: 1.2,
      duration: 2,
      ease: "power2.out"
    });

    // Pause for quiz
    tl.call(() => {
      if (!quizCompleted) {
        setShowQuiz(true);
        disableScrollEvents();
        tl.pause();
      }
    });

    // Outro: fade out from current state
    tl.set([bgRef.current, charRef.current], {
      clearProps: "opacity"
    });
    tl.to([bgRef.current, charRef.current], {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut"
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef.current) trigger.kill();
      });
      tl.kill();
      enableScrollEvents();
    };
  }, [quizCompleted, isMobile]);

  const handleQuizClose = () => {
    setShowQuiz(false);
    setQuizCompleted(true);
    enableScrollEvents();
  };

  return (
    <div
      ref={containerRef}
      id="module-6"
      className="relative w-full h-screen text-white lowercase bg-black"
    >
      {/* Scene visuals */}
      <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center overflow-visible pointer-events-none">
        <img
          ref={bgRef}
          src={isMobile ? story_scene_11_bg_mobile : story_scene_11_bg}
          alt="Scene 11 BG"
          className={`absolute z-10 ${
            isMobile ? "mobile-bg" : "w-full h-full object-cover"
          }`}
        />
        <img
          ref={charRef}
          src={isMobile ? story_scene_11_char_mobile : story_scene_11_char}
          alt="Scene 11 Char"
          className={`absolute bottom-0 left-0 z-20 ${
            isMobile ? "mobile-char" : "h-full"
          }`}
        />
        <div
          ref={textRef}
          className={`absolute bottom-6 left-6 z-30 bg-black/80 text-white rounded-md max-w-[80%] ${
            isMobile ? "text-xs p-2" : "text-base p-4"
          }`}
        >
          <p>gibbo startle as the car hit tilly</p>
        </div>
      </div>

      {/* Quiz Modal */}
      {showQuiz && (
        <QuizQuestionModal
          isVisible={showQuiz}
          onClose={handleQuizClose}
          questionId="scene11_q1"
          question="What went wrong here?"
          options={[
            "The crossing used low-contrast paint that blends into the road",
            "The crossing was placed too close to the traffic signal",
            "The stripes were painted using decorative patterns instead of standard ones",
            "The crossing was missing tactile indicators for pedestrians"
          ]}
          correctIndex={0}
          reason="Low-contrast paint makes the crossing hard to notice, especially for drivers, which reduces safety."
          backgroundImage={
            isMobile ? story_scene_11_bg_mobile : story_scene_11_bg
          }
          type="single"
        />
      )}
    </div>
  );
};

export default Module6;
