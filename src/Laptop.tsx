import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLaptop = ({
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
      fillRule="evenodd"
      d="M2.75 2A1.75 1.75 0 0 0 1 3.75V12H0v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1h-1V3.75A1.75 1.75 0 0 0 13.25 2H2.75ZM3 11V4h10v7H3Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLaptop;
