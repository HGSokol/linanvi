import type { FC } from "react";

export interface IIcon {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const MapIcon: FC<IIcon> = ({
  width = 38,
  height = 34,
  color = "#fff",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 38 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8125 30.4445V6.52385M24.1562 26.4286V2.38248M2.5 27.4762V2.33337L12.5435 6.52385L24.0217 2.33337L35.5 6.52385V31.6667L24.0217 27.4762L12.5435 31.6667L2.5 27.4762Z"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MapIcon;
