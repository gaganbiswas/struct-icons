import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCopy = ({
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
    <g fill="currentColor" clipPath="url(#copy_svg__a)">
      <path d="M2.5 0A2.5 2.5 0 0 0 0 2.5v6A2.5 2.5 0 0 0 2.5 11H3a1 1 0 1 0 0-2h-.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5V3a1 1 0 1 0 2 0v-.5A2.5 2.5 0 0 0 8.5 0h-6Z" />
      <path
        fillRule="evenodd"
        d="M7.5 5A2.5 2.5 0 0 0 5 7.5v6A2.5 2.5 0 0 0 7.5 16h6a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 13.5 5h-6ZM7 7.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-6Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="copy_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCopy;
