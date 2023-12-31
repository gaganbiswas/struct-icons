import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCube = ({
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
      d="M8 15c-.234 0-.464-.065-.667-.188l-4.666-2.8a1.372 1.372 0 0 1-.488-.512A1.455 1.455 0 0 1 2 10.8V5.2c0-.246.062-.487.179-.7.117-.213.285-.389.488-.512l4.666-2.8a1.285 1.285 0 0 1 1.334 0l4.666 2.8c.203.123.371.3.488.512.117.213.179.454.179.7v5.6c0 .246-.062.487-.179.7a1.364 1.364 0 0 1-.488.512l-4.666 2.8A1.285 1.285 0 0 1 8 15Zm0 0V8M2.18 4.64 8 8.007l5.82-3.367"
    />
  </svg>
);
export default SvgCube;
