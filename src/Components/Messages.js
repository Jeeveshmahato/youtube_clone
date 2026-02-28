import React from "react";

const Messages = ({ name, text, userPic }) => {
  return (
    <div className="flex items-start gap-3 py-2 px-4 hover:bg-[#222222] transition-colors">
      <img
        className="w-6 h-6 rounded-full flex-shrink-0"
        src={userPic}
        alt=""
        loading="lazy"
      />
      <div className="min-w-0">
        <span className="text-gray-400 text-xs font-medium mr-2">{name}</span>
        <span className="text-white text-sm break-words">{text}</span>
      </div>
    </div>
  );
};

export default Messages;
