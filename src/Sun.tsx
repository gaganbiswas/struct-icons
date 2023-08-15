import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSun = ({
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
    <g clipPath="url(#sun_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M8 1v1M1 8h1m12 0h1m-7 6v1m6-13-1 1M2 2l1 1m0 10-1 1m11-1 1 1m-3-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </g>
    <defs>
      <clipPath id="sun_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSun;
