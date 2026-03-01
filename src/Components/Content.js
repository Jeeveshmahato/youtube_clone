import React, { useEffect, useState, useCallback } from "react";
import ButtonsMenu from "./Menu";
import VideoContainer from "./VideoContainer";
import { Youtube_url, getFilteredVideoUrl } from "../Utiles/Constant";
import { useDispatch, useSelector } from "react-redux";
import { setVideo } from "../Utiles/VideoSlice";

const Content = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const activeFilter = useSelector((store) => store.MyVideos.activeFilter);

  const fetchVideos = useCallback(async (filter) => {
    const url = filter === "All" ? Youtube_url : getFilteredVideoUrl(filter);
    if (!url) {
      setError("YouTube API key is not configured. Create a .env file with REACT_APP_YOUTUBE_KEY=your_key");
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const data = await fetch(url);
      if (!data.ok) throw new Error(`API error: ${data.status}`);
      const json = await data.json();

      if (filter === "All") {
        dispatch(setVideo(json.items));
      } else {
        // Search API returns id as { videoId: "..." } instead of a string
        const normalized = json.items.map((item) => ({
          ...item,
          id: item.id.videoId || item.id,
        }));
        dispatch(setVideo(normalized));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchVideos(activeFilter);
  }, [activeFilter, fetchVideos]);

  return (
    <div className="flex flex-col bg-[#0f0f0f] text-white min-h-screen overflow-hidden">
      <ButtonsMenu />
      {error ? (
        <div className="flex items-center justify-center flex-1 py-20">
          <p className="text-gray-400 text-lg">Failed to load videos. Please try again later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 px-2 sm:px-4 pb-8 pt-20">
          {loading ? (
            Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-full animate-pulse">
                <div className="w-full aspect-video bg-[#272727] rounded-xl" />
                <div className="flex gap-3 mt-3">
                  <div className="w-9 h-9 rounded-full bg-[#272727] flex-shrink-0" />
                  <div className="flex-1">
                    <div className="h-4 bg-[#272727] rounded w-full mb-2" />
                    <div className="h-3 bg-[#272727] rounded w-3/4 mb-1" />
                    <div className="h-3 bg-[#272727] rounded w-1/2" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <VideoContainer />
          )}
        </div>
      )}
    </div>
  );
};

export default Content;
