import {
  REFRESH_COMMENT,
  SEND_COMMENT_FORM,
  CHANGE_FIELD_COMMENT,
  CLEAR_COMMENT,
  ALL_COMMENTS,
} from "src/actions/comment";

const initialState = {
  id: 0,
  content: "",
  article_id: 0,
  guestbook_id: 0,
  user: [],
  allComments: {},
};

//console.log(`initialState comment`, initialState)

const guestbook = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_COMMENT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case REFRESH_COMMENT:
      return {
        ...state,
        ...action.payload,
      };
    case SEND_COMMENT_FORM:
      return {
        ...state,
      };
    case CLEAR_COMMENT:
      return {
        ...initialState,
      };
    case ALL_COMMENTS:
      return {
        ...state,
        allComments: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default guestbook;
