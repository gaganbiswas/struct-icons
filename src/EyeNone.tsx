import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEyeNone = ({
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
    <g clipPath="url(#eye-none_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.206 4.296C2.13 5.778 1 8 1 8s2.545 5 7 5c1.423 0 2.65-.51 3.663-1.204M7 3.086A5.893 5.893 0 0 1 8 3c4.455 0 7 5 7 5s-.477.937-1.38 2M6.5 6.677A2 2 0 0 0 9.323 9.5M1 1l14 14"
      />
    </g>
    <defs>
      <clipPath id="eye-none_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEyeNone;
