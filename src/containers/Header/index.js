import { connect } from "react-redux";
import Header from "src/components/Header";
import { onLogout } from "src/actions/user";

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
  pseudo: state.user.pseudo,
  pseudoWelcome: state.user.pseudoWelcome
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => {
    const action = onLogout();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
