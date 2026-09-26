"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";

import { Workoutcontext } from "@/context/WorkoutProvider";

export default function Navbar() {
  const { todayPlan, saveLater } = useContext(Workoutcontext);
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-7 py-5">
      {/* LEFT — Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="FitLog logo"
          width={40}
          height={40}
          className="h-10 w-10"
        />

        <h1 className="text-xl font-bold text-white">FitLog</h1>
      </Link>

      {/* MIDDLE — Navigation */}
      <div className="flex items-center gap-2 rounded-full bg-black p-1">
        {/* Workout */}
        <Link
          href="/"
          className={`rounded-full px-5 py-2 text-sm font-bold transition ${
            pathname === "/"
              ? "text-[#C2F800]"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Workout
        </Link>

        {/* My Plan */}
        <Link
          href="/myplan"
          className={`rounded-full px-5 py-2 text-sm font-bold transition ${
            pathname === "/myplan"
              ? "text-[#C2F800]"
              : "text-gray-400 hover:text-white"
          }`}
        >
          My Plan
        </Link>
      </div>

      {/* RIGHT — Status Counters */}
      <div className="flex items-center gap-5 text-white">
        {/* Plan */}
        <Link
          href="/myplan"
          className="flex items-center gap-2 text-sm font-bold"
        >
          <span>Plan</span>

          <span
            className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 ${
              pathname === "/myplan"
                ? "bg-[#C2F800] text-black"
                : "border border-white/40 text-white"
            }`}
          >
            {todayPlan.length}
          </span>
        </Link>

        {/* Saved */}
        <Link
          href="/myplan"
          className="flex items-center gap-2 text-sm font-bold"
        >
          <span>Saved</span>

          <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-white/40 px-1.5 text-white">
            {saveLater.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}
