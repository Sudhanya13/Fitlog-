"use client";

import { Workoutcontext } from "@/context/WorkoutProvider";
import { Workout } from "@/type/singleWorkout";
import { Bookmark } from "lucide-react";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

interface SaveLaterbuttonProps {
  workout: Workout;
}

export default function SaveLaterbutton({ workout }: SaveLaterbuttonProps) {
  const { saveLater, setSaveLater } = useContext(Workoutcontext);

  const [isDisabled, setIsDisabled] = useState(false);

  const handlesaveButton = () => {
    if (isDisabled) return;

    setSaveLater([...saveLater, workout]);
    setIsDisabled(true);

    toast.success(`"${workout.name}" saved for later`);
  };

  return (
    <button
      onClick={handlesaveButton}
      disabled={isDisabled}
      className={` flex w-[40%]  items-center justify-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-bold transition ${
        isDisabled
          ? "cursor-not-allowed bg-gray-200 text-black"
          : "border-white/10 bg-white/5 text-white hover:bg-white/10"
      }`}
    >
      {/* <span className="text-lg">♡</span> */}
      <Bookmark className="h-5 w-5" />

      {isDisabled ? "Saved" : "Save for later"}
    </button>
  );
}
