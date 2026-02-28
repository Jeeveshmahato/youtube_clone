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
    <div className="flex flex-col bg-[#0f0f0f] text-white min-h-screen">
      <ButtonsMenu />
      {error ? (
        <div className="flex items-center justify-center py-20">
          <p className="text-gray-400 text-lg">Failed to load videos. Please try again later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 px-4 pb-8">
          <VideoContainer />
        </div>
      )}
    </div>
  );
};

export default Content;
