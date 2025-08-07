// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import gsap from "gsap";

// const QuizSelection = () => {
//   const headingRef = useRef(null);
//   const subTextRef = useRef(null);
//   const cardsRef = useRef([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const tl = gsap.timeline({
//         defaults: { ease: "power3.out", duration: 1 }
//       });

//       tl.from(headingRef.current, { y: -50, opacity: 0 })
//         .from(subTextRef.current, { y: 40, opacity: 0 }, "-=0.8")
//         .from(
//           cardsRef.current,
//           {
//             y: 60,
//             opacity: 0,
//             stagger: 0.3
//           },
//           "-=0.7"
//         );
//     }, 0);

//     return () => clearTimeout(timeout);
//   }, []);

//   const handleExternalQuiz = () => {
//     window.open("https://your-deployed-quiz.netlify.app", "_blank");
//   };

//   const handleStoryQuiz = () => {
//     navigate("/quiz/story");
//   };

//   return (
//     <div className="h-screen w-full bg-black text-white lowercase px-6 py-6 flex flex-col justify-center items-center overflow-hidden">
//       {/* Main heading */}
//       <h1
//         ref={headingRef}
//         className="text-[80px] text-evolve-inchworm font-bricolage text-center font-bold mb-4 leading-none"
//       >
//         design in small doses
//       </h1>

//       {/* Subtext */}
//       <p
//         ref={subTextRef}
//         className="text-[40px] leading-[40px] text-center max-w-5xl mx-auto mb-10"
//       >
//         you don’t need a textbook. just curiosity. try a fast quiz and explore
//         one little idea at a time.
//       </p>

//       {/* Quiz Cards */}
//       <div className="grid md:grid-cols-2 gap-8 max-w-7xl w-full px-2">
//         {/* Print it Right! */}
//         <div
//           ref={(el) => (cardsRef.current[0] = el)}
//           className="bg-evolve-lavender-indigo bg-courses-grid bg-cover bg-center p-10 rounded-2xl"
//         >
//           <h2 className="text-[90px] font-extrabold text-white text-center leading-[80%] mb-6">
//             print <br /> it right!
//           </h2>
//           <p className="text-[32px] text-white text-center leading-1 mb-28">
//             a design mission to fix your final sample before the client sees it.
//           </p>
//           <div className="w-fit mx-auto pb-[5px] bg-white rounded-md transition-all duration-300 active:scale-90 -mt-24 sm:-mt-20 md:-mt-24 transform -translate-y-8 sm:translate-y-0">
//             <button
//               className="flex items-center gap-3 font-bold tracking-tight bg-evolve-black text-white rounded-md transition-all duration-300 hover:bg-[#1a1a1a] text-base px-6 py-2 sm:text-lg sm:px-8 sm:py-3 md:text-2xl md:px-10 md:py-3"
//               onClick={handleExternalQuiz}
//             >
//               play
//               <ArrowRight className="w-4 h-4 text-white sm:w-5 sm:h-5 md:w-6 md:h-6" />
//             </button>
//           </div>
//         </div>

//         {/* Seen/Unseen */}
//         <div
//           ref={(el) => (cardsRef.current[1] = el)}
//           className="bg-evolve-lavender-indigo bg-courses-grid bg-cover bg-center p-10 rounded-2xl"
//         >
//           <h2 className="text-[90px] font-extrabold text-white text-center leading-[80%] mb-6">
//             seen/
//             <br />
//             unseen
//           </h2>
//           <p className="text-[32px] text-white text-center leading-1 mb-28">
//             discover the logic behind the ordinary
//           </p>
//           <div className="w-fit mx-auto pb-[5px] bg-white rounded-md transition-all duration-300 active:scale-90 -mt-24 sm:-mt-20 md:-mt-24 transform -translate-y-8 sm:translate-y-0">
//             <button
//               className="flex items-center gap-3 font-bold tracking-tight bg-evolve-black text-white rounded-md transition-all duration-300 hover:bg-[#1a1a1a] text-base px-6 py-2 sm:text-lg sm:px-8 sm:py-3 md:text-2xl md:px-10 md:py-3"
//               onClick={handleStoryQuiz}
//             >
//               play
//               <ArrowRight className="w-4 h-4 text-white sm:w-5 sm:h-5 md:w-6 md:h-6" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizSelection;

// import React, { useEffect, useRef } from "react";
// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const QuizSelection = () => {
//   const headingRef = useRef(null);
//   const subTextRef = useRef(null);
//   const cardsRef = useRef([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Simple animation simulation without GSAP
//     const animateElement = (element, delay = 0) => {
//       if (element) {
//         element.style.opacity = "0";
//         element.style.transform = "translateY(30px)";

