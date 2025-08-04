// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   story_scene_12,
//   story_scene_13_bg,
//   story_scene_13_char
//   //   story_scene_13_bg_mobile,
//   //   story_scene_13_char_mobile,
// } from "../../../assets/images/avatar";

// const Module7 = () => {
//   const containerRef = useRef(null);
//   const scene12Ref = useRef(null);
//   const scene13BgRef = useRef(null);
//   const scene13CharRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.set(
//       [scene12Ref.current, scene13BgRef.current, scene13CharRef.current],
//       { opacity: 0 }
//     );

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=8000", // ✅ extend scroll duration
//         scrub: 1.5, // ✅ keep scrub ON for full module
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     // === PHASE 1: Scene 12 ===
//     tl.to(scene12Ref.current, { opacity: 1, duration: 1.5, ease: "power2.out" })
//       .to(scene12Ref.current, {
//         scale: 1.05,
//         duration: 2,
//         ease: "power1.inOut"
//       })
//       .to({}, { duration: 2 }) // ✅ "fake hold" while scrolling slowly
//       .to(scene12Ref.current, {
//         opacity: 0,
//         duration: 1.5,
//         ease: "power2.inOut"
//       });

//     // === PHASE 2: Scene 13 ===
//     tl.to(scene13BgRef.current, { opacity: 1, duration: 2, ease: "power2.out" })
//       .to(scene13CharRef.current, {
//         opacity: 1,
//         duration: 2,
//         ease: "power2.out"
//       })
//       .to(scene13CharRef.current, {
//         x: "-30vw",
//         y: "-5vh",
//         scale: 0.75,
//         duration: 6,
//         ease: "power2.inOut"
//       });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       tl.kill();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       id="module-7"
//       className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white relative bg-black"
//     >
//       {/* Scene 12 */}
//       <div
//         ref={scene12Ref}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center opacity-0"
//       >
//         <img src={story_scene_12} alt="Scene 12" className="w-full h-full" />
//       </div>

//       {/* Scene 13 */}
//       <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center">
//         <img
//           ref={scene13BgRef}
//           src={story_scene_13_bg}
//           alt="Scene 13 BG"
//           className="absolute w-full h-full object-cover opacity-0"
//         />
//         <img
//           ref={scene13CharRef}
//           src={story_scene_13_char}
//           alt="Scene 13 Char"
//           className="absolute bottom-0 right-0 w-[400px] h-auto object-contain opacity-0"
//         />
//       </div>

//       <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
//         <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent" />
//         <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent" />
//       </div>
//     </div>
//   );
// };

// export default Module7;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   story_scene_12,
//   story_scene_13_bg,
//   story_scene_13_char
// } from "../../../assets/images/avatar";

// const Module7 = () => {
//   const containerRef = useRef(null);
//   const scene12Ref = useRef(null);
//   const scene13BgRef = useRef(null);
//   const scene13CharRef = useRef(null);
//   const scene12TextRef = useRef(null);
//   const scene13TextRef = useRef(null);

//   const isMobile = window.innerWidth <= 768;

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.set(
//       [
//         scene12Ref.current,
//         scene13BgRef.current,
//         scene13CharRef.current,
//         scene12TextRef.current,
//         scene13TextRef.current
//       ],
//       { opacity: 0 }
//     );

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=8000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     // === PHASE 1: Scene 12 ===
//     tl.to(scene12Ref.current, { opacity: 1, duration: 1.5, ease: "power2.out" })
//       .to(scene12TextRef.current, { opacity: 1, duration: 1 }, "<0.5")
//       .to(scene12Ref.current, {
//         scale: 1.05,
//         duration: 2,
//         ease: "power1.inOut"
//       })
//       .to({}, { duration: 2 }) // Hold
//       .to(scene12TextRef.current, { opacity: 0, duration: 1 })
//       .to(scene12Ref.current, {
//         opacity: 0,
//         duration: 1.5,
//         ease: "power2.inOut"
//       });

//     // === PHASE 2: Scene 13 ===
//     tl.to(scene13BgRef.current, { opacity: 1, duration: 2, ease: "power2.out" })
//       .to(scene13CharRef.current, {
//         opacity: 1,
//         duration: 2,
//         ease: "power2.out"
//       })
//       .to(scene13TextRef.current, { opacity: 1, duration: 1 }, "<0.5")
//       .to(scene13CharRef.current, {
//         x: "-30vw",
//         y: "-5vh",
//         scale: 0.75,
//         duration: 6,
//         ease: "power2.inOut"
//       })
//       .to(scene13TextRef.current, { opacity: 0, duration: 1 });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       tl.kill();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       id="module-7"
//       className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white relative bg-black"
//     >
//       {/* Scene 12 */}
//       <div
//         ref={scene12Ref}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center opacity-0"
//       >
//         <img src={story_scene_12} alt="Scene 12" className="w-full h-full" />
//         {/* Scene 12 Explanation Box */}
//         <div
//           ref={scene12TextRef}
//           className={`absolute bottom-6 left-6 z-20 opacity-0 bg-black/80 text-white rounded-md max-w-[80%] ${
//             isMobile ? "text-xs p-2" : "text-base p-4"
//           }`}
//         >
//           <p>ambulance arrives as tilly is injured her hand.</p>
//         </div>
//       </div>

//       {/* Scene 13 */}
//       <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center">
//         <img
//           ref={scene13BgRef}
//           src={story_scene_13_bg}
//           alt="Scene 13 BG"
//           className="absolute w-full h-full object-cover opacity-0"
//         />
//         <img
//           ref={scene13CharRef}
//           src={story_scene_13_char}
//           alt="Scene 13 Char"
//           className="absolute bottom-0 right-0 w-[400px] h-auto object-contain opacity-0"
//         />
//         {/* Scene 13 Explanation Box */}
//         <div
//           ref={scene13TextRef}
//           className={`absolute bottom-6 left-6 z-30 opacity-0 bg-black/80 lowercase text-white rounded-md max-w-[80%] ${
//             isMobile ? "text-xs p-2" : "text-base p-4"
//           }`}
//         >
//           <p>gibbo takes tilly in a wheelchair to the emergency</p>
//         </div>
//       </div>

//       {/* Gradient Overlays */}
//       <div className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none">
//         <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent" />
//         <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent" />
//       </div>
//     </div>
//   );
// };

// export default Module7;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  story_scene_12,
  story_scene_12_mobile,
  story_scene_13_bg,
  story_scene_13_bg_mobile,
  story_scene_13_char
} from "../../../assets/images/avatar";

