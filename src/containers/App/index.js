import { connect } from "react-redux";
import App from "src/components/App";

const mapStateToProps = state => ({
  islogged: state.user.islogged,
  pseudo: state.user.pseudo
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
