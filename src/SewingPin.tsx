import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSewingPin = ({
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
      d="M9 6.83a3.001 3.001 0 1 0-2 0V14a1 1 0 1 0 2 0V6.83ZM7 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSewingPin;
