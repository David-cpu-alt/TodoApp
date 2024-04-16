import { ADD_TO_DOS } from "../constant/constant";
import { MARK_TO_DOS } from "../constant/constant";
import { DELETE_TO_DOS } from "../constant/constant";
import { DELETE_ALL_TO_DOS } from "../constant/constant";
import { SAVE_NAME } from "../constant/constant";

// action creator 

export const addToDos = (todos) => {
    return {
        type: ADD_TO_DOS,
        todos
    }
}

export const deleteToDos = (todoId) => {
    return {
        type: DELETE_TO_DOS,
        id: todoId
    }
}

export const markToDos = (todoId) => {
    return {
        type: MARK_TO_DOS,
        id: todoId
    }

}
export const deleteAllToDos = (todos) => {
    return {
        type: DELETE_ALL_TO_DOS,
        todos
    }
}

export const saveName = () => {
    return {
        type: SAVE_NAME,
        payload: name
    }
}
