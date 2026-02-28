import React from "react";
import { commentsData, user_icons } from "../Utiles/Constant";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex gap-3 py-3">
      <img
        className="w-10 h-10 rounded-full flex-shrink-0"
        alt=""
        src={user_icons}
        loading="lazy"
      />
      <div>
        <p className="text-white text-sm font-medium">{name}</p>
        <p className="text-gray-300 text-sm mt-0.5">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          {comment.replies.length > 0 && (
            <div className="pl-6 ml-5 border-l border-gray-700">
              <CommentList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

const CommentContainer = () => {
  return (
    <div className="mx-4 p-4">
      <h2 className="text-xl font-bold text-white mb-4">
        Comments <span className="text-gray-400 text-base font-normal ml-2">{commentsData.length}</span>
      </h2>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
