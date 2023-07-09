import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";
import Footer from "pages/footer";
import CurrentVideosRow from "pages/currentVideosRow";
import ActeursRoundComponent from "pages/acteurRoundComponent";
import ActeurCard from "pages/acteurCard";
import VideoCutter from "components/videoCutter/VideoCutter";

const UploadownvideoPage = () => {

  const getVideoData = (e,d) => {
    console.log(e,d)
  }
  const video = '../../assets/videos/bfm.mp4'


  return (
    <>
        {/* <Header className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto md:px-5 top-[1%] w-full" /> */}

      <div className="bg-gray-900 flex font-dosis    w-full" style={{height:'100%'}} >
      <Header className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto md:px-5 top-[1%] w-full" />

        {/* <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" /> */}

        <div style={{ marginTop:'5%',display:'flex', justifyContent:'center',width:'100%'}}>
          <div style={{ width:'70%', display:'flex', flexDirection:'column',justifyContent:'center', }}>

            <div style={{width:'100%', marginBottom:'0%', padding:10}}>
              <video  controls className="m-auto object-cover rounded-[20px]  " style={{padding:40, width:'80%', height:'80%', borderRadius:50}} >
                <source src={video} type="video/mp4"/>
              </video>
              <VideoCutter video={video} getVideoCutterData={getVideoData} />
            </div>

            <ActeurCard />
            <CurrentVideosRow />
            <ActeursRoundComponent />
          </div>
        </div>
      </div>
      <div style={{display:'flex'}} className="bg-gray-900 ">
        <Footer />
      </div>
    </>
  );
};

export default UploadownvideoPage;
