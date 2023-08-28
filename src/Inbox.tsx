import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInbox = ({
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
      d="M15 8h-4l-1.5 2h-3L5 8H1m14 0v4.6a1.4 1.4 0 0 1-1.4 1.4H2.4A1.4 1.4 0 0 1 1 12.6V8m14 0-2.747-5.223A1.4 1.4 0 0 0 11 2H5a1.4 1.4 0 0 0-1.253.777L1 8"
    />
  </svg>
);
export default SvgInbox;
