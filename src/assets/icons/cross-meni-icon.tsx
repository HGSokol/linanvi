import type { FC } from "react";

export interface IIcon {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const CrossMenuIcon: FC<IIcon> = ({
  width = 24,
  height = 24,
  color = "#fff",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.24219 17L18.2422 5M18.2422 17L6.24219 5"
        stroke={color}
        strokeWidth="1.8"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CrossMenuIcon;
