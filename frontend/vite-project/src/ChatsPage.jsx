import React from "react";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
import { projectId } from './projectId';

// this will show the chatpage when the user login

const ChatsPage = (props) => {
  console.log("props", props);
  const chatProps = useMultiChatLogic(
    projectId,
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

/*const ChatsPage = (props) => {
  console.log("props", props);

  return (
    <div className="background">
      <PrettyChatWindow
        projectId={projectId}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
}; */
export default ChatsPage;
