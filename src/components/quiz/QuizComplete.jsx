// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useQuizProgress } from '../../hooks/useQuizProgress';
// import { gsap } from 'gsap';
// import { Trophy, RotateCcw, Home, Star } from 'lucide-react';

// export default function QuizComplete() {
//   const navigate = useNavigate();
//   const { score, totalQuestions, resetQuiz, getProgress } = useQuizProgress();
//   const { scorePercentage } = getProgress();
//   const containerRef = useRef(null);
//   const celebrationRef = useRef(null);

//   useEffect(() => {
//     // Celebration animation
//     const tl = gsap.timeline();

//     tl.from(containerRef.current, {
//       scale: 0.5,
//       opacity: 0,
//       duration: 1,
//       ease: "back.out(1.7)"
//     })
//     .from(celebrationRef.current.children, {
//       y: -100,
//       opacity: 0,
//       duration: 0.8,
//       stagger: 0.1,
//       ease: "bounce.out"
//     }, "-=0.5");

//     // Floating stars animation
//     gsap.to(celebrationRef.current.children, {
//       y: -20,
//       duration: 2,
//       ease: "power2.inOut",
//       repeat: -1,
//       yoyo: true,
//       stagger: 0.2
//     });
//   }, []);

//   const getScoreMessage = () => {
//     if (scorePercentage >= 90) return "Outstanding! You're a quiz master!";
//     if (scorePercentage >= 80) return "Excellent work! Keep it up!";
//     if (scorePercentage >= 70) return "Good job! You're getting there!";
//     if (scorePercentage >= 60) return "Not bad! Room for improvement!";
//     return "Keep practicing! You'll get better!";
//   };

//   const getScoreColor = () => {
//     if (scorePercentage >= 80) return "text-evolve-inchworm";
//     if (scorePercentage >= 60) return "text-evolve-yellow";
//     return "text-evolve-flame";
//   };

//   const handleRetryQuiz = () => {
//     resetQuiz();
//   };

//   const handleBackToSelection = () => {
//     navigate('/quiz-selection');
//   };

//   return (
//     <div className="min-h-screen bg-evolve-black flex items-center justify-center px-4 relative overflow-hidden">
//       {/* Background decorations */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-20 w-32 h-32 bg-evolve-lavender-indigo rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-20 w-40 h-40 bg-evolve-heliotrope rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-evolve-inchworm rounded-full blur-2xl"></div>
//       </div>

//       <div ref={containerRef} className="max-w-2xl w-full text-center relative z-10">
//         {/* Celebration icons */}
//         <div ref={celebrationRef} className="flex justify-center gap-8 mb-8">
//           <Star className="w-12 h-12 text-evolve-yellow" />
//           <Trophy className="w-16 h-16 text-evolve-inchworm" />
//           <Star className="w-12 h-12 text-evolve-yellow" />
//         </div>

//         {/* Main content */}
//         <div className="bg-evolve-charleston-green p-12 rounded-25px shadow-button-popped
//                       border border-evolve-arsenic">
//           <h1 className="text-6xl font-bricolage font-bold text-evolve-white mb-6">
//             Quest Complete!
//           </h1>

//           <p className="text-xl text-evolve-gray font-montserrat mb-8">
//             {getScoreMessage()}
//           </p>

//           {/* Score display */}
//           <div className="bg-evolve-black p-8 rounded-20px mb-8">
//             <div className="flex items-center justify-center gap-8 mb-4">
//               <div className="text-center">
//                 <div className="text-4xl font-bricolage font-bold text-evolve-white mb-2">
//                   {score}
//                 </div>
//                 <div className="text-evolve-gray font-montserrat">Correct</div>
//               </div>
//               <div className="text-6xl text-evolve-gray">/</div>
//               <div className="text-center">
//                 <div className="text-4xl font-bricolage font-bold text-evolve-white mb-2">
//                   {totalQuestions}
//                 </div>
//                 <div className="text-evolve-gray font-montserrat">Total</div>
//               </div>
//             </div>

//             <div className={`text-5xl font-bricolage font-bold ${getScoreColor()} mb-4`}>
//               {Math.round(scorePercentage)}%
//             </div>

