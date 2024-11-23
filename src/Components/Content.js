import React, { useEffect } from "react";
import ButtonsMenu from "./Menu";
import VideoContainer from "./VideoContainer";
import { Youtube_url } from "../Utiles/Constant";
import { useDispatch } from "react-redux";
import { setVideo } from "../Utiles/VideoSlice";

const Content = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getvideos();
  }, []);
  const getvideos = async () => {
    const data = await fetch(Youtube_url);
    const json = await data.json();
    // console.log(json.items);
    dispatch(setVideo(json.items));
  };
  return (
    <>
      <div className=" flex flex-col bg-black text-white px-2 gap-3">
        <ButtonsMenu />
        <div className=" flex gap-4 mx-auto w-full items-center justify-center flex-wrap">
        
          <VideoContainer />
        </div>
      </div>
    </>
  );
};

export default Content;
// const videos = useSelector((store) => store?.MyVideos?.MyVideo[0]);
// if (!videos || videos.length === 0) return null;
