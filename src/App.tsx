import Blueprint from "./components/Blueprint/Blueprint";
import Calculator from "./components/Calculator/Calculator";
import { CalculatorProvider } from "./context/CalculatorContext";

function App() {
  return (
    <CalculatorProvider>
      <div className="grid grid-cols-1 sm:grid-cols-[1fr,_2fr] gap-8 w-screen h-screen place-items-center">
        <Calculator className="max-w-screen-sm sm:justify-self-end sm:place-self-start" />
        <Blueprint className="overflow-y-scroll min-w-96 sm:justify-self-start max-w-screen-md" />
      </div>
    </CalculatorProvider>
  );
}

export default App;
