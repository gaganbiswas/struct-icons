import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCircleBackslash = ({
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
    <g clipPath="url(#circle-backslash_svg__a)">
      <path
        stroke="currentColor"
        strokeWidth={2}
        d="m3 3 10 10m2-5A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </g>
    <defs>
      <clipPath id="circle-backslash_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircleBackslash;
