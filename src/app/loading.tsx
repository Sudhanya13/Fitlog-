import React from "react";

// export default function Globalloading() {
//   return (
//     <div className="font-bold  text-amber-500 text-4xl text-center">
//       Global Loading...
//     </div>
//   );
// }

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />

        <p className="  text-amber-500 text-4xl text-center">
          Loading workouts...
        </p>
      </div>
    </div>
  );
}