const Module7 = () => {
  const containerRef = useRef(null);
  const scene12Ref = useRef(null);
  const scene13BgRef = useRef(null);
  const scene13CharRef = useRef(null);
  const scene12TextRef = useRef(null);
  const scene13TextRef = useRef(null);

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(
      [
        scene12Ref.current,
        scene13BgRef.current,
        scene13CharRef.current,
        scene12TextRef.current,
        scene13TextRef.current
      ],
      { opacity: 0 }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        markers: false
      }
    });

    // === PHASE 1: Scene 12 (appear and disappear together) ===
    tl.to([scene12Ref.current, scene12TextRef.current], {
      opacity: 1,
      duration: 0.1, // instant appearance
      ease: "none"
    })
      .to(scene12Ref.current, {
        scale: isMobile ? 1.02 : 1.05,
        duration: 2,
        ease: "power1.inOut"
      })
      .to({}, { duration: 2 })
      .to([scene12Ref.current, scene12TextRef.current], {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      });

    // === PHASE 2: Scene 13 (unchanged) ===
    tl.to(scene13BgRef.current, { opacity: 1, duration: 2, ease: "power2.out" })
      .to(scene13CharRef.current, {
        opacity: 1,
        scale: isMobile ? 0.6 : 1,
        duration: 1.5,
        ease: "power2.out"
      })
      .to(scene13TextRef.current, { opacity: 1, duration: 1 }, "<0.5")
      .to(scene13CharRef.current, {
        x: isMobile ? "-20vw" : "-30vw",
        y: isMobile ? "-1vh" : "-5vh",
        scale: isMobile ? 0.55 : 0.75,
        duration: isMobile ? 4 : 6,
        ease: "power2.inOut"
      })
      .to(scene13TextRef.current, { opacity: 0, duration: 1 });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="module-7"
      className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white relative bg-black"
    >
      {/* Scene 12 */}
      <div
        ref={scene12Ref}
        className={`absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center opacity-0 ${
          isMobile ? "p-2" : "px-10 py-6"
        }`}
      >
        <img
          src={isMobile ? story_scene_12_mobile : story_scene_12}
          alt="Scene 12"
          className={` ${isMobile ? "" : "w-full h-full object-cover"}`}
        />
        {/* Scene 12 Explanation Box */}
        <div
          ref={scene12TextRef}
          className={`absolute bottom-10 left-20 z-40 opacity-0 pointer-events-none bg-black/80 text-white rounded-md max-w-[80%] ${
            isMobile ? "text-xs p-2" : "text-base p-4"
          }`}
        >
          <p>ambulance arrives as tilly is injured her hand.</p>
        </div>
      </div>

      {/* Scene 13 */}
      <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center">
        <img
          ref={scene13BgRef}
          src={isMobile ? story_scene_13_bg_mobile : story_scene_13_bg}
          alt="Scene 13 BG"
          className="absolute w-full h-full object-cover opacity-0"
        />
        <img
          ref={scene13CharRef}
          src={story_scene_13_char}
          alt="Scene 13 Char"
          className={`absolute bottom-0 right-0 object-contain opacity-0 ${
            isMobile ? "w-[180px]" : "w-[400px]"
          }`}
        />
        {/* Scene 13 Explanation Box */}
        <div
          ref={scene13TextRef}
          className={`absolute bottom-6 left-6 z-30 opacity-0 bg-black/80 text-white rounded-md max-w-[80%] ${
            isMobile ? "text-xs p-2" : "text-base p-4"
          }`}
        >
          <p>gibbo takes tilly in a wheelchair to the emergency</p>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none">
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </div>
  );
};

export default Module7;
