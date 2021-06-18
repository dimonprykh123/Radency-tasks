import React from 'react';

const SummRow = ({el}) => {
    return (
        <>
            <td>{el.cat}</td>
            <td>{el.amount}</td>
            <td>{el.arch}</td>
        </>
    );
};

export default SummRow;