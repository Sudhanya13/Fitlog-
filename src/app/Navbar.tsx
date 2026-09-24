import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-7 py-5">
      {/* Left: Logo + FitLog */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="FitLog logo"
          width={40}
          height={40}
          className="h-10 w-10"
        />

        <h1 className="text-xl text-white font-bold">FitLog</h1>
      </div>

      {/* Middle: Navigation */}
      <ul className="flex items-center gap-3">
        <li className="px-4 py-2 rounded-full bg-black text-white">
          <Link href="/" className="px-4 py-2 rounded-full bg-black text-white">
            Workouts{" "}
          </Link>
        </li>

        <li className="text-gray-700">
          <Link
            href="/myplan"
            className="px-4 py-2 rounded-full bg-black text-white"
          >
            My plan{" "}
          </Link>
        </li>
      </ul>

      {/* Right: Plan + Saved */}
      <div className="flex items-center gap-5  text-white">
        <p className=" text-white">
          Plan{" "}
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-sm">
            0
          </span>
        </p>

        <p>
          Saved{" "}
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-sm">
            0
          </span>
        </p>
      </div>
    </div>
  );
}
