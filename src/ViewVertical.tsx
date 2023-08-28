import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgViewVertical = ({
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
      d="M2.5 1A2.5 2.5 0 0 0 0 3.5v9A2.5 2.5 0 0 0 2.5 15h11a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 13.5 1h-11ZM7 3H2.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H7V3Zm2 10h4.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H9v10Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgViewVertical;
