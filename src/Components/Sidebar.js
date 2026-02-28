import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon, label, to, active }) => {
  const baseClasses =
    "flex items-center gap-5 px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm";
  const activeClasses = active
    ? "bg-[#272727] font-medium"
    : "hover:bg-[#272727]";

  const content = (
    <li className={`${baseClasses} ${activeClasses}`}>
      <span className="w-6 h-6 flex items-center justify-center shrink-0">{icon}</span>
      <span className="truncate">{label}</span>
    </li>
  );

  if (to) {
    return <NavLink to={to}>{content}</NavLink>;
  }
  return content;
};

const MiniSidebarItem = ({ icon, label, to }) => {
  const content = (
    <li className="flex flex-col items-center gap-1.5 py-4 px-1 rounded-lg hover:bg-[#272727] cursor-pointer transition-colors">
      <span className="w-6 h-6 flex items-center justify-center">{icon}</span>
      <span className="text-[10px]">{label}</span>
    </li>
  );

  if (to) {
    return <NavLink to={to}>{content}</NavLink>;
  }
  return content;
};

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
    <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z" />
  </svg>
);

const ShortsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
    <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25z" />
  </svg>
);

const SubscriptionsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
    <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 20V10h18v10H3z" />
  </svg>
);

const YouIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
    <path d="M11 7l6 3.5L11 14V7zm7-4H6v1h12V3zm3 3H4v1h17V6zm2 3H2v12h21V9zm-1 1v10H3V10h19z" />
  </svg>
);

const HistoryIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
    <path d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38C4.17 7.56 4.06 7.75 3.97 7.94L7 8H2V3l2.23 2.23c.3-.5.63-.98 1-1.42A9.965 9.965 0 0112 2c5.51 0 10 4.49 10 10z" />
  </svg>
);

const PlaylistIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
    <path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z" />
  </svg>
);

const YourVideosIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
    <path d="M10 8l6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z" />
  </svg>
);

const WatchLaterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
    <path d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
  </svg>
);

const LikedIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
    <path d="M18.77 11h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11H1v11h16.68l3.21-6.73c.3-.63.11-1.38-.42-1.77l.3-.5zM7 20H2v-9h5v9zm13.21-6.6L17 20H8V11.4l5.7-6.24c.13-.14.3-.16.38-.16.2 0 .44.16.5.42L13 11h7l-.79 2.4z" />
  </svg>
);

const TrendingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
    <path d="M19 3.87v9.26c0 3.03-2.47 5.5-5.5 5.5s-5.5-2.47-5.5-5.5c0-1.83.89-3.45 2.26-4.45l.99 1.42C10.19 10.95 9.5 12 9.5 13.13c0 2.21 1.79 4 4 4s4-1.79 4-4V5.87l-3.5 3.5-1-1L19 3.87z" />
  </svg>
);

const ShoppingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
    <path d="M18.36 2.62c-.2-.2-.51-.2-.71 0l-1.41 1.41c-.2.2-.2.51 0 .71l.7.7-2.47 2.47H7v7.59l-3.65 3.65c-.2.2-.2.51 0 .71.1.1.23.15.35.15s.26-.05.35-.15l3.65-3.65H15.3l2.47-2.47.7.7c.1.1.23.15.35.15s.26-.05.35-.15l1.41-1.41c.2-.2.2-.51 0-.71l-2.22-2.22zM15.59 15H8V9h6.59l-2 2H10v2h2.59l3-3z" />
  </svg>
);

const Sidebar = () => {
  const isExpanded = useSelector((store) => store.expandMenu.isExpanded);

  // Mini sidebar when collapsed
  if (!isExpanded) {
    return (
      <div className="hidden md:flex flex-col items-center w-[72px] bg-[#0f0f0f] text-white h-[calc(100vh-56px)] sticky top-14 overflow-y-auto scrollbar-thin pt-1 shrink-0">
        <ul>
          <MiniSidebarItem
            to="/"
            icon={<HomeIcon />}
            label="Home"
          />
          <MiniSidebarItem
            icon={<ShortsIcon />}
            label="Shorts"
          />
          <MiniSidebarItem
            icon={<SubscriptionsIcon />}
            label="Subscriptions"
          />
          <MiniSidebarItem
            icon={<YouIcon />}
            label="You"
          />
        </ul>
      </div>
    );
  }

  return (
    <div className="w-60 bg-[#0f0f0f] text-white h-[calc(100vh-56px)] sticky top-14 overflow-y-auto scrollbar-thin px-3 py-3 shrink-0 hidden md:block">
      {/* Home section */}
      <ul className="space-y-0.5 pb-3">
        <SidebarItem
          to="/"
          icon={<HomeIcon />}
          label="Home"
          active
        />
        <SidebarItem
          icon={<ShortsIcon />}
          label="Shorts"
        />
        <SidebarItem
          icon={<SubscriptionsIcon />}
          label="Subscriptions"
        />
      </ul>

      <hr className="border-[#272727] my-3" />

      {/* You section */}
      <div>
        <h3 className="text-white text-base font-medium px-3 mb-1 flex items-center gap-1">
          You
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
            <path d="M9.4 18.4l-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z" />
          </svg>
        </h3>
        <ul className="space-y-0.5">
          <SidebarItem
            icon={<HistoryIcon />}
            label="History"
          />
          <SidebarItem
            icon={<PlaylistIcon />}
            label="Playlists"
          />
          <SidebarItem
            icon={<YourVideosIcon />}
            label="Your videos"
          />
          <SidebarItem
            icon={<WatchLaterIcon />}
            label="Watch Later"
          />
          <SidebarItem
            icon={<LikedIcon />}
            label="Liked videos"
          />
        </ul>
      </div>

      <hr className="border-[#272727] my-3" />

      {/* Subscriptions section */}
      <div>
        <h3 className="text-white text-base font-medium px-3 mb-1">Subscriptions</h3>
        <ul className="space-y-0.5">
          <SidebarItem
            icon={
              <div className="w-6 h-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-xs font-bold">
                G
              </div>
            }
            label="Government Job Mastery"
          />
          <SidebarItem
            icon={
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M4 6h16v12H4z" />
              </svg>
            }
            label="All subscriptions"
          />
        </ul>
      </div>

      <hr className="border-[#272727] my-3" />

      {/* Explore section */}
      <div>
        <h3 className="text-white text-base font-medium px-3 mb-1">Explore</h3>
        <ul className="space-y-0.5">
          <SidebarItem
            icon={<TrendingIcon />}
            label="Trending"
          />
          <SidebarItem
            icon={<ShoppingIcon />}
            label="Shopping"
          />
        </ul>
      </div>

      <hr className="border-[#272727] my-3" />

      {/* Footer */}
      <div className="px-3 pb-4">
        <p className="text-xs text-gray-500 leading-5">
          About Press Copyright Contact us Creators Advertise Developers
        </p>
        <p className="text-xs text-gray-500 leading-5 mt-2">
          Terms Privacy Policy & Safety How YouTube works Test new features
        </p>
        <p className="text-xs text-gray-600 mt-4">&copy; 2026 Google LLC</p>
      </div>
    </div>
  );
};

export default Sidebar;
