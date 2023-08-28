import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicOff = ({
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
    <g clipPath="url(#mic-off_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 1 14 14M6 6v2.086A2 2 0 0 0 9.414 9.5m2.122 2.036A5 5 0 0 1 8 13m0 0a5 5 0 0 1-5-5V7m5 6v2m-2.5 0h5M10 6.086V3a2 2 0 0 0-3.732-1M13 7v1c0 .338-.034.673-.101 1"
      />
    </g>
    <defs>
      <clipPath id="mic-off_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMicOff;
