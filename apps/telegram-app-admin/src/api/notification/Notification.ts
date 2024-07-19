import { User } from "../user/User";

export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isRead: boolean | null;
  content: string | null;
  user?: User | null;
};
