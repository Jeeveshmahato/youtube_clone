import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utiles/chatSlice";
import { generateName, generatetext } from "../Utiles/healper";
import { user_icons } from "../Utiles/Constant";

const MAX_MESSAGE_LENGTH = 200;

const LiveContainer = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const messagesData = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          username: generateName(),
          text: generatetext(),
          UserPic: user_icons,
        })
      );
    }, 1500);
    return () => clearInterval(interval);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = liveMessage.trim();
    if (!trimmed) return;
    dispatch(
      addMessage({
        username: "Jeevesh Mahato",
        text: trimmed.slice(0, MAX_MESSAGE_LENGTH),
        UserPic: user_icons,
      })
    );
    setLiveMessage("");
  };

  return (
    <div className="flex flex-col h-[515px] bg-[#1a1a1a] rounded-xl border border-[#303030] overflow-hidden">
      <div className="px-4 py-3 border-b border-[#303030]">
        <h3 className="text-white font-medium text-sm">Live Chat</h3>
      </div>
      <div className="flex-1 flex flex-col-reverse overflow-y-auto scrollbar-thin">
        {messagesData.map((message, index) => (
          <Messages
            key={message.id || index}
            name={message.username}
            text={message.text}
            userPic={message.UserPic}
          />
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 p-3 border-t border-[#303030]"
      >
        <input
          type="text"
          placeholder="Chat..."
          value={liveMessage}
          maxLength={MAX_MESSAGE_LENGTH}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="flex-1 bg-[#121212] border border-[#303030] rounded-full px-4 py-2 text-white text-sm outline-none placeholder-gray-500 focus:border-blue-500 transition-colors"
        />
        <button
          type="submit"
          disabled={!liveMessage.trim()}
          className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveContainer;
