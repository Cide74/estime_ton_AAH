import {
  REFRESH_ARTICLE,
  REFRESH_ALL_ARTICLE,
  SEND_ARTICLE_FORM,
  CHANGE_FIELD_ARTICLE,
  CLEAR_ARTICLE,
  ALL_ARTICLES,
  REFRESH_ONE_ARTICLE,
} from "src/actions/article";

export const initialState = {
  allArticles: [],
  count: 0,
  id: 0,
  title: "",
  content: "",
  success: false, // retour de la BDD
  message: "", // retour de la BDD
  user_id: 0,
  user: "",
  created_at: "",
  updated_at: "",
  everyArticles: {},
  // un article
  oneArticle: {},
  oneArtTitle: "",
  oneArtContent: "",
  oneArtId: 0,
  oneArtComments: [],
  oneArtCreated_at: "",
  oneArtUpdated_at: "",
  oneArtWriter: "",
};

//console.log(`initialState article`, initialState)

const article = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_ARTICLE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case REFRESH_ONE_ARTICLE: {
      // console.log(action.payload);
      return {
        ...state,
        oneArticle: action.payload.article.rows[0],
        oneArtContent: action.payload.article.rows[0].content,
        oneArtTitle: action.payload.article.rows[0].title,
        oneArtId: action.payload.article.rows[0].id,
        oneArtCreated_at: action.payload.article.rows[0].created_at,
        oneArtUpdated_at: action.payload.article.rows[0].updated_at,
        oneArtComments: action.payload.article.rows[0].comment,
        oneArtWriter: action.payload.article.rows[0].user.pseudo,
      };
    }

    case REFRESH_ARTICLE:
      // console.log("reducer refresh payload ", action.payload);

      return {
        ...state,
        ...action.payload[0],
        count: action.payload.count,
        id: action.payload.id,
        title: action.payload.title,
        success: action.payload.success,
        message: action.payload.message,
        content: action.payload.content,
        user_id: action.payload.user_id,
        user: action.payload.user,
        created_at: action.payload.created_at,
        updated_at: action.payload.updated_at,
      };

    case REFRESH_ALL_ARTICLE: {
      // console.log("tous les articles ", action.payload.rows);
      // pour la page Article
      return {
        ...state,
        allArticles: action.payload.rows,
      };
    }
    case SEND_ARTICLE_FORM:
      return {
        ...state,
      };
    case CLEAR_ARTICLE:
      return {
        ...initialState,
      };
    case ALL_ARTICLES:
      // console.log("all articles payload", action.payload);
      return {
        ...state,
        everyArticles: action.payload,
      };

    default:
      return state;
  }
};

export default article;
