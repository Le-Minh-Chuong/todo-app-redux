// const initValue = [
//   {
//     id: 1,
//     name: 'Learn React',
//     priority: 'High',
//     completed: false
//   },
//   {
//     id: 2,
//     name: 'Learn Redux',
//     priority: 'Medium',
//     completed: true
//   },
//   {
//     id: 3,
//     name: 'Learn Antd',
//     priority: 'Low',
//     completed: false
//   }
// ]

// const todoListReducer = (state = initValue, action) => {
//   switch (action.type) {
//     case 'todoList/addTodo':
//       return [
//         ...state,
//         action.payload
//       ]
//     case 'todoList/toggleTodoStatus':
//       return state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
//     default:
//       return state
//   }
// }

// export default todoListReducer

import { createSlice } from '@reduxjs/toolkit'

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [
    {
      id: 1,
      name: 'Learn React',
      priority: 'High',
      completed: false
    },
    {
      id: 2,
      name: 'Learn Redux',
      priority: 'Medium',
      completed: true
    },
    {
      id: 3,
      name: 'Learn Antd',
      priority: 'Low',
      completed: false
    }
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find(todo => todo.id === action.payload)
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed
      }
    }
  }
})