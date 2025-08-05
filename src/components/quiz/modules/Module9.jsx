// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // ✅ Import the images for the scenes
// import {
//   story_scene_14,
//   //   story_scene_14_mobile,
//   story_scene_15,
//   story_scene_15_mobile,
//   //   story_scene_15_mobile,
//   story_scene_16,
//   story_scene_16_1
//   //   story_scene_16_mobile,
// } from "../../../assets/images/avatar";

// const Module9 = () => {
//   const containerRef9 = useRef(null);
//   const isMobile = window.innerWidth <= 768;

//   const scene14Ref = useRef(null);
//   const scene14TextRef = useRef(null);
//   const scene15Ref = useRef(null);
//   const scene16Ref = useRef(null);
//   const scene16TextRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // ✅ Initial states
//     gsap.set(
//       [
//         scene14Ref.current,
//         scene14TextRef.current,
//         scene15Ref.current,
//         scene16Ref.current,
//         scene16TextRef.current
//       ],
//       { opacity: 0 }
//     );

//     const tl9 = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef9.current,
//         start: "top top",
//         end: "+=6000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     // --- Scene 14 ---
//     tl9.to(scene14Ref.current, { opacity: 1, duration: 2 });
//     tl9.to(scene14TextRef.current, { opacity: 1, duration: 1 }, "<");
//     tl9.to(scene14TextRef.current, { opacity: 0, duration: 1 }, "+=1");

//     // --- Quick Transition to Scene 15 ---
//     tl9.to(scene14Ref.current, {
//       opacity: 0,
//       duration: 0.4,
//       ease: "power2.inOut"
//     });
//     tl9.to(
//       scene15Ref.current,
//       { opacity: 1, duration: 0.4, ease: "power2.inOut" },
//       "<0.1"
//     );

