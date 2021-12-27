import { connect } from "react-redux";
import CommentForm from "src/components/CommentForm";
import {
  changeFieldComment,
  sendCommentForm,
  clearComment
} from "src/actions/comment";

const mapStateToProps = state => ({
  title: state.comment.title,
  content: state.comment.content,
  success: state.comment.success,
  message: state.comment.message
});

const mapDispatchToProps = dispatch => ({
  changeFieldComment: (name, value) => {
    const action = changeFieldComment(name, value);
    dispatch(action);
  },
  sendCommentForm: () => {
    const action = sendCommentForm();
    dispatch(action);
  },
  clearComment: () => {
    const action = clearComment();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
