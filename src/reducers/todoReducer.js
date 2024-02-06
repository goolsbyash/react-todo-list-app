import { useReducer } from "react";

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [{id: newDate().getTime(), title: payload.action.todoItem}, ...state];
  }
  console.log(state);
  console.log(action.payload);
  return state;
}
