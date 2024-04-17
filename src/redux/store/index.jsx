import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { nameReducer, toDoReducer } from "../reducer/toDoReducers";


const rootReducer = combineReducers({
    todos: toDoReducer,
    name: nameReducer
})

const reduxStore = createStore(
    rootReducer
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
