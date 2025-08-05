// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { story_scene_9 } from "../../../assets/images/avatar/index";
// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module4 = () => {
//   const containerRef = useRef(null);
//   const scene9Ref = useRef(null);
//   const [showQuiz2, setShowQuiz2] = useState(false);
//   const [quiz2Completed, setQuiz2Completed] = useState(false);

//   const { completeQuiz, submitResponse } = useQuizProgress();

//   // Prevent scroll and touch
//   const preventDefault = (e) => e.preventDefault();

//   const disableScrollEvents = () => {
//     document.body.style.overflow = "hidden";
//     const scrollContainer = document.getElementById("module-4");
//     if (scrollContainer) scrollContainer.style.overflow = "hidden";

//     window.addEventListener("wheel", preventDefault, { passive: false });
//     window.addEventListener("touchmove", preventDefault, { passive: false });
//   };

//   const enableScrollEvents = () => {
//     document.body.style.overflow = "auto";
//     const scrollContainer = document.getElementById("module-4");
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

//     // Intro animation
//     tl.fromTo(
//       scene9Ref.current,
//       { opacity: 0, scale: 0.95, y: 60 },
//       { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" }
//     );

//     // Trigger modal and pause
//     tl.call(() => {
//       if (!quiz2Completed) {
//         setShowQuiz2(true);
//         disableScrollEvents();
//         tl.pause();
//       }
//     });

//     // Outro animation (will only run if quiz2Completed = true)
//     tl.to(scene9Ref.current, { opacity: 0, scale: 1.05, duration: 1 });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === containerRef.current) {
//           trigger.kill();
//         }
//       });
//       tl.kill();
//       enableScrollEvents(); // cleanup just in case
//     };
//   }, [quiz2Completed]);

//   const handleQuiz2Close = () => {
//     // const handleQuiz2Close = (response, isCorrect) => {
//     setShowQuiz2(false);
//     setQuiz2Completed(true);
//     enableScrollEvents();

//     // submitResponse({
//     //   questionId: "scene9_q1",
//     //   response,
//     //   correctAnswer: "All of the above"
//     // });
//     // completeQuiz(); // Update global progress
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-4"
//       className="relative w-full h-screen bg-black text-white lowercase"
//     >
//       <div
//         ref={scene9Ref}
//         className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center"
//       >
//         <img
//           src={story_scene_9}
//           alt="Scene 9"
//           className="w-full h-full scale-y-[99%] object-cover"
//         />
//       </div>

//       {showQuiz2 && (
//         <QuizQuestionModal
//           isVisible={showQuiz2}
//           onClose={handleQuiz2Close}
//           questionId="scene9_q1"
//           question="Why are the red, yellow, and green lights always stacked this way?"
//           options={[
//             "Grooves provide better grip for shoes",
//             "To help colour-blind people use position as a cue",
//             "To ensure consistency and reduce confusion for drivers",
//             "All of the above"
//           ]}
//           correctIndex={3}
//           reason="The arrangement helps colour-blind users recognise signals by position, increases visibility, and ensures consistency for all road users."
//           backgroundImage={story_scene_9}
//           backgroundClassName="absolute scale-y-[99%] object-cover"
//           type="single"
//         />
//       )}
//     </div>
//   );
// };

// export default Module4;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   story_scene_9,
//   story_scene_9_mobile
// } from "../../../assets/images/avatar/index";
// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module4 = () => {
//   const containerRef = useRef(null);
//   const scene9Ref = useRef(null);
//   const [showQuiz2, setShowQuiz2] = useState(false);
//   const [quiz2Completed, setQuiz2Completed] = useState(false);

//   const { completeQuiz, submitResponse } = useQuizProgress();
//   const isMobile = window.innerWidth <= 768;

//   // Prevent scroll and touch
//   const preventDefault = (e) => e.preventDefault();

//   const disableScrollEvents = () => {
//     document.body.style.overflow = "hidden";
//     const scrollContainer = document.getElementById("module-4");
//     if (scrollContainer) scrollContainer.style.overflow = "hidden";

//     window.addEventListener("wheel", preventDefault, { passive: false });
//     window.addEventListener("touchmove", preventDefault, { passive: false });
//   };

//   const enableScrollEvents = () => {
//     document.body.style.overflow = "auto";
//     const scrollContainer = document.getElementById("module-4");
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

//     // Intro animation
//     tl.fromTo(
//       scene9Ref.current,
//       { opacity: 0, scale: 0.95, y: 60 },
//       { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" }
//     );

//     // Trigger modal and pause
//     tl.call(() => {
//       if (!quiz2Completed) {
//         setShowQuiz2(true);
//         disableScrollEvents();
//         tl.pause();
//       }
//     });

//     // Outro animation (will only run if quiz2Completed = true)
//     tl.to(scene9Ref.current, { opacity: 0, scale: 1.05, duration: 1 });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === containerRef.current) {
//           trigger.kill();
//         }
//       });
//       tl.kill();
//       enableScrollEvents(); // cleanup just in case
//     };
//   }, [quiz2Completed]);