//             {/* Progress bar */}
//             <div className="w-full h-4 bg-evolve-arsenic rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-gradient-to-r from-evolve-lavender-indigo to-evolve-heliotrope
//                          transition-all duration-1000 ease-out"
//                 style={{ width: `${scorePercentage}%` }}
//               />
//             </div>
//           </div>

//           {/* Action buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={handleRetryQuiz}
//               className="flex items-center justify-center gap-3 bg-evolve-lavender-indigo
//                        hover:bg-evolve-lavender-indigo-2 text-white font-montserrat font-semibold
//                        py-4 px-8 rounded-18px transition-all duration-300 transform hover:scale-105
//                        shadow-button-hover hover:shadow-button-top"
//             >
//               <RotateCcw className="w-5 h-5" />
//               Try Again
//             </button>

//             <button
//               onClick={handleBackToSelection}
//               className="flex items-center justify-center gap-3 bg-evolve-charleston-green
//                        hover:bg-evolve-arsenic text-evolve-white font-montserrat font-semibold
//                        py-4 px-8 rounded-18px transition-all duration-300 transform hover:scale-105
//                        shadow-button-hover hover:shadow-button-top border border-evolve-arsenic"
//             >
//               <Home className="w-5 h-5" />
//               Back to Menu
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useQuizProgress } from "../../hooks/useQuizProgress";
// import { gsap } from "gsap";
// import { Trophy, RotateCcw, Home } from "lucide-react";

// export default function QuizComplete() {
//   const navigate = useNavigate();
//   const quizData = useQuizProgress();
//   const containerRef = useRef(null);

//   // ✅ Correct access from quizState
//   const score = quizData.quizState.score || 0;
//   const totalQuestions = quizData.quizState.totalQuestions || 0;
//   const scorePercentage =
//     totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

//   console.log("QuizComplete Data:", {
//     score,
//     totalQuestions,
//     scorePercentage,
//     rawState: quizData
//   });

//   useEffect(() => {
//     if (!containerRef.current) return;

//     gsap.fromTo(
//       containerRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//     );
//   }, []);

//   const getScoreMessage = () => {
//     if (scorePercentage >= 90) return "Outstanding! You're a quiz master!";
//     if (scorePercentage >= 80) return "Excellent work! Keep it up!";
//     if (scorePercentage >= 70) return "Good job! You're getting there!";
//     if (scorePercentage >= 60) return "Not bad! Room for improvement!";
//     return "Keep practicing! You'll get better!";
//   };

//   const getScoreColor = () => {
//     if (scorePercentage >= 80) return "text-green-400";
//     if (scorePercentage >= 60) return "text-yellow-400";
//     return "text-red-400";
//   };

//   const handleRetryQuiz = () => {
//     quizData.resetQuiz();
//   };

//   const handleBackToSelection = () => {
//     navigate("/quiz-selection");
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
//       <div ref={containerRef} className="max-w-2xl w-full text-center">
//         {/* Debug info */}
//         <div className="mb-4 text-gray-400 text-sm border border-gray-600 p-2 rounded">
//           Debug: Score {score}/{totalQuestions} = {Math.round(scorePercentage)}%
//         </div>

//         {/* Title */}
//         <div className="mb-8">
//           <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
//           <h1 className="text-4xl font-bold text-white mb-4">
//             Quest Complete!
//           </h1>
//           <p className="text-xl text-gray-300 mb-8">{getScoreMessage()}</p>
//         </div>

//         {/* Score display */}
//         <div className="bg-gray-800 p-8 rounded-lg mb-8 border border-gray-600">
//           <div className="flex items-center justify-center gap-8 mb-6">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-white mb-2">{score}</div>
//               <div className="text-gray-400">Correct</div>
//             </div>
//             <div className="text-4xl text-gray-400">/</div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-white mb-2">
//                 {totalQuestions}
//               </div>
//               <div className="text-gray-400">Total</div>
//             </div>
//           </div>

//           <div className={`text-5xl font-bold ${getScoreColor()} mb-6`}>
//             {Math.round(scorePercentage)}%
//           </div>

//           {/* Progress bar */}
//           <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
//             <div
//               className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
//               style={{ width: `${scorePercentage}%` }}
//             />
//           </div>
//         </div>

//         {/* Action buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button
//             onClick={handleRetryQuiz}
//             className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700
//                      text-white font-semibold py-3 px-6 rounded-lg transition-colors"
//           >
//             <RotateCcw className="w-5 h-5" />
//             Try Again
//           </button>

