import Api from "src/API/index";

import {
  ON_SUBSCRIBE,
  ON_LOGIN,
  newUserRefresh,
  refreshState,
  loginError,
  allUsers,
  CALL_ALL_USERS,
  GET_ALL_TENTH,
} from "src/actions/user";
import { refreshTenArticle } from "src/actions/article";
import { refreshTenGuestbook } from "src/actions/guestbook";
import { refreshTenQuestion } from "src/actions/question";
import { refreshTenComment } from "src/actions/comment";

const user = (store) => (next) => async (action) => {
  const { pseudo, email, password, accessToken, id } = store.getState().user;
  const options = { headers: { Authorization: `Bearer ${accessToken}` } };

  switch (action.type) {
    case ON_SUBSCRIBE: {
      try {
        const createUser = await Api.post("/signup", {
          pseudo,
          email,
          password,
          role: 1,
        });

        const newUser = newUserRefresh(createUser.data);
        console.log(newUser);
        store.dispatch(newUser);
      } catch (error) {
        console.log("retour de la réponse en erreur ", error);
      }
      break;
    }
    case ON_LOGIN: {
      localStorage.clear();
      sessionStorage.clear();
      try {
        const logUser = await Api.post("/login", {
          pseudo: pseudo,
          password: password,
        });

        if (logUser.data.userInfo.pseudo !== "") {
          sessionStorage.setItem("pseudo", logUser.data.userInfo.pseudo);
          const saveDataUser = refreshState(logUser.data);
          store.dispatch(saveDataUser);
        }
      } catch (error) {
        console.log("error =>", error);
        const msgError = loginError(error.response);
        store.dispatch(msgError);
      }
      break;
    }
    // tout ce qui touche un utilisateur par 10
    case GET_ALL_TENTH: {
      const tenArticle = `/userLastArticle/${id}`;
      const tenMsg = `/userLastGuestbook/${id}`;
      const tenComment = `/userLastComment/${id}`;
      const tenSim = `/userLastInfosimulation/${id}`;
      try {
        const tenthArticle = await Api.get(tenArticle, options);
        const tenthMsg = await Api.get(tenMsg, options);
        const tenthComment = await Api.get(tenComment, options);
        const tenthSim = await Api.get(tenSim, options);

        // article
        const myArticles = refreshTenArticle(tenthArticle.data);
        // console.log("10 articles", myArticles);
        store.dispatch(myArticles);
        // simulation
        const mySimul = refreshTenQuestion(tenthSim.data);
        store.dispatch(mySimul);
        // guestbook
        const myGuest = refreshTenGuestbook(tenthMsg.data);
        store.dispatch(myGuest);
        // commentaires du guestbook
        const myComment = refreshTenComment(tenthComment.data);
        store.dispatch(myComment);
      } catch (error) {
        console.log(error);
      }
      break;
    }
    // pour administateur
    case CALL_ALL_USERS: {
      try {
        const getAllUsers = await Api.get("/adminusers", options);
        const response = allUsers(getAllUsers.data);
        store.dispatch(response);
      } catch (error) {
        console.log(error);
      }
    }
    default:
      next(action);
  }
};
export default user;
