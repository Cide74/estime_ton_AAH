import React from "react";
import { Link } from "react-router-dom";

import phone from "../../assets/phone.png";
import github from "../../assets/github.png";
import mail from "../../assets/mail.png";
import Régis from "../../assets/Régis.jpg";
import Yan from "../../assets/Yan.jpg";
//import Thibaud from "../../assets/Img/Thibaud.jpg";
//import Jérôme from "../../assets/Img/Jérôme.jpg";


import "./style.scss";

const Developpeur = props => {
  return (
      <div id="paragraphe">
        <h2 id="paragraphe__title">
          Voici les développeurs ayant participé au projets
        </h2>  
          <div id="paragraphe__card">
          <div id="card">
            <div id="card__men">
              <img 
                id="card__img" 
                src={Régis}
                alt="Régis BRUNET BLEC"
              />
              <div id="card__paragraphe">
                <h2 id="card__title"> BRUNET BLEC Régis</h2>
                  <ul id="card__liste">
                  <li>Le gestionnaire de projet</li>
                  <li>Product Owner</li>
                  <li>Lead Dev Back-end</li>
                  <li>Lead Deployment</li>
                  <li>Git Master Back-end</li>
                  <li>Référent Technique :</li>
                    <ul id="card__sous-liste">
                      <li>- Sequelize</li>
                      <li>
                        <Link to="https://www.elephantsql.com/">- ElephantSQL </Link>
                      </li>
                      <li>- JsonWebToken</li>
                      <li>- Le calculateur AAH</li>
                    </ul>
                  </ul>
              </div>
              <div id="card__contact">
                <Link to="tel:+33622162524">
                <img id="card__ico" src={phone} alt="Régis BRUNET BLEC numéro de téléphone"/>
                </Link>
                <Link to="https://github.com/Cide74" target="_blank">
                <img id="card__ico" src={github} alt="Régis BRUNET BLEC sur github"/>
                </Link>
                <Link to="mailto:regis.blec@gmailcom?subject=depuis le back-end de 'Calcul ta aah'">
                <img id="card__ico" src={mail} alt="Régis BRUNET BLEC courriel"/>
                </Link>
              </div>
            </div>
          </div>

       

          <div id="card">
            <div id="card__men">
              <img 
                id="card__img" 
                src={Yan}
                alt="COQUOZ Yan"
              />
              <div id="card__paragraphe">
                <h2 id="card__title"> COQUOZ Yan</h2>
                <ul id="card__liste">
                  <li>Dev Back-end</li>
                  <li>Dev Lead Front-end</li>
                  <li>Référent Technique :</li>
                    <ul id="card__sous-liste">
                        <li>- Sanitizer</li>
                        <li>- Nodemailer</li>
                        <li>- Formulaire AAH</li>
                    </ul>
                </ul>
              </div>
              <div id="card__contact">
                <Link to="tel:+33615999614">
                <img id="card__ico" src={phone} alt="Yan-Coquoz numéro de téléphone"/>
                </Link>
                <Link to="https://github.com/Yan-Coquoz" target="_blank">
                <img id="card__ico" src={github} alt="Yan-Coquoz sur github"/>
                </Link>
                <Link to="mailto:yan.coquoz@gmail.com?subject=depuis le front-end de 'Calcul ta aah'">
                <img id="card__ico" src={mail} alt="Yan-Coquoz courriel"/>
                </Link>
              </div>
            </div>
            </div>
   {/*
                      <div id="card">
            <div id="card__men">
              <img 
                id="card__img" 
                src={Thibaud}
                alt="Thibaud FOURNES"
              />
            <div id="card__paragraphe">
              <h2 id="card__title">FOURNES Thibaud </h2>
              <ul id="card__liste">
                <li>Lead TDD (teste driving development)</li>

              </ul>
              </div>
              <div id="card__contact">
                <Link to="tel:+33638674965">
                <img id="card__ico" src={phone} alt="Thibaud FOURNES numéro de téléphone"/>
                </Link>
                <Link to="https://github.com/ThibaudFournes77" target="_blank">
                <img id="card__ico" src={github} alt="Thibaud FOURNES sur github"/>
                </Link>
                <Link to="mailto:regis.blec@gmailcom?subject=depuis le back-end de 'Calcul ta aah'">
                <img id="card__ico" src={mail} alt="Thibaud FOURNES courriel"/>
                </Link>
              </div>
            </div>
            </div>

          <div id="card">
            <div id="card__men">
              <img 
                id="card__img" 
                src={Jérôme}
                alt="Jérôme BERSIN"
              />
            <div id="card__paragraphe">
              <h2 id="card__title"> BERSIN Jérôme</h2>
              <ul id="card__liste">
                <li>MLD & MCD</li>
                <li>User Stories</li>
                <li>Wireframes</li>
              </ul>
              </div>
              <div id="card__contact">
              <Link to="tel:+3300000000">
                <img id="card__ico" src={phone} alt="Jérôme BERSIN numéro de téléphone"/>
                </Link>
                <Link to="https://github.com/JeromeBersin" target="_blank">
                <img id="card__ico" src={github} alt="Jérôme BERSIN sur github"/>
                </Link>
                <Link to="mailto:bersin.jerome@gmail.com?subject=depuis le front-end de 'Calcul ta aah'">
                <img id="card__ico" src={mail} alt="Jérôme BERSIN courriel"/>
                </Link>
              </div>
            </div>
            </div>
*/} 

            </div>
      </div>
    
  );
};

export default Developpeur;
