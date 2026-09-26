import Image from "next/image";

export function Footer() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 justify-between">
        <Image
          src="/logo.png"
          alt="logo"
          height={40}
          width={67}
          className="h-[34px] w-[30px]"
        ></Image>

        <h2 className=" font-bold text-white">FITLOG</h2>
      </div>

      <div className=" font-bold text-white">
        <p>© 2026 FitLog — Workout Library. Train hard, log honest</p>
      </div>
    </div>
  );
}
