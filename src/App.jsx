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
