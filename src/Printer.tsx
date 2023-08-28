import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPrinter = ({
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
    <g clipPath="url(#printer_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6V1h8v5m-8 6H2.4A1.4 1.4 0 0 1 1 10.6V7.4A1.4 1.4 0 0 1 2.4 6h11.2A1.4 1.4 0 0 1 15 7.4v3.2a1.4 1.4 0 0 1-1.4 1.4H12m-8-2h8v5H4v-5Z"
      />
    </g>
    <defs>
      <clipPath id="printer_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPrinter;
