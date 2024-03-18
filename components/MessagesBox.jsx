"use client";

import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import { find } from "lodash";
import axios from "axios";

import { pusherClient } from "@/lib/pusher";

import seenImg from "@/public/icons/seen.png";
import unseenImg from "@/public/icons/unseen.png";

const MessagesBox = ({ initialMessages, currentUserId, conversationId }) => {
  const bottomRef = useRef(null);
  const [messages, setMessages] = useState(initialMessages);

  //Seen function
  const seenMessage = useCallback(async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/seenmessage`,
        { conversationId }
      );
    } catch (err) {
      console.log(err, "SEEN_REQ");
    }
  }, [conversationId]);

  // REALTIME MESSAGES UPDATES
  useEffect(() => {
    // messageHandler adds to the current messages state the new message added to server
    const messageHandler = (newMessageFromServer) => {
      setMessages((prev) => {
        // check for duplicate messages - find() - ( from lodash)
        if (find(prev, { id: newMessageFromServer.id })) {
          return prev;
        }
        // add the new messages to our current state

        return [...prev, newMessageFromServer];
      });
      // update seen status if the message received is from the other user
      if (newMessageFromServer.senderId !== currentUserId) {
        seenMessage();
      }

     
    };

    // seenHandler replace the current last message with the updated seen message from server
    const seenHandler = (updatedSeenMessage) => {
      setMessages((prev) =>
        prev.map((currentMessage) => {
          if (currentMessage.id === updatedSeenMessage.id) {
            return updatedSeenMessage;
          }
          return currentMessage;
        })
      );
    };

    pusherClient.subscribe(conversationId);
    pusherClient.bind("message:new", messageHandler);
    pusherClient.bind("message:seen", seenHandler);

    return () => {
      pusherClient.unsubscribe(conversationId);
      pusherClient.unbind("message:new", messageHandler);
      pusherClient.unbind("message:seen", seenHandler);
    };
  }, [conversationId, currentUserId, seenMessage]);

  useEffect(() => {
    bottomRef.current.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    seenMessage();
  }, [seenMessage]);


  return (
    <div className="conversation-box">
      {messages.map((message, index) => (
        <p
          className={`${
            message.senderId === currentUserId ? "send" : "received"
          } ${
            index === Number(messages.length) - 1
              ? message.senderId === currentUserId
                ? "lastmsg"
                : ""
              : ""
          }`}
          key={message.id}
        >
          {String(message.body)}
          {index === Number(messages.length) - 1 ? (
            message.senderId === currentUserId ? (
              message.seen ? (
                <Image src={seenImg} width={20} height={20} alt="seen" />
              ) : (
                <Image src={unseenImg} width={20} height={20} alt="unseen" />
              )
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </p>
      ))}
      <div ref={bottomRef} className="bottom-ref"></div>
    </div>
  );
};

export default MessagesBox;
