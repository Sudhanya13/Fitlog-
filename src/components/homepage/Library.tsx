import React from "react";

import Singleworkout from "./singleworkout";
import { workplanData } from "@/lib/data";

export default async function Library() {
  const planData = await workplanData();
  console.log(planData);
  return (
    <>
      <section id="library">
        <div className="mx-5 mt-6 px-2 py-2">
          <h1 className="text-2xl font-bold text-white">THE LIBRARY</h1>
          <p className="  text-white">
            Tweleve lifts covering every major muscle group.{" "}
          </p>
        </div>

        <div>
          {/* <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4 py-5 my-2.5"> */}
          <Singleworkout planData={planData}></Singleworkout>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
