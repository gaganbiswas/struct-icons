import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLink2 = ({
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
      d="m9.386 12.159-.693.693a3.922 3.922 0 1 1-5.545-5.545l.693-.693m8.318 2.772.693-.693a3.923 3.923 0 0 0 0-5.545 3.92 3.92 0 0 0-5.545 0l-.693.693M5.92 10.08l4.158-4.158"
    />
  </svg>
);
export default SvgLink2;
