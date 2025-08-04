// import React, { useEffect, useRef, useState } from 'react';
// import { useQuizProgress } from '../../../hooks/useQuizProgress';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import QuizQuestion from '../QuizQuestion';

// gsap.registerPlugin(ScrollTrigger);

// export default function Module1() {
//   const { currentScene, nextModule, nextScene, submitResponse } = useQuizProgress();
//   const [questionAnswered, setQuestionAnswered] = useState(false);
//   const containerRef = useRef(null);
//   const scene1Ref = useRef(null);
//   const scene2Ref = useRef(null);
//   const scene3Ref = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Scene 1: Introduction animation
//       gsap.fromTo(scene1Ref.current.querySelector('.intro-text'),
//         { opacity: 0, y: 100 },
//         { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
//       );

//       gsap.fromTo(scene1Ref.current.querySelector('.floating-elements'),
//         { scale: 0, rotation: -180 },
//         { scale: 1, rotation: 0, duration: 1.5, ease: "back.out(1.7)", delay: 0.5 }
//       );

//       // Scene 2: Question reveal
//       ScrollTrigger.create({
//         trigger: scene2Ref.current,
//         start: "top 80%",
//         end: "bottom 20%",
//         onEnter: () => {
//           gsap.fromTo(scene2Ref.current.querySelector('.question-container'),
//             { opacity: 0, scale: 0.8 },
//             { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
//           );
//         }
//       });

