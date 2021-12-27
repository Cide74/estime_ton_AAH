import { connect } from "react-redux";
import Sidebar from "src/components/Sidebar";
import { onLogout, getAllTenth } from "src/actions/user";
import { getArticle } from "src/actions/article";
import { getGuestbook } from "src/actions/guestbook";
import { getChiffre } from "src/actions/chiffre";

const mapStateToProps = state => ({
  pseudo: state.user.pseudo,
  isLogged: state.user.isLogged,
  role: state.user.role
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => {
    const action = onLogout();
    dispatch(action);
  },
  getArticle: () => {
    const action = getArticle();
    dispatch(action);
  },
  getGuestbook: () => {
    const action = getGuestbook();
    dispatch(action);
  },
  getChiffre: () => {
    const action = getChiffre();
    dispatch(action);
  },
  getAllTenth: () => {
    const action = getAllTenth();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
