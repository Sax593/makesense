import { Admin, ListGuesser, Resource } from "react-admin";
import dataProvider from "@services/dataProvider";
import authProvider from "@services/authProvider";

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="suggests" list={ListGuesser} />
    </Admin>
  );
}

export default App;
