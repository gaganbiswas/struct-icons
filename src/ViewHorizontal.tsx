import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgViewHorizontal = ({
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
      d="M2.5 1A2.5 2.5 0 0 0 0 3.5v9A2.5 2.5 0 0 0 2.5 15h11a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 13.5 1h-11ZM14 7V3.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V7h12ZM2 9v3.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V9H2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgViewHorizontal;
