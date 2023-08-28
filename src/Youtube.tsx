import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYoutube = ({
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
      d="M2.522 3.291C3.62 3 7.996 3 7.996 3s4.384 0 5.482.309a1.747 1.747 0 0 1 1.228 1.253c.303 1.121.294 3.451.294 3.451s0 2.322-.294 3.434a1.759 1.759 0 0 1-1.228 1.262C12.38 13 7.996 13 7.996 13s-4.367 0-5.474-.3a1.8 1.8 0 0 1-1.237-1.262C1 10.335 1 8.004 1 8.004s0-2.32.285-3.442a1.829 1.829 0 0 1 1.237-1.27Z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7 10 3-2-3-2v4Z"
    />
  </svg>
);
export default SvgYoutube;
