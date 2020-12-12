import {
  SET_PAGE,
  SET_POSITION,
  SET_CURRENT_TASK,
  CLEAR_CURRENT_TASK,
  MARK_TASK_AS_RESOLVED
} from "./actions.js";

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...statePart,
        page: action.payload,
        position: 0
      };
    case SET_POSITION:
      return {
        ...statePart,
        position: action.payload
      };
    case SET_CURRENT_TASK:
      return {
        ...statePart,
        currentTask: action.payload
      };
    case CLEAR_CURRENT_TASK:
      return {
        ...statePart,
        currentTask: {}
      };
    case MARK_TASK_AS_RESOLVED:
      return {
        ...statePart,
        currentTask: { ...statePart.currentTask, resolved: true }
      };
    default:
      return statePart;
  }
}
