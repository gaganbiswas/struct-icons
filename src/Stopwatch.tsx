import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStopwatch = ({
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 3a6 6 0 1 0 0 12A6 6 0 0 0 8 3Zm0 0V1m0 9V6m0-5h2M8 1H6m6.5 3.5L14 3"
    />
  </svg>
);
export default SvgStopwatch;
