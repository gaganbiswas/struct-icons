import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolder = ({
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
      d="M15 12.667A1.334 1.334 0 0 1 13.667 14H2.333A1.334 1.334 0 0 1 1 12.667V3.333A1.333 1.333 0 0 1 2.333 2H5.5L7 4h6.667A1.333 1.333 0 0 1 15 5.333v7.334Z"
    />
  </svg>
);
export default SvgFolder;
