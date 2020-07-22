import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        //returning the items that have been fetched
        ...state,
        items: action.payload,
      };
    case NEW_POST:
      return {
        //new post has been dispatched from action
        //returning the new single item only and push that onto post property inside the post component
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
