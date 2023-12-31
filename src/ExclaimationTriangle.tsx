import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExclaimationTriangle = ({
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
    <g clipPath="url(#exclaimation-triangle_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 6v3m0 3h.007M6.854 1.745 1.18 12.68c-.117.234-.18.499-.18.769s.06.536.176.77c.116.235.283.43.484.567.202.137.431.211.665.214h11.35a1.21 1.21 0 0 0 .665-.214 1.46 1.46 0 0 0 .484-.567c.116-.234.177-.5.176-.77 0-.27-.063-.535-.18-.77L9.146 1.746a1.451 1.451 0 0 0-.489-.546C8.457 1.069 8.23 1 8 1c-.23 0-.457.069-.657.199a1.44 1.44 0 0 0-.489.546Z"
      />
    </g>
    <defs>
      <clipPath id="exclaimation-triangle_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgExclaimationTriangle;
