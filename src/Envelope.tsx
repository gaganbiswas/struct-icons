import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnvelope = ({
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.5 4.5 8 9 1.5 4.5M2.4 3h11.2c.77 0 1.4.63 1.4 1.4v7.2c0 .77-.63 1.4-1.4 1.4H2.4c-.77 0-1.4-.63-1.4-1.4V4.4C1 3.63 1.63 3 2.4 3Z"
    />
  </svg>
);
export default SvgEnvelope;
