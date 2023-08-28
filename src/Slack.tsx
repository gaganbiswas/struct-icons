import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSlack = ({
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
    <g clipPath="url(#slack_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 6.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5ZM5 3h1V2a1 1 0 1 0-2 0 1 1 0 0 0 1 1Zm4.5 3a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v4a.5.5 0 0 0 .5.5ZM13 5v1h1a1 1 0 1 0 0-2 1 1 0 0 0-1 1Zm-3 4.5a.5.5 0 0 0 .5.5h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 0-.5.5Zm1 3.5h-1v1a1 1 0 1 0 2 0 1 1 0 0 0-1-1Zm-4.5-3a.5.5 0 0 0-.5.5v4a.5.5 0 1 0 1 0v-4a.5.5 0 0 0-.5-.5ZM3 11v-1H2a1 1 0 1 0 0 2 1 1 0 0 0 1-1Z"
      />
    </g>
    <defs>
      <clipPath id="slack_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSlack;
