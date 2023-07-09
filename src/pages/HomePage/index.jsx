import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";
import VideoCutter from "components/videoCutter/VideoCutter";
import ListRowSmallVideos from "pages/listRowvideos";
import ListRowBigVideos from "pages/listRowBigVideos";
import Footer from "pages/footer";
import CurrentVideosRow from "pages/currentVideosRow";

const HomePagePage = () => {

  return (
    <>
      <div className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-dosis sm:gap-10 md:gap-10 gap-[81px] items-center justify-start mx-auto p-[30px] sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_01homepage.png')" }}
      >
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className=" max-w-[1820px] mb-[76px] mx-auto md:px-5 relative w-full">
          <div style={{display:'flex' , flexDirection:'column'}}>
          <ListRowBigVideos />
          <div style={{width:'100%',  marginTop:'5%', display:'flex', justifyContent:'center' }}>
            <div style={{width:'65%', }}>
            <CurrentVideosRow />
            </div>
          </div>
          <ListRowSmallVideos />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
