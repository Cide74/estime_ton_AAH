import { connect } from "react-redux";
import Article from "src/components/Article";
import { getArticle, getOneArticle } from "src/actions/article";

const mapStateToProps = state => ({
  articles: state.article.allArticles,
  pseudo: state.user.pseudo,
  authors: state.article.authors
});

const mapDispatchToProps = dispatch => ({
  getArticle: () => {
    const action = getArticle();
    dispatch(action);
  },
  getOneArticle: idArticle => {
    const action = getOneArticle(idArticle);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
