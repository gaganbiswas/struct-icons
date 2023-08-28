import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBriefcase = ({
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
      d="M11 14V3.5A1.5 1.5 0 0 0 9.5 2h-3A1.5 1.5 0 0 0 5 3.5V14M2.4 5h11.2A1.4 1.4 0 0 1 15 6.4v6.2a1.4 1.4 0 0 1-1.4 1.4H2.4A1.4 1.4 0 0 1 1 12.6V6.4A1.4 1.4 0 0 1 2.4 5Z"
    />
  </svg>
);
export default SvgBriefcase;
