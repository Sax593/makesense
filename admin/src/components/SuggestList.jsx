import { Datagrid, DateField, List, NumberField, TextField } from "react-admin";

export default function SuggestList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <DateField source="date" />
        <TextField source="consequences" />
        <NumberField source="priority" />
        <DateField source="contribution_date" />
        <DateField source="vote_date" />
        <DateField source="final_date" />
        <TextField source="finale_decision" />
      </Datagrid>
    </List>
  );
}
