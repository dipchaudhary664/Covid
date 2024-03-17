import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="px-5 md:px-10 lg:px-20 pt-10 bg-[#F0ECF9]">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-5">
        {/* left */}
        <div className="w-full sm:w-auto mb-4 sm:mb-0 order-last sm:order-first">
          <p className="text-xl text-[#6F42C1] font-medium">
            covid-19 awareness
          </p>
          <h1 className="text-3xl lg:text-6xl text-[#6F42C1] font-bold">
            stay safe. stay Home.
          </h1>
          <p className="text-xl font-normal">
            Amet minim mollit non deserunt ullamco est sit do amet sint officia.
          </p>
          <p className="text-xl font-normal">
            Velit officia consequat duis enim velit mollit.
          </p>
          <div className="mt-5">
            <Button
              type="button"
              title="Get Started"
              variant="bg-[#6F42C1] text-white"
            />
          </div>
        </div>
        {/* right */}
        <div className="w-full sm:w-auto">
          <Image src="/banner.png" alt="hero" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}