//         setTimeout(() => {
//           element.style.transition = "all 1s ease-out";
//           element.style.opacity = "1";
//           element.style.transform = "translateY(0)";
//         }, delay);
//       }
//     };

//     const timeout = setTimeout(() => {
//       animateElement(headingRef.current, 0);
//       animateElement(subTextRef.current, 200);
//       cardsRef.current.forEach((card, index) => {
//         animateElement(card, 500 + index * 300);
//       });
//     }, 100);

//     return () => clearTimeout(timeout);
//   }, []);

//   const handleExternalQuiz = () => {
//     window.open("https://evolve-printing-challange.vercel.app/", "_blank");
//   };

//   const handleStoryQuiz = () => {
//     navigate("/quiz/story");
//   };

//   return (
//     <div className="min-h-screen w-full bg-black text-white lowercase px-3 py-4 sm:px-6 sm:py-6 flex flex-col justify-center items-center overflow-hidden">
//       {/* Main heading */}
//       <h1
//         ref={headingRef}
//         className="text-[32px] sm:text-[80px] text-evolve-inchworm font-bricolage text-center font-bold mb-2 sm:mb-4 leading-none"
//       >
//         design in small doses
//       </h1>

//       {/* Subtext */}
//       <p
//         ref={subTextRef}
//         className="text-[16px] sm:text-[40px] sm:leading-[40px] text-center max-w-xs sm:max-w-5xl mx-auto mb-6 sm:mb-10 px-2"
//       >
//         you don't need a textbook. just curiosity. try a fast quiz and explore
//         one little idea at a time.
//       </p>

//       {/* Quiz Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-sm sm:max-w-7xl w-full px-2">
//         {/* Print it Right! */}
//         <div
//           ref={(el) => (cardsRef.current[0] = el)}
//           className="bg-evolve-lavender-indigo bg-courses-grid bg-cover bg-center p-4 sm:p-10 rounded-xl sm:rounded-2xl"
//         >
//           <h2 className="text-[36px] sm:text-[90px] font-extrabold text-white text-center leading-[80%] mb-3 sm:mb-6">
//             print <br /> it right!
//           </h2>
//           <p className="text-[14px] sm:text-[32px] text-white text-center sm:leading-1 mb-3 sm:mb-[10rem]">
//             a design mission to fix your final sample before the client sees it.
//           </p>
//           <div className="w-fit mx-auto pb-[3px] sm:pb-[5px] bg-white rounded-md transition-all duration-300 active:scale-90 sm:-mt-24 sm:transform sm:-translate-y-8">
//             <button
//               className="flex items-center gap-2 sm:gap-3 font-bold tracking-tight bg-evolve-black text-white rounded-md transition-all duration-300 hover:bg-[#1a1a1a] text-sm px-4 py-2 sm:text-2xl sm:px-10 sm:py-3"
//               onClick={handleExternalQuiz}
//             >
//               play
//               <ArrowRight className="w-3 h-3 sm:w-6 sm:h-6 text-white" />
//             </button>
//           </div>
//         </div>

//         {/* Seen/Unseen */}
//         <div
//           ref={(el) => (cardsRef.current[1] = el)}
//           className="bg-evolve-lavender-indigo bg-courses-grid bg-cover bg-center p-4 sm:p-8 rounded-xl sm:rounded-2xl"
//         >
//           <h2 className="text-[36px] sm:text-[90px] font-extrabold text-white text-center leading-[80%] mb-3 sm:mb-6">
//             seen/
//             <br />
//             unseen
//           </h2>
//           <p className="text-[14px] sm:text-[32px] text-white text-center sm:leading-1 mb-3 sm:mb-[10rem]">
//             discover the logic behind the ordinary
//           </p>
//           <div className="w-fit mx-auto pb-[2px] sm:pb-[5px] bg-white rounded-md transition-all duration-300 active:scale-90 sm:-mt-24 sm:transform sm:-translate-y-8">
//             <button
//               className="flex items-center gap-2 sm:gap-3 font-bold tracking-tight bg-evolve-black text-white rounded-md transition-all duration-300 hover:bg-[#1a1a1a] text-sm px-4 py-2 sm:text-2xl sm:px-10 sm:py-3"
//               onClick={handleStoryQuiz}
//             >
//               play
//               <ArrowRight className="w-3 h-3 sm:w-6 sm:h-6 text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizSelection;

// import React, { useEffect, useRef, useState } from "react";
// import { ArrowRight, ChevronDown, LogOut } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "../../lib/Supabase";
// import { evolveLogo } from "../../assets/images/avatar";

// const QuizSelection = () => {
//   const headingRef = useRef(null);
//   const subTextRef = useRef(null);
//   const cardsRef = useRef([]);
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);
//   const [showMenu, setShowMenu] = useState(false);

