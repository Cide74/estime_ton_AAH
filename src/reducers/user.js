import {
  FIELD_CHANGE,
  REFRESH_STATE,
  REFRESH_HEADER,
  ON_LOGOUT
} from "../actions/user";

const initialState = {
  pseudoId: 0,
  pseudo: "",
  birthdate: "",
  email: "",
  pseudoWelcome: "",
  password: "",
  passwordConf: "",
  isLogged: false, // Condition si l'utilisateur est loggé true/false
  nbArticle: Math.round(Math.random() * 10), // En attendant, c'est pour le fun !!
  checkToken: "", // stockage pour le token,
  refreshToken: ""
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case FIELD_CHANGE:
      return {
        ...state,
        [action.key]: action.value
      };

    case REFRESH_STATE: // le login passe ici (saveDataUser)
      // console.log("refreshState payload =>", action.payload.success);
      // console.log("refreshState payload =>", action.payload.message);

      localStorage.setItem("pseudo", action.payload.userInfo.pseudo);
      localStorage.setItem("email", action.payload.userInfo.email);
      localStorage.setItem("message", action.payload.message);
      return {
        ...state,
        pseudo: action.payload.userInfo.pseudo,
        pseudoId: action.payload.userInfo.id,
        email: action.payload.userInfo.email,
        checkToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isLogged: action.payload.success,
        pseudoWelcome: action.payload.message
      };

    case REFRESH_HEADER:
      return {
        ...state
      };

    case ON_LOGOUT:
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export default user;
