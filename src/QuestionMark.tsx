import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuestionMark = ({
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
      d="M6 4.7C6 3.844 6.915 3 8 3s2 .845 2 1.7c0 .86-.404 1.25-1.157 1.904l-.047.041C8.055 7.29 7 8.207 7 10a1 1 0 1 0 2 0c0-.846.4-1.228 1.157-1.887l.037-.033C10.94 7.431 12 6.51 12 4.7 12 2.45 9.876 1 8 1S4 2.45 4 4.7a1 1 0 1 0 2 0ZM8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
);
export default SvgQuestionMark;
