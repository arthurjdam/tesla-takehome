import clsx from "clsx";
import InputField from "./components/InputField";
import Totals from "./components/Totals";

type CalculatorProps = {
  className?: string;
};

function Calculator({ className }: CalculatorProps) {
  return (
    <div className={clsx("p-4 max-w-screen-sm space-y-8", className)}>
      <h2 className="text-2xl font-bold">Battery pack Calculator</h2>
      <p>Enter the number of each pack you would plan to install</p>
      <form className="flex flex-col gap-2 container">
        <InputField id="megapack-2xl" />
        <InputField id="megapack-2" />
        <InputField id="megapack" />
        <InputField id="powerpack" />
        <InputField id="transformer" disabled />
      </form>
      <Totals />
    </div>
  );
}

export default Calculator;
