import { AnswersCard } from "./AnswersCard";

interface QuestionsProps {
  title: string;
  answer: string;
  sort: boolean;
}

export function OptionList({ title, answer, sort }: QuestionsProps) {
  return (
    <div className="pb-5 text-black ">
      <div className="py-5 px-2">
        <span className="font-bold text-2xl">{title}</span>
      </div>
      {/* {QuestionsAnswers.optins.map((option, i) => {
        return (
          <span key={i}>
            <div className="p-2 flex flex-col gap-4">
              <AnswersCard answer={option.answers} sort={option.isCorrect} />
            </div>
          </span>
        );
      })} */}

      <div className="p-2 flex flex-col gap-4">
        <AnswersCard answer={answer} sort={sort} />
        <AnswersCard answer={answer} sort={sort} />
        <AnswersCard answer={answer} sort={sort} />
        <AnswersCard answer={answer} sort={sort} />
      </div>
    </div>
  );
}
