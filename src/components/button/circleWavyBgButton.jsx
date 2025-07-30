// import React, { useState } from "react";
// import "./CircleWavyBgButton.css"; // Import the external CSS

// export const CircleWavyBgButton = ({
//   buttonType = "button",
//   handleClick = () => {},
//   text = "",
//   disabled = false,
//   textSizeClass = "text-32px",
//   textWeightClass = "font-extrabold",
//   textColorClass = "text-black",
//   buttonSizeClass = "",
//   buttonPaddingClass = "p-6",
//   bgVariantClass = "bg-button hover:bg-button-hover" // bg-bright-turquoise-wavy, bg-flame-wavy
// }) => {
//   return (
//     <button
//       type={buttonType}
//       disabled={disabled}
//       // onClick={handleButtonClick}
//       onClick={(e) => handleClick(e)}
//       className={`
//         transition-all duration-300 ease-in-out
//         bg-no-repeat bg-full group relative
//         ${buttonSizeClass ? buttonSizeClass : "min-w-32 min-h-32"}
//         ${bgVariantClass ? bgVariantClass : "bg-button hover:bg-button-hover"}
//         ${buttonPaddingClass ? buttonPaddingClass : "p-6"}
//         hover:rotate-90
//       `}
//     >
//       <p
//         className={`
//           lowercase leading-0.7
//           ${textSizeClass} ${textWeightClass} ${textColorClass}
//           transition-transform duration-300 ease-in-out
//           group-hover:-rotate-90

//         `}
//       >
//         {text}
//       </p>
//     </button>
//   );
// };

// import React, { useState } from "react";
// import "./CircleWavyBgButton.css"; // Import the external CSS

// export const CircleWavyBgButton = ({
//   buttonType = "button",
//   handleClick = () => {},
//   text = "",
//   disabled = false,
//   textSizeClass = "text-32px",
//   textWeightClass = "font-extrabold",
//   textColorClass = "text-black",
//   buttonSizeClass = "",
//   buttonPaddingClass = "p-6",
//   bgVariantClass = "bg-button hover:bg-button-hover",
//   className = "", // ✅ Add className prop
// }) => {
//   return (
//     <button
//       type={buttonType}
//       disabled={disabled}
//       onClick={(e) => handleClick(e)}
//       className={`
//         transition-all duration-300 ease-in-out
//         bg-no-repeat bg-full group relative circle-button ${className}
//         ${buttonSizeClass ? buttonSizeClass : "min-w-28 min-h-28"}
//         ${bgVariantClass ? bgVariantClass : "bg-button hover:bg-button-hover"}
//         ${buttonPaddingClass ? buttonPaddingClass : "p-6"}
//         hover:rotate-90
//       `}
//     >
//       <p
//         className={`
//           lowercase leading-0.7 circle-button-text
//           ${textSizeClass} ${textWeightClass} ${textColorClass}
//           transition-transform duration-300 ease-in-out
//           group-hover:-rotate-90
//         `}
//       >
//         {text}
//       </p>
//     </button>
//   );
// };

import React, { useState } from "react";
import "./CircleWavyBgButton.css"; // Import the external CSS

export const CircleWavyBgButton = ({
  buttonType = "button",
  handleClick = () => {},
  text = "",
  disabled = false,
  textSizeClass = "text-32px",
  textWeightClass = "font-extrabold",
  textColorClass = "text-black",
  buttonSizeClass = "",
  buttonPaddingClass = "p-6",
  bgVariantClass = "bg-button hover:bg-button-hover",
  className = "" // ✅ Add className prop
}) => {
  return (
    <button
      type={buttonType}
      disabled={disabled}
      onClick={(e) => handleClick(e)}
      className={`
        transition-all duration-300 ease-in-out 
        bg-no-repeat bg-full group relative circle-button ${className} 
        ${buttonSizeClass ? buttonSizeClass : "min-w-28 min-h-28"}
        ${bgVariantClass ? bgVariantClass : "bg-button hover:bg-button-hover"}
        ${buttonPaddingClass ? buttonPaddingClass : "p-6"}
        hover:rotate-90
      `}
    >
      <p
        className={`
          lowercase leading-0.7 circle-button-text
          ${textSizeClass} ${textWeightClass} ${textColorClass} 
          transition-transform duration-300 ease-in-out
          group-hover:-rotate-90
        `}
      >
        {text}
      </p>
    </button>
  );
};
