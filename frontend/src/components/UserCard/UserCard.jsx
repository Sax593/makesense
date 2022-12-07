import { IoIosCheckmark, IoIosClose } from "react-icons/io";

import "./style.scss";

export default function UserCard() {
  return (
    <article>
      <div className="userident">
        <img
          className="avatar"
          src="https://randomuser.me/api/portraits/men/0.jpg"
          alt=""
        />
        <div className="name">
          <p>Firstname</p>
          <p>LastName</p>
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
