import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCountdownTimer = ({
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
    <g clipPath="url(#countdown-timer_svg__a)">
      <path
        fill="currentColor"
        d="M2 2.5a1 1 0 0 0-2 0h2ZM1 6H0a1 1 0 0 0 1 1V6Zm3.5 1a1 1 0 0 0 0-2v2ZM1.351 4.562l-.438.899 1.798.876.438-.899-1.798-.876Zm2.101 8.398-.725.689.725-.689Zm-.523-2.654a1 1 0 0 0-1.858.739l1.858-.739ZM7 5v6h2V5H7ZM0 2.5V6h2V2.5H0ZM1 7h3.5V5H1v2Zm7.241 9C13.018 16 16 11.945 16 8h-2c0 3.055-2.29 6-5.759 6v2ZM16 8c0-3.945-2.982-8-7.759-8v2C11.711 2 14 4.945 14 8h2ZM8.241 0c-4.23 0-6.285 3.32-6.89 4.562l1.798.876C3.67 4.368 5.219 2 8.24 2V0Zm0 14c-1.692 0-3.073-.685-4.063-1.728l-1.451 1.377C4.07 15.065 5.967 16 8.24 16v-2Zm-4.063-1.728a6.166 6.166 0 0 1-1.249-1.966l-1.858.739c.38.956.938 1.847 1.656 2.604l1.45-1.377Z"
      />
    </g>
    <defs>
      <clipPath id="countdown-timer_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCountdownTimer;
