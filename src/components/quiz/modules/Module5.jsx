// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   story_scene_8_char,
//   story_scene_8_char_mobile,
//   story_scene_8_bg_1,
//   story_scene_8_bg_mobile,
//   story_scene_10_char,
//   story_scene_10_bg,
//   story_scene_10_bg_mobile,
//   story_scene_10_char_mobile
// } from "../../../assets/images/avatar";

// const Module5 = () => {
//   const containerRef5 = useRef(null);
//   const isMobile = window.innerWidth <= 768;

//   const scene8BgRef5 = useRef(null);
//   const scene8CharRef5 = useRef(null);
//   const scene8TextRef5 = useRef(null);
//   const scene10CharRef5 = useRef(null);
//   const scene10BgRef5 = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.set(
//       [
//         scene8BgRef5.current,
//         scene8CharRef5.current,
//         scene8TextRef5.current,
//         scene10CharRef5.current,
//         scene10BgRef5.current
//       ],
//       { opacity: 0 }
//     );

//     const masterTl5 = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef5.current,
//         start: "top top",
//         end: "+=6000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     // --- Scene 8 ---
//     masterTl5.set(scene8BgRef5.current, { x: "0%", opacity: 0 });
//     masterTl5.to(scene8BgRef5.current, {
//       opacity: 1,
//       duration: isMobile ? 1.5 : 2
//     });

//     masterTl5.fromTo(
//       scene8CharRef5.current,
//       { opacity: 0 },
//       { opacity: 1, duration: isMobile ? 1.5 : 2.5 },
//       "<0.5"
//     );

//     masterTl5.to(scene8BgRef5.current, {
//       x: "30%",
//       duration: isMobile ? 1.5 : 2
//     });
//     masterTl5.to(scene8TextRef5.current, { opacity: 1, duration: 1 });
//     masterTl5.to(scene8TextRef5.current, { opacity: 0, duration: 1 }, "+=1");

//     // 🔄 OUTRO FIX — fade + scale BOTH TOGETHER
//     masterTl5.to([scene8BgRef5.current], {
//       opacity: 0,
//       scale: 1.05,
//       duration: 1.5,
//       ease: "power2.inOut"
//     });

//     // --- Scene 10 ---
//     masterTl5.set(scene10CharRef5.current, { opacity: 0 });
//     masterTl5.set(scene10BgRef5.current, { opacity: 0, scale: 1 });

//     masterTl5.to(scene10CharRef5.current, {
//       opacity: 1,
//       duration: 1
//     });

//     masterTl5.to(
//       scene10BgRef5.current,
//       {
//         opacity: 1,
//         duration: 1
//       },
//       "<"
//     );

//     masterTl5.to(scene10BgRef5.current, {
//       scale: 1.3,
//       duration: 3,
//       ease: "power2.out"
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === containerRef5.current) {
//           trigger.kill();
//         }
//       });
//       masterTl5.kill();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef5}
//       id="module-5"
//       className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white lowercase relative bg-black"
//     >
//       {/* Scene 8 */}
//       <div className="absolute top-0 left-0 w-full h-full z-30 flex items-center justify-center overflow-visible pointer-events-none">
//         <img
//           ref={scene8BgRef5}
//           src={isMobile ? story_scene_8_bg_mobile : story_scene_8_bg_1}
//           alt="Scene 8 BG"
//           className="absolute object-contain scale-x-[180%] scale-y-[150%] opacity-0"
//           style={{ right: 0 }}
//         />
//         <img
//           ref={scene8CharRef5}
//           src={isMobile ? story_scene_8_char_mobile : story_scene_8_char}
//           alt="Scene 8 Char"
//           className="absolute object-fill opacity-0 bottom-0"
//         />
//         <div
//           ref={scene8TextRef5}
//           className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Gibbo is driving</p>
//           </div>
//         </div>
//       </div>

//       {/* Scene 10 */}
//       {/* Scene 10 */}
//       <div className="absolute top-0 left-0 w-full h-full z-40 flex items-center justify-center overflow-visible pointer-events-none">
//         <img
//           ref={scene10BgRef5}
//           src={isMobile ? story_scene_10_bg_mobile : story_scene_10_bg}
//           alt="Scene 10 BG"
//           className="absolute object-cover w-full h-full opacity-0 z-10"
//         />
//         <img
//           ref={scene10CharRef5}
//           src={isMobile ? story_scene_10_char_mobile : story_scene_10_char}
//           alt="Scene 10 Char"
//           className={`absolute ${
//             isMobile ? "bottom-0" : "bottom-0"
//           } z-50 opacity-0`}
//         />

//         {/* ⬇️ Gradient overlays */}
//         <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
//           <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent" />
//           <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Module5;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  story_scene_8_char,
  story_scene_8_char_mobile,
  story_scene_8_bg_1,
  story_scene_8_bg_mobile,
  story_scene_10_char,
  story_scene_10_bg,
  story_scene_10_bg_mobile,
  story_scene_10_char_mobile
} from "../../../assets/images/avatar";

