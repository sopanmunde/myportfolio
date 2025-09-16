// import { useState, useEffect } from 'react';

// const MOBILE_BREAKPOINT = 768; // px

// export default function seMobile() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

//   useEffect(() => {
//     function handleResize() {
//       setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return isMobile;
// }


"use client";
import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768; // px

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    // Run once on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}






// import { useState, useEffect } from 'react';

// function useMobile(breakpoint: number = 768): boolean {
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   useEffect(() => {
//     function handleResize() {
//       setIsMobile(window.innerWidth <= breakpoint);
//     }

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [breakpoint]);

//   return isMobile;
// }

// export default useMobile;