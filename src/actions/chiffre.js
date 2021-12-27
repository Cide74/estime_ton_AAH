 
export const GET_CHIFFRE = 'GET_CHIFFRE';
export const REFRESH_CHIFFRE = "REFRESH_CHIFFRE";
export const SAVE_CHIFFRE = 'SAVE_CHIFFRE';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const getChiffre = () => ({
  type: GET_CHIFFRE,
});

export const refreshChiffre = payload => ({
  type: REFRESH_CHIFFRE,
  payload
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});
