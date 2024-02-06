import { useReducer } from "react";

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
      return state.filter((obj) => obj.title !== action.payload.deleteTodo);
    default:
      return state;
  }
}
