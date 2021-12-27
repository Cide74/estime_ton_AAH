export const GET_ARTICLE = "GET_ARTICLE";
export const REFRESH_ARTICLE = "REFRESH_ARTICLE";
export const REFRESH_TEN_ARTICLE = "REFRESH_TEN_ARTICLE";
export const REFRESH_ALL_ARTICLE = "REFRESH_ALL_ARTICLE";
export const CHANGE_FIELD_ARTICLE = "CHANGE_FIELD_ARTICLE";
export const SEND_ARTICLE_FORM = "SEND_ARTICLE_FORM";
export const GET_ONE_ARTICLE = "GET_ONE_ARTICLE";
export const DELETE_ONE_ARTICLE = "DELETE_ONE_ARTICLE";
export const MODIFY_ONE_ARTICLE = "MODIFY_ONE_ARTICLE";
export const CLEAR_ARTICLE = "CLEAR_ARTICLE";
export const CALL_ALL_ARTICLES = "CALL_ALL_ARTICLES";
export const ALL_ARTICLES = "ALL_ARTICLES";

export const getArticle = () => ({
  type: GET_ARTICLE,
});

export const refreshArticle = (payload) => ({
  type: REFRESH_ARTICLE,
  payload,
});
export const refreshTenArticle = (payload) => ({
  type: REFRESH_TEN_ARTICLE,
  payload,
});
export const refreshAllArticle = (payload) => ({
  type: REFRESH_ALL_ARTICLE,
  payload,
});

// input => handleInputChange
export const changeFieldArticle = (name, value) => ({
  type: CHANGE_FIELD_ARTICLE,
  name,
  value,
});

// déclancheur
export const sendArticleForm = () => ({
  type: SEND_ARTICLE_FORM,
});

export const getOneArticle = (idArticle) => ({
  type: GET_ONE_ARTICLE,
  idArticle,
});

export const deleteOneArticle = (idArticle) => ({
  type: DELETE_ONE_ARTICLE,
  idArticle,
});

export const modifyOneArticle = (idArticle) => ({
  type: MODIFY_ONE_ARTICLE,
  idArticle,
});
export const clearArticle = () => ({
  type: CLEAR_ARTICLE,
});

export const callAllArticles = () => ({
  type: CALL_ALL_ARTICLES,
});

export const allArticles = (payload) => ({
  type: ALL_ARTICLES,
  payload,
});
