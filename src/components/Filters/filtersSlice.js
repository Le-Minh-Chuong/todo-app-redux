// const initValue = {
//   search: '',
//   status: 'All',
//   priorities: []
// }

// const filtersReducer = (state = initValue, action) => {
//   switch (action.type) {
//     case 'filters/searchFilterChange':
//       return {
//         ...state,
//         search: action.payload
//       }
//     case 'filters/statusFilterChange':
//       return {
//         ...state,
//         status: action.payload
//       }
//     case 'filters/prioritiesFilterChange':
//       return {
//         ...state,
//         priorities: action.payload
//       }
//     default:
//       return state
//   }
// }

// export default filtersReducer

import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priorities: []
  },
  reducers: {
    searchFilterChange: (state, action) => {
      // redux toolkit hỗ trợ viết code mutation nhưng thực tế là code immutation
      // redux sử dụng thư viện IMMER để làm điều đó

      // tự động tạo ra 1 action với type được ghép lại dựa vào name và key của reducers
      // ví dụ ở đây là {type: 'filters/searchFilterChange'}
      state.search = action.payload
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload
    }
  }
})
