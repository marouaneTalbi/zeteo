import React, { useEffect, useRef, useState } from 'react';

// import 'react-range-slider-input/dist/style.css';
import MultiRangeSlider from "multi-range-slider-react";
import { VideoThumbnailCapture } from 'components/Img/videoToimages';
import { Button } from 'components/Button';
import { Img } from 'components/Img';

export default function VideoCutter({video, getVideoCutterData}) {
  const rangeSliderRef = useRef(null);
  const videoRef = useRef(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState();
  const [max, set_max] = useState();

  const [image, setImg] = useState([]);


  useEffect(() => {
    
    videoRef.current.src = video;
  }, [video]);


  useEffect(() => {
    if( maxValue){
      getVideoData(minValue, maxValue);
    }
  }, [maxValue, minValue]);

  const getVideoData = (minValue, maxValue) => {
   return getVideoCutterData(minValue, maxValue);
  };

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  useEffect(() => {
    const handleLoadedMetadata = () => {
      setVideoDuration(videoRef.current.duration)
      set_maxValue(videoRef.current.duration);
      set_max(videoRef.current.duration)
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, [videoRef]);

  const handleCapture = (e) => {
    console.log(e)
    setImg(e);
    // return image
  };

  const downloadVideo = () => {
  const videoLink = '../../assets/videos/bfm.mp4'

    const downloadLink = document.createElement('a');
    downloadLink.href = videoLink;
    downloadLink.download = 'video.mp4';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  var footerStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat:'round',
    borderRadius:10,
    padding:0,
    width:'85%', 
  };

  return (
    <>
      <video ref={videoRef} style={{display: 'none'}}></video>
      <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
        <VideoThumbnailCapture videoUrl={video} getImageUrl={handleCapture} /> 

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <MultiRangeSlider
          ref={rangeSliderRef}
          style={footerStyle}
          ruler={false}
          label={false}
          preventWheel={false}
          minValue={0}
          maxValue={maxValue}
          duration={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
          max={max}
        />

        <Button onClick={downloadVideo} className="bg-light_blue-400_19 cursor-pointer flex items-center justify-center min-w-[30px] px-[35px] py-3.5 rounded-[25px]" style={{color:'white'}}>
          DOWNLOAD
        </Button>
      </div>

      </div>
    </>
  );
};





