const dataReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todo: [...state.todo, action.payload]
      }
    default:
      return state;
  }
}

export default dataReducer;