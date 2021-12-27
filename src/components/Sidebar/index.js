import Logo from "src/assets/logo.png";
import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Proptypes from "prop-types";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaCalculator } from "react-icons/fa";
import { 
  FiHome, 
  FiLogOut, 
  FiArrowLeftCircle, 
  FiArrowRightCircle,
  FiUsers
  } from "react-icons/fi";
import { RiArticleLine,RiNumbersLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { GrArticle } from "react-icons/gr";

import "./style.scss";

const Sidebar = ({ pseudo, pseudoWelcome, isLogged, onLogout }) => {
  const [identity, setIdentity] = useState("");
  const [iAmLog, setIAmLog] = useState(false);
  const [message, setMessage] = useState("");
  const login = useHistory();

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
    setIdentity("");
    setMessage("");
    setIAmLog(false);
    localStorage.clear();

    onLogout();
  };

  const handleLogin = () => {
    // console.log("Je me redirige vers accueil");
    login.push("/login");
  };

  useEffect(() => {
    if (isLogged) {
      setIdentity(pseudo);
      setMessage(pseudoWelcome);
      setIAmLog(true);
      console.log("useEffect Sidebar Dans le if (identity)=>", identity);
    }
  }, [isLogged, identity]);

//const Sidebar = ({ isLogged }) => {
  console.log("Sidebar", isLogged);
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  {/**
console.log(`isLogged`, isLogged)
console.log(`pseudo`, pseudo)
console.log(`pseudoWelcome`, pseudoWelcome)
console.log(` onLogout`,  onLogout) 
  */}

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
                {menuCollapse ? (
                  <FiArrowRightCircle/>
                ) : (
                  <FiArrowLeftCircle/>
                )}
              </div> 
              <div className="sidebar__header__moment">
                {/**  <MenuItem icon={<FiSunrise />}> */}
                {getTheMoment()} {message}
              </div>
            </SidebarHeader>
            <SidebarContent >
              <Menu iconShape="square">
                  {!isLogged ? (
                  <NavLink exact to="/login" >
                    <div  onClick={handleLogin}>
                      <MenuItem icon={<FiLogOut />}>
                        Connexion
                      </MenuItem>
                    </div>
                  </NavLink>
                  ) : ( 
                    <div onClick={handleOnLogout}>
                      <MenuItem icon={<FiLogOut />}>
                        Déconnection
                      </MenuItem>
                    </div>
                  )} 
                
                <NavLink exact to="/" >
                  <MenuItem icon={<FiHome />}>
                    Accueil
                  </MenuItem>
                </NavLink>
                {/* // Si false ou undefined => vrai */}
                {isLogged ? (
                  <NavLink exact to="/userPage" >
                    <MenuItem icon={<FaList />}>
                      Ma page
                    </MenuItem>
                  </NavLink>
                ) : null}
                {isLogged ? (
                  <NavLink exact to="/userPage" >
                    <MenuItem icon={<BiCog />}>Paramètres</MenuItem>
                  </NavLink>
                ) : null}
                <NavLink exact to="/calculateur" >
                  <MenuItem icon={<FaCalculator />}>
                    Estime ton AAH
                  </MenuItem>
                </NavLink>
                <NavLink  to="/article" >
                  <MenuItem icon={<GrArticle />}>
                    Les articles
                  </MenuItem>
                </NavLink>
                <NavLink exact to="/guestbook" >
                  <MenuItem icon={<RiArticleLine />}>
                    Le livre d'or
                  </MenuItem>
                </NavLink>
                <NavLink exact to="/chiffre">
                  <MenuItem icon={<RiNumbersLine />}>
                    Les chiffres
                  </MenuItem>
                </NavLink>
                <NavLink exact to="/developpeur" >
                  <MenuItem icon={<FiUsers />}>
                    Les développeurs
                  </MenuItem>
                </NavLink>
                <NavLink exact to="/source" >
                  <MenuItem icon={<FiUsers />}>
                    Les sources
                  </MenuItem>
                </NavLink>
              </Menu>
            </SidebarContent>
          <SidebarFooter>
          {/**  <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Déconnection</MenuItem>
            </Menu>*/}
          </SidebarFooter> 
        </ProSidebar>
      </div>
  );
};

Sidebar.proptypes = {
  pseudo: Proptypes.string.isRequired,
  isLogged: Proptypes.func.isRequired,
  pseudoWelcome: Proptypes.string.isRequired,
  onLogout: Proptypes.func.isRequired
};

export default Sidebar;


