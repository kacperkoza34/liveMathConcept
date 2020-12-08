import { SET_PAGE } from "./actions.js";

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...statePart,
        page: action.payload
      };
    default:
      return statePart;
  }
}
