import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClipboard = ({
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
      d="M12 3h.667A1.333 1.333 0 0 1 14 4.333v9.334A1.334 1.334 0 0 1 12.667 15H3.333A1.334 1.334 0 0 1 2 13.667V4.333A1.333 1.333 0 0 1 3.333 3H4m6.25-2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 3.25v-1.5A.75.75 0 0 1 5.75 1h4.5Z"
    />
  </svg>
);
export default SvgClipboard;
