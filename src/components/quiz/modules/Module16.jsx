// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   story_scene_24,
//   story_scene_24_mobile
// } from "../../../assets/images/avatar";
// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module16 = () => {
//   const containerRef = useRef(null);
//   const scene24Ref = useRef(null);
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const { submitResponse } = useQuizProgress();

//   const isMobile = window.innerWidth <= 768;

//   // Prevent scroll and touch
//   const preventDefault = (e) => e.preventDefault();

//   const disableScrollEvents = () => {
//     document.body.style.overflow = "hidden";
//     const scrollContainer = document.getElementById("module-16");
//     if (scrollContainer) scrollContainer.style.overflow = "hidden";

//     window.addEventListener("wheel", preventDefault, { passive: false });
//     window.addEventListener("touchmove", preventDefault, { passive: false });
//   };

//   const enableScrollEvents = () => {
//     document.body.style.overflow = "auto";
//     const scrollContainer = document.getElementById("module-16");
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

//     tl.fromTo(scene24Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 });
//     tl.to(scene24Ref.current, { scale: 1.05, duration: 1.5 });

//     tl.call(() => {
//       if (!quizCompleted) {
//         setShowQuiz(true);
//         disableScrollEvents();
//         tl.pause();
//       }
//     });

//     tl.to(scene24Ref.current, { opacity: 0, scale: 1.1, duration: 1 });

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

//   const handleQuiz8Close = (response, isCorrect) => {
//     setShowQuiz(false);
//     setQuizCompleted(true);
//     enableScrollEvents();

//     // submitResponse({
//     //   questionId: "scene24_q1",
//     //   response,
//     //   correctAnswer: "Large, well-spaced buttons grouped by function"
//     // });
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-16"
//       className="relative w-full h-screen text-white lowercase bg-black"
//     >
//       {/* Scene 24 visual */}
//       <div
//         ref={scene24Ref}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
//       >
//         <img
//           src={isMobile ? story_scene_24_mobile : story_scene_24}
//           alt="Scene 24"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Modal Quiz */}
//       {showQuiz && (
//         <QuizQuestionModal
//           isVisible={showQuiz}
//           onClose={handleQuiz8Close}
//           questionId="scene24_q1"
//           question="What makes a calculator layout more usable, especially in stressful moments? (Multiple Choice)"
//           options={[
//             "1. Brightly coloured buttons with random shapes",
//             "2. All buttons the same size in a uniform grid",
//             "3. Large, well-spaced buttons grouped by function",
//             "4. Tiny buttons to keep the calculator compact"
//           ]}
//           correctIndex={2}
//           reason="Usability improves when buttons are grouped logically and sized for accuracy — especially helpful in urgent or distracted contexts."
//           backgroundImage={isMobile ? story_scene_24_mobile : story_scene_24}
//           type="single"
//         />
//       )}
//     </div>
//   );
// };

// export default Module16;

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  story_scene_24,
  story_scene_24_mobile
} from "../../../assets/images/avatar";
import QuizQuestionModal from "../QuizQuestionModal";
import { useQuizProgress } from "../../../hooks/useQuizProgress";

gsap.registerPlugin(ScrollTrigger);

const Module16 = () => {
  const containerRef = useRef(null);
  const scene24Ref = useRef(null);
  const tooltipRef = useRef(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { submitResponse } = useQuizProgress();

  const isMobile = window.innerWidth <= 768;

  const preventDefault = (e) => e.preventDefault();

  const disableScrollEvents = () => {
    document.body.style.overflow = "hidden";
    const scrollContainer = document.getElementById("module-16");
    if (scrollContainer) scrollContainer.style.overflow = "hidden";

    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
  };

  const enableScrollEvents = () => {
    document.body.style.overflow = "auto";
    const scrollContainer = document.getElementById("module-16");
    if (scrollContainer) scrollContainer.style.overflow = "auto";

    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
  };

  useEffect(() => {
    gsap.set(tooltipRef.current, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        markers: false
      }
    });

    tl.fromTo(scene24Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      // ✅ Tooltip fades in slightly after scene appears
      .to(tooltipRef.current, { opacity: 1, duration: 1 }, "<0.5")
      .to(scene24Ref.current, { scale: 1.05, duration: 1.5 })
      .call(() => {
        if (!quizCompleted) {
          setShowQuiz(true);
          disableScrollEvents();
          tl.pause();
        }
      })
      .to(scene24Ref.current, { opacity: 0, scale: 1.1, duration: 1 })
      // ✅ Tooltip fades out as scene exits
      .to(tooltipRef.current, { opacity: 0, duration: 0.5 }, "<");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });
      tl.kill();
      enableScrollEvents();
    };
  }, [quizCompleted]);

  const handleQuiz8Close = (response, isCorrect) => {
    setShowQuiz(false);
    setQuizCompleted(true);
    enableScrollEvents();
  };

  return (
    <div
      ref={containerRef}
      id="module-16"
      className="relative w-full h-screen text-white lowercase bg-black"
    >
      {/* Scene 24 visual */}
      <div
        ref={scene24Ref}
        className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
      >
        <img
          src={isMobile ? story_scene_24_mobile : story_scene_24}
          alt="Scene 24"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tooltip */}
      <div
        ref={tooltipRef}
        className={`absolute bottom-6 left-6 bg-black/80 text-white rounded-md p-3 z-20 opacity-0 ${
          isMobile ? "text-xs max-w-[80%]" : "text-base max-w-[40%]"
        }`}
      >
        gibbo splitting the bill
      </div>

      {/* Modal Quiz */}
      {showQuiz && (
        <QuizQuestionModal
          isVisible={showQuiz}
          onClose={handleQuiz8Close}
          questionId="scene24_q1"
          question="What makes a calculator layout more usable, especially in stressful moments?"
          options={[
            "1. Brightly coloured buttons with random shapes",
            "2. All buttons the same size in a uniform grid",
            "3. Large, well-spaced buttons grouped by function",
            "4. Tiny buttons to keep the calculator compact"
          ]}
          correctIndex={2}
          reason="Usability improves when buttons are grouped logically and sized for accuracy — especially helpful in urgent or distracted contexts."
          backgroundImage={isMobile ? story_scene_24_mobile : story_scene_24}
          type="single"
        />
      )}
    </div>
  );
};

export default Module16;
