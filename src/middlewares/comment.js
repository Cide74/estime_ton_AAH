import Api from "src/API/index";

import {
  GET_COMMENT,
  refreshComment,
  allComments,
  SEND_COMMENT_FORM,
  GET_ONE_COMMENT,
  DELETE_ONE_COMMENT,
  MODIFY_ONE_COMMENT,
  CALL_ALL_COMMENTS,
} from "src/actions/comment";

const comment = (store) => (next) => async (action) => {
  const { pseudoId, accessToken } = store.getState().user;
  const options = { headers: { Authorization: `Bearer ${accessToken}` } };

  switch (action.type) {
    case GET_COMMENT: {
      try {
        const getAllComments = refreshComment(allComments.data.comments);
        store.dispatch(getAllComments);
      } catch (error) {
        console.log("getcomment =>", error);
      }
      break;
    }
    case CALL_ALL_COMMENTS: {
      console.log("middleware commentaires");
      try {
        const comm = await Api.get("/comments", options);
        const reponse = allComments(comm.data);
        console.log("retour API reponse ", reponse);
        store.dispatch(reponse);
      } catch (error) {
        console.log(error);
      }
      break;
    }

    default:
      next(action);
  }
};

export default comment;
