import styled from "styled-components";

export const HomeWrapper = styled.section`
  width: 100%;
  height: 90vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 55% 40%;
  padding: 2rem;
  overflow-y: hidden;
  grid-gap: 2rem;

  .table-cont {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  .stats-wrapper {
    width: 100%;
  }
`;
