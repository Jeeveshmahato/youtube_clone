import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utiles/SidebarSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveContainer from "./LiveContainer";

const YOUTUBE_VIDEO_ID_REGEX = /^[a-zA-Z0-9_-]{11}$/;

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const videoId = useMemo(() => {
    const raw = searchParams.get("v") || "";
    return YOUTUBE_VIDEO_ID_REGEX.test(raw) ? raw : null;
  }, [searchParams]);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  if (!videoId) {
    return (
      <div className="flex items-center justify-center h-96 w-full text-white">
        <p className="text-xl text-gray-400">Invalid or missing video ID.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#0f0f0f] min-h-screen">
      <div className="flex xl:flex-row flex-col items-start gap-4 w-full p-4">
        <div className="xl:w-[65%] w-full">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-presentation"
            />
          </div>
        </div>
        <div className="xl:w-[35%] w-full">
          <LiveContainer />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
