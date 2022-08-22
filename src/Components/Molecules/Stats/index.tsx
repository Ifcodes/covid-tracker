import React from "react";
import StatCard from "../../Atoms/StatCard";
import { StatsStylesWrapper } from "./statsStyles";

type statProps = {
  death?: number;
  discharged?: number;
  totalActiveCases?: number;
  totalConfirmedCases?: number;
};

const Stats = ({
  death,
  discharged,
  totalActiveCases,
  totalConfirmedCases,
}: statProps) => {
  const stats = [
    {
      title: "Confirmed",
      figure: totalConfirmedCases?.toLocaleString(),
      txtColor: "blue",
    },
    {
      title: "Active Cases",
      figure: totalActiveCases?.toLocaleString(),
      txtColor: "#eb5021",
    },
    {
      title: "Recovered",
      figure: discharged?.toLocaleString(),
      txtColor: "green",
    },
    {
      title: "Total Death",
      figure: death?.toString(),
      txtColor: "#f33636",
    },
  ];
  return (
    <StatsStylesWrapper>
      {stats.map(({ title, figure, txtColor }) => (
        <StatCard
          // bdColor="red"
          txtColor={txtColor}
          title={figure}
          figure={title}
          // percent="20"
        />
      ))}
    </StatsStylesWrapper>
  );
};

export default Stats;
