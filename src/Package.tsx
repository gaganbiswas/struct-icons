import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPackage = ({
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
      d="M11 6.267 5.335 3M2.18 4.64 8 8.007l5.82-3.367M8 14.72V8m6 2.667V5.333a1.333 1.333 0 0 0-.667-1.153L8.667 1.513a1.333 1.333 0 0 0-1.334 0L2.667 4.18A1.333 1.333 0 0 0 2 5.333v5.334a1.334 1.334 0 0 0 .667 1.153l4.666 2.667a1.334 1.334 0 0 0 1.334 0l4.666-2.667A1.333 1.333 0 0 0 14 10.667Z"
    />
  </svg>
);
export default SvgPackage;
