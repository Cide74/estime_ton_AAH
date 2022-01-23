import { connect } from "react-redux";
import Guestbook from "src/components/Guestbook";
import { refreshGuestbook, getOneGuestbook } from "src/actions/guestbook";

const mapStateToProps = state => ({
  guestbooks: state.guestbook.guestbooks,
  pseudo: state.user.pseudo,
  role: state.user.role
});

const mapDispatchToProps = dispatch => ({
  getGuestbook: () => {
    const action = refreshGuestbook();
    dispatch(action);
  },
  getOneGuestbook: idGuestbook => {
    //console.log(`idGuestbook`, idGuestbook)
  const action = getOneGuestbook(idGuestbook);
  dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Guestbook);
