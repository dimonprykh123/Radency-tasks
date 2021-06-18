import React, {useEffect, useState} from 'react';
import addItem from "../../utils/submitForm";
import {useDispatch, useSelector} from "react-redux";
import {addItemAction, setItemAction, updateItemAction} from "../../store/actions/mainActions";
import formValidation from "../../utils/formValidation";
import {dateTransformByUpdate, dateTransformToForm} from "../../utils/dateTarnsform";

const initialFormState = {
    id: "",
    title: "",
    creationDate: "",
    isArchived: false,
    category: "none",
    content: "",
    dates: ""
}

const Form = ({showForm}) => {

        const dispatch = useDispatch()
        const {updatedItem, data} = useSelector(state => state.main)
        const options = ['Task', 'Random Thought', 'Idea']
        const [formState, setFormState] = useState(initialFormState)
        const txt = updatedItem ? "Update item" : "Create item"

        useEffect(() => {
            updatedItem && setFormState(dateTransformToForm(data.find(el => el.id === updatedItem)))
        }, [updatedItem])


        const inputHandler = (e) => {
            setFormState({...formState, [e.target.id]: e.target.value})
        }

        const formSubmit = (e) => {
            e.preventDefault()
            const errors = formValidation(formState)
            if (!updatedItem && !errors) {
                const item = addItem(formState)
                dispatch(addItemAction(item))
                setFormState(initialFormState)
            }
            if (updatedItem && !errors) {
                dispatch(updateItemAction(dateTransformByUpdate(formState)))
                setFormState(initialFormState)
                dispatch(setItemAction(null))
            }
            if (errors) {
                alert(errors)
            }
        }
        const resetForm = (e) => {
            e.preventDefault()
            setFormState(initialFormState)
        }
        const declineUpdate = () => {
            setFormState(initialFormState)
            dispatch(setItemAction(null))
        }
        return (<>
            {showForm && <form
                onSubmit={(e) => formSubmit(e)}
                onReset={(e) => resetForm(e)}>
                <h3>{txt}</h3>
                <label htmlFor='title'>Write title</label>
                <input type='text' id='title' value={formState.title} onChange={(e) => inputHandler(e)}/>
                <label htmlFor='dates'>Select term of task</label>
                <input type='date' id='dates' value={formState.dates} onChange={(e) => inputHandler(e)}/>
                <label htmlFor='category'>Select category</label>
                <select id='category' value={formState.category} onChange={(e) => inputHandler(e)}>
                    <option value="none">None</option>
                    {
                        options.map(el => <option value={el} key={el}>{el}</option>)
                    }
                </select>
                <label htmlFor='content'>Write content</label>
                <textarea id='content' value={formState.content} onChange={(e) => inputHandler(e)}/>
                <div>
                    <input type='submit' value="Submit"/>
                    <input type='reset' value="Reset"/>
                    {updatedItem && <button className="btn" onClick={declineUpdate}>Decline update</button>}
                </div>
            </form>
            }
        </>)
    }
;

export default React.memo(Form);
