"use client";
import React, { useState } from "react";
import { NAV_LINKS } from "@/constants";
import { IoMenu, IoClose } from "react-icons/io5";

export default function NavBar() {
  const [isopenNav, setIsOpenNav] = useState(true);

  const handleOpenNav = () => {
    setIsOpenNav(!isopenNav);
  };

  return (
    <section className="px-5 md:px-10 lg:px-20 pt-5 flex items-center justify-between bg-[#F0ECF9] w-full">
      <h1 className="text-3xl font-bold">Covid.</h1>
      <ul className="flex gap-5 ">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="cursor-pointer hover:font-bold hidden md:flex lg:flex"
          >
            {link.label}
          </li>
        ))}
      </ul>
      <button
        className="cursor-pointer text flex md:hidden lg:hidden"
        onClick={handleOpenNav}
      >
        <IoMenu size={35} className="" />
      </button>
      {!isopenNav ? (
        <div className="fixed inset-0 z-50 flex items-start justify-start bg-black bg-opacity-50">
          <div className="bg-[#f5f5f5] w-72 p-8 rounded-lg">
            <h1 className="text-3xl font-bold">Covid.</h1>
            <button
              className="absolute top-5 right-28 text-gray-600 hover:text-gray-800"
              onClick={handleOpenNav}
            >
              <IoClose size={35} />
            </button>
            <ul className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.key}
                  className=" text-2xl cursor-pointer py-2 px-6 rounded-lg hover:bg-[#6F42C1] hover:text-slate-50"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
}
