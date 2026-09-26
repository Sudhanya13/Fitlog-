// "use client";
// import React from "react";
// import { ReactNode } from "react";
// import { createContext, useState } from "react";

// export const Workoutcontext = createContext({});

// export default function WorkoutProvider({ children }: { children: ReactNode }) {
//   const [todayPlan, setTodayplan] = useState([]);
//   const [saveLater, setSaveLater] = useState([]);

//   const sharedData = {
//     todayPlan,
//     setTodayplan,

//     saveLater,
//     setSaveLater,
//   };

//   return (
//     <Workoutcontext.Provider value={sharedData}>
//       {" "}
//       {children}
//     </Workoutcontext.Provider>
//   );
// }
"use client";

import React, { ReactNode, createContext, useState } from "react";
import { Workout } from "@/type/singleWorkout";

export interface WorkoutContextType {
  todayPlan: Workout[];
  setTodayplan: React.Dispatch<React.SetStateAction<Workout[]>>;
  saveLater: Workout[];
  setSaveLater: React.Dispatch<React.SetStateAction<Workout[]>>;
}

export const Workoutcontext = createContext<WorkoutContextType>({
  todayPlan: [],
  setTodayplan: () => {},
  saveLater: [],
  setSaveLater: () => {},
});

export default function WorkoutProvider({ children }: { children: ReactNode }) {
  const [todayPlan, setTodayplan] = useState<Workout[]>([]);
  const [saveLater, setSaveLater] = useState<Workout[]>([]);

  const sharedData: WorkoutContextType = {
    todayPlan,
    setTodayplan,
    saveLater,
    setSaveLater,
  };

  return (
    <Workoutcontext.Provider value={sharedData}>
      {children}
    </Workoutcontext.Provider>
  );
}
