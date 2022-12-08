import user from "@assets/user.js";
import UserCardManage from "@components/UserCardManage/UserCardManage";
import UserCardValid from "@components/UserCardValid/UserCardValid";
import { useState } from "react";

import "./style.scss";

export default function Admin() {
  const [userSearch, setUserSearch] = useState("");
  const [sugestSearch, setSugestSearch] = useState("");

  const hChangeUser = (e) => {
    setUserSearch(e.target.value);
  };

  const hChangeSugest = (e) => {
    setSugestSearch(e.target.value);
  };

  return (
    <>
      <h1>Admin dashboard</h1>
      <div className="validateUser">
        <h2>User to be validated</h2>
        <p>Users awaiting validation</p>
        <div className="usercard">
          {user.map((element) => {
            return (
              <UserCardValid
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
              Search for users:
              <input type="search" value={userSearch} onChange={hChangeUser} />
            </label>
          </form>
          {user
            .filter((element) => {
              if (
                element.firstname.includes(userSearch) ||
                element.lastname.includes(userSearch)
              ) {
                return true;
              }
              return false;
            })
            .map((element) => {
              return (
                <UserCardManage
                  key={element.id}
                  firstname={element.firstname}
                  lastname={element.lastname}
                  picture={element.picture}
                />
              );
            })}
        </div>
        <div className="sugestmanagement">
          <h3>Sugestions management</h3>
          <form>
            <label htmlFor="sugestsearch">
              Search for sugestion:
              <input
                type="search"
                value={sugestSearch}
                onChange={hChangeSugest}
              />
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
