"use client";
import React from "react";
import { ReactNode } from "react";
import { createContext, useState } from "react";

export const Workoutcontext = createContext({});

export default function WorkoutProvider({ children }: { children: ReactNode }) {
  const [todayPlan, setTodayplan] = useState([]);
  const [saveLater, setSaveLater] = useState([]);

  const sharedData = {
    todayPlan,
    setTodayplan,

    saveLater,
    setSaveLater,
  };

  return (
    <Workoutcontext.Provider value={sharedData}>
      {" "}
      {children}
    </Workoutcontext.Provider>
  );
}
