import { connect } from "react-redux";
import MyPage from "src/components/MyPage";

const mapStateToProps = state => ({
  pseudo: state.user.pseudo,
  email: state.user.email,
  birthdate: state.user.birthdate,
  place_of_residence: state.question.place_of_residence
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
