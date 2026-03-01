import React, { useEffect, useState } from "react";
import ButtonsMenu from "./Menu";
import VideoContainer from "./VideoContainer";
import { Youtube_url } from "../Utiles/Constant";
import { useDispatch } from "react-redux";
import { setVideo } from "../Utiles/VideoSlice";

const Content = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      if (!Youtube_url) {
        setError("YouTube API key is not configured. Create a .env file with REACT_APP_YOUTUBE_KEY=your_key");
        return;
      }
      try {
        const data = await fetch(Youtube_url);
        if (!data.ok) throw new Error(`API error: ${data.status}`);
        const json = await data.json();
        dispatch(setVideo(json.items));
      } catch (err) {
        setError(err.message);
      }
    };
    getVideos();
  }, [dispatch]);

  return (
    <div className="flex flex-col bg-[#0f0f0f] text-white min-h-screen overflow-hidden">
      <ButtonsMenu />
      {error ? (
        <div className="flex items-center justify-center flex-1 py-20">
          <p className="text-gray-400 text-lg">Failed to load videos. Please try again later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 px-2 sm:px-4 pb-8 pt-20">
          <VideoContainer />
        </div>
      )}
    </div>
  );
};

export default Content;
