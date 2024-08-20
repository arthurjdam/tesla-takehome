import clsx from "clsx";
import { useCalculatorContext } from "../../../context/CalculatorContext";
import * as devices from "../../../data/devices";
import type { DeviceID } from "../../../data/devices";

type InputFieldProps = {
  id: DeviceID;
  disabled?: boolean;
};

function InputField({ id, disabled }: InputFieldProps) {
  const { name: title } = devices.map[id];
  const { allValues, setFieldValue } = useCalculatorContext();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setFieldValue(id, value);
    } else {
      console.log(`Invalid value: ${id} = ${event.target.value}`);
      setFieldValue(id, 0);
    }
  };

  return (
    <label className="flex justify-between items-center">
      <strong>{title}</strong>
      <input
        type="number"
        id={id}
        min="0"
        max="100"
        value={allValues[id] || "0"}
        onChange={onChange}
        placeholder="0"
        disabled={disabled}
        className={clsx(
          "bg-background-container rounded px-3 py-2.5 outline-none focus:ring-1 focus:ring-border",
          "disabled:opacity-60",
        )}
      />
    </label>
  );
}

export default InputField;
