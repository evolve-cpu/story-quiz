import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  story_scene_22,
  story_scene_22_mobile
} from "../../../assets/images/avatar";
import QuizQuestionModal from "../QuizQuestionModal";
import { useQuizProgress } from "../../../hooks/useQuizProgress";

gsap.registerPlugin(ScrollTrigger);

const Module14 = () => {
  const containerRef = useRef(null);
  const scene22Ref = useRef(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { submitResponse } = useQuizProgress();

  const isMobile = window.innerWidth <= 768;

  // Prevent scroll and touch
  const preventDefault = (e) => e.preventDefault();

  const disableScrollEvents = () => {
    document.body.style.overflow = "hidden";
    const scrollContainer = document.getElementById("module-14");
    if (scrollContainer) scrollContainer.style.overflow = "hidden";

    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
  };

  const enableScrollEvents = () => {
    document.body.style.overflow = "auto";
    const scrollContainer = document.getElementById("module-14");
    if (scrollContainer) scrollContainer.style.overflow = "auto";

    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
  };

  useEffect(() => {
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

    tl.fromTo(scene22Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.to(scene22Ref.current, { scale: 1.05, duration: 1.5 });

    tl.call(() => {
      if (!quizCompleted) {
        setShowQuiz(true);
        disableScrollEvents();
        tl.pause();
      }
    });

    tl.to(scene22Ref.current, { opacity: 0, scale: 1.1, duration: 1 });

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

  const handleQuiz7Close = (response, isCorrect) => {
    setShowQuiz(false);
    setQuizCompleted(true);
    enableScrollEvents();

    // submitResponse({
    //   questionId: "scene22_q1",
    //   response,
    //   correctAnswer: "Option 1 and 2 are correct"
    // });
  };

  return (
    <div
      ref={containerRef}
      id="module-14"
      className="relative w-full h-screen text-white lowercase bg-black"
    >
      {/* Scene 22 visual */}
      <div
        ref={scene22Ref}
        className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
      >
        <img
          src={isMobile ? story_scene_22_mobile : story_scene_22}
          alt="Scene 22"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Modal Quiz */}
      {showQuiz && (
        <QuizQuestionModal
          isVisible={showQuiz}
          onClose={handleQuiz7Close}
          questionId="scene22_q1"
          question="Phones always have rounded corners. Is that just for looks?"
          options={[
            "1. Rounder corners are less likely to chip or break",
            "2. Rounder corners are more comfortable to hold",
            "3. Rounder corners make the device look smaller",
            "4. Rounded corners are easier to manufacture"
          ]}
          correctIndex={[0, 1]}
          reason="Rounded corners improve durability, comfort, and reduce injury risk. While they may look nice, the primary reasons are functional and user-focused."
          backgroundImage={isMobile ? story_scene_22_mobile : story_scene_22}
          type="multi"
        />
      )}
    </div>
  );
};

export default Module14;
