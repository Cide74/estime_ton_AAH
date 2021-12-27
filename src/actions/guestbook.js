export const GET_GUESTBOOK = "GET_GUESTBOOK";
export const REFRESH_GUESTBOOK = "REFRESH_GUESTBOOK";
export const REFRESH_TEN_GUESTBOOK = "REFRESH_TEN_GUESTBOOK";
export const CHANGE_FIELD_GUESTBOOK = "CHANGE_FIELD_GUESTBOOK";
export const SEND_GUESTBOOK_FORM = "SEND_GUESTBOOK_FORM";
export const GET_ONE_GUESTBOOK = "GET_ONE_GUESTBOOK";
export const DELETE_ONE_GUESTBOOK = "DELETE_ONE_GUESTBOOK";
export const MODIFY_ONE_GUESTBOOK = "MODIFY_ONE_GUESTBOOK";
export const CLEAR_GUESTBOOK = "CLEAR_GUESTBOOK";
export const CALL_ALL_GUESTBOOKS = "CALL_ALL_GUESTBOOKS";
export const ALL_GUESTBOOKS = "ALL_GUESTBOOKS";

export const getGuestbook = () => ({
  type: GET_GUESTBOOK,
});
export const refreshGuestbook = (payload) => ({
  type: REFRESH_GUESTBOOK,
  payload,
});
export const refreshTenGuestbook = (payload) => ({
  type: REFRESH_TEN_GUESTBOOK,
  payload,
});

// input => handleInputChange
export const changeFieldGuestbook = (name, value) => ({
  type: CHANGE_FIELD_GUESTBOOK,
  name,
  value,
});

// déclancheur
export const sendGuestbookForm = () => ({
  type: SEND_GUESTBOOK_FORM,
});

export const getOneGuestbook = (idGuestbook) => ({
  type: GET_ONE_GUESTBOOK,
  idGuestbook,
});

export const deleteOneGuestbook = (idGuestbook) => ({
  type: DELETE_ONE_GUESTBOOK,
  idGuestbook,
});

export const modifyOneGuestbook = (idGuestbook) => ({
  type: MODIFY_ONE_GUESTBOOK,
  idGuestbook,
});
export const clearGuestbook = () => ({
  type: CLEAR_GUESTBOOK,
});
export const callAllGuestbooks = () => ({
  type: CALL_ALL_GUESTBOOKS,
});
export const allGuestbooks = (payload) => ({
  type: ALL_GUESTBOOKS,
  payload,
});
