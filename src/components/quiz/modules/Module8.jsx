// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { story_scene_13_bg } from "../../../assets/images/avatar";
// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module8 = () => {
//   const container13Ref = useRef(null);
//   const scene13Ref = useRef(null);
//   const [showQuiz4, setShowQuiz4] = useState(false);
//   const [quiz4Completed, setQuiz4Completed] = useState(false);
//   const { submitResponse } = useQuizProgress();

//   const preventDefault = (e) => e.preventDefault();

//   const disableScrollEvents = () => {
//     document.body.style.overflow = "hidden";
//     const scrollContainer = document.getElementById("module-8");
//     if (scrollContainer) scrollContainer.style.overflow = "hidden";
//     window.addEventListener("wheel", preventDefault, { passive: false });
//     window.addEventListener("touchmove", preventDefault, { passive: false });
//   };

//   const enableScrollEvents = () => {
//     document.body.style.overflow = "auto";
//     const scrollContainer = document.getElementById("module-8");
//     if (scrollContainer) scrollContainer.style.overflow = "auto";
//     window.removeEventListener("wheel", preventDefault);
//     window.removeEventListener("touchmove", preventDefault);
//   };

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container13Ref.current,
//         start: "top top",
//         end: "+=2000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     tl.fromTo(scene13Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 });
//     tl.to(scene13Ref.current, { scale: 1.05, duration: 1.5 });

//     tl.call(() => {
//       if (!quiz4Completed) {
//         setShowQuiz4(true);
//         disableScrollEvents();
//         tl.pause();
//       }
//     });

//     tl.to(scene13Ref.current, { opacity: 0, scale: 1.1, duration: 1 });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === container13Ref.current) {
//           trigger.kill();
//         }
//       });
//       tl.kill();
//       enableScrollEvents();
//     };
//   }, [quiz4Completed]);

//   const handleQuiz4Close = (response, isCorrect) => {
//     setShowQuiz4(false);
//     setQuiz4Completed(true);
//     enableScrollEvents();

//     submitResponse({
//       questionId: "scene13_q1",
//       response: response,
//       correctAnswer: "Because it's the only way out"
//     });
//   };

//   return (
//     <div
//       ref={container13Ref}
//       id="module-8"
//       className="relative w-full h-screen text-white lowercase bg-black"
//     >
//       {/* Scene 13 Visual */}
//       <div
//         ref={scene13Ref}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
//       >
//         <img
//           src={story_scene_13_bg}
//           alt="Scene 13"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Modal Quiz 4 */}
//       {showQuiz4 && (
//         <QuizQuestionModal
//           isVisible={showQuiz4}
//           onClose={handleQuiz4Close}
//           questionId="scene13_q1"
// question="Why is this door handle like this?"
// options={[
//   "1. They look more modern",
//   "2. They are easier to open quickly in emergencies",
//   "3. They are cheaper to manufacture",
//   "4. They take up less space"
// ]}
// correctIndex={1}
// reason="Horizontal push bars allow anyone to exit quickly and easily, even in a panic, by simply pushing."
//           backgroundImage={story_scene_13_bg}
//           backgroundClassName="absolute w-full h-full object-cover opacity-0"
//           type="single"
//         />
//       )}
//     </div>
//   );
// };

// export default Module8;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { story_scene_13_bg } from "../../../assets/images/avatar";

// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module8 = () => {
//   const containerRef = useRef(null);
//   const bgRef = useRef(null);
//   const timelineRef = useRef(null);

//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [animationPhase, setAnimationPhase] = useState("initial");

//   const { submitResponse } = useQuizProgress();
//   const isMobile = window.innerWidth <= 768;

//   useEffect(() => {
//     gsap.set(bgRef.current, { opacity: 0 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=3000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     timelineRef.current = tl;

//     // Intro transition
//     tl.to(bgRef.current, {
//       opacity: 1,
//       duration: 1.2
//     });

//     tl.set(bgRef.current, {
//       transformOrigin: "center center"
//     });

