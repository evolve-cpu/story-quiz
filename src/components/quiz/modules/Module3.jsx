// // import React, { useEffect, useRef, useState } from "react";
// // import { useQuizProgress } from "../../../hooks/useQuizProgress";
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import QuizQuestion from "../QuizQuestion";

// // gsap.registerPlugin(ScrollTrigger);

// // export default function Module3() {
// //   const { completeQuiz, submitResponse } = useQuizProgress();
// //   const [questionAnswered, setQuestionAnswered] = useState(false);
// //   const containerRef = useRef(null);
// //   const scene1Ref = useRef(null);
// //   const scene2Ref = useRef(null);
// //   const scene3Ref = useRef(null);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       // Scene 1: Final destination
// //       gsap.fromTo(
// //         scene1Ref.current.querySelector(".sanctuary-scene"),
// //         { opacity: 0, y: 50 },
// //         { opacity: 1, y: 0, duration: 2.5, ease: "power3.out" }
// //       );

// //       // Particles animation
// //       gsap.to(scene1Ref.current.querySelectorAll(".particle"), {
// //         y: -100,
// //         opacity: 0,
// //         duration: 4,
// //         ease: "power2.out",
// //         repeat: -1,
// //         stagger: 0.3
// //       });

// //       // Final question reveal
// //       ScrollTrigger.create({
// //         trigger: scene2Ref.current,
// //         start: "top 80%",
// //         onEnter: () => {
// //           gsap.fromTo(
// //             scene2Ref.current.querySelector(".final-question"),
// //             { scale: 0, rotation: 180 },
// //             { scale: 1, rotation: 0, duration: 2, ease: "elastic.out(1, 0.5)" }
// //           );
// //         }
// //       });

// //       // Completion scene
// //       ScrollTrigger.create({
// //         trigger: scene3Ref.current,
// //         start: "top 80%",
// //         onEnter: () => {
// //           gsap.fromTo(
// //             scene3Ref.current.querySelector(".completion-text"),
// //             { opacity: 0, scale: 1.2 },
// //             { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
// //           );
// //         }
// //       });
// //     }, containerRef);

// //     return () => ctx.revert();
// //   }, []);

// //   const handleQuestionSubmit = (questionId, selectedAnswer, isCorrect) => {
// //     submitResponse(questionId, selectedAnswer, isCorrect);
// //     setQuestionAnswered(true);

// //     setTimeout(() => {
// //       completeQuiz();
// //     }, 3000);
// //   };

// //   const questionData = {
// //     id: "module3-q1",
// //     question:
// //       'At the heart of the Knowledge Sanctuary, you discover the final wisdom: "What is the most powerful force that grows stronger when shared and never diminishes when given freely?"',
// //     options: [
// //       { id: "a", text: "Wisdom", isCorrect: true },
// //       { id: "b", text: "Magic", isCorrect: false },
// //       { id: "c", text: "Gold", isCorrect: false },
// //       { id: "d", text: "Power", isCorrect: false }
// //     ],
// //     explanation:
// //       "Wisdom is the ultimate treasure - it multiplies when shared and enriches both giver and receiver!"
// //   };

// //   return (
// //     <div ref={containerRef} className="relative">
// //       {/* Scene 1: The Knowledge Sanctuary */}
// //       <section
// //         ref={scene1Ref}
// //         className="min-h-screen flex items-center justify-center px-4 pt-20"
// //       >
// //         <div className="sanctuary-scene max-w-6xl mx-auto text-center relative">
// //           {/* Floating particles */}
// //           {[...Array(6)].map((_, i) => (
// //             <div
// //               key={i}
// //               className={`particle absolute w-4 h-4 bg-evolve-inchworm rounded-full opacity-70`}
// //               style={{
// //                 left: `${20 + i * 15}%`,
// //                 top: `${30 + (i % 3) * 20}%`
// //               }}
// //             />
// //           ))}

// //           <h1 className="text-7xl font-bricolage font-bold text-evolve-white mb-8">
// //             The Sacred
// //             <span
// //               className="block bg-gradient-to-r from-evolve-inchworm to-evolve-heliotrope
// //                            bg-clip-text text-transparent"
// //             >
// //               Sanctuary
// //             </span>
// //           </h1>

// //           <p className="text-2xl text-evolve-gray font-montserrat leading-relaxed max-w-4xl mx-auto mb-12">
// //             You've reached the legendary Knowledge Sanctuary, where ancient
// //             wisdom crystallizes into pure understanding. Golden light emanates
// //             from floating tomes, and the very air hums with the accumulated
// //             knowledge of ages.
// //           </p>

// //           {/* Sanctuary visualization */}
// //           <div className="relative mx-auto w-80 h-80 mb-8">
// //             <div
// //               className="absolute inset-0 bg-gradient-radial from-evolve-inchworm/30 via-evolve-lavender-indigo/20 to-transparent
// //                           rounded-full animate-pulse"
// //             ></div>
// //             <div
// //               className="absolute inset-8 bg-gradient-to-br from-evolve-charleston-green to-evolve-black
// //                           rounded-full shadow-challenges-card"
// //             ></div>
// //             <div
// //               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
// //                           w-16 h-16 bg-evolve-inchworm rounded-full animate-pulse shadow-webinars"
// //             ></div>

// //             {/* Orbiting elements */}
// //             {[...Array(3)].map((_, i) => (
// //               <div
// //                 key={i}
// //                 className="absolute w-8 h-8 bg-evolve-heliotrope rounded-full"
// //                 style={{
// //                   top: "50%",
// //                   left: "50%",
// //                   transform: `translate(-50%, -50%) rotate(${
// //                     i * 120
// //                   }deg) translateX(100px)`,
// //                   animation: `spin 8s linear infinite`
// //                 }}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Scene 2: Final Question */}
// //       <section
// //         ref={scene2Ref}
// //         className="min-h-screen flex items-center justify-center px-4"
// //       >
// //         <div className="final-question w-full max-w-4xl mx-auto">
// //           <div
// //             className="bg-gradient-to-br from-evolve-charleston-green via-evolve-arsenic to-evolve-charleston-green
// //                         p-8 rounded-25px shadow-button-popped border-2 border-evolve-inchworm/50"
// //           >
// //             <div className="text-center mb-8">
// //               <h2 className="text-4xl font-bricolage font-bold text-evolve-white mb-4">
// //                 Chapter III: The Ultimate Truth
// //               </h2>
// //               <p className="text-evolve-gray font-montserrat text-lg mb-6">
// //                 As you approach the center of the sanctuary, a voice resonates
// //                 from everywhere and nowhere...
// //               </p>

// //               {/* Sacred symbol */}
// //               <div className="w-32 h-32 mx-auto mb-6 relative">
// //                 <div className="absolute inset-0 bg-evolve-inchworm/20 rounded-full animate-ping"></div>
// //                 <div className="absolute inset-4 bg-evolve-heliotrope/40 rounded-full animate-pulse"></div>
// //                 <div className="absolute inset-8 bg-evolve-lavender-indigo rounded-full shadow-webinars"></div>
// //                 <div
// //                   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
// //                               w-8 h-8 bg-evolve-white rounded-full animate-spin"
// //                 ></div>
// //               </div>
// //             </div>

