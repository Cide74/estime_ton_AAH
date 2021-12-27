import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Navbar = ({ isLogged }) => {
  console.log("Navbar", isLogged);
  return (
    <div id="navbar">
      <button>
        <Link to="/calculateur"> Estime ton AAH</Link>
      </button>
      <button>
        <Link to="/article"> Les articles</Link>
      </button>
      <button>
        <Link to="/guestbook"> Le livre d'or</Link>
      </button>
      <button>
        <Link to="/source"> Les sources</Link>
      </button>
      <button>
        <Link to="/chiffre"> Les chiffres</Link>
      </button>
      <button>
        <Link to="/developpeur"> Les développeurs</Link>
      </button>
      {/* // Si false ou undefined => vrai */}
      {isLogged ? (
        <button>
          <Link to="/userPage"> Ma page</Link>
        </button>
      ) : null}
    </div>
  );
};

export default Navbar;
