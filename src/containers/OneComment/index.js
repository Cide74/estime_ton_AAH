import { connect } from "react-redux";
import OneComment from "src/components/OneComment";

import {
  getComment,
  getOneComment,
  deleteComment,
  modifyComment,
  changeFieldComment,
  clearComment,
} from "src/actions/comment";

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  role: state.user.role,
  content: state.comment.oneComment.content,
  updated_at: state.comment.oneComment.updated_at,
  id: state.comment.oneComment.id,
  user: state.comment.oneUser,
});

const mapDispatchToProps = (dispatch) => ({
  getComment: () => {
    const action = getComment();
    dispatch(action);
  },
  getOneComment: (idComment) => {
    const action = getOneComment(idComment);
    dispatch(action);
  },
  // deleteComment: (idComment) => {
  //   const action = deleteComment(idComment);
  //   dispatch(action);
  // },
  // modifyComment: (idComment) => {
  //   const action = modifyComment(idComment);
  //   dispatch(action);
  // },
  // clearComment: () => {
  //   const action = clearComment();
  //   dispatch(action);
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(OneComment);