// //             <QuizQuestion
// //               questionData={questionData}
// //               onSubmit={handleQuestionSubmit}
// //               disabled={questionAnswered}
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Scene 3: Quest Completion */}
// //       <section
// //         ref={scene3Ref}
// //         className="min-h-screen flex items-center justify-center px-4"
// //       >
// //         <div className="completion-text max-w-4xl mx-auto text-center">
// //           <div
// //             className="bg-gradient-to-r from-evolve-inchworm/20 to-evolve-heliotrope/20
// //                         p-12 rounded-25px shadow-challenges-card border border-evolve-inchworm/50
// //                         backdrop-blur-sm"
// //           >
// //             <h3 className="text-6xl font-bricolage font-bold text-evolve-white mb-8">
// //               Wisdom Achieved
// //             </h3>
// //             <p className="text-xl text-evolve-gray font-montserrat leading-relaxed mb-8">
// //               The sanctuary acknowledges your wisdom. Ancient knowledge flows
// //               through you, and you understand that the greatest treasures are
// //               those we share with others. Your journey of learning has only just
// //               begun...
// //             </p>

// //             {questionAnswered && (
// //               <div className="text-evolve-inchworm font-montserrat">
// //                 <p className="mb-4 text-2xl">Preparing your results...</p>
// //                 <div className="flex justify-center gap-2">
// //                   {[...Array(3)].map((_, i) => (
// //                     <div
// //                       key={i}
// //                       className="w-4 h-4 bg-evolve-inchworm rounded-full animate-bounce"
// //                       style={{ animationDelay: `${i * 0.2}s` }}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // import React, { useEffect, useRef, useState } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // import Lenis from "@studio-freight/lenis";

// // import { story_scene_9 } from "../../../assets/images/avatar";
// // import QuizQuestionModal from "../QuizQuestionModal";
// // import { useQuiz } from "../../../context/QuizContext";
// // import { useQuizProgress } from "../../../hooks/useQuizProgress";

// // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// // const Module3 = () => {
// //   const container3Ref = useRef(null);
// //   const scene9Ref = useRef(null);
// //   const scene9TextRef = useRef(null);

// //   const [showQuiz2, setShowQuiz2] = useState(false);
// //   const [quiz2Completed, setQuiz2Completed] = useState(false);

// //   const { completeQuiz, submitResponse } = useQuizProgress();
// //   const { dispatch, actions } = useQuiz();

// //   useEffect(() => {
// //     const lenis = new Lenis({
// //       duration: 1.4,
// //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// //       direction: "vertical",
// //       gestureDirection: "vertical",
// //       smooth: true,
// //       mouseMultiplier: 1.1,
// //       smoothTouch: false,
// //       touchMultiplier: 2,
// //       infinite: false
// //     });

// //     function raf(time) {
// //       lenis.raf(time);
// //       requestAnimationFrame(raf);
// //     }
// //     requestAnimationFrame(raf);

// //     lenis.on("scroll", ScrollTrigger.update);

// //     // ✅ Tell ScrollTrigger to use Lenis scroll position
// //     ScrollTrigger.scrollerProxy(document.body, {
// //       scrollTop(value) {
// //         return arguments.length
// //           ? lenis.scrollTo(value)
// //           : window.scrollY || window.pageYOffset;
// //       },
// //       getBoundingClientRect() {
// //         return {
// //           top: 0,
// //           left: 0,
// //           width: window.innerWidth,
// //           height: window.innerHeight
// //         };
// //       },
// //       pinType: document.body.style.transform ? "transform" : "fixed"
// //     });

// //     const master = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: container3Ref.current,
// //         start: "top top",
// //         end: "+=3000",
// //         scrub: 1.5,
// //         pin: true,
// //         markers: false
// //       }
// //     });

// //     // === Scene 9 Entry ===
// //     master.fromTo(
// //       scene9Ref.current,
// //       { opacity: 0, scale: 0.95, y: 50 },
// //       { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" }
// //     );

// //     // === Scene 9 Explanation ===
// //     master.set(scene9TextRef.current, { opacity: 0 });
// //     master.to(scene9TextRef.current, {
// //       opacity: 1,
// //       duration: 1,
// //       ease: "power2.out"
// //     });

// //     // === Show Quiz 2 ===
// //     master.to(
// //       {},
// //       {
// //         duration: 0.5,
// //         onStart: () => {
// //           if (!quiz2Completed) setShowQuiz2(true);
// //         }
// //       }
// //     );

// //     // Pause until quiz is completed
// //     // Let animations finish before pausing
// //     master.add(() => {
// //       if (!quiz2Completed) {
// //         console.log("⏸ Pausing Module 3 timeline for quiz");
// //         setShowQuiz2(true);
// //         master.pause();
// //       }
// //     });

// //     ScrollTrigger.refresh();

// //     return () => {
// //       ScrollTrigger.getAll().forEach((t) => t.kill());
// //       master.kill();
// //       lenis.destroy();
// //     };
// //   }, [quiz2Completed]);

// //   useEffect(() => {
// //     const shouldDisableScroll = showQuiz2 && !quiz2Completed;

// //     if (shouldDisableScroll) {
// //       document.body.style.overflow = "hidden";
// //       document.documentElement.style.overflow = "hidden";
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
// //     } else {
// //       document.body.style.overflow = "auto";
// //       document.documentElement.style.overflow = "auto";
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
// //     }

// //     return () => {
// //       document.body.style.overflow = "auto";
// //       document.documentElement.style.overflow = "auto";
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
// //     };
// //   }, [showQuiz2, quiz2Completed]);

// //   const handleQuiz2Close = (response, isCorrect) => {
// //     setShowQuiz2(false);
// //     setQuiz2Completed(true);
// //     submitResponse("scene9_q1", response, isCorrect);
// //     completeQuiz(); // ✅ Triggers quiz completion here only
// //   };

// //   console.log("✅ Module3 rendered");

// //   return (
// //     <div
// //       ref={container3Ref}
// //       id="module-3"
// //       className="relative w-full h-screen text-white lowercase bg-black"
// //     >
// //       {/* === Scene 9 === */}
// //       <div
// //         ref={scene9Ref}
// //         className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center opacity-0"
// //       >
// //         <img
// //           src={story_scene_9}
// //           alt="Scene 9"
// //           className="absolute scale-y-[85%] object-cover"
// //         />

// //         {/* Scene 9 Explanation Box */}
// //         <div
// //           ref={scene9TextRef}
// //           className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
// //         >
// //           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
// //             <p>Scene explanation text 9 goes here</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* === Quiz Modal for Scene 9 === */}
// //       <QuizQuestionModal
// //         isVisible={showQuiz2}
// //         onClose={handleQuiz2Close}
// //         questionId="scene9_q1"
// //         question="Why are the red, yellow, and green lights always stacked this way?"
// //         options={[
// //           "Grooves provide better grip for shoes",
// //           "To help colour-blind people use position as a cue",
// //           "To ensure consistency and reduce confusion for drivers",
// //           "All of the above"
// //         ]}
// //         correctIndex={3}
// //         reason="The arrangement helps colour-blind users recognise signals by position, increases visibility, and ensures consistency for all road users."
// //         backgroundImage={story_scene_9}
// //         backgroundClassName="absolute scale-y-[99%] object-cover"
// //         type="single"
// //       />
// //     </div>
// //   );
// // };

