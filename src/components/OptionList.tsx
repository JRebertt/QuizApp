import { AnswersCard } from "./AnswersCard";

export function OptionList() {
  return (
    <div className="py-5 text-black ">
      <div className="">
        <span className="font-bold text-2xl">What does HTML stand for?</span>
      </div>
      <div className="p-5 flex flex-col gap-4">
        <AnswersCard 
        answer="Alternativa 1" 
        sort={false} 
        />
        <AnswersCard 
        answer="Alternativa 2" 
        sort={false} 
        />
        <AnswersCard 
        answer="Alternativa 3" 
        sort={false} 
        />
        <AnswersCard 
        answer="Alternativa 4" 
        sort={true} 
        />
      </div>
    </div>
  );
}
