import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  story_scene_25,
  story_scene_25_mobile
} from "../../../assets/images/avatar";
import { useQuiz } from "../../../context/QuizContext";

gsap.registerPlugin(ScrollTrigger);

const Module17 = () => {
  const containerRef = useRef(null);
  const scene25Ref = useRef(null);
  const scene25TextBoxRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const { dispatch, actions } = useQuiz();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.set(scene25Ref.current, { opacity: 0, scale: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1
      }
    });

    tl.to(scene25Ref.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    })
      .to(scene25Ref.current, { scale: 1.05, duration: 2 })
      .to(scene25Ref.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          console.log("✅ Final module complete → marking quiz as complete");
          dispatch({ type: actions.SET_QUIZ_COMPLETE });
        }
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, [dispatch, actions]);

  return (
    <div
      ref={containerRef}
      id="module-17"
      className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white relative bg-black"
    >
      {/* Final Scene 25 */}
      <img
        ref={scene25Ref}
        src={isMobile ? story_scene_25_mobile : story_scene_25}
        alt="Final Scene"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
      />

      <div
        ref={scene25TextBoxRef}
        className={`absolute left-6 bottom-6 bg-black/80 text-white rounded-md p-3 z-40 opacity-0 ${
          isMobile ? "text-xs max-w-[80%]" : "text-base max-w-[40%]"
        }`}
      >
        <p>gibbo and and tilly wave goodbye to each other</p>
      </div>
    </div>
  );
};

export default Module17;
