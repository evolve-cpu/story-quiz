// import { useEffect } from "react";

// export function useScrollLock(lock = false) {
//   useEffect(() => {
//     if (lock) {
//       const scrollY = window.scrollY;
//       document.body.style.position = "fixed";
//       document.body.style.top = `-${scrollY}px`;
//       document.body.style.left = "0";
//       document.body.style.right = "0";
//       document.body.style.width = "100%";
//       document.body.style.overflow = "hidden";

//       return () => {
//         const scrollTop = -parseInt(document.body.style.top || "0");
//         document.body.style.position = "";
//         document.body.style.top = "";
//         document.body.style.left = "";
//         document.body.style.right = "";
//         document.body.style.width = "";
//         document.body.style.overflow = "";
//         window.scrollTo(0, scrollTop);
//       };
//     }
//   }, [lock]);
// }

// useScrollLock.js
// import { useEffect } from "react";

// export const useScrollLock = (lock = false) => {
//   useEffect(() => {
//     if (lock) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [lock]);
// };

export const lockScroll = () => document.body.classList.add("no-scroll");
export const unlockScroll = () => document.body.classList.remove("no-scroll");