//   useEffect(() => {
//     // Fetch current user and profile (avatar and name from Discord)
//     const fetchUser = async () => {
//       const {
//         data: { user }
//       } = await supabase.auth.getUser();
//       setUser(user);
//     };
//     fetchUser();
//   }, []);

//   useEffect(() => {
//     // Simple animation
//     const animateElement = (element, delay = 0) => {
//       if (element) {
//         element.style.opacity = "0";
//         element.style.transform = "translateY(30px)";
//         setTimeout(() => {
//           element.style.transition = "all 1s ease-out";
//           element.style.opacity = "1";
//           element.style.transform = "translateY(0)";
//         }, delay);
//       }
//     };

//     const timeout = setTimeout(() => {
//       animateElement(headingRef.current, 0);
//       animateElement(subTextRef.current, 200);
//       cardsRef.current.forEach((card, index) => {
//         animateElement(card, 500 + index * 300);
//       });
//     }, 100);

//     return () => clearTimeout(timeout);
//   }, []);

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     navigate("/auth");
//   };

//   const handleExternalQuiz = () => {
//     window.open("https://evolve-printing-challange.vercel.app/", "_blank");
//   };

//   const handleStoryQuiz = () => {
//     navigate("/quiz/story");
//   };

//   return (
//     <div className="min-h-screen w-full bg-black text-white lowercase px-3 py-4 sm:px-6 sm:py-6 overflow-hidden">
//       {/* 🔹 Header */}
//       <header className="flex justify-between items-center mb-8">
//         {/* Logo */}
//         <img src={evolveLogo} alt="Evolve Logo" className="w-16 sm:w-24" />

//         {/* User Info */}
//         {user && (
//           <div className="relative">
//             <div
//               className="flex items-center gap-2 cursor-pointer"
//               onClick={() => setShowMenu((prev) => !prev)}
//             >
//               {/* Avatar */}
//               <img
//                 src={user.user_metadata.avatar_url}
//                 alt={user.user_metadata.full_name}
//                 className="w-10 h-10 rounded-full border border-gray-600"
//               />
//               {/* Name */}
//               <span className="text-white font-medium hidden sm:inline">
//                 {user.user_metadata.full_name}
//               </span>
//               <ChevronDown className="w-4 h-4 text-white" />
//             </div>

//             {/* Dropdown Menu */}
//             {showMenu && (
//               <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg p-2">
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center gap-2 text-red-400 hover:text-red-300 w-full px-3 py-2 rounded-md"
//                 >
//                   <LogOut className="w-4 h-4" />
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </header>

//       {/* Main heading */}
//       <h1
//         ref={headingRef}
//         className="text-[32px] sm:text-[80px] text-evolve-inchworm font-bricolage text-center font-bold mb-2 sm:mb-4 leading-none"
//       >
//         design in small doses
//       </h1>

//       {/* Subtext */}
//       <p
//         ref={subTextRef}
//         className="text-[16px] sm:text-[40px] sm:leading-[40px] text-center max-w-xs sm:max-w-5xl mx-auto mb-6 sm:mb-10 px-2"
//       >
//         you don't need a textbook. just curiosity. try a fast quiz and explore
//         one little idea at a time.
//       </p>

//       {/* Quiz Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-sm sm:max-w-7xl w-full px-2">
//         {/* Print it Right! */}
//         <div
//           ref={(el) => (cardsRef.current[0] = el)}
//           className="bg-evolve-lavender-indigo bg-courses-grid bg-cover bg-center p-4 sm:p-10 rounded-xl sm:rounded-2xl"
//         >
//           <h2 className="text-[36px] sm:text-[90px] font-extrabold text-white text-center leading-[80%] mb-3 sm:mb-6">
//             print <br /> it right!
//           </h2>
//           <p className="text-[14px] sm:text-[32px] text-white text-center sm:leading-1 mb-3 sm:mb-[10rem]">
//             a design mission to fix your final sample before the client sees it.
//           </p>
//           <div className="w-fit mx-auto pb-[3px] sm:pb-[5px] bg-white rounded-md transition-all duration-300 active:scale-90 sm:-mt-24 sm:transform sm:-translate-y-8">
//             <button
//               className="flex items-center gap-2 sm:gap-3 font-bold tracking-tight bg-evolve-black text-white rounded-md transition-all duration-300 hover:bg-[#1a1a1a] text-sm px-4 py-2 sm:text-2xl sm:px-10 sm:py-3"
//               onClick={handleExternalQuiz}
//             >
//               play
//               <ArrowRight className="w-3 h-3 sm:w-6 sm:h-6 text-white" />
//             </button>
//           </div>
//         </div>

