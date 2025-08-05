// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   story_scene_23_bg,
//   story_scene_23_bg_mobile,
//   story_scene_23_char,
//   story_scene_24,
//   story_scene_24_mobile
// } from "../../../assets/images/avatar";

// gsap.registerPlugin(ScrollTrigger);

// const Module15 = () => {
//   const containerRef = useRef(null);
//   const scene23BgRef = useRef(null);
//   const scene23CharRef = useRef(null);
//   const scene23TextTopRef = useRef(null);
//   const scene23TextBottomRef = useRef(null);
//   const scene24Ref = useRef(null);

//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     gsap.set(
//       [
//         scene23BgRef.current,
//         scene23CharRef.current,
//         scene23TextTopRef.current,
//         scene23TextBottomRef.current,
//         scene24Ref.current
//       ],
//       { opacity: 0, scale: 1 }
//     );

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=7000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1
//       }
//     });

//     tl.to(scene23BgRef.current, {
//       opacity: 1,
//       duration: 1.2,
//       ease: "power2.out"
//     })
//       .to(scene23CharRef.current, { opacity: 1, duration: 1 }, "<0.3")
//       .to(scene23TextTopRef.current, { opacity: 1, duration: 0.8 }, "<")

//       // Move character downward (coming closer)
//       .to(scene23CharRef.current, {
//         y: isMobile ? 120 : 200,
//         scale: isMobile ? 1.2 : 1.5,
//         duration: 3,
//         ease: "power2.inOut"
//       })
//       .to(scene23TextBottomRef.current, { opacity: 1, duration: 1 }, "<0.5")

//       // Scene 24
//       .to(
//         [
//           scene23BgRef.current,
//           scene23CharRef.current,
//           scene23TextTopRef.current,
//           scene23TextBottomRef.current
//         ],
//         { opacity: 0, duration: 1, ease: "power2.inOut" }
//       )
//       .to(scene24Ref.current, {
//         opacity: 1,
//         duration: 1.2,
//         ease: "power2.out"
//       });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       tl.kill();
//     };
//   }, [isMobile]);

//   return (
//     <div
//       ref={containerRef}
//       className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white relative bg-black"
//     >
//       {/* Scene 23 BG */}
//       <img
//         ref={scene23BgRef}
//         src={isMobile ? story_scene_23_bg_mobile : story_scene_23_bg}
//         alt="Scene 23 BG"
//         // className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
//         className={`absolute opacity-0 ${
//           isMobile
//             ? "top-0 left-0 w-full h-full object-cover"
//             : "top-0 left-0 scale-y-95 "
//         }`}
//       />

//       {/* Scene 23 Character */}
//       <img
//         ref={scene23CharRef}
//         src={story_scene_23_char}
//         alt="Scene 23 Char"
//         className={`absolute opacity-0 ${
//           isMobile
//             ? "top-10 left-1/2 -translate-x-1/2 w-[120px]"
//             : "top-12 left-1/2 -translate-x-1/2 w-[200px]"
//         }`}
//       />

//       {/* Scene 23 Top Text */}
//       <div
//         ref={scene23TextTopRef}
//         className={`absolute bg-black/80 text-white rounded-md p-3 z-40 opacity-0
//         ${
//           isMobile
//             ? "top-4 left-1/2 -translate-x-1/2 text-xs max-w-[80%]"
//             : "top-6 left-1/2 -translate-x-1/2 text-base max-w-[40%]"
//         }`}
//       >
//         <p>Scene 23 initial explanation text.</p>
//       </div>

//       {/* Scene 23 Bottom Text */}
//       <div
//         ref={scene23TextBottomRef}
//         className={`absolute bg-black/80 text-white rounded-md p-3 z-40 opacity-0
//         ${
//           isMobile
//             ? "bottom-6 left-1/2 -translate-x-1/2 text-xs max-w-[80%]"
//             : "bottom-10 left-1/2 -translate-x-1/2 text-base max-w-[40%]"
//         }`}
//       >
//         <p>Scene 23 final explanation text after character moves down.</p>
//       </div>

