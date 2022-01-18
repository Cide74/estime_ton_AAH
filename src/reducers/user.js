import {
  FIELD_CHANGE,
  REFRESH_STATE,
  CLEAR_INPUT,
  ON_LOGOUT,
  REFRESH_ALL_USERS,
  NEW_USER_REFRESH,
  LOGIN_ERROR,
  CLEAR_BACK_VALUE,
} from "../actions/user";
import { REFRESH_TEN_QUESTION } from "src/actions/question";
import { REFRESH_TEN_ARTICLE } from "src/actions/article";
import { REFRESH_TEN_GUESTBOOK } from "src/actions/guestbook";
import { REFRESH_TEN_COMMENT } from "src/actions/comment";
const initialState = {
  id: 0,
  pseudo: "",
  email: "",
  password: "",
  passwordConf: "",
  role: 0,
  isLogged: false, // Condition si l'utilisateur est loggé true/false
  accessToken: "", // stockage pour le token
  refreshToken: "",
  allUsers: {},
  userSimulation: {},
  userArticle: {},
  userGuestbook: {},
  userComment: {},
  CreateUserMessage: "",
  loginMsg: "",
  loginMsgError: "",
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case FIELD_CHANGE:
      return {
        ...state,
        [action.key]: action.value,
      };

    case NEW_USER_REFRESH: {
      return {
        ...state,
        CreateUserMessage: action.payload.message,
      };
    }

    case CLEAR_BACK_VALUE:
      return {
        ...state,
        message: "",
        success: "",
        loginMsg: "",
        loginMsgError: "",
      };

    case REFRESH_STATE:
      // le login passe ici (saveDataUser)
      // console.log("refreshState payload =>", action.payload.success);
      console.log("refreshState payload =>", action.payload);
      return {
        ...state,
        id: action.payload.userInfo.id,
        pseudo: action.payload.userInfo.pseudo,
        email: action.payload.userInfo.email,
        role: action.payload.userInfo.role,
        isLogged: action.payload.success,
        loginMsg: action.payload.message,
        //! TODO pour le build, supprimer les tokens
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginMsgError: action.payload.data.message,
      };

    case CLEAR_INPUT:
      return {
        ...state,
      };

    case REFRESH_TEN_QUESTION:
      // console.log("Question / user / payload", action.payload.user);
      return {
        ...state,
        userSimulation: action.payload.user,
      };
    case REFRESH_TEN_ARTICLE:
      // console.log("Article / user / payload", action.payload.user);
      return {
        ...state,
        userArticle: action.payload.user,
      };
    case REFRESH_TEN_GUESTBOOK:
      // console.log("GuestBook / user / payload", action.payload.user);
      return {
        ...state,
        userGuestbook: action.payload.user,
      };
    case REFRESH_TEN_COMMENT:
      // console.log("comment / user / payload", action.payload.user);
      return {
        ...state,
        userComment: action.payload.user,
      };

    case ON_LOGOUT:
      return {
        ...initialState,
      };
    case REFRESH_ALL_USERS:
      console.log("refresh all users :", action.payload);
      return {
        ...state,
        allUsers: action.payload,
      };

    default:
      return state;
  }
};

export default user;
