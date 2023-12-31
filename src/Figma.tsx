import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFigma = ({
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
      d="M5.75 5.667a2.21 2.21 0 0 0-1.591.683A2.378 2.378 0 0 0 3.5 8c0 .619.237 1.212.659 1.65a2.21 2.21 0 0 0 1.591.683m0-4.666H8m-2.25 0a2.21 2.21 0 0 1-1.591-.684 2.378 2.378 0 0 1-.659-1.65c0-.619.237-1.212.659-1.65A2.21 2.21 0 0 1 5.75 1H8m0 4.667v4.666m0-4.666V1m0 4.667h2.25M8 10.333H5.75m2.25 0v2.334c0 .619-.237 1.212-.659 1.65A2.21 2.21 0 0 1 5.75 15a2.21 2.21 0 0 1-1.591-.683 2.378 2.378 0 0 1-.659-1.65c0-.62.237-1.213.659-1.65a2.21 2.21 0 0 1 1.591-.684M8 1h2.25a2.21 2.21 0 0 1 1.591.683c.422.438.659 1.031.659 1.65 0 .62-.237 1.213-.659 1.65a2.21 2.21 0 0 1-1.591.684m0 0c-.295 0-.588.06-.861.177a2.27 2.27 0 0 0-.73.506 2.34 2.34 0 0 0-.488.757 2.409 2.409 0 0 0 0 1.786c.113.283.28.54.488.757.209.217.457.389.73.506a2.18 2.18 0 0 0 1.722 0c.273-.117.521-.29.73-.506a2.34 2.34 0 0 0 .488-.757 2.408 2.408 0 0 0 0-1.786 2.34 2.34 0 0 0-.488-.757 2.246 2.246 0 0 0-.73-.506 2.18 2.18 0 0 0-.861-.177Z"
    />
  </svg>
);
export default SvgFigma;
