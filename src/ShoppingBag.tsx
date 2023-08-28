import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShoppingBag = ({
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
      d="m2 4 2.5-3h7L14 4M2 4v9.6A1.4 1.4 0 0 0 3.4 15h9.2a1.4 1.4 0 0 0 1.4-1.4V4M2 4h12m-3.5 3a2.5 2.5 0 0 1-5 0"
    />
  </svg>
);
export default SvgShoppingBag;