//       // Scene 3: Story continuation
//       ScrollTrigger.create({
//         trigger: scene3Ref.current,
//         start: "top 80%",
//         end: "bottom 20%",
//         onEnter: () => {
//           gsap.fromTo(scene3Ref.current.querySelector('.story-text'),
//             { opacity: 0, x: -100 },
//             { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
//           );
//         }
//       });

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const handleQuestionSubmit = (questionId, selectedAnswer, isCorrect) => {
//     submitResponse(questionId, selectedAnswer, isCorrect);
//     setQuestionAnswered(true);

//     // Auto advance after a short delay
//     setTimeout(() => {
//       nextModule();
//     }, 2000);
//   };

//   const questionData = {
//     id: 'module1-q1',
//     question: 'In a mystical forest, you encounter a talking fox who offers you three magical items. Which would be most valuable for your journey ahead?',
//     options: [
//       { id: 'a', text: 'A compass that always points to what you seek', isCorrect: true },
//       { id: 'b', text: 'A bag that never runs out of food', isCorrect: false },
//       { id: 'c', text: 'A cloak that makes you invisible', isCorrect: false },
//       { id: 'd', text: 'A sword that never dulls', isCorrect: false }
//     ],
//     explanation: 'The compass represents wisdom and direction - the most valuable tools for any journey of discovery!'
//   };

//   return (
//     <div ref={containerRef} className="relative">
//       {/* Scene 1: Introduction */}
//       <section ref={scene1Ref} className="min-h-screen flex items-center justify-center px-4 pt-20">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="intro-text">
//             <h1 className="text-7xl font-bricolage font-bold text-evolve-white mb-8">
//               The Journey
//               <span className="block bg-gradient-to-r from-evolve-lavender-indigo to-evolve-heliotrope
//                              bg-clip-text text-transparent">
//                 Begins
//               </span>
//             </h1>
//             <p className="text-2xl text-evolve-gray font-montserrat leading-relaxed max-w-3xl mx-auto">
//               Welcome to an enchanted realm where knowledge and adventure intertwine.
//               Your choices will shape the story, and every question reveals new mysteries.
//             </p>
//           </div>

//           <div className="floating-elements mt-12">
//             <div className="w-32 h-32 bg-gradient-to-br from-evolve-lavender-indigo to-evolve-heliotrope
//                           rounded-full mx-auto opacity-20 animate-pulse"></div>
//           </div>
//         </div>
//       </section>

//       {/* Scene 2: First Question */}
//       <section ref={scene2Ref} className="min-h-screen flex items-center justify-center px-4">
//         <div className="question-container w-full max-w-4xl mx-auto">
//           <div className="bg-evolve-charleston-green p-8 rounded-25px shadow-button-popped
//                         border border-evolve-arsenic">
//             <div className="text-center mb-8">
//               <h2 className="text-4xl font-bricolage font-bold text-evolve-white mb-4">
//                 Chapter I: The Mystical Encounter
//               </h2>
//               <p className="text-evolve-gray font-montserrat text-lg">
//                 As you step into the ancient forest, the air shimmers with magic...
//               </p>
//             </div>

//             <QuizQuestion
//               questionData={questionData}
//               onSubmit={handleQuestionSubmit}
//               disabled={questionAnswered}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Scene 3: Story Continuation */}
//       <section ref={scene3Ref} className="min-h-screen flex items-center justify-center px-4">
//         <div className="story-text max-w-4xl mx-auto text-center">
//           <div className="bg-gradient-to-r from-evolve-charleston-green to-evolve-arsenic
//                         p-12 rounded-25px shadow-button-popped border border-evolve-lavender-indigo/30">
//             <h3 className="text-5xl font-bricolage font-bold text-evolve-white mb-8">
//               The Path Unfolds
//             </h3>
//             <p className="text-xl text-evolve-gray font-montserrat leading-relaxed mb-8">
//               With the magical compass in hand, you feel its gentle pull guiding you deeper
//               into the mysteries that await. The fox nods approvingly before disappearing
//               into the shadows with a knowing smile.
//             </p>

//             {questionAnswered && (
//               <div className="text-evolve-lavender-indigo font-montserrat">
//                 <p className="mb-4">Your journey continues...</p>
//                 <div className="w-8 h-8 border-2 border-evolve-lavender-indigo border-t-transparent
//                               rounded-full animate-spin mx-auto"></div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { story_intro } from "../../../assets/images/avatar/index";
// import { story_scene_1 } from "../../../assets/images/avatar/index";
// // import { storyScene2 } from "../../../assets/images/avatar/story_scene_2.png";

// gsap.registerPlugin(ScrollTrigger);

// export default function Module1() {
//   const containerRef = useRef(null);
//   const scene1Ref = useRef(null);
//   const imageZoomRef = useRef(null);
//   const overlayRef = useRef(null);
//   const sceneTextRef = useRef(null);
//   const scene2ImageRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Scroll up text & zoom image
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: scene1Ref.current,
//             start: "top top",
//             end: "+=100%",
//             scrub: true,
//             pin: true,
//           },
//         })
//         .to(
//           scene1Ref.current.querySelectorAll(
//             ".heading, .subtext, .scroll-hint"
//           ),
//           {
//             y: -100,
//             opacity: 0,
//             ease: "power2.out",
//           }
//         )
//         .to(
//           imageZoomRef.current,
//           {
//             scale: 1.3,
//             ease: "power2.out",
//           },
//           "<"
//         );

//       // Appear overlay heading & scene text
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: overlayRef.current,
//             start: "top center",
//             end: "+=100%",
//             scrub: true,
//             pin: true,
//           },
//         })
//         .fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
//         .fromTo(
//           sceneTextRef.current,
//           { opacity: 0, x: -50 },
//           { opacity: 1, x: 0, duration: 1 },
//           "<"
//         );

//       // Transition to scene2 image
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: scene2ImageRef.current,
//             start: "top center",
//             end: "+=100%",
//             scrub: true,
//             pin: true,
//           },
//         })
//         .to(imageZoomRef.current, {
//           scale: 2,
//           opacity: 0,
//           duration: 1,
//         })
//         .fromTo(
//           scene2ImageRef.current,
//           { opacity: 0, scale: 1.3 },
//           { opacity: 1, scale: 1, duration: 1 }
//         )
//         .to(
//           sceneTextRef.current,
//           {
//             opacity: 0,
//             duration: 0.5,
//           },
//           "<"
//         );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="w-full h-full">
//       {/* Scene 1 - Intro */}
//       <section
//         ref={scene1Ref}
//         className="h-screen w-screen bg-black flex flex-col items-center justify-center px-4 text-white relative overflow-hidden"
//       >
//         <h1 className="heading text-6xl font-bold lowercase mb-4">
//           seen/unseen
//         </h1>
//         <p className="subtext text-xl lowercase mb-6">
//           discover the logic behind the ordinary
//         </p>

//         <div className="bg-[#A35BFB] rounded-3xl p-6 w-[90%] max-w-md text-center">
//           <h2 className="text-white text-lg lowercase mb-4">
//             welcome to the pawcity!
//           </h2>
//           <img
//             src={story_intro}
//             alt="intro"
//             className="rounded-xl mx-auto w-full max-h-[250px] object-contain"
//           />
//         </div>

//         <p className="scroll-hint mt-10 text-sm text-white lowercase">
//           scroll down to deep dive into the world
//         </p>
//       </section>

//       {/* Scene 2 - Fullscreen Image Zoom */}
//       <section className="h-screen w-screen relative overflow-hidden">
//         <img
//           ref={imageZoomRef}
//           src={story_scene_1}
//           alt="scene1"
//           className="w-full h-full object-cover absolute top-0 left-0 z-0"
//         />
//       </section>

//       {/* Scene 3 - Overlay Heading + Scene Text Box */}
//       <section
//         ref={overlayRef}
//         className="h-screen w-screen relative text-white flex flex-col justify-between px-6 py-10"
//       >
//         <h2 className="text-3xl lowercase z-10">
//           discover the logic behind the ordinary
//         </h2>

//         <div
//           ref={sceneTextRef}
//           className="bg-black text-white p-4 rounded-lg max-w-sm text-sm lowercase"
//         >
//           you look around and notice patterns, repeating rhythms in every
//           corner. pawcity hides a deeper logic waiting to be seen.
//         </div>
//       </section>

//       {/* Scene 4 - Transition to Next Image & Text */}
//       {/* <section
//         ref={scene2ImageRef}
//         className="h-screen w-screen relative text-white flex flex-col justify-end px-6 py-10"
//       >
//         <img
//           src={storyScene2.src}
//           alt="scene2"
//           className="w-full h-full object-cover absolute top-0 left-0 z-0"
//         />
//         <div className="bg-black text-white p-4 rounded-lg max-w-sm text-sm lowercase z-10">
//           the city breathes, but not with life — with loops, inputs, outputs.
//           can you trace its logic before it disappears?
//         </div>
//       </section> */}
//     </div>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";
// import {
//   char_1,
//   char_1_1,
//   story_intro,
//   story_scene_1,
//   story_scene_2,
//   story_scene_3,
//   story_scene_4,
//   story_scene_5,
//   story_scene_5_1
// } from "../../../assets/images/avatar";
// import StoryScene3 from "../StoryScene3";

// gsap.registerPlugin(ScrollTrigger);

// const Module1 = () => {
//   const containerRef = useRef(null);
//   const headingRef = useRef(null);
//   const subHeadingRef = useRef(null);
//   const introBoxRef = useRef(null);
//   const bottomTextRef = useRef(null);
//   const introImageRef = useRef(null);
//   const scene1Ref = useRef(null);
//   const scene1TextRef = useRef(null);
//   const scene2Ref = useRef(null);
//   const scene2TextRef = useRef(null);
//   const lenisRef = useRef(null);
//   const scene3Ref = useRef(null);
//   const scene3TextRef = useRef(null);
//   const bubbleTextRef = useRef(null);
//   const scene4Ref = useRef(null);
//   const charRef = useRef(null);
//   const char1AltRef = useRef(null);
//   const scene5Ref = useRef(null);
//   const bubble2Ref = useRef(null);

//   useEffect(() => {
//     // Initialize Lenis smooth scroll
//     const lenis = new Lenis({
//       duration: 1.4, // Slightly slower for smoother perception
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       direction: "vertical",
//       gestureDirection: "vertical",
//       smooth: true,
//       mouseMultiplier: 1.1,
//       smoothTouch: false,
//       touchMultiplier: 2,
//       infinite: false
//     });

//     lenisRef.current = lenis;

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     lenis.on("scroll", () => {
//       ScrollTrigger.update();
//     });

//     // Set initial states
//     gsap.set(
//       [
//         headingRef.current,
//         subHeadingRef.current,
//         introBoxRef.current,
//         bottomTextRef.current
//       ],
//       { opacity: 1, y: 0 }
//     );

//     gsap.set(introImageRef.current, { scale: 1 });

//     gsap.set(
//       [
//         scene1Ref.current,
//         scene1TextRef.current,
//         scene2Ref.current,
//         scene2TextRef.current
//       ],
//       { opacity: 0, scale: 1 }
//     );

//     // Master timeline
//     const masterTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=6000", // longer scroll distance
//         scrub: 1.6,
//         pin: true,
//         anticipatePin: 1
//       }
//     });

//     masterTl
//       // Intro delay
//       .to({}, { duration: 1 })

//       // Pop out intro image and fade others
//       .to(introImageRef.current, {
//         scale: 3.5,
//         duration: 2,
//         ease: "power3.inOut"
//       })
//       .to(
//         [
//           headingRef.current,
//           subHeadingRef.current,
//           introBoxRef.current,
//           bottomTextRef.current
//         ],
//         { opacity: 0, duration: 1.2, ease: "power2.out" },
//         "<0.8"
//       )

//       // Fade into Scene 1
//       .to(
//         scene1Ref.current,
//         { opacity: 1, duration: 1, ease: "power2.out" },
//         "+=0.2"
//       )
//       .to(
//         scene1TextRef.current,
//         { opacity: 1, duration: 1, ease: "power2.out" },
//         "<0.3"
//       )
//       .to(
//         scene1Ref.current,
//         { scale: 1.35, duration: 2.5, ease: "power2.inOut" },
//         "<"
//       )

//       // Transition to Scene 2
//       .to(
//         scene1TextRef.current,
//         { opacity: 0, duration: 0.6, ease: "power2.out" },
//         "+=0.4"
//       )
//       .to(
//         scene1Ref.current,
//         { opacity: 0, duration: 0.6, ease: "power2.out" },
//         "<0.2"
//       )
//       .to(
//         scene2Ref.current,
//         { opacity: 1, duration: 1.2, ease: "power2.out" },
//         "<"
//       )
//       .to(
//         scene2TextRef.current,
//         { opacity: 1, duration: 1, ease: "power2.out" },
//         "<0.5"
//       )
//       .to(scene2Ref.current, { opacity: 1, duration: 1 }, 6)
//       .to(scene2TextRef.current, { opacity: 1, duration: 1 }, 6.5)
//       .to(scene2Ref.current, { opacity: 0.7, scale: 1.02, duration: 1 }, 9) // subtle zoom for better transition
//       .to(scene2TextRef.current, { opacity: 0, duration: 1 }, 9)

//       // Transition to Scene 4
//       .to(scene2TextRef.current, { opacity: 0, duration: 0.6 }, "+=0.4")
//       .to(scene2Ref.current, { opacity: 0, duration: 0.6 }, "<0.2")
//       .to(scene3Ref.current, { opacity: 1, duration: 1.2 }, "<")
//       .to(scene3TextRef.current, { opacity: 1, duration: 1 }, "<0.5")

//       // Show the bubble in center
//       .to(
//         bubbleTextRef.current,
//         { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
//         "+=0.5"
//       );
//     masterTl
//       // Fade out scene3Text and bubble
//       .to([scene3TextRef.current, bubbleTextRef.current], {
//         opacity: 0,
//         duration: 1,
//         ease: "power2.out"
//       })

//       // Simulate horizontal scroll transition from scene3 to scene4
//       .to(scene3Ref.current, {
//         xPercent: -100,
//         duration: 2,
//         ease: "power3.inOut"
//       })
//       .fromTo(
//         scene4Ref.current,
//         { xPercent: 100 },
//         { xPercent: 0, duration: 2, ease: "power3.inOut" },
//         "<"
//       )

//       // Show char_1 with diagonal animation while scrolling on scene4
//       // char_1 appears and moves 2 steps diagonally
//       .to(charRef.current, {
//         opacity: 1,
//         duration: 0.5,
//         ease: "power2.inOut"
//       })
//       .to(charRef.current, {
//         x: 20,
//         y: -20,
//         duration: 1.2,
//         ease: "power2.inOut"
//       })
//       // .to(charRef.current, {
//       //   x: 400,
//       //   y: -200,
//       //   duration: 1.2,
//       //   ease: "power2.inOut",
//       // })

//       // Fade out char_1
//       .to(charRef.current, {
//         opacity: 0,
//         duration: 0.5,
//         ease: "power2.out"
//       })

//       // Fade in char_1_1 at the same position
//       .set(char1AltRef.current, {
//         x: 5,
//         y: 10
//       })
//       .to(char1AltRef.current, {
//         opacity: 1,
//         duration: 0.2,
//         ease: "power2.inOut"
//       })

//       // char_1_1 continues diagonal steps
//       .to(char1AltRef.current, {
//         x: 30,
//         y: -10,
//         duration: 1.2,
//         ease: "power2.inOut"
//       })
//       // .to(char1AltRef.current, {
//       //   x: 800,
//       //   y: -400,
//       //   duration: 1.2,
//       //   ease: "power2.inOut",
//       // });
//       // Fade out scene4 (scene + characters)
//       .to([scene4Ref.current, char1AltRef.current], {
//         opacity: 0,
//         duration: 1.5,
//         ease: "power2.out"
//       })

//       // Fade in scene5
//       .to(scene5Ref.current, {
//         opacity: 1,
//         duration: 1.5,
//         ease: "power2.inOut"
//       })

//       // Show bubble in scene5
//       .to(bubble2Ref.current, {
//         opacity: 1,
//         scale: 1,
//         duration: 1,
//         ease: "back.out(1.7)"
//       });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       masterTl.kill();
//       lenis.destroy();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-screen h-screen overflow-hidden text-white lowercase relative bg-black"
//     >
//       {/* Initial Scene */}
//       <div className="absolute w-full h-full px-4 flex flex-col items-center justify-center z-10">
//         <h1 ref={headingRef} className="text-8xl font-extrabold mb-4">
//           seen/unseen
//         </h1>
//         <p ref={subHeadingRef} className="text-xl mb-6 font-bold text-center">
//           discover the logic behind the ordinary
//         </p>

//         <div
//           ref={introBoxRef}
//           className="bg-[#A35BFB] rounded-2xl pt-6 px-1 pb-1 text-center w-[320px] max-w-full"
//         >
//           <h2 className="text-white text-xl mb-4">welcome to the pawcity!</h2>
//           <img
//             ref={introImageRef}
//             src={story_intro}
//             alt="Intro"
//             className="mx-auto rounded-xl w-full h-auto object-cover"
//           />
//         </div>

//         <p ref={bottomTextRef} className="mt-6 text-md">
//           scroll down to deep dive into the world
//         </p>
//       </div>

//       {/* Scene 1 */}
//       <img
//         ref={scene1Ref}
//         src={story_scene_1}
//         alt="Scene 1"
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-0 z-0"
//       />
//       <div
//         ref={scene1TextRef}
//         className="absolute top-0 left-0 w-full h-full flex flex-col justify-between opacity-0 z-20 px-4 py-6"
//       >
//         <h2 className="text-3xl text-white mt-10 text-center">
//           discover the logic behind the ordinary
//         </h2>
//         <div className="bg-black text-white p-4 rounded-md w-fit self-start">
//           <p>scene explanation text 1 goes here</p>
//         </div>
//       </div>

//       {/* Scene 2 */}
//       <img
//         ref={scene2Ref}
//         src={story_scene_2} // Replace with actual `story_scene_2`
//         alt="Scene 2"
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-0 z-10"
//       />
//       <div
//         ref={scene2TextRef}
//         className="absolute top-0 left-0 w-full h-full flex items-end justify-start opacity-0 z-30 px-4 py-6"
//       >
//         <div className="bg-black/80 text-white p-4 rounded-md max-w-[60%]">
//           <p>scene explanation text 2 goes here</p>
//         </div>
//       </div>

//       {/* Scene 3 */}
//       {/* <div
//         ref={scene3Ref}
//         className="h-screen w-full relative z-10 opacity-0 flex justify-center items-center"
//       >
//         <img
//           src={story_scene_3}
//           alt="scene 3"
//           className="w-full h-full object-fill"
//         /> */}
//       <div
//         ref={scene3Ref}
//         className="w-screen h-screen flex relative z-10 opacity-0 items-center justify-center"
//       >
//         <StoryScene3 className="w-screen h-screen" preserveAspectRatio="none" />
//         <div
//           ref={scene3TextRef}
//           className="absolute bottom-6 left-6 opacity-0 z-30"
//         >
//           <div className="bg-black text-white p-4 rounded-md w-fit">
//             <p>scene explanation text 3 goes here</p>
//           </div>
//         </div>
//       </div>

//       {/* Bubble text in Scene 4 */}
//       <div
//         ref={bubbleTextRef}
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 z-40"
//       >
//         <div className="bg-evolve-inchworm text-black text-lg font-montserrat px-6 py-4 rounded-2xl shadow-xl text-center">
//           <p>Oh! it’s 5pm already!</p>
//           <p>I have to pack my bags.</p>
//         </div>
//       </div>

//       {/* Scene 4 */}
//       <div
//         ref={scene4Ref}
//         className="absolute w-full h-full top-0 left-0 opacity-100 z-10 flex justify-center items-center bg-black"
//       >
//         <img
//           src={story_scene_4}
//           alt="Scene 4"
//           className="w-full h-full object-cover"
//         />

//         <img
//           ref={charRef}
//           src={char_1}
//           alt="Character"
//           className="absolute -bottom-4 left-20 w-[500px] h-[500px] object-contain opacity-0 z-30"
//         />

//         <img
//           ref={char1AltRef}
//           src={char_1_1}
//           alt="Character 1 Alt"
//           className="absolute bottom-0 left-20 w-[650px] h-[650px] object-contain opacity-0 z-30"
//         />

//         {/* 👇 Scene 4 explanation box */}
//         <div className="absolute bottom-6 left-6 z-40">
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene explanation text 4 goes here</p>
//           </div>
//         </div>
//       </div>

//       {/* Scene 5 */}
//       <div
//         ref={scene5Ref}
//         className="absolute w-full h-full top-0 left-0 opacity-0 z-10 flex justify-center items-center bg-black"
//       >
//         <img
//           src={story_scene_5_1}
//           alt="Scene 5"
//           className="absolute scale-y-[85%] object-cover"
//         />

//         {/* Bubble text for Scene 5 */}
//         <div
//           ref={bubble2Ref}
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 z-40"
//         >
//           <div className="bg-evolve-inchworm text-black text-lg font-montserrat px-6 py-4 rounded-2xl shadow-xl text-center">
//             <p>this is an interesting pattern on the escalator</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Module1;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   char_1,
//   char_1_1,
//   story_intro,
//   story_scene_1,
//   story_scene_2,
//   story_scene_3,
//   story_scene_4,
//   story_scene_5_1
// } from "../../../assets/images/avatar";

// import StoryScene3 from "../StoryScene3";

// gsap.registerPlugin(ScrollTrigger);

// const Module1 = () => {
//   const containerRef = useRef(null);
//   const headingRef = useRef(null);
//   const subHeadingRef = useRef(null);
//   const introBoxRef = useRef(null);
//   const bottomTextRef = useRef(null);
//   const introImageRef = useRef(null);
//   const scene1Ref = useRef(null);
//   const scene1TextRef = useRef(null);
//   const scene2Ref = useRef(null);
//   const scene2TextRef = useRef(null);
//   const scene3Ref = useRef(null);
//   const scene3TextRef = useRef(null);
//   const bubbleTextRef = useRef(null);
//   const scene4Ref = useRef(null);
//   const charRef = useRef(null);
//   const char1AltRef = useRef(null);
//   const scene5Ref = useRef(null);
//   const bubble2Ref = useRef(null);

//   useEffect(() => {
//     gsap.set(
//       [
//         headingRef.current,
//         subHeadingRef.current,
//         introBoxRef.current,
//         bottomTextRef.current
//       ],
//       { opacity: 1, y: 0 }
//     );

//     gsap.set(introImageRef.current, { scale: 1 });

//     gsap.set(
//       [
//         scene1Ref.current,
//         scene1TextRef.current,
//         scene2Ref.current,
//         scene2TextRef.current
//       ],
//       { opacity: 0, scale: 1 }
//     );

//     const masterTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=6000",
//         scrub: 1.6,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     masterTl
//       .to({}, { duration: 1 }) // delay
//       .to(introImageRef.current, {
//         scale: 3.5,
//         duration: 2,
//         ease: "power3.inOut"
//       })
//       .to(
//         [
//           headingRef.current,
//           subHeadingRef.current,
//           introBoxRef.current,
//           bottomTextRef.current
//         ],
//         { opacity: 0, duration: 1.2, ease: "power2.out" },
//         "<0.8"
//       )

//       .to(scene1Ref.current, { opacity: 1, duration: 1 }, "+=0.2")
//       .to(scene1TextRef.current, { opacity: 1, duration: 1 }, "<0.3")
//       .to(scene1Ref.current, { scale: 1.35, duration: 2.5 }, "<")

//       .to(scene1TextRef.current, { opacity: 0, duration: 0.6 }, "+=0.4")
//       .to(scene1Ref.current, { opacity: 0, duration: 0.6 }, "<0.2")
//       .to(scene2Ref.current, { opacity: 1, duration: 1.2 }, "<")
//       .to(scene2TextRef.current, { opacity: 1, duration: 1 }, "<0.5")
//       .to(scene2Ref.current, { opacity: 1, duration: 1 }, 6)
//       .to(scene2TextRef.current, { opacity: 1, duration: 1 }, 6.5)
//       .to(scene2Ref.current, { opacity: 0.7, scale: 1.02, duration: 1 }, 9)
//       .to(scene2TextRef.current, { opacity: 0, duration: 1 }, 9)

//       .to(scene2TextRef.current, { opacity: 0, duration: 0.6 }, "+=0.4")
//       .to(scene2Ref.current, { opacity: 0, duration: 0.6 }, "<0.2")
//       .to(scene3Ref.current, { opacity: 1, duration: 1.2 }, "<")
//       .to(scene3TextRef.current, { opacity: 1, duration: 1 }, "<0.5")
//       .to(
//         bubbleTextRef.current,
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 1,
//           ease: "back.out(1.7)"
//         },
//         "+=0.5"
//       )
//       .to([scene3TextRef.current, bubbleTextRef.current], {
//         opacity: 0,
//         duration: 1
//       })
//       .to(scene3Ref.current, { xPercent: -100, duration: 2 }, "<")
//       .fromTo(
//         scene4Ref.current,
//         { xPercent: 100 },
//         { xPercent: 0, duration: 2 },
//         "<"
//       )

//       .to(charRef.current, { opacity: 1, duration: 0.5 })
//       .to(charRef.current, { x: 20, y: -20, duration: 1.2 })
//       .to(charRef.current, { opacity: 0, duration: 0.5 })
//       .set(char1AltRef.current, { x: 5, y: 10 })
//       .to(char1AltRef.current, { opacity: 1, duration: 0.2 })
//       .to(char1AltRef.current, { x: 30, y: -10, duration: 1.2 })
//       .to([scene4Ref.current, char1AltRef.current], {
//         opacity: 0,
//         duration: 1.5
//       })

//       .to(scene5Ref.current, { opacity: 1, duration: 1.5 })
//       .to(bubble2Ref.current, {
//         opacity: 1,
//         scale: 1,
//         duration: 1,
//         ease: "back.out(1.7)"
//       });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       masterTl.kill();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-screen h-screen overflow-hidden text-white lowercase relative bg-black"
//     >
//       {/* Initial Scene */}
//       <div className="absolute w-full h-full px-4 flex flex-col items-center justify-center z-10">
//         <h1 ref={headingRef} className="text-8xl font-extrabold mb-4">
//           seen/unseen
//         </h1>
//         <p ref={subHeadingRef} className="text-xl mb-6 font-bold text-center">
//           discover the logic behind the ordinary
//         </p>

//         <div
//           ref={introBoxRef}
//           className="bg-[#A35BFB] rounded-2xl pt-6 px-1 pb-1 text-center w-[320px] max-w-full"
//         >
//           <h2 className="text-white text-xl mb-4">welcome to the pawcity!</h2>
//           <img
//             ref={introImageRef}
//             src={story_intro}
//             alt="Intro"
//             className="mx-auto rounded-xl w-full h-auto object-cover"
//           />
//         </div>

//         <p ref={bottomTextRef} className="mt-6 text-md">
//           scroll down to deep dive into the world
//         </p>
//       </div>

//       {/* Scene 1 */}
//       <img
//         ref={scene1Ref}
//         src={story_scene_1}
//         alt="Scene 1"
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-0 z-0"
//       />
//       <div
//         ref={scene1TextRef}
//         className="absolute top-0 left-0 w-full h-full flex flex-col justify-between opacity-0 z-20 px-4 py-6"
//       >
//         <h2 className="text-3xl text-white mt-10 text-center">
//           discover the logic behind the ordinary
//         </h2>
//         <div className="bg-black text-white p-4 rounded-md w-fit self-start">
//           <p>scene explanation text 1 goes here</p>
//         </div>
//       </div>

//       {/* Scene 2 */}
//       <img
//         ref={scene2Ref}
//         src={story_scene_2}
//         alt="Scene 2"
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-0 z-10"
//       />
//       <div
//         ref={scene2TextRef}
//         className="absolute top-0 left-0 w-full h-full flex items-end justify-start opacity-0 z-30 px-4 py-6"
//       >
//         <div className="bg-black/80 text-white p-4 rounded-md max-w-[60%]">
//           <p>scene explanation text 2 goes here</p>
//         </div>
//       </div>

//       {/* Scene 3 */}
//       <div
//         ref={scene3Ref}
//         className="w-screen h-screen flex relative z-10 opacity-0 items-center justify-center"
//       >
//         <StoryScene3 className="w-screen h-screen" preserveAspectRatio="none" />
//         <div
//           ref={scene3TextRef}
//           className="absolute bottom-6 left-6 opacity-0 z-30"
//         >
//           <div className="bg-black text-white p-4 rounded-md w-fit">
//             <p>scene explanation text 3 goes here</p>
//           </div>
//         </div>
//       </div>

//       {/* Bubble text in Scene 3 */}
//       <div
//         ref={bubbleTextRef}
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 z-40"
//       >
//         <div className="bg-evolve-inchworm text-black text-lg font-montserrat px-6 py-4 rounded-2xl shadow-xl text-center">
//           <p>Oh! it's 5pm already!</p>
//           <p>I have to pack my bags.</p>
//         </div>
//       </div>

//       {/* Scene 4 */}
//       <div
//         ref={scene4Ref}
//         className="absolute w-full h-full top-0 left-0 opacity-100 z-10 flex justify-center items-center bg-black"
//       >
//         <img
//           src={story_scene_4}
//           alt="Scene 4"
//           className="w-full h-full object-cover"
//         />

//         <img
//           ref={charRef}
//           src={char_1}
//           alt="Character"
//           className="absolute -bottom-4 left-20 w-[500px] h-[500px] object-contain opacity-0 z-30"
//         />

//         <img
//           ref={char1AltRef}
//           src={char_1_1}
//           alt="Character 1 Alt"
//           className="absolute bottom-0 left-20 w-[650px] h-[650px] object-contain opacity-0 z-30"
//         />

//         <div className="absolute bottom-6 left-6 z-40">
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene explanation text 4 goes here</p>
//           </div>
//         </div>
//       </div>

//       {/* Scene 5 */}
//       <div
//         ref={scene5Ref}
//         className="absolute w-full h-full top-0 left-0 opacity-0 z-10 flex justify-center items-center bg-black"
//       >
//         <img
//           src={story_scene_5_1}
//           alt="Scene 5"
//           className="absolute scale-y-[85%] object-cover"
//         />

//         {/* Bubble text for Scene 5 */}
//         <div
//           ref={bubble2Ref}
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 z-40"
//         >
//           <div className="bg-evolve-inchworm text-black text-lg font-montserrat px-6 py-4 rounded-2xl shadow-xl text-center">
//             <p>this is an interesting pattern on the escalator</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Module1;

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  char_1,
  char_1_1,
  down_arrow,
  story_intro,
  story_scene_1,
  story_scene_1_mobile,
  story_scene_2,
  story_scene_2_mobile,
  story_scene_3,
  story_scene_3_mobile,
  story_scene_4,
  story_scene_4_mobile,
  story_scene_5_1,
  story_scene_5_bubble,
  story_scene_5_bubble_mobile,
  story_scene_5_mobile
} from "../../../assets/images/avatar";

// import StoryScene3 from "../StoryScene3";

gsap.registerPlugin(ScrollTrigger);

const Module1 = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const introBoxRef = useRef(null);
  const bottomTextRef = useRef(null);
  const introImageRef = useRef(null);
  const downArrowRef = useRef(null);
  const scene1Ref = useRef(null);
  const scene1TextRef = useRef(null);
  const scene2Ref = useRef(null);
  const scene2TextRef = useRef(null);
  const scene3Ref = useRef(null);
  const scene3TextRef = useRef(null);
  const bubbleTextRef = useRef(null);
  const scene4Ref = useRef(null);
  const charRef = useRef(null);
  const char1AltRef = useRef(null);
  const scene5Ref = useRef(null);
  const bubble2Ref = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.set(
      [
        headingRef.current,
        subHeadingRef.current,
        introBoxRef.current,
        bottomTextRef.current
      ],
      { opacity: 1, y: 0 }
    );

    gsap.set(introImageRef.current, { scale: 1 });

    gsap.set(
      [
        scene1Ref.current,
        scene1TextRef.current,
        scene2Ref.current,
        scene2TextRef.current
      ],
      { opacity: 0, scale: 1 }
    );
    // ✅ Initial position for character in Scene 4
    gsap.set(char1AltRef.current, {
      opacity: 0,
      x: isMobile ? -20 : -70,
      y: isMobile ? 50 : 250, // partially hidden
      width: isMobile ? "150px" : "750px",
      height: isMobile ? "auto" : "750px"
    });

    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=6000",
        scrub: 1.6,
        pin: true,
        anticipatePin: 1,
        markers: false
      }
    });

    masterTl
      .to({}, { duration: 1 })
      .to(introImageRef.current, {
        scale: 3.5,
        duration: 2,
        ease: "power3.inOut"
      })
      .to(
        [
          headingRef.current,
          subHeadingRef.current,
          introBoxRef.current,
          bottomTextRef.current
        ],
        { opacity: 0, duration: 1.2, ease: "power2.out" },
        "<0.8"
      )
      .to(
        [
          headingRef.current,
          subHeadingRef.current,
          introBoxRef.current,
          bottomTextRef.current,
          downArrowRef.current // ✅ Added arrow here
        ],
        { opacity: 0, duration: 1.2, ease: "power2.out" },
        "<0.8"
      )

      // ✅ Scene 1 changes
      .to(scene1Ref.current, { opacity: 1, duration: 1 }, "+=0.2")
      .to(scene1TextRef.current, { opacity: 1, duration: 1 }, "<0.3")
      .to(
        scene1Ref.current,
        {
          scale: 2,
          duration: 2.5,
          transformOrigin: "50% 10%" // Focus zoom at top-center
        },
        "<"
      )
      .to(scene1TextRef.current, { opacity: 0, duration: 0.6 }, "+=0.4")
      .to(scene1Ref.current, { opacity: 0, duration: 0.6 }, "<0.2")

      .to(scene2Ref.current, { opacity: 1, duration: 1.2 }, "<")
      .to(scene2TextRef.current, { opacity: 1, duration: 1 }, "<0.5")
      .to(scene2Ref.current, { opacity: 1, duration: 1 }, 6)
      .to(scene2TextRef.current, { opacity: 1, duration: 1 }, 6.5)
      .to(scene2Ref.current, { opacity: 0.7, scale: 1.02, duration: 1 }, 9)
      .to(scene2TextRef.current, { opacity: 0, duration: 1 }, 9)
      .to(scene2Ref.current, { opacity: 0, duration: 0.6 }, "+=0.4")

      .to(scene3Ref.current, { opacity: 1, duration: 1.2 }, "<")
      .to(scene3TextRef.current, { opacity: 1, duration: 1 }, "<0.5")
      .to(
        bubbleTextRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)"
        },
        "+=0.5"
      )
      .to([scene3TextRef.current, bubbleTextRef.current], {
        opacity: 0,
        duration: 1
      })
      .to(scene3Ref.current, { xPercent: -100, duration: 2 }, "<")
      .fromTo(
        scene4Ref.current,
        { xPercent: 100 },
        { xPercent: 0, duration: 2 },
        "<"
      )
      // .set(char1AltRef.current, {
      //   x: isMobile ? 0 : 5,
      //   y: isMobile ? 0 : 10
      // })
      // .to(char1AltRef.current, { opacity: 1, duration: 0.4 })
      // .to(char1AltRef.current, {
      //   x: isMobile ? 20 : 30,
      //   y: isMobile ? -10 : -20,
      //   duration: 1.2,
      //   ease: "power2.inOut"
      // })

      // ✅ Scene 4 Character Animation
      .to(char1AltRef.current, { opacity: 1, duration: 1.5 })
      .to(char1AltRef.current, {
        x: isMobile ? 100 : 420, // More right for desktop
        y: isMobile ? -90 : 40, // More upward for mobile
        scale: 0.8, // Slight scale for depth effect
        duration: 8,
        ease: "power2.inOut"
      })

      .to([scene4Ref.current, char1AltRef.current], {
        opacity: 0,
        duration: 1.5
      })

      .to(scene5Ref.current, { opacity: 1, duration: 1.5 })
      .to(bubble2Ref.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)"
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      masterTl.kill();
    };
  }, []);

  return (
    // <div
    //   ref={containerRef}
    //   className="w-screen h-screen overflow-hidden text-white lowercase relative bg-black"
    // >
    <div
      ref={containerRef}
      className="w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden text-white lowercase relative bg-black"
    >
      {/* INTRO SCENE */}
      <div className="absolute w-full h-full px-4 flex flex-col items-center justify-center z-10">
        <h1
          ref={headingRef}
          className="text-4xl md:text-7xl font-extrabold mb-2" // bigger heading with less gap
        >
          seen/unseen
        </h1>
        <p
          ref={subHeadingRef}
          className="text-base md:text-xl mb-3 font-bold text-center" // slightly bigger subtext, less gap
        >
          discover the logic behind the ordinary
        </p>
        <div
          ref={introBoxRef}
          className="bg-[#A35BFB] rounded-2xl pt-4 px-2 pb-2 text-center w-full max-w-xs md:max-w-sm"
        >
          <h2 className="text-white text-base md:text-lg mb-3">
            welcome to the pawcity!
          </h2>
          <img
            ref={introImageRef}
            src={story_intro}
            alt="Intro"
            className="mx-auto rounded-xl w-full h-auto object-cover" // full width image
          />
        </div>
        {/* ✅ Add spacing below the box */}
        <div className="mt-6 flex flex-col items-center">
          <img
            src={down_arrow}
            ref={downArrowRef}
            alt="Scroll Down"
            className="w-8 h-8 mb-2 z-0 animate-bounce"
          />
          <p
            ref={bottomTextRef}
            className="text-sm md:text-lg font-normal text-center"
          >
            scroll down to deep dive into the world
          </p>
        </div>
      </div>

      {/* SCENE 1 */}
      <img
        ref={scene1Ref}
        src={isMobile ? story_scene_1 : story_scene_1}
        alt="Scene 1"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 z-0"
      />
      <div
        ref={scene1TextRef}
        className={`absolute w-full h-full opacity-0 z-30 px-4 py-6 flex ${
          isMobile ? "items-end justify-start" : "items-end justify-start"
        }`}
      >
        {/* <div className="bg-black text-white p-3 rounded-md w-fit max-w-[90%]"> */}
        <div
          className={`bg-black text-white rounded-md w-fit max-w-[90%] 
      ${isMobile ? "p-2 text-xs" : "p-4 text-base"}`}
        >
          <p>somewhere in pawcity...</p>
        </div>
      </div>

      {/* SCENE 2 */}
      <img
        ref={scene2Ref}
        src={isMobile ? story_scene_2_mobile : story_scene_2}
        alt="Scene 2"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 z-10"
      />
      <div
        ref={scene2TextRef}
        className={`absolute w-full h-full opacity-0 z-30 px-4 py-6 flex ${
          isMobile ? "items-end justify-start" : "items-end justify-start"
        }`}
      >
        {/* <div className="bg-black/80 text-white p-4 rounded-md max-w-[90%] md:max-w-[60%]"> */}
        <div
          className={`bg-black/80 text-white rounded-md max-w-[90%] md:max-w-[60%] 
      ${isMobile ? "p-2 text-xs" : "p-4 text-base"}`}
        >
          <p>somewhere in pawcity...</p>
        </div>
      </div>

      {/* SCENE 3 */}
      {/* <div
        ref={scene3Ref}
        className="w-screen h-screen flex relative z-10 opacity-0 items-center justify-center"
      > */}
      <img
        ref={scene3Ref}
        src={isMobile ? story_scene_3_mobile : story_scene_3}
        alt="Scene 3"
        className="absolute top-0 left-0 w-full h-full opacity-0 z-10"
      />
      {/* <StoryScene3 className="w-screen h-screen" preserveAspectRatio="none" /> */}
      <div
        ref={scene3TextRef}
        className={`absolute bottom-6 left-6 opacity-0 z-30 ${
          isMobile ? "max-w-[90%]" : ""
        }`}
      >
        <div
          className={`bg-black text-white rounded-md w-fit 
      ${isMobile ? "p-2 text-xs" : "p-4 text-base"}`}
        >
          <p>gibbo the giraffe works as a software engineer.</p>
        </div>
      </div>
      {/* </div> */}

      {/* SCENE 3 BUBBLE */}
      <div
        ref={bubbleTextRef}
        className={`absolute z-40
    ${isMobile ? "top-[55%] left-[50%]" : "top-[41%] left-[66%]"}
    transform -translate-x-1/2 -translate-y-1/2 opacity-0
  `}
      >
        <div
          className={`relative bg-evolve-inchworm text-black font-bold font-montserrat shadow-xl
      ${
        isMobile ? "px-3 py-2 text-xs w-[120%]" : "px-5 py-4 text-base w-[120%]"
      }
      rounded-2xl text-center
    `}
        >
          {/* Arrow */}
          <div
            className={`absolute 
        ${
          isMobile
            ? "top-0 left-8 -translate-y-full"
            : "top-6 -left-3 rotate-90"
        } 
        w-0 h-0 border-l-[8px] border-r-[8px]
        ${isMobile ? "border-b-[10px]" : "border-t-[10px]"}
        border-transparent
        ${isMobile ? "border-b-evolve-inchworm" : "border-t-evolve-inchworm"}
      `}
          ></div>

          {/* Text */}
          <p>Oh! it's 5pm already!</p>
          <p>I have to pack my bags.</p>
        </div>
      </div>

      {/* SCENE 4 */}
      {/* SCENE 4 */}
      <div
        ref={scene4Ref}
        className="absolute w-full h-full top-0 left-0 opacity-100 z-10 flex justify-center items-center bg-black"
      >
        <img
          src={isMobile ? story_scene_4_mobile : story_scene_4}
          alt="Scene 4"
          className="w-full h-full object-cover"
        />

        {/* Single Character Image: char_1_1 handles both entry and exit */}
        {/* <img
          ref={char1AltRef}
          src={char_1_1}
          alt="Character"
          className={`absolute -bottom-10 -left-5 ${
            isMobile ? "w-[200px]" : "w-[650px] h-[650px] object-contain"
          } object-contain opacity-0 z-30`}
        /> */}

        <img
          ref={char1AltRef}
          src={char_1_1}
          alt="Character"
          className={`absolute left-0 bottom-0 object-contain opacity-0 z-30 ${
            isMobile ? "w-[200px]" : "w-[700px] h-[700px]"
          }`}
        />
        <div className="absolute bottom-6 left-6 z-40">
          <div
            className={`bg-black/80 text-white rounded-md w-fit 
      ${isMobile ? "p-2 text-xs" : "p-4 text-base"}`}
          >
            <p>Gibbo walking toward the escalator</p>
          </div>
        </div>
      </div>

      {/* SCENE 5 */}
      <div
        ref={scene5Ref}
        className="absolute w-full h-full top-0 left-0 opacity-0 z-10 flex justify-center items-center bg-black"
      >
        <img
          src={isMobile ? story_scene_5_mobile : story_scene_5_1}
          alt="Scene 5"
          className="absolute scale-y-[100%]"
        />
        <div
          ref={bubble2Ref}
          className={`absolute z-40
    ${isMobile ? "top-[20%] left-[48%]" : "top-[30%] left-[63%]"}
    transform -translate-x-1/2 -translate-y-1/2 opacity-0
  `}
        >
          <img
            src={isMobile ? story_scene_5_bubble_mobile : story_scene_5_bubble}
            alt="Speech Bubble"
            className={`${isMobile ? "w-[180px]" : "w-[240px]"} h-auto`}
          />
        </div>
      </div>
    </div>
  );
};

export default Module1;
