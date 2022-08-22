import React, { ReactNode } from "react";
import { Box } from "../IconBox";
import Loader from "../Loader";
import { StatCardWrap } from "./statCardStyles";

type StatCardprops = {
  icon?: ReactNode;
  figure?: string;
  title?: string;
  percent?: string;
  bdColor?: string;
  txtColor?: string;
  isLoading?: boolean;
};
const StatCard = ({
  figure,
  title,
  bdColor,
  txtColor,
  isLoading,
}: StatCardprops) => {
  return (
    <StatCardWrap borderColor={bdColor} textColor={txtColor}>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="text-content">
          <h3>{figure}</h3>
          <span>{title}</span>
        </div>
      )}
    </StatCardWrap>
  );
};

export default StatCard;
