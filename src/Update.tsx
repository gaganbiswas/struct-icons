import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUpdate = ({
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
      d="M2.998 7.796c0 2.813 1.995 4.714 4.23 5.108a1 1 0 1 1-.347 1.97C3.791 14.329.998 11.679.998 7.796c0-1.695.761-3.014 1.614-3.992.254-.29.524-.558.791-.803H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v.662l.008.01L7 2.68V5a1 1 0 1 1-2 0v-.742a8.53 8.53 0 0 0-.881.862c-.66.754-1.12 1.625-1.12 2.676Zm10.004.409c0-2.783-1.952-4.673-4.16-5.095a1 1 0 0 1 .376-1.964c3.05.582 5.784 3.218 5.784 7.059 0 1.695-.761 3.015-1.615 3.992-.253.29-.523.559-.79.803H13a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1v-.662l-.008-.01L9 13.32V11a1 1 0 1 1 2 0v.743c.3-.257.601-.541.881-.862.659-.754 1.12-1.625 1.12-2.676Z"
    />
  </svg>
);
export default SvgUpdate;
