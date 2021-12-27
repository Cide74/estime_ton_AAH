import { connect } from "react-redux";
import MyPage from "src/components/MyPage";
import { getOneArticle } from "src/actions/article";
import { getOneSimulation } from "src/actions/question";

const mapStateToProps = state => ({
  pseudo: state.user.pseudo,
  email: state.user.email,
  role: state.user.role,
  place_of_residence: state.question.place_of_residence,
  successArt: state.article.success,
  // différents tableaux de visionnage
  userArticle: state.user.userArticle,
  userSimulation: state.user.userSimulation,
  userGuestbook: state.user.userGuestbook,
  userComment: state.user.userComment,
});

const mapDispatchToProps = dispatch => ({
  getOneArticle: idArticle => {
    const action = getOneArticle(idArticle);
    dispatch(action);
  },
  getOneSimulation: idSimulation => {
    const action = getOneSimulation(idSimulation);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
