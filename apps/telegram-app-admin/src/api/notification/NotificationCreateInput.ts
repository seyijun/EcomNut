import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  isRead?: boolean | null;
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
