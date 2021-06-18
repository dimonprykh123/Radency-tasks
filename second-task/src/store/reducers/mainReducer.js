import {arr} from "../../utils/data";
import {
    ADD_ITEM,
    ARCHIVE_ITEM,
    DELETE_ALL,
    DELETE_ITEM,
    SET_ITEM,
    SHOW_ARCHIVED,
    UPDATE_ITEM
} from "../types/mainTypes";

const initialState = {
    data: arr,
    showArchived: false,
    updatedItem: null

}

const deleteItem = (state, id) => {
    const data = state.data.filter(el => el.id !== id)
    return {...state, data}
}

const archiveItem = (state, id) => {
    const {data} = state
    const index = data.findIndex(el => el.id === id)
    const item = Object.assign({}, data[index], {isArchived: !data[index].isArchived})
    return {...state, data: [...data.slice(0, index), item, ...data.slice(index + 1)]}
}

const updateItem = (state, item) => {
    const {data} = state
    const index = data.findIndex(el => el.id === item.id)
    return {...state, data: [...data.slice(0, index), item, ...data.slice(index + 1)]}
}

const deleteAll = (state) => {
    const {showArchived} = state
    const data = state.data.filter(el => el.isArchived !== showArchived)
    return {...state, data}
}


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {...state, data: [...state.data, action.payload]}
        case SHOW_ARCHIVED:
            return {...state, showArchived: !state.showArchived}
        case DELETE_ITEM:
            return deleteItem(state, action.payload)
        case SET_ITEM:
            return {...state, updatedItem: action.payload}
        case UPDATE_ITEM:
            return updateItem(state, action.payload)
        case ARCHIVE_ITEM:
            return archiveItem(state, action.payload)
        case DELETE_ALL:
            return deleteAll(state)
        default:
            return state
    }
}

export default mainReducer