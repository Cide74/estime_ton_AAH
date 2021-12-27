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

    const response = await fetch("http://localhost:5000/send_message", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ mailerState })
    })
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
    console.log("mailerState ", mailerState);
  };

  // le données placé ici destinées pour nodemailer
  return (
    <div className="contact">
      <form
        className="contact__form"
        autoComplete="off"
        onSubmit={handleOnSubmitMSG}
      >
        <label htmlFor="firstname" className="contact__label">
          Prénom :{" "}
          <input
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
        <label htmlFor="lastname" className="contact__label">
          Nom :{" "}
          <input
            type="text"
            name="lastname"
            id="lastname"
            required
            placeholder="Nom"
            value={mailerState.lastname}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="contactEmail" className="contact__label">
          Email :{" "}
          <input
            type="email"
            name="contactEmail"
            id="contactEmail"
            required
            placeholder="Email"
            value={mailerState.contactEmail}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="sujet" className="contact__label">
          Sujet :{" "}
          <input
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
          name="comments"
          id="comments"
          rows="10"
          cols="30"
          className="contact__area"
          required
          placeholder="Dites-nous tout..."
          value={mailerState.comments}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit" className="contact__btn">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
