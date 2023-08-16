import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPauseCircle = ({
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
    <g clipPath="url(#pause-circle_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M6 6v4m4-4v4m5-2A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </g>
    <defs>
      <clipPath id="pause-circle_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPauseCircle;
