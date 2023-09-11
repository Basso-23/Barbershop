import React from "react";
import Tilt from "react-parallax-tilt";

const ContainerBarbers = ({ image, name, position }) => {
  return (
    <Tilt
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={800}
      transitionSpeed={1500}
      gyroscope={true}
      glareEnable={true}
      glareMaxOpacity={0.45}
      className="parallax-effect-img w-auto h-auto border bg-transparent p-[7px] relative flex border-[#F4AC07]"
    >
      {/* LEFT CIRCLE----------------------- */}
      <div className=" absolute h-[5px] w-[5px] rounded-full bg-[#F4AC07] left-0 fixedCenterY ml-[-3.5px]"></div>
      {/* RIGHT CIRCLE----------------------- */}
      <div className=" absolute h-[5px] w-[5px] rounded-full bg-[#F4AC07] right-0 fixedCenterY mr-[-3.5px]"></div>
      {/* TOP-LEFT SQUARE----------------------- */}
      <div className="border border-t-[#1C1C1C] border-l-[#1C1C1C] absolute h-2 w-2 top-0 left-0 ml-[-1px] mt-[-1px] bg-[#1C1C1C] border-[#F4AC07]"></div>
      {/* BOTTOM-LEFT SQUARE----------------------- */}
      <div className="border border-b-[#1C1C1C] border-l-[#1C1C1C] absolute h-2 w-2 left-0 bottom-0 ml-[-1px] mb-[-1px] bg-[#1C1C1C] border-[#F4AC07]"></div>
      {/* TOP-RIGHT SQUARE----------------------- */}
      <div className="border border-t-[#1C1C1C] border-r-[#1C1C1C] absolute h-2 w-2 top-0  right-0 mr-[-1px] mt-[-1px] bg-[#1C1C1C] border-[#F4AC07]"></div>
      {/* BOTTOM-RIGHT SQUARE----------------------- */}
      <div className="border border-b-[#1C1C1C] border-r-[#1C1C1C] absolute h-2 w-2 right-0 bottom-0 mr-[-1px] mb-[-1px] bg-[#1C1C1C] border-[#F4AC07]"></div>

      {/* SQUARE OF THE CONTENT----------------------- */}
      <div className="m-auto w-auto h-[340px] border bg-transparent relative border-[#F4AC07] z-40">
        {/* LEFT CIRCLE----------------------- */}
        <div className=" absolute h-[3px] w-[3px] rounded-full bg-[#F4AC07] left-0 fixedCenterY"></div>
        {/* RIGHT CIRCLE----------------------- */}
        <div className=" absolute h-[3px] w-[3px] rounded-full bg-[#F4AC07] right-0 fixedCenterY"></div>
        {/* TOP-LEFT SQUARE----------------------- */}
        <div className="border border-t-[#1C1C1C] border-l-[#1C1C1C] absolute h-2 w-2 top-0 left-0 ml-[-1px] mt-[-1px] bg-[#1C1C1C] border-[#F4AC07]"></div>
        {/* BOTTOM-LEFT SQUARE----------------------- */}
        <div className="z-40 border border-b-[#1C1C1C] border-l-[#1C1C1C] absolute h-2 w-2 left-0 bottom-0 ml-[-1px] mb-[-1px] bg-[#1C1C1C] border-[#F4AC07]"></div>
        {/* TOP-RIGHT SQUARE----------------------- */}
        <div className="border border-t-[#1C1C1C] border-r-[#1C1C1C] absolute h-2 w-2 top-0  right-0 mr-[-1px] mt-[-1px] bg-[#1C1C1C] border-[#F4AC07]"></div>
        {/* BOTTOM-RIGHT SQUARE----------------------- */}
        <div className="z-40 border border-b-[#1C1C1C] border-r-[#1C1C1C] absolute h-2 w-2 right-0 bottom-0 mr-[-1px] mb-[-1px] bg-[#1C1C1C] border-[#F4AC07]"></div>

        {/* IMAGE AND DESCRIPTION DIV----------------------- */}
        <div className="w-full h-full bannerShadowBot3 absolute"></div>
        {/* IMAGE DIV----------------------- */}
        <div className="flex flex-col w-[min(80vw,245px)] h-full pt-10 px-3 ">
          <div className={`w-full h-full ${image} m-auto`}></div>
        </div>
        {/* DESCRIPTION DIV----------------------- */}
        <div className="absolute fixedCenterX bg-[#1C1C1C] px-6 text-center mt-[-17px]">
          <div className=" overhold tracking-wide text-[min(7vw,20px)]">
            {name}
          </div>
          <div className="cairo text-[#b6b7b8] text-[min(4vw,16px)] tracking-wide">
            {position}
          </div>
        </div>
      </div>
    </Tilt>
  );
};
export default ContainerBarbers;
