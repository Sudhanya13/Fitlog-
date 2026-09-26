import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-4 border-t border-white/20 md:px-8 lg:px-10 px-4 py-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 justify-between">
          <Image
            src="/logo.png"
            alt="logo"
            height={40}
            width={67}
            className="h-[34px] w-[30px]"
          ></Image>

          <h2 className=" font-bold text-[#FFFFFF]">FITLOG</h2>
        </div>

        <div className="  text-[#6B7280]">
          <p>© 2026 FitLog — Workout Library. Train hard, log honest</p>
        </div>
      </div>
    </footer>
  );
}
