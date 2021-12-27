import {
  REFRESH_GUESTBOOK,
  SEND_GUESTBOOK_FORM,
  CHANGE_FIELD_GUESTBOOK,
  CLEAR_GUESTBOOK,
  ALL_GUESTBOOKS,
} from "src/actions/guestbook";

const initialState = {
  guestbooks: [],
  count: 0,
  id: 0,
  title: "",
  content: "",
  user: "",
  success: "",
  message: "",
  allGuestbooks: {},
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
      console.log("action.payload guestbook ", action.payload);
      //console.log("action.payload guestbooks.rows ", action.payload.guestbooks.rows);
      return {
        ...state,

        guestbooks: action.payload.guestbooks,
        ...action.payload,
        //guestbooks: action.payload.guestbooks.rows,
        guestbooks: action.payload.rows,
        count: action.payload.count,
      };

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
      // console.log(`state du reducer guestbooks =>`, state)
      //console.log(`state du reducer guestbooks =>`, state.guestbooks)
      return state;
  }
};

export default guestbook;
