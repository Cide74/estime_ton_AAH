import React from "react";

import imgRegis from "../../assets/Régis.jpg";
import imgYan from "../../assets/Yan.jpg";
import imgThibaud from "../../assets/Thibaud.jpg";
import Card from "./Card";
import Regis from "../../assets/datas/regis";
import Yan from "../../assets/datas/yan";
import Thibaud from "../../assets/datas/thibaud";

import "./style.scss";

const Developpeur = () => {
  return (
    <div className="paragraphe">
      <div className="paragraphe__border">
        <h2 className="paragraphe__title">
          Voici les développeurs ayant participé au projet
        </h2>
        <div className="paragraphe__card">
          <Card perso={Regis} img={imgRegis} />
          <Card perso={Yan} img={imgYan} />
          <Card perso={Thibaud} img={imgThibaud} />
        </div>
      </div>
    </div>
  );
};

export default Developpeur;
