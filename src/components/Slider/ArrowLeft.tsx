import * as React from "react";
import { SVGProps } from "react";
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M15.566 5.435a.8.8 0 0 1 0 1.13L10.13 12l5.434 5.434a.8.8 0 0 1-1.13 1.132l-6-6a.8.8 0 0 1 0-1.132l6-6a.8.8 0 0 1 1.13 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLeft;
