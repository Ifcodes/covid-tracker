import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 8vh;
  padding: 0 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  background-color: white;

  .logo-wraper {
    display: flex;
    align-items: center;
    width: 18rem;

    .logo-cont {
      width: 2rem;
      height: 2rem;
    }

    h1 {
      margin: 0 0.5rem;
      color: #ea2d63;
      font-size: 1rem;
      font-weight: 700;
    }
  }

  .nav-tabs {
    display: flex;
    align-items: center;

    > div {
      margin-left: 1rem;
    }
  }
`;
