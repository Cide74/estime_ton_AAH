import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import "./style.scss";

/**
 * Les données arrives du compo parent (oneArticle / oneGuestbook)
 * @param {number} id - Id de l'élément appelant
 * @param {string} cate - Type de la catégorie (guestbook / article)
 * @param {boolean} success - Réponse de la de la BDD
 * @param {string} message - Message de la BDD
 * @param {func} changeFieldComment - gestion des valeurs du textarea
 * @param {func} sendFormComment - déclencheur du formulaire
 * @returns JSX component
 */
const CommentForm = ({
  id,
  cate,
  changeFieldComment,
  sendFormComment,
  success,
  message,
}) => {
  const [isValue, setIsValue] = useState(false);

  const navigate = useNavigate();

  console.log(cate);

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    console.log(`${cate} ${id}`);
    setIsValue(true);
    sendFormComment(cate, id);
  };

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    // console.log(name, " ", value);
    changeFieldComment(name, value);
  };

  useEffect(() => {
    let time;
    if (success && isValue) {
      console.log("j'ai bien créé le commentaire");
      time = setTimeout(() => {
        setIsValue(false);
        // clearComment();
        if (cate === "article") {
          navigate("/article");
        } else {
          navigate("/guestbook");
        }
      }, 3000);
    }
    return () => clearTimeout(time);
  });

  return (
    <div className="home__body">
      <div className="home__body__title">
        <div className="content_card">
          <div className="cardChiffre__title"></div>
          <div className="cardChiffre__paragraphe content_form">
            <Box
              className="box_Comment"
              component="form"
              onSubmit={handleSubmitForm}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div>
                <TextareaAutosize
                  required
                  label="Votre texte"
                  name="content"
                  id="content"
                  minRows={5}
                  cols={10}
                  onChange={handleInputChange}
                  style={{ width: 570, height: 320 }}
                  placeholder="Le contenu du commentaire"
                />
              </div>
              <button type="submit">Envoyer</button>
              {success && isValue ? (
                <div className="confirm">
                  <p>{message}</p>
                </div>
              ) : null}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

CommentForm.propTypes = {
  id: PropTypes.number.isRequired,
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  changeFieldComment: PropTypes.func.isRequired,
  sendFormComment: PropTypes.func.isRequired,
  // clearComment: PropTypes.func.isRequired,
};

export default CommentForm;
