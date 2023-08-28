import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCoffee = ({
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5h1.5a2.5 2.5 0 0 1 0 5H11m0-5H1v6.333A2.667 2.667 0 0 0 3.667 14h4.666A2.667 2.667 0 0 0 11 11.333V5ZM3 1v1m3-1v1m3-1v1"
    />
  </svg>
);
export default SvgCoffee;
