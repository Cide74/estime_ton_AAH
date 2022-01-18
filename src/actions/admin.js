export const ADMIN_DELETE_USER = "ADMIN_DELETE_USER";
export const DEL_USER_REFRESH = "DEL_USER_REFRESH";
export const ADMIN_DELETE_SIMULATION = "ADMIN_DELETE_SIMULATION";
export const DEL_FORM_REFRESH = "DEL_FORM_REFRESH";
export const ADMIN_DELETE_ART = "ADMIN_DELETE_ART";
export const DEL_ART_REFRESH = "DEL_ART_REFRESH";
export const ADMIN_DELETE_GBOOK = "ADMIN_DELETE_GBOOK";
export const DEL_GB_REFRESH = "DEL_GB_REFRESH";
export const ADMIN_DELETE_COMMENT = "ADMIN_DELETE_COMMENT";
export const DEL_COM_REFRESH = "DEL_COM_REFRESH";

export const AdminDeleteUser = (idUser) => ({
  type: ADMIN_DELETE_USER,
  idUser,
});
export const delUserRefresh = (payload) => ({
  type: DEL_USER_REFRESH,
  payload,
});
export const AdminDeleteSimulation = (idForm) => ({
  type: ADMIN_DELETE_SIMULATION,
  idForm,
});
export const delFormRefresh = (payload) => ({
  type: DEL_FORM_REFRESH,
  payload,
});
export const AdminDeleteArt = (idArt) => ({
  type: ADMIN_DELETE_ART,
  idArt,
});
export const delArtRefresh = (payload) => ({
  type: DEL_ART_REFRESH,
  payload,
});
export const AdminDeleteGbook = (idGbook) => ({
  type: ADMIN_DELETE_GBOOK,
  idGbook,
});
export const delGbRefresh = (payload) => ({
  type: DEL_GB_REFRESH,
  payload,
});
export const AdminDeleteComment = (idCom) => ({
  type: ADMIN_DELETE_COMMENT,
  idCom,
});
export const delComRefresh = (payload) => ({
  type: DEL_COM_REFRESH,
  payload,
});
