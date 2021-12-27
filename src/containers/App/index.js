import { connect } from "react-redux";
import App from "src/components/App";

const mapStateToProps = state => ({
  islogged: state.user.islogged
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
