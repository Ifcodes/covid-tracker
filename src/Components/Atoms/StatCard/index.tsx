import React, { ReactNode } from "react";
import { Box } from "../IconBox";
import { StatCardWrap } from "./statCardStyles";

type StatCardprops = {
  icon?: ReactNode;
  figure?: string;
  title?: string;
  percent?: string;
  bdColor?: string;
  txtColor?: string;
};
const StatCard = ({
  icon,
  figure,
  title,
  percent,
  bdColor,
  txtColor,
}: StatCardprops) => {
  return (
    <StatCardWrap borderColor={bdColor} textColor={txtColor}>
      {/* <div className="icon-cont">
        <Box>{icon}</Box>
        <div className="percent-figure">
          <span>+{percent}%</span>
        </div>
      </div> */}
      <div className="text-content">
        <h3>{figure}</h3>
        <span>{title}</span>
      </div>
    </StatCardWrap>
  );
};

export default StatCard;
