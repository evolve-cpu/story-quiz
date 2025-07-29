// import React, { useState } from "react";
// import { useQuiz } from "../../context/QuizContext";

// const QuizQuestionModal = ({
//   isVisible,
//   onClose,
//   questionId,
//   question,
//   options,
//   correctIndex,
//   reason,
// }) => {
//   const [selected, setSelected] = useState(null);
//   const [submitted, setSubmitted] = useState(false);
//   const { submitResponse } = useQuiz();

//   const handleSubmit = () => {
//     if (selected !== null && !submitted) {
//       const isCorrect = selected === correctIndex;
//       submitResponse(questionId, selected, isCorrect);
//       setSubmitted(true);
//     }
//   };

//   const handleClose = () => {
//     setSelected(null);
//     setSubmitted(false);
//     onClose();
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
//       <div className="bg-black border-4 border-evolve-inchworm rounded-xl p-6 w-full max-w-xl">
//         {/* Question */}
//         <h2 className="text-white text-xl font-bold mb-4">{question}</h2>

//         {/* Options */}
//         <div className="space-y-4">
//           {options.map((opt, idx) => {
//             const isSelected = selected === idx;
//             const isCorrect = submitted && idx === correctIndex;
//             const isWrong =
//               submitted && idx === selected && idx !== correctIndex;

//             let bgColor = "bg-transparent";

//             if (isCorrect) bgColor = "bg-evolve-inchworm text-black";
//             else if (isWrong) bgColor = "bg-red-500 text-white";
//             else if (isSelected) bgColor = "bg-yellow-600 text-black";

//             return (
//               <div
//                 key={idx}
//                 onClick={() => !submitted && setSelected(idx)}
//                 className={`border border-white p-3 rounded-md cursor-pointer ${bgColor}`}
//               >
//                 {opt}
//               </div>
//             );
//           })}
//         </div>

//         {/* Reason Text */}
//         {submitted && (
//           <div className="text-evolve-inchworm font-semibold mt-4">
//             Reason: {reason}
//           </div>
//         )}

//         {/* Submit / Close Button */}
//         <button
//           onClick={submitted ? handleClose : handleSubmit}
//           className="w-full mt-6 bg-evolve-lavender-indigo text-white py-2 rounded-md text-lg font-semibold"
//         >
//           {submitted ? "Next" : "Submit"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizQuestionModal;

// import React, { useState, useEffect } from "react";
// import { useQuiz } from "../../context/QuizContext";

// const QuizQuestionModal = ({
//   isVisible,
//   onClose,
//   questionId,
//   question,
//   options,
//   correctIndex,
//   reason
// }) => {
//   const [selected, setSelected] = useState(null);
//   const [submitted, setSubmitted] = useState(false);
//   const { submitResponse } = useQuiz();

//   useEffect(() => {
//     // const scrollContainer = document.getElementById("scroll-container");
//     const scrollContainer = document.getElementById("module-2"); // or correct ID

//     if (isVisible) {
//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflow = "hidden";
//       if (scrollContainer) {
//         scrollContainer.style.overflow = "hidden";
//         scrollContainer.style.pointerEvents = "none"; // optional: prevent clicks
//       }
//     } else {
//       document.body.style.overflow = "auto";
//       document.documentElement.style.overflow = "auto";
//       if (scrollContainer) {
//         scrollContainer.style.overflow = "auto";
//         scrollContainer.style.pointerEvents = "auto";
//       }
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//       document.documentElement.style.overflow = "auto";
//       if (scrollContainer) {
//         scrollContainer.style.overflow = "auto";
//         scrollContainer.style.pointerEvents = "auto";
//       }
//     };
//   }, [isVisible]);

//   const handleSubmit = async () => {
//     if (selected !== null && !submitted) {
//       const isCorrect = selected === correctIndex;
//       await submitResponse(questionId, selected, isCorrect);
//       setSubmitted(true);
//     }
//   };

