import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utiles/SidebarSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveContainer from "./LiveContainer";

const WatchPage = () => {
  let [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu);
  }, []);

  return (
    <>
      <div className="w-full">
        <div className=" flex  gap-3 w-full">
          <div className="w-[65%]">
          <iframe
            width="1000"
            height="515"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          </div>
          <div className="w-[35%] ">
            <LiveContainer />
          </div>
        </div>
        <CommentContainer />
      </div>
    </>
  );
};

export default WatchPage;
