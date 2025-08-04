// import React, { useEffect, useRef, useState } from 'react';
// import { useQuizProgress } from '../../../hooks/useQuizProgress';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import QuizQuestion from '../QuizQuestion';

// gsap.registerPlugin(ScrollTrigger);

// export default function Module2() {
//   const { nextModule, submitResponse } = useQuizProgress();
//   const [questionAnswered, setQuestionAnswered] = useState(false);
//   const containerRef = useRef(null);
//   const scene1Ref = useRef(null);
//   const scene2Ref = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Scene 1: Castle animation
//       gsap.fromTo(scene1Ref.current.querySelector('.castle-scene'),
//         { opacity: 0, scale: 0.8 },
//         { opacity: 1, scale: 1, duration: 2, ease: "power3.out" }
//       );

//       // Floating animation for magical elements
//       gsap.to(scene1Ref.current.querySelectorAll('.floating'), {
//         y: -30,
//         duration: 3,
//         ease: "power2.inOut",
//         repeat: -1,
//         yoyo: true,
//         stagger: 0.5
//       });

//       // Scene 2: Question reveal with dramatic effect
//       ScrollTrigger.create({
//         trigger: scene2Ref.current,
//         start: "top 80%",
//         onEnter: () => {
//           gsap.fromTo(scene2Ref.current.querySelector('.riddle-container'),
//             { rotationY: 90, opacity: 0 },
//             { rotationY: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
//           );
//         }
//       });

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const handleQuestionSubmit = (questionId, selectedAnswer, isCorrect) => {
//     submitResponse(questionId, selectedAnswer, isCorrect);
//     setQuestionAnswered(true);

//     setTimeout(() => {
//       nextModule();
//     }, 2000);
//   };

//   const questionData = {
//     id: 'module2-q1',
//     question: 'The ancient guardian blocks your path with a riddle: "I am not a season, yet I bring renewal. I am not water, yet I flow. I am not fire, yet I warm hearts. What am I?"',
//     options: [
//       { id: 'a', text: 'Knowledge', isCorrect: true },
//       { id: 'b', text: 'Love', isCorrect: false },
//       { id: 'c', text: 'Time', isCorrect: false },
//       { id: 'd', text: 'Music', isCorrect: false }
//     ],
//     explanation: 'Knowledge brings renewal to minds, flows from teacher to student, and warms hearts with understanding!'
//   };

//   return (
//     <div ref={containerRef} className="relative">
//       {/* Scene 1: Castle Approach */}
//       <section ref={scene1Ref} className="min-h-screen flex items-center justify-center px-4 pt-20">
//         <div className="castle-scene max-w-6xl mx-auto text-center">
//           <div className="relative">
//             {/* Animated background elements */}
//             <div className="floating absolute top-10 left-10 w-16 h-16 bg-evolve-lavender-indigo/30
//                           rounded-full blur-sm"></div>
//             <div className="floating absolute top-32 right-20 w-12 h-12 bg-evolve-heliotrope/40
//                           rounded-full blur-sm"></div>
//             <div className="floating absolute bottom-20 left-1/4 w-20 h-20 bg-evolve-inchworm/20
//                           rounded-full blur-lg"></div>

//             <h1 className="text-7xl font-bricolage font-bold text-evolve-white mb-8">
//               The Ancient
//               <span className="block bg-gradient-to-r from-evolve-heliotrope to-evolve-lavender-indigo
//                              bg-clip-text text-transparent">
//                 Citadel
//               </span>
//             </h1>

//             <p className="text-2xl text-evolve-gray font-montserrat leading-relaxed max-w-4xl mx-auto mb-12">
//               Following the compass's guidance, you arrive at a magnificent citadel shrouded in mist.
//               Ancient runes pulse with ethereal light along its towering walls, and a guardian spirit
//               emerges from the shadows to test your wisdom.
//             </p>

//             {/* Visual representation of the citadel */}
//             <div className="relative mx-auto w-64 h-64 mb-8">
//               <div className="absolute inset-0 bg-gradient-to-t from-evolve-charleston-green to-evolve-lavender-indigo/50
//                             rounded-25px shadow-challenges-card transform rotate-45"></div>
//               <div className="absolute inset-4 bg-evolve-black rounded-20px"></div>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//                             w-8 h-8 bg-evolve-heliotrope rounded-full animate-pulse"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Scene 2: The Guardian's Riddle */}
//       <section ref={scene2Ref} className="min-h-screen flex items-center justify-center px-4">
//         <div className="riddle-container w-full max-w-4xl mx-auto">
//           <div className="bg-gradient-to-br from-evolve-charleston-green to-evolve-arsenic
//                         p-8 rounded-25px shadow-button-popped border border-evolve-heliotrope/30">
//             <div className="text-center mb-8">
//               <h2 className="text-4xl font-bricolage font-bold text-evolve-white mb-4">
//                 Chapter II: The Guardian's Test
//               </h2>
//               <p className="text-evolve-gray font-montserrat text-lg mb-6">
//                 The ethereal guardian materializes before you, its voice echoing through dimensions...
//               </p>

//               {/* Guardian visual */}
//               <div className="w-24 h-24 mx-auto mb-6 relative">
//                 <div className="absolute inset-0 bg-evolve-heliotrope rounded-full opacity-60 animate-pulse"></div>
//                 <div className="absolute inset-2 bg-evolve-lavender-indigo rounded-full opacity-80 animate-ping"></div>
//                 <div className="absolute inset-4 bg-evolve-white rounded-full"></div>
//               </div>
//             </div>

//             <QuizQuestion
//               questionData={questionData}
//               onSubmit={handleQuestionSubmit}
//               disabled={questionAnswered}
//             />

//             {questionAnswered && (
//               <div className="text-center mt-8 text-evolve-heliotrope">
//                 <p className="font-montserrat mb-4">The guardian nods with approval...</p>
//                 <div className="w-8 h-8 border-2 border-evolve-heliotrope border-t-transparent
//                               rounded-full animate-spin mx-auto"></div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   story_scene_6,
//   story_scene_7,
// } from "../../../assets/images/avatar/index";
// import QuizQuestionModal from "../QuizQuestionModal";

// gsap.registerPlugin(ScrollTrigger);

// const Module2 = () => {
//   const containerRef = useRef(null);
//   const scene7Ref = useRef(null);
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   // Trigger quiz modal on scroll into view
//   useEffect(() => {
//     const trigger = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: "+=300",
//       onEnter: () => {
//         setShowQuiz(true);
//       },
//       once: true,
//     });

//     return () => {
//       trigger.kill();
//     };
//   }, []);

//   // Freeze scroll when quiz is active
//   useEffect(() => {
//     const html = document.documentElement;
//     const body = document.body;
//     const container = containerRef.current;

//     if (showQuiz && !quizCompleted) {
//       body.style.overflow = "hidden";
//       html.style.overflow = "hidden";
//       if (container) container.style.overflow = "hidden";
//     } else {
//       body.style.overflow = "auto";
//       html.style.overflow = "auto";
//       if (container) container.style.overflow = "auto";
//     }

//     return () => {
//       body.style.overflow = "auto";
//       html.style.overflow = "auto";
//       if (container) container.style.overflow = "auto";
//     };
//   }, [showQuiz, quizCompleted]);

//   // Animate scene 7 after quiz is done
//   useEffect(() => {
//     if (!quizCompleted || !scene7Ref.current) return;

//     gsap.fromTo(
//       scene7Ref.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: scene7Ref.current,
//           start: "top 90%",
//           toggleActions: "play none none none",
//         },
//       }
//     );
//   }, [quizCompleted]);

//   const handleQuizClose = () => {
//     setShowQuiz(false);
//     setQuizCompleted(true);
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-2"
//       className="relative w-full min-h-screen bg-black"
//     >
//       {/* === Background Scene 6 === */}
//       <div
//         className={`${
//           showQuiz && !quizCompleted
//             ? "fixed top-0 left-0 h-screen w-full z-0"
//             : "sticky top-0 h-screen w-full z-0"
//         }`}
//       >
//         <img
//           src={story_scene_6}
//           alt="Story Scene 6"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* === Quiz Modal === */}
//       <QuizQuestionModal
//         isVisible={showQuiz}
//         onClose={handleQuizClose}
//         questionId="scene6_q1"
//         question="Why do these steps have grooves anyway?"
//         options={[
//           "To prevent slipping",
//           "For aesthetic design",
//           "To reduce weight",
//           "To channel water",
//         ]}
//         correctIndex={0}
//         reason="Grooves improve traction to reduce the risk of slipping on the steps."
//       />

//       {/* === Scene 7 (visible after quiz) === */}
//       {quizCompleted && (
//         <div
//           ref={scene7Ref}
//           className="w-full h-screen z-10 relative flex items-center justify-center bg-black"
//         >
//           <img
//             src={story_scene_7}
//             alt="Scene 7"
//             className="w-full h-full object-cover rounded-xl shadow-lg"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Module2;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { story_scene_6, story_scene_7 } from "../../../assets/images/avatar";
// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuiz } from "../../../context/QuizContext";
// import { useScrollLock } from "../useScrollLock";

// gsap.registerPlugin(ScrollTrigger);

// const Module2 = () => {
//   const containerRef = useRef(null);
//   const scene6Ref = useRef(null);
//   const scene7Ref = useRef(null);
//   const tlRef = useRef(null);
//   const scrollTriggerRef = useRef(null);

//   const [showQuiz, setShowQuiz] = useState(false);
//   useScrollLock(showQuiz);

//   const { dispatch, actions } = useQuiz();

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=3000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         id: "module2-trigger"
//       }
//     });

//     scrollTriggerRef.current = ScrollTrigger.getById("module2-trigger");
//     tlRef.current = tl;

//     tl.fromTo(
//       scene6Ref.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1, ease: "power2.out" }
//     );

//     tl.to(
//       {},
//       {
//         duration: 0.5,
//         onStart: () => {
//           setShowQuiz(true);
//           scrollTriggerRef.current?.disable();
//           dispatch({ type: actions.SET_QUIZ_ACTIVE, payload: true });
//           tl.pause();
//         }
//       }
//     );

//     tl.to(scene6Ref.current, {
//       opacity: 0.3,
//       duration: 1.5,
//       ease: "power2.out"
//     });

//     tl.fromTo(
//       scene7Ref.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         ease: "power2.out"
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       tl.kill();
//     };
//   }, []);

//   const handleQuizClose = () => {
//     setShowQuiz(false);
//     scrollTriggerRef.current?.enable();
//     tlRef.current?.resume();
//     dispatch({ type: actions.SET_QUIZ_ACTIVE, payload: false });
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-2"
//       className="relative w-full h-screen overflow-hidden text-white lowercase bg-black"
//     >
//       <div
//         ref={scene6Ref}
//         className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center"
//       >
//         <img
//           src={story_scene_6}
//           alt="Story Scene 6"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <QuizQuestionModal
//         isVisible={showQuiz}
//         onClose={handleQuizClose}
//         questionId="scene6_q1"
//         question="Why do these steps have grooves anyway?"
//         options={[
//           "To prevent slipping",
//           "For aesthetic design",
//           "To reduce weight",
//           "To channel water"
//         ]}
//         correctIndex={0}
//         reason="Grooves improve traction to reduce the risk of slipping on the steps."
//       />

//       <div
//         ref={scene7Ref}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center opacity-0"
//       >
//         <img
//           src={story_scene_7}
//           alt="Scene 7"
//           className="w-full h-full object-cover rounded-xl shadow-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Module2;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { story_scene_6, story_scene_7 } from "../../../assets/images/avatar";
// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuiz } from "../../../context/QuizContext";
// import { useScrollLock } from "../useScrollLock";

// gsap.registerPlugin(ScrollTrigger);

// const Module2 = () => {
//   const containerRef = useRef(null);
//   const scene6Ref = useRef(null);
//   const scene7Ref = useRef(null);
//   const tlRef = useRef(null);
//   const scrollTriggerRef = useRef(null);

//   const [showQuiz, setShowQuiz] = useState(false);
//   useScrollLock(showQuiz); // ✅ Lock scroll while modal is visible

//   const { dispatch, actions } = useQuiz();

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=3000", // Long enough to scroll through scene
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         id: "module2-trigger"
//       }
//     });

//     scrollTriggerRef.current = ScrollTrigger.getById("module2-trigger");
//     tlRef.current = tl;

//     // Fade in Scene 6
//     tl.fromTo(
//       scene6Ref.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1, ease: "power2.out" }
//     );

//     // Show quiz modal and pause scroll
//     tl.to(
//       {},
//       {
//         duration: 0.5,
//         onStart: () => {
//           setShowQuiz(true);
//           scrollTriggerRef.current?.disable();
//           dispatch({ type: actions.SET_QUIZ_ACTIVE, payload: true });
//           tl.pause();
//         }
//       }
//     );

//     // Dim Scene 6 after quiz (will be triggered on resume)
//     tl.to(scene6Ref.current, {
//       opacity: 0.3,
//       duration: 1.5,
//       ease: "power2.out"
//     });

//     // Fade in Scene 7
//     tl.fromTo(
//       scene7Ref.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         ease: "power2.out"
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       tl.kill();
//     };
//   }, []);

//   // Pause/resume Lenis scroll on quiz modal open
//   useEffect(() => {
//     if (showQuiz) {
//       window.lenis?.stop();
//     } else {
//       window.lenis?.start();
//     }
//   }, [showQuiz]);

//   const handleQuizClose = () => {
//     setShowQuiz(false);
//     scrollTriggerRef.current?.enable(); // Re-enable scroll trigger
//     tlRef.current?.resume(); // Resume animation
//     dispatch({ type: actions.SET_QUIZ_ACTIVE, payload: false });
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-2"
//       className={`relative w-full h-screen overflow-hidden text-white lowercase bg-black ${
//         showQuiz ? "pointer-events-none" : ""
//       }`}
//     >
//       {/* Scene 6 */}
//       <div
//         ref={scene6Ref}
//         className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center"
//       >
//         <img
//           src={story_scene_6}
//           alt="Story Scene 6"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Quiz Modal - over the scenes */}
//       <div className="pointer-events-auto z-[9999]">
//         <QuizQuestionModal
//           isVisible={showQuiz}
//           onClose={handleQuizClose}
//           questionId="scene6_q1"
//           question="Why do these steps have grooves anyway?"
//           options={[
//             "To prevent slipping",
//             "For aesthetic design",
//             "To reduce weight",
//             "To channel water"
//           ]}
//           correctIndex={0}
//           reason="Grooves improve traction to reduce the risk of slipping on the steps."
//         />
//       </div>

//       {/* Scene 7 */}
//       <div
//         ref={scene7Ref}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center opacity-0"
//       >
//         <img
//           src={story_scene_7}
//           alt="Scene 7"
//           className="w-full h-full object-cover rounded-xl shadow-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Module2;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { story_scene_6, story_scene_7 } from "../../../assets/images/avatar";
// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuiz } from "../../../context/QuizContext";

// gsap.registerPlugin(ScrollTrigger);

// const Module2 = () => {
//   const containerRef = useRef(null);
//   const scene6Ref = useRef(null);
//   const scene7Ref = useRef(null);
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const { dispatch, actions } = useQuiz();

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=3000", // controls how much scroll space the animation takes
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1
//       }
//     });

//     // Scene 6 fade in
//     tl.fromTo(
//       scene6Ref.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1, ease: "power2.out" }
//     );

//     // // Trigger quiz modal
//     // tl.to(
//     //   {},
//     //   {
//     //     duration: 0.5,
//     //     onStart: () => {
//     //       setShowQuiz(true);
//     //     }
//     //   }
//     // );

//     // // Wait until quiz is completed
//     // tl.to(
//     //   {},
//     //   {
//     //     duration: 0.1,
//     //     onUpdate: () => {
//     //       if (!quizCompleted) tl.pause(); // pause until quiz is completed
//     //     }
//     //   }
//     // );
//     tl.to(
//       {},
//       {
//         duration: 0.5,
//         onStart: () => {
//           if (!quizCompleted) {
//             setShowQuiz(true);
//           }
//         }
//       }
//     );

//     tl.to(
//       {},
//       {
//         duration: 0.1,
//         onUpdate: () => {
//           if (!quizCompleted) {
//             tl.pause();
//           }
//         }
//       }
//     );

//     // Scene 6 fade out after quiz
//     tl.to(scene6Ref.current, {
//       opacity: 0.3,
//       duration: 1.5,
//       ease: "power2.out"
//     });

//     // Scene 7 fade in
//     tl.fromTo(
//       scene7Ref.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         ease: "power2.out"
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       tl.kill();
//     };
//   }, [quizCompleted]);

//   useEffect(() => {
//     if (showQuiz && !quizCompleted) {
//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflow = "hidden";

//       ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
//     } else {
//       document.body.style.overflow = "auto";
//       document.documentElement.style.overflow = "auto";

//       ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//       document.documentElement.style.overflow = "auto";
//       ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
//     };
//   }, [showQuiz, quizCompleted]);

//   const handleQuizClose = () => {
//     setShowQuiz(false);
//     setQuizCompleted(true);
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-2"
//       className="relative w-full h-screen overflow-hidden text-white lowercase bg-black"
//     >
//       {/* === Scene 6 === */}
//       <div
//         ref={scene6Ref}
//         className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center"
//       >
//         <img
//           src={story_scene_6}
//           alt="Story Scene 6"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* === Quiz Modal === */}
//       <QuizQuestionModal
//         isVisible={showQuiz}
//         onClose={handleQuizClose}
//         questionId="scene6_q1"
//         question="Why do these steps have grooves anyway?"
//         options={[
//           "To prevent slipping",
//           "For aesthetic design",
//           "To reduce weight",
//           "To channel water"
//         ]}
//         correctIndex={0}
//         reason="Grooves improve traction to reduce the risk of slipping on the steps."
//       />

//       {/* === Scene 7 === */}
//       <div
//         ref={scene7Ref}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center opacity-0"
//       >
//         <img
//           src={story_scene_7}
//           alt="Scene 7"
//           className="w-full h-full object-cover rounded-xl shadow-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Module2;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import Lenis from "@studio-freight/lenis";

// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   story_scene_6,
//   story_scene_7,
//   char_1,
//   char_1_1,
//   story_scene_8_char,
//   story_scene_8_bg,
//   story_scene_9,
//   story_scene_8_bg_1
// } from "../../../assets/images/avatar";
// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuiz } from "../../../context/QuizContext";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// gsap.registerPlugin(ScrollToPlugin);

// gsap.registerPlugin(ScrollTrigger);

// const Module2 = () => {
//   const containerRef = useRef(null);
//   const scene6Ref = useRef(null);
//   const scene7Ref = useRef(null);
//   const charRef = useRef(null);
//   const charAltRef = useRef(null);
//   const scene7TextRef = useRef(null);
//   const scene8BgRef = useRef(null);
//   const scene8CharRef = useRef(null);
//   const scene9Ref = useRef(null);
//   const scene8TextRef = useRef(null);
//   const scene9TextRef = useRef(null);

//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [showQuiz2, setShowQuiz2] = useState(false);
//   const [quiz2Completed, setQuiz2Completed] = useState(false);

//   const { completeQuiz } = useQuizProgress();
//   const { submitResponse } = useQuizProgress();

//   const { dispatch, actions } = useQuiz();

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.4,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       direction: "vertical",
//       gestureDirection: "vertical",
//       smooth: true,
//       mouseMultiplier: 1.1,
//       smoothTouch: false,
//       touchMultiplier: 2,
//       infinite: false
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     lenis.on("scroll", () => {
//       ScrollTrigger.update();
//     });

//     const master = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=4000",
//         scrub: 1.5,
//         pin: true,
//         onLeave: () => {
//           console.log("Leaving Module 2");
//           ScrollTrigger.refresh();
//         }
//       }
//     });

//     // === Scene 6 ===
//     master.fromTo(
//       scene6Ref.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1 }
//     );

//     master.to(
//       {},
//       {
//         duration: 0.5,
//         onStart: () => {
//           if (!quizCompleted) setShowQuiz(true);
//         }
//       }
//     );

//     master.to(
//       {},
//       {
//         duration: 0.1,
//         onUpdate: () => {
//           if (!quizCompleted) master.pause();
//         }
//       }
//     );

//     master.to(scene6Ref.current, { opacity: 0.3, duration: 1 });
//     master.set(scene6Ref.current, { display: "none" });

//     // === Scene 7 ===
//     const scene7 = gsap.timeline();
//     scene7.fromTo(
//       scene7Ref.current,
//       { opacity: 0, y: 100 },
//       { opacity: 1, y: 0, duration: 1 }
//     );
//     scene7
//       .to(charRef.current, { opacity: 1, duration: 0.5 })
//       .to(charRef.current, { x: 80, y: -20, duration: 1.6 })
//       .to(charRef.current, { opacity: 0, duration: 0.1 });

//     scene7.set(charAltRef.current, { x: 80, y: 10 });
//     scene7
//       .to(charAltRef.current, { opacity: 1, duration: 0.2 })
//       .to(charAltRef.current, { x: 150, y: 0, duration: 1.6 });

//     scene7.to(scene7TextRef.current, { opacity: 1, duration: 1 });
//     scene7.to(scene7TextRef.current, { opacity: 0, duration: 1 });
//     scene7.to(scene7Ref.current, { opacity: 0, duration: 1.5 });

//     master.add(scene7);

//     // === Scene 8 ===
//     master.set(scene8BgRef.current, { x: "0%", opacity: 0 });
//     master.to(scene8BgRef.current, {
//       opacity: 1,
//       duration: 2,
//       ease: "power2.inOut"
//     });
//     master.fromTo(
//       scene8CharRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 2.5, ease: "power2.inOut" }
//     );
//     master.to(scene8BgRef.current, {
//       x: "30%",
//       duration: 2,
//       ease: "power2.inOut"
//     });

//     master.set(scene8TextRef.current, { opacity: 0 });
//     master.to(scene8TextRef.current, {
//       opacity: 1,
//       duration: 1,
//       ease: "power2.out"
//     });
//     master.to(scene8TextRef.current, {
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out"
//     });

//     // === Scene 8 Exit ===
//     master.to(scene8CharRef.current, {
//       opacity: 0,
//       scale: 0.9,
//       duration: 1,
//       ease: "power2.inOut"
//     });
//     master.to(
//       scene8BgRef.current,
//       { opacity: 0, scale: 1.05, duration: 1, ease: "power2.inOut" },
//       "<"
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       master.kill();
//       lenis.destroy();
//     };
//   }, [quizCompleted]);

//   useEffect(() => {
//     const shouldDisableScroll =
//       (showQuiz && !quizCompleted) || (showQuiz2 && !quiz2Completed);

//     if (shouldDisableScroll) {
//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflow = "hidden";
//       ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
//     } else {
//       document.body.style.overflow = "auto";
//       document.documentElement.style.overflow = "auto";
//       ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//       document.documentElement.style.overflow = "auto";
//       ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
//     };
//   }, [showQuiz, quizCompleted, showQuiz2, quiz2Completed]);

//   const handleQuizClose = (response, isCorrect) => {
//     setShowQuiz(false);
//     setQuizCompleted(true);

//     submitResponse("scene6_q1", response, isCorrect); // ✅ update score and question count
//   };

//   // const handleQuiz2Close = () => {
//   //   setShowQuiz2(false);
//   //   setQuiz2Completed(true);

//   //   dispatch({ type: actions.SET_QUIZ_COMPLETE });
//   // };

//   return (
//     <div
//       ref={containerRef}
//       id="module-2"
//       className="relative w-full h-screen  text-white lowercase bg-black"
//     >
//       {/* === Scene 6 === */}
//       <div
//         ref={scene6Ref}
//         className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center"
//       >
//         <img
//           src={story_scene_6}
//           alt="Story Scene 6"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* === Scene 7 === */}
//       <div
//         ref={scene7Ref}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center opacity-0"
//       >
//         <img
//           src={story_scene_7}
//           alt="Scene 7"
//           className="w-full h-full object-cover rounded-xl shadow-lg"
//         />

//         {/* char_1 */}
//         <img
//           ref={charRef}
//           src={char_1}
//           alt="Character"
//           className="absolute -bottom-4 left-16 w-[500px] h-[500px] object-contain opacity-0 z-30"
//         />

//         {/* char_1_1 */}
//         <img
//           ref={charAltRef}
//           src={char_1_1}
//           alt="Character 1 Alt"
//           className="absolute bottom-4 left-16 w-[650px] h-[650px] object-contain opacity-0 z-30"
//         />

//         {/* Scene 7 explanation box */}
//         <div
//           ref={scene7TextRef}
//           className="absolute bottom-6 left-6 z-40 opacity-0"
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene explanation text 7 goes here</p>
//           </div>
//         </div>
//       </div>
//       {/* === Scene 8 === */}
//       {/* === Scene 8 === */}
//       <div className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center overflow-visible pointer-events-none">
//         <img
//           ref={scene8BgRef}
//           src={story_scene_8_bg_1}
//           alt="Scene 8 Background"
//           className="absolute object-contain scale-x-[180%] scale-y-[150%] opacity-0"
//           style={{ right: 0, left: "auto" }} // wide image starts aligned to right
//         />

//         <div
//           ref={scene8TextRef}
//           className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene explanation text 8 goes here</p>
//           </div>
//         </div>

//         <img
//           ref={scene8CharRef}
//           src={story_scene_8_char}
//           alt="Character on Car"
//           className="absolute object-fill opacity-0"
//         />
//       </div>

//       {/* === Scene 9 ===
//       <div
//         ref={scene9Ref}
//         className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center opacity-0"
//       >
//         <img
//           src={story_scene_9}
//           alt="Scene 9"
//           className="absolute scale-y-[85%] object-cover"
//         />

//         // Scene 9 Explanation Box
//         <div
//           ref={scene9TextRef}
//           className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene explanation text 9 goes here</p>
//           </div>
//         </div>
//       </div> */}

//       {/* first quizz  */}
//       <QuizQuestionModal
//         isVisible={showQuiz}
//         onClose={handleQuizClose}
//         questionId="scene6_q1"
//         question="Why do these steps have grooves anyway?"
//         options={[
//           "To prevent slipping",
//           "For aesthetic design",
//           "To reduce weight",
//           "To channel water"
//         ]}
//         correctIndex={0}
//         reason="Grooves improve traction to reduce the risk of slipping on the steps."
//         backgroundImage={story_scene_6}
//         type="single"
//       />

//       {/* Quiz for Scene 9
//       <QuizQuestionModal
//         isVisible={showQuiz2}
//         onClose={handleQuiz2Close}
//         questionId="scene9_q1"
//         question="Why are the red, yellow, and green lights always stacked this way?"
//         options={[
//           "Grooves provide better grip for shoes",
//           "to help colour-blind people use position as a cue",
//           "to ensure consistency and reduce confusion for drivers",
//           "all of the above"
//         ]}
//         correctIndex={3}
//         reason="The arrangement helps colour-blind users recognise signals by position, increases visibility, and ensures consistency for all road users."
//         backgroundImage={story_scene_9}
//       /> */}
//       <div
//         id="module-2-spacer"
//         className="h-[150vh] transition-all duration-700 ease-in-out"
//       ></div>
//     </div>
//   );
// };

// export default Module2;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import Lenis from "@studio-freight/lenis";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   story_scene_6,
//   story_scene_7,
//   char_1,
//   char_1_1,
//   story_scene_8_char,
//   story_scene_8_bg_1
// } from "../../../assets/images/avatar";

// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuiz } from "../../../context/QuizContext";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module2 = () => {
//   const containerRef = useRef(null);
//   const scene6Ref = useRef(null);
//   const scene7Ref = useRef(null);
//   const charRef = useRef(null);
//   const charAltRef = useRef(null);
//   const scene7TextRef = useRef(null);
//   const scene8BgRef = useRef(null);
//   const scene8CharRef = useRef(null);
//   const scene8TextRef = useRef(null);

//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   const { submitResponse, completeQuiz } = useQuizProgress();
//   const { dispatch, actions } = useQuiz();

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.4,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       direction: "vertical",
//       gestureDirection: "vertical",
//       smooth: true,
//       mouseMultiplier: 1.1,
//       smoothTouch: false,
//       touchMultiplier: 2,
//       infinite: false
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     lenis.on("scroll", ScrollTrigger.update);

//     const master = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=4000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         onLeave: () => {
//           const spacer = document.getElementById("module-2-spacer");
//           if (spacer) spacer.style.height = "10vh";
//           ScrollTrigger.refresh();
//         }
//       }
//     });

//     // === Scene 6 ===
//     master.fromTo(
//       scene6Ref.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1 }
//     );

//     master.to(
//       {},
//       {
//         duration: 0.5,
//         onStart: () => {
//           if (!quizCompleted) setShowQuiz(true);
//         }
//       }
//     );

//     master.to(
//       {},
//       {
//         duration: 0.1,
//         onUpdate: () => {
//           if (!quizCompleted) master.pause();
//         }
//       }
//     );

//     master.to(scene6Ref.current, { opacity: 0.3, duration: 1 });
//     master.set(scene6Ref.current, { display: "none" });

//     // === Scene 7 ===
//     const scene7 = gsap.timeline();
//     scene7.fromTo(
//       scene7Ref.current,
//       { opacity: 0, y: 100 },
//       { opacity: 1, y: 0, duration: 1 }
//     );
//     scene7
//       .to(charRef.current, { opacity: 1, duration: 0.5 })
//       .to(charRef.current, { x: 80, y: -20, duration: 1.6 })
//       .to(charRef.current, { opacity: 0, duration: 0.1 });
//     scene7.set(charAltRef.current, { x: 80, y: 10 });
//     scene7
//       .to(charAltRef.current, { opacity: 1, duration: 0.2 })
//       .to(charAltRef.current, { x: 150, y: 0, duration: 1.6 });
//     scene7.to(scene7TextRef.current, { opacity: 1, duration: 1 });
//     scene7.to(scene7TextRef.current, { opacity: 0, duration: 1 });
//     scene7.to(scene7Ref.current, { opacity: 0, duration: 1.5 });

//     master.add(scene7);

//     // === Scene 8 ===
//     master.set(scene8BgRef.current, { x: "0%", opacity: 0 });
//     master.to(scene8BgRef.current, {
//       opacity: 1,
//       duration: 2,
//       ease: "power2.inOut"
//     });
//     master.fromTo(
//       scene8CharRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 2.5, ease: "power2.inOut" }
//     );
//     master.to(scene8BgRef.current, {
//       x: "30%",
//       duration: 2,
//       ease: "power2.inOut"
//     });
//     master.set(scene8TextRef.current, { opacity: 0 });
//     master.to(scene8TextRef.current, {
//       opacity: 1,
//       duration: 1,
//       ease: "power2.out"
//     });
//     master.to(scene8TextRef.current, {
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out"
//     });
//     master.to(scene8CharRef.current, {
//       opacity: 0,
//       scale: 0.9,
//       duration: 1,
//       ease: "power2.inOut"
//     });
//     master.to(
//       scene8BgRef.current,
//       { opacity: 0, scale: 1.05, duration: 1, ease: "power2.inOut" },
//       "<"
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       master.kill();
//       lenis.destroy();
//     };
//   }, [quizCompleted]);

//   useEffect(() => {
//     if (showQuiz && !quizCompleted) {
//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflow = "hidden";
//       ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
//     } else {
//       document.body.style.overflow = "auto";
//       document.documentElement.style.overflow = "auto";
//       ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//       document.documentElement.style.overflow = "auto";
//       ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
//     };
//   }, [showQuiz, quizCompleted]);

//   const handleQuizClose = (response, isCorrect) => {
//     setShowQuiz(false);
//     setQuizCompleted(true);
//     submitResponse("scene6_q1", response, isCorrect);
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-2"
//       className="relative w-full h-screen text-white lowercase bg-black"
//     >
//       {/* === Scene 6 === */}
//       <div
//         ref={scene6Ref}
//         className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center"
//       >
//         <img
//           src={story_scene_6}
//           alt="Story Scene 6"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* === Scene 7 === */}
//       <div
//         ref={scene7Ref}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center opacity-0"
//       >
//         <img
//           src={story_scene_7}
//           alt="Scene 7"
//           className="w-full h-full object-cover rounded-xl shadow-lg"
//         />
//         <img
//           ref={charRef}
//           src={char_1}
//           alt="Character"
//           className="absolute -bottom-4 left-16 w-[500px] h-[500px] object-contain opacity-0 z-30"
//         />
//         <img
//           ref={charAltRef}
//           src={char_1_1}
//           alt="Character Alt"
//           className="absolute bottom-4 left-16 w-[650px] h-[650px] object-contain opacity-0 z-30"
//         />
//         <div
//           ref={scene7TextRef}
//           className="absolute bottom-6 left-6 z-40 opacity-0"
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene explanation text 7 goes here</p>
//           </div>
//         </div>
//       </div>

//       {/* === Scene 8 === */}
//       <div className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center overflow-visible pointer-events-none">
//         <img
//           ref={scene8BgRef}
//           src={story_scene_8_bg_1}
//           alt="Scene 8 Background"
//           className="absolute object-contain scale-x-[180%] scale-y-[150%] opacity-0"
//           style={{ right: 0, left: "auto" }}
//         />
//         <div
//           ref={scene8TextRef}
//           className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene explanation text 8 goes here</p>
//           </div>
//         </div>
//         <img
//           ref={scene8CharRef}
//           src={story_scene_8_char}
//           alt="Character on Car"
//           className="absolute object-fill opacity-0"
//         />
//       </div>

//       {/* === Quiz === */}
//       <QuizQuestionModal
//         isVisible={showQuiz}
//         onClose={handleQuizClose}
//         questionId="scene6_q1"
//         question="Why do these steps have grooves anyway?"
//         options={[
//           "To prevent slipping",
//           "For aesthetic design",
//           "To reduce weight",
//           "To channel water"
//         ]}
//         correctIndex={0}
//         reason="Grooves improve traction to reduce the risk of slipping on the steps."
//         backgroundImage={story_scene_6}
//         type="single"
//       />

//       {/* Dynamic scroll spacer */}
//       <div
//         id="module-2-spacer"
//         className="h-[150vh] transition-all duration-700 ease-in-out pointer-events-none"
//       ></div>
//     </div>
//   );
// };

// export default Module2;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   story_scene_6,
//   story_scene_7,
//   char_1,
//   char_1_1,
//   story_scene_8_char,
//   story_scene_8_bg_1
// } from "../../../assets/images/avatar";

// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuiz } from "../../../context/QuizContext";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module2 = ({ lenisInstance }) => {
//   const containerRef = useRef(null);
//   const scene6Ref = useRef(null);
//   const scene7Ref = useRef(null);
//   const charRef = useRef(null);
//   const charAltRef = useRef(null);
//   const scene7TextRef = useRef(null);
//   const scene8BgRef = useRef(null);
//   const scene8CharRef = useRef(null);
//   const scene8TextRef = useRef(null);

//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   const { submitResponse } = useQuizProgress();
//   const masterTimelineRef = useRef(null);
//   const storedProgressRef = useRef(null);
//   const isQuizActiveRef = useRef(false);

//   useEffect(() => {
//     if (!lenisInstance) return;

//     const master = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=4000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     masterTimelineRef.current = master;

//     // === Scene 6 ===
//     master.fromTo(
//       scene6Ref.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1 }
//     );

//     // Quiz trigger point
//     master.add(() => {
//       if (!quizCompleted && !isQuizActiveRef.current) {
//         console.log("🎯 Quiz trigger - pausing timeline");

//         storedProgressRef.current = master.progress();
//         isQuizActiveRef.current = true;
//         master.pause();

//         setTimeout(() => setShowQuiz(true), 50);
//       }
//     });

//     // Continue Scene 6
//     master.to(scene6Ref.current, { opacity: 0.3, duration: 1 });
//     master.set(scene6Ref.current, { display: "none" });

//     // === Scene 7 ===
//     const scene7 = gsap.timeline();
//     scene7.fromTo(
//       scene7Ref.current,
//       { opacity: 0, y: 100 },
//       { opacity: 1, y: 0, duration: 1 }
//     );
//     scene7
//       .to(charRef.current, { opacity: 1, duration: 0.5 })
//       .to(charRef.current, { x: 80, y: -20, duration: 1.6 })
//       .to(charRef.current, { opacity: 0, duration: 0.1 });
//     scene7.set(charAltRef.current, { x: 80, y: 10 });
//     scene7
//       .to(charAltRef.current, { opacity: 1, duration: 0.2 })
//       .to(charAltRef.current, { x: 150, y: 0, duration: 1.6 });
//     scene7.to(scene7TextRef.current, { opacity: 1, duration: 1 });
//     scene7.to(scene7TextRef.current, { opacity: 0, duration: 1 });
//     scene7.to(scene7Ref.current, { opacity: 0, duration: 1.5 });

//     master.add(scene7);

//     // === Scene 8 ===
//     master.set(scene8BgRef.current, { x: "0%", opacity: 0 });
//     master.to(scene8BgRef.current, {
//       opacity: 1,
//       duration: 2,
//       ease: "power2.inOut"
//     });
//     master.fromTo(
//       scene8CharRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 2.5, ease: "power2.inOut" }
//     );
//     master.to(scene8BgRef.current, {
//       x: "30%",
//       duration: 2,
//       ease: "power2.inOut"
//     });
//     master.set(scene8TextRef.current, { opacity: 0 });
//     master.to(scene8TextRef.current, {
//       opacity: 1,
//       duration: 1,
//       ease: "power2.out"
//     });
//     master.to(scene8TextRef.current, {
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out"
//     });
//     master.to(scene8CharRef.current, {
//       opacity: 0,
//       scale: 0.9,
//       duration: 1,
//       ease: "power2.inOut"
//     });
//     master.to(
//       scene8BgRef.current,
//       { opacity: 0, scale: 1.05, duration: 1, ease: "power2.inOut" },
//       "<"
//     );

//     return () => {
//       master.kill();
//     };
//   }, [quizCompleted, lenisInstance]);

//   // Resume timeline when quiz completes
//   useEffect(() => {
//     if (
//       quizCompleted &&
//       masterTimelineRef.current &&
//       storedProgressRef.current !== null
//     ) {
//       console.log("▶️ Resuming timeline from:", storedProgressRef.current);

//       const master = masterTimelineRef.current;
//       master.progress(storedProgressRef.current);
//       master.resume();
//       isQuizActiveRef.current = false;
//     }
//   }, [quizCompleted]);

//   // Simple quiz submission without complex state management
//   const handleQuizClose = (response, isCorrect) => {
//     console.log("📝 Quiz submitted:", response, isCorrect);

//     setShowQuiz(false);
//     setQuizCompleted(true);

//     // Don't call submitResponse immediately - this causes the scroll reset
//     // Instead, call it after a delay to let the timeline resume first
//     setTimeout(() => {
//       submitResponse({
//         questionId: "scene6_q1",
//         response: response,
//         correctAnswer: "To prevent slipping"
//       });
//     }, 1000); // Wait 1 second for timeline to resume
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-2"
//       className="relative w-full h-screen text-white lowercase bg-black"
//     >
//       {/* === Scene 6 === */}
//       <div
//         ref={scene6Ref}
//         className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center"
//       >
//         <img
//           src={story_scene_6}
//           alt="Story Scene 6"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* === Scene 7 === */}
//       <div
//         ref={scene7Ref}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center opacity-0"
//       >
//         <img
//           src={story_scene_7}
//           alt="Scene 7"
//           className="w-full h-full object-cover rounded-xl shadow-lg"
//         />
//         <img
//           ref={charRef}
//           src={char_1}
//           alt="Character"
//           className="absolute -bottom-4 left-16 w-[500px] h-[500px] object-contain opacity-0 z-30"
//         />
//         <img
//           ref={charAltRef}
//           src={char_1_1}
//           alt="Character Alt"
//           className="absolute bottom-4 left-16 w-[650px] h-[650px] object-contain opacity-0 z-30"
//         />
//         <div
//           ref={scene7TextRef}
//           className="absolute bottom-6 left-6 z-40 opacity-0"
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene explanation text 7 goes here</p>
//           </div>
//         </div>
//       </div>

//       {/* === Scene 8 === */}
//       <div className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center overflow-visible pointer-events-none">
//         <img
//           ref={scene8BgRef}
//           src={story_scene_8_bg_1}
//           alt="Scene 8 Background"
//           className="absolute object-contain scale-x-[180%] scale-y-[150%] opacity-0"
//           style={{ right: 0, left: "auto" }}
//         />
//         <div
//           ref={scene8TextRef}
//           className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene explanation text 8 goes here</p>
//           </div>
//         </div>
//         <img
//           ref={scene8CharRef}
//           src={story_scene_8_char}
//           alt="Character on Car"
//           className="absolute object-fill opacity-0"
//         />
//       </div>

//       {/* === Quiz === */}
//       <QuizQuestionModal
//         isVisible={showQuiz}
//         onClose={handleQuizClose}
//         questionId="scene6_q1"
//         question="Why do these steps have grooves anyway?"
//         options={[
//           "To prevent slipping",
//           "For aesthetic design",
//           "To reduce weight",
//           "To channel water"
//         ]}
//         correctIndex={0}
//         reason="Grooves improve traction to reduce the risk of slipping on the steps."
//         backgroundImage={story_scene_6}
//         type="single"
//       />

//       <div
//         id="module-2-spacer"
//         className="h-[150vh] transition-all duration-700 ease-in-out pointer-events-none"
//       ></div>
//     </div>
//   );
// };

// export default Module2;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   story_scene_6,
//   story_scene_7,
//   char_1,
//   char_1_1,
//   story_scene_8_char,
//   story_scene_8_bg_1
// } from "../../../assets/images/avatar";

// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module2 = ({ lenisInstance }) => {
//   const containerRef = useRef(null);
//   const scene6Ref = useRef(null);
//   const scene7Ref = useRef(null);
//   const charRef = useRef(null);
//   const charAltRef = useRef(null);
//   const scene7TextRef = useRef(null);
//   const scene8BgRef = useRef(null);
//   const scene8CharRef = useRef(null);
//   const scene8TextRef = useRef(null);

//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   const { submitResponse } = useQuizProgress();

//   const masterTimelineRef = useRef(null);
//   const storedProgressRef = useRef(null);
//   const isQuizActiveRef = useRef(false);
//   const moduleScrollTriggersRef = useRef([]);

//   // STEP 1: Animate Scene 6 and PAUSE everything (timeline + scroll) at quiz
//   useEffect(() => {
//     if (!lenisInstance) return;

//     const master = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=5000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1
//       }
//     });

//     masterTimelineRef.current = master;

//     const triggers = ScrollTrigger.getAll().filter(
//       (trigger) => trigger.trigger === containerRef.current
//     );
//     moduleScrollTriggersRef.current = triggers;

//     // === Scene 6 ===
//     // === Scene 6 ===
//     master.fromTo(
//       scene6Ref.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1 }
//     );

//     // Show quiz as soon as Scene 6 is fully visible
//     master.to(
//       {},
//       {
//         duration: 0.1,
//         onComplete: () => {
//           if (!quizCompleted && !isQuizActiveRef.current) {
//             isQuizActiveRef.current = true;
//             storedProgressRef.current = master.progress();

//             setShowQuiz(true);

//             master.pause();
//             lenisInstance?.stop();
//           }
//         }
//       }
//     );

//     return () => {
//       moduleScrollTriggersRef.current.forEach((t) => t.kill());
//       master.kill();
//     };
//   }, [quizCompleted, lenisInstance]);

//   // STEP 2: Inject Scene 7 + 8 only after quiz completes
//   useEffect(() => {
//     if (
//       quizCompleted &&
//       masterTimelineRef.current &&
//       storedProgressRef.current !== null
//     ) {
//       const sceneTimeline = gsap.timeline();

//       // Immediately fade Scene 6 out
//       sceneTimeline.to(scene6Ref.current, {
//         opacity: 0,
//         duration: 1
//       });

//       // === Scene 7 ===
//       sceneTimeline.set(scene7Ref.current, { opacity: 0 });
//       sceneTimeline.to(scene7Ref.current, { opacity: 1, duration: 1 });

//       sceneTimeline.fromTo(
//         charRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 0.5 }
//       );
//       sceneTimeline.to(charRef.current, { x: 80, y: -20, duration: 1.2 });
//       sceneTimeline.to(charRef.current, { opacity: 0, duration: 0.2 });

//       sceneTimeline.set(charAltRef.current, { x: 80, y: 10 });
//       sceneTimeline.fromTo(
//         charAltRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 0.3 }
//       );
//       sceneTimeline.to(charAltRef.current, { x: 150, y: 0, duration: 1.5 });

//       sceneTimeline.fromTo(
//         scene7TextRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 1 }
//       );
//       sceneTimeline.to(scene7TextRef.current, { opacity: 0, duration: 1 });
//       sceneTimeline.to(scene7Ref.current, { opacity: 0, duration: 1.5 });

//       // === Scene 8 ===
//       sceneTimeline.set(scene8BgRef.current, { x: "0%", opacity: 0 });
//       sceneTimeline.to(scene8BgRef.current, { opacity: 1, duration: 2 });

//       sceneTimeline.fromTo(
//         scene8CharRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 2 }
//       );
//       sceneTimeline.to(scene8BgRef.current, { x: "30%", duration: 2 });

//       sceneTimeline.fromTo(
//         scene8TextRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 1 }
//       );
//       sceneTimeline.to(scene8TextRef.current, { opacity: 0, duration: 1 });

//       sceneTimeline.to(scene8CharRef.current, {
//         opacity: 0,
//         scale: 0.9,
//         duration: 1
//       });
//       sceneTimeline.to(scene8BgRef.current, {
//         opacity: 0,
//         scale: 1.05,
//         duration: 1
//       });

//       // Finally resume scroll
//       sceneTimeline.call(() => {
//         lenisInstance?.start();
//       });
//     }
//   }, [quizCompleted]);

//   const handleQuizClose = (response, isCorrect) => {
//     setShowQuiz(false);
//     setQuizCompleted(true);

//     // Resume scroll is already handled after quizCompleted effect
//     setTimeout(() => {
//       submitResponse({
//         questionId: "scene6_q1",
//         response: response,
//         correctAnswer: "To prevent slipping"
//       });
//     }, 1000);
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-2"
//       className="relative w-full h-screen text-white lowercase bg-black"
//     >
//       {/* === Scene 6 === */}
//       <div
//         ref={scene6Ref}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
//       >
//         <img
//           src={story_scene_6}
//           alt="Scene 6"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* === Scene 7 === */}
//       <div
//         ref={scene7Ref}
//         className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center opacity-0"
//       >
//         <img
//           src={story_scene_7}
//           alt="Scene 7"
//           className="w-full h-full object-cover"
//         />
//         <img
//           ref={charRef}
//           src={char_1}
//           alt="Character"
//           className="absolute -bottom-4 left-16 w-[500px] h-[500px] object-contain opacity-0 z-30"
//         />
//         <img
//           ref={charAltRef}
//           src={char_1_1}
//           alt="Character Alt"
//           className="absolute bottom-4 left-16 w-[650px] h-[650px] object-contain opacity-0 z-30"
//         />
//         <div
//           ref={scene7TextRef}
//           className="absolute bottom-6 left-6 z-40 opacity-0"
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene explanation text 7 goes here</p>
//           </div>
//         </div>
//       </div>

//       {/* === Scene 8 === */}
//       <div className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center overflow-visible pointer-events-none">
//         <img
//           ref={scene8BgRef}
//           src={story_scene_8_bg_1}
//           alt="Scene 8 Background"
//           className="absolute object-contain scale-x-[180%] scale-y-[150%] opacity-0"
//           style={{ right: 0, left: "auto" }}
//         />
//         <img
//           ref={scene8CharRef}
//           src={story_scene_8_char}
//           alt="Scene 8 Character"
//           className="absolute object-fill opacity-0"
//         />
//         <div
//           ref={scene8TextRef}
//           className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene explanation text 8 goes here</p>
//           </div>
//         </div>
//       </div>

//       {/* === Quiz === */}
//       <QuizQuestionModal
//         isVisible={showQuiz}
//         onClose={handleQuizClose}
//         questionId="scene6_q1"
//         question="Why do these steps have grooves anyway?"
//         options={[
//           "To prevent slipping",
//           "For aesthetic design",
//           "To reduce weight",
//           "To channel water"
//         ]}
//         correctIndex={0}
//         reason="Grooves improve traction to reduce the risk of slipping on the steps."
//         backgroundImage={story_scene_6}
//         type="single"
//       />
//     </div>
//   );
// };

// export default Module2;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   story_scene_6,
//   story_scene_7,
//   char_1,
//   char_1_1,
//   story_scene_8_char,
//   story_scene_8_bg_1
// } from "../../../assets/images/avatar";

// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuiz } from "../../../context/QuizContext";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module2 = ({ lenisInstance }) => {
//   const containerRef = useRef(null);
//   const scene6Ref = useRef(null);
//   const scene7Ref = useRef(null);
//   const charRef = useRef(null);
//   const charAltRef = useRef(null);
//   const scene7TextRef = useRef(null);
//   const scene8BgRef = useRef(null);
//   const scene8CharRef = useRef(null);
//   const scene8TextRef = useRef(null);

//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   const { submitResponse } = useQuizProgress();
//   const masterTimelineRef = useRef(null);
//   const storedProgressRef = useRef(null);
//   const isQuizActiveRef = useRef(false);

//   useEffect(() => {
//     if (!lenisInstance) return;

//     const master = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=4000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     masterTimelineRef.current = master;

//     // === Scene 6 ===
//     master.fromTo(
//       scene6Ref.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1 }
//     );

//     // Quiz trigger point
//     master.add(() => {
//       if (!quizCompleted && !isQuizActiveRef.current) {
//         console.log("🎯 Quiz trigger - pausing timeline");

//         storedProgressRef.current = master.progress();
//         isQuizActiveRef.current = true;
//         master.pause();

//         setTimeout(() => setShowQuiz(true), 50);
//       }
//     });

//     // Continue Scene 6
//     master.to(scene6Ref.current, { opacity: 0.3, duration: 1 });
//     master.set(scene6Ref.current, { display: "none" });

//     // === Scene 7 ===
//     const scene7 = gsap.timeline();
//     scene7.fromTo(
//       scene7Ref.current,
//       { opacity: 0, y: 100 },
//       { opacity: 1, y: 0, duration: 1 }
//     );
//     scene7
//       .to(charRef.current, { opacity: 1, duration: 0.5 })
//       .to(charRef.current, { x: 80, y: -20, duration: 1.6 })
//       .to(charRef.current, { opacity: 0, duration: 0.1 });
//     scene7.set(charAltRef.current, { x: 80, y: 10 });
//     scene7
//       .to(charAltRef.current, { opacity: 1, duration: 0.2 })
//       .to(charAltRef.current, { x: 150, y: 0, duration: 1.6 });
//     scene7.to(scene7TextRef.current, { opacity: 1, duration: 1 });
//     scene7.to(scene7TextRef.current, { opacity: 0, duration: 1 });
//     scene7.to(scene7Ref.current, { opacity: 0, duration: 1.5 });

//     master.add(scene7);

//     // === Scene 8 ===
//     master.set(scene8BgRef.current, { x: "0%", opacity: 0 });
//     master.to(scene8BgRef.current, {
//       opacity: 1,
//       duration: 2,
//       ease: "power2.inOut"
//     });
//     master.fromTo(
//       scene8CharRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 2.5, ease: "power2.inOut" }
//     );
//     master.to(scene8BgRef.current, {
//       x: "30%",
//       duration: 2,
//       ease: "power2.inOut"
//     });
//     master.set(scene8TextRef.current, { opacity: 0 });
//     master.to(scene8TextRef.current, {
//       opacity: 1,
//       duration: 1,
//       ease: "power2.out"
//     });
//     master.to(scene8TextRef.current, {
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out"
//     });
//     master.to(scene8CharRef.current, {
//       opacity: 0,
//       scale: 0.9,
//       duration: 1,
//       ease: "power2.inOut"
//     });
//     master.to(
//       scene8BgRef.current,
//       { opacity: 0, scale: 1.05, duration: 1, ease: "power2.inOut" },
//       "<"
//     );

//     return () => {
//       master.kill();
//     };
//   }, [quizCompleted, lenisInstance]);

//   // Resume timeline when quiz completes
//   useEffect(() => {
//     if (
//       quizCompleted &&
//       masterTimelineRef.current &&
//       storedProgressRef.current !== null
//     ) {
//       console.log("▶️ Resuming timeline from:", storedProgressRef.current);

//       const master = masterTimelineRef.current;
//       master.progress(storedProgressRef.current);
//       master.resume();
//       isQuizActiveRef.current = false;
//     }
//   }, [quizCompleted]);

//   // Simple quiz submission without complex state management
//   const handleQuizClose = (response, isCorrect) => {
//     console.log("📝 Quiz submitted:", response, isCorrect);

//     setShowQuiz(false);
//     setQuizCompleted(true);

//     // Don't call submitResponse immediately - this causes the scroll reset
//     // Instead, call it after a delay to let the timeline resume first
//     setTimeout(() => {
//       submitResponse({
//         questionId: "scene6_q1",
//         response: response,
//         correctAnswer: "To prevent slipping"
//       });
//     }, 1000); // Wait 1 second for timeline to resume
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-2"
//       className="relative w-full h-screen text-white lowercase bg-black"
//     >
//       {/* === Scene 6 === */}
//       <div
//         ref={scene6Ref}
//         className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center"
//       >
//         <img
//           src={story_scene_6}
//           alt="Story Scene 6"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* === Scene 7 === */}
//       <div
//         ref={scene7Ref}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center opacity-0"
//       >
//         <img
//           src={story_scene_7}
//           alt="Scene 7"
//           className="w-full h-full object-cover rounded-xl shadow-lg"
//         />
//         <img
//           ref={charRef}
//           src={char_1}
//           alt="Character"
//           className="absolute -bottom-4 left-16 w-[500px] h-[500px] object-contain opacity-0 z-30"
//         />
//         <img
//           ref={charAltRef}
//           src={char_1_1}
//           alt="Character Alt"
//           className="absolute bottom-4 left-16 w-[650px] h-[650px] object-contain opacity-0 z-30"
//         />
//         <div
//           ref={scene7TextRef}
//           className="absolute bottom-6 left-6 z-40 opacity-0"
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene explanation text 7 goes here</p>
//           </div>
//         </div>
//       </div>

//       {/* === Scene 8 === */}
//       <div className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center overflow-visible pointer-events-none">
//         <img
//           ref={scene8BgRef}
//           src={story_scene_8_bg_1}
//           alt="Scene 8 Background"
//           className="absolute object-contain scale-x-[180%] scale-y-[150%] opacity-0"
//           style={{ right: 0, left: "auto" }}
//         />
//         <div
//           ref={scene8TextRef}
//           className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene explanation text 8 goes here</p>
//           </div>
//         </div>
//         <img
//           ref={scene8CharRef}
//           src={story_scene_8_char}
//           alt="Character on Car"
//           className="absolute object-fill opacity-0"
//         />
//       </div>

//       {/* === Quiz === */}
//       <QuizQuestionModal
//         isVisible={showQuiz}
//         onClose={handleQuizClose}
//         questionId="scene6_q1"
//         question="Why do these steps have grooves anyway?"
//         options={[
//           "To prevent slipping",
//           "For aesthetic design",
//           "To reduce weight",
//           "To channel water"
//         ]}
//         correctIndex={0}
//         reason="Grooves improve traction to reduce the risk of slipping on the steps."
//         backgroundImage={story_scene_6}
//         type="single"
//       />

//       <div
//         id="module-2-spacer"
//         className="h-[150vh] transition-all duration-700 ease-in-out pointer-events-none"
//       ></div>
//     </div>
//   );
// };

// export default Module2;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   story_scene_6,
//   story_scene_7,
//   char_1,
//   char_1_1,
//   story_scene_8_char,
//   story_scene_8_bg_1
// } from "../../../assets/images/avatar";

// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";
// import { module3ScrollTriggerRef } from "./Module3";

// gsap.registerPlugin(ScrollTrigger);

// const Module2 = () => {
//   const containerRef = useRef(null);
//   const scene6Ref = useRef(null);
//   const scene7Ref = useRef(null);
//   const charRef = useRef(null);
//   const charAltRef = useRef(null);
//   const scene7TextRef = useRef(null);
//   const scene8BgRef = useRef(null);
//   const scene8CharRef = useRef(null);
//   const scene8TextRef = useRef(null);

//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   const { submitResponse } = useQuizProgress();
//   const masterTimelineRef = useRef(null);
//   const scrollTriggerRef = useRef(null);

//   useEffect(() => {
//     gsap.set(
//       [
//         scene7Ref.current,
//         charRef.current,
//         charAltRef.current,
//         scene7TextRef.current
//       ],
//       { opacity: 0, pointerEvents: "none" }
//     );

//     gsap.set(
//       [scene8BgRef.current, scene8CharRef.current, scene8TextRef.current],
//       { opacity: 0 }
//     );

//     const tl = gsap.timeline();
//     masterTimelineRef.current = tl;

//     scrollTriggerRef.current = ScrollTrigger.create({
//       animation: tl,
//       trigger: containerRef.current,
//       start: "top top",
//       end: "+=6000",
//       scrub: 1.5,
//       pin: true,
//       anticipatePin: 1
//     });

//     // Scene 6
//     tl.fromTo(scene6Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 });
//     tl.to(scene6Ref.current, { scale: 1.05, duration: 1.5 });

//     tl.call(() => {
//       if (!quizCompleted) {
//         setShowQuiz(true);
//         scrollTriggerRef.current?.disable();
//         document.body.style.overflow = "hidden";
//       }
//     });

//     tl.addPause();

//     // Continue rest of the timeline if quiz was done
//     tl.to(scene6Ref.current, { opacity: 0, duration: 1 });

//     // Scene 7
//     tl.fromTo(
//       scene7Ref.current,
//       { opacity: 0, y: 100 },
//       { opacity: 1, y: 0, duration: 1.5 }
//     );
//     tl.to(charRef.current, { opacity: 1, duration: 0.5 });
//     tl.to(charRef.current, { x: 80, y: -20, duration: 1.6 });
//     tl.to(charRef.current, { opacity: 0, duration: 0.1 });
//     tl.set(charAltRef.current, { x: 80, y: 10 });
//     tl.to(charAltRef.current, { opacity: 1, duration: 0.2 });
//     tl.to(charAltRef.current, { x: 150, y: 0, duration: 1.6 });
//     tl.to(scene7TextRef.current, { opacity: 1, duration: 1 });
//     tl.to(scene7TextRef.current, { opacity: 0, duration: 1 }, "+=0.5");
//     tl.to([scene7Ref.current, charAltRef.current], {
//       opacity: 0,
//       duration: 1.5
//     });

//     // Scene 8
//     tl.set(scene8BgRef.current, { x: "0%", opacity: 0 });
//     tl.to(scene8BgRef.current, { opacity: 1, duration: 2 });
//     tl.fromTo(
//       scene8CharRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 2.5 },
//       "<0.5"
//     );
//     tl.to(scene8BgRef.current, { x: "30%", duration: 2 });
//     tl.to(scene8TextRef.current, { opacity: 1, duration: 1 });
//     tl.to(scene8TextRef.current, { opacity: 0, duration: 1 }, "+=1");
//     tl.to(scene8CharRef.current, { opacity: 0, scale: 0.9, duration: 1 });
//     tl.to(scene8BgRef.current, { opacity: 0, scale: 1.05, duration: 1 }, "<");

//     // // Enable Module 3
//     // tl.call(() => {
//     //   module3ScrollTriggerRef.current?.enable();
//     // });

//     return () => {
//       // scrollTriggerRef.current?.kill();
//       // tl.kill();
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       tl.kill();
//     };
//   }, [quizCompleted]);

//   useEffect(() => {
//     if (quizCompleted && masterTimelineRef.current) {
//       document.body.style.overflow = "auto";
//       requestAnimationFrame(() => {
//         masterTimelineRef.current.play();
//         ScrollTrigger.refresh();
//       });
//     }
//   }, [quizCompleted]);

//   const handleQuizClose = (response, isCorrect) => {
//     setShowQuiz(false);
//     setQuizCompleted(true);
//     submitResponse({
//       questionId: "scene6_q1",
//       response: response,
//       correctAnswer: "To prevent slipping"
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-2"
//       className="relative w-full h-screen text-white lowercase bg-black"
//     >
//       {/* === Scene 6 === */}
//       <div
//         ref={scene6Ref}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
//       >
//         <img
//           src={story_scene_6}
//           alt="Scene 6"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* === Scene 7 === */}
//       <div
//         ref={scene7Ref}
//         className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center opacity-0"
//       >
//         <img
//           src={story_scene_7}
//           alt="Scene 7"
//           className="w-full h-full object-cover"
//         />
//         <img
//           ref={charRef}
//           src={char_1}
//           alt="Char"
//           className="absolute -bottom-4 left-16 w-[500px] h-[500px] object-contain opacity-0 z-30"
//         />
//         <img
//           ref={charAltRef}
//           src={char_1_1}
//           alt="Char Alt"
//           className="absolute bottom-4 left-16 w-[650px] h-[650px] object-contain opacity-0 z-30"
//         />
//         <div
//           ref={scene7TextRef}
//           className="absolute bottom-6 left-6 z-40 opacity-0"
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene 7 text goes here</p>
//           </div>
//         </div>
//       </div>

//       {/* === Scene 8 === */}
//       <div className="absolute top-0 left-0 w-full h-full z-30 flex items-center justify-center overflow-visible pointer-events-none">
//         <img
//           ref={scene8BgRef}
//           src={story_scene_8_bg_1}
//           alt="Scene 8 BG"
//           className="absolute object-contain scale-x-[180%] scale-y-[150%] opacity-0"
//           style={{ right: 0 }}
//         />
//         <div
//           ref={scene8TextRef}
//           className="absolute bottom-6 left-6 z-40 opacity-0 pointer-events-none"
//         >
//           <div className="bg-black/80 text-white p-4 rounded-md w-fit">
//             <p>Scene 8 text goes here</p>
//           </div>
//         </div>
//         <img
//           ref={scene8CharRef}
//           src={story_scene_8_char}
//           alt="Scene 8 Char"
//           className="absolute object-fill opacity-0"
//         />
//       </div>

//       {/* === Quiz === */}
//       {showQuiz && (
//         <QuizQuestionModal
//           isVisible={showQuiz}
//           onClose={handleQuizClose}
//           questionId="scene6_q1"
//           question="Why do these steps have grooves anyway?"
//           options={[
//             "To prevent slipping",
//             "For aesthetic design",
//             "To reduce weight",
//             "To channel water"
//           ]}
//           correctIndex={0}
//           reason="Grooves improve traction to reduce the risk of slipping on the steps."
//           backgroundImage={story_scene_6}
//           type="single"
//         />
//       )}
//       {/* Spacer for scroll to reach Module 3 */}
//       {/* <div className="h-[120vh] bg-transparent w-full"></div> */}
//     </div>
//   );
// };

// export default Module2;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { story_scene_6 } from "../../../assets/images/avatar";
// import QuizQuestionModal from "../QuizQuestionModal";
// import { useQuizProgress } from "../../../hooks/useQuizProgress";

// gsap.registerPlugin(ScrollTrigger);

// const Module2 = () => {
//   const containerRef = useRef(null);
//   const scene6Ref = useRef(null);
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const { submitResponse } = useQuizProgress();

//   // Prevent scroll and touch
//   const preventDefault = (e) => e.preventDefault();

//   const disableScrollEvents = () => {
//     document.body.style.overflow = "hidden";
//     const scrollContainer = document.getElementById("module-2");
//     if (scrollContainer) scrollContainer.style.overflow = "hidden";

//     window.addEventListener("wheel", preventDefault, { passive: false });
//     window.addEventListener("touchmove", preventDefault, { passive: false });
//   };

//   const enableScrollEvents = () => {
//     document.body.style.overflow = "auto";
//     const scrollContainer = document.getElementById("module-2");
//     if (scrollContainer) scrollContainer.style.overflow = "auto";

//     window.removeEventListener("wheel", preventDefault);
//     window.removeEventListener("touchmove", preventDefault);
//   };

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=2000",
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//         markers: false
//       }
//     });

//     // ❌ Removed intro animation (opacity and initial scaling)

//     tl.call(() => {
//       if (!quizCompleted) {
//         setShowQuiz(true);
//         disableScrollEvents();
//         tl.pause();
//       }
//     });

//     // Outro animation (keep if you still want fade out)
//     tl.to(scene6Ref.current, { opacity: 0, scale: 1.1, duration: 0.1 });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === containerRef.current) {
//           trigger.kill();
//         }
//       });
//       tl.kill();
//       enableScrollEvents();
//     };
//   }, [quizCompleted]);

//   const handleQuizClose = () => {
//     setShowQuiz(false);
//     setQuizCompleted(true);
//     enableScrollEvents();
//   };

//   return (
//     <div
//       ref={containerRef}
//       id="module-2"
//       className="relative w-full h-screen text-white lowercase bg-black"
//     >
//       {/* Scene 6 visual */}
//       <div
//         ref={scene6Ref}
//         className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
//       >
//         <img
//           src={story_scene_6}
//           alt="Scene 6"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Modal Quiz */}
//       {showQuiz && (
//         <QuizQuestionModal
//           isVisible={showQuiz}
//           onClose={handleQuizClose}
//           questionId="scene6_q1"
//           question="Why do these steps have grooves anyway?"
//           options={[
//             "To prevent slipping",
//             "For aesthetic design",
//             "To reduce weight",
//             "To channel water"
//           ]}
//           correctIndex={0}
//           reason="Grooves improve traction to reduce the risk of slipping on the steps."
//           backgroundImage={story_scene_6}
//           type="single"
//         />
//       )}
//     </div>
//   );
// };

// export default Module2;

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { story_scene_6 } from "../../../assets/images/avatar";
import QuizQuestionModal from "../QuizQuestionModal";
import { useQuizProgress } from "../../../hooks/useQuizProgress";

gsap.registerPlugin(ScrollTrigger);

const Module2 = () => {
  const containerRef = useRef(null);
  const scene6Ref = useRef(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { submitResponse } = useQuizProgress();

  // Prevent scroll and touch
  const preventDefault = (e) => e.preventDefault();

  const disableScrollEvents = () => {
    document.body.style.overflow = "hidden";
    const scrollContainer = document.getElementById("module-2");
    if (scrollContainer) scrollContainer.style.overflow = "hidden";

    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
  };

  const enableScrollEvents = () => {
    document.body.style.overflow = "auto";
    const scrollContainer = document.getElementById("module-2");
    if (scrollContainer) scrollContainer.style.overflow = "auto";

    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
  };

  // useEffect(() => {
  //   const scrollContainer = document.getElementById("module-2");

  //   const tl = gsap.timeline({
  //     // scrollTrigger: {
  //     //   trigger: containerRef.current,
  //     //   start: "top top",
  //     //   end: "+=2000",
  //     //   // end: +=${tl.duration() * 1000},
  //     //   scrub: 1.5,
  //     //   pin: true,
  //     //   anticipatePin: 1,
  //     //   markers: false
  //     // }
  //   });

  //   tl.to({}, { duration: 4 });

  //   // tl.fromTo(scene6Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  //   // tl.to(scene6Ref.current, { scale: 1.05, duration: 1.5 });

  //   tl.call(() => {
  //     if (!quizCompleted) {
  //       setShowQuiz(true);
  //       disableScrollEvents();
  //       tl.pause();
  //     }
  //   });

  //   tl.to(scene6Ref.current, { opacity: 0.5, scale: 1.1, duration: 1 });

  //   ScrollTrigger.create({
  //     trigger: containerRef.current,
  //     start: "top top",
  //     end: "+=2000",
  //     // end: +=${tl.duration() * 1000},
  //     scrub: 1.5,
  //     pin: true,
  //     anticipatePin: 1,
  //     markers: false
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => {
  //       if (trigger.trigger === containerRef.current) {
  //         trigger.kill();
  //       }
  //     });
  //     tl.kill();
  //     enableScrollEvents(); // Clean up if unmounted early
  //   };
  // }, [quizCompleted]);

  useEffect(() => {
    const scrollContainer = document.getElementById("module-2");

    const tl = gsap.timeline();

    // Example scene animation
    tl.to(scene6Ref.current, { opacity: 1, duration: 1 }).to(
      scene6Ref.current,
      { scale: 1.05, duration: 1.5 }
    );

    // ScrollTrigger to pin and scrub animations
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=2000",
      scrub: 1.5,
      pin: true,
      anticipatePin: 1,
      markers: false,
      onEnter: () => {
        if (!quizCompleted) {
          setShowQuiz(true);
          disableScrollEvents();
          tl.pause(); // Pause animation when modal opens
        }
      }
    });

    return () => {
      trigger.kill();
      tl.kill();
      enableScrollEvents();
    };
  }, [quizCompleted]);

  const handleQuizClose = () => {
    // const handleQuizClose = (response, isCorrect) => {
    setShowQuiz(false);
    setQuizCompleted(true);
    enableScrollEvents(); // Resume scroll
    gsap.globalTimeline.resume();

    // submitResponse({
    //   questionId: "scene6_q1",
    //   response: response,
    //   correctAnswer: "To prevent slipping"
    // });
  };

  return (
    <div
      ref={containerRef}
      id="module-2"
      className="relative w-full h-screen text-white lowercase bg-black"
    >
      {/* Scene 6 visual */}
      <div
        ref={scene6Ref}
        className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
      >
        <img
          src={story_scene_6}
          alt="Scene 6"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Modal Quiz */}
      {showQuiz && (
        <QuizQuestionModal
          isVisible={showQuiz}
          onClose={handleQuizClose}
          questionId="scene6_q1"
          question="Why do these steps have grooves anyway?"
          options={[
            "To prevent slipping",
            "For aesthetic design",
            "To reduce weight",
            "To channel water"
          ]}
          correctIndex={0}
          reason="Grooves improve traction to reduce the risk of slipping on the steps."
          backgroundImage={story_scene_6}
          type="single"
        />
      )}
    </div>
  );
};

export default Module2;