//         {/* Seen/Unseen */}
//         <div
//           ref={(el) => (cardsRef.current[1] = el)}
//           className="bg-evolve-lavender-indigo bg-courses-grid bg-cover bg-center p-4 sm:p-8 rounded-xl sm:rounded-2xl"
//         >
//           <h2 className="text-[36px] sm:text-[90px] font-extrabold text-white text-center leading-[80%] mb-3 sm:mb-6">
//             seen/
//             <br />
//             unseen
//           </h2>
//           <p className="text-[14px] sm:text-[32px] text-white text-center sm:leading-1 mb-3 sm:mb-[10rem]">
//             discover the logic behind the ordinary
//           </p>
//           <div className="w-fit mx-auto pb-[2px] sm:pb-[5px] bg-white rounded-md transition-all duration-300 active:scale-90 sm:-mt-24 sm:transform sm:-translate-y-8">
//             <button
//               className="flex items-center gap-2 sm:gap-3 font-bold tracking-tight bg-evolve-black text-white rounded-md transition-all duration-300 hover:bg-[#1a1a1a] text-sm px-4 py-2 sm:text-2xl sm:px-10 sm:py-3"
//               onClick={handleStoryQuiz}
//             >
//               play
//               <ArrowRight className="w-3 h-3 sm:w-6 sm:h-6 text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizSelection;

// import React, { useEffect, useRef, useState } from "react";
// import { ArrowRight, ChevronDown, LogOut } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "../../lib/Supabase";
// import { evolveLogo } from "../../assets/images/avatar";

// const QuizSelection = () => {
//   const headingRef = useRef(null);
//   const subTextRef = useRef(null);
//   const cardsRef = useRef([]);
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);
//   const [showMenu, setShowMenu] = useState(false);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const {
//         data: { user }
//       } = await supabase.auth.getUser();
//       setUser(user);
//     };
//     fetchUser();
//   }, []);

//   useEffect(() => {
//     const animateElement = (element, delay = 0) => {
//       if (element) {
//         element.style.opacity = "0";
//         element.style.transform = "translateY(30px)";
//         setTimeout(() => {
//           element.style.transition = "all 1s ease-out";
//           element.style.opacity = "1";
//           element.style.transform = "translateY(0)";
//         }, delay);
//       }
//     };

//     const timeout = setTimeout(() => {
//       animateElement(headingRef.current, 0);
//       animateElement(subTextRef.current, 200);
//       cardsRef.current.forEach((card, index) => {
//         animateElement(card, 500 + index * 300);
//       });
//     }, 100);

//     return () => clearTimeout(timeout);
//   }, []);

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     navigate("/auth");
//   };

//   const handleExternalQuiz = () => {
//     window.open("https://evolve-printing-challange.vercel.app/", "_blank");
//   };

//   const handleStoryQuiz = () => {
//     navigate("/quiz/story");
//   };

//   return (
//     <div className="min-h-screen w-full bg-black text-white lowercase px-3 py-4 sm:px-6 sm:py-6 flex flex-col">
//       {/* 🔹 Header */}
//       <header className="flex justify-between items-center mb-6">
//         <img src={evolveLogo} alt="Evolve Logo" className="w-16 sm:w-24" />

//         {user && (
//           <div className="relative">
//             <div
//               className="flex items-center gap-2 cursor-pointer"
//               onClick={() => setShowMenu((prev) => !prev)}
//             >
//               <img
//                 src={user.user_metadata.avatar_url}
//                 alt={user.user_metadata.full_name}
//                 className="w-10 h-10 rounded-full border border-gray-600"
//               />
//               <span className="text-white font-medium hidden sm:inline">
//                 {user.user_metadata.full_name}
//               </span>
//               <ChevronDown className="w-4 h-4 text-white" />
//             </div>

//             {showMenu && (
//               <div className="absolute right-0 mt-2 w-40 bg-evolve-inchworm rounded-md shadow-lg p-2">
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center gap-2 text-black hover:text-gray-700 w-full px-3 py-2 rounded-md"
//                 >
//                   <LogOut className="w-4 h-4" />
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </header>

//       {/* 🔹 Center content vertically */}
//       <div className="flex flex-col flex-grow justify-center items-center">
//         {/* Main heading */}
//         <h1
//           ref={headingRef}
//           className="text-[32px] sm:text-[80px] text-evolve-inchworm font-bricolage text-center font-bold mb-2 sm:mb-4 leading-none"
//         >
//           design in small doses
//         </h1>

//         {/* Subtext */}
//         <p
//           ref={subTextRef}
//           className="text-[16px] sm:text-[40px] sm:leading-[40px] text-center max-w-xs sm:max-w-5xl mx-auto mb-6 sm:mb-10 px-2"
//         >
//           you don't need a textbook. just curiosity. try a fast quiz and explore
//           one little idea at a time.
//         </p>

