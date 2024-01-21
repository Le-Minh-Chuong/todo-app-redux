// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers';

// const composedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composedEnhancers)

// export default store
// * ============================ *

import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "../components/Filters/filtersSlice";
import { todoListSlice } from "../components/TodoList/todoListSlice";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer
  }
})

export default store