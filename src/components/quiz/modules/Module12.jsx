import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { story_scene_20 } from "../../../assets/images/avatar";
import QuizQuestionModal from "../QuizQuestionModal";
import { useQuizProgress } from "../../../hooks/useQuizProgress";

gsap.registerPlugin(ScrollTrigger);

const Module12 = () => {
  const containerRef = useRef(null);
  const scene20Ref = useRef(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { submitResponse } = useQuizProgress();

  // Prevent scroll and touch
  const preventDefault = (e) => e.preventDefault();

  const disableScrollEvents = () => {
    document.body.style.overflow = "hidden";
    const scrollContainer = document.getElementById("module-12");
    if (scrollContainer) scrollContainer.style.overflow = "hidden";

    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
  };

  const enableScrollEvents = () => {
    document.body.style.overflow = "auto";
    const scrollContainer = document.getElementById("module-12");
    if (scrollContainer) scrollContainer.style.overflow = "auto";

    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
  };

  useEffect(() => {
    const scrollContainer = document.getElementById("module-12");

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

    tl.fromTo(scene20Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.to(scene20Ref.current, { scale: 1.05, duration: 1.5 });

    tl.call(() => {
      if (!quizCompleted) {
        setShowQuiz(true);
        disableScrollEvents();
        tl.pause();
      }
    });

    tl.to(scene20Ref.current, { opacity: 0, scale: 1.1, duration: 1 });

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

  const handleQuiz6Close = () => {
    setShowQuiz(false);
    setQuizCompleted(true);
    enableScrollEvents();

    // submitResponse({
    //   questionId: "scene20_q1",
    //   response,
    //   correctAnswer: "Option 1,2,3 and 4 are correct"
    // });
  };

  return (
    <div
      ref={containerRef}
      id="module-12"
      className="relative w-full h-screen text-white lowercase bg-black"
    >
      {/* Scene 20 visual */}
      <div
        ref={scene20Ref}
        className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
      >
        <img
          src={story_scene_20}
          alt="Scene 20"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Modal Quiz */}
      {showQuiz && (
        <QuizQuestionModal
          isVisible={showQuiz}
          onClose={handleQuiz6Close}
          questionId="scene20_q1"
          question="What design features make medical scissors more efficient than regular ones? (Select All That Apply)"
          options={[
            "1. Curved blades that reduce drag while cutting",
            "2. Non-stick coating to prevent adhesive buildup",
            "3. A blunt tip to avoid accidental injuries",
            "4. Laser-sharpened edges that never dull",
            "5. Finger-contoured handles for precision and grip"
          ]}
          correctIndex={[0, 1, 2, 4]}
          reason="These features ensure better cutting efficiency, safety, reduced mess, and improved grip — making medical scissors more practical than regular ones."
          backgroundImage={story_scene_20}
          type="multi"
        />
      )}
    </div>
  );
};

export default Module12;
