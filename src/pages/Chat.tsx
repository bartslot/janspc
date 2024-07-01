import React from 'react';
import { Inbox } from '../common/types/common.type';
import ChatMessage from './ChatMessage';

interface ChatProps {
  inbox: Inbox;
}

const Chat: React.FC<ChatProps> = ({ inbox }) => {
  return (
    <div className="chat-container">
      {inbox.messages.map(message => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
};

export default Chat;
