import React from 'react';
import makeTableData from "../../utils/makeTableData";
import SummRow from "../row/SummRow";

const SummTable = ({data}) => {
    const tableData = makeTableData(data)
    return (
        <table>
            <thead>
            <tr>
                <th>Note category</th>
                <th>Active</th>
                <th>Archived</th>
            </tr>
            </thead>
            <tbody>
            {
                tableData.map(el => (<tr key={el.id}><SummRow el={el}/></tr>))
            }
            </tbody>
        </table>
    );
};

export default SummTable;