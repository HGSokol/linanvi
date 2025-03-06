import type { FC } from "react";

export interface IIcon {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const PackageIcon: FC<IIcon> = ({
  width = 44,
  height = 44,
  color = "#fff",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.0661 13.2001L20.8241 4.40015L5.58203 13.2001V30.8001L20.8241 39.6001M36.0661 13.2001L20.8241 23.1001M36.0661 13.2001V22.0001M20.8241 39.6001V23.1001M20.8241 39.6001L24.123 37.6955M20.8241 23.1001L6.52408 14.3001M27.4241 17.6001L13.1241 8.80015M29.6241 33.0001L31.8241 35.2001L38.4241 28.6001"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PackageIcon;
