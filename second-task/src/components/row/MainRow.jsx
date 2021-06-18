import React from 'react';
import {IoMdArchive} from "react-icons/io"
import {MdDelete} from "react-icons/md"
import {RiPencilFill} from "react-icons/ri"
import {useDispatch} from "react-redux";
import {archiveItemAction, deleteItemAction, setItemAction} from "../../store/actions/mainActions";

const MainRow = ({el}) => {
    const dispatch = useDispatch()

    return (
        <>
            <td>{el.title}</td>
            <td>{el.creationDate}</td>
            <td>{el.category}</td>
            <td>{el.content}</td>
            <td>{el.dates}</td>
            <td>
                <RiPencilFill
                    onClick={() => dispatch(setItemAction(el.id))}/>
                <IoMdArchive
                    onClick={() => dispatch(archiveItemAction(el.id))}/>
                <MdDelete
                    onClick={() => dispatch(deleteItemAction(el.id))}/>
            </td>
        </>
    );
};

export default MainRow;