//         {/* Quiz Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-sm sm:max-w-7xl w-full px-2">
//           {/* Print it Right! */}
//           <div
//             ref={(el) => (cardsRef.current[0] = el)}
//             className="bg-evolve-lavender-indigo bg-courses-grid bg-cover bg-center p-4 sm:p-10 rounded-xl sm:rounded-2xl"
//           >
//             <h2 className="text-[36px] sm:text-[90px] font-extrabold text-white text-center leading-[80%] mb-3 sm:mb-6">
//               print <br /> it right!
//             </h2>
//             <p className="text-[14px] sm:text-[32px] text-white text-center sm:leading-1 mb-3 sm:mb-[10rem]">
//               a design mission to fix your final sample before the client sees
//               it.
//             </p>
//             <div className="w-fit mx-auto pb-[3px] sm:pb-[5px] bg-white rounded-md transition-all duration-300 active:scale-90 sm:-mt-24 sm:transform sm:-translate-y-8">
//               <button
//                 className="flex items-center gap-2 sm:gap-3 font-bold tracking-tight bg-evolve-black text-white rounded-md transition-all duration-300 hover:bg-[#1a1a1a] text-sm px-4 py-2 sm:text-2xl sm:px-10 sm:py-3"
//                 onClick={handleExternalQuiz}
//               >
//                 play
//                 <ArrowRight className="w-3 h-3 sm:w-6 sm:h-6 text-white" />
//               </button>
//             </div>
//           </div>

//           {/* Seen/Unseen */}
//           <div
//             ref={(el) => (cardsRef.current[1] = el)}
//             className="bg-evolve-lavender-indigo bg-courses-grid bg-cover bg-center p-4 sm:p-8 rounded-xl sm:rounded-2xl"
//           >
//             <h2 className="text-[36px] sm:text-[90px] font-extrabold text-white text-center leading-[80%] mb-3 sm:mb-6">
//               seen/
//               <br />
//               unseen
//             </h2>
//             <p className="text-[14px] sm:text-[32px] text-white text-center sm:leading-1 mb-3 sm:mb-[10rem]">
//               discover the logic behind the ordinary
//             </p>
//             <div className="w-fit mx-auto pb-[2px] sm:pb-[5px] bg-white rounded-md transition-all duration-300 active:scale-90 sm:-mt-24 sm:transform sm:-translate-y-8">
//               <button
//                 className="flex items-center gap-2 sm:gap-3 font-bold tracking-tight bg-evolve-black text-white rounded-md transition-all duration-300 hover:bg-[#1a1a1a] text-sm px-4 py-2 sm:text-2xl sm:px-10 sm:py-3"
//                 onClick={handleStoryQuiz}
//               >
//                 play
//                 <ArrowRight className="w-3 h-3 sm:w-6 sm:h-6 text-white" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizSelection;

// import React, { useEffect, useRef, useState } from "react";
// import { ArrowRight, ChevronDown, LogOut } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "../../lib/Supabase";
// import { evolveLogo } from "../../assets/images/avatar";
// import {
//   thunder_1,
//   thunder_2,
//   mystery_box,
//   objects,
//   eye,
//   search
// } from "../../assets/images/avatar/index";

// // ✅ Fallback placeholder for missing images
// const FallbackImg = ({ alt, className }) => (
//   <div
//     className={`bg-red-500 text-white text-xs flex items-center justify-center ${className}`}
//   >
//     {alt}
//   </div>
// );

// const SafeImage = ({ src, alt, className }) => {
//   if (!src) return <FallbackImg alt={alt} className={className} />;
//   return <img src={src} alt={alt} className={className} />;
// };

// const QuizSelection = () => {
//   const headingRef = useRef(null);
//   const subTextRef = useRef(null);
//   const cardsRef = useRef([]);
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);
//   const [showMenu, setShowMenu] = useState(false);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const {
//         data: { user }
//       } = await supabase.auth.getUser();
//       setUser(user);
//     };
//     fetchUser();
//   }, []);

//   useEffect(() => {
//     const animateElement = (element, delay = 0) => {
//       if (element) {
//         element.style.opacity = "0";
//         element.style.transform = "translateY(30px)";
//         setTimeout(() => {
//           element.style.transition = "all 1s ease-out";
//           element.style.opacity = "1";
//           element.style.transform = "translateY(0)";
//         }, delay);
//       }
//     };

//     const timeout = setTimeout(() => {
//       animateElement(headingRef.current, 0);
//       animateElement(subTextRef.current, 200);
//       cardsRef.current.forEach((card, index) =>
//         animateElement(card, 500 + index * 300)
//       );
//     }, 100);

