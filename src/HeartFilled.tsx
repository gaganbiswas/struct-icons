import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeartFilled = ({
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.92 3.06a3.69 3.69 0 0 0-1.195-.784 3.74 3.74 0 0 0-4.015.785L8 3.759l-.71-.698A3.718 3.718 0 0 0 4.685 2c-.978 0-1.915.38-2.606 1.06A3.59 3.59 0 0 0 1 5.62c0 .96.388 1.882 1.08 2.56l.71.698L8 14l5.21-5.12.71-.698c.343-.337.614-.736.8-1.175a3.565 3.565 0 0 0 0-2.771 3.617 3.617 0 0 0-.8-1.175Z"
    />
  </svg>
);
export default SvgHeartFilled;
