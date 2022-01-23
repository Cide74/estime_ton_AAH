import React, { useState, useEffect } from "react";
import Loading from "src/components/Loading";

import "./style.scss";

import {
  time,
  properNoun,
  name,
  dateTransform,
} from "src/assets/datas/fonction";

const CardGuestbook = ({ title, content, user, updated_at }) => {

  return (
    <section>
        <div>
          <h3 className="content_card__title">{properNoun(title)}</h3>
          <div className="cardGuestbook__footer">
            <div className="cardGuestbook__footer__in">
              {name(user)}, le {dateTransform({ updated_at })} à{" "}
              {time({ updated_at })}.
            </div>
          </div>
          <div className="content_card__paragraphe">
            <p className="content_card__title2-sous-liste">
              - {properNoun(content)}
            </p>
          </div>
        </div>
    </section>
  );
};

export default CardGuestbook;
