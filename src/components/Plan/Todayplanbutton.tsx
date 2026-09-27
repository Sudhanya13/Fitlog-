"use client";

import { Workoutcontext } from "@/context/WorkoutProvider";
import { Workout } from "@/type/singleWorkout";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { CalendarPlus } from "lucide-react";

interface TodayplanbuttonProps {
  workout: Workout;
}

export default function Todayplanbutton({ workout }: TodayplanbuttonProps) {
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
        className={` flex w-full   items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm   font-bold transition  ${
          isAdded
            ? "cursor-not-allowed bg-gray-200 text-[#15171D]"
            : "bg-[#C2F800] text-[#15171D] hover:bg-gray-200"
        }`}
      >
        <CalendarPlus className="h-5 w-5" />

        {isAdded ? "Added to today's plan" : "Add to today's plan"}
      </button>
    </div>
  );
}