//       {/* Scene 24 */}
//       <img
//         ref={scene24Ref}
//         src={isMobile ? story_scene_24_mobile : story_scene_24}
//         alt="Scene 24"
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
//       />
//     </div>
//   );
// };

// export default Module15;

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  story_scene_23_bg,
  story_scene_23_bg_mobile,
  story_scene_23_char,
  story_scene_24,
  story_scene_24_mobile
} from "../../../assets/images/avatar";

gsap.registerPlugin(ScrollTrigger);

const Module15 = () => {
  const containerRef = useRef(null);
  const scene23BgRef = useRef(null);
  const scene23CharRef = useRef(null);
  const scene23TextTopRef = useRef(null);
  const scene23TextBottomRef = useRef(null);
  const scene24Ref = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.set(
      [
        scene23BgRef.current,
        scene23CharRef.current,
        scene23TextTopRef.current,
        scene23TextBottomRef.current,
        scene24Ref.current
      ],
      { opacity: 0, scale: 1 }
    );

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

    tl.to(scene23BgRef.current, {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out"
    })
      .fromTo(
        scene23CharRef.current,
        {
          opacity: 0,
          scale: isMobile ? 0.35 : 0.45
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        },
        "<0.3"
      )
      .to(scene23TextTopRef.current, { opacity: 1, duration: 0.8 }, "<")

      // Move character downward (coming closer)
      .to(
        scene23CharRef.current,
        {
          y: isMobile ? 120 : 160,
          scale: isMobile ? 0.9 : 1.1,
          x: isMobile ? -20 : 40, // Desktop shifted right
          duration: 3,
          ease: "power2.inOut"
        },
        "+=0.5"
      )
      .to(
        scene23TextTopRef.current,
        { opacity: 0, duration: 0.6, ease: "power2.out" },
        "<"
      )
      .to(scene23TextBottomRef.current, { opacity: 1, duration: 1 }, "<0.5")

      // Scene 24
      .to(
        [
          scene23BgRef.current,
          scene23CharRef.current,
          scene23TextTopRef.current,
          scene23TextBottomRef.current
        ],
        { opacity: 0, duration: 1, ease: "power2.inOut" }
      )
      .to(scene24Ref.current, {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white relative bg-black"
    >
      {/* Scene 23 BG */}
      <img
        ref={scene23BgRef}
        src={isMobile ? story_scene_23_bg_mobile : story_scene_23_bg}
        alt="Scene 23 BG"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
      />

      {/* Scene 23 Character */}
      <img
        ref={scene23CharRef}
        src={story_scene_23_char}
        alt="Scene 23 Char"
        className={`absolute opacity-0 ${
          isMobile
            ? "bottom-[8.3rem] left-[30%] w-[80px]" // Lower and more left
            : "top-20 left-[42%] w-[150px]" // Slightly right
        }`}
      />

      {/* Scene 23 Initial Text */}
      <div
        ref={scene23TextTopRef}
        className={`absolute bg-black/80 text-white rounded-md p-3 z-40 opacity-0 
        ${
          isMobile
            ? "bottom-4 left-[3.5rem] text-xs max-w-[75%]"
            : "bottom-6 left-[7rem] text-base max-w-[35%]"
        } ml-14`}
      >
        <p>tilly walks towards gibbo</p>
      </div>

      {/* Scene 23 Final Text */}
      <div
        ref={scene23TextBottomRef}
        className={`absolute bg-black/80 text-white rounded-md p-3 z-40 opacity-0 
        ${
          isMobile
            ? "bottom-4 left-[1rem] text-xs max-w-[75%]"
            : "bottom-6 left-[2rem] text-base max-w-[35%]"
        } `}
      >
        <p>they both heads to the reception</p>
      </div>

      {/* Scene 24 */}
      <img
        ref={scene24Ref}
        src={isMobile ? story_scene_24_mobile : story_scene_24}
        alt="Scene 24"
        className="absolute top-0 left-0 w-full h-full object-cover scale-y-95 opacity-0"
      />
    </div>
  );
};

export default Module15;
