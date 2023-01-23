import { createContext, useMemo, useState } from "react";
import propTypes from "prop-types";

const userContext = createContext();

function Provider({ children }) {
  const [user, setUser] = useState({
    id: null,
    name: null,
    firstname: null,
    localisation: null,
    email: null,
    role: null,
    avatar: null,
    token: null,
  });

  const context = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
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
    user: propTypes.shape(UserShape),
    setUser: propTypes.shape(UserShape),
  }).isRequired,
};
