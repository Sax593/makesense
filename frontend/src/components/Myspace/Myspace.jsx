import { slide as Menu } from "react-burger-menu";
import { FaHome } from "react-icons/fa";
import { FaHandSparkles } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { VscDebugDisconnect } from "react-icons/vsc";

import "./Style.scss";

export default function Myhome() {
  return (
    <Menu pageWrapId={"page-wrap"}>
      <h1 className="titlelogo">
        {" "}
        Make<span className="underscore">_</span>suggest
      </h1>

      <a id="home" className="menu-item" href="/">
        <FaHome /> Home<span className="endpoint">.</span>
      </a>
      <a id="suggest" className="menu-item" href="/suggest">
        <FaHandSparkles /> Suggestion<span className="endpoint">.</span>
      </a>
      <a id="historic" className="menu-item" href="/historic">
        <FaHistory /> Historique<span className="endpoint">.</span>
      </a>
      <a id="Contacts" className="menu-item" href="/contacts">
        <IoMdContacts /> Contacts<span className="endpoint">.</span>
      </a>
      <a id="params" className="menu-item" href="/params">
        <IoMdSettings /> Paramètres<span className="endpoint">.</span>
      </a>
      <a id="logout" className="menu-item" href="/logout">
        <VscDebugDisconnect /> Logout<span className="endpoint">.</span>
      </a>

      <p className="lang">Fr 🇫🇷 En 🇬🇧 Es 🇪🇸</p>
    </Menu>
  );
}
