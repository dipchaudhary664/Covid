import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { PiUsersThree } from "react-icons/pi";

export default function News() {
  return (
    <section className="px-5 md:px-10 lg:px-20 py-10 bg-white">
      <div className="w-full flex flex-col items-center justify-center pb-10">
        <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#6F42C1] py-4">
          News and Articles
        </h3>
        <p className="text-sm font-normal text-gray-400">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <p className="text-sm font-normal text-gray-400">
          Amet minim mollit non deserunt ullamco est sit
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center gap-5 gap-y-40 pt-32">
        <div className="h-52 flex flex-col items-center justify-center relative w-full md:w-auto lg:w-auto pb-28">
          <Image src="/img01.jpg" alt="hero" width={400} height={400} />
          <div className="absolute top-24 md:top-28 lg:top-28 bg-[#6F42C1] text-white text-xs px-6 py-1">
            5 March. 2024
          </div>
          <div className="flex flex-row gap-5 md:gap-32 items-center pt-5">
            <p className="text-sm font-normal text-gray-400 flex gap-2 items-center">
              <FaRegUser />
              Admin
            </p>
            <p className="text-sm font-normal text-gray-400 flex gap-2 items-center">
              <PiUsersThree size={20} />2 Comments
            </p>
          </div>
          <p className="text-lg font-semibold text-[#6F42C1] py-5">
            How coronavirus very contagious
          </p>
        </div>
        <div className="h-52 flex flex-col items-center justify-center relative w-full md:w-auto lg:w-auto pb-28">
          <Image src="/img01.jpg" alt="hero" width={400} height={400} />
          <div className="absolute top-24 md:top-28 lg:top-28 bg-[#6F42C1] text-white text-xs px-6 py-1">
            5 March. 2024
          </div>
          <div className="flex flex-row gap-5 md:gap-32 items-center pt-5">
            <p className="text-sm font-normal text-gray-400 flex gap-2 items-center">
              <FaRegUser />
              Admin
            </p>
            <p className="text-sm font-normal text-gray-400 flex gap-2 items-center">
              <PiUsersThree size={20} />2 Comments
            </p>
          </div>
          <p className="text-lg font-semibold text-[#6F42C1] py-5">
            How coronavirus very contagious
          </p>
        </div>
      </div>
    </section>
  );
}
