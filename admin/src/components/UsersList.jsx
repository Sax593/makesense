import {
  Datagrid,
  EmailField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export default function UserList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="firstname" />
        <TextField source="password" />
        <EmailField source="email" />
        <TextField source="avatar" />
        <TextField source="role" />
        <ReferenceField source="thread_id" reference="threads" />
        <TextField source="localisation" />
      </Datagrid>
    </List>
  );
}
