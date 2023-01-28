import {
  Edit,
  ReferenceFieldView,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export default function UserEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="firstname" />
        <TextField source="password" />
        <TextInput source="email" />
        <TextInput source="avatar" />
        <TextInput source="role" />
        <ReferenceFieldView source="thread_id" reference="threads" />
        <TextInput source="localisation" />
      </SimpleForm>
    </Edit>
  );
}
