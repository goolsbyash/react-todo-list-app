export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        {
          id: new Date().getTime(),
          title: action.payload.title,
          completed: false,
        },
        ...state,
      ];
    case "DELETE":
      return state.filter((obj) => obj.id !== action.payload.deleteTodo);
    case "TOGGLE_COMPLETE": {
      console.log(state);
      console.log(action.payload.markComplete);
      return state.map((obj) => {
          if (obj.id == action.payload.id) {
            return { ...obj, completed: !action.payload.completed };
          }
          return obj;
        });
    }
    default:
      return state;
  }
}