//           <button
//             onClick={handleBackToSelection}
//             className="flex items-center justify-center gap-3 bg-gray-600 hover:bg-gray-700
//                      text-white font-semibold py-3 px-6 rounded-lg transition-colors"
//           >
//             <Home className="w-5 h-5" />
//             Back to Menu
//           </button>
//         </div>

//         {/* Test content to ensure rendering */}
//         <div className="mt-8 text-gray-400 text-sm">
//           If you can see this text, the component is rendering correctly.
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useQuizProgress } from "../../hooks/useQuizProgress";
// import { gsap } from "gsap";
// import { ArrowRight } from "lucide-react";
// import {
//   broken_heart,
//   // right_hand,
//   // victory_hand,
//   // crown,
//   start_quiz
// } from "../../assets/images/avatar/index";

// export default function QuizComplete() {
//   const navigate = useNavigate();
//   const quizData = useQuizProgress();
//   const containerRef = useRef(null);

//   const score = quizData.quizState.score || 0;
//   const totalQuestions = quizData.quizState.totalQuestions || 0;

//   useEffect(() => {
//     gsap.fromTo(
//       containerRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1 }
//     );
//   }, []);

//   // ✅ Dynamic image selection based on score
//   const getScoreImage = () => {
//     if (score <= 5) return broken_heart;
//     if (score >= 6 && score <= 7) return broken_heart;
//     // return crown;
//   };

//   const handleRetry = () => quizData.resetQuiz();

//   return (
//     <div className="min-h-screen bg-black p-5 flex flex-col gap-5">
//       <div ref={containerRef} className="w-full flex flex-col gap-5">
//         {/* ✅ First Card */}
//         <div className="rounded-2xl bg-[#C2FD5C] min-h-[420px] bg-section p-8 flex flex-col items-center justify-center text-center space-y-8">
//           <h2 className="text-black text-4xl sm:text-5xl font-bold">
//             your score
//           </h2>

//           {/* ✅ Score with Left & Right Images */}
//           <div className="flex items-center justify-center gap-12">
//             <img src={getScoreImage()} alt="score-left" className="w-16" />
//             <p className="text-black text-6xl font-extrabold">
//               {score}/{totalQuestions}
//             </p>
//             <img
//               src={getScoreImage()}
//               alt="score-right"
//               className="w-16 rotate-180"
//             />
//           </div>

//           <p className="text-black text-xl max-w-lg">
//             🎉 You’ve Reached the Finish Line! <br />
//             Thanks for your efforts, but we needed more of your skills.
//           </p>

//           <button
//             onClick={handleRetry}
//             className="flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all"
//           >
//             Try Again <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>

//         {/* ✅ Second Card */}
//         <div className="relative rounded-2xl bg-[#A35BFB] bg-courses-grid min-h-[250px] p-6 flex items-center justify-center">
//           <h1 className="text-white text-[80px] sm:text-[100px] font-extrabold leading-[0.9] text-center">
//             print it <br /> right!
//           </h1>

//           {/* ✅ Start Quiz Image Button */}
//           <div
//             onClick={() => navigate("/quiz-selection")}
//             className="absolute top-1/2 right-6 transform -translate-y-1/2 cursor-pointer group"
//           >
//             {/* Image container rotates on hover */}
//             <div className="relative w-[120px] h-[120px] transition-transform duration-300 group-hover:rotate-90">
//               <img
//                 src={start_quiz}
//                 alt="start quiz"
//                 className="absolute inset-0 w-full h-full object-contain"
//               />
//               {/* Static Text on top */}
//               <p className="absolute inset-0 flex items-center justify-center text-black font-extrabold text-xl select-none">
//                 start quiz
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useQuizProgress } from "../../hooks/useQuizProgress";
// import { gsap } from "gsap";
// import { ArrowRight } from "lucide-react";
// import {
//   broken_heart,
//   left_finger,
//   right_finger,
//   left_hand,
//   right_hand,
//   start_quiz,
//   mystery_box,
//   objects,
//   thunder_1,
//   thunder_2
// } from "../../assets/images/avatar/index";

// export default function QuizComplete() {
//   const navigate = useNavigate();
//   const quizData = useQuizProgress();
//   const containerRef = useRef(null);

