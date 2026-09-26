import React from "react";
import Image from "next/image";

import SaveLaterbutton from "@/components/Plan/SaveLaterbutton";
import Todayplanbutton from "@/components/Plan/Todayplanbutton";
import { notFound } from "next/navigation";

export const workplanData = async () => {
  // const res = await fetch(`https://api.abcz.workers.dev/api/fitlo/${id}`);
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

export default async function WorkoutDetails({ params }) {
  // console.log(params);
  const { id } = await params;
  const planData = await workplanData();

  const workout = planData.find((workout) => String(workout.id) === String(id));
  // console.log(workout);
  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0D0F12] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#15171D] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* ================= IMAGE ================= */}
            <div className="relative min-h-[400px] lg:min-h-[700px]">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                className="object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#15171D] via-black/10 to-transparent" />

              {/* Difficulty badge */}
              <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                {workout.difficulty}
              </div>

              {/* Image bottom text */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
                  Workout
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  {workout.name}
                </h2>
              </div>
            </div>

            {/* ================= DETAILS ================= */}
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              {/* Heading */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Exercise Details
                </p>

                <h1 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                  {workout.name}
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                  {workout.description}
                </p>
              </div>

              {/* Muscle Groups */}
              <div className="mt-6 flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-gray-300"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* ================= KEY SPECS ================= */}
              <div className="mt-8">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                  Key Specs
                </h3>

                <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                  <div className="grid grid-cols-2 border-b border-white/10">
                    <div className="border-r border-white/10 p-4">
                      <p className="text-[10px] font-semibold tracking-widest text-gray-500">
                        EQUIPMENT
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {workout.equipment}
                      </p>
                    </div>

                    <div className="p-4">
                      <p className="text-[10px] font-semibold tracking-widest text-gray-500">
                        DIFFICULTY
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {workout.difficulty}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 border-b border-white/10">
                    <div className="border-r border-white/10 p-4">
                      <p className="text-[10px] font-semibold tracking-widest text-gray-500">
                        SETS
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {workout.sets}
                      </p>
                    </div>

                    <div className="p-4">
                      <p className="text-[10px] font-semibold tracking-widest text-gray-500">
                        REPS
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {workout.reps}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 border-b border-white/10">
                    <div className="border-r border-white/10 p-4">
                      <p className="text-[10px] font-semibold tracking-widest text-gray-500">
                        DURATION
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {workout.duration} min
                      </p>
                    </div>

                    <div className="p-4">
                      <p className="text-[10px] font-semibold tracking-widest text-gray-500">
                        CALORIES
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {workout.calories} kcal
                      </p>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-[10px] font-semibold tracking-widest text-gray-500">
                      RATING
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      <span className="mr-1 text-yellow-400">★</span>
                      {workout.rating}
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= INSTRUCTIONS ================= */}
              <div className="mt-8">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                  Instructions
                </h3>

                <ol className="mt-5 space-y-4">
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-[#15171D]">
                      1
                    </span>

                    <p className="pt-1 text-sm leading-6 text-gray-400">
                      Lie flat on the bench and position your body securely with
                      your feet planted firmly on the floor.
                    </p>
                  </li>

                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-[#15171D]">
                      2
                    </span>

                    <p className="pt-1 text-sm leading-6 text-gray-400">
                      Grip the bar slightly wider than shoulder width and unrack
                      it with your arms fully extended.
                    </p>
                  </li>

                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-[#15171D]">
                      3
                    </span>

                    <p className="pt-1 text-sm leading-6 text-gray-400">
                      Lower the bar under control toward your mid-chest while
                      keeping your elbows stable.
                    </p>
                  </li>

                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-[#15171D]">
                      4
                    </span>

                    <p className="pt-1 text-sm leading-6 text-gray-400">
                      Press the bar back up until your arms are extended,
                      maintaining control throughout the movement.
                    </p>
                  </li>
                </ol>
              </div>

              {/* ================= BUTTONS ================= */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Todayplanbutton workout={workout}></Todayplanbutton>

                <SaveLaterbutton workout={workout}></SaveLaterbutton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
