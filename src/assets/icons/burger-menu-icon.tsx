import type { FC } from "react";

export interface IIcon {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const BurgerMenuIcon: FC<IIcon> = ({
  width = 18,
  height = 8,
  color = "#fff",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 18 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H17M1 7.98254H17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BurgerMenuIcon;
