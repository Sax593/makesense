import { createContext, useMemo, useState } from "react";
import propTypes from "prop-types";

const userContext = createContext();

function Provider({ children }) {
  const [user, setUser] = useState({
    name: null,
    firstname: null,
    email: null,
    avatar: null,
    role: null,
    localisation: null,
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
  name: propTypes.string,
  firstname: propTypes.string,
  email: propTypes.string,
  avatar: propTypes.string,
  role: propTypes.string,
  localisation: propTypes.string,
};

Provider.propTypes = {
  children: propTypes.shape({
    user: propTypes.shape(UserShape),
    setUser: propTypes.shape(UserShape),
  }).isRequired,
};
