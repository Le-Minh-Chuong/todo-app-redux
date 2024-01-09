const initValue = {
  filter: {
    search: '',
    status: 'All',
    priority: []
  },
  todoList: [
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
  ]
}

const rootReducer = (state = initValue, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      console.log(action.payload)
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }
    default:
      return state
  }
}

export default rootReducer