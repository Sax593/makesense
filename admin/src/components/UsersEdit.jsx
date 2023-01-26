import { Edit, SimpleForm, TextField, TextInput } from "react-admin";

export default function UserEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextField source="id" />
        <TextInput source="name" />
        <TextInput source="firstname" />
        <TextInput source="avatar" />
        <TextInput source="role" />
        <TextInput source="localisation" />
      </SimpleForm>
    </Edit>
  );
}
