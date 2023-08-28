import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStar = ({
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
    <g clipPath="url(#star_svg__a)">
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8 1 1.652 5.348H15l-4.326 3.304L12.326 15 8 11.695 3.674 15l1.652-5.348L1 6.348h5.348L8 1Z"
      />
    </g>
    <defs>
      <clipPath id="star_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStar;
