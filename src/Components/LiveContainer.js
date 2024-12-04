import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utiles/chatSlice";
import { generateName, generatetext } from "../Utiles/healper";
import { user_icons } from "../Utiles/Constant";

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
  }, []);

  return (
    <>
      <div className=" flex flex-col-reverse  h-[515px] overflow-y-scroll">
        {messagesData.map((message) => {
          const { id, UserPic, username, text } = message;
          return (
            <>
              <div key={message.id} className=" ">
                <Messages name={username} text={text} userPic={UserPic} />
              </div>
            </>
          );
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Jeevesh Mahato",
              text: liveMessage,
              UserPic: user_icons,
            })
          );
          setLiveMessage("");
        }}
        className="flex items-center border border-gray-800  p-2  rounded-lg w-full"
      >
        {/* Input Field */}
        <input
          type="text"
          placeholder="Chat..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none  placeholder-gray-500"
        />

        {/* Heart Icon */}
        <button className="ml-2 px-4 py-2 rounded-lg bg-white hover:bg-gray-600 text-gray-600 hover:text-white transition">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveContainer;
