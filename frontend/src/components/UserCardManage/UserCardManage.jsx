import PropTypes from "prop-types";

import "./style.scss";

export default function UserCardManage({ firstname, lastname, picture }) {
  return (
    <article className="usermanage">
      <div className="useridentmanage">
        <img className="avatar" src={picture} alt="" />
        <div className="name">
          <p>{firstname}</p>
          <p>{lastname}</p>
        </div>
      </div>
      <div className="managebutton">
        <button className="managebtn" type="button">
          Banned
        </button>
        <button className="managebtn" type="button">
          Block
        </button>
        <button className="managebtn" type="button">
          View
        </button>
      </div>
    </article>
  );
}

UserCardManage.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
