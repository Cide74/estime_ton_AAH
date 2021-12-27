import { connect } from "react-redux";
import OneArticle from "src/components/OneArticle";
import {
  deleteOneArticle,
  modifyOneArticle,
  changeFieldArticle,
  clearArticle
} from "src/actions/article";

const mapStateToProps = state => ({
  title: state.article.title,
  content: state.article.content,
  user: state.article.user,
  id: state.article.id,
  pseudo: state.user.pseudo,
  success: state.article.success,
  message: state.article.message,
  created_at: state.article.created_at,
  oneArticle: state.article.oneArticle
});

const mapDispatchToProps = dispatch => ({
  changeFieldArticle: (name, value) => {
    const action = changeFieldArticle(name, value);
    dispatch(action);
  },
  deleteOneArticle: idArticle => {
    const action = deleteOneArticle(idArticle);
    dispatch(action);
  },
  modifyOneArticle: idArticle => {
    const action = modifyOneArticle(idArticle);
    dispatch(action);
  },
  clearArticle: () => {
    const action = clearArticle();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OneArticle);