//     return () => clearTimeout(timeout);
//   }, []);

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     navigate("/auth");
//   };

//   const handleExternalQuiz = () => {
//     window.open("https://evolve-printing-challange.vercel.app/", "_blank");
//   };

//   const handleStoryQuiz = () => {
//     navigate("/quiz/story");
//   };

//   return (
//     <div className="min-h-screen w-full bg-black text-white lowercase px-3 py-4 sm:px-6 sm:py-6 flex flex-col">
//       {/* ✅ Header */}
//       <header className="flex justify-between items-center mb-6 relative z-50">
//         <img src={evolveLogo} alt="Evolve Logo" className="w-16 sm:w-24" />

//         {user && (
//           <div className="relative z-50">
//             <div
//               className="flex items-center gap-2 cursor-pointer"
//               onClick={() => setShowMenu((prev) => !prev)}
//             >
//               <img
//                 src={user.user_metadata.avatar_url}
//                 alt={user.user_metadata.full_name}
//                 className="w-10 h-10 rounded-full border border-gray-600"
//               />
//               <span className="text-white font-medium hidden sm:inline">
//                 {user.user_metadata.full_name}
//               </span>
//               <ChevronDown className="w-4 h-4 text-white" />
//             </div>

//             {showMenu && (
//               <div className="absolute right-0 mt-2 w-40 bg-evolve-inchworm rounded-md shadow-lg p-2 z-50">
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center gap-2 text-black hover:text-gray-700 w-full px-3 py-2 rounded-md"
//                 >
//                   <LogOut className="w-4 h-4" />
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </header>

//       {/* ✅ Content */}
//       <div className="flex flex-col flex-grow justify-center items-center">
//         <h1
//           ref={headingRef}
//           className="text-[32px] sm:text-[80px] text-evolve-inchworm font-bricolage text-center font-bold mb-2 sm:mb-4 leading-none"
//         >
//           design in small doses
//         </h1>

//         <p
//           ref={subTextRef}
//           className="text-[16px] sm:text-[40px] sm:leading-[40px] text-center max-w-xs sm:max-w-5xl mx-auto mb-6 sm:mb-10 px-2"
//         >
//           you don't need a textbook. just curiosity. try a fast quiz and explore
//           one little idea at a time.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-sm sm:max-w-7xl w-full px-2">
//           {/* ✅ PRINT IT RIGHT! */}
//           <div
//             ref={(el) => (cardsRef.current[0] = el)}
//             className="relative bg-evolve-lavender-indigo bg-courses-grid p-4 sm:p-10 rounded-xl sm:rounded-2xl overflow-hidden"
//           >
//             {/* 🔥 Decorative Images */}
//             <SafeImage
//               src={thunder_1}
//               alt="thunder1"
//               className="absolute block top-4 left-6 w-24 sm:w-32 opacity-90 z-0 pointer-events-none"
//             />
//             <SafeImage
//               src={thunder_2}
//               alt="thunder2"
//               className="absolute block top-16 right-6 w-28 sm:w-36 opacity-90 z-0 pointer-events-none"
//             />
//             <SafeImage
//               src={mystery_box}
//               alt="mystery"
//               className="absolute block bottom-4 right-4 w-24 sm:w-32 opacity-100 z-0 pointer-events-none"
//             />
//             <SafeImage
//               src={objects}
//               alt="objects"
//               className="absolute block bottom-20 left-8 w-20 sm:w-28 opacity-90 z-0 pointer-events-none"
//             />

//             <div className="relative z-10">
//               <h2 className="text-[36px] sm:text-[90px] font-extrabold text-white text-center leading-[80%] mb-3 sm:mb-6">
//                 print <br /> it right!
//               </h2>
//               <p className="text-[14px] sm:text-[32px] text-white text-center mb-3 sm:mb-[10rem]">
//                 a design mission to fix your final sample before the client sees
//                 it.
//               </p>
//               <div className="w-fit mx-auto bg-white rounded-md transition-all duration-300 active:scale-90 sm:-mt-24 sm:transform sm:-translate-y-8">
//                 <button
//                   className="flex items-center gap-2 sm:gap-3 font-bold tracking-tight bg-evolve-black text-white rounded-md transition-all duration-300 hover:bg-[#1a1a1a] text-sm px-4 py-2 sm:text-2xl sm:px-10 sm:py-3"
//                   onClick={handleExternalQuiz}
//                 >
//                   play{" "}
//                   <ArrowRight className="w-3 h-3 sm:w-6 sm:h-6 text-white" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* ✅ SEEN / UNSEEN */}
//           <div
//             ref={(el) => (cardsRef.current[1] = el)}
//             className="relative bg-evolve-lavender-indigo bg-courses-grid p-4 sm:p-8 rounded-xl sm:rounded-2xl overflow-hidden"
//           >
//             <SafeImage
//               src={thunder_1}
//               alt="thunder1"
//               className="absolute block top-4 left-8 w-20 sm:w-28 opacity-70 z-0 pointer-events-none"
//             />
//             <SafeImage
//               src={thunder_2}
//               alt="thunder2"
//               className="absolute block top-12 right-10 w-24 sm:w-32 opacity-70 z-0 pointer-events-none"
//             />
//             <SafeImage
//               src={eye}
//               alt="eye"
//               className="absolute block top-1/3 right-6 w-20 sm:w-28 opacity-90 z-0 pointer-events-none"
//             />
//             <SafeImage
//               src={search}
//               alt="search"
//               className="absolute block bottom-6 left-16 w-16 sm:w-24 opacity-90 z-0 pointer-events-none"
//             />

