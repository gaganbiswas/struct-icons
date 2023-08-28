import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWifiOff = ({
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
    <g clipPath="url(#wifi-off_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 1 14 14M3.369 7.994A7.278 7.278 0 0 1 6.365 6.5M11 6.943c.602.27 1.17.622 1.684 1.05M1 5.646A10.584 10.584 0 0 1 3.729 3.9M15 5.645a10.586 10.586 0 0 0-8-2.598M5.704 10.35a3.97 3.97 0 0 1 4.599 0M8 13h.007"
      />
    </g>
    <defs>
      <clipPath id="wifi-off_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWifiOff;
