import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMixerHorizontal = ({
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
    <path
      fill="currentColor"
      d="M15 5a1 1 0 1 0 0-2v2ZM1 3a1 1 0 0 0 0 2V3Zm14 10a1 1 0 1 0 0-2v2ZM1 11a1 1 0 1 0 0 2v-2Zm14-8H8v2h7V3ZM1 5h3V3H1v2Zm6-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3H7ZM6 5a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3V5ZM5 4a1 1 0 0 1 1-1V1a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm9 8h-3v2h3v-2ZM1 13h7v-2H1v2Zm10-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1a1 1 0 0 1-1-1H7a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1V9a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Z"
    />
  </svg>
);
export default SvgMixerHorizontal;