// // export default Module3;

// // import React, { useEffect, useRef, useState } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // import { story_scene_9 } from "../../../assets/images/avatar";
// // import QuizQuestionModal from "../QuizQuestionModal";
// // import { useQuiz } from "../../../context/QuizContext";
// // import { useQuizProgress } from "../../../hooks/useQuizProgress";

// // gsap.registerPlugin(ScrollTrigger);

// // const Module3 = () => {
// //   const containerRef = useRef(null);
// //   const scene9Ref = useRef(null);
// //   const scene9TextRef = useRef(null);

// //   const [showQuiz2, setShowQuiz2] = useState(false);
// //   const [quiz2Completed, setQuiz2Completed] = useState(false);

// //   const { completeQuiz, submitResponse } = useQuizProgress();
// //   const { dispatch, actions } = useQuiz();

// //   useEffect(() => {
// //     const timeline = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: containerRef.current,
// //         start: "top top",
// //         end: "+=4000",
// //         scrub: 1.2,
// //         pin: true,
// //         anticipatePin: 1,
// //         markers: false
// //       }
// //     });

// //     timeline.fromTo(
// //       scene9Ref.current,
// //       { opacity: 0, scale: 0.95, y: 60 },
// //       { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" }
// //     );

// //     timeline.fromTo(
// //       scene9TextRef.current,
// //       { opacity: 0 },
// //       { opacity: 1, duration: 1, ease: "power2.out" }
// //     );

// //     timeline.add(() => {
// //       if (!quiz2Completed) {
// //         console.log("⏸ Pausing for Quiz 2");
// //         setShowQuiz2(true);
// //         timeline.pause();
// //       }
// //     });

// //     ScrollTrigger.refresh();

// //     return () => {
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// //       timeline.kill();
// //     };
// //   }, [quiz2Completed]);

// //   useEffect(() => {
// //     const shouldDisableScroll = showQuiz2 && !quiz2Completed;

// //     if (shouldDisableScroll) {
// //       document.body.style.overflow = "hidden";
// //       document.documentElement.style.overflow = "hidden";
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
// //     } else {
// //       document.body.style.overflow = "auto";
// //       document.documentElement.style.overflow = "auto";
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
// //     }

// //     return () => {
// //       document.body.style.overflow = "auto";
// //       document.documentElement.style.overflow = "auto";
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
// //     };
// //   }, [showQuiz2, quiz2Completed]);

// //   const handleQuiz2Close = (response, isCorrect) => {
// //     setShowQuiz2(false);
// //     setQuiz2Completed(true);
// //     submitResponse("scene9_q1", response, isCorrect);
// //     completeQuiz();
// //   };

// //   return (
// //     <div
// //       ref={containerRef}
// //       id="module-3"
// //       className="relative w-full min-h-[200vh] bg-black text-white lowercase"
// //     >
// //       {/* === Scene 9 === */}
// //       <div
// //         ref={scene9Ref}
// //         className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center"
// //       >
// //         <img
// //           src={story_scene_9}
// //           alt="Scene 9"
// //           className="absolute object-cover w-full h-full scale-y-[85%]"
// //         />
// //         <div
// //           ref={scene9TextRef}
// //           className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
// //         >
// //           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
// //             <p>Scene explanation text 9 goes here</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* === Quiz Modal === */}
// //       <QuizQuestionModal
// //         isVisible={showQuiz2}
// //         onClose={handleQuiz2Close}
// //         questionId="scene9_q1"
// //         question="Why are the red, yellow, and green lights always stacked this way?"
// //         options={[
// //           "Grooves provide better grip for shoes",
// //           "To help colour-blind people use position as a cue",
// //           "To ensure consistency and reduce confusion for drivers",
// //           "All of the above"
// //         ]}
// //         correctIndex={3}
// //         reason="The arrangement helps colour-blind users recognise signals by position, increases visibility, and ensures consistency for all road users."
// //         backgroundImage={story_scene_9}
// //         backgroundClassName="absolute scale-y-[99%] object-cover"
// //         type="single"
// //       />
// //     </div>
// //   );
// // };

// // export default Module3;

// // import React, { useEffect, useRef, useState } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // import { story_scene_9 } from "../../../assets/images/avatar/index";
// // import QuizQuestionModal from "../QuizQuestionModal";
// // import { useQuiz } from "../../../context/QuizContext";
// // import { useQuizProgress } from "../../../hooks/useQuizProgress";

// // export const module3ScrollTriggerRef = React.createRef();
// // gsap.registerPlugin(ScrollTrigger);

// // const Module3 = () => {
// //   const containerRef = useRef(null);
// //   const scene9Ref = useRef(null);
// //   const scene9TextRef = useRef(null);

// //   const [showQuiz2, setShowQuiz2] = useState(false);
// //   const [quiz2Completed, setQuiz2Completed] = useState(false);

// //   const { completeQuiz, submitResponse } = useQuizProgress();
// //   const { dispatch, actions } = useQuiz();

// //   const scrollTriggerRef = useRef(null);
// //   const timelineRef = useRef(null);

// //   useEffect(() => {
// //     const tl = gsap.timeline();
// //     timelineRef.current = tl;

// //     scrollTriggerRef.current = ScrollTrigger.create({
// //       animation: tl,
// //       trigger: containerRef.current,
// //       start: "top center",
// //       end: "+=3000",
// //       scrub: 1.2,
// //       pin: true,
// //       anticipatePin: 1,
// //       markers: false,
// //       id: "module3Trigger"
// //     });

// //     scrollTriggerRef.current.disable();
// //     module3ScrollTriggerRef.current = scrollTriggerRef.current;

// //     tl.fromTo(
// //       scene9Ref.current,
// //       { opacity: 0, scale: 0.95, y: 60 },
// //       { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" }
// //     );

// //     tl.fromTo(
// //       scene9TextRef.current,
// //       { opacity: 0 },
// //       { opacity: 1, duration: 1, ease: "power2.out" }
// //     );

// //     tl.call(() => {
// //       if (!quiz2Completed) {
// //         setShowQuiz2(true);
// //         scrollTriggerRef.current?.disable();
// //         document.body.style.overflow = "hidden";
// //         document.documentElement.style.overflow = "hidden";
// //       }
// //     });

// //     tl.addPause("+=0", () => {
// //       if (!quiz2Completed) tl.pause();
// //     });

// //     return () => {
// //       scrollTriggerRef.current?.kill();
// //       tl.kill();
// //     };
// //   }, [quiz2Completed]);

// //   useEffect(() => {
// //     if (quiz2Completed && timelineRef.current) {
// //       document.body.style.overflow = "auto";
// //       document.documentElement.style.overflow = "auto";
// //       scrollTriggerRef.current?.enable();
// //       ScrollTrigger.refresh();
// //       requestAnimationFrame(() => {
// //         timelineRef.current.play();
// //       });
// //     }
// //   }, [quiz2Completed]);

