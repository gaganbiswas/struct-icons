import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOpenNewTab = ({
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
      d="M2 8V3.6A1.6 1.6 0 0 1 3.6 2h8.8A1.6 1.6 0 0 1 14 3.6v8.8a1.6 1.6 0 0 1-1.6 1.6H8m-5-1 6-6m0 0H5m4 0v4"
    />
  </svg>
);
export default SvgOpenNewTab;
