export type MessageStatus = "READ" | "DELIVERED" | "SENT";

export type MediaType = "image" | "video" | "audio" | "text";

export type Message = {
  id: string;
  content: string;
  type: MediaType;
  timestamp: string;
  status: MessageStatus;
};

export type Inbox = {
  id: string;
  name: string;
  image: string;
  lastMessage?: string;
  timestamp?: string;
  messageStatus?: MessageStatus;
  notificationsCount?: number;
  isPinned?: boolean;
  isOnline?: boolean;
  messageType?: MediaType;
  messages: Message[];
};