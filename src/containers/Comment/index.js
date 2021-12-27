import { connect } from "react-redux";
import Comment from "src/components/Comment";
import {
  getComment,
  getOneComment,
  deleteComment,
  modifyComment,
  changeFieldComment,
  clearComment
} from "src/actions/comment";

const mapStateToProps = state => ({

  pseudo: state.user.pseudo,
  role: state.user.role
  
});

 //console.log(`state du container`, state)

const mapDispatchToProps = dispatch => ({
  getComment: () => {
    const action = getComment();
    dispatch(action);
  },
  getOneComment: idComment => {
    //console.log(`idComment`, idComment)
  const action = getOneComment(idComment);
  dispatch(action);
  },
  changeFieldComment: (name, value) => {
    const action = changeFieldComment(name, value);
    dispatch(action);
  },
  deleteComment: idComment => {
    const action = deleteComment(idComment);
    dispatch(action);
  },
  modifyComment: idComment => {
    const action = modifyComment(idComment);
    dispatch(action);
  },
  clearComment: () => {
    const action = clearComment();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);

