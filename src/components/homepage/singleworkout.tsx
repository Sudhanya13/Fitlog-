import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Singleworkout({ planData }) {
  return (
    <div>
      <div className="  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4 mx-2 py-5 my-2.5">
        {planData.map((singleWorkout) => {
          return (
            <Link key={singleWorkout.id} href={`/workout/${singleWorkout.id}`}>
              <div className=" group w-full max-w-[800px] overflow-hidden rounded-xl border border-white/10 bg-[#15171D] shadow-lg transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-20 overflow-hidden">
                  <Image
                    src={singleWorkout.image}
                    alt={singleWorkout.name}
                    height={400}
                    width={500}
                    className="h-50 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15171D] via-transparent to-transparent" />

                  {/* Difficulty */}
                  <span className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {singleWorkout.difficulty}
                  </span>
                </div>

                {/* Content */}
                <div className="p-3">
                  {/* Muscle Groups */}
                  <div className="mb-3 flex flex-wrap gap-2">
                    {singleWorkout.muscleGroups.map((muscle) => (
                      <span
                        key={muscle}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white">
                    {singleWorkout.name}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-400">
                    {singleWorkout.description}
                  </p>

                  {/* Workout Stats */}
                  <div className="mt-5 grid grid-cols-3 border-y border-white/10 py-4">
                    <div>
                      <p className="text-xs text-gray-500">SETS</p>
                      <p className="mt-1 font-semibold text-white">
                        {singleWorkout.sets}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">REPS</p>
                      <p className="mt-1 font-semibold text-white">
                        {singleWorkout.reps}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">TIME</p>
                      <p className="mt-1 font-semibold text-white">
                        {singleWorkout.duration} min
                      </p>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-sm font-semibold text-white">
                        {singleWorkout.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
