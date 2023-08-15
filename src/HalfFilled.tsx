import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHalfFilled = ({
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
    <g clipPath="url(#half-filled_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2 8a6 6 0 0 1 6-6v12a6 6 0 0 1-6-6Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="half-filled_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHalfFilled;
