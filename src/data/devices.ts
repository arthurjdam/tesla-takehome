export type DeviceID =
  | "megapack-2xl"
  | "megapack-2"
  | "megapack"
  | "powerpack"
  | "transformer";

export type Device = {
  id: DeviceID;
  name: string;
  width: number;
  height: number;
  energy: number;
  cost: number;
  releaseDate?: number;
  color: string;
};

export const list = [
  {
    id: "megapack-2xl",
    name: "Megapack 2XL",
    width: 40,
    height: 10,
    energy: 4,
    cost: 120000,
    releaseDate: 2022,
    color: "#02b028",
  },
  {
    id: "megapack-2",
    name: "Megapack 2",
    width: 30,
    height: 10,
    energy: 3,
    cost: 80000,
    releaseDate: 2021,
    color: "#f29137",
  },
  {
    id: "megapack",
    name: "Megapack",
    width: 30,
    height: 10,
    energy: 2,
    cost: 50000,
    releaseDate: 2005,
    color: "#eb432f",
  },
  {
    id: "powerpack",
    name: "Powerpack",
    width: 10,
    height: 10,
    energy: 1,
    cost: 20000,
    releaseDate: 2000,
    color: "#e13e8c",
  },
  {
    id: "transformer",
    name: "Transformer",
    width: 10,
    height: 10,
    energy: -0.25,
    cost: 10000,
    color: "#863ee1",
  },
] as Array<Device>;

export const map = list.reduce(
  (acc, device) => {
    acc[device.id] = device;
    return acc;
  },
  {} as Record<DeviceID, Device>,
);
