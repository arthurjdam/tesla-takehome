import { useCalculatorContext } from "../../context/CalculatorContext";
import Device from "./components/Device";

const arrowOffset = 5;

function Blueprint({ className }: { className?: string }) {
  const { pack } = useCalculatorContext();
  const width = pack?.containerWidth || 0;
  const height = pack?.containerHeight || 0;

  return (
    <div className="w-full h-full p-4 grid place-items-center bg-slate-50">
      <svg
        viewBox={`-10 -10 ${width + 12} ${height + 12}`}
        className={className}
      >
        <defs>
          <marker
            id="head"
            markerWidth="3"
            markerHeight="4"
            refX="0.1"
            refY="2"
            orient="auto-start-reverse"
          >
            <path d="M0,0 V4 L2,2 Z" fill="black" />
          </marker>
        </defs>
        {height > 0 ? (
          <>
            <line
              x1={-arrowOffset}
              y1="1"
              x2={-arrowOffset}
              y2={height - 1}
              stroke="black"
              strokeWidth="0.2"
              strokeOpacity="0.1"
              markerStart="url(#head)"
              markerEnd="url(#head)"
            />
            <line
              x1="0"
              y1={height}
              x2="-7"
              y2={height}
              stroke="black"
              strokeWidth="0.2"
              strokeOpacity="0.1"
            />
            <line
              x1="0"
              y1="0"
              x2="-7"
              y2="0"
              stroke="black"
              strokeWidth="0.2"
              strokeOpacity="0.1"
            />
            <text
              fontSize="2"
              transform={`translate(-8, ${height / 2}) rotate(-90)`}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {height} ft
            </text>
          </>
        ) : null}
        {width > 0 ? (
          <>
            <text x={width / 2} y="-6" fontSize="2" textAnchor="middle">
              {width} ft
            </text>
            <line
              x1="1"
              y1={-arrowOffset}
              x2={width - 1}
              y2={-arrowOffset}
              stroke="black"
              strokeWidth="0.2"
              strokeOpacity="0.1"
              markerStart="url(#head)"
              markerEnd="url(#head)"
            />
            <line
              x1={width}
              y1="0"
              x2={width}
              y2="-7"
              stroke="black"
              strokeWidth="0.2"
              strokeOpacity="0.1"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="-7"
              stroke="black"
              strokeWidth="0.2"
              strokeOpacity="0.1"
            />
          </>
        ) : null}
        {pack?.packedRectangles.map(({ id, x, y, width, height }, i) => (
          <Device id={id} key={i} x={x} y={y} width={width} height={height} />
        ))}
        ;
      </svg>
    </div>
  );
}

export default Blueprint;
