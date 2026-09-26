"use client";

import { Workoutcontext } from "@/context/WorkoutProvider";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

export default function SaveLaterbutton({ workout }) {
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
      className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-bold transition ${
        isDisabled
          ? "cursor-not-allowed bg-gray-600 text-gray-400"
          : "border-white/10 bg-white/5 text-white hover:bg-white/10"
      }`}
    >
      <span className="text-lg">♡</span>
      {isDisabled ? "Saved" : "Save for later"}
    </button>
  );
}
