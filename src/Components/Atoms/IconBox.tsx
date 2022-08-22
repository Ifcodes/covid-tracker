import styled from "styled-components";

export const Box = styled.div<{
  width?: string;
  height?: string;
  borderRadius?: string;
  bgColor?: string;
  shadow?: string;
}>`
  width: ${({ width }) => width || "2rem"};
  height: ${({ height }) => height || "2rem"};
  border-radius: ${({ borderRadius }) => borderRadius || "5px"};
  box-shadow: ${({ shadow }) => shadow || "0  0 2px 2px rgba(0, 0, 0, 0.1)"};
  background-color: ${({ bgColor }) => bgColor || "white"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
