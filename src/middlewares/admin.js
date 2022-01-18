import Api from "src/API/index";
import {
  ADMIN_DELETE_USER,
  delUserRefresh,
  ADMIN_DELETE_SIMULATION,
  delFormRefresh,
  ADMIN_DELETE_ART,
  delArtRefresh,
  ADMIN_DELETE_GBOOK,
  delGbRefresh,
  ADMIN_DELETE_COMMENT,
  delComRefresh,
} from "src/actions/admin";

const admin = (store) => (next) => async (action) => {
  const { accessToken } = store.getState().user;
  const options = { headers: { Authorization: `Bearer ${accessToken}` } };
  switch (action.type) {
    case ADMIN_DELETE_USER: {
      try {
        const delUser = await Api.delete(
          `/adminuser/${action.idUser}`,
          options
        );
        const reponse = delUserRefresh(delUser);
        store.dispatch(reponse);
      } catch (error) {
        console.log(error);
      }
      break;
    }
    case ADMIN_DELETE_SIMULATION: {
      try {
        const delForm = await Api.delete(
          `/admininfosimulation/${action.idForm}`,
          options
        );
        const reponse = delFormRefresh(delForm);
        console.log("mid del form", reponse.data);
        store.dispatch(reponse);
      } catch (error) {
        console.log(error);
      }
      break;
    }
    case ADMIN_DELETE_ART: {
      try {
        const delArt = await Api.delete(
          `/adminarticle/${action.idArt}`,
          options
        );
        const reponse = delArtRefresh(delArt);
        store.dispatch(reponse);
      } catch (error) {
        console.log(error);
      }
      break;
    }
    case ADMIN_DELETE_GBOOK: {
      try {
        const delGbook = await Api.delete(
          `/adminguestbook/${action.idGbook}`,
          options
        );
        const reponse = delGbRefresh(delGbook);
        store.dispatch(reponse);
      } catch (error) {
        console.log(error);
      }
      break;
    }
    case ADMIN_DELETE_COMMENT: {
      try {
        const delCom = await Api.delete(
          `/admincomment/${action.idCom}`,
          options
        );
        const reponse = delComRefresh(delCom);
        store.dispatch(reponse);
      } catch (error) {
        console.log(error);
      }
      break;
    }
    default:
      next(action);
  }
};

export default admin;
