import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";

const CurrentVideosRow = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full" style={{marginBottom:'10%'}}>
    <div className="flex flex-col gap-[43px] items-center justify-start w-full">
      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
        <Line className="bg-light_blue-400 h-[18px] md:h-[3px] md:mt-0 my-1.5 w-[3px] md:w-full" />
        <Text
          className="capitalize md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
          size="txtDosisSemiBold24"
        >
          Related Videos
        </Text>
        <Line className="bg-white-A700_19 h-px md:ml-[0] ml-[17px] md:mt-0 my-3.5 w-[6%]" />
        <Img
          className="h-[18px] md:ml-[0] ml-[901px]"
          src="images/img_maximize.svg"
          alt="maximize"
        />
      </div>
      <List
        className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
        orientation="horizontal"
      >
        <div className="flex flex-1 flex-col gap-[25px] items-center justify-start w-full">
          <Img
            style={{
              objectFit: 'cover',
              width: 300,
              height: 200,
              borderRadius:20
            }}
            src="images/buis.jpg"
            alt="img"
          />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="capitalize ml-0.5 md:ml-[0] text-base text-blue_gray-200 tracking-[0.64px]"
                size="txtJostRegular16"
              >
                Informations économiques 
              </Text>
              <Text
                className="capitalize mt-[5px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtDosisRegular24"
              >
               BFM Business
              </Text>
              <Line className="bg-white-A700_19 h-px ml-0.5 md:ml-[0] mt-[13px] w-full" />
              <div className="flex flex-row font-dosis items-start justify-between ml-0.5 md:ml-[0] mt-3.5 w-full">
                <Text
                  className="capitalize text-blue_gray-200 text-sm tracking-[0.28px]"
                  size="txtDosisRegular14"
                >
                  <span className="text-blue_gray-200 font-jost text-left font-normal">
                    Time:
                  </span>
                  <span className="text-blue_gray-200 font-jost text-left font-normal">
                    {" "}
                    1 hr 40 min
                  </span>
                </Text>
                <Text
                  className="bg-yellow-600 capitalize h-5 justify-center px-1.5 rounded-sm text-gray-900_02 text-sm tracking-[0.28px] w-[30px]"
                  size="txtDosisMedium14"
                >
                  HD
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[25px] items-center justify-start w-full">
        <Img
            style={{
              objectFit: 'cover',
              width: 300,
              height: 200,
              borderRadius:20
            }}
            src="images/sen.jpg"
            alt="img"
          />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="capitalize text-base text-blue_gray-200 tracking-[0.64px]"
                size="txtJostRegular16"
              >
                Informations
              </Text>
              <Text
                className="capitalize mt-[5px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtDosisRegular24"
              >
                et en même temps
              </Text>
              <Line className="bg-white-A700_19 h-px ml-0.5 md:ml-[0] mt-[13px] w-full" />
              <div className="flex flex-row font-dosis items-start justify-between ml-0.5 md:ml-[0] mt-3.5 w-full">
                <Text
                  className="capitalize text-blue_gray-200 text-sm tracking-[0.28px]"
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
                <Text
                  className="bg-yellow-600 capitalize h-5 justify-center px-1.5 rounded-sm text-gray-900_02 text-sm tracking-[0.28px] w-[30px]"
                  size="txtDosisMedium14"
                >
                  HD
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[25px] items-center justify-start w-full">
          <Img
            className="h-[370px] md:h-auto object-cover"
            // src="images/img_hover.png"
            src="images/sssq.jpeg"


            alt="img"
          />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="capitalize text-base text-blue_gray-200 tracking-[0.64px]"
                size="txtJostRegular16"
              >
             Informations

              </Text>
              <Text
                className="capitalize mt-1.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtDosisRegular24"
              >
               l'aprem info
              </Text>
              <Line className="bg-gradient2  h-px ml-0.5 md:ml-[0] mt-[13px] w-full" />
              <div className="flex flex-row font-dosis items-start justify-between ml-0.5 md:ml-[0] mt-3.5 w-full">
                <Text
                  className="capitalize text-blue_gray-200 text-sm tracking-[0.28px]"
                  size="txtDosisRegular14"
                >
                  <span className="text-blue_gray-200 font-jost text-left font-normal">
                    Time:
                  </span>
                  <span className="text-blue_gray-200 font-jost text-left font-normal">
                    {" "}
                    1 hr 40 min
                  </span>
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-between w-[30%]">
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
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[25px] items-center justify-start w-full">
        <Img
            style={{
              objectFit: 'cover',
              width: 300,
              height: 200,
              borderRadius:20
            }}
            src="images/route.jpg"
            alt="img"
          />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="capitalize ml-0.5 md:ml-[0] text-base text-blue_gray-200 tracking-[0.64px]"
                size="txtJostRegular16"
              >
              Informations

              </Text>
              <Text
                className="capitalize mt-[5px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtDosisRegular24"
              >
                EN ROUTE POUR DEMAIN
              </Text>
              <Line className="bg-white-A700_19 h-px ml-0.5 md:ml-[0] mt-[13px] w-full" />
              <div className="flex flex-row font-dosis items-start justify-between ml-0.5 md:ml-[0] mt-3.5 w-full">
                <Text
                  className="capitalize text-blue_gray-200 text-sm tracking-[0.28px]"
                  size="txtDosisRegular14"
                >
                  <span className="text-blue_gray-200 font-jost text-left font-normal">
                    Time:
                  </span>
                  <span className="text-blue_gray-200 font-jost text-left font-normal">
                    {" "}
                    1 hr 40 min
                  </span>
                </Text>
                <Text
                  className="bg-yellow-600 capitalize h-5 justify-center px-1.5 rounded-sm text-gray-900_02 text-sm tracking-[0.28px] w-[30px]"
                  size="txtDosisMedium14"
                >
                  HD
                </Text>
              </div>
            </div>
          </div>
        </div>
      </List>
    </div>
  </div>
  )

}

export default CurrentVideosRow;