import { ComponentProps } from "react";
import * as devices from "../../../data/devices";
import type { DeviceID } from "../../../data/devices";

function Device({
  id,
  x,
  y,
  width,
  height,
  ...props
}: { id: string; width: number; height: number } & ComponentProps<"g">) {
  const { name, color } = devices.map[id as DeviceID];
  const fontSize = width / 10;

  return (
    <g
      transform={`translate(${x},${y})`}
      width={width}
      height={height}
      {...props}
    >
      <rect
        x="1"
        y="1"
        width={width - 2}
        height={height - 2}
        rx=".89"
        ry=".89"
        fill={color}
        opacity=".1"
        strokeWidth="0"
      />
      <text
        x={width / 2}
        y={height / 2}
        width={10}
        dominantBaseline="middle"
        textAnchor="middle"
        fill={color}
        fontSize={fontSize}
      >
        {name}
      </text>
    </g>
  );
}

export default Device;
