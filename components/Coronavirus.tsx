import Image from "next/image";
import { FaBug } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "./Button";

export default function Coronavirus() {
  return (
    <section className="flex flex-col justify-center items-center w-full bg-white">
      <div className="flex flex-col items-center justify-center pt-10 px-5">
        <div className="w-full text-center pb-10">
          <h2 className="text-3xl text-[#6F42C1]">Coronavirus Statistics</h2>
          <p className="text-sm md:text-xl lg:text-xl font-normal">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <div className="w-full flex flex-row justify-between pb-20">
          <div className="flex flex-col items-center gap-5">
            <FaBug size={50} className="text-[#6F42C1]" />
            <h1 className="text-xl text-[#6F42C1] font-medium">95,856,25</h1>
            <p className="text-sm font-normal text-gray-400">ACTIVE CASES</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <FaBug size={50} className="text-[#6F42C1]" />
            <h1 className="text-xl text-[#6F42C1] font-medium">5,856,25</h1>
            <p className="text-sm font-normal text-gray-400">DEATH CASES</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <FaBug size={50} className="text-[#6F42C1]" />
            <h1 className="text-xl text-[#6F42C1] font-medium">595,856,25</h1>
            <p className="text-sm font-normal text-gray-400">RECOVRED CASES</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start px-5 md:px-10 lg:px-36 pb-10 lg:pb-32 ">
        <div className="w-full flex flex-col md:flex-row lg:flex-row gap-10 sm:w-auto">
          <div className="w-full sm:w-auto ">
            <Image
              src="/covid0.svg"
              alt="coronavirus"
              width={550}
              height={400}
              className="rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-3 items-start sm:w-auto">
            <h1 className="text-xl text-[#6F42C1] font-bold">
              What is coronavirus?
            </h1>
            <p className="text-sm font-normal text-slate-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation
            </p>
            <div className="w-full flex flex-col gap-2 pb-10">
              <p className=" flex gap-2 items-center text-sm text-slate-600">
                <IoIosCheckmarkCircle color="#6F42C1" />
                Amet minim mollit non deserunt
              </p>
              <p className=" flex gap-2 items-center text-sm text-slate-600">
                <IoIosCheckmarkCircle color="#6F42C1" />
                Deserunt ullamco est sit
              </p>
              <p className=" flex gap-2 items-center text-sm text-slate-600">
                <IoIosCheckmarkCircle color="#6F42C1" />
                Velit officia consequat duis enim
              </p>
            </div>
            <Button
              type="button"
              title="LEARN MORE"
              variant="bg-[#6F42C1] text-white"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start px-5 md:px-10 lg:px-36 pb-10 lg:pb-32">
        <div className="w-full flex flex-col md:flex-row lg:flex-row gap-10 sm:w-auto">
          <div className="flex flex-col gap-3 items-start sm:w-auto">
            <h1 className="text-xl text-[#6F42C1] font-bold">
              Why is it Dangerous?
            </h1>
            <p className="text-sm font-normal text-slate-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation
            </p>
            <div className="w-full flex flex-col gap-2 pb-10">
              <p className=" flex gap-2 items-center text-sm text-slate-600">
                <IoIosCheckmarkCircle color="#6F42C1" />
                Amet minim mollit non deserunt
              </p>
              <p className=" flex gap-2 items-center text-sm text-slate-600">
                <IoIosCheckmarkCircle color="#6F42C1" />
                Deserunt ullamco est sit
              </p>
              <p className=" flex gap-2 items-center text-sm text-slate-600">
                <IoIosCheckmarkCircle color="#6F42C1" />
                Velit officia consequat duis enim
              </p>
            </div>
            <Button
              type="button"
              title="LEARN MORE"
              variant="bg-[#6F42C1] text-white"
            />
          </div>
          <div className="w-full sm:w-auto ">
            <Image
              src="/covid1.svg"
              alt="coronavirus"
              width={550}
              height={400}
              className="rounded-sm"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 px-5 md:px-10 lg:px-36 pb-10 lg:pb-32">
        <div className="w-full md:w-auto lg:w-1/2 flex flex-col gap-10 md:gap-5 lg:gap-10 items-center">
          <div className="flex flex-row gap-5 items-center">
            <div>
              <Image
                src="/coronavirus.png"
                alt="coronavirus"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <h3 className="text-xl font-semibold text-[#6F42C1]">symptoms</h3>
              <p className="text-sm text-slate-600 font-normal w-40">
                Amet minim mollit non
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <div>
              <Image
                src="/family.png"
                alt="coronavirus"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <h3 className="text-xl font-semibold text-[#6F42C1]">
                protection
              </h3>
              <p className="text-sm font-normal text-slate-600 w-40">
                Amet minim mollit non
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto lg:w-1/2 flex flex-col gap-10 md:gap-5 lg:gap-10 items-center">
          <div className="flex flex-row gap-5 items-center">
            <div>
              <Image
                src="/security.png"
                alt="coronavirus"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <h3 className="text-xl font-semibold text-[#6F42C1]">security</h3>
              <p className="text-sm font-normal text-slate-600 w-40">
                Amet minim mollit non{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <div>
              <Image
                src="/treatment.png"
                alt="coronavirus"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <h3 className="text-xl font-semibold text-[#6F42C1]">
                treatment
              </h3>
              <p className="text-sm font-normal text-slate-600 w-40">
                Amet minim mollit non
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
