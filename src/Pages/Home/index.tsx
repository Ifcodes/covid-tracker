import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stats from "../../Components/Molecules/Stats";
import Table from "../../Components/Organisms/Table";
import { services } from "../../Services";
import { DataProps, getStateCases, StateProps } from "../../store/reducter";
import store from "../../store/store";
import { HomeWrapper } from "./homeStyles";

const Home = () => {
  const stateSelector: any = useSelector<DataProps>((state) => state.data);
  const stateData = stateSelector.states;
  const stats = stateSelector;
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const fetchStateCases = async () => {
    setLoading(true);
    const res = await services.getCovidData();
    dispatch(getStateCases(res.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchStateCases();
  }, []);

  return (
    <HomeWrapper>
      <div className="table-cont">
        <Table tableData={stateData} isLoading={isLoading} />
      </div>
      <div className="stats-wrapper">
        <Stats {...stats} />
      </div>
    </HomeWrapper>
  );
};

export default Home;
