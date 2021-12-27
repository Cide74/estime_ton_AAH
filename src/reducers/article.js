import {
  REFRESH_ARTICLE,
  REFRESH_ALL_ARTICLE,
  SEND_ARTICLE_FORM,
  CHANGE_FIELD_ARTICLE,
  CLEAR_ARTICLE,
  ALL_ARTICLES,
} from "src/actions/article";

export const initialState = {
  allArticles: [],
  oneArticle: {},
  count: 0,
  id: 0,
  title: "",
  content: "",
  success: "", // retour de la BDD
  message: "", // retour de la BDD
  user_id: 0,
  user: "",
  created_at: "",
  updated_at: "",
  everyArticles: {},
};

//console.log(`initialState article`, initialState)

const article = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_ARTICLE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case REFRESH_ARTICLE:
      console.log("reducer refresh payload ", action.payload);

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
      // console.log("tout les articles ", action.payload.rows);
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
