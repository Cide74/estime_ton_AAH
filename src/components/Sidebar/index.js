import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Proptypes from "prop-types";
import Api from "src/API/index";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import picture
import Logo from "src/assets/Logo.png";
import { FaCalculator } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiUsers,
  FiUser,
} from "react-icons/fi";

import { RiArticleLine, RiNumbersLine } from "react-icons/ri";

import { GrArticle } from "react-icons/gr";

// import style

import "./style.scss";

/**
 * @param {String} pseudo - Pseudo de l'utilisateur.
 * @param {boolean} isLogged - Si l'utilisateur est connecter ou non.
 * @param {function} onLogout - Remise à zéro des valeurs dans le state.
 * @param {function} getArticle - Appel pour recupérer tout les articles.
 * @returns JSX component
 */

const Sidebar = ({
  pseudo,
  isLogged,
  onLogout,
  getArticle,
  getGuestbook,
  getChiffre,
  getAllTenth,
}) => {
  const [iAmLog, setIAmLog] = useState(false);

  const login = useHistory();
  const [allSimulation, setValues] = useState("");

  useEffect(() => {
    Api.get("/countnbsimulations")
      .then((res) => {
        const nbs = res.data.simulations;
        setValues(nbs);
      })
      .catch((error) => {
        console.trace(error);
      });
  }, []);


  function getTheMoment() {
    const hour = new Date().getHours();
    if (hour >= 1 && hour < 17) {
      return "Bonjour";
    } else if (hour >= 17 && hour <= 23) {
      return "Bonne Soirée";
    }
  }
  const handleOnLogout = () => {
    console.log("Je me déconnecte");
    localStorage.clear();
    onLogout();
    login.push("/");
  };

  const handleOnLogin = () => {
    login.push("/login");
  };

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div className="sidebar">
      {/* collapsed props to change menu size using menucollapse state */}
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <NavLink exact to="/">
            <div className="sidebar__header__logotext">
              <img
                src={Logo}
                alt="Icone pour le retour à l'accueil"
                className="sidebar__header__logo"
              />
            </div>
          </NavLink>
          <div className="sidebar__header__closemenu" onClick={menuIconClick}>
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>
          <div className="sidebar__header__moment">
            {getTheMoment()} {pseudo && isLogged && <span>{pseudo}</span>}
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="square">
            {!isLogged ? (
              <NavLink exact to="/login">
                <div onClick={handleOnLogin}>
                  <MenuItem icon={<FiLogOut />}>Connexion</MenuItem>
                </div>
              </NavLink>
            ) : (
              <div onClick={handleOnLogout}>
                <MenuItem icon={<FiLogOut />}>Déconnexion</MenuItem>
              </div>
            )}
            <NavLink exact to="/">
              <MenuItem icon={<FiHome />}>Accueil</MenuItem>
            </NavLink>
            {/* // Si false ou undefined => vrai */}
            {pseudo && isLogged && (
              <NavLink exact to="/userPage">
                <MenuItem icon={<FiUser />} onClick={getAllTenth}>
                  Ma page
                </MenuItem>
              </NavLink>
            )}
            <NavLink exact to="/formulaire">
              <MenuItem icon={<FaCalculator />}>Estime ton AAH</MenuItem>
            </NavLink>
            <NavLink to="/article">
              <MenuItem icon={<GrArticle />} onClick={getArticle}>
                Les articles
              </MenuItem>
            </NavLink>
            <NavLink exact to="/guestbook">
              <MenuItem icon={<RiArticleLine />} onClick={getGuestbook}>
                Le livre d'or
              </MenuItem>
            </NavLink>
            <NavLink exact to="/chiffre">
              <MenuItem icon={<RiNumbersLine />} onClick={getChiffre}>
                Les chiffres
              </MenuItem>
            </NavLink>

            <NavLink exact to="/developpeur">
              <MenuItem icon={<FiUsers />}>Les développeurs</MenuItem>
            </NavLink>
            {/*  <NavLink exact to="/source">
              <MenuItem icon={<FiUsers />}>Les sources</MenuItem>
            </NavLink>
             {pseudo &&
              isLogged &&
              role ===
                3(
                  <NavLink exact to="/maPage">
                    <MenuItem icon={<BiCog />}>Paramètres</MenuItem>
                  </NavLink>
                )} */}
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <ul className="sidebar__footer">
            <li className="sidebar__footer__title">
              Nombre total de simulations
            </li>
            <li className="sidebar__footer__number">{allSimulation}</li>
          </ul>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

Sidebar.proptypes = {
  pseudo: Proptypes.string.isRequired,
  isLogged: Proptypes.func.isRequired,
  onLogout: Proptypes.func.isRequired,
  getArticle: Proptypes.func.isRequired,
};

export default Sidebar;
