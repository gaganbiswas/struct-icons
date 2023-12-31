import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLapTimer = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M6.114 5.472A4 4 0 0 1 8 5v4l2.828 2.828a4 4 0 1 1-4.714-6.356Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 0a1 1 0 0 0 0 2h1v.07A7.002 7.002 0 0 0 8 16a7 7 0 0 0 5.606-11.192l1.101-1.1a1 1 0 0 0-1.414-1.415l-1.1 1.1A6.965 6.965 0 0 0 9 2.072V2h1a1 1 0 1 0 0-2H6ZM3 9a5 5 0 1 1 10 0A5 5 0 0 1 3 9Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLapTimer;
