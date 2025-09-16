// import useMobile from './hooks/use-Mobile';

// function MyComponent() {
//   const isMobile = useMobile();

//   return (
//     <div>
//       {isMobile ? 'Mobile UI' : 'Desktop UI'}
//     </div>
//   );
// }

"use client";
import useMobile from "@/hooks/use-mobile"; // ✅ fixed path

export default function Navbar() {
  const isMobile = useMobile();

  return <div>{isMobile ? "Mobile UI" : "Desktop UI"}</div>;
}
