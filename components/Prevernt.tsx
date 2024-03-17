import { GoHomeFill } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "./Button";
export default function prevernt() {
  return (
    <section className="px-5 md:px-10 lg:px-20 py-10 bg-[#F0ECF9] ">
      <div className="flex flex-col md:flex-row lg:flex-row items-start">
        <div className="h-full w-full">
          <div className="grid grid-cols-2 grid-rows-2 mt-4">
            <div className="bg-white mt-14 h-60 w-40 flex flex-col rounded-lg shadow-2xl ">
              <div className="flex  items-center justify-center bg-[#E2D9F3] h-[40%] w-full rounded-t-lg">
                <GoHomeFill size={60} color="#6F42C1" />
              </div>
              <div className="flex flex-col items-start justify-center gap-2 p-4">
                <h4 className="text-lg font-bold">Stay at home</h4>
                <p className="text-sm font-normal text-gray-400">
                  Amet minim mollit non dese ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
            <div className="bg-white mt-5 h-60 w-40 flex flex-col rounded-lg shadow-2xl ">
              <div className="flex  items-center justify-center bg-[#E2D9F3] h-[40%] w-full rounded-t-lg">
                <GoHomeFill size={60} color="#6F42C1" />
              </div>
              <div className="flex flex-col items-start justify-center gap-2 p-4">
                <h4 className="text-lg font-bold">Stay at home</h4>
                <p className="text-sm font-normal text-gray-400">
                  Amet minim mollit non dese ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
            <div className="bg-white mt-14 h-60 w-40 flex flex-col rounded-lg shadow-2xl ">
              <div className="flex  items-center justify-center bg-[#E2D9F3] h-[40%] w-full rounded-t-lg">
                <GoHomeFill size={60} color="#6F42C1" />
              </div>
              <div className="flex flex-col items-start justify-center gap-2 p-4">
                <h4 className="text-lg font-bold">Stay at home</h4>
                <p className="text-sm font-normal text-gray-400">
                  Amet minim mollit non dese ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
            <div className="bg-white mt-5 h-60 w-40 flex flex-col rounded-lg shadow-2xl ">
              <div className="flex  items-center justify-center bg-[#E2D9F3] h-[40%] w-full rounded-t-lg">
                <GoHomeFill size={60} color="#6F42C1" />
              </div>
              <div className="flex flex-col items-start justify-center gap-2 p-4">
                <h4 className="text-lg font-bold">Stay at home</h4>
                <p className="text-sm font-normal text-gray-400">
                  Amet minim mollit non dese ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-5 mt-28">
          <h3 className="text-3xl font-bold text-[#6F42C1]">
            How to prevernt Coronavirus?
          </h3>
          <p className="text-sm font-normal text-gray-400">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
          </p>
          <p className="text-sm font-normal text-gray-400">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          <div className="w-full flex flex-col gap-2 pb-10">
            <p className=" flex gap-2 items-center text-sm">
              <IoIosCheckmarkCircle color="#6F42C1" />
              Amet minim mollit non deserunt
            </p>
            <p className=" flex gap-2 items-center text-sm">
              <IoIosCheckmarkCircle color="#6F42C1" />
              Deserunt ullamco est sit
            </p>
            <p className=" flex gap-2 items-center text-sm">
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
    </section>
  );
}
