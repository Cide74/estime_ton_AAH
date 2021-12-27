import React from "react";
import { Link } from "react-router-dom";
import { 
  name,
  properNoun,
  dateUndefind,
} from "src/assets/datas/fonction";

import "./style.scss";

const Comment = ({ pseudo, role, content, user, updated_at }) => {

  console.log(`role dans comment compo`, role )
  console.log(`pseudo de comment =>`, pseudo)
  //console.log(`content`, content)
  //console.log(`user de comment =>`, user)

  

  return (
    <section >
      <div className="card__comment__triangle__out">
        <div className="card__comment__triangle__in">
        </div >
      </div >
      <div className="card__comment">
        <p >- {properNoun(content)}</p>
        <div className="card__comment__footer"> 
          {name(user)}, le {dateUndefind(updated_at)}.


          {name(user) === pseudo && (
                <div className="btn">
                  <button onClick={handleModalModifyOneGuestbook}>Modifier</button>
                  {modify && (
                    <GuestbookForm
                      title={title}
                      content={content}
                      changeFieldGuestbook={changeFieldGuestbook}
                      sendGuestbookForm={getModifyGuestbook}
                      success={success}
                      message={message}
                    />
                  )}
                  <button
                    onClick={handleDeleteOneGuestbook}
                    className="Card__btn-delete"
                  >
                    Supprimer
                  </button>
                  {success && (
                    <div className="confirm">
                      <p>{message}</p>
                    </div>
                  )}
                </div>
              )}
        </div>
      </div>
    {/** 
      { pseudo === "undefine" ? (
        <button >
          <Link to="/login">
            <div onClick={handleOnLogin}>
              Connectez-vous pour écrire un message.
            </div>
          </Link>
        </button> 
      ) :(
        <button >
          <Link to="/form-guestbook" className="guestbook__link">
            Ecrire un message !
          </Link>
        </button>
      )}*/}

{name(user) === pseudo && (
                <div className="btn">
                  <button onClick={handleModalModifyOneGuestbook}>Modifier</button>
                  {modify && (
                    <GuestbookForm
                      title={title}
                      content={content}
                      changeFieldGuestbook={changeFieldGuestbook}
                      sendGuestbookForm={getModifyGuestbook}
                      success={success}
                      message={message}
                    />
                  )}
                  <button
                    onClick={handleDeleteOneGuestbook}
                    className="Card__btn-delete"
                  >
                    Supprimer
                  </button>
                  {success && (
                    <div className="confirm">
                      <p>{message}</p>
                    </div>
                  )}
                </div>
              )}



    </section>
  );
};

export default Comment;
