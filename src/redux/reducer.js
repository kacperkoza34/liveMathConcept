import { SET_PAGE, SET_POSITION, SET_ARTICLE_HEIGTH } from "./actions.js";

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...statePart,
        page: action.payload
      };
    case SET_POSITION:
      return {
        ...statePart,
        position: action.payload
      };
    case SET_ARTICLE_HEIGTH:
      console.log(action.payload);
      return {
        ...statePart,
        articleHeigth: action.payload
      };
    default:
      return statePart;
  }
}
