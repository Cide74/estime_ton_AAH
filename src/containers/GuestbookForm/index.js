import { connect } from "react-redux";
import GuestbookForm from "src/components/GuestbookForm";
import {
  changeFieldGuestbook,
  sendGuestbookForm,
  clearGuestbook,
  getGuestbook,
} from "src/actions/guestbook";

const mapStateToProps = (state) => ({
  title: state.guestbook.title,
  content: state.guestbook.content,
  success: state.guestbook.success,
  message: state.guestbook.message,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldGuestbook: (name, value) => {
    const action = changeFieldGuestbook(name, value);
    dispatch(action);
  },
  sendGuestbookForm: () => {
    const action = sendGuestbookForm();
    dispatch(action);
  },
  clearGuestbook: () => {
    const action = clearGuestbook();
    dispatch(action);
  },
  getGuestbook: () => {
    const action = getGuestbook();
    dispatch(action);
  },
  getGuestbook: () => {
    const action = getGuestbook();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestbookForm);
