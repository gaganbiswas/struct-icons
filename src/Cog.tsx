import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCog = ({
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
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#cog_svg__a)"
    >
      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12.708 9.909a1.05 1.05 0 0 0 .21 1.158l.039.038a1.273 1.273 0 1 1-1.801 1.801l-.039-.038a1.05 1.05 0 0 0-1.158-.21 1.05 1.05 0 0 0-.636.961v.108a1.273 1.273 0 1 1-2.546 0v-.057a1.05 1.05 0 0 0-.687-.961 1.05 1.05 0 0 0-1.158.21l-.038.038a1.274 1.274 0 1 1-1.801-1.8l.038-.039a1.05 1.05 0 0 0 .21-1.158 1.05 1.05 0 0 0-.96-.636h-.109a1.273 1.273 0 0 1 0-2.546h.057a1.05 1.05 0 0 0 .961-.687 1.05 1.05 0 0 0-.21-1.158l-.038-.039a1.273 1.273 0 1 1 1.8-1.8l.04.038a1.05 1.05 0 0 0 1.157.21h.051a1.05 1.05 0 0 0 .637-.961v-.108a1.273 1.273 0 1 1 2.545 0v.057a1.05 1.05 0 0 0 .636.96 1.05 1.05 0 0 0 1.159-.21l.038-.037a1.273 1.273 0 1 1 1.8 1.8l-.038.039a1.05 1.05 0 0 0-.21 1.158v.05a1.05 1.05 0 0 0 .961.637h.108a1.273 1.273 0 1 1 0 2.546h-.057a1.05 1.05 0 0 0-.96.636Z" />
    </g>
    <defs>
      <clipPath id="cog_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCog;
