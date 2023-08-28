import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgServer = ({
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
    <g clipPath="url(#server_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4h.007M4 12h.007M2.4 1h11.2A1.4 1.4 0 0 1 15 2.4v3.2A1.4 1.4 0 0 1 13.6 7H2.4A1.4 1.4 0 0 1 1 5.6V2.4A1.4 1.4 0 0 1 2.4 1Zm0 8h11.2a1.4 1.4 0 0 1 1.4 1.4v3.2a1.4 1.4 0 0 1-1.4 1.4H2.4A1.4 1.4 0 0 1 1 13.6v-3.2A1.4 1.4 0 0 1 2.4 9Z"
      />
    </g>
    <defs>
      <clipPath id="server_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgServer;
