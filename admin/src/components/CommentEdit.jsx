import {
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  NumberInput,
} from "react-admin";

export default function CommentEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <DateInput source="date" />
        <TextInput source="content" />
        <ReferenceInput source="users_id" reference="users" />
        <ReferenceInput source="suggests_id" reference="suggests" />
        <NumberInput source="up_vote" />
        <NumberInput source="down_vote" />
      </SimpleForm>
    </Edit>
  );
}
