"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { pusherClient } from "@/lib/pusher";

import seenImg from "@/public/icons/seen.png";
import unseenImg from "@/public/icons/unseen.png";

const MsgCompStatus = ({
  conversationId,
  currentUserId,
  initialLastMessage,
}) => {
  const [lastMessage, setLastMessage] = useState(initialLastMessage);

  useEffect(() => {
    const messageHandler = (newMessageFromServer) => {
      if (lastMessage.conversationId === newMessageFromServer.conversationId) {
        setLastMessage((prev) => {
          if (newMessageFromServer.id === prev.id) {
            return prev;
          }

          return newMessageFromServer;
        });
      }
    };

    const seenHandler = (updatedSeenMessage) => {
      if (lastMessage.conversationId === updatedSeenMessage.conversationId) {
        setLastMessage((prev) => {
          if (updatedSeenMessage.id === prev.id) {
            return updatedSeenMessage;
          }
          return prev;
        });
      }
    };
    if (lastMessage.conversationId === conversationId) {
      pusherClient.subscribe(conversationId);
      pusherClient.bind("message:new", messageHandler);
      pusherClient.bind("message:seen", seenHandler);
    }

    return () => {
      pusherClient.unsubscribe(conversationId);
      pusherClient.unbind("message:new", messageHandler);
      pusherClient.unbind("message:seen", seenHandler);
    };
  }, [conversationId, lastMessage.conversationId]);

  return (
    <>
      {/* SENDED MESSAGES */}
      {currentUserId === lastMessage.senderId && (
        <span className="lastmsg">
          {lastMessage.seen ? (
            <Image src={seenImg} width={17} height={17} alt="seen" />
          ) : (
            <Image src={unseenImg} width={17} height={17} alt="unseen" />
          )}
          {lastMessage?.body.slice(0, 30)}
          {lastMessage?.body.length > 31 ? " ..." : ""}
        </span>
      )}
      {/* RECEIVED MESSAGES */}
      {currentUserId !== lastMessage.senderId && (
        <span className={`lastmsg ${lastMessage.seen ? "seen" : ""}`}>
          {lastMessage?.body.slice(0, 30)}
          {lastMessage?.body.length > 31 ? " ..." : ""}
        </span>
      )}
    </>
  );
};

export default MsgCompStatus;
