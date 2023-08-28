import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhone = ({
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
    <g clipPath="url(#phone_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11.482v2.107a1.404 1.404 0 0 1-1.535 1.405 13.949 13.949 0 0 1-6.075-2.156 13.712 13.712 0 0 1-4.223-4.216 13.885 13.885 0 0 1-2.161-6.09A1.403 1.403 0 0 1 2.406 1h2.112a1.41 1.41 0 0 1 1.408 1.208c.09.675.255 1.337.493 1.975a1.402 1.402 0 0 1-.317 1.482l-.894.892a11.252 11.252 0 0 0 4.224 4.215l.894-.892a1.409 1.409 0 0 1 1.485-.316 9.053 9.053 0 0 0 1.978.492 1.408 1.408 0 0 1 1.21 1.426Z"
      />
    </g>
    <defs>
      <clipPath id="phone_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhone;
