import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="min-h-[500px] bg-[#15171D] text-white  overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12">
      {/* Left Content */}
      <div className="flex flex-col items-start max-w-xl">
        <p className="text-sm tracking-[0.3em] text-lime-400 font-semibold mb-5">
          WORKOUT LIBRARY
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
          TRAIN WITH INTENT.
          <br />
          LOG EVERY SET.
        </h2>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
          Fitlog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>

        <button className="bg-lime-400 text-black font-bold px-7 py-3 rounded-full hover:bg-lime-300 transition duration-200">
          BROWSE WORKOUT
        </button>
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
