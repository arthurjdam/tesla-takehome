import { formatPrice, formatEnergy, formatPower, formatArea } from "./string";

describe("formatPrice", () => {
  it("should format a number as a price with commas and a dollar sign", () => {
    expect(formatPrice(1234567)).toBe("$1,234,567");
    expect(formatPrice(100)).toBe("$100");
    expect(formatPrice(1000)).toBe("$1,000");
    expect(formatPrice(1000000)).toBe("$1,000,000");
  });
});

describe("formatEnergy", () => {
  it("should format a number as TWh if greater than 1,000,000", () => {
    expect(formatEnergy(2000000)).toBe("2.0 TWh");
  });

  it("should format a number as GWh if greater than 1,000 but less than or equal to 1,000,000", () => {
    expect(formatEnergy(500000)).toBe("500.0 GWh");
  });

  it("should format a number as kWh if less than 1", () => {
    expect(formatEnergy(0.5)).toBe("500.0 kWh");
  });

  it("should format a number as MWh if between 1 and 1,000", () => {
    expect(formatEnergy(750)).toBe("750 MWh");
  });
});

describe("formatPower", () => {
  it("should format a number as TW if greater than 1,000,000", () => {
    expect(formatPower(3000000)).toBe("3.0 TW");
  });

  it("should format a number as GW if greater than 1,000 but less than or equal to 1,000,000", () => {
    expect(formatPower(250000)).toBe("250.0 GW");
  });

  it("should format a number as kW if less than 1", () => {
    expect(formatPower(0.3)).toBe("300.0 kW");
  });

  it("should format a number as MW if between 1 and 1,000", () => {
    expect(formatPower(850)).toBe("850 MW");
  });
});

describe("formatArea", () => {
  it("should format area in feet by default", () => {
    expect(formatArea(10, 20)).toBe("10ft x 20ft");
    expect(formatArea(15.5, 25.5)).toBe("15.5ft x 25.5ft");
  });

  it("should format area in meters if metric is true", () => {
    expect(formatArea(10, 20, true)).toBe("3.05m x 6.10m");
    expect(formatArea(15.5, 25.5, true)).toBe("4.72m x 7.77m");
  });
});
