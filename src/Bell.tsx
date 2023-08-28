import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBell = ({
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
      fillRule="evenodd"
      d="M8.995 1.099a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6v3.68c0 .415-.007.719-.083.973a.683.683 0 0 1-.375.458A1 1 0 0 0 3 13h10a1 1 0 0 0 .458-1.889.683.683 0 0 1-.375-.458C13.007 10.4 13 10.095 13 9.68V6c0-2.42-1.72-4.44-4.005-4.901ZM8 3a3 3 0 0 0-3 3v3.76c.001.3.003.755-.107 1.24h6.215c-.11-.485-.11-.94-.108-1.24V6a3 3 0 0 0-3-3Z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M6 14a2 2 0 0 0 2 2 2 2 0 0 0 2-2H6Z" />
  </svg>
);
export default SvgBell;
