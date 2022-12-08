import PropTypes from "prop-types";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";

import "./style.scss";

export default function UserCardValid({ firstname, lastname, picture }) {
  return (
    <article>
      <div className="userident">
        <img className="avatar" src={picture} alt="" />
        <div className="name">
          <p>{firstname}</p>
          <p>{lastname}</p>
        </div>
      </div>
      <div className="validation">
        <div className="accept">
          <IoIosCheckmark className="icon_accept" />
          <p>Accept</p>
        </div>
        <div className="decline">
          <IoIosClose className="icon_decline" />
          <p>Decline</p>
        </div>
      </div>
    </article>
  );
}

UserCardValid.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
