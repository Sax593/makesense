import { Admin, Resource } from "react-admin";
import dataProvider from "@services/dataProvider";
import SuggestList from "@components/SuggestList";
import UserList from "@components/UsersList";
import UserEdit from "@components/UsersEdit";
import CommentList from "@components/CommentList";
import CommentEdit from "@components/CommentEdit";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="suggests" list={SuggestList} />
      <Resource name="users" list={UserList} edit={UserEdit} />
      <Resource name="comments" list={CommentList} edit={CommentEdit} />
    </Admin>
  );
}

export default App;
