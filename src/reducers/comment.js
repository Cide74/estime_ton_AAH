import {
  CHANGE_FIELD_COMMENT,
  CLEAR_COMMENT,
  ALL_COMMENTS,
  REFRESH_COMMENT,
  REFRESH_ONE_COMMENT,
  REFRESH_POST_COM_ART,
  REFRESH_POST_COM_GB,
} from "src/actions/comment";

const initialState = {
  id: 0,
  content: "",
  article_id: 0,
  guestbook_id: 0,
  user: [],
  allComments: {},
  success: false,
  message: "",
  oneComment: {},
  oneUser: {},
};

//console.log(`initialState comment`, initialState)

const comment = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_COMMENT:
      // console.log("name " + action.name + " value " + action.name);
      return {
        ...state,
        [action.name]: action.value,
      };

    case REFRESH_COMMENT:
      return {
        ...state,
        ...action.payload,
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

    case REFRESH_ONE_COMMENT:
      console.log("payload.comment ", action.payload);
      return {
        ...state,
        oneComment: action.payload.comment,
        oneUser: action.payload.user,
      };

    // confirmation d'un commentaire pour article
    case REFRESH_POST_COM_ART: {
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message,
      };
    }
    // confirmation d'un commentaire pour guestbook
    case REFRESH_POST_COM_GB: {
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default comment;
