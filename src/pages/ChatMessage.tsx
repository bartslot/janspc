import React from 'react';
import { Message } from '../common/types/common.type';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const renderMedia = () => {
    switch (message.type) {
      case 'image':
        return <img src={message.content} alt="chat media" style={{ maxWidth: '100%' }} />;
      case 'video':
        return <video controls style={{ maxWidth: '300px' }}>
                 <source src={message.content} type="video/mp4" />
               </video>;
      case 'audio':
        return <audio controls>
                 <source src={message.content} type="audio/mpeg" />
               </audio>;
      default:
        return <span>{message.content}</span>;
    }
  };

  return (
    <div className="chat-message">
      {renderMedia()}
    </div>
  );
};

export default ChatMessage;
