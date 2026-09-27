import Image from "next/image";

import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
});

// export function Footer() {
//   return (
//     <footer className="mt-4 border-t border-white/20 md:px-8 lg:px-10 px-4 py-5">
//       <div className="flex justify-between items-center">
//         <div className="flex gap-2 justify-between">
//           <Image
//             src="/logo.png"
//             alt="logo"
//             height={40}
//             width={67}
//             className="h-[34px] w-[30px]"
//           ></Image>

//           <h2 className=" font-bold text-[#FFFFFF]">FITLOG</h2>
//         </div>

//         <div className="  text-[#6B7280]">
//           <p>© 2026 FitLog — Workout Library. Train hard, log honest</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

const Footer = () => {
  return (
    <footer className="mt-5 mb-8 border-t border-white/20 px-4 py-5 md:px-8 lg:px-10">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="logo"
            width={32}
            height={32}
            className="h-8 w-8 -rotate-45"
          />

          <h2 className={`${oswald.className} text-2xl font-bold text-white`}>
            FITLOG
          </h2>
        </div>

        <div className="text-center text-gray-400 md:text-left">
          <p>
            &copy; {new Date().getFullYear()} FitLog - Workout Library. Train
            hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
