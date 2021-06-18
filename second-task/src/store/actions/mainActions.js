import {
    ADD_ITEM,
    ARCHIVE_ITEM,
    DELETE_ALL,
    DELETE_ITEM,
    SET_ITEM,
    SHOW_ARCHIVED,
    UPDATE_ITEM
} from "../types/mainTypes";

export const addItemAction = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export const deleteItemAction = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export const archiveItemAction = (id) => {
    return {
        type: ARCHIVE_ITEM,
        payload: id
    }
}

export const deleteAllAction = () => {
    return {
        type: DELETE_ALL,
    }
}

export const updateItemAction = (item) => {
    return {
        type: UPDATE_ITEM,
        payload: item
    }
}

export const showArchivedAction = () => {
    return {
        type: SHOW_ARCHIVED
    }
}

export const setItemAction = (id) => {
    console.log(id)
    return {
        type: SET_ITEM,
        payload: id
    }
}