// //   const handleQuiz2Close = (response, isCorrect) => {
// //     setShowQuiz2(false);
// //     setQuiz2Completed(true);
// //     submitResponse({
// //       questionId: "scene9_q1",
// //       response: response,
// //       correctAnswer: "All of the above"
// //     });
// //     completeQuiz();
// //   };

// //   return (
// //     <div
// //       ref={containerRef}
// //       id="module-3"
// //       className="relative w-full min-h-[200vh] bg-black text-white lowercase"
// //     >
// //       <div
// //         ref={scene9Ref}
// //         className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center"
// //       >
// //         <img
// //           src={story_scene_9}
// //           alt="Scene 9"
// //           className="absolute object-cover w-full h-full scale-y-[85%]"
// //         />
// //         <div
// //           ref={scene9TextRef}
// //           className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
// //         >
// //           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
// //             <p>Scene explanation text 9 goes here</p>
// //           </div>
// //         </div>
// //       </div>

// //       {showQuiz2 && (
// //         <QuizQuestionModal
// //           isVisible={showQuiz2}
// //           onClose={handleQuiz2Close}
// //           questionId="scene9_q1"
// //           question="Why are the red, yellow, and green lights always stacked this way?"
// //           options={[
// //             "Grooves provide better grip for shoes",
// //             "To help colour-blind people use position as a cue",
// //             "To ensure consistency and reduce confusion for drivers",
// //             "All of the above"
// //           ]}
// //           correctIndex={3}
// //           reason="The arrangement helps colour-blind users recognise signals by position, increases visibility, and ensures consistency for all road users."
// //           backgroundImage={story_scene_9}
// //           backgroundClassName="absolute scale-y-[99%] object-cover"
// //           type="single"
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default Module3;

// // import React, { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import {
// //   story_scene_7,
// //   char_1_1,
// //   story_scene_8_char,
// //   story_scene_8_bg_1
// // } from "../../../assets/images/avatar";

// // const Module3 = () => {
// //   const containerRef = useRef(null);
// //   const scene7Ref = useRef(null);
// //   const charRef = useRef(null);
// //   const scene7TextRef = useRef(null);
// //   const scene8BgRef = useRef(null);
// //   const scene8CharRef = useRef(null);
// //   const scene8TextRef = useRef(null);

// //   useEffect(() => {
// //     gsap.registerPlugin(ScrollTrigger);

// //     // Initial setup
// //     gsap.set([scene7Ref.current, charRef.current, scene7TextRef.current], {
// //       opacity: 0,
// //       pointerEvents: "none"
// //     });
// //     gsap.set(
// //       [scene8BgRef.current, scene8CharRef.current, scene8TextRef.current],
// //       {
// //         opacity: 0
// //       }
// //     );

// //     const masterTl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: containerRef.current,
// //         start: "top top",
// //         end: "+=4000",
// //         // end: () => "+=" + containerRef.current.offsetHeight * 3,
// //         scrub: 1.5,
// //         pin: true,
// //         anticipatePin: 1,
// //         markers: false
// //       }
// //     });

// //     // Scene 7
// //     masterTl.fromTo(
// //       scene7Ref.current,
// //       { opacity: 0, y: 100 },
// //       { opacity: 1, y: 0, duration: 1.5 }
// //     );

// //     // Animate char_1_1 walking away (up-right + scale down)
// //     masterTl.set(charRef.current, { x: 0, y: 0, scale: 1 });
// //     masterTl.to(charRef.current, {
// //       opacity: 1,
// //       duration: 0.5
// //     });
// //     masterTl.to(charRef.current, {
// //       x: 200,
// //       y: 10,
// //       scale: 0.8,
// //       duration: 5,
// //       ease: "power2.inOut"
// //     });

// //     // Text appear and fade
// //     masterTl.to(scene7TextRef.current, { opacity: 1, duration: 1 });
// //     masterTl.to(scene7TextRef.current, { opacity: 0, duration: 1 }, "+=0.5");

// //     // Fade out scene
// //     masterTl.to([scene7Ref.current, charRef.current], {
// //       opacity: 0,
// //       duration: 1.5
// //     });

// //     // Scene 8
// //     masterTl.set(scene8BgRef.current, { x: "0%", opacity: 0 });
// //     masterTl.to(scene8BgRef.current, { opacity: 1, duration: 2 });
// //     masterTl.fromTo(
// //       scene8CharRef.current,
// //       { opacity: 0 },
// //       { opacity: 1, duration: 2.5 },
// //       "<0.5"
// //     );
// //     masterTl.to(scene8BgRef.current, { x: "30%", duration: 2 });
// //     masterTl.to(scene8TextRef.current, { opacity: 1, duration: 1 });
// //     masterTl.to(scene8TextRef.current, { opacity: 0, duration: 1 }, "+=1");
// //     masterTl.to(scene8CharRef.current, { opacity: 0, scale: 0.9, duration: 1 });
// //     masterTl.to(
// //       scene8BgRef.current,
// //       { opacity: 0, scale: 1.05, duration: 1 },
// //       "<"
// //     );

// //     return () => {
// //       ScrollTrigger.getAll().forEach((trigger) => {
// //         if (trigger.trigger === containerRef.current) {
// //           trigger.kill();
// //         }
// //       });
// //       masterTl.kill();
// //     };
// //   }, []);

// //   return (
// //     <div
// //       ref={containerRef}
// //       id="module-3"
// //       className="relative w-full h-screen text-white lowercase bg-black"
// //     >
// //       {/* Scene 7 */}
// //       <div
// //         ref={scene7Ref}
// //         className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center opacity-0"
// //       >
// //         <img
// //           src={story_scene_7}
// //           alt="Scene 7"
// //           className="scale-y-[70%] w-full"
// //         />
// //         <img
// //           ref={charRef}
// //           src={char_1_1}
// //           alt="Char Alt"
// //           className="absolute -bottom-4 left-10 w-[650px] h-[650px] object-contain opacity-0 z-30"
// //         />
// //         <div
// //           ref={scene7TextRef}
// //           className="absolute bottom-6 left-6 z-40 opacity-0"
// //         >
// //           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
// //             <p>Scene 7 text goes here</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Scene 8 */}
// //       <div className="absolute top-0 left-0 w-full h-full z-30 flex items-center justify-center overflow-visible pointer-events-none">
// //         <img
// //           ref={scene8BgRef}
// //           src={story_scene_8_bg_1}
// //           alt="Scene 8 BG"
// //           className="absolute object-contain scale-x-[180%] scale-y-[150%] opacity-0"
// //           style={{ right: 0 }}
// //         />
// //         <div
// //           ref={scene8TextRef}
// //           className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
// //         >
// //           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
// //             <p>Scene 8 text goes here</p>
// //           </div>
// //         </div>
// //         <img
// //           ref={scene8CharRef}
// //           src={story_scene_8_char}
// //           alt="Scene 8 Char"
// //           className="absolute object-fill opacity-0"
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Module3;

