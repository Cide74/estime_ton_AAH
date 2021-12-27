import React from "react";

import imgRegis from "../../assets/Régis.jpg";
import imgYan from "../../assets/Yan.jpg";
import Card from "./Card";
import Regis from "../../assets/datas/regis";
import Yan from "../../assets/datas/yan";
import "./style.scss";

const Developpeur = () => {
  return (
    <div className="paragraphe">
      <div className="paragraphe__border">
        <h2 className="paragraphe__title">
          Voici les développeurs ayant participé au projets
        </h2>
        <div className="paragraphe__card">
          <Card perso={Regis} img={imgRegis} />
          <Card perso={Yan} img={imgYan} />
        </div>
      </div>
    </div>
  );
};

export default Developpeur;
