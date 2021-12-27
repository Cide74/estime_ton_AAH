import { connect } from "react-redux";
import OneGuestbook from "src/components/OneGuestbook";
import {
  deleteOneGuestbook,
  modifyOneGuestbook,
  changeFieldGuestbook,
  clearGuestbook
} from "src/actions/guestbook";

const mapStateToProps = state => ({
  title: state.guestbook.rows[0].title,
  content: state.guestbook.rows[0].content,
  user: state.guestbook.rows[0].user,
  id: state.guestbook.rows[0].id,
  pseudo: state.user.pseudo,
  role: state.user.role,
  success: state.guestbook.rows[0].success,
  message: state.guestbook.rows[0].message,
  updated_at: state.guestbook.rows[0].updated_at,
  comments: state.guestbook.rows[0].comment,
  countComments: state.guestbook.count
  
});

const mapDispatchToProps = dispatch => ({
  changeFieldGuestbook: (name, value) => {
    const action = changeFieldGuestbook(name, value);
    dispatch(action);
  },
  deleteOneGuestbook: idGuestbook => {
    const action = deleteOneGuestbook(idGuestbook);
    dispatch(action);
  },
  modifyOneGuestbook: idGuestbook => {
    const action = modifyOneGuestbook(idGuestbook);
    dispatch(action);
  },
  clearGuestbook: () => {
    const action = clearGuestbook();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OneGuestbook);

