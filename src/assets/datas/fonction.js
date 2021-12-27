//! pour importer
//* import { goodDateFormat} from "src/assets/datas/fonction";

/**
 * @param {String} date Retour d'une date de la dataBase / API
 * @returns {String} dd/mm/yyyy
 */
export const goodDateFormat = (date) => {
  if (date) {
    const removeElement = date.slice(0, 10);
    const englishDate = removeElement.split("-");
    const [year, month, day] = englishDate;
    return `${[day, month, year].join("/")}`;
  }
};
/**
 * @param {String} time Retour -d'une date de la dataBase / API
 * @returns {String} l'heure - hh/mm/ss
 */
export const goodHourFormat = (time) => {
  if (time) {
    // decoupage de l'heure
    const getTime = time.slice(11, 19);
    if (getTime[0] === "0") {
      const suppZero = getTime.slice(1);
      return suppZero;
    }
    return getTime;
  }
};

/**
 * @param {sting} dateISO retour d'une date en format ISO "yyyy-mm-ddThh:mm:ss.msZ"
 * @returns {String} dd-mm-yyyy //! date
 * @returns {String} hh h mm //! time
 */
export const dateTransform = (dateISO) => {
  let year = dateISO.updated_at.split("-")[0];
  let month = dateISO.updated_at.split("-")[1];
  let day = dateISO.updated_at.split("-")[2].split("T")[0];
  return [day, month, year].join("-");
};

export const time = (dateISO) => {
  let hour = dateISO.updated_at.split("T")[1].split(":")[0];
  let minute = dateISO.updated_at.split("T")[1].split(":")[1];
  return [hour, minute].join(" h ").split(".")[0];
};

export const dateUndefind = (dateISO) => {
  if (dateISO === undefined) {
    dateISO = "1981-06-20T14:36:21.467Z";
  } else {
    dateISO;
  }
  let year = dateISO.split("-")[0];
  let month = dateISO.split("-")[1];
  let day = dateISO.split("-")[2].split("T")[0];
  let hour = dateISO.split("T")[1].split(":")[0];
  let minute = dateISO.split("T")[1].split(":")[1];
  const date = [day, month, year].join("-");
  const time = [hour, minute].join(" h ").split(".")[0];
  return [date, " à ", time];
};
/**
 *
 * @param {String} name - chaine de caractère
 * @returns {String} name commencera par une lettre en majuscule
 */
export const properNoun = (name) => {
  if (typeof name !== "undefined") {
    let firstName =
      name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
    return firstName;
  }
};
/**
 * @param {String} userName Retour d'un user avec le choix du pseudo ou de l'author
 * @returns {String} "user.author" ou "user.pseudo" ou "compte supprimé"
 */
export const name = (userName) => {
  if (userName === null) {
    userName = "Compte supprimé";
    // console.log(`userName1`, userName)
  } else {
    let author = userName.author;
    let pseudo = userName.pseudo;
    if (userName === undefined) {
      userName = "inconnue";
      // console.log(`userName2`, userName)
    } else if (author === null) {
      userName = pseudo;
      // console.log(`userName3`, userName)
    } else if (pseudo === null) {
      userName = "Compte supprimé";
      // console.log(`userName4`, userName)
    } else {
      userName = author;
      // console.log(`userName5`, userName)
    }
  }
  // console.log(`userName6`, userName)
  const name =
    userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase();
  return name;
};

export const name2 = (userName) => {
  if (userName === null) {
    userName = "Compte supprimé";
    // console.log(`2userName1`, userName)
  } else {
    let author = userName.author;
    let pseudo = userName.pseudo;
    if (userName === undefined) {
      userName = "inconnue";
      // console.log(`2userName2`, userName)
    } else if (author === null) {
      userName = pseudo;
      // console.log(`2userName3`, userName)
    } else if (pseudo === null) {
      userName = "Compte supprimé";
      // console.log(`2userName4`, userName)
    } else {
      userName = pseudo;
      // console.log(`2userName5`, userName)
    }
  }
  console.log(`2userName6`, userName);
  const name = userName; //.charAt(0).toUpperCase() + userName.substring(1).toLowerCase();
  return name;
};

export const reduceContent = (content) => {
  // ici on affichera les 25 premiers caractères
  const minusContent = content.slice(0, 25);
  return minusContent;
};
