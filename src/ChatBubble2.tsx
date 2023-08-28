import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatBubble2 = ({
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
      d="M14 7.667a5.587 5.587 0 0 1-.6 2.533 5.666 5.666 0 0 1-5.067 3.133 5.588 5.588 0 0 1-2.533-.6L2 14l1.267-3.8a5.586 5.586 0 0 1-.6-2.533A5.667 5.667 0 0 1 5.8 2.6 5.587 5.587 0 0 1 8.333 2h.334A5.654 5.654 0 0 1 14 7.333v.334Z"
    />
  </svg>
);
export default SvgChatBubble2;
