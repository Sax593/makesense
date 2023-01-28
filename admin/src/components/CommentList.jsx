import {
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export default function CommentList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <DateField source="date" />
        <TextField source="content" />
        <ReferenceField source="users_id" reference="users" />
        <ReferenceField source="suggests_id" reference="suggests" />
        <NumberField source="up_vote" />
        <NumberField source="down_vote" />
      </Datagrid>
    </List>
  );
}
