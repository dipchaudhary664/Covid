import Image from "next/image";

export default function Symtoms() {
  return (
    <section className="px-5 md:px-10 lg:px-20 py-10 bg-[#F0ECF9]">
      <div className="w-full flex flex-col items-center justify-center pb-10">
        <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#6F42C1]">
          Symtoms of coranavirus
        </h3>
        <p className="text-sm font-normal text-gray-400 ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint officia.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-5">
        <div className="bg-white h-44 md:h-44 lg:h-36 flex flex-row gap-5 items-start justify-start p-5 rounded-xl shadow-xl">
          <Image src="/fever.png" alt="hero" width={100} height={100} />
          <div className="flex flex-col items-start justify-center gap-3">
            <h3 className="text-lg font-bold text-[#6F42C1]">Fever</h3>
            <p className="text-sm font-normal text-gray-400">
              Amet minim mollit non deserunt ullam est sit aliqua dolor do amet
              sint. Velit consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div className="bg-white h-44 md:h-44 lg:h-36 flex flex-row gap-5 items-start justify-start p-5 rounded-xl shadow-xl">
          <Image src="/dizzy.png" alt="hero" width={100} height={100} />
          <div className="flex flex-col items-start justify-center gap-3">
            <h3 className="text-lg font-bold text-[#6F42C1]">Fever</h3>
            <p className="text-sm font-normal text-gray-400">
              Amet minim mollit non deserunt ullam est sit aliqua dolor do amet
              sint. Velit consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div className="bg-white  h-44 md:h-44 lg:h-36 flex flex-row gap-5 items-start justify-start p-5 rounded-xl shadow-xl">
          <Image src="/patient.png" alt="hero" width={100} height={100} />
          <div className="flex flex-col items-start justify-center gap-3">
            <h3 className="text-lg font-bold text-[#6F42C1]">Fever</h3>
            <p className="text-sm font-normal text-gray-400">
              Amet minim mollit non deserunt ullam est sit aliqua dolor do amet
              sint. Velit consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div className="bg-white  h-44 md:h-44 lg:h-36 flex flex-row gap-5 items-start justify-start p-5 rounded-xl shadow-xl">
          <Image src="/sore-throat.png" alt="hero" width={100} height={100} />
          <div className="flex flex-col items-start justify-center gap-3">
            <h3 className="text-lg font-bold text-[#6F42C1]">Fever</h3>
            <p className="text-sm font-normal text-gray-400">
              Amet minim mollit non deserunt ullam est sit aliqua dolor do amet
              sint. Velit consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
