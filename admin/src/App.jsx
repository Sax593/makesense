import { Admin, ListGuesser, Resource } from "react-admin";
import dataProvider from "@services/dataProvider";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="suggests" list={ListGuesser} />
    </Admin>
  );
}

export default App;
