import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const formatCount = (count) => {
  const num = Number(count);
  if (isNaN(num)) return "0";
  if (num < 1000) return num.toString();
  if (num < 1_000_000) return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
  if (num < 1_000_000_000) return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1) + "M";
  return (num / 1_000_000_000).toFixed(num % 1_000_000_000 === 0 ? 0 : 1) + "B";
};

const timeAgo = (dateString) => {
  if (!dateString) return "";
  const seconds = Math.floor((Date.now() - new Date(dateString)) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
  const years = Math.floor(days / 365);
  return `${years} year${years > 1 ? "s" : ""} ago`;
};

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  return (
    <NavLink to={"/watch?v=" + video.id} className="block group">
      <div className="w-full">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={snippet.thumbnails.medium.url}
            alt={snippet.title}
            className="w-full aspect-video object-cover group-hover:rounded-none transition-all duration-300"
            loading="lazy"
          />
        </div>
        <div className="flex gap-3 mt-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">
            {snippet.channelTitle?.charAt(0) || "?"}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-white line-clamp-2 leading-5 group-hover:text-gray-200">
              {snippet.title}
            </h3>
            <p className="text-[13px] text-gray-400 mt-1 hover:text-gray-300 truncate">
              {snippet.channelTitle}
            </p>
            <p className="text-[13px] text-gray-400">
              {formatCount(statistics?.viewCount)} views
              {snippet.publishedAt && ` \u2022 ${timeAgo(snippet.publishedAt)}`}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

const VideoShimmer = () => (
  <div className="w-full animate-pulse">
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
);

const VideoContainer = ({ onLoadMore, hasMore, isLoadingMore }) => {
  const videos = useSelector((store) => store?.MyVideos?.MyVideo);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !isLoadingMore) {
          onLoadMore();
        }
      },
      { threshold: 0.1, rootMargin: "600px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [onLoadMore, hasMore, isLoadingMore]);

  if (!videos) {
    return (
      <>
        {Array.from({ length: 12 }).map((_, i) => (
          <VideoShimmer key={i} />
        ))}
      </>
    );
  }

  return (
    <>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
      {/* Sentinel for infinite scroll */}
      {hasMore && (
        <div
          ref={sentinelRef}
          className="col-span-full flex justify-center py-6"
        >
          {isLoadingMore && (
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
              <span className="text-gray-500 text-xs">Loading more videos</span>
            </div>
          )}
        </div>
      )}
      {/* End of list */}
      {!hasMore && videos.length > 0 && (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-600 text-sm">No more videos to load</p>
        </div>
      )}
    </>
  );
};

export default VideoContainer;
