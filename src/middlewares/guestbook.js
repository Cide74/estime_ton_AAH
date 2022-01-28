import Api from "src/API/index";
import {
  GET_GUESTBOOK,
  refreshGuestbook,
  getAllGuestbooks,
  refreshPostGuestbook,
  refreshOneGuestbook,
  refreshModifyGuestbook,
  SEND_GUESTBOOK_FORM,
  GET_ONE_GUESTBOOK,
  DELETE_ONE_GUESTBOOK,
  MODIFY_ONE_GUESTBOOK,
  CALL_ALL_GUESTBOOKS,
} from "src/actions/guestbook";

const guestbook = (store) => (next) => async (action) => {
  const options = { headers: { Authorization: `Bearer ${accessToken}` } };
  const { id, accessToken } = store.getState().user;
  const { title, content } = store.getState().guestbook;

  switch (action.type) {
    case GET_GUESTBOOK: {
      try {
        const allGuestbooks = await Api.get(`/guestbooks`);
        const getAllGuestbooks = refreshGuestbook(
          allGuestbooks.data.guestbooks
        );
        store.dispatch(getAllGuestbooks);
      } catch (error) {
        console.log("getGuestbook =>", error);
      }
      break;
    }

    case GET_ONE_GUESTBOOK: {
      try {
        const getGuestbook = await Api.get(`/guestbook/${action.idGuestbook}`);
        store.dispatch(refreshOneGuestbook(getGuestbook.data.guestbook));
      } catch (error) {
        console.log(error);
      }
      break;
    }

    case SEND_GUESTBOOK_FORM: {
      try {
        const createGb = await Api.post(
          `/user/${id}/guestbook`,
          {
            title,
            content,
          },
          options
        );
        const reponse = refreshPostGuestbook(createGb.data);
        store.dispatch(reponse);
      } catch (error) {
        console.log(
          "La création d'un message pour le livre d'or à échoué",
          error.response
        );
        console.log(error);
      }
      break;
    }

    case DELETE_ONE_GUESTBOOK: {
      sessionStorage.clear();
      try {
        const delInfo = await Api.delete(
          `/user/${id}/guestbook/${action.idGuestbook}`,
          options
        );
        console.log(delInfo);

        store.dispatch(refreshDelGuestbook(delInfo.data));
      } catch (error) {
        console.log(error);
      }
      break;
    }
    case MODIFY_ONE_GUESTBOOK: {
      sessionStorage.clear();
      try {
        const modifyGb = await Api.patch(
          `/user/${id}/Guestbook/${action.idGuestbook}`,
          {
            title,
            content,
          },
          options
        );
        console.log(modifyGb.data);
        store.dispatch(refreshModifyGuestbook(modifyGb.data));
      } catch (error) {
        console.log(error);
      }
      break;
    }
    case CALL_ALL_GUESTBOOKS: {
      try {
        const allGB = await Api.get("/guestbooks", options);
        const response = getAllGuestbooks(allGB.data);
        console.log(response);
        store.dispatch(response);
      } catch (error) {
        console.log(error);
      }
      break;
    }
    default:
      next(action);
  }
};

export default guestbook;
