import { connect } from "react-redux";
import Parametre from "src/components/Parametre";
import { callAllUsers } from "src/actions/user";
import { callAllForms } from "src/actions/question";
import { callAllArticles } from "src/actions/article";
import { callAllGuestbooks } from "src/actions/guestbook";
import { callAllComments } from "src/actions/comment";

const mapStateToProps = (state) => ({
  allUsers: state.user.allUsers,
  allForms: state.question.allForms,
  allArticles: state.article.everyArticles,
  allGuestbooks: state.guestbook.allGuestbooks,
  allComments: state.comment.allComments,
});

const mapDispatchToProps = (dispatch) => ({
  callAllUsers: () => {
    const action = callAllUsers();
    dispatch(action);
  },
  callAllForms: () => {
    const action = callAllForms();
    dispatch(action);
  },
  callAllArticles: () => {
    const action = callAllArticles();
    dispatch(action);
  },
  callAllGuestbooks: () => {
    const action = callAllGuestbooks();
    dispatch(action);
  },
  callAllComments: () => {
    console.log("container");
    const action = callAllComments();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Parametre);
