import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFacebook = ({
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
      d="M9.6 1H12v3H9.7a.693.693 0 0 0-.49.21.693.693 0 0 0-.21.49V7h3l-.5 3H9v5H6v-5H4V7h2V4.5c0-.928.469-1.818 1.125-2.475A3.5 3.5 0 0 1 9.6 1Z"
    />
  </svg>
);
export default SvgFacebook;
