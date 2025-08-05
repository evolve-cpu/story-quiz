import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  story_scene_21,
  story_scene_21_mobile,
  story_scene_22,
  story_scene_22_mobile,
  story_scene_19_box_char,
  story_scene_22_bubble
} from "../../../assets/images/avatar";

gsap.registerPlugin(ScrollTrigger);

const Module13 = () => {
  const containerRef = useRef(null);
  const scene21Ref = useRef(null);
  const scene21TextBoxRef = useRef(null);
  const scene22Ref = useRef(null);
  const scene22BoxCharRef = useRef(null);
  const scene22BubbleRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.set(
      [
        scene21Ref.current,
        scene21TextBoxRef.current,
        scene22Ref.current,
        scene22BoxCharRef.current,
        scene22BubbleRef.current
      ],
      { opacity: 0, scale: 1, x: 0 }
    );

    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=5000",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1
      }
    });

    // ✅ Different zoom transition for mobile
    masterTl
      .to(scene21Ref.current, { opacity: 1, duration: 1.2, ease: "power2.out" })
      .to(scene21Ref.current, {
        scale: isMobile ? 1.3 : 2, // less zoom for mobile
        x: isMobile ? -30 : 0, // shift slightly left on mobile
        duration: 1.8,
        ease: "power2.inOut"
      })
      .to(scene21TextBoxRef.current, { opacity: 1, duration: 0.8 }, "<")
      .to([scene21Ref.current, scene21TextBoxRef.current], {
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut"
      })

      // Scene 22
      .to(scene22Ref.current, {
        opacity: 1,
        scale: 1.2,
        duration: 2,
        ease: "power2.inOut"
      })
      .to(scene22BoxCharRef.current, {
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)"
      })
      .to(scene22BubbleRef.current, {
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)"
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      masterTl.kill();
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white relative bg-black"
    >
      {/* Scene 21 */}
      <img
        ref={scene21Ref}
        src={isMobile ? story_scene_21_mobile : story_scene_21}
        alt="Scene 21"
        className={`absolute opacity-0 ${
          isMobile
            ? "top-0 left-0 w-[110%] h-full" // custom mobile class
            : "top-0 left-0 w-full h-full object-cover" // desktop class
        }`}
      />
      {/* Scene 21 Text Box */}
      <div
        ref={scene21TextBoxRef}
        className={`absolute left-6 bottom-6 bg-black/80 text-white rounded-md p-3 z-40 opacity-0 ${
          isMobile ? "text-xs max-w-[80%]" : "text-base max-w-[40%]"
        }`}
      >
        <p>bored gibbo scrolls through his phone</p>
      </div>

      {/* Scene 22 */}
      <img
        ref={scene22Ref}
        src={isMobile ? story_scene_22_mobile : story_scene_22}
        alt="Scene 22"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
      />

      {/* Scene 22 Box Char Image */}
      <img
        ref={scene22BoxCharRef}
        src={story_scene_19_box_char}
        alt="Box Char"
        className={`absolute opacity-0 z-50 ${
          isMobile
            ? "bottom-10 left-6 w-[120px]"
            : "bottom-20 left-10 w-[200px]"
        }`}
      />

      {/* Scene 22 Bubble */}
      <img
        ref={scene22BubbleRef}
        src={story_scene_22_bubble}
        alt="Scene 22 Bubble"
        className={`absolute opacity-0 z-50 ${
          isMobile
            ? "bottom-12 left-[140px] w-[140px]"
            : "bottom-24 left-[240px] w-[260px]"
        }`}
      />
    </div>
  );
};

export default Module13;
