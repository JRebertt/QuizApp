import { InfoBox } from "./components/InfoBox";
import { QuizBox } from "./components/QuizBox";
import "./styles/global.css";
function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* <InfoBox /> */}
      <QuizBox />
    </div>
  );
}

export default App;
