import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExternalLink = ({
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
      d="M12 9v3.667A1.334 1.334 0 0 1 10.667 14H3.333A1.334 1.334 0 0 1 2 12.667V5.333A1.333 1.333 0 0 1 3.333 4H7m0 5 7-7m0 0h-4m4 0v4"
    />
  </svg>
);
export default SvgExternalLink;
