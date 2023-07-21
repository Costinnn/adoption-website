"use client";
import { useEffect, useState, useRef } from "react";
import { find } from "lodash";

import { pusherClient } from "@/lib/pusher";

import BottomScroll from "@/components/client-components/BottomScroll";

const MessagesBox = ({ initialMessages, currentUserId, conversationId }) => {
  const bottomRef = useRef(null);
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    const messageHandler = (newMessageFromServer) => {
      setMessages((prev) => {
        // check for duplicate messages - find() - ( from lodash)
        if (find(prev, { id: newMessageFromServer.id })) {
          return prev;
        }
        // add the new messages to our current state
        return [...prev, newMessageFromServer];
      });
    };

    pusherClient.subscribe(conversationId);
    pusherClient.bind("message:new", messageHandler);

    return () => {
      pusherClient.unsubscribe(conversationId);
      pusherClient.unbind("message:new", messageHandler);
    };
  }, [conversationId]);

  useEffect(() => {
    console.log("btmref");
    bottomRef.current.scrollIntoView();
  }, [messages]);

  return (
    <div className="conversation-box">
      {messages.map((message) => (
        <p
          className={message.senderId === currentUserId ? "send" : "received"}
          key={message.id}
        >
          {String(message.body)}
        </p>
      ))}
      <p className="send">
        Lorem ipsum dolor sit amet consectetur adipisici
       
      </p>

      <div ref={bottomRef} className="bottom-ref"></div>
    </div>
  );
};

export default MessagesBox;
