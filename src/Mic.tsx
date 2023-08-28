import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMic = ({
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
      d="M13 7v1a5 5 0 0 1-5 5m0 0a5 5 0 0 1-5-5V7m5 6v2m-2.5 0h5M8 1a2 2 0 0 0-2 2v5.086a2 2 0 1 0 4 0V3a2 2 0 0 0-2-2Z"
    />
  </svg>
);
export default SvgMic;
