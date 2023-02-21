import * as Separator from "@radix-ui/react-separator";
import { Crown } from "phosphor-react";

export function ResultBox() {
  return (
    <div className="absolute p-5 bg-white rounded-2xl w-11/12 max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ease-in-out duration-300 shadow-lg flex flex-col gap-5">
      <div className="text-black flex gap-6 sm:gap-8 pb-3 text-lg justify-center items-center p-5">
        <Crown size={132} className="text-[#007bff]" />
      </div>
      <div className="h-20">
        <span className="text-black text-xl font-medium flex justify-center p-2 text-center">
          You've Completed the Quiz! <br /> and sorry, You got only 2 out of 5
        </span>
      </div>

      <div className="flex justify-center px-2  gap-5 text-white text-base font-medium ">
        <button
          type="button"
          className="h-10 w-32 rounded-md bg-[#007bff] ease-in-out duration-300 hover:bg-[#0263ca] "
        >
          Next
        </button>
        <button
          type="button"
          className="h-10 w-32 rounded-md bg-gray-200 border-2 ease-in-out duration-300 border-[#007bff] text-[#007bff] hover:bg-[#007bff] hover:text-white "
        >
          Quit Quiz
        </button>
      </div>
    </div>
  );
}
