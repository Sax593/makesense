import { createContext, useMemo, useState } from "react";
import propTypes from "prop-types";

const userContext = createContext();

function Provider({ children }) {
  const [users, setUsers] = useState({
    id: null,
    name: null,
    firstname: null,
    localisation: null,
    email: null,
    role: null,
    avatar: null,
  });

  const context = useMemo(
    () => ({
      users,
      setUsers,
    }),
    [users, setUsers]
  );

  return (
    <userContext.Provider value={context}>{children}</userContext.Provider>
  );
}

export default Provider;
export { userContext };
const UserShape = {
  id: propTypes.number,
  name: propTypes.string,
  firstname: propTypes.string,
  email: propTypes.string,
  avatar: propTypes.string,
  role: propTypes.string,
  localisation: propTypes.string,
  token: propTypes.string,
};

Provider.propTypes = {
  children: propTypes.shape({
    users: propTypes.shape(UserShape),
    setUsers: propTypes.shape(UserShape),
  }).isRequired,
};
