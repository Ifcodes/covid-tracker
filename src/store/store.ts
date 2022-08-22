import { configureStore } from "@reduxjs/toolkit";
import covidCasesReducer from "./reducter";

const store = configureStore({
  reducer: {
    data: covidCasesReducer,
  },
});

export default store;
