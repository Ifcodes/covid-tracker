import { bindActionCreators, createSlice } from "@reduxjs/toolkit";

export type StateProps = {
  _id?: string;
  confirmedCases: string;
  casesOnAdmission: string;
  discharged: string;
  death: string;
  state: string;
};

export type DataProps = {
  data?: unknown;
  totalConfirmedCases?: number;
  discharged?: number;
  totalActiveCases?: number;
  death?: number;
  states?: Array<StateProps>;
};

const dataSlice = createSlice({
  name: "covidCases",
  initialState: {},
  reducers: {
    getStateCases(state, action) {
      // console.log({ act: action.payload });
      return action.payload;
    },
  },
});

export const { getStateCases } = dataSlice.actions;

export default dataSlice.reducer;
