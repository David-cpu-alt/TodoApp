import { createStore, compose, applyMiddleware } from "redux";
import { toDoReducer } from "../reducer/toDoReducers";


const reduxStore = createStore(
    toDoReducer
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
reduxStore.subscribe(() => handledeleteAllToDos)
export default reduxStore;
