// import React, { useState } from 'react';
// import { useAuth } from '../../hooks/useAuth';
// import { MessageCircle, Loader2 } from 'lucide-react';

// export default function AuthForm() {
//   const { signInWithDiscord } = useAuth();
//   const [isLoading, setIsLoading] = useState(false);

//   const handleDiscordLogin = async () => {
//     try {
//       setIsLoading(true);
//       await signInWithDiscord();
//     } catch (error) {
//       console.error('Error signing in:', error);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-evolve-black flex items-center justify-center px-4">
//       <div className="max-w-md w-full">
//         <div className="text-center mb-8">
//           <h1 className="text-6xl font-bricolage font-bold text-evolve-white mb-4">
//             Story Quiz
//           </h1>
//           <p className="text-evolve-gray text-lg font-montserrat">
//             Embark on an interactive learning adventure
//           </p>
//         </div>

//         <div className="bg-evolve-charleston-green p-8 rounded-20px shadow-button-popped">
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bricolage font-semibold text-evolve-white mb-2">
//               Welcome Back
//             </h2>
//             <p className="text-evolve-gray font-montserrat">
//               Sign in to continue your journey
//             </p>
//           </div>

//           <button
//             onClick={handleDiscordLogin}
//             disabled={isLoading}
//             className="w-full bg-evolve-lavender-indigo hover:bg-evolve-lavender-indigo-2
//                      text-white font-montserrat font-semibold py-4 px-6 rounded-18px
//                      transition-all duration-300 transform hover:scale-105
//                      shadow-button-hover hover:shadow-button-top
//                      disabled:opacity-50 disabled:cursor-not-allowed
//                      flex items-center justify-center gap-3"
//           >
//             {isLoading ? (
//               <>
//                 <Loader2 className="w-5 h-5 animate-spin" />
//                 Connecting...
//               </>
//             ) : (
//               <>
//                 <MessageCircle className="w-5 h-5" />
//                 Continue with Discord
//               </>
//             )}
//           </button>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-evolve-gray font-montserrat">
//               By continuing, you agree to our Terms of Service and Privacy Policy
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  discordLogo,
  evolveLogo,
  eyeAndSpring
} from "../../assets/images/avatar/index";
import { signInWithDiscord } from "../../lib/Supabase";

const AuthForm = ({ onAuthSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDiscordAuth = async () => {
    setLoading(true);
    setError("");

    try {
      const { error } = await signInWithDiscord();
      if (error) {
        setError(`Discord authentication failed: ${error.message}`);
        setLoading(false);
      }
    } catch (err) {
      console.error("Discord auth error:", err);
      setError("Discord authentication failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6 font-bricolage">
      <div className="w-full max-w-[90vw] lg:max-w-[90vw] bg-evolve-lavender-indigo rounded-3xl p-6 lg:p-8 flex flex-col lg:flex-row font-bricolage relative overflow-hidden">
        {/* Right Section for Mobile - Appears on top */}
        <div className="block lg:hidden bg-black rounded-2xl flex flex-col items-start justify-between p-6 mb-6 space-y-3 h-[45vh]">
          <h2 className="text-evolve-inchworm text-3xl font-semibold">
            connect & start exploring design
          </h2>
          <p className="text-white text-base">
            we use discord so you can stay logged in and looped in
          </p>
          <button
            onClick={handleDiscordAuth}
            disabled={loading}
            className="w-full flex items-center justify-center gap-4 py-3 bg-[#5865F2] text-white rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-lg"
          >
            <img src={discordLogo} alt="Discord" className="w-6 h-6" />
            <span>Continue with Discord</span>
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Left Section */}
        <div className="w-full lg:w-1/2 relative flex flex-col justify-between items-start p-4 lg:p-12 z-10">
          <div className="flex flex-col space-y-0 text-left">
            <span className="text-white text-3xl sm:text-4xl lg:text-8xl font-bold">
              disrupting
            </span>
            <span className="text-black text-3xl sm:text-4xl lg:text-8xl font-bold">
              traditional
            </span>
            <span className="text-white text-3xl sm:text-4xl lg:text-8xl font-bold">
              design
            </span>
            <span className="text-black text-3xl sm:text-4xl lg:text-8xl font-bold">
              learning
            </span>
          </div>

          {/* Eye image - right side for mobile */}
          <img
            src={eyeAndSpring}
            alt="Eye and Spring"
            className="absolute top-1/3 right-4 lg:left-[75%] lg:top-[75%] transform -translate-y-1/2 w-28 sm:w-36 lg:w-auto z-0 opacity-70"
          />

          {/* Logo */}
          <img
            src={evolveLogo}
            alt="Evolve Logo"
            className="mt-8 w-20 sm:w-28 lg:w-[8rem] z-20"
          />
        </div>

        {/* Right Section Desktop */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-black rounded-2xl flex-col justify-between p-12">
          {/* Heading at top */}
          <h2 className="text-evolve-inchworm text-6xl font-semibold text-center">
            connect & start exploring design
          </h2>
          {/* Text in middle */}
          <p className="text-white text-4xl text-center self-start mt-auto mb-auto">
            we use discord so you can stay logged in and looped in
          </p>
          {/* Button at bottom */}
          <button
            onClick={handleDiscordAuth}
            disabled={loading}
            className="w-full flex items-center justify-center gap-4 py-4 bg-[#5865F2] text-white rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-lg"
          >
            <img src={discordLogo} alt="Discord" className="w-8 h-8" />
            <span>Continue with Discord</span>
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
