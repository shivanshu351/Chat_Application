import React from 'react';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';


const ChatsPage = (props) => {
  const { username, secret } = props.user || {};  // Destructure with fallback to prevent errors

  // Ensure environment variables are defined
  const projectId = import.meta.env.VITE_APP_CHAT_ENGINE_PROJECT_ID;
  if (!projectId) {
    console.error('REACT_APP_CHAT_ENGINE_PROJECT_ID is not defined');
    return <div>Error: Project ID is not defined</div>;
  }

  // Ensure username and secret are provided
  if (!username || !secret) {
    console.error('Username or secret is missing in props');
    return <div>Error: Username or secret is missing</div>;
  }

  const chatProps = useMultiChatLogic(
    projectId,   // Your project ID
    username,    // Username from props
    secret       // Secret from props
  );

  return (
    <div className="background">
      {/* Rendering the chat socket and window */}
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
    </div>
  );
};

export default ChatsPage;
