import Api from "src/API/index";

import {
  refreshArticle,
  refreshAllArticle,
  allArticles,
  refreshOneArticle,
  GET_ARTICLE,
  SEND_ARTICLE_FORM,
  GET_ONE_ARTICLE,
  DELETE_ONE_ARTICLE,
  MODIFY_ONE_ARTICLE,
  CALL_ALL_ARTICLES,
} from "src/actions/article";

const article = (store) => (next) => async (action) => {
  const { id, accessToken } = store.getState().user;
  const { title, content } = store.getState().article;
  const options = { headers: { Authorization: `Bearer ${accessToken}` } };

  switch (action.type) {
    // tous les articles
    case GET_ARTICLE: {
      try {
        const allArticles = await Api.get(`/articles`);
        // console.log("toutes les datas des l'article", allArticles.data.articles);
        const getAllArticles = refreshAllArticle(allArticles.data.articles);
        store.dispatch(getAllArticles);
      } catch (error) {
        console.log("getArticle =>", error);
      }
      break;
    }
    // un seul article
    case GET_ONE_ARTICLE: {
      try {
        const getArticle = await Api.get(
          `/article/${action.idArticle}`,
          options
        );

        store.dispatch(refreshOneArticle(getArticle.data));
      } catch (error) {
        console.log(error);
      }
      break;
    }
    // envoi du formulaire d'article
    case SEND_ARTICLE_FORM: {
      sessionStorage.clear();
      localStorage.clear();

      try {
        const newArticle = await Api.post(
          `/user/${id}/article`,
          {
            title,
            content,
            user_id: id,
          },
          options
        );

        sessionStorage.setItem("success", newArticle.data.success);
        sessionStorage.setItem("message", newArticle.data.message);

        store.dispatch(refreshArticle(newArticle.data));
      } catch (error) {
        console.log("La création d'un article à échoué", error);
      }
      break;
    }
    // suppression d'un article
    case DELETE_ONE_ARTICLE: {
      sessionStorage.clear();
      try {
        const delInfo = await Api.delete(
          `/user/${id}/article/${action.idArticle}`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );

        sessionStorage.setItem("success", delInfo.data.success);
        sessionStorage.setItem("message", delInfo.data.message);
        store.dispatch(refreshArticle(delInfo.data));
      } catch (error) {
        console.log(error);
      }
      break;
    }
    // modification d'un article
    case MODIFY_ONE_ARTICLE: {
      sessionStorage.clear();
      try {
        const modify = await Api.patch(
          `/user/${id}/article/${action.idArticle}`,
          {
            title,
            content,
          },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        console.log(modify.data);
        sessionStorage.setItem("success", modify.data.success);
        sessionStorage.setItem("message", modify.data.message);
        store.dispatch(refreshArticle(modify.data));
      } catch (error) {
        console.log(error);
      }
      break;
    }
    // tous les articles pour Parametre
    case CALL_ALL_ARTICLES: {
      try {
        const allArticle = await Api.get("/articles", options);
        const reponse = allArticles(allArticle.data);
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

export default article;