//             <div className="relative z-10">
//               <h2 className="text-[36px] sm:text-[90px] font-extrabold text-white text-center leading-[80%] mb-3 sm:mb-6">
//                 seen/
//                 <br />
//                 unseen
//               </h2>
//               <p className="text-[14px] sm:text-[32px] text-white text-center mb-3 sm:mb-[10rem]">
//                 discover the logic behind the ordinary
//               </p>
//               <div className="w-fit mx-auto bg-white rounded-md transition-all duration-300 active:scale-90 sm:-mt-24 sm:transform sm:-translate-y-8">
//                 <button
//                   className="flex items-center gap-2 sm:gap-3 font-bold tracking-tight bg-evolve-black text-white rounded-md transition-all duration-300 hover:bg-[#1a1a1a] text-sm px-4 py-2 sm:text-2xl sm:px-10 sm:py-3"
//                   onClick={handleStoryQuiz}
//                 >
//                   play{" "}
//                   <ArrowRight className="w-3 h-3 sm:w-6 sm:h-6 text-white" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizSelection;

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import { supabase } from "../../lib/Supabase";
import { evolveLogo } from "../../assets/images/avatar";
import {
  thunder_1,
  thunder_2,
  mystery_box,
  objects,
  eye,
  search
} from "../../assets/images/avatar/index";

// ✅ Fallback placeholder for missing images
const FallbackImg = ({ alt, className }) => (
  <div
    className={`bg-red-500 text-white text-xs flex items-center justify-center ${className}`}
  >
    {alt}
  </div>
);

const SafeImage = ({ src, alt, className }) => {
  if (!src) return <FallbackImg alt={alt} className={className} />;
  return <img src={src} alt={alt} className={className} />;
};

