export const CHANGE_FIELD_COMMENT = "CHANGE_FIELD_COMMENT";
export const GET_COMMENT = "GET_COMMENT";
export const GET_ONE_COMMENT = "GET_ONE_COMMENT";
export const DELETE_ONE_COMMENT = "DELETE_ONE_COMMENT";
export const MODIFY_ONE_COMMENT = "MODIFY_ONE_COMMENT";
export const CLEAR_COMMENT = "CLEAR_COMMENT";
export const CALL_ALL_COMMENTS = "CALL_ALL_COMMENTS";
export const ALL_COMMENTS = "ALL_COMMENTS";
export const SEND_FORM_COMMENT = "SEND_FORM_COMMENT";
export const REFRESH_COMMENT = "REFRESH_COMMENT";
export const REFRESH_TEN_COMMENT = "REFRESH_TEN_COMMENT";
export const REFRESH_POST_COM_ART = "REFRESH_POST_COM_ART";
export const REFRESH_POST_COM_GB = "REFRESH_POST_COM_GB";
export const REFRESH_ONE_COMMENT = "REFRESH_ONE_COMMENT";

// déclencheur
export const sendFormComment = (cate, id) => ({
  type: SEND_FORM_COMMENT,
  cate,
  id,
});

// input => handleInputChange
export const changeFieldComment = (name, value) => ({
  type: CHANGE_FIELD_COMMENT,
  name,
  value,
});

export const getComment = () => ({
  type: GET_COMMENT,
});

export const refreshComment = (payload) => ({
  type: REFRESH_COMMENT,
  payload,
});

export const refreshTenComment = (payload) => ({
  type: REFRESH_TEN_COMMENT,
  payload,
});

export const getOneComment = (idComment) => ({
  type: GET_ONE_COMMENT,
  idComment,
});

export const deleteOneComment = (idComment) => ({
  type: DELETE_ONE_COMMENT,
  idComment,
});

export const modifyOneComment = (idComment) => ({
  type: MODIFY_ONE_COMMENT,
  idComment,
});
export const clearCOMMENT = () => ({
  type: CLEAR_GUESTBOOK,
});

export const callAllComments = () => ({
  type: CALL_ALL_COMMENTS,
});

export const allComments = (payload) => ({
  type: ALL_COMMENTS,
  payload,
});
export const refreshPostComArt = (payload) => ({
  type: REFRESH_POST_COM_ART,
  payload,
});
export const refreshPostComGb = (payload) => ({
  type: REFRESH_POST_COM_GB,
  payload,
});
export const refreshOneComment = (payload) => ({
  type: REFRESH_ONE_COMMENT,
  payload,
});
