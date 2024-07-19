import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { MATCH_TITLE_FIELD } from "../match/MatchTitle";
import { HAMSTER_TITLE_FIELD } from "./HamsterTitle";

export const HamsterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="strength" source="strength" />
        <TextField label="speed" source="speed" />
        <TextField label="health" source="health" />
        <TextField label="owner" source="owner" />
        <ReferenceManyField reference="Bet" target="hamsterId" label="Bets">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="amount" source="amount" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="match" source="match.id" reference="Match">
              <TextField source={MATCH_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="hamster"
              source="hamster.id"
              reference="Hamster"
            >
              <TextField source={HAMSTER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
