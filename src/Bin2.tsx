import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBin2 = ({
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
      d="M2 4h12M5.5 4V2.25A1.25 1.25 0 0 1 6.75 1h2.5a1.25 1.25 0 0 1 1.25 1.25V4m-4 3.5v4m3-4v4M13 4v9.625A1.375 1.375 0 0 1 11.625 15h-7.25A1.375 1.375 0 0 1 3 13.625V4h10Z"
    />
  </svg>
);
export default SvgBin2;