//     // --- Subtle Transition to Scene 16 ---
//     tl9.to(
//       scene15Ref.current,
//       { opacity: 0, duration: 1.2, ease: "power2.inOut" },
//       "+=1"
//     );
//     tl9.to(
//       scene16Ref.current,
//       { opacity: 1, duration: 1.5, ease: "power2.inOut" },
//       "<"
//     );
//     tl9.to(scene16TextRef.current, { opacity: 1, duration: 1 }, "<0.5");

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => {
//         if (t.trigger === containerRef9.current) t.kill();
//       });
//       tl9.kill();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef9}
//       id="module-9"
//       className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white lowercase relative bg-black"
//     >
//       {/* Scene 14 */}
//       <img
//         ref={scene14Ref}
//         // src={isMobile ? story_scene_14_mobile : story_scene_14}
//         src={story_scene_14}
//         alt="Scene 14"
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
//       />
//       <div
//         ref={scene14TextRef}
//         className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//       >
//         <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//           <p>Scene 14 explanation goes here...</p>
//         </div>
//       </div>

//       {/* Scene 15 */}
//       <img
//         ref={scene15Ref}
//         src={story_scene_15}
//         // src={isMobile ? story_scene_15_mobile : story_scene_15}
//         alt="Scene 15"
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
//       />

//       {/* Scene 16 */}
//       <img
//         ref={scene16Ref}
//         src={story_scene_16_1}
//         // src={isMobile ? story_scene_16_mobile : story_scene_16}
//         alt="Scene 16"
//         className="absolute top-0 left-0 object-contain scale-y-110 scale-x-125 w-full h-full opacity-0"
//       />
//       <div
//         ref={scene16TextRef}
//         className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//       >
//         <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//           <p>Scene 16 explanation goes here...</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Module9;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // ✅ Import the images for the scenes
// import {
//   story_scene_14,
//   story_scene_14_mobile,
//   story_scene_15,
//   story_scene_15_mobile,
//   story_scene_16,
//   story_scene_16_1,
//   story_scene_16_mobile
// } from "../../../assets/images/avatar";

// const Module9 = () => {
//   const containerRef9 = useRef(null);
//   const isMobile = window.innerWidth <= 768;

//   const scene14Ref = useRef(null);
//   const scene14TextRef = useRef(null);
//   const scene15Ref = useRef(null);
//   const scene16Ref = useRef(null);
//   const scene16TextRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.set(
//       [
//         scene14Ref.current,
//         scene14TextRef.current,
//         scene15Ref.current,
//         scene16Ref.current,
//         scene16TextRef.current
//       ],
//       { opacity: 0 }
//     );

//     const tl9 = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef9.current,
//         start: "top top",
//         end: "+=6000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     tl9.to(scene14Ref.current, { opacity: 1, duration: 2 });
//     tl9.to(scene14TextRef.current, { opacity: 1, duration: 1 }, "<");
//     tl9.to(scene14TextRef.current, { opacity: 0, duration: 1 }, "+=1");

//     tl9.to(scene14Ref.current, {
//       opacity: 0,
//       duration: 0.4,
//       ease: "power2.inOut"
//     });
//     tl9.to(
//       scene15Ref.current,
//       { opacity: 1, duration: 0.4, ease: "power2.inOut" },
//       "<0.1"
//     );

//     tl9.to(
//       scene15Ref.current,
//       { opacity: 0, duration: 1.2, ease: "power2.inOut" },
//       "+=1"
//     );
//     tl9.to(
//       scene16Ref.current,
//       { opacity: 1, duration: 1.5, ease: "power2.inOut" },
//       "<"
//     );
//     tl9.to(scene16TextRef.current, { opacity: 1, duration: 1 }, "<0.5");

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => {
//         if (t.trigger === containerRef9.current) t.kill();
//       });
//       tl9.kill();
//     };
//   }, []);

//   const desktopClass =
//     "absolute top-0 left-0 w-full h-full object-cover opacity-0";
//   const mobileClass =
//     "absolute top-0 left-0 w-full h-full object-contain opacity-0 scale-100";

//   return (
//     <div
//       ref={containerRef9}
//       id="module-9"
//       className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white lowercase relative bg-black"
//     >
//       {/* Scene 14 */}
//       <img
//         ref={scene14Ref}
//         src={isMobile ? story_scene_14_mobile : story_scene_14}
//         alt="Scene 14"
//         // className={isMobile ? mobileClass : desktopClass}
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
//       />
//       <div
//         ref={scene14TextRef}
//         className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//       >
//         <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//           <p>gibbo is given a form to fill for tilly.</p>
//         </div>
//       </div>

//       {/* Scene 15 */}
//       <img
//         ref={scene15Ref}
//         src={isMobile ? story_scene_15_mobile : story_scene_15}
//         alt="Scene 15"
//         // className={isMobile ? mobileClass : desktopClass}
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
//       />

//       {/* Scene 16 */}
//       <img
//         ref={scene16Ref}
//         src={isMobile ? story_scene_16_mobile : story_scene_16_1}
//         alt="Scene 16"
//         className={
//           isMobile
//             ? "absolute top-0 left-0 w-full h-full object-cover opacity-0"
//             : "absolute top-0 left-0 object-contain scale-y-110 scale-x-125 w-full h-full opacity-0"
//         }
//       />
//       <div
//         ref={scene16TextRef}
//         className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//       >
//         <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//           <p>He checks—no ink.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Module9;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // ✅ Import the images for the scenes
// import {
//   story_scene_14,
//   story_scene_14_mobile,
//   story_scene_15,
//   story_scene_15_mobile,
//   story_scene_16,
//   story_scene_16_1,
//   story_scene_16_mobile
// } from "../../../assets/images/avatar";

// const Module9 = () => {
//   const containerRef9 = useRef(null);
//   const isMobile = window.innerWidth <= 768;

//   const scene14Ref = useRef(null);
//   const scene14TextRef = useRef(null);
//   const scene15Ref = useRef(null);
//   const scene15TextRef = useRef(null);
//   const scene16Ref = useRef(null);
//   const scene16TextRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.set(
//       [
//         scene14Ref.current,
//         scene14TextRef.current,
//         scene15Ref.current,
//         scene15TextRef.current,
//         scene16Ref.current,
//         scene16TextRef.current
//       ],
//       { opacity: 0 }
//     );

//     const tl9 = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef9.current,
//         start: "top top",
//         end: "+=3000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     // === Scene 14 ===
//     tl9.to(scene14Ref.current, { opacity: 1, duration: 2 });
//     tl9.to(scene14TextRef.current, { opacity: 1, duration: 1 }, "<");
//     tl9.to(scene14TextRef.current, { opacity: 0, duration: 1 }, "+=1");

//     // === Smooth crossfade Scene 14 → Scene 15 ===
//     tl9.to(scene14Ref.current, {
//       opacity: 0,
//       duration: 0.8,
//       ease: "power2.inOut"
//     });
//     tl9.to(
//       scene15Ref.current,
//       { opacity: 1, duration: 0.8, ease: "power2.inOut" },
//       "<0.4"
//     );

//     // Scene 15 Tooltip
//     tl9.to(scene15TextRef.current, { opacity: 1, duration: 0.6 }, "<0.2");
//     tl9.to(scene15TextRef.current, { opacity: 0, duration: 1 }, "+=1");

//     // === Scene 15 → Scene 16 ===
//     tl9.to(
//       scene15Ref.current,
//       { opacity: 0, duration: 1.2, ease: "power2.inOut" },
//       "<0.2"
//     );
//     tl9.to(
//       scene16Ref.current,
//       { opacity: 1, duration: 1.5, ease: "power2.inOut" },
//       "<0.2"
//     );
//     tl9.to(scene16TextRef.current, { opacity: 1, duration: 1 }, "<0.5");

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => {
//         if (t.trigger === containerRef9.current) t.kill();
//       });
//       tl9.kill();
//     };
//   }, []);

//   const desktopClass =
//     "absolute top-0 left-0 w-full h-full object-cover opacity-0";
//   const mobileClass =
//     "absolute top-0 left-0 w-full h-full object-contain opacity-0 scale-100";

//   return (
//     <div
//       ref={containerRef9}
//       id="module-9"
//       className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white lowercase relative bg-black"
//     >
//       {/* Scene 14 */}
//       <img
//         ref={scene14Ref}
//         src={isMobile ? story_scene_14_mobile : story_scene_14}
//         alt="Scene 14"
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
//       />
//       <div
//         ref={scene14TextRef}
//         className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//       >
//         <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//           <p>gibbo is given a form to fill for tilly.</p>
//         </div>
//       </div>

//       {/* Scene 15 */}
//       <img
//         ref={scene15Ref}
//         src={isMobile ? story_scene_15_mobile : story_scene_15}
//         alt="Scene 15"
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
//       />
//       <div
//         ref={scene15TextRef}
//         className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//       >
//         <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//           <p>Pulls out his pen. It doesn't write.</p>
//         </div>
//       </div>

//       {/* Scene 16 */}
//       <img
//         ref={scene16Ref}
//         src={isMobile ? story_scene_16_mobile : story_scene_16_1}
//         alt="Scene 16"
//         className={
//           isMobile
//             ? "absolute top-0 left-0 w-full h-full object-cover opacity-0"
//             : "absolute top-0 left-0 object-contain scale-y-110 scale-x-125 w-full h-full opacity-0"
//         }
//       />
//       <div
//         ref={scene16TextRef}
//         className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//       >
//         <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//           <p>He checks—no ink.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Module9;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  story_scene_14,
  story_scene_14_mobile,
  story_scene_15,
  story_scene_15_mobile,
  story_scene_16,
  story_scene_16_1,
  story_scene_16_mobile
} from "../../../assets/images/avatar";

const Module9 = () => {
  const containerRef9 = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const scene14Ref = useRef(null);
  const scene14TextRef = useRef(null);
  const scene15Ref = useRef(null);
  const scene15TextRef = useRef(null);
  const scene16Ref = useRef(null);
  const scene16TextRef = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // ✅ Instantly show Scene 14 and tooltip
  //   gsap.set([scene14Ref.current, scene14TextRef.current], { opacity: 1 });

  //   // Other scenes stay hidden initially
  //   gsap.set(
  //     [
  //       scene15Ref.current,
  //       scene15TextRef.current,
  //       scene16Ref.current,
  //       scene16TextRef.current
  //     ],
  //     { opacity: 0 }
  //   );

  //   const tl9 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: containerRef9.current,
  //       start: "top top",
  //       end: "+=3000",
  //       scrub: 1.5,
  //       pin: true,
  //       anticipatePin: 1,
  //       markers: false
  //     }
  //   });

  //   // Hide Scene 14 tooltip before transition
  //   tl9.to(scene14TextRef.current, { opacity: 0, duration: 1 }, "+=1");

  //   // Smooth crossfade Scene 14 → Scene 15
  //   tl9.to(scene14Ref.current, {
  //     opacity: 0,
  //     duration: 0.8,
  //     ease: "power2.inOut"
  //   });
  //   tl9.to(
  //     scene15Ref.current,
  //     { opacity: 1, duration: 0.8, ease: "power2.inOut" },
  //     "<0.4"
  //   );

  //   // Scene 15 Tooltip
  //   tl9.to(scene15TextRef.current, { opacity: 1, duration: 0.6 }, "<0.2");
  //   tl9.to(scene15TextRef.current, { opacity: 0, duration: 1 }, "+=1");

  //   // Scene 15 → Scene 16
  //   tl9.to(
  //     scene15Ref.current,
  //     { opacity: 0, duration: 1.2, ease: "power2.inOut" },
  //     "<0.2"
  //   );
  //   tl9.to(
  //     scene16Ref.current,
  //     { opacity: 1, duration: 1.5, ease: "power2.inOut" },
  //     "<0.2"
  //   );
  //   tl9.to(scene16TextRef.current, { opacity: 1, duration: 1 }, "<0.5");

  //   return () => {
  //     ScrollTrigger.getAll().forEach((t) => {
  //       if (t.trigger === containerRef9.current) t.kill();
  //     });
  //     tl9.kill();
  //   };
  // }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial states
    gsap.set([scene14Ref.current, scene14TextRef.current], { opacity: 1 });
    gsap.set(
      [
        scene15Ref.current,
        scene15TextRef.current,
        scene16Ref.current,
        scene16TextRef.current
      ],
      { opacity: 0 }
    );

    const tl9 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef9.current,
        start: "top top",
        end: "+=4000",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        markers: false
      }
    });

    // === Scene14 → Scene15 Crossfade ===
    tl9
      .to(scene14TextRef.current, { opacity: 0, duration: 0.6 })
      .to(scene14Ref.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      })
      .to(
        scene15Ref.current,
        { opacity: 1, duration: 1, ease: "power2.inOut" },
        "<0.4"
      )
      .to(scene15TextRef.current, { opacity: 1, duration: 0.6 }, "<0.3")
      .to(scene15TextRef.current, { opacity: 0, duration: 0.8 }, "+=1");

    // === Scene15 → Scene16 Crossfade ===
    tl9
      .to(
        scene15Ref.current,
        { opacity: 0, duration: 1, ease: "power2.inOut" },
        "<0.2"
      )
      .to(
        scene16Ref.current,
        { opacity: 1, duration: 1.2, ease: "power2.inOut" },
        "<0.3"
      )
      .to(scene16TextRef.current, { opacity: 1, duration: 0.8 }, "<0.5");

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === containerRef9.current) t.kill();
      });
      tl9.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef9}
      id="module-9"
      className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white lowercase relative bg-black"
    >
      {/* Scene 14 */}
      <img
        ref={scene14Ref}
        src={isMobile ? story_scene_14_mobile : story_scene_14}
        alt="Scene 14"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div
        ref={scene14TextRef}
        className="absolute bottom-6 left-6 z-40 pointer-events-none"
      >
        <div className="bg-black/80 text-white p-4 rounded-md w-fit">
          <p>gibbo is given a form to fill for tilly.</p>
        </div>
      </div>

      {/* Scene 15 */}
      <img
        ref={scene15Ref}
        src={isMobile ? story_scene_15_mobile : story_scene_15}
        alt="Scene 15"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
      />
      <div
        ref={scene15TextRef}
        className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
      >
        <div className="bg-black/80 text-white p-4 rounded-md w-fit">
          <p>Pulls out his pen. It doesn't write.</p>
        </div>
      </div>

      {/* Scene 16 */}
      <img
        ref={scene16Ref}
        src={isMobile ? story_scene_16_mobile : story_scene_16_1}
        alt="Scene 16"
        className={
          isMobile
            ? "absolute top-0 left-0 w-full h-full object-cover opacity-0"
            : "absolute top-0 left-0 object-contain scale-y-110 scale-x-125 w-full h-full opacity-0"
        }
      />
      <div
        ref={scene16TextRef}
        className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
      >
        <div className="bg-black/80 text-white p-4 rounded-md w-fit">
          <p>He checks—no ink.</p>
        </div>
      </div>
    </div>
  );
};

export default Module9;
