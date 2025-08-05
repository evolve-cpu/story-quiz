import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  story_scene_17_bg,
  story_scene_17_char,
  story_scene_18,
  story_scene_19,
  story_scene_17_bg_mobile,
  story_scene_18_mobile,
  story_scene_19_mobile,
  story_scene_19_box_char,
  story_scene_19_bubble
} from "../../../assets/images/avatar";

gsap.registerPlugin(ScrollTrigger);

const Module11 = () => {
  const containerRef = useRef(null);
  const bg17Ref = useRef(null);
  const char17Ref = useRef(null);
  const scene17TextBoxRef = useRef(null);
  const scene18Ref = useRef(null);
  const scene18TextBoxRef = useRef(null);
  const scene19Ref = useRef(null);
  const scene19BoxCharRef = useRef(null);
  const scene19BubbleRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.set(
      [
        bg17Ref.current,
        char17Ref.current,
        scene17TextBoxRef.current,
        scene18Ref.current,
        scene18TextBoxRef.current,
        scene19Ref.current,
        scene19BoxCharRef.current,
        scene19BubbleRef.current
      ],
      { opacity: 0, scale: 1 }
    );

    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1
      }
    });

    masterTl
      // Scene 17
      .to(bg17Ref.current, { opacity: 1, duration: 1.2, ease: "power2.out" })
      .to(
        char17Ref.current,
        { opacity: 1, duration: 1, ease: "power2.out" },
        "<0.3"
      )
      .to(scene17TextBoxRef.current, { opacity: 1, duration: 0.8 }, "<")
      .to(char17Ref.current, {
        x: isMobile ? 50 : 250,
        y: isMobile ? -80 : -60,
        scale: isMobile ? 0.6 : 0.5,
        duration: isMobile ? 4 : 3.5,
        ease: "power2.inOut"
      })
      .to([bg17Ref.current, char17Ref.current, scene17TextBoxRef.current], {
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut"
      })

      // Scene 18
      .to(scene18Ref.current, { opacity: 1, duration: 1.5, ease: "power2.out" })
      .to(scene18TextBoxRef.current, { opacity: 1, duration: 0.8 }, "<")
      .to(
        scene18Ref.current,
        { opacity: 0, duration: 1, ease: "power2.inOut" },
        "+=1"
      )
      .to(scene18TextBoxRef.current, { opacity: 0, duration: 0.8 }, "<")

      // Scene 19 zoom
      .to(scene19Ref.current, {
        opacity: 1,
        scale: 1.2,
        duration: 2,
        ease: "power2.inOut"
      })
      .to(scene19BoxCharRef.current, {
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)"
      })
      .to(scene19BubbleRef.current, {
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
      {/* Scene 17 Background */}
      <img
        ref={bg17Ref}
        src={isMobile ? story_scene_17_bg_mobile : story_scene_17_bg}
        alt="Scene 17 BG"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
      />

      {/* Scene 17 Character */}
      <img
        ref={char17Ref}
        src={story_scene_17_char}
        alt="Scene 17 Character"
        className={`absolute opacity-0 ${
          isMobile
            ? "bottom-10 left-4 w-[120px]"
            : "bottom-[-12rem] left-20 w-[250px]"
        }`}
      />

      {/* Scene 17 Text Box */}
      <div
        ref={scene17TextBoxRef}
        className={`absolute left-6 bottom-6 bg-black/80 text-white rounded-md p-3 z-40 opacity-0 ${
          isMobile ? "text-xs max-w-[80%]" : "text-base max-w-[40%]"
        }`}
      >
        <p>gibbo walks towards the emergency room</p>
      </div>

      {/* Scene 18 */}
      <img
        ref={scene18Ref}
        src={isMobile ? story_scene_18_mobile : story_scene_18}
        alt="Scene 18"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
      />
      {/* Scene 18 Text Box */}
      <div
        ref={scene18TextBoxRef}
        className={`absolute left-6 bottom-6 bg-black/80 text-white rounded-md p-3 z-40 opacity-0 ${
          isMobile ? "text-xs max-w-[80%]" : "text-base max-w-[40%]"
        }`}
      >
        <p>gibbo observes how greta treats tilly</p>
      </div>

      {/* Scene 19 */}
      <img
        ref={scene19Ref}
        src={isMobile ? story_scene_19_mobile : story_scene_19}
        alt="Scene 19"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
      />

      {/* Scene 19 Box Char Image */}
      <img
        ref={scene19BoxCharRef}
        src={story_scene_19_box_char}
        alt="Box Char"
        className={`absolute opacity-0 z-50 ${
          isMobile
            ? "bottom-10 left-6 w-[120px]"
            : "bottom-20 left-10 w-[200px]"
        }`}
      />

      {/* Scene 19 Bubble */}
      <img
        ref={scene19BubbleRef}
        src={story_scene_19_bubble}
        alt="Scene 19 Bubble"
        className={`absolute opacity-0 z-50 ${
          isMobile
            ? "bottom-12 left-[140px] w-[140px]"
            : "bottom-24 left-[240px] w-[260px]"
        }`}
      />
    </div>
  );
};

export default Module11;
