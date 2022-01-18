import Api from "src/API/index";

import {
  refreshComment,
  refreshPostComArt,
  refreshPostComGb,
  refreshOneComment,
  allComments,
  GET_COMMENT,
  SEND_FORM_COMMENT,
  GET_ONE_COMMENT,
  // DELETE_ONE_COMMENT,
  // MODIFY_ONE_COMMENT,
  CALL_ALL_COMMENTS,
} from "src/actions/comment";

const comment = (store) => (next) => async (action) => {
  const { id, accessToken } = store.getState().user;
  const { content } = store.getState().comment;
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
      // console.log("middleware commentaires");
      try {
        const comm = await Api.get("/comments", options);
        const reponse = allComments(comm.data);
        // console.log("retour API reponse ", reponse);
        store.dispatch(reponse);
      } catch (error) {
        console.log(error);
      }
      break;
    }
    case GET_ONE_COMMENT: {
      try {
        const oneCom = await Api.get(
          `/user/${id}/comment/${action.idComment}`,
          options
        );
        store.dispatch(refreshOneComment(oneCom.data));
      } catch (error) {
        console.log(error);
      }
      break;
    }
    case SEND_FORM_COMMENT: {
      try {
        const addCom = await Api.post(
          `user/${id}/${action.cate}/${action.id}/comment`,
          { content },
          options
        );
        let reponse;
        if (action.cate === "article") {
          reponse = refreshPostComArt(addCom.data);
        }
        if (action.cate === "guestbook") {
          response = refreshPostComGb(addCom.data);
        }

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
