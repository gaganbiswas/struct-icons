import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGithub = ({
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
    <g clipPath="url(#github_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.007 0C3.579 0 0 3.667 0 8.203c0 3.626 2.293 6.695 5.475 7.781.397.082.543-.176.543-.393 0-.19-.013-.842-.013-1.521-2.227.489-2.691-.978-2.691-.978-.358-.95-.888-1.195-.888-1.195-.73-.503.053-.503.053-.503.808.055 1.233.842 1.233.842.715 1.25 1.869.897 2.333.68.066-.53.278-.897.503-1.1-1.776-.19-3.645-.897-3.645-4.048 0-.896.318-1.63.822-2.2-.08-.204-.358-1.046.08-2.173 0 0 .676-.217 2.2.842a7.577 7.577 0 0 1 2.002-.272 7.58 7.58 0 0 1 2.001.272c1.525-1.06 2.2-.842 2.2-.842.438 1.127.16 1.97.08 2.173.517.57.822 1.304.822 2.2 0 3.151-1.869 3.843-3.659 4.047.292.258.544.747.544 1.521 0 1.1-.013 1.983-.013 2.255 0 .217.146.475.543.394C13.707 14.898 16 11.829 16 8.203 16.013 3.667 12.42 0 8.007 0Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="github_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGithub;
