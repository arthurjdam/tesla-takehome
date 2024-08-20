import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { type DeviceID, map as devices } from "../data/devices";
import { guillotinePack, Rectangle } from "../util/math";

type IAllValues = Record<DeviceID, number>;
type IValues = Record<Exclude<DeviceID, "transformer">, number>;

interface ICalculatorContext {
  allValues: IAllValues;
  setFieldValue: (field: string, value: number) => void;
  price: number;
  energy: number;
  power: number;
  area: number;
  pack?: ReturnType<typeof guillotinePack>;
}

const CalculatorContext = createContext<ICalculatorContext>({
  allValues: {
    "megapack-2xl": 0,
    "megapack-2": 0,
    megapack: 0,
    powerpack: 0,
    transformer: 0,
  },
  setFieldValue: () => {},
  price: 0,
  energy: 0,
  power: 0,
  area: 0,
});

export const CalculatorProvider = ({ children }: { children?: ReactNode }) => {
  const [values, setValues] = useState<IValues>({
    "megapack-2xl": 0,
    "megapack-2": 0,
    megapack: 0,
    powerpack: 0,
  });

  const allValues = useMemo<IAllValues>(() => {
    const amount = Object.values(values).reduce((acc, value) => acc + value, 0);
    return {
      ...values,
      transformer: Math.ceil(amount / 4),
    };
  }, [values]);

  function setFieldValue(field: string, value: number): void {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  const [price, energy, area] = useMemo(
    () =>
      Object.entries(allValues).reduce(
        ([price, energy, area], [id, quantity]) => {
          const {
            cost,
            energy: deviceEnergy,
            width,
            height,
          } = devices[id as DeviceID];
          return [
            price + quantity * cost,
            energy + quantity * deviceEnergy,
            area + quantity * width * height,
          ];
        },
        [0, 0, 0],
      ),
    [allValues],
  );

  const rects = useMemo<Array<Rectangle>>(
    () =>
      Object.entries(allValues).reduce((acc, [id, value]) => {
        const { width, height } = devices[id as DeviceID];
        for (let i = 0; i < value; ++i) {
          acc.push({ id, width, height });
        }
        return acc;
      }, [] as Array<Rectangle>),
    [allValues],
  );
  const pack = useMemo(() => guillotinePack(rects, 100), [rects]);

  return (
    <CalculatorContext.Provider
      value={{
        allValues,
        setFieldValue,
        price,
        energy,
        power: energy / 2, // Unknown, but this seems close
        area,
        pack,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => useContext(CalculatorContext);

export default CalculatorContext;
