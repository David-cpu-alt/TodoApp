import { ADD_TO_DOS } from "../constant/constant"
import { DELETE_TO_DOS } from "../constant/constant"
import { MARK_TO_DOS } from "../constant/constant"
import { DELETE_ALL_TO_DOS } from "../constant/constant"
import { SAVE_NAME } from "../constant/constant"


const intialstate = {
    todos: []
}

export const toDoReducer = (state = intialstate, action) => {
    switch (action.type) {
        case ADD_TO_DOS:
            return {
                ...state,
                todos: [...state.todos, action.todos]
            }
            break;
        case DELETE_TO_DOS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
            break;
        case MARK_TO_DOS:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...todo, checked: !todo.checked } : todo)

            }
            break;
        case DELETE_ALL_TO_DOS:
            return {
                ...state,
                todos: []
            }
            break;
        case SAVE_NAME:
            return {
                ...state,
            }

        default:
            return state;
    }
}