//   const score = quizData.quizState.score || 0;
//   const totalQuestions = quizData.quizState.totalQuestions || 0;

//   useEffect(() => {
//     gsap.fromTo(
//       containerRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1 }
//     );
//   }, []);

//   // ✅ Select images based on score
//   const getScoreImages = () => {
//     if (score <= 5) return { left: broken_heart, right: broken_heart };
//     if (score >= 6 && score <= 7)
//       return { left: left_finger, right: right_finger };
//     return { left: left_hand, right: right_hand };
//   };

//   const { left, right } = getScoreImages();
//   const handleRetry = () => quizData.resetQuiz();

//   return (
//     <div className="min-h-screen bg-black p-5 flex flex-col gap-5">
//       <div ref={containerRef} className="w-full flex flex-col gap-5">
//         {/* ✅ First Card */}
//         <div className="rounded-2xl bg-[#C2FD5C] min-h-[420px] bg-section p-8 flex flex-col items-center justify-center text-center space-y-8">
//           <h2 className="text-black text-4xl sm:text-5xl font-bold">
//             your score!
//           </h2>

//           {/* ✅ Bigger Score Images (Mobile → Desktop) */}
//           <div className="flex items-center justify-center gap-12">
//             <img src={left} alt="score-left" className="w-24 sm:w-[10rem]" />
//             <p className="text-black text-6xl sm:text-7xl lg:text-8xl font-extrabold">
//               {score}/{totalQuestions}
//             </p>
//             <img src={right} alt="score-right" className="w-24 sm:w-[10rem]" />
//           </div>

//           <p className="text-black text-xl max-w-lg leading-snug">
//             🎉 You’ve Reached the Finish Line! <br />
//             Thanks for your efforts, but we needed more of your skills.
//           </p>

//           <button
//             onClick={handleRetry}
//             className="flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all"
//           >
//             Try Again <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>

//         {/* ✅ Second Card with Reduced Padding */}
//         <div className="relative rounded-2xl bg-[#A35BFB] bg-courses-grid min-h-[250px] p-4 sm:p-6 flex items-center justify-center overflow-hidden">
//           {/* ✅ Title with Tighter Line */}
//           <h1 className="text-white text-[70px] sm:text-[100px] font-extrabold leading-[0.8] text-center z-10">
//             print it <br /> right!
//           </h1>

//           {/* ✅ Start Quiz Image Button (Responsive) */}
//           <div
//             onClick={() =>
//               window.open(
//                 "https://evolve-printing-challange.vercel.app/",
//                 "_blank"
//               )
//             }
//             className="absolute top-[70%] sm:top-[50%] right-4 sm:right-[20rem] transform -translate-y-1/2 cursor-pointer group z-20"
//           >
//             <div className="relative w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]">
//               <img
//                 src={start_quiz}
//                 alt="start quiz"
//                 className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:rotate-90 shadow-black "
//               />
//               <p className="absolute inset-0 flex items-center justify-center leading-12 text-black font-extrabold text-lg sm:text-2xl">
//                 start <br />
//                 quiz
//               </p>
//             </div>
//           </div>

//           {/* ✅ Bigger Decorative Images */}
//           <img
//             src={mystery_box}
//             className="absolute top-4 left-4 w-[8rem] sm:w-[10rem] opacity-90"
//             alt=""
//           />
//           <img
//             src={objects}
//             className="absolute bottom-0 left-[10rem] w-[6rem] sm:w-[25rem] opacity-90"
//             alt=""
//           />
//           <img
//             src={thunder_1}
//             className="absolute top-6 left-[32rem] w-12 sm:w-16 opacity-90"
//             alt=""
//           />
//           <img
//             src={thunder_2}
//             className="absolute bottom-4 left-[60rem] w-20 sm:w-18 opacity-90"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizProgress } from "../../hooks/useQuizProgress";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import {
  broken_heart,
  left_bulb,
  right_bulb,
  diamond,
  left_finger,
  right_finger,
  left_hand,
  right_hand,
  start_quiz,
  mystery_box,
  objects,
  thunder_1,
  thunder_2
} from "../../assets/images/avatar/index";

