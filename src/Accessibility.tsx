import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAccessibility = ({
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
    <g fill="currentColor" clipPath="url(#accessibility_svg__a)">
      <path d="M9.25 4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" />
      <path d="M6.243 6.03a1 1 0 0 0-.486 1.94L7 8.28v.806l-1.707 1.707a1 1 0 1 0 1.414 1.414L8 10.914l1.293 1.293a1 1 0 0 0 1.414-1.414L9 9.086V8.28l1.242-.31a1 1 0 1 0-.485-1.941L8 6.47l-1.757-.44Z" />
      <path
        fillRule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="accessibility_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAccessibility;
