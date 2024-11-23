import React from "react";
import { commentsData, user_icons } from "../Utiles/Constant";

const Comment = ({ data }) => {
  const {name, text} = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img className="w-12 h-12" alt="user" src={user_icons} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => {
        return (
          <>
            <div key={index}>
              <Comment data={comment} />
              <div className="pl-5 border border-l-black ml-5">
                <CommentList comments={comment.replies} />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
const CommentContainer = () => {
  return (
    <>
      <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments: </h1>
        <CommentList comments={commentsData} />
      </div>
    </>
  );
};

export default CommentContainer;
