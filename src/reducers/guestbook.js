import {
  REFRESH_GUESTBOOK,
  SEND_GUESTBOOK_FORM,
  CHANGE_FIELD_GUESTBOOK,
  CLEAR_GUESTBOOK,
  ALL_GUESTBOOKS,
  REFRESH_POST_GUESTBOOK,
  REFRESH_ONE_GUESTBOOK,
  REFRESH_MODIFY_GUESTBOOK,
  REFRESH_DEL_GUESTBOOK,
} from "src/actions/guestbook";

const initialState = {
  // all gb
  guestbooks: [],
  //
  allGuestbooks: {},
  // confirmation de réception
  success: false,
  message: "",
  count: 0,
  // one GB
  id: 0,
  title: "",
  content: "",
  oneUser: "",
  updated_at: "",
  oneComments: [],
};

//console.log(`initialState guestbook`, initialState)

const guestbook = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_GUESTBOOK:
      return {
        ...state,
        [action.name]: action.value,
      };

    case REFRESH_GUESTBOOK:
      // pour tous les Gb
      return {
        ...state,
        count: action.payload.count,
        guestbooks: action.payload.rows,
      };

    case REFRESH_ONE_GUESTBOOK:
      // console.log(action.payload);
      return {
        ...state,
        id: action.payload.rows[0].id,
        title: action.payload.rows[0].title,
        content: action.payload.rows[0].content,
        oneUser: action.payload.rows[0].user.pseudo,
        updated_at: action.payload.rows[0].updated_at,
        oneComments: action.payload.rows[0].comment,
      };
    case REFRESH_MODIFY_GUESTBOOK:
      console.log(action.payload);
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message,
      };

    case REFRESH_POST_GUESTBOOK:
      console.log("création guestbook article ", action.payload);
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message,
      };

    case REFRESH_DEL_GUESTBOOK: {
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message,
      };
    }
    case SEND_GUESTBOOK_FORM:
      return {
        ...state,
      };

    case CLEAR_GUESTBOOK:
      return {
        ...initialState,
      };

    case ALL_GUESTBOOKS:
      console.log("all guestbooks payload", action.payload);
      return {
        ...state,
        allGuestbooks: action.payload,
      };

    default:
      return state;
  }
};

export default guestbook;
