import styled from "styled-components";

export const StatsStylesWrapper = styled.div`
  width: 100%;
  height: 60%;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  /* grid-row-gap: 0; */

  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;