export default function QuizComplete() {
  const navigate = useNavigate();
  const quizData = useQuizProgress();
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const score = quizData.quizState.score || 0;
  const totalQuestions = quizData.quizState.totalQuestions || 0;

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  // ✅ Handle window resize for responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Image selection
  const getScoreImages = () => {
    if (score === 1)
      return { left: broken_heart, right: broken_heart, mobile: broken_heart };
    if (score >= 2 && score <= 3)
      return { left: left_bulb, right: right_bulb, mobile: left_bulb };
    if (score >= 4 && score <= 5)
      return { left: diamond, right: diamond, mobile: diamond };
    if (score >= 6 && score <= 7)
      return { left: left_finger, right: right_finger, mobile: left_finger };
    if (score === 8)
      return { left: left_hand, right: right_hand, mobile: right_hand };
    return { left: broken_heart, right: broken_heart, mobile: broken_heart };
  };

  const { left, right, mobile } = getScoreImages();
  // const handleRetry = () => quizData.resetQuiz();
  const handleRetry = () => {
    window.location.reload(); // ✅ hard reload of the same URL
  };

  return (
    <div className="min-h-screen bg-black p-5 flex flex-col gap-5">
      <div ref={containerRef} className="w-full flex flex-col gap-5">
        {/* ✅ First Card */}
        <div className="rounded-2xl bg-[#C2FD5C] min-h-[420px] bg-section p-8 flex flex-col items-center justify-center text-center space-y-8">
          {isMobile ? (
            <>
              <img src={mobile} alt="score-mobile" className="w-32 mx-auto" />
              <h2 className="text-black text-3xl font-bold lowercase">
                your score
              </h2>
              <p className="text-black text-6xl font-extrabold lowercase">
                {score}/{totalQuestions}
              </p>
              <p className="text-black text-lg max-w-xs leading-snug lowercase">
                🎉 you’ve reached the finish line! thanks for your efforts, but
                we needed more of your skills.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-black text-4xl sm:text-5xl font-bold">
                your score!
              </h2>
              <div className="flex items-center justify-center gap-12">
                <img
                  src={left}
                  alt="score-left"
                  className="w-24 sm:w-[10rem]"
                />
                <p className="text-black text-6xl sm:text-7xl lg:text-8xl font-extrabold">
                  {score}/{totalQuestions}
                </p>
                <img
                  src={right}
                  alt="score-right"
                  className="w-24 sm:w-[10rem]"
                />
              </div>
              <p className="text-black text-xl max-w-lg leading-snug lowercase">
                🎉 you’ve reached the finish line! <br />
                thanks for your efforts, but we needed more of your skills.
              </p>
            </>
          )}

          <button
            onClick={handleRetry}
            className="flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all"
          >
            try again <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* ✅ Second Card */}
        <div className="relative rounded-2xl bg-[#A35BFB] bg-courses-grid min-h-[250px] p-4 sm:p-6 flex items-center justify-center overflow-hidden">
          <h1 className="text-white text-[50px] sm:text-[100px] font-extrabold leading-[0.8] text-center z-10 lowercase">
            print it <br /> right!
          </h1>
          <div
            onClick={() =>
              window.open(
                "https://evolve-printing-challange.vercel.app/",
                "_blank"
              )
            }
            className="absolute top-[70%] sm:top-[50%] right-4 sm:right-[20rem] transform -translate-y-1/2 cursor-pointer group z-20"
          >
            <div className="relative w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]">
              <img
                src={start_quiz}
                alt="start quiz"
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:rotate-90 shadow-black "
              />
              <p className="absolute inset-0 flex items-center justify-center leading-tight text-black font-extrabold text-lg sm:text-2xl lowercase">
                start <br />
                quiz
              </p>
            </div>
          </div>
          {/* Decorative Images */}
          <img
            src={mystery_box}
            className="absolute top-4 left-4 w-[8rem] sm:w-[10rem] opacity-90"
            alt=""
          />
          <img
            src={objects}
            className="absolute bottom-0 left-[10rem] w-[6rem] sm:w-[25rem] opacity-90"
            alt=""
          />
          <img
            src={thunder_1}
            className="absolute top-6 left-[32rem] w-12 sm:w-16 opacity-90"
            alt=""
          />
          <img
            src={thunder_2}
            className="absolute bottom-4 left-[60rem] w-20 sm:w-18 opacity-90"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
