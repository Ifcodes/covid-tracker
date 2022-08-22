import axios from "axios";

const baseUrl = "https://covidnigeria.herokuapp.com/api ";

const getCovidData = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const services = {
  getCovidData,
};
