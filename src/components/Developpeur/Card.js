import React from "react";
import phone from "../../assets/phone.png";
import github from "../../assets/github.png";
import mail from "../../assets/mail.png";
import linkedin from "../../assets/linkedin.png";
import indeed from "../../assets/indeed.png";

import "./style.scss";
/**
 *
 * @param {Object} perso - Informations d'une personne.
 * @param {string} img - Photo de la personne.
 * @returns JSX Component
 */
const Card = ({ perso, img }) => {
  return (
    <div className="card">
      <div className="card__men">
        <img
          className="card__img"
          src={img}
          alt={perso.lastname + " " + perso.firstname}
        />
        <div className="card__paragraphe">
          <h2 className="card__title">
            {perso.lastname}
            <br /> {perso.firstname}
          </h2>
          <ul className="card__liste">
            <h3 className="card__title-sous-liste">Rôle :</h3>
            {perso.role.map(role => {
              return <li key={role}>- {role}</li>;
            })}
            <h3 className="card__title-sous-liste">Référent Technique :</h3>

            <ul>
              <li className="card__title2-sous-liste">💾 Back-end :</li>
              {perso.teckBack &&
                perso.teckBack.map(teck => {
                  return <li key={teck}>- {teck}</li>;
                })}
            </ul>

            <li className="card__title2-sous-liste">💻 Front-end :</li>
            <ul>
              {perso.teckFront &&
                perso.teckFront.map(teck => {
                  return <li key={teck}>- {teck}</li>;
                })}
            </ul>
            <li className="card__title2-sous-liste">
              🏗 Réalisations personnelles :
            </li>
            <ul>
              {perso.realisation &&
                perso.realisation.map(build => {
                  return <li key={build}>- {build}</li>;
                })}
            </ul>
            {perso.bdd.length > 0 && (
              <div>
                <li className="card__title2-sous-liste">Data-base :</li>
                <ul>
                  {perso.bdd &&
                    perso.bdd.map(bdd => {
                      return <li key={bdd}>- {bdd}</li>;
                    })}
                </ul>
              </div>
            )}
            {perso.deploy.length > 0 && (
              <div>
                <li className="card__title2-sous-liste">Déploiements :</li>
                <ul>
                  {perso.deploy &&
                    perso.deploy.map(deploy => {
                      return <li key={deploy}>- {deploy}</li>;
                    })}
                </ul>
              </div>
            )}
          </ul>
        </div>
        <div className="card__contact">
          <a href={"tel:" + perso.tel}>
            <img
              className="card__ico"
              src={phone}
              alt={
                perso.firstname + " " + perso.lastname + " numéro de téléphone"
              }
            />
          </a>
          <a href={perso.github} target="_blank">
            <img
              className="card__ico"
              src={github}
              alt={perso.firstname + " " + perso.lastname + " sur Github"}
            />
          </a>
          <a
            href={
              "mailto:" +
              perso.email +
              "?subject=depuis le Font-End de 'Estime Ton AAH'"
            }
          >
            <img
              className="card__ico"
              src={mail}
              alt={perso.firstname + " " + perso.lastname + " courriel"}
            />
          </a>
        </div>

        <div className="card__contact">
          {perso.linkedin !== "" && (
            <a href={perso.linkedin} target="_blank">
              <img
                className="card__ico"
                src={linkedin}
                alt={perso.firstname + " " + perso.lastname + " sur Linkedin"}
              />
            </a>
          )}

          {perso.smartr !== "" && (
            <a href={perso.smartr} target="_blank">
              <div
                className="smartr"
                alt={perso.firstname + " " + perso.lastname + " sur Smartr"}
              >
                S
              </div>
            </a>
          )}
          {perso.indeed !== "" && (
            <a href={perso.indeed} target="_blank">
              <img
                className="card__ico"
                src={indeed}
                alt={perso.firstname + " " + perso.lastname + " sur indeed"}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