//     tl.to(bgRef.current, {
//       scale: 1.08,
//       duration: 2.5,
//       ease: "power2.out"
//     });

//     // Pause for quiz
//     tl.call(() => {
//       if (!quizCompleted) {
//         setShowQuiz(true);
//         setAnimationPhase("quiz");
//         document.body.style.overflow = "hidden";
//         const scrollContainer = document.getElementById("module-8");
//         if (scrollContainer) scrollContainer.style.overflow = "hidden";
//         tl.pause();
//       }
//     });

//     // Exit fade (after quiz)
//     tl.to(bgRef.current, {
//       opacity: 0,
//       scale: 1.1,
//       duration: 1.2,
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
//       const scrollContainer = document.getElementById("module-8");
//       if (scrollContainer) scrollContainer.style.overflow = "auto";
//     };
//   }, [quizCompleted]);

//   useEffect(() => {
//     if (quizCompleted && timelineRef.current && animationPhase === "quiz") {
//       setAnimationPhase("transition");
//       timelineRef.current.resume();
//       document.body.style.overflow = "auto";
//       const scrollContainer = document.getElementById("module-8");
//       if (scrollContainer) scrollContainer.style.overflow = "auto";
//     }
//   }, [quizCompleted, animationPhase]);

//   const handleQuiz4Close = (response, isCorrect) => {
//     setShowQuiz(false);
//     setQuizCompleted(true);

//     submitResponse({
//       questionId: "scene13_q1",
//       response,
//       correctAnswer: "Because it's the only way out"
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-8"
//       className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white lowercase relative bg-black"
//     >
//       {/* Visual BG */}
//       <div className="absolute top-0 left-0 w-full h-full z-40 flex items-center justify-center overflow-visible pointer-events-none">
//         <img
//           ref={bgRef}
//           // src={isMobile ? story_scene_13_mobile : story_scene_13}
//           src={story_scene_13_bg}
//           alt="Scene 13"
//           // className={`absolute opacity-0 z-10 ${
//           //   isMobile ? "mobile-bg" : "w-full h-full object-cover"
//           // }`}
//           className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
//         />

//         {/* Optional overlay */}
//         <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
//           <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent" />
//           <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent" />
//         </div>
//       </div>

//       {/* Quiz Modal */}
//       {showQuiz && (
//         <QuizQuestionModal
//           isVisible={showQuiz}
//           onClose={handleQuiz4Close}
//           questionId="scene13_q1"
//           question="Why do you think the character took this path?"
//           options={[
//             "Because it's the only way out",
//             "To find someone",
//             "To hide from someone",
//             "To explore new places"
//           ]}
//           correctIndex={0}
//           reason="The character is moving with purpose—this path leads to the only known exit from the area."
//           // backgroundImage={isMobile ? story_scene_13_mobile : story_scene_13}
//           backgroundImage={story_scene_13_bg}
//           type="single"
//         />
//       )}
//     </div>
//   );
// };

// export default Module8;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { story_scene_13_bg } from "../../../assets/images/avatar";
// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module8 = () => {
//   const containerRef = useRef(null);
//   const sceneRef = useRef(null);
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const { submitResponse } = useQuizProgress();

//   const preventDefault = (e) => e.preventDefault();

//   const disableScrollEvents = () => {
//     document.body.style.overflow = "hidden";
//     const scrollContainer = document.getElementById("module-8");
//     if (scrollContainer) scrollContainer.style.overflow = "hidden";

//     window.addEventListener("wheel", preventDefault, { passive: false });
//     window.addEventListener("touchmove", preventDefault, { passive: false });
//   };

//   const enableScrollEvents = () => {
//     document.body.style.overflow = "auto";
//     const scrollContainer = document.getElementById("module-8");
//     if (scrollContainer) scrollContainer.style.overflow = "auto";

