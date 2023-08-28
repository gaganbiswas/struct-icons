import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExitFullScreen = ({
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
      d="M11 2v1.667A1.334 1.334 0 0 0 12.333 5H14m-3 9v-1.667A1.334 1.334 0 0 1 12.333 11H14M5 2v1.667A1.333 1.333 0 0 1 3.667 5H2m3 9v-1.667A1.333 1.333 0 0 0 3.667 11H2"
    />
  </svg>
);
export default SvgExitFullScreen;
