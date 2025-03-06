import type { FC } from "react";

export interface IIcon {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const ArrowIcon: FC<IIcon> = ({
  width = 18,
  height = 18,
  color = "#BEBEBE",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 17L1 9L9 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
