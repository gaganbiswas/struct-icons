import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlayCircle = ({
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
    <g clipPath="url(#play-circle_svg__a)">
      <path
        fill="currentColor"
        d="m6.5 5 .6-.8a1 1 0 0 0-1.6.8h1Zm4 3 .6.8a1 1 0 0 0 0-1.6l-.6.8Zm-4 3h-1a1 1 0 0 0 1.6.8l-.6-.8Zm-.6-5.2 4 3 1.2-1.6-4-3-1.2 1.6Zm4 1.4-4 3 1.2 1.6 4-3-1.2-1.6ZM7.5 11V5h-2v6h2ZM14 8a6 6 0 0 1-6 6v2a8 8 0 0 0 8-8h-2Zm-6 6a6 6 0 0 1-6-6H0a8 8 0 0 0 8 8v-2ZM2 8a6 6 0 0 1 6-6V0a8 8 0 0 0-8 8h2Zm6-6a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8v2Z"
      />
    </g>
    <defs>
      <clipPath id="play-circle_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlayCircle;
