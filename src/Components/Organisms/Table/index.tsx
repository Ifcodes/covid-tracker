import { Dispatch, ReactNode, useState } from "react";
import { generateId } from "../../../utils/generatedId";
import { TableWrapper } from "./tableStyles";
import Loader from "../../Atoms/Loader";

export interface PropTypes {
  _id?: string;
  headings?: Array<{ name: string; key: string }>;
  tableData?: Array<{
    _id?: string;
    confirmedCases: string;
    casesOnAdmission: string;
    discharged: string;
    death: string;
    state: string;
  }>;
  errorMessage?: string;
  isLoading?: boolean;
}

const Table = ({
  headings = [
    { name: "State", key: "state" },
    { name: "Total", key: "confirmedCases" },
    { name: "Active", key: "casesOnAdmission" },
    { name: "Recovered", key: "discharged" },
    { name: "Death", key: "death" },
  ],
  tableData,
  isLoading,
  errorMessage,
  _id,
}: PropTypes) => {
  if (isLoading) return <Loader />;
  return (
    <TableWrapper scroll={true}>
      {errorMessage || tableData?.length === 0 ? (
        <>
          {tableData?.length === 0 && (
            <div className="empty-data">
              <span>No State Found</span>
            </div>
          )}
          {errorMessage && (
            <div className="empty-data">
              <span>{errorMessage}!</span>
              <span>Check internet connection</span>
            </div>
          )}
        </>
      ) : (
        <>
          <div className={`table-container`}>
            <table className={`table`}>
              <thead>
                <tr>
                  {headings.map((heading, headingIndex) => (
                    <th key={headingIndex}>
                      <div className="flex">{heading.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData &&
                  tableData?.length > 0 &&
                  tableData.map((row: any, rowIndex: number) => (
                    <tr key={`${_id}_table-row-${rowIndex}`}>
                      {headings.map((col, _colIndex) => (
                        <td
                          key={`${_id}-${_colIndex}`}
                          className={`${col.key}`}
                        >
                          {row[col.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </TableWrapper>
  );
};

export default Table;
