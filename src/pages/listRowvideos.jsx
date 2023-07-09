import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";

const ListRowSmallVideos = () => {
  return (
    <div className=" flex flex-col gap-11 inset-x-[0] items-center justify-start mx-auto  w-[65%]" style={{marginTop:'3%'}} >
    <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
      <Line className="bg-light_blue-400 h-[18px] md:h-[3px] mb-1.5 md:  w-[3px] md:w-full" />
      <div className="h-[31px] md:ml-[0] ml-[9px]   relative w-1/5 md:w-full">
        <Text
          className="absolute capitalize h-full inset-y-[0] left-[0] my-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl"
          size="txtDosisSemiBold24"
        >
          Les chaînes en direct
        </Text>
        <Line className="absolute bg-white-A700_19 h-px inset-y-[0] my-auto right-[0] w-[31%]" />
      </div>

    </div>
    <div className="flex flex-col items-center justify-start w-full">
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">

            <div style={{display:'flex', justifyContent:'space-between'}}>
              <Img
                style={{height:140, width:230, borderRadius:20}}
                src="images/ammour.jpg"
                alt="maskgroup"
              />
              <div style={{width:200}}>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="capitalize ml-0.5 md:ml-[0] text-base text-blue_gray-200 tracking-[0.64px]"
                    size="txtJostRegular16"
                  >
                    Documentaires, 2017
                  </Text>
                  <Text
                    className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                    size="txtDosisRegular15"
                  >
                    <>
                    L'amour est dans le pré
                      <br />
                      Chaîne :{" "}
                    </>
                  </Text>
                  <Line className="bg-white-A700_19 h-px ml-0.5 md:ml-[0] mt-1.5 w-full" />

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
                        2 h 30 min
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

            <div style={{display:'flex', justifyContent:'space-between'}}>
            <Img
                style={{height:140, width:230, borderRadius:20}}
                src="images/cap.jpeg"
                alt="maskgroup"
              />
              <div className="flex flex-col items-center justify-start" style={{width:200}}>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="capitalize ml-0.5 md:ml-[0] text-base text-blue_gray-200 tracking-[0.64px]"
                    size="txtJostRegular16"
                  >
                    Reportage, 2020
                  </Text>
                  <Text
                    className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                    size="txtDosisRegular15"
                  >
                    <>
                      Capital
                      <br />
                      Chaîne :{" "}
                    </>
                  </Text>
                  <Line className="bg-white-A700_19 h-px ml-0.5 md:ml-[0] mt-1.5 w-full" />
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
                    <div className="flex flex-row items-center">
                    <Text
                        className="bg-yellow-600 capitalize h-5 justify-center px-1.5 rounded-sm text-gray-900_02 text-sm tracking-[0.28px] w-[30px]"
                        size="txtDosisMedium14"
                      >
                        HD
                      </Text>
                      <Text
                        className="bg-light_blue-400_19 capitalize h-5 justify-center px-2 rounded-sm text-sm text-white-A700 tracking-[0.28px] w-10"
                        size="txtDosisMedium14WhiteA700"
                      >
                        MP4
                      </Text>
           
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 sm:flex-col flex-row gap-7 items-center justify-between w-full">
            <Img
                style={{height:140, width:230, borderRadius:20}}
                src="images/trav.jpg"
                alt="maskgroup"
              />
              <div className="flex flex-col items-center justify-start" style={{width:200}}>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="capitalize ml-0.5 md:ml-[0] text-base text-blue_gray-200 tracking-[0.64px]"
                    size="txtJostRegular16"
                  >
                    Documentaire, 2019
                  </Text>
                  <Text
                    className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                    size="txtDosisRegular15"
                  >
                    <>
                    Mission travaux : ma maison est un chantier
                      <br />
                      Chaîne :{" "}
                    </>
                  </Text>
                  <Line className="bg-white-A700_19 h-px ml-0.5 md:ml-[0] mt-1.5 w-full" />
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
                        1 hr 30 min
                      </span>
                    </Text>
                    <div className="flex flex-row items-center">
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

            <div className="flex flex-1 sm:flex-col flex-row gap-7 items-center justify-between w-full">
            <Img
                style={{height:140, width:230, borderRadius:20}}
                src="images/zon.jpg"
                alt="maskgroup"
              />
              <div className="flex flex-col items-center justify-start" style={{width:200}}>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="capitalize ml-0.5 md:ml-[0] text-base text-blue_gray-200 tracking-[0.64px]"
                    size="txtJostRegular16"
                  >
                    Reportage, 2020
                  </Text>
                  <Text
                    className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                    size="txtDosisRegular15"
                  >
                    <>
                    Zone interdite
                      <br />
                      Chaîne :{" "}
                    </>
                  </Text>
                  <Line className="bg-white-A700_19 h-px ml-0.5 md:ml-[0] mt-1.5 w-full" />
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
                        1 hr 00 min
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

            <div className="flex flex-1 sm:flex-col flex-row gap-7 items-center justify-between w-full">
            <Img
                style={{height:140, width:230, borderRadius:20}}
                src="images/66m.jpg"
                alt="maskgroup"
              />
              <div className="flex flex-col items-center justify-start" style={{width:200,}}>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="capitalize ml-0.5 md:ml-[0] text-base text-blue_gray-200 tracking-[0.64px]"
                    size="txtJostRegular16"
                  >
                    Reportage, 2018
                  </Text>
                  <Text
                    className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                    size="txtDosisRegular15"
                  >
                    <>
                      66 minutes
                      <br />
                      Chaîne :{" "}
                    </>
                  </Text>
                  <Line className="bg-white-A700_19 h-px ml-0.5 md:ml-[0] mt-1.5 w-full" />
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

            <div className="flex flex-1 sm:flex-col flex-row gap-7 items-center justify-between w-full">
            <Img
                style={{height:140, width:230, borderRadius:20}}
                src="images/mais.jpeg"
                alt="maskgroup"
              />
              <div className="flex flex-col items-center justify-start" style={{width:200}}>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="capitalize ml-0.5 md:ml-[0] text-base text-blue_gray-200 tracking-[0.64px]"
                    size="txtJostRegular16"
                  >
                    Immobilier, 2013
                  </Text>
                  <Text
                    className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                    size="txtDosisRegular15"
                  >
                    <>
                      Maison à vendre
                      <br />
                      Chaîne :{" "}
                    </>
                  </Text>
                  <Line className="bg-white-A700_19 h-px ml-0.5 md:ml-[0] mt-1.5 w-full" />
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
                    <div className="flex flex-row items-center">
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

          </div>
        </div>
      </div>
    </div>
  </div>
  )

}

export default ListRowSmallVideos;