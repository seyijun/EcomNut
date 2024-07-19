import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { MATCH_TITLE_FIELD } from "../match/MatchTitle";
import { HAMSTER_TITLE_FIELD } from "../hamster/HamsterTitle";

export const BetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Bets"}
      perPage={50}
      pagination={<Pagination />}
    >
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
        <ReferenceField label="hamster" source="hamster.id" reference="Hamster">
          <TextField source={HAMSTER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
