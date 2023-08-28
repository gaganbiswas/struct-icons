import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGlobe = ({
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
    <g clipPath="url(#globe_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 8a7 7 0 0 1-7 7m7-7a7 7 0 0 0-7-7m7 7H1m7 7a7 7 0 0 1-7-7m7 7c1.876-1.917 2.942-4.404 3-7-.058-2.596-1.124-5.083-3-7m0 14c-1.876-1.917-2.942-4.404-3-7 .058-2.596 1.124-5.083 3-7M1 8a7 7 0 0 1 7-7"
      />
    </g>
    <defs>
      <clipPath id="globe_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGlobe;
