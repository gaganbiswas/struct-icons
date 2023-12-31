import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbsUp = ({
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
    <g clipPath="url(#thumbs-up_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15V7.01L7.522 1a2.1 2.1 0 0 1 2.1 2.1V6h3.962a1.4 1.4 0 0 1 1.4 1.61l-.966 6.2a1.4 1.4 0 0 1-1.4 1.19H5Zm0 0H2.694A1.68 1.68 0 0 1 1 13.545v-5.09A1.68 1.68 0 0 1 2.694 7H5"
      />
    </g>
    <defs>
      <clipPath id="thumbs-up_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThumbsUp;
