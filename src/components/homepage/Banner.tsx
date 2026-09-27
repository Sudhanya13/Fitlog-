import React from "react";
import Image from "next/image";
import { Oswald } from "next/font/google";
import { ArrowDown } from "lucide-react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
});

export default function Banner() {
  return (
    <div className="min-h-[500px] mt-10 bg-[#15171D] text-white rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-10 mx-6 my-3 md:px-16 py-12">
      {/* Left Content */}
      <div className="flex flex-col items-start max-w-2xl">
        <p className="text-sm tracking-[0.3em] text-lime-400 font-semibold mb-5">
          WORKOUT LIBRARY
        </p>

        <h2
          className={`${oswald.className} text-3xl mb-6 sm:text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl`}
        >
          <span className="md:whitespace-nowrap">TRAIN WITH INTENT. LOG</span>
          <br className="hidden md:block" />
          <span className="block md:inline">EVERY SET.</span>
        </h2>

        {/* <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8"> */}
        <p className="w-full max-w-xl text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-8">
          Fitlog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>
        <a
          href="#library"
          className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-7 py-3 font-bold text-black transition duration-200 hover:bg-lime-300"
        >
          BROWSE WORKOUTS
          <ArrowDown className="h-5 w-5" />
        </a>

        {/* <a
          href="#library"
          className="bg-lime-400 text-black font-bold px-7 py-3 rounded-lg hover:bg-lime-300 transition duration-200"
        >
          BROWSE WORKOUTS
        </a> */}
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 md:w-[45%] flex justify-center items-center">
        <Image
          src="/banner.png"
          alt="Workout"
          width={600}
          height={600}
          className="w-full max-w-[500px] h-auto object-contain"
        />
      </div>
    </div>
  );
}
