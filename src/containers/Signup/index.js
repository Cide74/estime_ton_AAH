import { connect } from "react-redux";
import Signup from "src/components/Signup";
import { fieldChange, onSubscribe } from "src/actions/user";

const mapStateToProps = state => ({
  // arrive du reducer/user
  pseudo: state.user.pseudo,
  email: state.user.email,
  birthdate: state.user.birthdate,
  password: state.user.password,
  passwordConf: state.user.passwordConf
});

const mapDispatchToProps = dispatch => ({
  fieldChange: (name, value) => {
    const action = fieldChange(name, value);
    dispatch(action);
  },
  onSubscribe: () => {
    const action = onSubscribe();
    // pas de console.log car se n'est qu'un déclancheur
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
