import * as React from "react";
import { SVGProps } from "react";

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 6a4 4 0 0 0-8 0v2a4 4 0 0 0 8 0V6ZM3 22c1.52-4.12 5-7 9-7s7.48 2.88 9 7"
      stroke="#44475C"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
  </svg>
);

export default UserIcon;
