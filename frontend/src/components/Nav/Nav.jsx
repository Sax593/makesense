import { slide as Menu } from "react-burger-menu";
import { FaHandSparkles, FaHistory, FaHome } from "react-icons/fa";
import { VscDebugDisconnect } from "react-icons/vsc";
import { Link } from "react-router-dom";

import "./Style.scss";

export default function Nav() {
  return (
    <Menu pageWrapId="page-wrap">
      <h1 className="titlelogo">
        Make<span className="underscore">_</span>suggest
      </h1>
      <Link id="home" className="menu-item" to="/">
        <FaHome /> Home<span className="endpoint">.</span>
      </Link>
      <Link id="suggest" className="menu-item" to="/suggestform">
        <FaHandSparkles /> Create Suggestion<span className="endpoint">.</span>
      </Link>
      <Link id="historic" className="menu-item" to="/historic">
        <FaHistory /> Historique<span className="endpoint">.</span>
      </Link>
      <Link id="logout" className="menu-item" to="/logout">
        <VscDebugDisconnect /> Logout<span className="endpoint">.</span>
      </Link>

      <p className="lang">Fr 🇫🇷 En 🇬🇧 Es 🇪🇸</p>
    </Menu>
  );
}