const Module5 = () => {
  const containerRef5 = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const scene8BgRef5 = useRef(null);
  const scene8CharRef5 = useRef(null);
  const scene8TextRef5 = useRef(null);
  const scene10CharRef5 = useRef(null);
  const scene10BgRef5 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    // Force minimum duration for proper scroll space
    tl.to({}, { duration: 2 });

    // --- Scene 8 (Instant Show) ---
    tl.set([scene8BgRef5.current, scene8CharRef5.current], { opacity: 1 });
    tl.set(scene8TextRef5.current, { opacity: 1 });

    // Small movement for BG (optional)
    tl.to(scene8BgRef5.current, {
      x: "30%",
      duration: isMobile ? 1.5 : 2,
      ease: "power2.inOut"
    });

    // Hide text and fade out scene
    tl.to(scene8TextRef5.current, { opacity: 0, duration: 0.5 }, "+=1");
    tl.to([scene8BgRef5.current, scene8CharRef5.current], {
      opacity: 0,
      // scale: 1.05,
      duration: 1
    });

    // --- Scene 10 (Instant Show) ---
    tl.set([scene10CharRef5.current, scene10BgRef5.current], { opacity: 1 });
    tl.to(scene10BgRef5.current, {
      scale: 1.3,
      duration: 3,
      ease: "power2.out"
    });

    // ScrollTrigger with dynamic end
    ScrollTrigger.create({
      trigger: containerRef5.current,
      start: "top top",
      // end: `+=${tl.duration() * 1000}`,
      end: "+=4000",
      scrub: 1.5,
      pin: true,
      anticipatePin: 1,
      markers: false
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef5.current) trigger.kill();
      });
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef5}
      id="module-5"
      className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white lowercase relative bg-black"
    >
      {/* Scene 8 */}
      <div className="absolute top-0 left-0 w-full h-full z-30 flex items-center justify-center overflow-visible pointer-events-none">
        <img
          ref={scene8BgRef5}
          src={isMobile ? story_scene_8_bg_mobile : story_scene_8_bg_1}
          alt="Scene 8 BG"
          className="absolute object-contain scale-x-[180%] scale-y-[150%] opacity-0"
          style={{ right: 0 }}
        />
        <img
          ref={scene8CharRef5}
          src={isMobile ? story_scene_8_char_mobile : story_scene_8_char}
          alt="Scene 8 Char"
          className="absolute object-fill opacity-0 bottom-0"
        />
        <div
          ref={scene8TextRef5}
          className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
        >
          <div className="bg-black/80 text-white p-4 rounded-md w-fit">
            <p>Gibbo is driving</p>
          </div>
        </div>
      </div>

      {/* Scene 10 */}
      <div className="absolute top-0 left-0 w-full h-full z-40 flex items-center justify-center overflow-visible pointer-events-none">
        <img
          ref={scene10BgRef5}
          src={isMobile ? story_scene_10_bg_mobile : story_scene_10_bg}
          alt="Scene 10 BG"
          className="absolute object-cover w-full h-full opacity-0 z-10"
        />
        <img
          ref={scene10CharRef5}
          src={isMobile ? story_scene_10_char_mobile : story_scene_10_char}
          alt="Scene 10 Char"
          className="absolute bottom-0 z-50 opacity-0"
        />
        <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
          <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Module5;
