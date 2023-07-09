import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";

const Footer = () => {
  return (
    <footer className=" flex inset-[0] items-center justify-center m-auto w-full" style={{marginTop:'5%'}}>
    <div className="flex flex-col gap-[45px] items-center justify-center w-full">
      <div
        className="bg-cover bg-no-repeat flex flex-col gap-[52px] h-[703px] items-center justify-end p-[106px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_group32.png')" }}
      >
        <div className="md:h-[100px] h-[106px] sm:h-[120px] mt-3.5 relative w-[69%] md:w-full">
          <div className="flex flex-col h-full items-center justify-start ml-auto w-[21%]">
            <div className="flex flex-row gap-5 items-center justify-between w-full">
              <Button className="bg-light_blue-400_19 flex h-[45px] items-center justify-center p-[px] rounded-[22px] w-[45px]">
                <Img src="images/img_contrast.svg" alt="contrast" />
              </Button>
              <Button className="bg-light_blue-400 flex h-[45px] items-center justify-center p-[13px] rounded-[22px] w-[45px]">
                <Img src="images/img_twitter.svg" alt="twitter" />
              </Button>
              <div className="bg-light_blue-400_19 flex flex-col h-[45px] items-center justify-end p-[13px] rounded-[22px] w-[45px]">
                <div className="bg-white-A700_4c h-[18px] rounded-[50%] w-[18px]"></div>
              </div>
              <Button className="bg-light_blue-400_19 flex h-[45px] items-center justify-center p-[13px] rounded-[22px] w-[45px]">
                <Img
                  className="h-[18px]"
                  src="images/img_group22.png"
                  alt="groupFiftyFour"
                />
              </Button>
            </div>
          </div>
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-row gap-[7px] items-center justify-start w-[12%] md:w-full">
                <div className="h-[45px] relative w-[45px]">
                  <div className="bg-light_blue-400 h-[45px] m-auto rounded-[22px] w-[45px]"></div>
                  <Button className="absolute bg-light_blue-400 flex h-[35px] inset-[0] items-center justify-center m-auto p-2.5 rounded-[17px] w-[35px]">
                    <Img
                      className="h-3.5"
                      src="images/img_group26.png"
                      alt="groupFiftyEight"
                    />
                  </Button>
                </div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase"
                  size="txtDosisBold32"
                >
                  zeteo
                </Text>
              </div>
              <Line className="bg-white-A700_19 h-px w-full" />
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[76%] md:w-full">
          <div className="flex flex-col items-center justify-start w-[22%] md:w-full">
            <div className="flex flex-col gap-[7px] items-start justify-start w-full">
              <Text
                className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtDosisMedium24"
              >
                Service
              </Text>
              <div className="flex flex-row font-jost items-center justify-between w-full">
                <Text
                  className="capitalize leading-[40.00px] text-blue_gray-200 text-lg"
                  size="txtJostRegular18"
                >
                  <>
                    Albania
                    <br />
                    Austria
                    <br />
                    Belgium
                    <br />
                    Bulgaria
                    <br />
                    Croatia
                    <br />
                    Czech Republic
                    <br />
                    Denmark
                  </>
                </Text>
                <Text
                  className="capitalize leading-[40.00px] text-blue_gray-200 text-lg"
                  size="txtJostRegular18"
                >
                  <>
                    Estonia
                    <br />
                    Finland
                    <br />
                    France
                    <br />
                    Germany
                    <br />
                    Gibraltar
                    <br />
                    Greece
                    <br />
                    Hungary
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[230px]">
            <Text
              className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtDosisMedium24"
            >
              About
            </Text>
            <Text
              className="capitalize leading-[40.00px] text-blue_gray-200 text-lg"
              size="txtRubikRegular18"
            >
              <span className="text-blue_gray-200 font-jost text-left font-normal">
                home
              </span>
              <span className="text-light_blue-400 font-jost text-left font-normal">
                <>
                  {" "}
                  <br />
                  about us <br />
                </>
              </span>
              <span className="text-blue_gray-200 font-jost text-left font-normal">
                <>
                  services <br />
                  portfolios <br />
                  blogs <br />
                  contact us
                  <br />
                  Reviews
                </>
              </span>
            </Text>
          </div>
          <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[117px]">
            <Text
              className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtDosisMedium24"
            >
              quick links
            </Text>
            <Text
              className="capitalize leading-[40.00px] text-blue_gray-200 text-lg"
              size="txtJostRegular18"
            >
              <span className="text-blue_gray-200 font-jost text-left font-normal">
                <>
                  Product Design
                  <br />
                  Business Consulting
                  <br />
                </>
              </span>
              <span className="text-blue_gray-200 font-jost text-left font-normal">
                <>
                  Terms of Use
                  <br />
                  Privacy Policy
                  <br />
                  Security
                  <br />
                </>
              </span>
              <span className="text-blue_gray-200 font-jost text-left font-normal">
                <>
                  SEO Optimization
                  <br />
                  Cyber Security
                </>
              </span>
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start ml-12 md:ml-[0] w-[30%] md:w-full">
            <ul className="flex flex-col items-start justify-start w-full common-column-list">
              <li>
                <a
                  href="javascript:"
                  className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                >
                  <Text size="txtDosisMedium24">subscribe us</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="mt-[17px] text-base text-blue_gray-200"
                >
                  <Text size="txtJostRegular16">
                    Join us to our newsletter submit.
                  </Text>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row font-jost gap-2.5 items-center justify-start mt-[22px]">
                    <Input
                      name="groupFiftyThree"
                      placeholder="Enter your email"
                      className="p-0 placeholder:text-white-A700_4c sm:pl-5 text-left text-sm text-white-A700_4c w-full"
                      wrapClassName="border border-solid border-white-A700_19 pb-3 pl-[29px] pr-3 pt-4 rounded-[25px] w-[78%]"
                      type="email"
                    ></Input>
                    <Button className="bg-light_blue-400_19 flex h-[50px] items-center justify-center p-[18px] rounded-[50%] w-[50px]">
                      <Img src="images/img_cut.svg" alt="cut" />
                    </Button>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex sm:flex-col flex-row font-opensans gap-3.5 items-start justify-start mt-[23px]">
                    <Img
                      className="h-5 md:h-auto sm:mt-0 mt-2.5 object-cover w-5"
                      src="images/img_maskgroup.png"
                      alt="maskgroup"
                    />
                    <Text
                      className="leading-[30.00px] text-base text-blue_gray-200"
                      size="txtOpenSansRomanRegular16"
                    >
                      <span className="text-blue_gray-200 font-jost text-left font-normal">
                        Our{" "}
                      </span>
                      <span className="text-blue_gray-200 font-jost text-left font-normal">
                        Privacy Policy
                      </span>
                      <span className="text-blue_gray-200 font-jost text-left font-normal">
                        <>
                          {" "}
                          and provide <br />
                          updates from our company.
                        </>
                      </span>
                    </Text>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-opensans items-center justify-start">
        <Text
          className="text-blue_gray-900 text-center text-lg"
          size="txtOpenSansRomanRegular18"
        >
          <span className="text-light_blue-400 font-jost lowercase font-normal">
            Disnap{" "}
          </span>
          <span className="text-blue_gray-200 font-jost lowercase font-normal">
            © Copyright-2023 All Rights Reserved.
          </span>
        </Text>
      </div>
    </div>
  </footer>
  )

}

export default Footer;