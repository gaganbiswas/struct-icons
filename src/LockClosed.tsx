import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLockClosed = ({
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
      d="M5 7V4a3 3 0 1 1 6 0v3M3.333 7h9.334C13.403 7 14 7.597 14 8.333v5.334c0 .736-.597 1.333-1.333 1.333H3.333A1.333 1.333 0 0 1 2 13.667V8.333C2 7.597 2.597 7 3.333 7Z"
    />
  </svg>
);
export default SvgLockClosed;
