import { connect } from "react-redux";
import Parametre from "src/components/Parametre";
import { callAllUsers } from "src/actions/user";
import { callAllSimulations } from "src/actions/question";
import { callAllArticles } from "src/actions/article";
import { callAllGuestbooks } from "src/actions/guestbook";
import { callAllComments } from "src/actions/comment";
import {
  AdminDeleteUser,
  AdminDeleteSimulation,
  AdminDeleteArt,
  AdminDeleteGbook,
  AdminDeleteComment,
} from "src/actions/admin";

const mapStateToProps = (state) => ({
  allUsers: state.user.allUsers,
  allSimulations: state.question.allSimulations,
  allArticles: state.article.everyArticles,
  allGuestbooks: state.guestbook.allGuestbooks,
  allComments: state.comment.allComments,
  delUserConfirm: state.admin.delUserConfirm,
  delUserSuccess: state.admin.delUserSuccess,
  delFormConfirm: state.admin.delFormConfirm,
  delFormSuccess: state.admin.delFormSuccess,
  delArtConfirm: state.admin.delArtConfirm,
  delArtSuccess: state.admin.delArtSuccess,
  delGbConfirm: state.admin.delGbConfirm,
  delGbSuccess: state.admin.delGbSuccess,
  delComConfirm: state.admin.delComConfirm,
  delComSuccess: state.admin.delComSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  callAllUsers: () => {
    const action = callAllUsers();
    dispatch(action);
  },
  callAllSimulations: () => {
    const action = callAllSimulations();
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
    const action = callAllComments();
    dispatch(action);
  },
  AdminDeleteUser: (idUser) => {
    const action = AdminDeleteUser(idUser);
    dispatch(action);
  },
  AdminDeleteSimulation: (idForm) => {
    const action = AdminDeleteSimulation(idForm);
    dispatch(action);
  },
  AdminDeleteArt: (idForm) => {
    const action = AdminDeleteArt(idForm);
    dispatch(action);
  },
  AdminDeleteGbook: (idGbook) => {
    const action = AdminDeleteGbook(idGbook);
    dispatch(action);
  },
  AdminDeleteComment: (idCom) => {
    const action = AdminDeleteComment(idCom);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Parametre);
