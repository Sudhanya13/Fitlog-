"use client";

import React, { useContext, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

import { Workoutcontext } from "@/context/WorkoutProvider";

export default function MyPlan() {
  const { todayPlan, setTodayplan, saveLater, setSaveLater } =
    useContext(Workoutcontext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  // -----------------------------
  // Calculate plan metrics
  // -----------------------------
  const metrics = useMemo(() => {
    const exercises = todayPlan.length;

    const minutes = todayPlan.reduce(
      (total, workout) => total + Number(workout.duration || 0),
      0,
    );

    const calories = todayPlan.reduce(
      (total, workout) => total + Number(workout.calories || 0),
      0,
    );

    return {
      exercises,
      minutes,
      calories,
    };
  }, [todayPlan]);

  // -----------------------------
  // Current tab
  // -----------------------------
  const currentList = activeTab === "today" ? todayPlan : saveLater;

  // -----------------------------
  // Sorting
  // -----------------------------
  const sortedWorkouts = useMemo(() => {
    return [...currentList].sort((a, b) => {
      if (sortBy === "duration") {
        return Number(a.duration || 0) - Number(b.duration || 0);
      }

      if (sortBy === "calories") {
        return Number(a.calories || 0) - Number(b.calories || 0);
      }

      if (sortBy === "rating") {
        return Number(b.rating || 0) - Number(a.rating || 0);
      }

      return 0;
    });
  }, [currentList, sortBy]);

  // -----------------------------
  // Remove from Today's Plan
  // -----------------------------
  const handleRemoveToday = (id: number) => {
    const workout = todayPlan.find((item) => item.id === id);

    setTodayplan(todayPlan.filter((item) => item.id !== id));

    if (workout) {
      toast.success(`"${workout.name}" removed from today's plan`);
    }
  };

  // -----------------------------
  // Remove from Saved
  // -----------------------------
  const handleRemoveSaved = (id: number) => {
    const workout = saveLater.find((item) => item.id === id);

    setSaveLater(saveLater.filter((item) => item.id !== id));

    if (workout) {
      toast.success(`"${workout.name}" removed from saved`);
    }
  };

  // -----------------------------
  // Mark workout as Done
  // -----------------------------
  const handleDone = (id: number) => {
    const workout = todayPlan.find((item) => item.id === id);

    setTodayplan(todayPlan.filter((item) => item.id !== id));

    if (workout) {
      toast.success(`"${workout.name}" marked as done`);
    }
  };

  // -----------------------------
  // Change tab
  // -----------------------------
  const handleTabChange = (tab: "today" | "saved") => {
    setActiveTab(tab);
    setSortBy("duration");
  };

  return (
    <main className="min-h-screen bg-[#0D0F12] px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </header>

        {/* Metrics */}
        <section className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
          <div className="rounded-2xl border border-white/10 bg-[#15171D] p-4 sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 sm:text-xs">
              Exercises
            </p>

            <p className="mt-3 text-2xl font-black sm:text-3xl">
              {metrics.exercises}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#15171D] p-4 sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 sm:text-xs">
              Minutes
            </p>

            <p className="mt-3 text-2xl font-black sm:text-3xl">
              {metrics.minutes}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#15171D] p-4 sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 sm:text-xs">
              Calories
            </p>

            <p className="mt-3 text-2xl font-black sm:text-3xl">
              {metrics.calories}
            </p>
          </div>
        </section>

        {/* Tabs */}
        <div className="mt-10 flex w-fit rounded-xl border border-white/10 bg-[#15171D] p-1">
          <button
            onClick={() => handleTabChange("today")}
            className={`rounded-lg px-5 py-2.5 text-sm font-bold transition ${
              activeTab === "today"
                ? "bg-white text-[#15171D] shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => handleTabChange("saved")}
            className={`rounded-lg px-5 py-2.5 text-sm font-bold transition ${
              activeTab === "saved"
                ? "bg-white text-[#15171D] shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort */}
        {sortedWorkouts.length > 0 && (
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-400">
              {activeTab === "today" ? "Today's Plan" : "Saved"}
            </p>

            <div className="relative">
              <label
                htmlFor="sort"
                className="mr-2 text-xs font-semibold text-gray-500"
              >
                Sort By
              </label>

              <select
                id="sort"
                value={sortBy}
                onChange={(event) =>
                  setSortBy(
                    event.target.value as "duration" | "calories" | "rating",
                  )
                }
                className="appearance-none rounded-lg border border-white/10 bg-[#15171D] py-2 pl-3 pr-8 text-xs font-semibold text-white outline-none"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                ↓
              </span>
            </div>
          </div>
        )}

        {/* Empty State */}
        {sortedWorkouts.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <span className="text-2xl text-gray-400">♡</span>
            </div>

            <h2 className="mt-6 text-xl font-black uppercase tracking-wide">
              NOTHING HERE YET
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#15171D] transition hover:bg-gray-200"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          /* Workout List */
          <div className="mt-6 space-y-4">
            {sortedWorkouts.map((workout, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#15171D]"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="relative h-56 w-full shrink-0 sm:h-auto sm:w-64">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Workout Content */}
                  <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                      {/* Workout Info */}
                      <div className="min-w-0">
                        <h2 className="text-xl font-black uppercase tracking-tight">
                          {workout.name}
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                          {workout.equipment}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-300">
                          <span>⏱ {workout.duration} min</span>

                          <span className="text-white/20">|</span>

                          <span>🔥 {workout.calories} kcal</span>

                          <span className="text-white/20">|</span>

                          <span>
                            <span className="mr-1 text-yellow-400">★</span>
                            {workout.rating}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-6 flex shrink-0 items-center justify-end gap-3 lg:mt-0">
                        {/* View Details */}
                        <Link
                          href={`/workout/${workout.id}`}
                          className="whitespace-nowrap rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-white/10"
                        >
                          View Details
                        </Link>

                        {/* Mark as Done */}
                        {activeTab === "today" && (
                          <button
                            onClick={() => handleDone(workout.id)}
                            className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-[#15171D] transition hover:bg-gray-200"
                          >
                            <span className="text-sm">✓</span>
                            Mark as Done
                          </button>
                        )}

                        {/* Remove */}
                        <button
                          onClick={() =>
                            activeTab === "today"
                              ? handleRemoveToday(workout.id)
                              : handleRemoveSaved(workout.id)
                          }
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-gray-400 transition hover:bg-white/10 hover:text-white"
                          aria-label={`Remove ${workout.name}`}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
