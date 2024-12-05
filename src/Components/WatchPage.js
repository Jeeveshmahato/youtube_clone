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
        <div className=" flex  xl:flex-row flex-col items-center gap-3 w-full">
          <div className="xl:w-[65%] w-full flex items-center justify-center">
          <iframe
            width="100%"
            height="515"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          </div>
          <div className="xl:w-[35%] mt-2 w-full ">
            <LiveContainer />
          </div>
        </div>
        <CommentContainer />
      </div>
    </>
  );
};

export default WatchPage;
