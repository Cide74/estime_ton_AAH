import { connect } from "react-redux";
import ArticleForm from "src/components/ArticleForm";
import {
  changeFieldArticle,
  sendArticleForm,
  clearArticle
} from "src/actions/article";

const mapStateToProps = state => ({
  title: state.article.title,
  content: state.article.content,
  success: state.article.success,
  message: state.article.message
});

const mapDispatchToProps = dispatch => ({
  changeFieldArticle: (name, value) => {
    const action = changeFieldArticle(name, value);
    dispatch(action);
  },
  sendArticleForm: () => {
    const action = sendArticleForm();
    dispatch(action);
  },
  clearArticle: () => {
    const action = clearArticle();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleForm);
