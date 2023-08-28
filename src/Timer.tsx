import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTimer = ({
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
    <g fill="currentColor" clipPath="url(#timer_svg__a)">
      <path d="M8 0a1 1 0 0 0-1 1v2.473a1 1 0 0 0 2 0v-1.39A6.002 6.002 0 0 1 8 14a6 6 0 0 1-4.577-9.88A1 1 0 0 0 1.9 2.825 8 8 0 1 0 8 0Z" />
      <path d="M7.233 8.874 4.151 4.578a.306.306 0 0 1 .427-.427l4.296 3.082a1.176 1.176 0 1 1-1.64 1.641Z" />
    </g>
    <defs>
      <clipPath id="timer_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTimer;