//     window.removeEventListener("wheel", preventDefault);
//     window.removeEventListener("touchmove", preventDefault);
//   };

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=2000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     tl.fromTo(sceneRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
//     tl.to(sceneRef.current, { scale: 1.05, duration: 1.5 });

//     tl.call(() => {
//       if (!quizCompleted) {
//         setShowQuiz(true);
//         disableScrollEvents();
//         tl.pause();
//       }
//     });

//     tl.to(sceneRef.current, { opacity: 0, scale: 1.1, duration: 1 });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === containerRef.current) {
//           trigger.kill();
//         }
//       });
//       tl.kill();
//       enableScrollEvents();
//     };
//   }, [quizCompleted]);

//   const handleQuiz4Close = () => {
//     setShowQuiz(false);
//     setQuizCompleted(true);
//     enableScrollEvents();

//     // submitResponse({
//     //   questionId: "scene13_q1",
//     //   response,
//     //   correctAnswer: "They are easier to open quickly in emergencies"
//     // });
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-8"
//       className="relative w-full h-screen text-white lowercase bg-black"
//     >
//       {/* Scene 13 Background */}
//       <div
//         ref={sceneRef}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
//       >
//         <img
//           src={story_scene_13_bg}
//           alt="Scene 13"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Modal Quiz */}
//       {showQuiz && (
//         <QuizQuestionModal
//           isVisible={showQuiz}
//           onClose={handleQuiz4Close}
//           questionId="scene13_q1"
//           question="Why is this door handle like this?"
//           options={[
//             "1. They look more modern",
//             "2. They are easier to open quickly in emergencies",
//             "3. They are cheaper to manufacture",
//             "4. They take up less space"
//           ]}
//           correctIndex={1}
//           reason="Horizontal push bars allow anyone to exit quickly and easily, even in a panic, by simply pushing."
//           backgroundImage={story_scene_13_bg}
//           type="single"
//         />
//       )}
//     </div>
//   );
// };

// export default Module8;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   story_scene_13_bg,
//   story_scene_13_mobile
// } from "../../../assets/images/avatar";
// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module8 = () => {
//   const containerRef = useRef(null);
//   const sceneRef = useRef(null);
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const { submitResponse } = useQuizProgress();
//   const isMobile = window.innerWidth <= 768;

//   const preventDefault = (e) => e.preventDefault();

//   const disableScrollEvents = () => {
//     document.body.style.overflow = "hidden";
//     const scrollContainer = document.getElementById("module-8");
//     if (scrollContainer) scrollContainer.style.overflow = "hidden";

//     window.addEventListener("wheel", preventDefault, { passive: false });
//     window.addEventListener("touchmove", preventDefault, { passive: false });
//   };

//   const enableScrollEvents = () => {
//     document.body.style.overflow = "auto";
//     const scrollContainer = document.getElementById("module-8");
//     if (scrollContainer) scrollContainer.style.overflow = "auto";

//     window.removeEventListener("wheel", preventDefault);
//     window.removeEventListener("touchmove", preventDefault);
//   };

//   useEffect(() => {
//     gsap.set(sceneRef.current, { opacity: 0, scale: 1 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=2000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     tl.to(sceneRef.current, { opacity: 1, duration: 1 });
//     tl.to(sceneRef.current, {
//       scale: isMobile ? 1.02 : 1.05,
//       duration: isMobile ? 1 : 1.5
//     });

//     tl.call(() => {
//       if (!quizCompleted) {
//         setShowQuiz(true);
//         disableScrollEvents();
//         tl.pause();
//       }
//     });

//     tl.to(sceneRef.current, {
//       opacity: 0,
//       scale: isMobile ? 1.05 : 1.1,
//       duration: 1
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === containerRef.current) {
//           trigger.kill();
//         }
//       });
//       tl.kill();
//       enableScrollEvents();
//     };
//   }, [quizCompleted, isMobile]);

//   const handleQuiz4Close = () => {
//     setShowQuiz(false);
//     setQuizCompleted(true);
//     enableScrollEvents();
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-8"
//       className="relative w-full h-screen text-white lowercase bg-black"
//     >
//       {/* Scene 13 Background */}
//       <div
//         ref={sceneRef}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
//       >
//         <img
//           src={isMobile ? story_scene_13_mobile : story_scene_13_bg}
//           alt="Scene 13"
//           className={`object-cover ${
//             isMobile ? "w-[95%] h-auto rounded-md" : "w-full h-full"
//           }`}
//         />
//       </div>

//       {/* Modal Quiz */}
//       {showQuiz && (
//         <QuizQuestionModal
//           isVisible={showQuiz}
//           onClose={handleQuiz4Close}
//           questionId="scene13_q1"
//           question="Why is this door handle like this?"
//           options={[
//             "1. They look more modern",
//             "2. They are easier to open quickly in emergencies",
//             "3. They are cheaper to manufacture",
//             "4. They take up less space"
//           ]}
//           correctIndex={1}
//           reason="Horizontal push bars allow anyone to exit quickly and easily, even in a panic, by simply pushing."
//           backgroundImage={isMobile ? story_scene_13_mobile : story_scene_13_bg}
//           type="single"
//         />
//       )}
//     </div>
//   );
// };

// export default Module8;

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  story_scene_13_bg,
  story_scene_13_mobile
} from "../../../assets/images/avatar";
import QuizQuestionModal from "../QuizQuestionModal";
import { useQuizProgress } from "../../../hooks/useQuizProgress";

