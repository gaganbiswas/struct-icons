import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEdit = ({
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
    <g clipPath="url(#edit_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 3H2.333A1.333 1.333 0 0 0 1 4.333v9.334A1.333 1.333 0 0 0 2.333 15h9.334A1.334 1.334 0 0 0 13 13.667V10m-.564-8.56a1.502 1.502 0 1 1 2.124 2.124l-6.727 6.728L5 11l.708-2.833 6.728-6.727Z"
      />
    </g>
    <defs>
      <clipPath id="edit_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEdit;
