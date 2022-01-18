import React, { useState, useEffect } from "react";
import Loading from "src/components/Loading";

import {
  time,
  properNoun,
  name,
  dateTransform,
} from "src/assets/datas/fonction";

import "./style.scss";

const CardArticle = ({ title, content, user, updated_at }) => {
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    if (!updated_at) {
      setLoadData(false);
      return <Loading />;
    } else {
      setLoadData(true);
    }
  }, [updated_at]);

  return (
    <section>
      {loadData && (
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
      )}
    </section>
  );
};

export default CardArticle;