//   const handleQuiz2Close = () => {
//     setShowQuiz2(false);
//     setQuiz2Completed(true);
//     enableScrollEvents();
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-4"
//       className="relative w-full h-screen bg-black text-white lowercase"
//     >
//       <div
//         ref={scene9Ref}
//         className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center"
//       >
//         <img
//           src={isMobile ? story_scene_9_mobile : story_scene_9}
//           alt="Scene 9"
//           className="w-full h-full scale-y-[99%] object-cover"
//         />
//       </div>

//       {showQuiz2 && (
//         <QuizQuestionModal
//           isVisible={showQuiz2}
//           onClose={handleQuiz2Close}
//           questionId="scene9_q1"
//           question="Why are the red, yellow, and green lights always stacked this way?"
//           options={[
//             "Grooves provide better grip for shoes",
//             "To help colour-blind people use position as a cue",
//             "To ensure consistency and reduce confusion for drivers",
//             "All of the above"
//           ]}
//           correctIndex={3}
//           reason="The arrangement helps colour-blind users recognise signals by position, increases visibility, and ensures consistency for all road users."
//           backgroundImage={isMobile ? story_scene_9_mobile : story_scene_9}
//           backgroundClassName="absolute scale-y-[99%] object-cover"
//           type="single"
//         />
//       )}
//     </div>
//   );
// };

// export default Module4;

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  story_scene_9,
  story_scene_9_mobile
} from "../../../assets/images/avatar/index";
import QuizQuestionModal from "../QuizQuestionModal";
import { useQuizProgress } from "../../../hooks/useQuizProgress";

gsap.registerPlugin(ScrollTrigger);

const Module4 = () => {
  const containerRef = useRef(null);
  const scene9Ref = useRef(null);
  const scene9TextRef = useRef(null);
  const [showQuiz2, setShowQuiz2] = useState(false);
  const [quiz2Completed, setQuiz2Completed] = useState(false);

  const { completeQuiz, submitResponse } = useQuizProgress();
  const isMobile = window.innerWidth <= 768;

  // Prevent scroll and touch
  const preventDefault = (e) => e.preventDefault();

  const disableScrollEvents = () => {
    document.body.style.overflow = "hidden";
    const scrollContainer = document.getElementById("module-4");
    if (scrollContainer) scrollContainer.style.overflow = "hidden";

    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
  };

  const enableScrollEvents = () => {
    document.body.style.overflow = "auto";
    const scrollContainer = document.getElementById("module-4");
    if (scrollContainer) scrollContainer.style.overflow = "auto";

    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
  };

  useEffect(() => {
    gsap.set(scene9TextRef.current, { opacity: 0 });

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

    // Intro animation
    // tl.fromTo(
    //   scene9Ref.current,
    //   { opacity: 0, scale: 0.95, y: 60 },
    //   { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" }
    // );

    // Show text explanation
    // tl.to(scene9TextRef.current, { opacity: 1, duration: 1 }, "<0.5");
    tl.to(scene9TextRef.current, { opacity: 1, duration: 1 });

    // Trigger modal and pause
    tl.call(() => {
      if (!quiz2Completed) {
        setShowQuiz2(true);
        disableScrollEvents();
        tl.pause();
      }
    });

    // Fade out text
    tl.to(scene9TextRef.current, { opacity: 0, duration: 1 });

    // Outro animation (only runs if quiz is completed)
    // tl.to(scene9Ref.current, { opacity: 0, scale: 1.05, duration: 1 });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });
      tl.kill();
      enableScrollEvents();
    };
  }, [quiz2Completed]);

  const handleQuiz2Close = () => {
    setShowQuiz2(false);
    setQuiz2Completed(true);
    enableScrollEvents();

    // const trigger = ScrollTrigger.getAll().find(
    //   (t) => t.trigger === containerRef.current
    // );
    // if (trigger) {
    //   const timeline = trigger.animation; // get gsap timeline
    //   if (timeline) {
    //     timeline.play(timeline.duration()); // jump to end
    //   }
    // }
  };

  return (
    <div
      ref={containerRef}
      id="module-4"
      className="relative w-full h-screen bg-black text-white lowercase"
    >
      <div
        ref={scene9Ref}
        className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center"
      >
        <img
          src={isMobile ? story_scene_9_mobile : story_scene_9}
          alt="Scene 9"
          className="w-full h-full scale-y-[99%] object-cover"
        />
        {/* Scene Explanation Text */}
        <div
          ref={scene9TextRef}
          className={`absolute bottom-6 left-6 z-30 opacity-0 ${
            isMobile ? "text-xs p-2" : "text-base p-4"
          } bg-black/80 text-white rounded-md max-w-[80%]`}
        >
          <p>Gibbo slows the car and stops at the signal as it turns red</p>
        </div>
      </div>

      {showQuiz2 && (
        <QuizQuestionModal
          isVisible={showQuiz2}
          onClose={handleQuiz2Close}
          questionId="scene9_q1"
          question="Why are the red, yellow, and green lights always stacked this way?"
          options={[
            "to make the lights easier to see from a distance",
            "To help colour-blind people use position as a cue",
            "To ensure consistency and reduce confusion for drivers",
            "All of the above"
          ]}
          correctIndex={3}
          reason="The arrangement helps colour-blind users recognise signals by position, increases visibility, and ensures consistency for all road users."
          backgroundImage={isMobile ? story_scene_9_mobile : story_scene_9}
          backgroundClassName="absolute scale-y-[99%] object-cover"
          type="single"
        />
      )}
    </div>
  );
};

export default Module4;