// // import React, { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // import {
// //   story_scene_7,
// //   story_scene_7_mobile,
// //   char_1_1,
// //   story_scene_8_char,
// //   story_scene_8_char_mobile,
// //   story_scene_8_bg_1,
// //   story_scene_8_bg_mobile
// // } from "../../../assets/images/avatar";

// // const Module3 = () => {
// //   const containerRef = useRef(null);
// //   const isMobile = window.innerWidth <= 768;

// //   const scene7Ref = useRef(null);
// //   const charRef = useRef(null);
// //   const scene7TextRef = useRef(null);
// //   const scene8BgRef = useRef(null);
// //   const scene8CharRef = useRef(null);
// //   const scene8TextRef = useRef(null);

// //   useEffect(() => {
// //     gsap.registerPlugin(ScrollTrigger);

// //     gsap.set(
// //       [
// //         scene7Ref.current,
// //         charRef.current,
// //         scene7TextRef.current,
// //         scene8BgRef.current,
// //         scene8CharRef.current,
// //         scene8TextRef.current
// //       ],
// //       { opacity: 0 }
// //     );

// //     const masterTl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: containerRef.current,
// //         start: "top top",
// //         end: "+=4000",
// //         scrub: 1.5,
// //         pin: true,
// //         anticipatePin: 1,
// //         markers: false
// //       }
// //     });

// //     // --- Scene 7 ---
// //     masterTl.fromTo(
// //       scene7Ref.current,
// //       { opacity: 0, y: isMobile ? 50 : 100 },
// //       { opacity: 1, y: 0, duration: 1.5 }
// //     );

// //     masterTl.set(charRef.current, {
// //       x: 0,
// //       y: 0,
// //       scale: isMobile ? 0.9 : 1, // bigger for mobile
// //       bottom: isMobile ? "50px" : "-4px",
// //       left: isMobile ? "5%" : "2.5rem"
// //     });

// //     masterTl.to(charRef.current, { opacity: 1, duration: 0.5 });
// //     masterTl.to(charRef.current, {
// //       x: isMobile ? 80 : 200,
// //       y: isMobile ? 5 : 10,
// //       scale: isMobile ? 0.8 : 0.8,
// //       duration: isMobile ? 3 : 5,
// //       ease: "power2.inOut"
// //     });

// //     masterTl.to(scene7TextRef.current, { opacity: 1, duration: 1 });
// //     masterTl.to(scene7TextRef.current, { opacity: 0, duration: 1 }, "+=0.5");

// //     masterTl.to([scene7Ref.current, charRef.current], {
// //       opacity: 0,
// //       duration: 1.5
// //     });

// //     // --- Scene 8 ---
// //     masterTl.set(scene8BgRef.current, { x: "0%", opacity: 0 });
// //     masterTl.to(scene8BgRef.current, {
// //       opacity: 1,
// //       duration: isMobile ? 1.5 : 2
// //     });

// //     masterTl.fromTo(
// //       scene8CharRef.current,
// //       {
// //         opacity: 0,
// //         scale: 1,
// //         bottom: "0px" // aligned at bottom
// //       },
// //       { opacity: 1, duration: isMobile ? 1.5 : 2.5 },
// //       "<0.5"
// //     );

// //     masterTl.to(scene8BgRef.current, {
// //       x: isMobile ? "15%" : "30%",
// //       duration: isMobile ? 1.5 : 2
// //     });
// //     masterTl.to(scene8TextRef.current, { opacity: 1, duration: 1 });
// //     masterTl.to(scene8TextRef.current, { opacity: 0, duration: 1 }, "+=1");

// //     masterTl.to(scene8CharRef.current, {
// //       opacity: 0,
// //       scale: 0.95,
// //       duration: 1
// //     });

// //     masterTl.to(scene8BgRef.current, {
// //       opacity: 0,
// //       scale: 1.05,
// //       duration: 1
// //     });

// //     return () => {
// //       ScrollTrigger.getAll().forEach((trigger) => {
// //         if (trigger.trigger === containerRef.current) {
// //           trigger.kill();
// //         }
// //       });
// //       masterTl.kill();
// //     };
// //   }, []);

// //   return (
// //     <div
// //       ref={containerRef}
// //       id="module-3"
// //       className="relative w-full h-screen text-white lowercase bg-black"
// //     >
// //       {/* Scene 7 */}
// //       <div
// //         ref={scene7Ref}
// //         className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center opacity-0"
// //       >
// //         <img
// //           src={isMobile ? story_scene_7_mobile : story_scene_7}
// //           alt="Scene 7"
// //           className={`w-full ${isMobile ? "" : "scale-y-[70%]"} object-contain`}
// //         />
// //         <img
// //           ref={charRef}
// //           src={char_1_1}
// //           alt="Char Alt"
// //           className={`absolute object-contain opacity-0 z-30 ${
// //             isMobile ? "w-[300px] h-[300px]" : "w-[650px] h-[650px]"
// //           }`}
// //         />
// //         <div
// //           ref={scene7TextRef}
// //           className={`absolute bottom-6 left-5 z-40 opacity-0 ${
// //             isMobile ? "text-sm p-2" : ""
// //           }`}
// //         >
// //           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
// //             <p>Gibbo walking toward his car in the parking</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Scene 8 */}
// //       <div className="absolute top-0 left-0 w-full h-full z-30 flex items-center justify-center overflow-visible pointer-events-none">
// //         <img
// //           ref={scene8BgRef}
// //           src={isMobile ? story_scene_8_bg_mobile : story_scene_8_bg_1}
// //           alt="Scene 8 BG"
// //           className={`absolute object-contain opacity-0 ${
// //             isMobile
// //               ? "scale-x-[150%] scale-y-[120%]"
// //               : "scale-x-[180%] scale-y-[150%]"
// //           }`}
// //           style={{ right: 0 }}
// //         />
// //         <img
// //           ref={scene8CharRef}
// //           src={isMobile ? story_scene_8_char_mobile : story_scene_8_char}
// //           alt="Scene 8 Char"
// //           className={`absolute object-fill opacity-0 ${
// //             isMobile ? "bottom-0" : ""
// //           }`}
// //           style={isMobile ? { width: "auto", height: "auto" } : {}}
// //         />
// //         <div
// //           ref={scene8TextRef}
// //           className={`absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none ${
// //             isMobile ? "text-sm p-2" : ""
// //           }`}
// //         >
// //           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
// //             <p>Gibbo sits in the car and get moving.</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Module3;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   story_scene_7,
//   story_scene_7_mobile,
//   char_1_1,
//   story_scene_8_char,
//   story_scene_8_char_mobile,
//   story_scene_8_bg_1,
//   story_scene_8_bg_mobile
// } from "../../../assets/images/avatar";

// const Module3 = () => {
//   const containerRef = useRef(null);
//   const isMobile = window.innerWidth <= 768;

//   const scene7Ref = useRef(null);
//   const charRef = useRef(null);
//   const scene7TextRef = useRef(null);
//   const scene8BgRef = useRef(null);
//   const scene8CharRef = useRef(null);
//   const scene8TextRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.set(
//       [
//         scene7Ref.current,
//         charRef.current,
//         scene7TextRef.current,
//         scene8BgRef.current,
//         scene8CharRef.current,
//         scene8TextRef.current
//       ],
//       { opacity: 0 }
//     );

