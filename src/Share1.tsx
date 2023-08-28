import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShare1 = ({
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
    <g clipPath="url(#share-1_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 0L5 4m6 4-6 4m0-9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </g>
    <defs>
      <clipPath id="share-1_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShare1;
