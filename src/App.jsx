// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import QuizSelection from "./components/quiz/QuizSelection.jsx";
// import QuizContainer from "./components/quiz/QuizContainer";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen font-bricolage bg-evolve-black">
//         <Routes>
//           <Route path="/quiz-selection" element={<QuizSelection />} />
//           <Route path="/quiz/story" element={<QuizContainer />} />
//           <Route path="/" element={<Navigate to="/quiz-selection" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate
// } from "react-router-dom";
// import { useAuth } from "./hooks/useAuth";
// import AuthForm from "./components/auth/AuthForm";
// import AuthCallback from "./components/auth/AuthCallback";
// import QuizSelection from "./components/quiz/QuizSelection";
// import QuizContainer from "./components/quiz/QuizContainer";
// import { Loader2 } from "lucide-react";

// function AppContent() {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-evolve-black flex items-center justify-center font-bricolage">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 text-evolve-lavender-indigo animate-spin mx-auto mb-4" />
//           <h2 className="text-2xl font-bricolage font-semibold text-evolve-white mb-2">
//             Loading...
//           </h2>
//           <p className="text-evolve-gray font-montserrat">
//             Please wait while we set up your experience
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (!user) {
//     return <AuthForm />;
//   }

//   return (
//     <div className="min-h-screen bg-black font-bricolage">
//       <Routes>
//         <Route path="/quiz-selection" element={<QuizSelection />} />
//         <Route path="/quiz/story" element={<QuizContainer />} />
//         <Route path="/" element={<Navigate to="/quiz-selection" />} />
//       </Routes>
//     </div>
//   );
// }

// function App() {
//   const isOAuthCallback =
//     window.location.hash.includes("access_token") ||
//     window.location.search.includes("access_token");

//   return <Router>{isOAuthCallback ? <AuthCallback /> : <AppContent />}</Router>;
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// import { useAuth } from "./hooks/useAuth";
// import AuthForm from "./components/auth/AuthForm";
// import AuthCallback from "./components/auth/AuthCallback";
import QuizSelection from "./components/quiz/QuizSelection";
import QuizContainer from "./components/quiz/QuizContainer";
import { Loader2 } from "lucide-react";

function AppContent() {
  // const { user, loading } = useAuth();

  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-evolve-black flex items-center justify-center font-bricolage">
  //       <div className="text-center">
  //         <Loader2 className="w-12 h-12 text-evolve-lavender-indigo animate-spin mx-auto mb-4" />
  //         <h2 className="text-2xl font-bricolage font-semibold text-evolve-white mb-2">
  //           Loading...
  //         </h2>
  //         <p className="text-evolve-gray font-montserrat">
  //           Please wait while we set up your experience
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (!user) {
  //   return <AuthForm />;
  // }

  return (
    <div className="min-h-screen bg-black font-bricolage">
      <Routes>
        <Route path="/quiz-selection" element={<QuizSelection />} />
        <Route path="/quiz/story" element={<QuizContainer />} />
        <Route path="/" element={<Navigate to="/quiz-selection" />} />
      </Routes>
    </div>
  );
}

function App() {
  // const isOAuthCallback =
  //   window.location.hash.includes("access_token") ||
  //   window.location.search.includes("access_token");

  return (
    <Router>
      {/* {isOAuthCallback ? <AuthCallback /> : <AppContent />} */}
      <AppContent />
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate
// } from "react-router-dom";
// import QuizSelection from "./components/quiz/QuizSelection";
// import QuizContainer from "./components/quiz/QuizContainer";
// import { Loader2 } from "lucide-react";
// import useGlobalImagePreloader from "./utils/useGlobalImagePreloader";

// // ✅ Import ALL SVGs here
// import {
//   char_1,
//   char_1_1,
//   down_arrow,
//   story_intro,
//   story_scene_1,
//   story_scene_1_mobile,
//   story_scene_2,
//   story_scene_2_mobile,
//   story_scene_3,
//   story_scene_3_mobile,
//   story_scene_4,
//   story_scene_4_mobile,
//   story_scene_5_1,
//   story_scene_5_mobile,
//   story_scene_5_bubble,
//   story_scene_5_bubble_mobile
//   // 🔥 Add Module2, Module3, Module4 SVGs here
// } from "./assets/images/avatar";

// const allImages = [
//   char_1,
//   char_1_1,
//   down_arrow,
//   story_intro,
//   story_scene_1,
//   story_scene_1_mobile,
//   story_scene_2,
//   story_scene_2_mobile,
//   story_scene_3,
//   story_scene_3_mobile,
//   story_scene_4,
//   story_scene_4_mobile,
//   story_scene_5_1,
//   story_scene_5_mobile,
//   story_scene_5_bubble,
//   story_scene_5_bubble_mobile
//   // ✅ Add rest of your SVGs here
// ];

// function AppContent() {
//   return (
//     <div className="min-h-screen bg-black font-bricolage">
//       <Routes>
//         <Route path="/quiz-selection" element={<QuizSelection />} />
//         <Route path="/quiz/story" element={<QuizContainer />} />
//         <Route path="/" element={<Navigate to="/quiz-selection" />} />
//       </Routes>
//     </div>
//   );
// }

// function App() {
//   const [loading, setLoading] = useState(true);

//   // ✅ Preload ALL images
//   useGlobalImagePreloader(allImages);

//   // ✅ Simulate loading complete after images have been queued
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1200); // wait ~1.2s
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Router>
//       {loading ? (
//         // ✅ Minimal Preloader
//         <div className="min-h-screen bg-black flex items-center justify-center font-bricolage">
//           <div className="text-center">
//             <Loader2 className="w-12 h-12 text-evolve-lavender-indigo animate-spin mx-auto mb-4" />
//             <h2 className="text-2xl font-semibold text-white">
//               Loading Assets...
//             </h2>
//             <p className="text-gray-400 text-sm">Preparing your experience</p>
//           </div>
//         </div>
//       ) : (
//         <AppContent />
//       )}
//     </Router>
//   );
// }

// export default App;
