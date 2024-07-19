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
import { MATCH_TITLE_FIELD } from "./MatchTitle";
import { HAMSTER_TITLE_FIELD } from "../hamster/HamsterTitle";

export const MatchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="date" source="date" />
        <TextField label="winner" source="winner" />
        <TextField label="loser" source="loser" />
        <ReferenceManyField reference="Bet" target="matchId" label="Bets">
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
