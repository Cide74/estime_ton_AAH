import { connect } from "react-redux";
import OneGuestbook from "src/components/OneGuestbook";
import {
  deleteOneGuestbook,
  modifyOneGuestbook,
  changeFieldGuestbook,
  clearGuestbook,
} from "src/actions/guestbook";
import { changeFieldComment, sendFormComment } from "src/actions/comment";

const mapStateToProps = (state) => ({
  id: state.guestbook.id,
  title: state.guestbook.title,
  content: state.guestbook.content,
  user: state.guestbook.oneUser,
  updated_at: state.guestbook.updated_at,
  comments: state.guestbook.oneComments,
  success: state.guestbook.success,
  message: state.guestbook.message,
  pseudo: state.user.pseudo,
  role: state.user.role,
  comSuccess: state.comment.success,
  comMessage: state.comment.message,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldGuestbook: (name, value) => {
    const action = changeFieldGuestbook(name, value);
    dispatch(action);
  },
  deleteOneGuestbook: (idGuestbook) => {
    const action = deleteOneGuestbook(idGuestbook);
    dispatch(action);
  },
  modifyOneGuestbook: (idGuestbook) => {
    const action = modifyOneGuestbook(idGuestbook);
    dispatch(action);
  },
  clearGuestbook: () => {
    const action = clearGuestbook();
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
});

export default connect(mapStateToProps, mapDispatchToProps)(OneGuestbook);
