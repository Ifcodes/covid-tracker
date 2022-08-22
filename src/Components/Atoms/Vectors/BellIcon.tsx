import * as React from "react";
import { SVGProps } from "react";

const BellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23 18H1M2 18a3 3 0 0 0 3-3V9a7 7 0 1 1 14 0v6a3 3 0 0 0 3 3M15 19a3 3 0 0 1-6 0"
      stroke="#44475C"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
  </svg>
);

export default BellIcon;
