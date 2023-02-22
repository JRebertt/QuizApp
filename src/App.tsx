import { InfoBox } from "./components/InfoBox";
import { QuizBox } from "./components/QuizBox";
import { ResultBox } from "./components/ResultBox";
import "./styles/global.css";
function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <InfoBox />
      {/* <QuizBox /> */}
      {/* <ResultBox /> */}
    </div>
  );
}

export default App;
