"use client";

import { Workoutcontext } from "@/context/WorkoutProvider";
import React, { useContext } from "react";
import { toast } from "react-toastify";

export default function Todayplanbutton({ workout }) {
  const { todayPlan, setTodayplan } = useContext(Workoutcontext);

  const isAdded = todayPlan.some((item) => item.id === workout.id);

  const handleaddButton = () => {
    console.log("Button clicked", workout);

    if (isAdded) {
      return;
    }

    setTodayplan([...todayPlan, workout]);

    toast.success(`"${workout.name}" added to today's plan`);
  };

  return (
    <div>
      <button
        disabled={isAdded}
        onClick={handleaddButton}
        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-500 text-gray-300"
            : "bg-white text-[#15171D] hover:bg-gray-200"
        }`}
      >
        <span className="text-lg">＋</span>

        {isAdded ? "Added to today's plan" : "Add to today's plan"}
      </button>
    </div>
  );
}
