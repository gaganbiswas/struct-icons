import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideo = ({
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
      d="m15 5-4 3 4 3V5ZM9.571 3H2.43C1.639 3 1 3.64 1 4.429v7.142C1 12.361 1.64 13 2.429 13H9.57c.79 0 1.429-.64 1.429-1.429V4.43A1.427 1.427 0 0 0 9.571 3Z"
    />
  </svg>
);
export default SvgVideo;
