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
      return state.map((obj) => {
          if (obj.id == action.payload.id) {
            console.log({ ...obj, completed: !action.payload.markComplete });
            return { ...obj, completed: !action.payload.markComplete };
          }
          return obj;
        });
    }
    default:
      return state;
  }
}
