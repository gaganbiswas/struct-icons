import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgViewGrid = ({
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
      d="M0 3.5A2.5 2.5 0 0 1 2.5 1h11A2.5 2.5 0 0 1 16 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5v-9ZM9 13h4.5a.5.5 0 0 0 .5-.5V9H9v4ZM7 9v4H2.5a.5.5 0 0 1-.5-.5V9h5Zm2-2h5V3.5a.5.5 0 0 0-.5-.5H9v4ZM7 3v4H2V3.5a.5.5 0 0 1 .5-.5H7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgViewGrid;
