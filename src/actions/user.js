export const FIELD_CHANGE = "FIELD_CHANGE";
export const ON_SUBSCRIBE = "ON_SUBSCRIBE";
export const ON_LOGIN = "ON_LOGIN";
export const REFRESH_STATE = "REFRESH_STATE";
export const REFRESH_HEADER = "REFRESH_HEADER";
export const ON_LOGOUT = "ON_LOGOUT";
export const GET_ALL_TENTH = "GET_ALL_TENTH";
export const CALL_ALL_USERS = "CALL_ALL_USERS";
export const REFRESH_ALL_USERS = "REFRESH_ALL_USERS";

// pour les inputs
export const fieldChange = (key, value) => ({
  type: FIELD_CHANGE,
  key,
  value,
});

// Envois de formulaires pour la creation d'un user
export const onSubscribe = () => ({
  type: ON_SUBSCRIBE,
});

// Déclenche le login
export const onLogin = (payload) => ({
  type: ON_LOGIN,
  payload,
});

// Declenche la mise a jour du state depuis le middleware
export const refreshState = (payload) => ({
  type: REFRESH_STATE,
  payload,
});

// Déclanche le changement de page pour le login
export const refreshHeader = () => ({
  type: REFRESH_HEADER,
});

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