//     const tl = gsap.timeline();

//     // Force minimum scroll duration
//     tl.to({}, { duration: 2 });

//     // --- Scene 7 ---
//     tl.set(scene7Ref.current, { opacity: 1 });
//     tl.set(charRef.current, {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       scale: isMobile ? 0.9 : 1,
//       bottom: isMobile ? "50px" : "-4px",
//       left: isMobile ? "5%" : "2.5rem"
//     });

//     tl.to(charRef.current, {
//       x: isMobile ? 80 : 200,
//       y: isMobile ? 5 : 10,
//       scale: isMobile ? 0.8 : 0.8,
//       duration: isMobile ? 3 : 5,
//       ease: "power2.inOut"
//     });

//     tl.to(scene7TextRef.current, { opacity: 1, duration: 0.01 }, "<");
//     tl.to(scene7TextRef.current, { opacity: 0, duration: 1 }, "+=1");

//     tl.to([scene7Ref.current, charRef.current], { opacity: 0, duration: 1 });

//     // --- Scene 8 ---
//     tl.set(scene8BgRef.current, { x: "0%", opacity: 0 });
//     tl.to(scene8BgRef.current, {
//       opacity: 1,
//       duration: isMobile ? 1.5 : 2
//     });

//     tl.fromTo(
//       scene8CharRef.current,
//       {
//         opacity: 0,
//         scale: 1,
//         bottom: "0px"
//       },
//       {
//         opacity: 1,
//         duration: isMobile ? 1.5 : 2.5
//       },
//       "<0.5"
//     );

//     tl.to(scene8BgRef.current, {
//       x: isMobile ? "15%" : "30%",
//       duration: isMobile ? 1.5 : 2
//     });

//     tl.to(scene8TextRef.current, { opacity: 1, duration: 0.01 }, "<");
//     tl.to(scene8TextRef.current, { opacity: 0, duration: 1 }, "+=1");

//     tl.to(scene8CharRef.current, {
//       opacity: 0,
//       scale: 0.95,
//       duration: 1
//     });

//     tl.to(scene8BgRef.current, {
//       opacity: 0,
//       scale: 1.05,
//       duration: 1
//     });

//     // Apply ScrollTrigger AFTER timeline is built
//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       // end: `+=${tl.duration() * 1000}`,
//       end: "+=5000",
//       scrub: 1.5,
//       pin: true,
//       anticipatePin: 1,
//       markers: false
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === containerRef.current) {
//           trigger.kill();
//         }
//       });
//       tl.kill();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       id="module-3"
//       className="relative w-full h-screen text-white lowercase bg-black"
//     >
//       {/* Scene 7 */}
//       <div
//         ref={scene7Ref}
//         className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center opacity-0"
//       >
//         <img
//           src={isMobile ? story_scene_7_mobile : story_scene_7}
//           alt="Scene 7"
//           className={`w-full ${isMobile ? "" : "scale-y-[70%]"} object-contain`}
//         />
//         <img
//           ref={charRef}
//           src={char_1_1}
//           alt="Char Alt"
//           className={`absolute object-contain opacity-0 z-30 ${
//             isMobile ? "w-[300px] h-[300px]" : "w-[650px] h-[650px]"
//           }`}
//         />
//         <div
//           ref={scene7TextRef}
//           className={`absolute bottom-6 left-5 z-40 opacity-0 ${
//             isMobile ? "text-sm p-2" : ""
//           }`}
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Gibbo walking toward his car in the parking</p>
//           </div>
//         </div>
//       </div>

//       {/* Scene 8 */}
//       <div className="absolute top-0 left-0 w-full h-full z-30 flex items-center justify-center overflow-visible pointer-events-none">
//         <img
//           ref={scene8BgRef}
//           src={isMobile ? story_scene_8_bg_mobile : story_scene_8_bg_1}
//           alt="Scene 8 BG"
//           className={`absolute object-contain opacity-0 ${
//             isMobile
//               ? "scale-x-[150%] scale-y-[120%]"
//               : "scale-x-[180%] scale-y-[150%]"
//           }`}
//           style={{ right: 0 }}
//         />
//         <img
//           ref={scene8CharRef}
//           src={isMobile ? story_scene_8_char_mobile : story_scene_8_char}
//           alt="Scene 8 Char"
//           className={`absolute object-fill opacity-0 ${
//             isMobile ? "bottom-0" : ""
//           }`}
//           style={isMobile ? { width: "auto", height: "auto" } : {}}
//         />
//         <div
//           ref={scene8TextRef}
//           className={`absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none ${
//             isMobile ? "text-sm p-2" : ""
//           }`}
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Gibbo sits in the car and get moving.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Module3;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   story_scene_7,
//   story_scene_7_mobile,
//   char_1_1,
//   story_scene_8_char,
//   story_scene_8_char_mobile,
//   story_scene_8_bg_1,
//   story_scene_8_bg_mobile
// } from "../../../assets/images/avatar";

// const Module3 = () => {
//   const containerRef = useRef(null);
//   const isMobile = window.innerWidth <= 768;

//   const scene7Ref = useRef(null);
//   const charRef = useRef(null);
//   const scene7TextRef = useRef(null);
//   const scene8BgRef = useRef(null);
//   const scene8CharRef = useRef(null);
//   const scene8TextRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.set(
//       [
//         scene7Ref.current,
//         charRef.current,
//         scene7TextRef.current,
//         scene8BgRef.current,
//         scene8CharRef.current,
//         scene8TextRef.current
//       ],
//       { opacity: 0 }
//     );

//     const tl = gsap.timeline();
//     tl.to({}, { duration: 2 }); // minimum scroll duration

//     // --- Scene 7 ---
//     tl.set(scene7Ref.current, { opacity: 1 });
//     tl.set(charRef.current, {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       scale: isMobile ? 0.9 : 1,
//       bottom: isMobile ? "50px" : "-4px",
//       left: isMobile ? "5%" : "2.5rem"
//     });

//     tl.to(charRef.current, {
//       x: isMobile ? 80 : 200,
//       y: isMobile ? 5 : 10,
//       scale: isMobile ? 0.8 : 0.8,
//       duration: isMobile ? 3 : 5,
//       ease: "power2.inOut"
//     });

//     tl.to(scene7TextRef.current, { opacity: 1, duration: 0.01 }, "<");
//     tl.to(scene7TextRef.current, { opacity: 0, duration: 1 }, "+=1");

//     tl.to([scene7Ref.current, charRef.current], { opacity: 0, duration: 1 });

//     // --- Scene 8 (Instant show)
//     tl.set([scene8BgRef.current, scene8CharRef.current], { opacity: 1 });
//     tl.set(scene8TextRef.current, { opacity: 1 });

//     // Optional slight movement for BG
//     tl.to(scene8BgRef.current, {
//       x: isMobile ? "15%" : "30%",
//       duration: isMobile ? 1.5 : 2,
//       ease: "power2.inOut"
//     });

//     // Hide text
//     tl.to(scene8TextRef.current, { opacity: 0, duration: 0.5 }, "+=1");

//     // Outro: remove both background and character together
//     tl.to([scene8CharRef.current, scene8BgRef.current], {
//       opacity: 0,
//       // scale: 1.05,
//       duration: 1
//     });

//     // ScrollTrigger
//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: `+=5000`,
//       scrub: 1.5,
//       pin: true,
//       anticipatePin: 1,
//       markers: false
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === containerRef.current) trigger.kill();
//       });
//       tl.kill();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       id="module-3"
//       className="relative w-full h-screen text-white lowercase bg-black"
//     >
//       {/* Scene 7 */}
//       <div
//         ref={scene7Ref}
//         className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center opacity-0"
//       >
//         <img
//           src={isMobile ? story_scene_7_mobile : story_scene_7}
//           alt="Scene 7"
//           className={`w-full ${isMobile ? "" : "scale-y-[70%]"} object-contain`}
//         />
//         <img
//           ref={charRef}
//           src={char_1_1}
//           alt="Char Alt"
//           className={`absolute object-contain opacity-0 z-30 ${
//             isMobile ? "w-[300px] h-[300px]" : "w-[650px] h-[650px]"
//           }`}
//         />
//         <div
//           ref={scene7TextRef}
//           className={`absolute bottom-6 left-5 z-40 opacity-0 ${
//             isMobile ? "text-sm p-2" : ""
//           }`}
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Gibbo walking toward his car in the parking</p>
//           </div>
//         </div>
//       </div>

