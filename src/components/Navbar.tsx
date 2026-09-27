"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";

import { Workoutcontext } from "@/context/WorkoutProvider";

export default function Navbar() {
  const { todayPlan, saveLater } = useContext(Workoutcontext);
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-3 py-4 sm:px-4 lg:px-5 border-b  border-white/20">
      <div className=" container mx-auto w-full max-w-[1500px]">
        {/* Navbar Top */}
        <div className="relative flex items-center justify-between">
          {/* LEFT — Hamburger + Logo */}
          <div className="flex items-center gap-3">
            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            >
              <span className="text-xl leading-none">
                {menuOpen ? "✕" : "☰"}
              </span>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="FitLog logo"
                width={40}
                height={40}
                className="h-9 w-9 sm:h-10 sm:w-10"
              />

              <h1 className="text-lg font-bold text-white sm:text-xl">
                FitLog
              </h1>
            </Link>
          </div>

          {/* CENTER — Desktop Navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full bg-black p-1 lg:flex">
            <Link
              href="/"
              className={`rounded-full  px-6 py-2 text-sm font-bold transition ${
                pathname === "/"
                  ? "text-[#C2F800] bg-[#d5e794]/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/myplan"
              className={`rounded-full px-6 py-2 text-sm font-bold transition ${
                pathname === "/myplan"
                  ? "text-[#C2F800]  bg-[#d5e794]/20"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>

          {/* RIGHT — Status Counters */}
          <div className="flex items-center gap-3 text-[#9CA3AF] sm:gap-4">
            {/* Plan */}
            <Link
              href="/myplan"
              className="flex items-center gap-1.5 text-xs  font-bold sm:gap-2 sm:text-sm"
            >
              <span>Plan</span>

              <span
                className="flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 bg-[#C2F800] text-black
                "
              >
                {todayPlan.length}
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/myplan"
              className="flex items-center gap-1.5 text-xs font-bold sm:gap-2 sm:text-sm"
            >
              <span>Saved</span>

              <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-white/40 px-1.5 text-white">
                {saveLater.length}
              </span>
            </Link>
          </div>
        </div>

        {/* MOBILE / TABLET MENU */}
        {menuOpen && (
          <div className="mt-4 rounded-2xl border border-white/10 bg-black p-2 lg:hidden">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`block rounded-xl px-4 py-3 text-sm font-bold transition ${
                pathname === "/"
                  ? "bg-[#C2F800] text-black"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/myplan"
              onClick={() => setMenuOpen(false)}
              className={`mt-1 block rounded-xl px-4 py-3 text-sm font-bold transition ${
                pathname === "/myplan"
                  ? "bg-[#C2F800] text-black"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