//   const handleClose = () => {
//     setSelected(null);
//     setSubmitted(false);
//     onClose();
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
//       <div className="bg-black border border-evolve-inchworm rounded-xl p-6 w-full max-w-xl">
//         <h2 className="text-white text-xl font-bold mb-4">{question}</h2>

//         <div className="space-y-4">
//           {options.map((opt, idx) => {
//             const isSelected = selected === idx;
//             const isCorrect = submitted && idx === correctIndex;
//             const isWrong =
//               submitted && idx === selected && idx !== correctIndex;

//             let bgColor = "bg-transparent";
//             let textColor = "text-white";

//             if (isCorrect) {
//               bgColor = "bg-evolve-inchworm";
//               textColor = "text-black";
//             } else if (isWrong) {
//               bgColor = "bg-red-500";
//             } else if (isSelected) {
//               bgColor = "bg-yellow-600";
//             }

//             return (
//               <div
//                 key={idx}
//                 onClick={() => !submitted && setSelected(idx)}
//                 className={`border border-white p-3 rounded-md cursor-pointer ${bgColor} ${textColor}`}
//               >
//                 {opt}
//               </div>
//             );
//           })}
//         </div>

//         {submitted && (
//           <div className="text-evolve-inchworm font-semibold mt-4">
//             Reason: {reason}
//           </div>
//         )}

//         <button
//           onClick={submitted ? handleClose : handleSubmit}
//           className="w-full mt-6 bg-evolve-lavender-indigo text-white py-2 rounded-md text-lg font-semibold"
//         >
//           {submitted ? "Next" : "Submit"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizQuestionModal;

// import React, { useState, useEffect } from "react";
// import { useQuiz } from "../../context/QuizContext";

// const QuizQuestionModal = ({
//   isVisible,
//   onClose,
//   questionId,
//   question,
//   options,
//   correctIndex,
//   reason
// }) => {
//   const [selected, setSelected] = useState(null);
//   const [submitted, setSubmitted] = useState(false);
//   const { submitResponse } = useQuiz();

//   useEffect(() => {
//     const scrollContainer = document.getElementById("module-2");

//     if (isVisible) {
//       document.body.style.overflow = "hidden";
//       if (scrollContainer) {
//         scrollContainer.style.overflow = "hidden";
//       }
//     } else {
//       document.body.style.overflow = "auto";
//       if (scrollContainer) {
//         scrollContainer.style.overflow = "auto";
//       }
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//       if (scrollContainer) {
//         scrollContainer.style.overflow = "auto";
//       }
//     };
//   }, [isVisible]);

//   const handleSubmit = async () => {
//     if (selected !== null && !submitted) {
//       const isCorrect = selected === correctIndex;
//       await submitResponse(questionId, selected, isCorrect);
//       setSubmitted(true);
//     }
//   };

//   const handleClose = () => {
//     setSelected(null);
//     setSubmitted(false);
//     onClose();
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-[100]  flex items-center justify-center px-4">
//       <div className="bg-black border-4 border-evolve-inchworm rounded-xl p-6 w-full max-w-xl">
//         <h2 className="text-white text-xl font-bold mb-4">{question}</h2>

//         <div className="space-y-4">
//           {options.map((opt, idx) => {
//             const isSelected = selected === idx;
//             const isCorrect = submitted && idx === correctIndex;
//             const isWrong =
//               submitted && idx === selected && idx !== correctIndex;

//             let bgColor = "bg-transparent";
//             let textColor = "text-white";

//             if (isCorrect) {
//               bgColor = "bg-evolve-inchworm";
//               textColor = "text-black";
//             } else if (isWrong) {
//               bgColor = "bg-red-500";
//             } else if (isSelected) {
//               bgColor = "bg-yellow-600";
//             }

//             return (
//               <div
//                 key={idx}
//                 onClick={() => !submitted && setSelected(idx)}
//                 className={`border border-white p-3 rounded-md cursor-pointer ${bgColor} ${textColor}`}
//               >
//                 {opt}
//               </div>
//             );
//           })}
//         </div>

