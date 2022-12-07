import UserCard from "@components/UserCard/UserCard";
import user from "@assets/user.js";

import "./style.scss";

export default function Admin() {
  return (
    <>
      <h1>Admin dashboard</h1>
      <div className="validateUser">
        <h2>User to be validated</h2>
        <p>Users awaiting validation</p>
        <div className="usercard">
          {user.map((element) => {
            return (
              <UserCard
                key={element.id}
                firstname={element.firstname}
                lastname={element.lastname}
                picture={element.picture}
              />
            );
          })}
        </div>
      </div>
      <h2>Management</h2>
      <div className="management">
        <div className="usermanagement">
          <h3>Users management</h3>
          <form>
            <label htmlFor="sugestsearch">
              Search for sugestion:
              <input type="search" />
            </label>
          </form>
        </div>
        <div className="sugestmanagement">
          <h3>Sugestions management</h3>
          <form>
            <label htmlFor="sugestsearch">
              Search for users
              <input type="search" />
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
