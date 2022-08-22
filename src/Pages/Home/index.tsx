import React, { useEffect, useState } from "react";
import Stats from "../../Components/Molecules/Stats";
import Table from "../../Components/Organisms/Table";
import { services } from "../../Services";
import { HomeWrapper } from "./homeStyles";

const Home = () => {
  const [stateData, setStateData] = useState();
  const [stats, setStats] = useState({});

  useEffect(() => {
    services.getCovidData().then((res) => {
      console.log(res);
      setStateData(res.data.states);
      setStats(res.data);
    });
  }, []);

  return (
    <HomeWrapper>
      <div className="table-cont">
        <Table tableData={stateData} />
      </div>
      <div className="stats-wrapper">
        <Stats {...stats} />
      </div>
    </HomeWrapper>
  );
};

export default Home;
