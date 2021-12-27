import { connect } from "react-redux";
import Guestbook from "src/components/Guestbook";
import { getGuestbook, getOneGuestbook } from "src/actions/guestbook";

const mapStateToProps = state => ({
  guestbooks: state.guestbook.guestbooks,
  count: state.guestbook.count,
  pseudo: state.user.pseudo,
  role: state.user.role
});

const mapDispatchToProps = dispatch => ({
  getGuestbook: () => {
    const action = getGuestbook();
    dispatch(action);
  },
  getOneGuestbook: idGuestbook => {
    //console.log(`idGuestbook`, idGuestbook)
  const action = getOneGuestbook(idGuestbook);
  dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Guestbook);
