import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";

const ActeurCard = () => {
  return (
    <div className="h-[545px] md:h-[869px] relative w-full" style={{marginBottom:'5%' }}>
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
        <div className="flex flex-col gap-3 items-end justify-start w-full">

            <div style={{display:'flex', flexDirection:'row' }}>
                <div style={{width:600,padding:10 }} >
                        <Img
                        className="md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                        src="images/dd.jpeg"
                        alt="cnntonightTwo"
                        />
                </div>



                <div style={{display:'flex', flexDirection:'column' }}>

                    <div style={{display:'flex', }}>
                        <div className="flex flex-col gap-5 items-center justify-start w-[69%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                        <Text
                            className="capitalize md:ml-[0] ml-[3px] text-base text-blue_gray-200 tracking-[0.64px]"
                            size="txtJostRegular16"
                        >
                            News, 2023
                        </Text>
                        <Text
                            className="capitalize mt-3 sm:text-[38px] md:text-[44px] text-[52px] text-white-A700"
                            size="txtDosisSemiBold52"
                        >
                            cNN TONIGHT with Don Lemon
                        </Text>
                        <Text
                            className="capitalize ml-1 md:ml-[0] text-blue_gray-200 text-sm tracking-[0.28px]"
                            size="txtDosisRegular14"
                        >
                            <span className="text-blue_gray-200 font-jost text-left font-normal">
                            Time:
                            </span>
                            <span className="text-blue_gray-200 font-jost text-left font-normal">
                            {" "}
                            2 hr 40 min
                            </span>
                        </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-between md:mt-0 mt-[94px] w-[10%] md:w-full">
                        <Text
                            className="bg-light_blue-400_19 capitalize h-5 justify-center px-2 rounded-sm text-sm text-white-A700 tracking-[0.28px] w-10"
                            size="txtDosisMedium14WhiteA700"
                        >
                            MP4
                        </Text>
                        <Text
                            className="bg-yellow-600 capitalize h-5 justify-center px-1.5 rounded-sm text-gray-900_02 text-sm tracking-[0.28px] w-[30px]"
                            size="txtDosisMedium14"
                        >
                            HD
                        </Text>
                        </div>
                        </div>
                        <Line className="bg-white-A700_19 h-px w-full" />
                        </div>
                    </div>

                    <div style={{display:'flex', }}>
                        <div style={{ width:'100%'}}>

                            <Text
                            className=" md:ml-[0]  text-blue_gray-200 text-lg"
                            size="txtJostRegular18"
                            >
                            <span className="text-blue_gray-200 font-jost text-left font-normal">
                                Don Lemon Tonight (formerly CNN Tonight with Don
                                Lemon) is a late evening news commentary program which
                                aired from 2014 to 2022 on{" "}
                            </span>
                            <a
                                href="javascript:"
                                className="text-blue_gray-200 font-jost text-left font-normal underline"
                            >
                                CNN
                            </a>
                            <span className="text-blue_gray-200 font-jost text-left font-normal">
                                , hosted by{" "}
                            </span>
                            <a
                                href="javascript:"
                                className="text-blue_gray-200 font-jost text-left font-normal underline"
                            >
                                Don Lemon
                            </a>
                            <span className="text-blue_gray-200 font-jost text-left font-normal">
                                .
                            </span>
                            <a
                                href="javascript:"
                                className="text-blue_gray-200 font-jost text-left font-normal underline"
                            >
                                [1]
                            </a>
                            <a
                                href="javascript:"
                                className="text-blue_gray-200 font-jost text-left font-normal underline"
                            >
                                [2]
                            </a>
                            <a
                                href="javascript:"
                                className="text-blue_gray-200 font-jost text-left font-normal underline"
                            >
                                <>
                                [3]
                                <br />
                                </>
                            </a>
                            <span className="text-blue_gray-200 font-jost text-left font-normal">
                                The show aired on weeknights live from 10:00 pm to
                                midnight ET.
                            </span>
                            </Text>
                        </div>
                        <div >
                            <Text
                            className="leading-[30.00px] md:mt-0 text-lg text-light_blue-400"
                            size="txtJostRegular18Lightblue400"
                            >
                            <span className="text-light_blue-400 font-jost text-left font-normal">
                                Director
                            </span>
                            <span className="text-light_blue-400 font-jost text-left font-normal">
                                {" "}
                                :{" "}
                            </span>
                            <span className="text-blue_gray-200 font-jost text-left font-normal">
                                <>
                                Frank Darabont
                                <br />
                                </>
                            </span>
                            <span className="text-light_blue-400 font-jost text-left font-normal">
                                Stars
                            </span>
                            <span className="text-light_blue-400 font-jost text-left font-normal">
                                {" "}
                                :{" "}
                            </span>
                            <span className="text-blue_gray-200 font-jost text-left font-normal">
                                <>
                                Don Lemon
                                <br />
                                </>
                            </span>
                            <span className="text-light_blue-400 font-jost text-left font-normal">
                                Tags :{" "}
                            </span>
                            <span className="text-blue_gray-200 font-jost text-left font-normal">
                                Joe Biden
                            </span>
                            <span className="text-blue_gray-200 font-jost text-left font-normal">
                                ,{" "}
                            </span>
                            <span className="text-blue_gray-200 font-jost text-left font-normal">
                                USA
                            </span>
                            <span className="text-blue_gray-200 font-jost text-left font-normal">
                                , Donald{" "}
                            </span>
                            <span className="text-blue_gray-200 font-jost text-left font-normal">
                                <>
                                Trump
                                <br />
                                </>
                            </span>
                            </Text>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
            <Button
                className="bg-light_blue-400_19 cursor-pointer flex items-center justify-center min-w-[300px] px-[35px] py-3.5 rounded-[25px]"
                rightIcon={
                <div className="mt-1 mb-2 ml-[5px] bg-white-A700">
                    <Img
                    src="images/img_arrowright.svg"
                    alt="arrow_right"
                    />
                </div>
                }
            >
                <div className="capitalize font-semibold leading-[normal] sm:px-5 text-base text-right text-white-A700 tracking-[0.32px]">
                Add to My List
                </div>
            </Button>
            </div>
        </div>
        </div>
  </div> 
  )

}

export default ActeurCard;