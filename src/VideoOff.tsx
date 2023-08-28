import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoOff = ({
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
    <g clipPath="url(#video-off_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m.667.667 14.666 14.666M3 3h-.571C1.639 3 1 3.64 1 4.429v7.142C1 12.361 1.64 13 2.429 13H9.57c.79 0 1.429-.64 1.429-1.429V11m4 0V5l-3.5 2.625L11 7.5V4.429C11 3.639 10.36 3 9.571 3H7"
      />
    </g>
    <defs>
      <clipPath id="video-off_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVideoOff;
