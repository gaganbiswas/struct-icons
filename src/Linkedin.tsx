import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLinkedin = ({
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
    <g clipPath="url(#linkedin_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm1.603 13.292h2.374V6.151H2.603v7.141Zm1.171-8.116h.016c.828 0 1.343-.549 1.343-1.235-.016-.7-.515-1.233-1.328-1.233-.812 0-1.343.533-1.343 1.233 0 .686.516 1.235 1.312 1.235Zm7.39 8.116h2.375V9.197c0-2.194-1.172-3.214-2.734-3.214-1.262 0-1.825.694-2.14 1.18V6.15H6.29c.032.67 0 7.141 0 7.141h2.375V9.304c0-.214.016-.426.078-.579.172-.427.562-.868 1.219-.868.859 0 1.202.655 1.202 1.614v3.821Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="linkedin_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLinkedin;
