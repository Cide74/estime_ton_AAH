import { connect } from "react-redux";
import OneArticle from "src/components/OneArticle";
import {
  deleteOneArticle,
  modifyOneArticle,
  changeFieldArticle,
  clearArticle,
} from "src/actions/article";
import { changeFieldComment, sendFormComment } from "src/actions/comment";

const mapStateToProps = (state) => ({
  title: state.article.oneArtTitle,
  content: state.article.oneArtContent,
  id: state.article.oneArtId,
  created_at: state.article.oneArtCreated_at,
  oneArticle: state.article.oneArtUpdated_at,
  writer: state.article.oneArtWriter,
  comments: state.article.oneArtComments,
  success: state.article.success,
  message: state.article.message,
  comSuccess: state.comment.success,
  comMessage: state.comment.message,
  pseudo: state.user.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldArticle: (name, value) => {
    const action = changeFieldArticle(name, value);
    dispatch(action);
  },
  changeFieldComment: (name, value) => {
    const action = changeFieldComment(name, value);
    dispatch(action);
  },
  sendFormComment: (cate, id) => {
    const action = sendFormComment(cate, id);
    dispatch(action);
  },
  deleteOneArticle: (idArticle) => {
    const action = deleteOneArticle(idArticle);
    dispatch(action);
  },
  modifyOneArticle: (idArticle) => {
    const action = modifyOneArticle(idArticle);
    dispatch(action);
  },
  clearArticle: () => {
    const action = clearArticle();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OneArticle);
