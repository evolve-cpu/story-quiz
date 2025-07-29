// // import React, { useEffect } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";

// // import { Loader2 } from "lucide-react";
// // import { supabase } from "../../lib/Supabase";

// // export default function AuthCallback() {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   useEffect(() => {
// //     const handleAuthCallback = async () => {
// //       try {
// //         // Handle both hash and search params
// //         const hashParams = new URLSearchParams(location.hash.substring(1));
// //         const searchParams = new URLSearchParams(location.search);

// //         const accessToken =
// //           hashParams.get("access_token") || searchParams.get("access_token");
// //         const error = hashParams.get("error") || searchParams.get("error");

// //         if (error) {
// //           console.error("Auth callback error:", error);
// //           navigate("/auth");
// //           return;
// //         }

// //         if (accessToken) {
// //           // Get user data with the access token
// //           const { data, error: userError } = await supabase.auth.getUser(
// //             accessToken
// //           );

// //           if (userError) {
// //             console.error("User fetch error:", userError);
// //             navigate("/auth");
// //             return;
// //           }

// //           navigate("/quiz-selection");
// //         } else {
// //           // Fallback: check current session
// //           const { data: sessionData } = await supabase.auth.getSession();
// //           if (sessionData.session) {
// //             navigate("/quiz-selection");
// //           } else {
// //             navigate("/auth");
// //           }
// //         }
// //       } catch (error) {
// //         console.error("Auth callback error:", error);
// //         navigate("/auth");
// //       }
// //     };

// //     handleAuthCallback();
// //   }, [navigate, location]);

// //   return (
// //     <div className="min-h-screen bg-evolve-black flex items-center justify-center">
// //       <div className="text-center">
// //         <Loader2 className="w-12 h-12 text-evolve-lavender-indigo animate-spin mx-auto mb-4" />
// //         <h2 className="text-2xl font-bricolage font-semibold text-evolve-white mb-2">
// //           Completing Sign In...
// //         </h2>
// //         <p className="text-evolve-gray font-montserrat">
// //           Please wait while we set up your account
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Loader2 } from "lucide-react";
// import { supabase } from "../../lib/Supabase";

// export default function AuthCallback() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleOAuthCallback = async () => {
//       try {
//         // Supabase automatically sets the session on redirect
//         const { data, error } = await supabase.auth.getSession();

//         if (error) {
//           console.error("Session error:", error);
//           navigate("/auth");
//           return;
//         }

//         if (data.session) {
//           // Already signed in
//           navigate("/quiz-selection");
//         } else {
//           // Wait for sign-in event
//           const { data: listener } = supabase.auth.onAuthStateChange(
//             (event, session) => {
//               if (event === "SIGNED_IN" && session) {
//                 navigate("/quiz-selection");
//               }
//             }
//           );

//           return () => {
//             listener.subscription.unsubscribe();
//           };
//         }
//       } catch (err) {
//         console.error("OAuth callback error:", err);
//         navigate("/auth");
//       }
//     };

//     handleOAuthCallback();
//   }, [navigate]);

//   return (
//     <div className="min-h-screen bg-evolve-black flex items-center justify-center">
//       <div className="text-center">
//         <Loader2 className="w-12 h-12 text-evolve-lavender-indigo animate-spin mx-auto mb-4" />
//         <h2 className="text-2xl font-bricolage font-semibold text-evolve-white mb-2">
//           Completing Sign In...
//         </h2>
//         <p className="text-evolve-gray font-montserrat">
//           Please wait while we set up your account
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/Supabase";

const AuthCallback = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Extract hash params (access_token, refresh_token)
        const hashParams = new URLSearchParams(
          window.location.hash.substring(1)
        );
        const accessToken = hashParams.get("access_token");
        const refreshToken = hashParams.get("refresh_token");

        if (accessToken && refreshToken) {
          // ✅ Set session in Supabase
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken
          });

          if (error) {
            console.error("Set session error:", error);
            setError(error.message);
            setLoading(false);
            return;
          }

          // Redirect to main app
          window.location.href = "/";
        } else {
          // If no tokens, fallback to check existing session
          const { data: sessionData } = await supabase.auth.getSession();
          if (sessionData?.session) {
            window.location.href = "/";
          } else {
            setError("Authentication failed. No session found.");
            setLoading(false);
          }
        }
      } catch (err) {
        console.error("Unexpected auth callback error:", err);
        setError("Authentication failed. Please try again.");
        setLoading(false);
      }
    };

    handleAuthCallback();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="bg-red-500/10 border border-red-500 rounded-lg p-6">
            <h2 className="text-red-400 text-xl font-bold mb-4">
              Authentication Error
            </h2>
            <p className="text-red-300 mb-6">{error}</p>
            <button
              onClick={() => (window.location.href = "/")}
              className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-200"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white text-2xl">
        {loading ? "Completing Discord authentication..." : "Redirecting..."}
      </div>
    </div>
  );
};

export default AuthCallback;
