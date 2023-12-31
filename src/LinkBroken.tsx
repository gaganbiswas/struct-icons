import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLinkBroken = ({
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
      d="M14.707 2.707a1 1 0 0 0-1.414-1.414l-12 12a1 1 0 1 0 1.414 1.414l12-12ZM2.879 10.121c.028.029.057.057.087.084L1.551 11.62A5 5 0 0 1 5 3h1a1 1 0 0 1 0 2H5a3 3 0 0 0-2.121 5.121Zm10.242-4.242a2.9 2.9 0 0 0-.087-.084l1.415-1.415.087.084A5 5 0 0 1 11 13h-1a1 1 0 1 1 0-2h1a3 3 0 0 0 2.121-5.121Z"
    />
  </svg>
);
export default SvgLinkBroken;
