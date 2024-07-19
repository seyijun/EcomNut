import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { MatchTitle } from "../match/MatchTitle";
import { HamsterTitle } from "../hamster/HamsterTitle";

export const BetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="amount" source="amount" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="match.id" reference="Match" label="match">
          <SelectInput optionText={MatchTitle} />
        </ReferenceInput>
        <ReferenceInput source="hamster.id" reference="Hamster" label="hamster">
          <SelectInput optionText={HamsterTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
