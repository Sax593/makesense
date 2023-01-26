import { Edit, SimpleForm, TextField } from "react-admin";

export default function CommentEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextField source="id" />
        <TextField source="content" />
      </SimpleForm>
    </Edit>
  );
}
