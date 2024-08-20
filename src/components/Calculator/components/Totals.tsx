import { useCalculatorContext } from "../../../context/CalculatorContext";
import { formatEnergy, formatPower, formatPrice } from "../../../util/string";

function Total({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-2 py-4">
      <small>{title}</small>
      <h3 className="font-bold text-lg">{value}</h3>
    </div>
  );
}

function Totals() {
  const { price, energy, power, area, pack } = useCalculatorContext();
  return (
    <div className="grid gap-8">
      <div className="flex flex-col divide-y">
        <div className="grid grid-cols-2 divide-x">
          <Total title="Power" value={formatPower(power)} />
          <Total title="Energy" value={formatEnergy(energy)} />
        </div>
        <div className="grid grid-cols-2 divide-x">
          <Total title="Ground coverage" value={`${area} sqft`} />
          <Total
            title="Minimum site dimensions"
            value={`${pack?.containerWidth}ft × ${pack?.containerHeight}ft`}
          />
        </div>
      </div>
      <div className="w-full flex items-center flex-col justify-center">
        <small>Estimated cost</small>
        <h2 className="font-bold text-2xl">{formatPrice(price)}</h2>
      </div>
    </div>
  );
}

export default Totals;
