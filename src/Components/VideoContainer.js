import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const VideoContainer = () => {
  const videos = useSelector((store) => store?.MyVideos?.MyVideo);
  if (!videos) return null;

  // Formatting function for view count
  const formatCount = (count) => {
    if (count < 1000) return count.toString();
    if (count < 1_000_000)
      return (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + "k";
    if (count < 1_000_000_000)
      return (count / 1_000_000).toFixed(count % 1_000_000 === 0 ? 0 : 1) + "M";
    return (
      (count / 1_000_000_000).toFixed(count % 1_000_000_000 === 0 ? 0 : 1) + "B"
    );
  };

  return (
    <>
      {videos.map((video) => {
        const { snippet, statistics } = video;

        return (
          <>
            <NavLink to={"/watch?v=" + video.id}>
              <div className=" w-72">
                <div key={video.id}>
                  <img src={snippet.thumbnails.medium.url} alt="Thumbnail" />
                  <div>
                    <h2>{snippet.title}</h2>
                    <p>{snippet.channelTitle}</p>
                    <div className="flex gap-1">
                      {/* Format the view count */}
                      <p>{formatCount(statistics.viewCount)} views</p>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </>
        );
      })}
    </>
  );
};

export default VideoContainer;
