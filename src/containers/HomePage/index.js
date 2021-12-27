import { connect } from "react-redux";
import HomePage from "src/components/HomePage";

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
  pseudo: state.user.pseudo
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
