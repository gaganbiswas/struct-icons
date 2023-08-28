import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilePlus = ({
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
      d="M10 1H3.4A1.4 1.4 0 0 0 2 2.4v11.2A1.4 1.4 0 0 0 3.4 15h9.2a1.4 1.4 0 0 0 1.4-1.4V5m-4-4 4 4m-4-4v4h4m-6 7V8m-2 2h4"
    />
  </svg>
);
export default SvgFilePlus;
