export const Youtube_Icon = null; // Using inline SVG instead

const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;
export const Youtube_url = API_KEY
  ? `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`
  : "";

export const getFilteredVideoUrl = (query) => {
  if (!API_KEY) return "";
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${encodeURIComponent(query)}&type=video&regionCode=IN&key=${API_KEY}`;
};

export const getYoutubeUrlWithToken = (pageToken) => {
  if (!API_KEY) return "";
  let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;
  if (pageToken) url += `&pageToken=${pageToken}`;
  return url;
};

export const getFilteredVideoUrlWithToken = (query, pageToken) => {
  if (!API_KEY) return "";
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${encodeURIComponent(query)}&type=video&regionCode=IN&key=${API_KEY}`;
  if (pageToken) url += `&pageToken=${pageToken}`;
  return url;
};

export const Menus = [
  "All",
  "Music",
  "Mixes",
  "Display devices",
  "Web series",
  "Live",
  "Portable communication",
  "Dramedy",
  "Movie musicals",
  "T-Series",
  "Lofi",
  "Phineas and Ferb",
];

export const Youtube_Search_Url =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const commentsData = [
  {
    name: "Jeevesh Mahato",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Jeevesh Mahato",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Jeevesh Mahato",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Jeevesh Mahato",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Jeevesh Mahato",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Jeevesh Mahato",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Jeevesh Mahato",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Jeevesh Mahato",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Jeevesh Mahato",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Jeevesh Mahato",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Jeevesh Mahato",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Jeevesh Mahato",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Jeevesh Mahato",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

export const user_icons =
  "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

export const Live_Chat_Count = 100;
