import { connect } from "react-redux";
import CommentForm from "src/components/CommentForm";

import {
  changeFieldComment,
  sendFormComment,
  // clearComment,
} from "src/actions/comment";

const mapStateToProps = (state) => ({
  content: state.comment.content,
  success: state.comment.success,
  message: state.comment.message,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldComment: (name, value) => {
    const action = changeFieldComment(name, value);
    dispatch(action);
  },

  sendFormComment: (cate, id) => {
    console.log(cate, " ", id);
    const action = sendFormComment(cate, id);
    dispatch(action);
  },

  // clearComment: () => {
  //   const action = clearComment();
  //   dispatch(action);
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
