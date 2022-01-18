export const FIELD_CHANGE = "FIELD_CHANGE";
export const ON_SUBSCRIBE = "ON_SUBSCRIBE";
export const ON_LOGIN = "ON_LOGIN";
export const REFRESH_STATE = "REFRESH_STATE";
export const CLEAR_INPUT = "CLEAR_INPUT";
export const ON_LOGOUT = "ON_LOGOUT";
export const GET_ALL_TENTH = "GET_ALL_TENTH";
export const CALL_ALL_USERS = "CALL_ALL_USERS";
export const REFRESH_ALL_USERS = "REFRESH_ALL_USERS";
export const NEW_USER_REFRESH = "NEW_USER_REFRESH";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const CLEAR_BACK_VALUE = "CLEAR_BACK_VALUE";

// pour les inputs
export const fieldChange = (key, value) => ({
  type: FIELD_CHANGE,
  key,
  value,
});

// Envoi du formulaire pour la création d'un user
export const onSubscribe = () => ({
  type: ON_SUBSCRIBE,
});
export const newUserRefresh = (payload) => ({
  type: NEW_USER_REFRESH,
  payload,
});

// Déclenche le login
export const onLogin = (payload) => ({
  type: ON_LOGIN,
  payload,
});

// Déclenche la mise à jour du state depuis le middleware
export const refreshState = (payload) => ({
  type: REFRESH_STATE,
  payload,
});

// Déclenche le changement de page pour le login
export const clearInput = () => ({
  type: CLEAR_INPUT,
});

// nettoie les valeurs de retour message et success
export const clearBackValue = () => ({
  type: CLEAR_BACK_VALUE,
});
// applique les valeurs du state initial
export const onLogout = () => ({
  type: ON_LOGOUT,
});

export const getAllTenth = () => ({
  type: GET_ALL_TENTH,
});

export const callAllUsers = () => ({
  type: CALL_ALL_USERS,
});

export const allUsers = (payload) => ({
  type: REFRESH_ALL_USERS,
  payload,
});

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});
