import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShuffle = ({
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
    <g fill="currentColor" clipPath="url(#shuffle_svg__a)">
      <path d="M13.707.293a1 1 0 1 0-1.414 1.414l.293.293H12c-1.565 0-2.667.894-3.49 1.946-.658.84-1.236 1.909-1.784 2.923-.118.22-.236.437-.352.65C4.974 10.062 3.604 12 1 12a1 1 0 1 0 0 2c3.896 0 5.776-3.063 7.126-5.518l.394-.724c.545-1.007 1.022-1.886 1.564-2.579C10.73 4.356 11.314 4 12 4h.586l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2Z" />
      <path d="M1 2c2.628 0 4.338 1.393 5.588 3.053-.268.463-.52.931-.758 1.37-.11.204-.216.401-.32.59C4.365 5.227 3.074 4 1 4a1 1 0 0 1 0-2Zm7.51 10.054a11.765 11.765 0 0 1-.728-1.057c.459-.673.843-1.349 1.176-1.953.375.675.733 1.275 1.126 1.777C10.73 11.644 11.314 12 12 12h.586l-.293-.293a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l.293-.293H12c-1.565 0-2.667-.894-3.49-1.946Z" />
    </g>
    <defs>
      <clipPath id="shuffle_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShuffle;