//       {/* Scene 8 */}
//       <div className="absolute top-0 left-0 w-full h-full z-30 flex items-center justify-center overflow-visible pointer-events-none">
//         <img
//           ref={scene8BgRef}
//           src={isMobile ? story_scene_8_bg_mobile : story_scene_8_bg_1}
//           alt="Scene 8 BG"
//           className={`absolute object-contain opacity-0 ${
//             isMobile
//               ? "scale-x-[150%] scale-y-[120%]"
//               : "scale-x-[180%] scale-y-[150%]"
//           }`}
//           style={{ right: 0 }}
//         />
//         <img
//           ref={scene8CharRef}
//           src={isMobile ? story_scene_8_char_mobile : story_scene_8_char}
//           alt="Scene 8 Char"
//           className={`absolute object-fill opacity-0 ${
//             isMobile ? "bottom-0" : ""
//           }`}
//           style={isMobile ? { width: "auto", height: "auto" } : {}}
//         />
//         <div
//           ref={scene8TextRef}
//           className={`absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none ${
//             isMobile ? "text-sm p-2" : ""
//           }`}
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Gibbo sits in the car and gets moving.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Module3;

// ... same imports ...

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   story_scene_7,
//   story_scene_7_mobile,
//   char_1_1,
//   story_scene_8_char,
//   story_scene_8_char_mobile,
//   story_scene_8_bg_1,
//   story_scene_8_bg_mobile
// } from "../../../assets/images/avatar";

// const Module3 = () => {
//   const containerRef = useRef(null);
//   const isMobile = window.innerWidth <= 768;

//   const scene7Ref = useRef(null);
//   const charRef = useRef(null);
//   const scene7TextRef = useRef(null);
//   const scene8BgRef = useRef(null);
//   const scene8CharRef = useRef(null);
//   const scene8TextRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.set(
//       [
//         scene7Ref.current,
//         charRef.current,
//         scene7TextRef.current,
//         scene8BgRef.current,
//         scene8CharRef.current,
//         scene8TextRef.current
//       ],
//       { opacity: 0 }
//     );

//     const tl = gsap.timeline();
//     tl.to({}, { duration: 2 }); // minimum scroll duration

//     // --- Scene 7 ---
//     tl.set(scene7Ref.current, { opacity: 1 });
//     tl.set(charRef.current, {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       scale: isMobile ? 0.9 : 1,
//       bottom: isMobile ? "50px" : "-4px",
//       left: isMobile ? "5%" : "2.5rem"
//     });

//     tl.to(charRef.current, {
//       x: isMobile ? 80 : 200,
//       y: isMobile ? 5 : 10,
//       scale: isMobile ? 0.8 : 0.8,
//       duration: isMobile ? 3 : 5,
//       ease: "power2.inOut"
//     });

//     tl.to(scene7TextRef.current, { opacity: 1, duration: 0.01 }, "<");
//     tl.to(scene7TextRef.current, { opacity: 0, duration: 1 }, "+=1");
//     tl.to([scene7Ref.current, charRef.current], { opacity: 0, duration: 1 });

//     // --- Scene 8 (Instant show, stays visible) ---
//     tl.set([scene8BgRef.current, scene8CharRef.current], { opacity: 1 });
//     tl.set(scene8TextRef.current, { opacity: 1 });

//     tl.to(scene8BgRef.current, {
//       x: isMobile ? "15%" : "30%",
//       duration: isMobile ? 1.5 : 2,
//       ease: "power2.inOut"
//     });

//     // Text fades out but background/char stay visible
//     tl.to(scene8TextRef.current, { opacity: 0, duration: 0.5 }, "+=1");

//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: `+=6000`,
//       scrub: 1.5,
//       pin: true,
//       anticipatePin: 1,
//       markers: false
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === containerRef.current) trigger.kill();
//       });
//       tl.kill();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       id="module-3"
//       className="relative w-full h-screen text-white lowercase bg-black"
//     >
//       {/* Scene 7 */}
//       <div
//         ref={scene7Ref}
//         className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center opacity-0"
//       >
//         <img
//           src={isMobile ? story_scene_7_mobile : story_scene_7}
//           alt="Scene 7"
//           className={`w-full ${isMobile ? "" : "scale-y-[70%]"} object-contain`}
//         />
//         <img
//           ref={charRef}
//           src={char_1_1}
//           alt="Char Alt"
//           className={`absolute object-contain opacity-0 z-30 ${
//             isMobile ? "w-[300px] h-[300px]" : "w-[650px] h-[650px]"
//           }`}
//         />
//         <div
//           ref={scene7TextRef}
//           className={`absolute bottom-6 left-5 z-40 opacity-0 ${
//             isMobile ? "text-sm p-2" : ""
//           }`}
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Gibbo walking toward his car in the parking</p>
//           </div>
//         </div>
//       </div>

//       {/* Scene 8 */}
//       <div className="absolute top-0 left-0 w-full h-full z-30 flex items-center justify-center overflow-visible pointer-events-none">
//         <img
//           ref={scene8BgRef}
//           src={isMobile ? story_scene_8_bg_mobile : story_scene_8_bg_1}
//           alt="Scene 8 BG"
//           className={`absolute object-contain opacity-0 ${
//             isMobile
//               ? "scale-x-[150%] scale-y-[120%]"
//               : "scale-x-[180%] scale-y-[150%]"
//           }`}
//           style={{ right: 0 }}
//         />
//         <img
//           ref={scene8CharRef}
//           src={isMobile ? story_scene_8_char_mobile : story_scene_8_char}
//           alt="Scene 8 Char"
//           className={`absolute object-fill opacity-0 ${
//             isMobile ? "bottom-0" : ""
//           }`}
//           style={isMobile ? { width: "auto", height: "auto" } : {}}
//         />
//         <div
//           ref={scene8TextRef}
//           className={`absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none ${
//             isMobile ? "text-sm p-2" : ""
//           }`}
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Gibbo sits in the car and gets moving.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Module3;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  story_scene_7,
  story_scene_7_mobile,
  char_1_1,
  story_scene_8_char,
  story_scene_8_char_mobile,
  story_scene_8_bg_1,
  story_scene_8_bg_mobile
} from "../../../assets/images/avatar";

