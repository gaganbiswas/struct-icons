import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhoneOff = ({
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
    <g clipPath="url(#phone-off_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.086 9a11.259 11.259 0 0 0 2.346 1.772l.894-.892a1.409 1.409 0 0 1 1.485-.316 9.057 9.057 0 0 0 1.978.492 1.408 1.408 0 0 1 1.21 1.426v2.107a1.403 1.403 0 0 1-.956 1.337 1.41 1.41 0 0 1-.578.068 13.948 13.948 0 0 1-6.075-2.156A13.718 13.718 0 0 1 5.084 11M3.167 8.622a13.885 13.885 0 0 1-2.161-6.09 1.402 1.402 0 0 1 .833-1.412A1.41 1.41 0 0 1 2.407 1h2.111a1.41 1.41 0 0 1 1.408 1.208 9.06 9.06 0 0 0 .493 1.974 1.402 1.402 0 0 1-.317 1.483l-.894.892M15 1 1 15"
      />
    </g>
    <defs>
      <clipPath id="phone-off_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhoneOff;
