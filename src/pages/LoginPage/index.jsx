import React from "react";

import {
  Button,
  CheckBox,
  FloatingInput,
  Img,
  Input,
  Line,
  Text,
} from "components";
import Header from "components/Header";

const LoginPagePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex font-dosis h-[1873px] justify-end mx-auto relative w-full">
        <div className="flex flex-col h-full items-center justify-end mt-auto mx-auto w-full">
          <div className="bg-gradient  h-[7176px] w-full"></div>
        </div>
        <footer className="absolute bottom-[3%] flex inset-x-[0] items-center justify-center mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[45px] items-center justify-center w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col gap-[52px] h-[703px] items-center justify-end p-[106px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group32.png')" }}
            >
              <div className="md:h-[100px] h-[106px] sm:h-[120px] mt-3.5 relative w-[69%] md:w-full">
                <div className="flex flex-col h-full items-center justify-start ml-auto w-[21%]">
                  <div className="flex flex-row gap-5 items-center justify-between w-full">
                    <Button className="bg-light_blue-400_19 flex h-[45px] items-center justify-center p-[7px] rounded-[22px] w-[45px]">
                      <Img src="images/img_contrast.svg" alt="contrast" />
                    </Button>
                    <Button className="bg-light_blue-400 flex h-[45px] items-center justify-center p-2.5 rounded-[22px] w-[45px]">
                      <Img src="images/img_twitter.svg" alt="twitter" />
                    </Button>
                    <Button className="bg-light_blue-400_19 flex h-[45px] items-center justify-center p-[7px] rounded-[22px] w-[45px]">
                      <Img
                        className="h-[18px]"
                        src="images/img_camera.svg"
                        alt="camera"
                      />
                    </Button>
                    <Button className="bg-light_blue-400_19 flex h-[45px] items-center justify-center p-[13px] rounded-[22px] w-[45px]">
                      <Img
                        className="h-[18px]"
                        src="images/img_group22.png"
                        alt="groupTwentyTwo"
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
                            alt="groupTwentySix"
                          />
                        </Button>
                      </div>
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase"
                        size="txtDosisBold32"
                      >
                        ZETEO
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
                        contact us
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
                      </>
                    </span>
                    <span className="text-blue_gray-200 font-jost text-left font-normal">
                      <>
                        Terms of Use
                        <br />
                        Privacy Policy
                        <br />
                        Security
                      </>
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[83px] w-[30%] md:w-full">
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
                            name="groupTwentyOne"
                            placeholder="Enter your email"
                            className="p-0 placeholder:text-white-A700_4c sm:pl-5 text-left text-sm text-white-A700_4c w-full"
                            wrapClassName="border border-solid border-white-A700_19 pb-3 pl-[29px] pr-3 pt-4 rounded-[25px] w-[78%]"
                            type="email"
                          ></Input>
                          <Button className="bg-light_blue-400_19 flex h-[50px] items-center justify-center p-[11px] rounded-[50%] w-[50px]">
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
                  zeteo{" "}
                </span>
                <span className="text-blue_gray-200 font-jost lowercase font-normal">
                  © Copyright-2023 All Rights Reserved.
                </span>
              </Text>
            </div>
          </div>
        </footer>
        <div className="absolute bg-gradient1  flex flex-col gap-[34px] inset-x-[0] items-center justify-start mx-auto p-[46px] md:px-5 rounded-[10px] top-[18%] w-[30%]">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
              size="txtDosisSemiBold30"
            >
              <span className="text-white-A700 font-dosis font-semibold">
                Login to{" "}
              </span>
              <span className="text-light_blue-400 font-dosis font-semibold">
                ZETEO
              </span>
            </Text>
            <Text
              className="text-base text-blue_gray-200 text-center"
              size="txtJostRomanRegular16"
            >
              <span className="text-blue_gray-200 font-jost font-normal">
                Don’t have an account?{" "}
              </span>
              <span className="text-light_blue-400 font-jost font-normal">
                Create a free account
              </span>
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mb-[3px] w-[99%] md:w-full">
            <div className="flex sm:flex-col flex-row font-jost gap-2.5 items-center justify-between w-full">
              <Input
                name="One"
                placeholder="Sign in with google"
                className="p-0 placeholder:text-blue_gray-200 sm:px-5 text-base text-blue_gray-200 text-left w-full"
                wrapClassName="border border-solid border-white-A700_19 flex sm:flex-1 px-[34px] py-[15px] rounded-[10px] sm:w-full"
                prefix={
                  <Img
                    className="mt-0.5 mb-auto h-[22px] mr-[9px]"
                    src="images/img_google.svg"
                    alt="google"
                  />
                }
              ></Input>
              <div className="border border-solid border-white-A700_19 flex flex-col items-center justify-end p-3.5 rounded-[10px]">
                <Img
                  className="h-[22px] mt-1 w-[22px]"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
              </div>
              <div className="border border-solid border-white-A700_19 flex flex-col items-center justify-end p-[13px] rounded-[10px]">
                <Img
                  className="h-6 mt-1"
                  src="images/img_settings.svg"
                  alt="settings"
                />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row font-jost gap-[18px] items-center justify-between mt-[25px] w-full">
              <Line className="bg-white-A700_19 h-px sm:mt-0 my-2.5 w-[33%]" />
              <Text
                className="text-[15px] text-blue_gray-200 text-center"
                size="txtJostRomanRegular15"
              >
                or Sign in with Email
              </Text>
              <Line className="bg-white-A700_19 h-px sm:mt-0 my-2.5 w-[33%]" />
            </div>
            <FloatingInput
              wrapClassName="placeholder:bg-gray-900 font-jost placeholder:left-[26px] sm:mx-0 p-0 sm:px-5 text-blue_gray-200_4c text-left text-sm placeholder:text-white-A700 placeholder:top-[0] w-full"
              className="font-jost p-0 sm:mx-0 sm:px-5 text-blue_gray-200_4c text-left text-sm w-full"
              name="email"
              labelClasses="bg-gray-900 left-[26px] top-[0] text-white-A700"
              focusedClasses="translate-y-[18px] scale-[1]"
              wrapperClasses="mt-7 sm:mx-0 w-full top-[0]"
              labelText="Your Email"
              defaultText="zeteo@gmail.com"
            ></FloatingInput>
            <FloatingInput
              wrapClassName="bg-transparent border border-solid border-white-A700_19 flex pl-[26px] pr-[35px] py-[17px] rounded-[10px] top-[0] w-full"
              className="font-jost p-0 placeholder:bg-gray-900 placeholder:left-[26px] placeholder:text-white-A700 placeholder:top-[0] sm:px-5 text-blue_gray-200_4c text-left text-sm w-full"
              name="min8character"
              labelClasses="bg-gray-900 left-[26px] top-[0] text-white-A700"
              focusedClasses="translate-y-[17px] scale-[1]"
              wrapperClasses="mt-[23px] sm:mx-0 w-full top-[0]"
              labelText="Password"
              defaultText="Min. 8 character"
              suffix={
                <Img
                  className="top-[0] my-auto"
                  src="images/img_eye.svg"
                  alt="eye"
                />
              }
            ></FloatingInput>
            <div className="flex flex-row font-jost items-start justify-between mt-[18px] w-full">
              <CheckBox
                className="text-[15px] text-blue_gray-200 text-left"
                inputClassName="border border-solid border-white-A700_19 h-[18px] mr-[5px] rounded w-[18px]"
                name="rememberme"
                id="rememberme"
                label="Remember me"
              ></CheckBox>
              <a
                href="javascript:"
                className="text-[15px] text-light_blue-400 text-right"
              >
                <Text size="txtJostRomanRegular15Lightblue400">
                  Forgot Password?
                </Text>
              </a>
            </div>
            <Button
              className="bg-light_blue-400 cursor-pointer flex items-center justify-center min-w-[470px] sm:min-w-full mt-[22px] px-[35px] py-3.5 rounded-[25px]"
              rightIcon={
                <div className="mt-2 mb-1 ml-[5px] bg-white-A700">
                  <Img src="images/img_arrowright.svg" alt="arrow_right" />
                </div>
              }
            >
              <div className="capitalize font-dosis font-semibold leading-[normal] sm:px-5 text-base text-right text-white-A700 tracking-[0.32px]">
                Login
              </div>
            </Button>
          </div>
        </div>
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-[100px] inset-x-[0] items-center justify-end mx-auto p-[31px] sm:px-5 top-[6%] w-full"
          style={{ backgroundImage: "url('images/img_group32.png')" }}
        >
          <div className="flex flex-row md:gap-10 items-start justify-between max-w-[1171px] mt-[5px] md:px-5 w-full">
            <Text
              className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtDosisMedium24"
            >
              <span className="text-white-A700 font-dosis text-left font-medium">
                Login Page{" "}
              </span>
              <span className="text-light_blue-400 font-dosis text-left font-medium">
                Zeteo
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
        <Header className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto md:px-5 top-[2%] w-full" />
      </div>
    </>
  );
};

export default LoginPagePage;
