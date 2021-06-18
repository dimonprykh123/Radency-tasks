import React, {useState} from 'react';
import Form from "../components/form/Form";
import MainTable from "../components/table/MainTable";
import SummTable from "../components/table/SummTable";
import {useSelector} from "react-redux";

const Main = () => {

    const [showForm, setShowForm] = useState(false)
    const clickHandler = () => {
        setShowForm(!showForm)
    }

    const {data, showArchived} = useSelector(state => state.main)

    return (
        <>
            <MainTable
                data={data}
                showArchived={showArchived}
            />
            <button className="btn" onClick={clickHandler}>Create note</button>
            <Form showForm={showForm}/>
            <SummTable
                data={data}
            />
        </>
    );
};

export default Main;