//         {submitted && (
//           <div className="text-evolve-inchworm font-semibold mt-4">
//             Reason: {reason}
//           </div>
//         )}

//         <button
//           onClick={submitted ? handleClose : handleSubmit}
//           className="w-full mt-6 bg-evolve-lavender-indigo text-white py-2 rounded-md text-lg font-semibold"
//         >
//           {submitted ? "Next" : "Submit"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizQuestionModal;

// import React, { useState, useEffect } from "react";
// import { useQuiz } from "../../context/QuizContext";

// const QuizQuestionModal = ({
//   isVisible,
//   onClose,
//   questionId,
//   question,
//   options,
//   correctIndex,
//   reason,
//   backgroundImage
// }) => {
//   const [selected, setSelected] = useState(null);
//   const [submitted, setSubmitted] = useState(false);
//   const { submitResponse } = useQuiz();

//   useEffect(() => {
//     const scrollContainer = document.getElementById("module-2");

//     if (isVisible) {
//       document.body.style.overflow = "hidden";
//       if (scrollContainer) scrollContainer.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//       if (scrollContainer) scrollContainer.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//       if (scrollContainer) scrollContainer.style.overflow = "auto";
//     };
//   }, [isVisible]);

//   const handleSubmit = async () => {
//     if (selected !== null && !submitted) {
//       const isCorrect = selected === correctIndex;
//       setSubmitted(true);
//     }
//   };

//   const handleClose = () => {
//     const isCorrect = selected === correctIndex;
//     onClose(selected, isCorrect); // ✅ pass back to Module2
//     setSelected(null);
//     setSubmitted(false);
//   };

//   if (!isVisible) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/70"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center"
//       }}
//     >
//       <div className="bg-black/80 border-4 border-evolve-inchworm rounded-xl p-6 w-full max-w-xl z-[10000]">
//         <h2 className="text-white text-xl font-bold mb-4">{question}</h2>

//         <div className="space-y-4">
//           {options.map((opt, idx) => {
//             const isSelected = selected === idx;
//             const isCorrect = submitted && idx === correctIndex;
//             const isWrong =
//               submitted && idx === selected && idx !== correctIndex;

//             let bgColor = "bg-transparent";
//             let textColor = "text-white";

//             if (isCorrect) {
//               bgColor = "bg-evolve-inchworm";
//               textColor = "text-black";
//             } else if (isWrong) {
//               bgColor = "bg-red-500";
//             } else if (isSelected) {
//               bgColor = "bg-yellow-600";
//             }

//             return (
//               <div
//                 key={idx}
//                 onClick={() => !submitted && setSelected(idx)}
//                 className={`border border-white p-3 rounded-md cursor-pointer ${bgColor} ${textColor}`}
//               >
//                 {opt}
//               </div>
//             );
//           })}
//         </div>

//         {submitted && (
//           <div className="text-evolve-inchworm font-semibold mt-4">
//             Reason: {reason}
//           </div>
//         )}

//         <button
//           onClick={submitted ? handleClose : handleSubmit}
//           className="w-full mt-6 bg-evolve-lavender-indigo text-white py-2 rounded-md text-lg font-semibold"
//         >
//           {submitted ? "Next" : "Submit"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizQuestionModal;

// import React, { useState, useEffect } from "react";
// import { useQuiz } from "../../context/QuizContext";

// const QuizQuestionModal = ({
//   isVisible,
//   onClose,
//   questionId,
//   question,
//   options,
//   correctIndex,
//   reason,
//   backgroundImage,
//   backgroundClassName = "",
//   type = "single"
// }) => {
//   const { submitResponse } = useQuiz();

//   const [selected, setSelected] = useState(type === "multi" ? [] : null);
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     const scrollContainer = document.getElementById("module-2");

//     if (isVisible) {
//       document.body.style.overflow = "hidden";
//       if (scrollContainer) scrollContainer.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//       if (scrollContainer) scrollContainer.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//       if (scrollContainer) scrollContainer.style.overflow = "auto";
//     };
//   }, [isVisible]);

