import Api from "src/API/index";
import {
  GET_GUESTBOOK,
  refreshGuestbook,
  allGuestbooks,
  SEND_GUESTBOOK_FORM,
  GET_ONE_GUESTBOOK,
  DELETE_ONE_GUESTBOOK,
  MODIFY_ONE_GUESTBOOK,
  CALL_ALL_GUESTBOOKS,
} from "src/actions/guestbook";

const guestbook = (store) => (next) => async (action) => {
  const options = { headers: { Authorization: `Bearer ${accessToken}` } };

  const { pseudoId, accessToken } = store.getState().user;
  // console.log(`pseudoId`, pseudoId)
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

    //! en cours
    case GET_ONE_GUESTBOOK: {
      try {
        const getGuestbook = await Api.get(`/guestbook/${action.idGuestbook}`);
        if (getGuestbook.data.success) {
          //  console.log("middleware Guestbook ", getGuestbook.data.guestbook);
          ///   console.log("middleware Guestbook data Détails ", getGuestbook.data);
          console.log(
            "middleware Guestbook Détails ",
            getGuestbook.data.guestbook
          );
          // console.log("middleware Guestbook Détails [0] ", getGuestbook.data.guestbook.rows[0]);
          console.log(
            "middleware Guestbook Détails comment ",
            getGuestbook.data.guestbook.rows[0].comment
          );

          store.dispatch(refreshGuestbook(getGuestbook.data.guestbook));
          // store.dispatch(refreshGuestbook(getGuestbook.data.guestbook.rows[0])); //! OK
        }
      } catch (error) {
        console.log(error);
      }
      break;
    }

    case SEND_GUESTBOOK_FORM: {
      sessionStorage.clear();
      localStorage.clear();
      try {
        const newGuesbook = await Api.post(
          `/user/${pseudoId}/guestbook`,
          {
            title,
            content,
            user_id: pseudoId,
          },
          options
        );
        sessionStorage.setItem("success", newGuesbook.data.success);
        sessionStorage.setItem("message", newGuesbook.data.message);
        store.dispatch(refreshGuestbook(newGuesbook.data));
      } catch (error) {
        console.log(
          "La création d'un message pour le livre d'or à échoué",
          error
        );
      }
      break;
    }

    case DELETE_ONE_GUESTBOOK: {
      sessionStorage.clear();
      try {
        const delInfo = await Api.delete(
          `/user/${pseudoId}/guestbook/${action.idGuestbook}`,
          options
        );
        console.log(delInfo);
        sessionStorage.setItem("success", delInfo.data.success);
        sessionStorage.setItem("message", delInfo.data.message);
        store.dispatch(refreshGuestbook(delInfo.data));
      } catch (error) {
        console.log(error);
      }
      break;
    }
    case MODIFY_ONE_GUESTBOOK: {
      sessionStorage.clear();
      try {
        const modify = await Api.patch(
          `/user/${pseudoId}/Guestbook/${action.idGuestbook}`,
          {
            title,
            content,
          },
          options
        );
        console.log(modify.data);
        sessionStorage.setItem("success", modify.data.success);
        sessionStorage.setItem("message", modify.data.message);
        store.dispatch(refreshGuestbook(modify.data));
      } catch (error) {
        console.log(error);
      }
      break;
    }
    case CALL_ALL_GUESTBOOKS: {
      try {
        const allGB = await Api.get("/guestbooks", options);
        const reponse = allGuestbooks(allGB.data);
        console.log(reponse);
        store.dispatch(reponse);
      } catch (error) {
        console.log(error);
      }
    }
    default:
      next(action);
  }
};

export default guestbook;
