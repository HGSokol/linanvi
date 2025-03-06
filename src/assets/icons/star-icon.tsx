import type { FC } from "react";

export interface IIcon {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const StarIcon: FC<IIcon> = ({
  width = 40,
  height = 40,
  color = "#fff",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9692 3.81571C18.6676 1.92829 21.3371 1.92829 22.0355 3.8157L25.5117 13.21C25.7313 13.8034 26.1991 14.2712 26.7925 14.4908L36.1868 17.967C38.0742 18.6654 38.0742 21.3349 36.1868 22.0333L26.7925 25.5095C26.1991 25.7291 25.7313 26.1969 25.5117 26.7903L22.0355 36.1846C21.3371 38.072 18.6676 38.072 17.9692 36.1846L14.493 26.7903C14.2734 26.1969 13.8056 25.7291 13.2122 25.5095L3.8179 22.0333C1.93049 21.3349 1.93049 18.6654 3.8179 17.967L13.2122 14.4908C13.8056 14.2712 14.2734 13.8034 14.493 13.21L17.9692 3.81571Z"
        stroke={color}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarIcon;