//   const toggleOption = (idx) => {
//     if (submitted) return;

//     if (type === "multi") {
//       setSelected((prev) =>
//         prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
//       );
//     } else {
//       setSelected(idx);
//     }
//   };

//   const handleSubmit = () => {
//     if (submitted) return;

//     // 🚫 Block if nothing selected
//     if (
//       (type === "multi" && selected.length === 0) ||
//       (type !== "multi" && selected === null)
//     ) {
//       return;
//     }

//     let isCorrect = false;

//     if (type === "multi") {
//       const correct = Array.isArray(correctIndex)
//         ? correctIndex.slice().sort()
//         : [correctIndex];
//       const selectedSorted = selected.slice().sort();

//       isCorrect = JSON.stringify(selectedSorted) === JSON.stringify(correct);
//     } else {
//       isCorrect = selected === correctIndex;
//     }

//     setSubmitted(true);
//   };

//   const handleClose = () => {
//     let isCorrect = false;

//     if (type === "multi") {
//       const correct = Array.isArray(correctIndex)
//         ? correctIndex.slice().sort()
//         : [correctIndex];
//       const selectedSorted = selected.slice().sort();

//       isCorrect = JSON.stringify(selectedSorted) === JSON.stringify(correct);
//     } else {
//       isCorrect = selected === correctIndex;
//     }

//     onClose(options[selected], isCorrect);
//     setSelected(type === "multi" ? [] : null);
//     setSubmitted(false);
//   };

//   if (!isVisible) return null;

//   return (
//     <div
//       className={`fixed inset-0 z-[9999] flex items-center justify-center px-2 sm:px-4 bg-black/60 ${backgroundClassName}`}
//       style={{
//         backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center"
//       }}
//     >
//       <div className="bg-black/60 border border-evolve-inchworm rounded-xl p-4 sm:p-6 w-full max-w-md z-[10000]">
//         <h2 className="text-white text-base sm:text-xl font-bold mb-3 sm:mb-4 leading-snug sm:leading-normal">
//           {question}
//         </h2>

//         <div className="space-y-2 sm:space-y-3">
//           {options.map((opt, idx) => {
//             const isSelected =
//               type === "multi" ? selected.includes(idx) : selected === idx;

//             const isCorrect =
//               submitted &&
//               (type === "multi"
//                 ? Array.isArray(correctIndex) && correctIndex.includes(idx)
//                 : idx === correctIndex);

//             const isWrong = submitted && isSelected && !isCorrect;

//             let bgColor = "bg-transparent";
//             let textColor = "text-white";

//             if (isCorrect) {
//               bgColor = "bg-evolve-inchworm";
//               textColor = "text-black";
//             } else if (isWrong) {
//               bgColor = "bg-red-500";
//             } else if (isSelected) {
//               bgColor = "bg-yellow-600";
//             }

//             return (
//               <div
//                 key={idx}
//                 onClick={() => toggleOption(idx)}
//                 className={`border border-white p-2 sm:p-3 rounded-md cursor-pointer flex items-center gap-2 ${bgColor} ${textColor} text-sm sm:text-base`}
//               >
//                 {type === "bullet" && (
//                   <div
//                     className={`w-4 h-4 border-2 rounded-full ${
//                       isSelected ? "bg-white" : "border-white"
//                     }`}
//                   ></div>
//                 )}
//                 <span>{opt}</span>
//               </div>
//             );
//           })}
//         </div>

//         {submitted && reason && (
//           <div className="text-evolve-inchworm font-medium mt-3 sm:mt-4 text-sm sm:text-base leading-snug">
//             Reason: {reason}
//           </div>
//         )}

//         <button
//           onClick={submitted ? handleClose : handleSubmit}
//           className="w-full mt-5 sm:mt-6 bg-evolve-lavender-indigo text-white py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-semibold"
//         >
//           {submitted ? "Next" : "Submit"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizQuestionModal;

import React, { useState, useEffect } from "react";
import { useQuizProgress } from "../../hooks/useQuizProgress";

