import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";

const ActeursRoundComponent = () => {
  return (
    <div className=" bg-gradient1  flex flex-col inset-[0] items-center justify-center m-auto p-[110px] md:px-10 sm:px-5 w-full">






    <div className="flex flex-col items-center justify-start max-w-[1170px] mt-[3px] w-full">
      <div className="flex flex-col gap-[43px] items-center justify-start w-full" >
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
          <Line className="bg-light_blue-400 h-[18px] md:h-[3px] md:mt-0 my-1.5 w-[3px] md:w-full" />
          <Text
            className="capitalize md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            size="txtDosisSemiBold24"
          >
            Characters
          </Text>
          <Line className="bg-white-A700_19 h-px md:ml-[0] ml-[54px] md:mt-0 my-3.5 w-[6%]" />
          <Img
            className="h-[18px] md:ml-[0] ml-[901px]"
            src="images/img_maximize.svg"
            alt="maximize_One"
          />
        </div>
        <List
          className="sm:flex-col flex-row font-jost gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-full"
          orientation="horizontal"
        >


         
        </List>
      </div>
     
    </div>
    <div style={{display:'flex', justifyContent: 'space-between', width:'100%'}} >
      <div className="flex flex-1 flex-col gap-[22px] items-center justify-start w-full">
        {/* <div className="bg-white-A700 h-[170px] rounded-[50%] w-[170px]"></div> */}
        <Img
          style={{
            objectFit: 'cover',
            width: 170,
            height: 170,
            borderRadius:100
          }}
          src="images/aur.jpg"
          alt="vector_Two"
        />

        <Text
          className="capitalize leading-[30.00px] text-base text-center text-white-A700"
          size="txtJostRegular16WhiteA700"
        >
          <span className="text-white-A700 font-dosis text-lg font-bold">
            <>
              aurelie casse 
              <br />
            </>
          </span>
          <span className="text-blue_gray-200 font-jost font-normal">
            (journaliste)
          </span>
        </Text>
      </div>
      <div className="flex flex-1 flex-col gap-[22px] items-center justify-start w-full">
        {/* <div className="bg-white-A700 h-[170px] rounded-[50%] w-[170px]"></div> */}
        <Img
          style={{
            objectFit: 'cover',
            width: 170,
            height: 170,
            borderRadius:100
          }}
          src="images/chris.jpg"
          alt="vector_Two"
        />
        <Text
          className="capitalize leading-[30.00px] text-base text-center text-white-A700"
          size="txtJostRegular16WhiteA700"
        >
          <span className="text-white-A700 font-dosis text-lg font-bold">
            <>
            Christophe JAKUBYSZYN
              <br />
            </>
          </span>
          <span className="text-blue_gray-200 font-jost font-normal">
            (journalist)
          </span>
        </Text>
      </div>

      <div className="flex flex-1 flex-col gap-[22px] items-center justify-start w-full">
        <Img
          style={{
            objectFit: 'cover',
            width: 170,
            height: 170,
            borderRadius:100
          }}
          src="images/lau.jpeg"
          alt="vector_Two"
        />
        <Text
          className="capitalize leading-[30.00px] text-base text-center text-white-A700"
          size="txtJostRegular16WhiteA700"
        >
          <span className="text-white-A700 font-dosis text-lg font-bold">
            <>
            laure closier
              <br />
            </>
          </span>
          <span className="text-blue_gray-200 font-jost font-normal">
            (
          </span>
          <span className="text-white-A700 font-jost font-normal">
          journaliste

          </span>
          <span className="text-blue_gray-200 font-jost font-normal">
            )
          </span>
        </Text>
      </div>
      <div className="flex flex-1 flex-col gap-[22px] items-center justify-start w-full">
        <Img
          style={{
            objectFit: 'cover',
            width: 170,
            height: 170,
            borderRadius:100
          }}
          src="images/demel.jpeg"
          alt="vector_Two"
        />
        <Text
          className="capitalize leading-[30.00px] text-base text-center text-white-A700"
          size="txtJostRegular16WhiteA700"
        >
          <span className="text-white-A700 font-dosis text-lg font-bold">
            <>
            apolline de malherbe
              <br />
            </>
          </span>
          <span className="text-blue_gray-200 font-jost font-normal">
            (
          </span>
          <span className="text-white-A700 font-jost font-normal">
          journaliste
          </span>
          <span className="text-blue_gray-200 font-jost font-normal">
            )
          </span>
        </Text>
      </div>
      <div className="flex flex-1 flex-col gap-[22px] items-center justify-start w-full">
        <Img
          style={{
            objectFit: 'cover',
            width: 170,
            height: 170,
            borderRadius:100
          }}
          src="images/pa.jpg"
          alt="vector_Two"
        />
        <Text
          className="capitalize leading-[30.00px] text-base text-center text-white-A700"
          size="txtJostRegular16WhiteA700"
        >
          <span className="text-white-A700 font-dosis text-lg font-bold">
            <>
              Pauline Ducamp
              <br />
            </>
          </span>
          <span className="text-blue_gray-200 font-jost font-normal">
            (
          </span>
          <span className="text-white-A700 font-jost font-normal">
          journaliste
          </span>
          <span className="text-blue_gray-200 font-jost font-normal">
            )
          </span>
        </Text>
      </div>
      </div>
  </div>
  )

}

export default ActeursRoundComponent;