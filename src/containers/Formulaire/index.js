import { connect } from "react-redux";
import Formulaire from "src/components/Formulaire";

const mapStateToProps = state => ({
  pseudo: state.user.pseudo,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Formulaire);
