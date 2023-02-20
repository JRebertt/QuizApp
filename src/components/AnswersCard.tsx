import clsx from "clsx";

interface AnswerProps {
  answer: string;
  sort: boolean;
}
export function AnswersCard({ answer, sort }: AnswerProps) {
  return (
    <>
      <div
        className={clsx(
          "bg-blue-50 rounded-md py-3 px-4 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-300 ease-in-out duration-300",
          {
            "bg-red-400": sort === false,
            "bg-green-400": sort === true,
          }
        )}
      >
        <span className="font-normal text-xl"> {answer} </span>
      </div>
    </>
  );
}
