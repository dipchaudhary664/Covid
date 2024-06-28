import { DoAvoid_SECTION } from "@/constants";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Protect() {
  return (
    <section className="px-5 md:px-10 lg:px-20 py-10 bg-white">
      <div className="w-full flex flex-col items-center gap-4 py-10">
        <h2 className="text-3xl font-bold text-[#6F42C1]">
          How to protect yourself
        </h2>
        <p className="text-xl font-normal text-slate-600">
          Amet minim mollit non deserunt ullamco est sit do amet sint officia.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center gap-4 ">
        {DoAvoid_SECTION.map((section) => (
          <div className="flex flex-col items-start gap-5" key={section.title}>
            <h3 className="text-2xl font-bold text-[#6F42C1]">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {section.links.map((link) => (
                <li
                  key={link}
                  className="text-sm font-normal text-slate-600 flex gap-2 items-center"
                >
                  <IoIosCheckmarkCircle color="#6F42C1" size={20} />
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Image src="/img03.png" alt="hero" width={500} height={500} />
      </div>
    </section>
  );
}
