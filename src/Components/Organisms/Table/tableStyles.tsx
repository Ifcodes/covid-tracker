import styled, { css } from "styled-components";

type Props = {
  theadBg?: string;
  scroll?: boolean;
};

export const TableWrapper = styled.div<Props>`
  height: 95%;
  flex-grow: 1;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.1);

  .table-container {
    height: 50%;
    flex-grow: 1;
    border-radius: 10px;
  }

  .empty-data {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: red;
  }

  table {
    flex-grow: 1;
    display: grid;
    color: ${({ theme }) => theme.colors.grey2};
    grid-template-rows: auto 1fr;
    height: 100%;

    thead {
      background: #f33636;
      border-radius: 0.5rem;
      /* text-transform: Uppercase; */
      margin: 1rem;
    }

    tbody {
      flex-grow: 1;
      overflow-y: auto;
      padding-top: 0.6rem;
      margin: 0 1rem 1rem;

      tr {
        color: white;
        td {
          font-size: 0.8rem;
          line-height: 1.2;
          font-weight: 500;
          text-align: left;
          padding-left: 1rem;
          font-weight: 700;
        }

        td:not(:first-child) {
          width: 7rem;
          text-align: center;
        }

        .state {
          color: black;
        }
        .confirmedCases {
          background-color: peachpuff;
          color: #6d6d6d;
        }
        .casesOnAdmission {
          background-color: #ff825c;
        }
        .discharged {
          background-color: green;
        }
        .death {
          background-color: #f33636;
        }
      }

      tr:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin-bottom: 1rem;
      }
    }

    th:not(:first-child) {
      width: 7.2rem;

      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding-left: 0;
      }
    }

    th {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.28571429;
      padding: 0.8rem 0 0.9rem;
      font-weight: 600;
      color: white;

      & > div {
        display: flex;
        align-items: center;
        padding-left: 1rem;
      }
    }

    tr {
      display: table;
      table-layout: fixed;
      width: 100%;
    }

    td {
      padding: 0.5rem 1rem;
    }
  }
  .table-foot {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.grey1};
      margin-left: 1rem;
    }
  }
`;

export const TableWrapperMobile = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;

    .table-item-cont {
      display: flex;
      align-items: center;
      border-top: 1px solid ${({ theme }) => theme.colors.grey5};
      padding: 0.6rem 1rem;
    }

    .row-items {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-left: 0;
    }

    .title-info {
      font-size: 12px;
      font-weight: 600;
    }
    .other-info {
      color: ${(props) => props.theme.colors.grey2};
    }
  }
`;
