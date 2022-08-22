import styled, { css } from "styled-components";

export const StatCardWrap = styled.div<{
  borderColor?: string;
  textColor?: string;
}>`
  width: 100%;
  height: 8rem;
  border-radius: 10px;
  padding: 1.5rem 1rem;
  background-color: white;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.1);
  ${({ borderColor }) =>
    borderColor &&
    css`
      border: 1px solid ${borderColor};
    `}
  ${({ textColor }) =>
    textColor &&
    css`
      color: ${textColor};
    `}
  
  .icon-cont {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .percent-figure {
      width: max-content;
      height: max-content;
      padding: 0.3rem 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      font-size: 0.7rem;
      ${({ borderColor }) =>
        borderColor &&
        css`
          border: 1px solid ${borderColor};
        `}
    }
  }

  .text-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    h3 {
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0;
    }

    span {
      font-size: 1rem;
    }
  }
`;
