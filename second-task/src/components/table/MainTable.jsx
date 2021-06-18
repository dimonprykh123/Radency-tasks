import React from 'react';
import {IoMdArchive} from "react-icons/io"
import {MdDelete} from "react-icons/md"
import MainRow from "../row/MainRow";
import {useDispatch} from "react-redux";
import {showArchivedAction, deleteAllAction} from "../../store/actions/mainActions";

const MainTable = ({data, showArchived}) => {
    const dispatch = useDispatch()
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Created</th>
                <th>Category</th>
                <th>Content</th>
                <th>Dates</th>
                <th>
                    <IoMdArchive
                        onClick={() => dispatch(showArchivedAction())}/>
                    <MdDelete
                        onClick={() => dispatch(deleteAllAction())}/>
                </th>
            </tr>
            </thead>
            <tbody>
            {
                data.filter(el => el.isArchived === showArchived).map(el => (
                    <tr key={el.id}>
                        <MainRow el={el}/>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export default MainTable;