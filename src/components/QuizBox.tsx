import * as Separator from "@radix-ui/react-separator";

import { OptionList } from "./OptionList";

export function QuizBox() {
  return (
    <>
      <div className="absolute p-5 bg-white rounded-2xl w-11/12 max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ease-in-out duration-300 shadow-lg">
        <div className="text-black flex gap-6 sm:gap-8 pb-3 text-lg justify-center items-center">
          <h1 className="font-semibold sm:text-lg font-Poppins">
            Awesome Quiz Application
          </h1>
          <div className="flex justify-center items-center w-40 sm:w-36 rounded-md h-11 gap-3  bg-blue-300 select-none ">
            <span className="font-medium">Time Left</span>
            <span className="font-medium w-11 h-8 rounded-md bg-[#343a40] text-white text-center">
              15
            </span>
          </div>
        </div>
        <Separator.Root className="border-b-2 border-gray-200 " />

        <OptionList answer="Teste" sort={false} title="Testando" />

        <div className="flex justify-between px-2 gap-5 text-white text-base font-medium ">
          <span className="text-black flex gap-1">
            <span>2</span>
            of
            <span>5</span>
            Questions
          </span>
          <button
            type="button"
            className="h-10 w-24 rounded-md bg-[#007bff] ease-in-out duration-300 hover:bg-[#0263ca] "
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
