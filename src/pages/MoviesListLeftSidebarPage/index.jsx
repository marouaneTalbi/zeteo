import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";
import Footer from "pages/footer";

const MoviesListLeftSidebarPagePage = () => {
  return (
    <>
      <div className="bg-gray-900 font-dosis  mx-auto relative w-full">
      <Header className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto md:px-5 top-[1%] w-full" />

        <div className=" m-auto md:px-5 w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <Img
              className="h-[2003px] sm:h-auto object-cover w-full"
              src="images/img_rectangle373.png"
              alt="rectangle373"
            />
          </div>
     
        </div>
        <div className="absolute flex md:flex-col flex-row gap-11 inset-x-[0] items-start justify-center max-w-[1184px] mx-auto md:px-5 top-[10%] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-11 w-[23%] md:w-full">
            <div className="flex flex-col gap-[25px] items-center justify-start w-full">
              <div className="flex flex-row items-center justify-start w-full">
                <div className="bg-light_blue-400 h-[13px] my-1 w-[2%]"></div>
                <Text
                  className="capitalize ml-[9px] text-lg text-white-A700"
                  size="txtDosisSemiBold18"
                >
                  Search Here
                </Text>
                <Line className="bg-white-A700_19 h-px mb-[9px] ml-[71px] mt-3 w-[38%]" />
              </div>
              <div className="bg-gray-900_03 flex flex-row items-center justify-between p-3.5 rounded-[10px] w-full" style={{marginBottom:30}}>
                <Text
                  className="ml-1 mt-0.5 text-[13px] text-blue_gray-200_4c"
                  size="txtJostRegular13"
                >
                  Enter Your Keyword...
                </Text>
                <Text
                  className="h-3 mr-[5px] text-white-A700 text-xs"
                  size="txtIcofont12"
                >
                  
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[23px] w-[99%] md:w-full" >
              <div className="flex  justify-end relative w-full">
            
                <div className="absolute bg-light_blue-400 h-[13px] inset-y-[0] left-[0] my-auto w-[2%]"></div>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex  justify-end relative w-full">
                    <div className="absolute bg-light_blue-400 h-[13px] inset-y-[0] left-[0] my-auto w-[2%]"></div>
                    {/* <Line className="bg-white-A700_19 h-px mb-1.5 ml-auto mt-auto w-[38%]" /> */}

                    <div style={{ objectFit: 'cover',width: 55,height: 55, backgroundColor:'white', borderRadius:40, padding:10}}>
                    <Img src="images/cal.png"
                      alt="vector_Two"
                    />
                    </div>

                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-row items-center justify-start w-full">
                        <div className="bg-light_blue-400 h-[13px] my-1 w-[2%]"></div>
                        <Text
                          className="capitalize ml-[9px] text-lg text-white-A700"
                          size="txtDosisSemiBold18"
                        >
                          Date Added
                        </Text>

                        {/* <Line className="bg-white-A700_19 h-px mb-1.5 ml-[71px] mt-[15px] w-[38%]" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           <div className="flex flex-col gap-[13px] items-start justify-start  w-full" style={{marginTop:40}}>
              <div className="flex flex-row items-start justify-start w-full">
                <div className="bg-light_blue-400 h-[13px] mb-1.5 mt-[3px] w-[2%]"></div>
                <Text
                  className="capitalize ml-[9px] text-lg text-white-A700"
                  size="txtDosisSemiBold18"
                >
                  Categories
                </Text>
                <Line className="bg-white-A700_19 h-px ml-[82px] my-2.5 w-[38%]" />
              </div>
              <div className="flex flex-col font-jost items-center justify-start w-[74%] md:w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="leading-[30.00px] text-base text-blue_gray-200"
                    size="txtJostRegular16"
                  >
                    <>
                      Action
                      <br />
                      Adventure
                      <br />
                      Animation
                      <br />
                      Biography
                      <br />
                      Comedy
                      <br />
                      Crime
                      <br />
                      Documentary
                      <br />
                      Drama
                      <br />
                      Family
                      <br />
                      Fantasy
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] text-base text-blue_gray-200"
                    size="txtJostRegular16"
                  >
                    <>
                      History
                      <br />
                      Horror
                      <br />
                      Music
                      <br />
                      Mystery
                      <br />
                      News
                      <br />
                      Romance
                      <br />
                      Sci-Fi
                      <br />
                      Sport
                      <br />
                      Thriller
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[25px] items-center justify-start mt-[15px] w-full">
              <div className="flex flex-row items-center justify-start w-full">
                <div className="bg-light_blue-400 h-[13px] my-1 w-[2%]"></div>
                <Text
                  className="capitalize ml-[9px] text-lg text-white-A700"
                  size="txtDosisSemiBold18"
                >
                  Channels
                </Text>
                <Line className="bg-white-A700_19 h-px mb-[9px] ml-[92px] mt-3 w-[38%]" />
              </div>
              <div className="flex flex-row font-icofont gap-[15px] items-center justify-between w-[97%] md:w-full">
                <Text
                  className="bg-gray-900_03 capitalize flex h-10 items-center justify-center rounded-[50%] text-blue_gray-200_4c text-center text-sm w-10"
                  size="txtIcofont14"
                >
                  <Img
                    style={{height:'100%', width:370, borderRadius:40}}
                    src="images/mm6.png"
                    alt="vector_Five"
                  />    
                </Text>
                <Text
                  className="bg-light_blue-400 capitalize flex h-10 items-center justify-center rounded-[50%] text-center text-sm text-white-A700 w-10"
                  size="txtIcofont14WhiteA700"
                >
                  <Img
                    style={{borderRadius:0}}
                    src="images/canal+.png"
                    alt="vector_Five"
                  />   

                </Text>
                <Text
                  className="bg-gray-900_03 capitalize flex h-10 items-center justify-center rounded-[50%] text-blue_gray-200_4c text-center text-sm w-10"
                  size="txtIcofont14"
                  // style={{padding:10}}
                >
                  <Img
                    style={{borderRadius:10,padding:1}}
                    src="images/bffm.png"
                    alt="vector_Five"
                  />  

                </Text>
                <Text
                  className="bg-gray-900_03 capitalize flex h-10 items-center justify-center rounded-[50%] text-blue_gray-200_4c text-center text-sm w-10"
                  size="txtIcofont14"
                >
                  <Img
                    style={{borderRadius:40,padding:1}}
                    src="images/guili.png"
                    alt="vector_Five"
                  />  
                </Text>
                <Text
                  className="bg-gray-900_03 capitalize flex h-10 items-center justify-center rounded-[50%] text-blue_gray-200_4c text-center text-sm w-10"
                  size="txtIcofont14"
                >
                 <Img
                    style={{borderRadius:40}}
                    src="images/tv.png"
                    alt="vector_Five"
                  />  
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[23px] items-center justify-start mt-[26px] w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="bg-light_blue-400 h-[13px] mb-1.5 mt-[3px] w-[2%]"></div>
                <Text
                  className="capitalize text-lg text-white-A700"
                  size="txtDosisSemiBold18"
                >
                  Characters appeared
                </Text>
                <Line className="bg-white-A700_19 h-px my-2.5 w-[38%]" />
              </div>
              <div className="flex flex-col font-jost gap-5 items-center justify-start w-full">
                <div className="flex flex-row gap-[29px] items-center justify-start w-full">

                  {/* <div className="bg-white-A700 h-[70px] rounded-[50%] w-[70px]"></div> */}
                  
                  <Img
                     style={{
                      objectFit: 'cover',
                      width: 75,
                      height: 75,
                      borderRadius:40
                    }}
                      src="images/aur.jpg"
                      alt="vector_Two"
                  />


                  <Text
                    className="capitalize leading-[30.00px] text-base text-white-A700"
                    size="txtJostRegular16WhiteA700"
                  >
                    <span className="text-white-A700 font-dosis text-left text-lg font-bold">
                      <>
                        Emmanuel Macron
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-200 font-jost text-left font-normal">
                      (16 Movie)
                    </span>
                  </Text>
                </div>
                <div className="flex flex-row gap-[30px] items-center justify-start w-full">
                  <Img
                        style={{
                          objectFit: 'cover',
                          width: 75,
                          height: 75,
                          borderRadius:40
                        }}
                      src="images/tra.jpeg"
                      alt="vector_Two"
                  />
                  <Text
                    className="capitalize leading-[30.00px] text-base text-white-A700"
                    size="txtJostRegular16WhiteA700"
                  >
                    <span className="text-white-A700 font-dosis text-left text-lg font-bold">
                      <>
                      Laurent Jacquet
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-200 font-jost text-left font-normal">
                      (12 Movie)
                    </span>
                  </Text>
                </div>
                <div className="flex flex-row gap-[30px] items-center justify-start w-full">
                  <Img
                      style={{
                        objectFit: 'cover',
                        width: 75,
                        height: 75,
                        borderRadius:40
                      }}
                      src="images/zzo.jpg"
                      alt="vector_Two"
                  />

                  <Text
                    className="capitalize leading-[30.00px] text-base text-white-A700"
                    size="txtJostRegular16WhiteA700"
                  >
                    <span className="text-white-A700 font-dosis text-left text-lg font-bold">
                      <>
                      Ophélie Meunier
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-200 font-jost text-left font-normal">
                      (25 Movie)
                    </span>
                  </Text>
                </div>
                <div className="flex flex-row gap-[29px] items-center justify-start w-full">
                  <Img
                      style={{
                        objectFit: 'cover',
                        width: 75,
                        height: 75,
                        borderRadius:40
                      }}
                      src="images/karine.jpg"
                      alt="vector_Two"
                  />
                  <Text
                    className="capitalize leading-[30.00px] text-base text-white-A700"
                    size="txtJostRegular16WhiteA700"
                  >
                    <span className="text-white-A700 font-dosis text-left text-lg font-bold">
                      <>
                        Karine le marchand
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-200 font-jost text-left font-normal">
                      (17 Movie)
                    </span>
                  </Text>
                </div>
                <div className="flex flex-row gap-7 items-center justify-start w-full">
                  <Img
                      // style={{height:75,width:75, borderRadius:40}}
                      style={{
                        objectFit: 'cover',
                        width: 75,
                        height: 75,
                        borderRadius:40
                      }}
                      src="images/sstef.jpeg"
                      alt="vector_Two"
                  />
                  <Text
                    className="capitalize leading-[30.00px] text-base text-white-A700"
                    size="txtJostRegular16WhiteA700"
                  >
                    <span className="text-white-A700 font-dosis text-left text-lg font-bold">
                      <>
                        Stephen Colbert
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-200 font-jost text-left font-normal">
                      (18 Movie)
                    </span>
                  </Text>
                </div>
              </div>
            </div> 
          </div>
          <div className="flex md:flex-1 flex-col font-jost gap-[30px] items-center justify-start w-[74%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Img className="h-[87px]" src="images/img_01.svg" alt="One_Two" />
              <Img
                className="h-[85px] ml-1.5 md:ml-[0]"
                src="images/img_folder.svg"
                alt="folder"
              />
              <Text
                className="ml-5 md:ml-[0] md:mt-0 mt-14 text-base text-blue_gray-200 text-center"
                size="txtJostRegular16"
              >
                Showing 1–14 of 26 results
              </Text>
              <div className="flex md:flex-1 flex-col gap-[39px] justify-start md:ml-[0] ml-[233px] md:mt-0 mt-1 w-[24%] md:w-full">
                <Img
                  className="h-[3px] md:ml-[0] ml-[162px]"
                  src="images/img_arrow.svg"
                  alt="arrow"
                />
                <Input
                  name="groupThirtySix"
                  placeholder="Default sorting"
                  className="p-0 placeholder:text-blue_gray-200 sm:pr-5 text-blue_gray-200 text-left text-sm w-full"
                  wrapClassName="bg-gray-900_04 pl-[19px] pr-[35px] py-[9px] rounded-[3px] w-full"
                ></Input>
              </div>
              <div className="h-[85px] ml-5 md:ml-[0] relative w-[14%] md:w-full">
                <div className="flex flex-col gap-11 justify-start mb-[-30.11px] ml-[18px] w-[57%] z-[1]">
                  <div className="flex flex-col items-center justify-start w-1/5 md:w-full">
                    <div className="flex flex-row items-start justify-evenly w-full">
                      <Img
                        className="h-px mt-0.5 w-0.5"
                        src="images/img_vector.svg"
                        alt="vector"
                      />
                      <Img
                        className="h-1 w-1"
                        src="images/img_vector_white_a700.svg"
                        alt="vector_One"
                      />
                      <Img
                        className="h-px mt-0.5"
                        src="images/img_vector.svg"
                        alt="vector_Two"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-evenly mt-0.5 w-full">
                      <Img
                        className="h-px mt-0.5"
                        src="images/img_vector.svg"
                        alt="vector_Three"
                      />
                      <Img
                        className="h-1 w-1"
                        src="images/img_vector_white_a700.svg"
                        alt="vector_Four"
                      />
                      <Img
                        className="h-px mt-0.5 w-0.5"
                        src="images/img_vector.svg"
                        alt="vector_Five"
                      />
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[34px] text-sm text-white-A700"
                    size="txtJostBold14"
                  >
                    Filter
                  </Text>
                </div>
                <div className="bg-light_blue-400 h-10 mt-auto mx-auto rounded-[3px] w-full"></div>
              </div>
            </div>

            <div className="md:h-[1523px] h-[1615px] relative w-full">
      
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <List
                  className="flex flex-col gap-[30px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="h-[240px] my-0 relative w-full">
                    <div className="bg-gray-900_05 flex flex-col h-full items-start justify-start m-auto rounded-[10px] w-full">
                      <Img
                        style={{height:'100%', width:370}}
                        src="images/bfmmm.jpg"
                        alt="vector_Five"
                      />
                    </div>
                    <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[6%] w-[49%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="capitalize ml-0.5 md:ml-[0] text-base text-blue_gray-200 tracking-[0.64px]"
                          size="txtJostRegular16"
                        >
                          Action, animation, 2017
                        </Text>
                        <Text
                          className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                          size="txtDosisRegular15"
                        >
                          <>
                            Nocturnal Animals Movie
                            <br />
                            Chaîne :{" "}
                          </>
                        </Text>
                        <Text
                          className="leading-[30.00px] mt-[11px] text-base text-blue_gray-200 tracking-[0.64px] w-full"
                          size="txtJostRegular16"
                        >
                          Nulla dictum finibus malesuada. Fusce porttitor dui
                          ex, iaculis tincidunt eros tempus at. Nunc auctor
                          imperdiet mi, quis suscipit odio luctus ut.
                        </Text>
                        <Line className="bg-white-A700_19 h-px ml-0.5 md:ml-[0] mt-[21px] w-full" />
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

                  {/* <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[240px] items-end justify-start my-0 p-[25px] sm:px-5 w-full"
                    style={{ backgroundImage: "url('images/img_item8.png')" }}
                  >
                      <Img
                        style={{height:'100%', width:370}}
                        src="images/bfmmm.jpg"
                        alt="vector_Five"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start mb-1 mr-6 w-[52%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="capitalize ml-0.5 md:ml-[0] text-base text-blue_gray-200 tracking-[0.64px]"
                          size="txtJostRegular16"
                        >
                          Action, animation, 2017
                        </Text>
                        <Text
                          className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                          size="txtDosisRegular15"
                        >
                          <>
                            Nocturnal Animalsc
                            <br />
                            Chaîne :{" "}
                          </>
                        </Text>
                        <Text
                          className="leading-[30.00px] mt-[11px] text-base text-blue_gray-200 tracking-[0.64px] w-full"
                          size="txtJostRegular16"
                        >
                          Nulla dictum finibus malesuada. Fusce porttitor dui
                          ex, iaculis tincidunt eros tempus at. Nunc auctor
                          imperdiet mi, quis suscipit odio luctus ut.
                        </Text>
                        <Line className="bg-white-A700_19 h-px ml-0.5 md:ml-[0] mt-[21px] w-full" />
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
                  </div> */}
                  <div className="h-[240px] my-0 relative w-full">
                    <div className="bg-gray-900_05 flex flex-col h-full items-start justify-start m-auto rounded-[10px] w-full">
                      <Img
                        style={{height:'100%', width:370}}
                        src="images/trav.jpg"
                        alt="vector_Five"
                      />
                    </div>
                    <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[6%] w-[49%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="capitalize ml-0.5 md:ml-[0] text-base text-blue_gray-200 tracking-[0.64px]"
                          size="txtJostRegular16"
                        >
                          Action, animation, 2017
                        </Text>
                        <Text
                          className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                          size="txtDosisRegular15"
                        >
                          <>
                            Nocturnal Animals Movie
                            <br />
                            Chaîne :{" "}
                          </>
                        </Text>
                        <Text
                          className="leading-[30.00px] mt-[11px] text-base text-blue_gray-200 tracking-[0.64px] w-full"
                          size="txtJostRegular16"
                        >
                          Nulla dictum finibus malesuada. Fusce porttitor dui
                          ex, iaculis tincidunt eros tempus at. Nunc auctor
                          imperdiet mi, quis suscipit odio luctus ut.
                        </Text>
                        <Line className="bg-white-A700_19 h-px ml-0.5 md:ml-[0] mt-[21px] w-full" />
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
                          <div className="flex flex-row gap-2.5 items-center justify-between w-1/5">
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
                  <div className="h-[240px] my-0 relative w-full">
                    <div className="bg-gray-900_05 flex flex-col h-full items-start justify-start m-auto rounded-[10px] w-full">
                      <Img
                        style={{height:'100%', width:370}}
                        src="images/zon.jpg"
                        alt="vector_Five"
                      />
                    </div>
                    <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[6%] w-[49%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="capitalize ml-0.5 md:ml-[0] text-base text-blue_gray-200 tracking-[0.64px]"
                          size="txtJostRegular16"
                        >
                          Action, animation, 2017
                        </Text>
                        <Text
                          className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                          size="txtDosisRegular15"
                        >
                          <>
                            Nocturnal Animals Movie
                            <br />
                            Chaîne :{" "}
                          </>
                        </Text>
                        <Text
                          className="leading-[30.00px] mt-[11px] text-base text-blue_gray-200 tracking-[0.64px] w-full"
                          size="txtJostRegular16"
                        >
                          Nulla dictum finibus malesuada. Fusce porttitor dui
                          ex, iaculis tincidunt eros tempus at. Nunc auctor
                          imperdiet mi, quis suscipit odio luctus ut.
                        </Text>
                        <Line className="bg-white-A700_19 h-px ml-0.5 md:ml-[0] mt-[21px] w-full" />
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
                          <div className="flex flex-row gap-2.5 items-center justify-between w-1/5">
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
                  <div className="h-[240px] my-0 relative w-full">
                    <div className="bg-gray-900_05 flex flex-col h-full items-start justify-start m-auto rounded-[10px] w-full">
                      <Img
                        style={{height:'100%', width:370}}
                        src="images/ammour.jpg"
                        alt="vector_Five"
                      />
                    </div>
                    <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[6%] w-[49%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="capitalize ml-0.5 md:ml-[0] text-base text-blue_gray-200 tracking-[0.64px]"
                          size="txtJostRegular16"
                        >
                          Action, animation, 2017
                        </Text>
                        <Text
                          className="capitalize leading-[20.00px] mt-1 text-[15px] text-white-A700"
                          size="txtDosisRegular15"
                        >
                          <>
                            Nocturnal Animals Movie
                            <br />
                            Chaîne :{" "}
                          </>
                        </Text>
                        <Text
                          className="leading-[30.00px] mt-[11px] text-base text-blue_gray-200 tracking-[0.64px] w-full"
                          size="txtJostRegular16"
                        >
                          Nulla dictum finibus malesuada. Fusce porttitor dui
                          ex, iaculis tincidunt eros tempus at. Nunc auctor
                          imperdiet mi, quis suscipit odio luctus ut.
                        </Text>
                        <Line className="bg-white-A700_19 h-px ml-0.5 md:ml-[0] mt-[21px] w-full" />
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
                          <div className="flex flex-row gap-2.5 items-center justify-between w-1/5">
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
                </List>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-[100px] inset-x-[0] items-center justify-end mx-auto p-[31px] sm:px-5 top-[4%] w-full"
          style={{ backgroundImage: "url('images/img_group32.png')" }}
        >
          <div className="flex flex-row md:gap-10 items-start justify-between max-w-[1171px] mt-[5px] md:px-5 w-full">
            <Text
              className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtDosisMedium24"
            >
              <span className="text-white-A700 font-dosis text-left font-medium">
                Movies List Page{" "}
              </span>
              <span className="text-light_blue-400 font-dosis text-left font-medium">
                zeteo
              </span>
            </Text>
            <Text
              className="capitalize mt-[3px] text-base text-gray-900_01 text-right"
              size="txtMontserratMedium16"
            >
              <span className="text-white-A700 font-jost font-normal">
                Home /
              </span>
              <span className="text-blue_gray-200_4c font-jost font-normal">
                {" "}
              </span>
              <span className="text-blue_gray-200_4c font-jost font-normal">
                About Us
              </span>
            </Text>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
                <Button className="bg-light_blue-400 cursor-pointer h-10 mt-[0px] py-2 rounded-[3px] text-base text-center text-white-A700 w-10">
                  1
                </Button>
                <Button className="bg-gray-900_03 cursor-pointer h-10 mt-[0px] py-2 rounded-[3px] text-base text-blue_gray-200 text-center w-10">
                  2
                </Button>
                <Button className="bg-gray-900_03 cursor-pointer h-10 mt-[0px] py-2 rounded-[3px] text-base text-blue_gray-200 text-center w-10">
                  3
                </Button>
              </div>
      <Footer />

      </div>

    </>
  );
};

export default MoviesListLeftSidebarPagePage;