gsap.registerPlugin(ScrollTrigger);

const Module8 = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { submitResponse } = useQuizProgress();
  const isMobile = window.innerWidth <= 768;

  const preventDefault = (e) => e.preventDefault();

  const disableScrollEvents = () => {
    document.body.style.overflow = "hidden";
    const scrollContainer = document.getElementById("module-8");
    if (scrollContainer) scrollContainer.style.overflow = "hidden";

    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
  };

  const enableScrollEvents = () => {
    document.body.style.overflow = "auto";
    const scrollContainer = document.getElementById("module-8");
    if (scrollContainer) scrollContainer.style.overflow = "auto";

    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
  };

  useEffect(() => {
    // ✅ Immediately visible
    gsap.set(sceneRef.current, { opacity: 1, scale: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        markers: false
      }
    });

    // ✅ Removed fade-in intro; only scale animation remains
    tl.to(sceneRef.current, {
      scale: isMobile ? 1.02 : 1.05,
      duration: isMobile ? 1 : 1.5
    });

    tl.call(() => {
      if (!quizCompleted) {
        setShowQuiz(true);
        disableScrollEvents();
        tl.pause();
      }
    });

    // Outro (fade out)
    tl.to(sceneRef.current, {
      opacity: 0,
      scale: isMobile ? 1.05 : 1.1,
      duration: 1
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });
      tl.kill();
      enableScrollEvents();
    };
  }, [quizCompleted, isMobile]);

  const handleQuiz4Close = () => {
    setShowQuiz(false);
    setQuizCompleted(true);
    enableScrollEvents();
  };

  return (
    <div
      ref={containerRef}
      id="module-8"
      className="relative w-full h-screen text-white lowercase bg-black"
    >
      {/* Scene 13 Background */}
      <div
        ref={sceneRef}
        className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
      >
        <img
          src={isMobile ? story_scene_13_mobile : story_scene_13_bg}
          alt="Scene 13"
          className={`object-cover ${
            isMobile ? "w-[95%] h-auto rounded-md" : "w-full h-full"
          }`}
        />
      </div>

      {/* Modal Quiz */}
      {showQuiz && (
        <QuizQuestionModal
          isVisible={showQuiz}
          onClose={handleQuiz4Close}
          questionId="scene13_q1"
          question="Why is this door handle like this?"
          options={[
            "1. They look more modern",
            "2. They are easier to open quickly in emergencies",
            "3. They are cheaper to manufacture",
            "4. They take up less space"
          ]}
          correctIndex={1}
          reason="Horizontal push bars allow anyone to exit quickly and easily, even in a panic, by simply pushing."
          backgroundImage={isMobile ? story_scene_13_mobile : story_scene_13_bg}
          type="single"
        />
      )}
    </div>
  );
};

export default Module8;
