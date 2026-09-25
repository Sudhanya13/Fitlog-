import React from "react";

import Image from "next/image";

const getWorkout = async (id: number) => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  const data = await res.json();

  return data.find((singleWorkout) => singleWorkout.id === id);
};

export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const workoutId = Number(id);

  const workout = await getWorkout(workoutId);

  if (!workout) {
    return <div className="text-white">Workout not found</div>;
  }

  return (
    <div className="text-white">
      <h1>{workout.name}</h1>

      <Image src={workout.image} alt={workout.name} width={500} height={400} />

      <p>{workout.description}</p>
    </div>
  );
}
