import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTwitterX = ({
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
      d="m0 1 5.79 7.72L.297 15h3.158l3.794-4.336L10.5 15H16l-5.79-7.72L15.703 1h-3.158L8.752 5.336 5.5 1H0Zm11.5 12L4 3h.5L12 13h-.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTwitterX;
