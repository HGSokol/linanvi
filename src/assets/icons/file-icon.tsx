import type { FC } from "react";

export interface IIcon {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const FileIcon: FC<IIcon> = ({
  width = 34,
  height = 40,
  color = "#fff",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 34 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.4999 2.40015V9.00015C22.4999 10.2152 23.4849 11.2001 24.6999 11.2001H31.2999M10.3999 11.2001H14.7999M10.3999 17.8001H23.5999M10.3999 24.4001H23.5999M27.9999 5.70015C27.0208 4.82407 26.0047 3.78501 25.3633 3.11016C24.9365 2.66109 24.3467 2.40015 23.7272 2.40015H7.09939C4.66935 2.40015 2.6994 4.37008 2.69939 6.80012L2.69922 33.2C2.6992 35.6301 4.66914 37.6 7.0992 37.6L26.8993 37.6001C29.3293 37.6001 31.2992 35.6302 31.2993 33.2002L31.2999 9.87617C31.2999 9.31363 31.0853 8.77288 30.6949 8.36789C29.9729 7.619 28.7673 6.38676 27.9999 5.70015Z"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FileIcon;
