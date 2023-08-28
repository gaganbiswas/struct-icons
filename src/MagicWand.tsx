import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMagicWand = ({
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
    <g clipPath="url(#magic-wand_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9 7 1-1m-9 9 6-6m-.5-8v1.5m0 0V4m0-1.5H5m1.5 0H8M13.5 1v1.5m0 0V4m0-1.5H12m1.5 0H15M13.5 8v1.5m0 0V11m0-1.5H12m1.5 0H15"
      />
    </g>
    <defs>
      <clipPath id="magic-wand_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMagicWand;
