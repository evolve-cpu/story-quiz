import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { story_scene_16_1 } from "../../../assets/images/avatar";
import QuizQuestionModal from "../QuizQuestionModal";
import { useQuizProgress } from "../../../hooks/useQuizProgress";

gsap.registerPlugin(ScrollTrigger);

const Module10 = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { submitResponse } = useQuizProgress();

  const preventDefault = (e) => e.preventDefault();

  const disableScrollEvents = () => {
    document.body.style.overflow = "hidden";
    const scrollContainer = document.getElementById("module-10");
    if (scrollContainer) scrollContainer.style.overflow = "hidden";

    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
  };

  const enableScrollEvents = () => {
    document.body.style.overflow = "auto";
    const scrollContainer = document.getElementById("module-10");
    if (scrollContainer) scrollContainer.style.overflow = "auto";

    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
  };

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       start: "top top",
  //       end: "+=2000",
  //       scrub: 1.5,
  //       pin: true,
  //       anticipatePin: 1,
  //       markers: false
  //     }
  //   });

  //   // Fade-in and zoom-in transition
  //   tl.fromTo(
  //     sceneRef.current,
  //     { opacity: 0, scale: 1 },
  //     { opacity: 1, scale: 1.05, duration: 1.5 }
  //   );
  //   tl.to(sceneRef.current, { scale: 1.1, duration: 1.5 });

  //   tl.call(() => {
  //     if (!quizCompleted) {
  //       setShowQuiz(true);
  //       disableScrollEvents();
  //       tl.pause();
  //     }
  //   });

  //   // Fade out after quiz is completed
  //   tl.to(sceneRef.current, { opacity: 0, scale: 1.15, duration: 1 });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => {
  //       if (trigger.trigger === containerRef.current) {
  //         trigger.kill();
  //       }
  //     });
  //     tl.kill();
  //     enableScrollEvents();
  //   };
  // }, [quizCompleted]);

  useEffect(() => {
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

    // ✅ Scene is instantly visible (no fade-in / zoom intro)
    gsap.set(sceneRef.current, { opacity: 1, scale: 1 });

    // Slight zoom during scroll
    tl.to(sceneRef.current, { scale: 1.1, duration: 1.5 });

    // Pause timeline to show quiz modal
    tl.call(() => {
      if (!quizCompleted) {
        setShowQuiz(true);
        disableScrollEvents();
        tl.pause();
      }
    });

    // ✅ Removed outro fade-out animation
    // (Scene stays visible after quiz closes)
    tl.to(sceneRef.current, { opacity: 0, scale: 1.1, duration: 1 });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef.current) trigger.kill();
      });
      tl.kill();
      enableScrollEvents();
    };
  }, [quizCompleted]);

  const handleQuiz5Close = () => {
    setShowQuiz(false);
    setQuizCompleted(true);
    enableScrollEvents();

    // submitResponse({
    //   questionId: "scene16_q1",
    //   response,
    //   correctAnswer: "Option 1,2,3 and 4 are correct"
    // });
  };

  return (
    <div
      ref={containerRef}
      id="module-10"
      className="relative w-full h-screen text-white lowercase bg-black"
    >
      {/* Scene 16 Background */}
      <div
        ref={sceneRef}
        className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
      >
        {/* <picture>
          <source media="(max-width: 768px)" srcSet={story_scene_16_mobile} /> */}
        <img
          src={story_scene_16_1}
          alt="Scene 16"
          className="w-full h-full object-cover"
        />
        {/* </picture> */}
      </div>

      {/* Modal Quiz */}
      {showQuiz && (
        <QuizQuestionModal
          isVisible={showQuiz}
          onClose={handleQuiz5Close}
          questionId="scene16_q1"
          question="why do people still prefer these pens anyway?"
          options={[
            "1. A tiny rotating ball at the tip that evenly dispenses ink",
            "2. Quick-drying ink that reduces smudging",
            "3. A transparent barrel to monitor ink levels",
            "4. A decorative feather attached to the cap",
            "5. A lightweight, portable design"
          ]}
          correctIndex={[0, 1, 2, 4]}
          reason="This feature enhances user safety and efficiency during critical situations."
          backgroundImage={story_scene_16_1}
          type="multi"
        />
      )}
    </div>
  );
};

export default Module10;
