import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { nameReducer, noteReducer, } from "../reducer/toDoReducers";




const reduxStore = createStore(
    noteReducer
)


const handleaddToDos = (store) => {
    const todos = store.getState().todos
    console.log("todos data", todos)
}

const handledeleteToDos = (store) => {
    const todos = store.getState().todos
    console.log("todos data", todos)
}

const handlemarkToDos = (store) => {
    const todos = store.getState().todos
    console.log("todos data", todos)
}

const handledeleteAllToDos = (store) => {
    const todos = store.getState().todos
    console.log("todos data", todos)
}


reduxStore.subscribe(() => handleaddToDos(reduxStore))
reduxStore.subscribe(() => handledeleteToDos(reduxStore))
reduxStore.subscribe(() => handlemarkToDos(reduxStore))
reduxStore.subscribe(() => handledeleteAllToDos(reduxStore))
export default reduxStore;
