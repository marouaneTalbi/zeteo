import React from "react";

import { Button, Img, Line, Text } from "components";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-[7px] items-center justify-start md:mt-0 my-1 w-[12%] md:w-full">
          <div className="h-10 relative w-10">
            <div className="bg-light_blue-400 h-10 m-auto rounded-[50%] w-10"></div>
            <Button className="absolute bg-light_blue-400 flex h-[30px] inset-[0] items-center justify-center m-auto p-2 rounded-[50%] w-[30px]">
              <Img
                className="h-3.5"
                src="images/img_group26.png"
                alt="groupSixteen"
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

        <div style={{display:'flex', justifyContent:'space-around', width:'20%'}}>
          <div>
             <Link to="/homepage" style={{color:'white'}}>Home</Link>
          </div>
          <div>
            <Link to="/movieslistleftsidebarpage" style={{color:'white'}}>list of videos </Link>

          </div>
          <div>
            <Link to="/uploadownvideo" style={{color:'white'}}>Uploadown video</Link>
          </div>
        </div>

        <div className="flex md:flex-col flex-row gap-2.5 items-center justify-center md:ml-[0] ml-[246px] w-[30%] md:w-full">
          <div className="border border-gray-200_19 border-solid flex flex-row items-center justify-start rounded-[25px] w-[92%] md:w-full">
            <Text
              className="capitalize ml-[29px] text-sm text-white-A700"
              size="txtJostRegular14WhiteA700"
            >
              <span className="text-white-A700 font-jost text-left font-normal">
                All Category{" "}
              </span>
              <span className="text-white-A700_66 font-icofont text-left text-xs font-normal">
                
              </span>
            </Text>
            <Line className="bg-gray-200_19 h-12 ml-5 w-px" />
            <Text
              className="capitalize ml-[30px] text-blue_gray-300 text-sm"
              size="txtJostRegular14Bluegray300"
            >
              Search…
            </Text>
          </div>
          <Button className="bg-light_blue-400_19 flex h-[50px] items-center justify-center p-[7px] rounded-[50%] w-[50px]">
            <Img src="images/img_search.svg" alt="search_One" />
          </Button>
        </div>
        <Button className="bg-light_blue-400_19 flex h-[50px] items-center justify-center ml-2.5 md:ml-[0] p-[7px] rounded-[50%] w-[50px]">
          <Img src="images/img_menu.svg" alt="menu" />
        </Button>
        <div 
        className=" flex h-[50px] items-center justify-center ml-2.5 md:ml-[0] p-[7px] rounded-[50%] w-[50px]"style={{backgroundColor:'rgba(36 186 239 )'}}
        >
          <Img
            className="h-[25px] md:ml-[0] w-[25px]"
            src="images/bur.svg"
            alt="floatingicon"
          />
        </div>

      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
