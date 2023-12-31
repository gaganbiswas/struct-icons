import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMixerVertical = ({
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
      d="M11 15a1 1 0 1 0 2 0h-2Zm2-14a1 1 0 1 0-2 0h2ZM3 15a1 1 0 1 0 2 0H3ZM5 1a1 1 0 0 0-2 0h2Zm8 14V8h-2v7h2ZM11 1v3h2V1h-2Zm1 6a1 1 0 0 1-1-1H9a3 3 0 0 0 3 3V7Zm-1-1a1 1 0 0 1 1-1V3a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm1 1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-8 9v-3H3v3h2ZM3 1v7h2V1H3Zm1 10a1 1 0 0 1-1-1H1a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1V7a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm1 1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3H5Z"
    />
  </svg>
);
export default SvgMixerVertical;
