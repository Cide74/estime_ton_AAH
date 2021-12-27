import React, { useState } from "react";

import "./style.scss";

const Contact = () => {
  const [mailerState, setMailerState] = useState({
    firstname: "",
    lastname: "",
    contactEmail: "",
    sujet: "",
    comments: ""
  });
  // TODO changer l'adresse du fetch une fois la version mise en ligne
  const handleOnSubmitMSG = async evt => {
    evt.preventDefault();

    const response = await fetch(
      `https://projet-estime-ton-aah-back.herokuapp.com/send_message`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ mailerState })
      }
    )
      .then(response => response.json())
      .then(async response => {
        const resData = await response;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message envoyé avec succès");
        } else if (resData.status === "fail") {
          alert("Le message n'a put être envoyé");
        }
      })
      .then(() => {
        setMailerState({
          firstname: "",
          lastname: "",
          contactEmail: "",
          sujet: "",
          comments: ""
        });
      });
  };

  const handleInputChange = evt => {
    setMailerState(prevState => ({
      ...prevState,
      [evt.target.name]: evt.target.value
    }));
    console.log("Contenu de l'email ", mailerState);
  };

  // le données placé ici destinées pour nodemailer
  return (
  <div className="home__body">
    <div className="home__body__title">
      <h2 className="paragraphe__title">
        Contact
      </h2>
      <div className="cardChiffre">
        <form
        className="contact__form"
        onSubmit={handleOnSubmitMSG}
        name="Formulaire de contact"
        >
        <label 
          htmlFor="firstname" 
          className="contact__form__in"
        >
          Prénom :{" "}
          <input
            className="contact__form__in__response"
            type="text"
            name="firstname"
            id="firstname"
            required
            placeholder="Prénom"
            value={mailerState.firstname}
            onChange={handleInputChange}
            autoFocus
          />
        </label>
        <label 
          htmlFor="lastname" 
          className="contact__form__in">
          Nom :{" "}
          <input
            className="contact__form__in__response"
            type="text"
            name="lastname"
            id="lastname"
            required
            placeholder="Nom"
            value={mailerState.lastname}
            onChange={handleInputChange}
          />
        </label>
        <label 
          htmlFor="contactEmail" 
          className="contact__form__in">
          Email :{" "}
          <input
            className="contact__form__in__response"
            type="email"
            name="contactEmail"
            id="contactEmail"
            required
            placeholder="Email"
            value={mailerState.contactEmail}
            onChange={handleInputChange}
          />
        </label>
        <div className="contact__form__in" >
          <div className="contact__form__in__comment" >
            <label htmlFor="sujet">
              Sujet :{" "}
              <input
                className="contact__form__in__response"
                type="text"
                name="sujet"
                id="sujet"
                required
                placeholder="sujet"
                value={mailerState.sujet}
                onChange={handleInputChange}
              />
            </label>
            <textarea
              className="contact__form__in__area"
              name="comments"
              id="comments"
              rows="10"
              cols="30"
              required
              placeholder="Dites-nous tout..."
              value={mailerState.comments}
              onChange={handleInputChange}
            >
            </textarea>
          </div>
        </div>
      </form>
      </div>
      <button type="submit">
        Envoyer
      </button>
    </div>
  </div>
  );
};

export default Contact;
