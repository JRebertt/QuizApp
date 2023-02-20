import * as Dialog from "@radix-ui/react-dialog";
import * as Separator from "@radix-ui/react-separator";

export function InfoBox() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"
        className="transition ease-in-out delay-150 text-2xl font-medium rounded-md hover:-translate-y-1 hover:scale-110 duration-300 px-9 py-2  bg-white text-[#007bff]"
      >
        Start
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="absolute p-10 bg-white rounded-2xl w-10/12 max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ease-in-out duration-300">
          <Dialog.Title className="font-semibold text-xl font-Poppins p-2">
            Some Rules of this Quiz
          </Dialog.Title>
          <Separator.Root className="border-b-2 border-gray-200" />
          <Dialog.Description className="py-5">
            <ul className="text-Poppins text-lg font-medium">
              <li>
                1. You will have only{" "}
                <span className="font-bold text-[#007bff]">15 seconds</span> per
                each question.
              </li>
              <li> 2. Once you select your answer, you can't reselect.</li>
              <li> 3. You can't select any option once time goes off.</li>
              <li> 4. You can't exit from the Quiz while you're playing.</li>
              <li>
                5. You'll get points on the basis of your correct answers.
              </li>
            </ul>
          </Dialog.Description>
          <div className="flex justify-end gap-5 text-white text-base font-medium ">
            <Dialog.Close className="h-10 w-24 rounded-md bg-gray-200 border-2 ease-in-out duration-300 border-[#007bff] text-[#007bff] hover:bg-[#007bff] hover:text-white">
              Exit Quiz
            </Dialog.Close>
            <button
              type="button"
              className="h-10 w-24 rounded-md bg-[#007bff] ease-in-out duration-300 hover:bg-[#0263ca] "
            >
              Continue
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
