import Api from "src/API/index";
import { ON_SUBSCRIBE, ON_LOGIN } from "src/actions/user";

import { refreshState } from "../actions/user";

const user = store => next => async action => {
  // valeur du state à envoyé dans la bdd

  const { pseudo, email, birthdate, password } = store.getState().user;
  const {
    disability_rate,
    apl,
    place_of_residence
  } = store.getState().question;
  switch (action.type) {
    case ON_SUBSCRIBE: {
      console.log(`middleware => on subscribe : ${email} and pseudo ${pseudo}`);
      // connection avec L'api
      console.log("envoyé en bbd =>", {
        pseudo: pseudo,
        email: email,
        birthday: birthdate,
        en_France: place_of_residence,
        taux_invalidite: disability_rate
      });
      try {
        const createUser = await Api.post("/signup", {
          pseudo,
          birthdate,
          email,
          password,
          disability_rate,
          place_of_residence,
          role: 1
        });
        console.log(createUser.data.message);
      } catch (error) {
        console.trace("Une erreur est survenu dans le post", error);
        console.log("retour de la reponse ", error.response);
        // console.log("retour de l'API : ", error.response.data);
      }
      break;
    }
    case ON_LOGIN: {
      console.log(`Middleware => on login pseudo : ${pseudo}`);
      try {
        const logUser = await Api.post("/login", {
          pseudo,
          password
        });
        Api.defaults.headers.common.Authorization = `Bearer ${logUser.token}`;
        if (logUser.data.userInfo.pseudo !== "") {
          const saveDataUser = refreshState(logUser.data);
          console.log("On login logUser=> ", logUser.data);
          store.dispatch(saveDataUser);
        }
      } catch (error) {
        console.log(error.status);
        console.trace("error :", error);
      }
      break;
    }

    default:
      next(action);
  }
};
export default user;
