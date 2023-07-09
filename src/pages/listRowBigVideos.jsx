import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";

const ListRowBigVideos = () => {
  return (

    <div className="flex flex-col items-center justify-start mb-[-0.52px] mx-auto w-[65%] z-[1]">
    <div className="flex flex-col gap-[41px] items-center justify-start w-full">
      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
        <Line className="bg-light_blue-400 h-[18px] md:h-[3px] mb-[9px] md:mt-0 mt-[122px] w-[3px] md:w-full" />
        <div className="h-[31px] md:ml-[0] ml-[9px] md:mt-0 mt-[118px] relative w-[21%] md:w-full">
          <Text
            className="capitalize m-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            size="txtDosisSemiBold24"
          >
            Derniers enregistrements
          </Text>
          <Line className="absolute bg-white-A700_19 h-px right-[7%] top-[39%] w-[29%]" />
        </div>
        <Img
          className="h-[140px] mb-[9px] md:ml-[0] ml-[885px]"
          src="images/img_slideicon.svg"
          alt="slideicon_Two"
        />
      </div>
      <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between w-full">
        <div className="flex md:flex-1 flex-col gap-[25px] items-center justify-start w-[24%] md:w-full">
          <div className="bg-blue_gray-100 flex flex-col items-center justify-start rounded-[10px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[369px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/img_quotidien1.png"
                alt="quotidienOne"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="capitalize text-base text-blue_gray-200 tracking-[0.64px]"
                size="txtJostRegular16"
              >
                Journal, Informations, 26/06/2023
              </Text>
              <Text
                className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                size="txtDosisRegular15"
              >
                <>
                  Quotidien
                  <br />
                  Chaîne : tMC{" "}
                </>
              </Text>
              <Line className="bg-white-A700_19 h-px mt-1.5 w-full" />
              <div className="flex flex-row font-dosis items-start justify-between mt-3.5 w-full">
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
        <div className="flex md:flex-1 flex-col items-center justify-start w-3/4 md:w-full">
          <div className="flex md:flex-col flex-row gap-7 items-center justify-between w-full">

            <div className="flex md:flex-1 flex-col gap-[25px] items-center justify-start w-[32%] md:w-full">
              <div className="bg-blue_gray-100 flex flex-col items-center justify-start rounded-[10px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[370px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/dd.jpg"
                    alt="cnntonightOne"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="capitalize text-base text-blue_gray-200 tracking-[0.64px]"
                    size="txtJostRegular16"
                  >
                    Journal, Informations, 26/06/2023
                  </Text>
                  <Text
                    className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                    size="txtDosisRegular15"
                  >
                    <>
                      CNN TONIGHT with Don Lemon
                      <br />
                      Chaîne : CNN
                    </>
                  </Text>
                  <Line className="bg-white-A700_19 h-px mt-1.5 w-full" />
                  <div className="flex flex-row font-dosis items-start justify-between mt-3.5 w-full">
                    <Text
                      className="capitalize text-blue_gray-200 text-sm tracking-[0.28px]"
                      size="txtDosisRegular14"
                    >
                      <span className="text-blue_gray-200 font-jost text-left font-normal">
                        Time:
                      </span>
                      <span className="text-blue_gray-200 font-jost text-left font-normal">
                        {" "}
                        57 min
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
            <div className="flex md:flex-1 flex-col items-center justify-start w-[66%] md:w-full">
              <List className="sm:flex-col flex-row gap-[29px] grid sm:grid-cols-1 grid-cols-2 justify-center w-full"orientation="horizontal">
                <div className="flex flex-1 flex-col gap-[25px] items-center justify-start sm:ml-[0] w-full">
                  <div className="bg-blue_gray-100 flex flex-col items-center justify-start rounded-[10px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[370px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                        src="images/img_vendreditoutest.png"
                        alt="vendreditoutest"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">



                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="capitalize text-base text-blue_gray-200 tracking-[0.64px]"
                    size="txtJostRegular16"
                  >
                    Divertissement, 30/06/2023
                  </Text>
                  <Text
                    className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                    size="txtDosisRegular15"
                  >
                      <>
                    Vendredi tout est permis
                    <br />
                    Chaîne : TF1
                  </>
                  </Text>
                  <Line className="bg-white-A700_19 h-px mt-1.5 w-full" />
                  <div className="flex flex-row font-dosis items-start justify-between mt-3.5 w-full">
                    <Text
                      className="capitalize text-blue_gray-200 text-sm tracking-[0.28px]"
                      size="txtDosisRegular14"
                    >
                    <span className="text-blue_gray-200 font-jost text-left font-normal">
                      Time:
                    </span>
                    <span className="text-blue_gray-200 font-jost text-left font-normal">
                      {" "}
                      1 hr 20 min
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

                <div className="flex flex-1 flex-col gap-[25px] items-center justify-start sm:ml-[0] w-full">
                  <div className="bg-blue_gray-100 flex flex-col items-center justify-start rounded-[10px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[370px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                        src="images/img_livetoussaint1.png"
                        alt="livetoussaintOne"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="capitalize text-base text-blue_gray-200 tracking-[0.64px]"
                        size="txtJostRegular16"
                      >
                        Journal, Informations, 26/06/2023
                      </Text>
                      <Text
                        className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                        size="txtDosisRegular15"
                      >
                        <>
                          Le Live Toussaint
                          <br />
                          Chaîne : BFM TV
                        </>
                      </Text>
                      <Line className="bg-white-A700_19 h-px mt-1.5 w-full" />
                      <div className="flex flex-row font-dosis items-start justify-between mt-3.5 w-full">
                        <Text
                          className="capitalize text-blue_gray-200 text-sm tracking-[0.28px]"
                          size="txtDosisRegular14"
                        >
                          <span className="text-blue_gray-200 font-jost text-left font-normal">
                            Time:
                          </span>
                          <span className="text-blue_gray-200 font-jost text-left font-normal">
                            {" "}
                            12 min
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
        </div>
      </div>
    </div>
  </div>
  )

}

export default ListRowBigVideos;