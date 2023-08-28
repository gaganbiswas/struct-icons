import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbsDown = ({
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
    <g clipPath="url(#thumbs-down_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 1v7.99L8.478 15a2.1 2.1 0 0 1-2.1-2.1V10H2.416a1.4 1.4 0 0 1-1.4-1.61l.966-6.2A1.4 1.4 0 0 1 3.382 1H11Zm0 0h2.306A1.68 1.68 0 0 1 15 2.455v5.09A1.68 1.68 0 0 1 13.306 9H11"
      />
    </g>
    <defs>
      <clipPath id="thumbs-down_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThumbsDown;