const QuizQuestionModal = ({
  isVisible,
  onClose,
  questionId,
  question,
  options,
  correctIndex,
  reason,
  backgroundImage,
  backgroundClassName = "",
  type = "single"
}) => {
  const { submitResponse } = useQuizProgress();

  const [selected, setSelected] = useState(type === "multi" ? [] : null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById("module-2");

    if (isVisible) {
      document.body.style.overflow = "hidden";
      if (scrollContainer) scrollContainer.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      if (scrollContainer) scrollContainer.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      if (scrollContainer) scrollContainer.style.overflow = "auto";
    };
  }, [isVisible]);

  const toggleOption = (idx) => {
    if (submitted) return;

    if (type === "multi") {
      setSelected((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      );
    } else {
      setSelected(idx);
    }
  };

  const handleSubmit = () => {
    if (submitted) return;

    if (
      (type === "multi" && selected.length === 0) ||
      (type !== "multi" && selected === null)
    ) {
      return;
    }

    let isCorrect = false;

    if (type === "multi") {
      const correct = Array.isArray(correctIndex)
        ? correctIndex.slice().sort()
        : [correctIndex];
      const selectedSorted = selected.slice().sort();
      isCorrect = JSON.stringify(selectedSorted) === JSON.stringify(correct);
    } else {
      isCorrect = selected === correctIndex;
    }

    // ✅ Auto-submit score here
    submitResponse({
      questionId,
      response:
        type === "multi"
          ? selected.map((idx) => options[idx]).join(", ")
          : options[selected],
      correctAnswer: Array.isArray(correctIndex)
        ? correctIndex.map((idx) => options[idx]).join(", ")
        : options[correctIndex],
      isCorrect
    });

    setSubmitted(true);
  };

  const handleClose = () => {
    onClose(); // no need to pass response or isCorrect anymore
    setSelected(type === "multi" ? [] : null);
    setSubmitted(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-2 sm:px-4 bg-black/60 ${backgroundClassName}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="bg-black/60 border border-evolve-inchworm rounded-xl p-4 sm:p-6 w-full max-w-md z-[10000]">
        <h2 className="text-white text-base sm:text-xl font-bold mb-3 sm:mb-4 leading-snug sm:leading-normal">
          {question}
        </h2>

        <div className="space-y-2 sm:space-y-3">
          {options.map((opt, idx) => {
            const isSelected =
              type === "multi" ? selected.includes(idx) : selected === idx;

            const isCorrect =
              submitted &&
              (type === "multi"
                ? Array.isArray(correctIndex) && correctIndex.includes(idx)
                : idx === correctIndex);

            const isWrong = submitted && isSelected && !isCorrect;

            let bgColor = "bg-transparent";
            let textColor = "text-white";

            if (isCorrect) {
              bgColor = "bg-evolve-inchworm";
              textColor = "text-black";
            } else if (isWrong) {
              bgColor = "bg-red-500";
            } else if (isSelected) {
              bgColor = "bg-yellow-600";
            }

            return (
              <div
                key={idx}
                onClick={() => toggleOption(idx)}
                className={`border border-white p-2 sm:p-3 rounded-md cursor-pointer flex items-center gap-2 ${bgColor} ${textColor} text-sm sm:text-base`}
              >
                {type === "bullet" && (
                  <div
                    className={`w-4 h-4 border-2 rounded-full ${
                      isSelected ? "bg-white" : "border-white"
                    }`}
                  ></div>
                )}
                <span>{opt}</span>
              </div>
            );
          })}
        </div>

        {submitted && reason && (
          <div className="text-evolve-inchworm font-medium mt-3 sm:mt-4 text-sm sm:text-base leading-snug">
            Reason: {reason}
          </div>
        )}

        <button
          onClick={submitted ? handleClose : handleSubmit}
          className="w-full mt-5 sm:mt-6 bg-evolve-lavender-indigo text-white py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-semibold"
        >
          {submitted ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default QuizQuestionModal;
