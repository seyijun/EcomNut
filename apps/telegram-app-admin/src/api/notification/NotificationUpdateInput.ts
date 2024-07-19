import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  isRead?: boolean | null;
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