const Module3 = () => {
  const containerRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const scene7Ref = useRef(null);
  const charRef = useRef(null);
  const scene7TextRef = useRef(null);
  const scene8BgRef = useRef(null);
  const scene8CharRef = useRef(null);
  const scene8TextRef = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // Reset opacity
  //   gsap.set(
  //     [
  //       scene7Ref.current,
  //       charRef.current,
  //       scene7TextRef.current,
  //       scene8BgRef.current,
  //       scene8CharRef.current,
  //       scene8TextRef.current
  //     ],
  //     { opacity: 0 }
  //   );

  //   // Timeline attached to ScrollTrigger
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       start: "top top",
  //       end: "+=3000", // Manually guessed scroll distance
  //       scrub: 1.5,
  //       pin: true,
  //       anticipatePin: 1,
  //       markers: false
  //     }
  //   });

  //   // --- Scene 7 ---
  //   tl.set(scene7Ref.current, { opacity: 1 })
  //     .set(charRef.current, {
  //       opacity: 1,
  //       x: 0,
  //       y: 0,
  //       scale: isMobile ? 0.9 : 1,
  //       bottom: isMobile ? "50px" : "-4px",
  //       left: isMobile ? "5%" : "2.5rem"
  //     })
  //     .to(charRef.current, {
  //       x: isMobile ? 80 : 200,
  //       y: isMobile ? 5 : 10,
  //       scale: isMobile ? 0.8 : 0.8,
  //       duration: isMobile ? 3 : 5,
  //       ease: "power2.inOut"
  //     })
  //     .to(scene7TextRef.current, { opacity: 1, duration: 0.01 }, "<")
  //     .to(scene7TextRef.current, { opacity: 0, duration: 1 }, "+=1")
  //     .to([scene7Ref.current, charRef.current], { opacity: 0, duration: 1 })

  //     // --- Scene 8 ---
  //     .set([scene8BgRef.current, scene8CharRef.current], { opacity: 1 })
  //     .set(scene8TextRef.current, { opacity: 1 })
  //     .to(scene8BgRef.current, {
  //       x: isMobile ? "15%" : "30%",
  //       duration: isMobile ? 1.5 : 2,
  //       ease: "power2.inOut"
  //     })
  //     .to(scene8TextRef.current, { opacity: 0, duration: 0.5 }, "+=1");

  //   return () => {
  //     if (tl.scrollTrigger) tl.scrollTrigger.kill();
  //     tl.kill();
  //   };
  // }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.refresh();

    // Reset opacity
    gsap.set(
      [
        scene7Ref.current,
        charRef.current,
        scene7TextRef.current,
        scene8BgRef.current,
        scene8CharRef.current,
        scene8TextRef.current
      ],
      { opacity: 0 }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        markers: false
      }
    });

    // --- Scene 7 ---
    tl.set(scene7Ref.current, { opacity: 1 })
      .set(charRef.current, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: isMobile ? 0.9 : 1,
        bottom: isMobile ? "50px" : "-4px",
        left: isMobile ? "5%" : "2.5rem"
      })
      .to(charRef.current, {
        x: isMobile ? 80 : 200,
        y: isMobile ? 5 : 10,
        scale: isMobile ? 0.8 : 0.8,
        duration: isMobile ? 3 : 5,
        ease: "power2.inOut"
      })
      .to(scene7TextRef.current, { opacity: 1, duration: 0.01 }, "<")
      .to(scene7TextRef.current, { opacity: 0, duration: 1 }, "+=1")

      // ✅ Crossfade Scene 7 → Scene 8
      .to(
        [scene7Ref.current, charRef.current],
        { opacity: 0, duration: 1 },
        "+=0"
      )
      .to(
        [scene8BgRef.current, scene8CharRef.current],
        { opacity: 1, duration: 1.2 },
        "<0.3"
      )
      .to(scene8TextRef.current, { opacity: 1, duration: 1 }, "<0.5")

      // --- Scene 8 Animations ---
      .to(scene8BgRef.current, {
        x: isMobile ? "15%" : "30%",
        duration: isMobile ? 1.5 : 2,
        ease: "power2.inOut"
      })
      // ✅ Only fade out the text, keep BG & Char visible
      .to(scene8TextRef.current, { opacity: 0, duration: 0.5 }, "+=1")

      // ✅ Keep Scene8 visible until ScrollTrigger ends
      .set([scene8BgRef.current, scene8CharRef.current], { opacity: 1 });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="module-3"
      className="relative w-full h-screen text-white lowercase bg-black"
    >
      {/* Scene 7 */}
      <div
        ref={scene7Ref}
        className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center opacity-0"
      >
        <img
          src={isMobile ? story_scene_7_mobile : story_scene_7}
          alt="Scene 7"
          className={`w-full ${isMobile ? "" : "scale-y-[70%]"} object-contain`}
        />
        <img
          ref={charRef}
          src={char_1_1}
          alt="Char Alt"
          className={`absolute object-contain opacity-0 z-30 ${
            isMobile ? "w-[300px] h-[300px]" : "w-[650px] h-[650px]"
          }`}
        />
        <div
          ref={scene7TextRef}
          className={`absolute bottom-6 left-5 z-40 opacity-0 ${
            isMobile ? "text-sm p-2" : ""
          }`}
        >
          <div className="bg-black/80 text-white p-4 rounded-md w-fit">
            <p>Gibbo walking toward his car in the parking</p>
          </div>
        </div>
      </div>

      {/* Scene 8 */}
      <div className="absolute top-0 left-0 w-full h-full z-30 flex items-center justify-center overflow-visible pointer-events-none">
        <img
          ref={scene8BgRef}
          src={isMobile ? story_scene_8_bg_mobile : story_scene_8_bg_1}
          alt="Scene 8 BG"
          className={`absolute object-contain opacity-0 ${
            isMobile
              ? "scale-x-[150%] scale-y-[120%]"
              : "scale-x-[180%] scale-y-[150%]"
          }`}
          style={{ right: 0 }}
        />
        <img
          ref={scene8CharRef}
          src={isMobile ? story_scene_8_char_mobile : story_scene_8_char}
          alt="Scene 8 Char"
          className={`absolute object-fill opacity-0 ${
            isMobile ? "bottom-0" : ""
          }`}
          style={isMobile ? { width: "auto", height: "auto" } : {}}
        />
        <div
          ref={scene8TextRef}
          className={`absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none ${
            isMobile ? "text-sm p-2" : ""
          }`}
        >
          <div className="bg-black/80 text-white p-4 rounded-md w-fit">
            <p>Gibbo sits in the car and gets moving.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module3;