const QuizSelection = () => {
  const headingRef = useRef(null);
  const subTextRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  // const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const {
  //       data: { user }
  //     } = await supabase.auth.getUser();
  //     setUser(user);
  //   };
  //   fetchUser();
  // }, []);

  useEffect(() => {
    const animateElement = (element, delay = 0) => {
      if (element) {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        setTimeout(() => {
          element.style.transition = "all 0.6s ease-out"; // Faster
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, delay);
      }
    };

    const timeout = setTimeout(() => {
      animateElement(headingRef.current, 0);
      animateElement(subTextRef.current, 100);
      // ✅ Animate both cards together without stagger
      cardsRef.current.forEach((card) => animateElement(card, 300));
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  // const handleLogout = async () => {
  //   await supabase.auth.signOut();
  //   navigate("/auth");
  // };

  const handleExternalQuiz = () => {
    window.open("https://evolve-printing-challange.vercel.app/", "_blank");
  };

  const handleStoryQuiz = () => {
    navigate("/quiz/story");
  };

  return (
    <div className="min-h-screen w-full bg-black text-white lowercase px-3 py-4 sm:px-6 sm:py-6 flex flex-col">
      {/* ✅ Header */}
      <header className="flex justify-between items-center mb-6 relative z-50">
        <img src={evolveLogo} alt="Evolve Logo" className="w-16 sm:w-24" />

        {/* {user && (
          <div className="relative z-50">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <img
                src={user.user_metadata.avatar_url}
                alt={user.user_metadata.full_name}
                className="w-10 h-10 rounded-full border border-gray-600"
              />
              <span className="text-white font-medium hidden sm:inline">
                {user.user_metadata.full_name}
              </span>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-evolve-inchworm rounded-md shadow-lg p-2 z-50">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-black hover:text-gray-700 w-full px-3 py-2 rounded-md"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        )} */}
      </header>

      {/* ✅ Content */}
      <div className="flex flex-col flex-grow justify-center items-center">
        <h1
          ref={headingRef}
          className="text-[32px] sm:text-[80px] text-evolve-inchworm font-bricolage text-center font-bold mb-2 sm:mb-4 leading-none"
        >
          design in small doses
        </h1>

        <p
          ref={subTextRef}
          className="text-[16px] sm:text-[40px] sm:leading-[40px] text-center max-w-xs sm:max-w-5xl mx-auto mb-6 sm:mb-10 px-2"
        >
          you don't need a textbook. just curiosity. try a fast quiz and explore
          one little idea at a time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-sm sm:max-w-7xl w-full px-2">
          {/* ✅ PRINT IT RIGHT! */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="relative bg-evolve-lavender-indigo bg-courses-grid p-4 sm:p-10 rounded-xl sm:rounded-2xl overflow-hidden"
          >
            {/* 🔥 Decorative Images */}
            <SafeImage
              src={thunder_2}
              alt="thunder1"
              className="absolute block top-10 left-6 -translate-y-1/2 w-14 sm:top-[35%] sm:w-20 opacity-90 z-0 pointer-events-none"
            />
            <SafeImage
              src={thunder_1}
              alt="thunder2"
              className="absolute block top-10 right-3 sm:right-10 w-14 sm:top-[10%] sm:w-20 opacity-90 z-0 pointer-events-none"
            />
            <SafeImage
              src={mystery_box}
              alt="mystery"
              className="absolute block bottom-4 right-4 w-14 sm:w-32 opacity-100 z-0 pointer-events-none"
            />

            <SafeImage
              src={objects}
              alt="objects"
              className="absolute block bottom-10 left-8 w-14 sm:bottom-20 sm:left-8 sm:w-28 opacity-90 z-0 pointer-events-none"
            />

            <div className="relative z-10">
              <h2 className="text-[36px] sm:text-[90px] font-extrabold text-white text-center leading-[80%] mb-3 sm:mb-6">
                print <br /> it right!
              </h2>
              <p className="text-[14px] sm:text-[32px] text-white text-center mb-3 sm:mb-[10rem]">
                a design mission to fix your final sample before the client sees
                it.
              </p>
              <div className="w-fit mx-auto bg-white rounded-md transition-all duration-300 active:scale-90 sm:-mt-24 sm:transform sm:-translate-y-8">
                <button
                  className="flex items-center gap-2 sm:gap-3 font-bold tracking-tight bg-evolve-black text-white rounded-md transition-all duration-300 hover:bg-[#1a1a1a] text-sm px-4 py-2 sm:text-2xl sm:px-10 sm:py-3"
                  onClick={handleExternalQuiz}
                >
                  play{" "}
                  <ArrowRight className="w-3 h-3 sm:w-6 sm:h-6 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* ✅ SEEN / UNSEEN */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="relative bg-evolve-lavender-indigo bg-courses-grid p-4 sm:p-8 rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <SafeImage
              src={thunder_2}
              alt="thunder1"
              className="absolute block bottom-4 right-8 w-14 sm:bottom-4 sm:right-10 sm:w-20 opacity-70 z-0 pointer-events-none"
            />
            <SafeImage
              src={thunder_1}
              alt="thunder2"
              className="absolute block sm:top-4 sm:left-8 top-10 left-4 w-14 sm:w-20 opacity-70 z-0 pointer-events-none"
            />
            <SafeImage
              src={eye}
              alt="eye"
              className="absolute block sm:top-1/2 sm:-right-6 sm:-translate-y-1/2 top-[30%] right-1 w-14 sm:w-28 opacity-90 z-0 pointer-events-none"
            />
            <SafeImage
              src={search}
              alt="search"
              className="absolute block bottom-6 left-10 w-16 sm:w-36 opacity-90 z-0 pointer-events-none"
            />

            <div className="relative z-10">
              <h2 className="text-[36px] sm:text-[90px] font-extrabold text-white text-center leading-[80%] mb-3 sm:mb-6">
                seen/
                <br />
                unseen
              </h2>
              <p className="text-[14px] sm:text-[32px] text-white text-center mb-3 sm:mb-[10rem]">
                discover the logic behind <br /> the ordinary
              </p>
              <div className="w-fit mx-auto bg-white rounded-md transition-all duration-300 active:scale-90 sm:-mt-24 sm:transform sm:-translate-y-8">
                <button
                  className="flex items-center gap-2 sm:gap-3 font-bold tracking-tight bg-evolve-black text-white rounded-md transition-all duration-300 hover:bg-[#1a1a1a] text-sm px-4 py-2 sm:text-2xl sm:px-10 sm:py-3"
                  onClick={handleStoryQuiz}
                >
                  play{" "}
                  <ArrowRight className="w-3 h-3 sm:w-6 sm:h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSelection;
