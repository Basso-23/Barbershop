import React from "react";
import Tilt from "react-parallax-tilt";
import { MdFormatQuote } from "react-icons/md";
import { IoMdStar } from "react-icons/io";

const ContainerReview = ({ description, name, type }) => {
  return (
    <Tilt
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={800}
      transitionSpeed={1500}
      gyroscope={true}
      glareEnable={true}
      glareMaxOpacity={0.45}
      className=" w-auto h-auto border bg-transparent p-[7px] relative flex border-[#F4AC07]"
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
      <div className="m-auto w-auto min-h-[450px] border bg-transparent relative border-[#F4AC07]">
        {/* LEFT CIRCLE----------------------- */}
        <div className=" absolute h-[3px] w-[3px] rounded-full bg-[#F4AC07] left-0 fixedCenterY"></div>
        {/* RIGHT CIRCLE----------------------- */}
        <div className=" absolute h-[3px] w-[3px] rounded-full bg-[#F4AC07] right-0 fixedCenterY"></div>
        {/* TOP-LEFT SQUARE----------------------- */}
        <div className="border border-t-[#1C1C1C] border-l-[#1C1C1C] absolute h-2 w-2 top-0 left-0 ml-[-1px] mt-[-1px] bg-[#1C1C1C] border-[#F4AC07]"></div>
        {/* BOTTOM-LEFT SQUARE----------------------- */}
        <div className="border border-b-[#1C1C1C] border-l-[#1C1C1C] absolute h-2 w-2 left-0 bottom-0 ml-[-1px] mb-[-1px] bg-[#1C1C1C] border-[#F4AC07]"></div>
        {/* TOP-RIGHT SQUARE----------------------- */}
        <div className="border border-t-[#1C1C1C] border-r-[#1C1C1C] absolute h-2 w-2 top-0  right-0 mr-[-1px] mt-[-1px] bg-[#1C1C1C] border-[#F4AC07]"></div>
        {/* BOTTOM-RIGHT SQUARE----------------------- */}
        <div className="border border-b-[#1C1C1C] border-r-[#1C1C1C] absolute h-2 w-2 right-0 bottom-0 mr-[-1px] mb-[-1px] bg-[#1C1C1C] border-[#F4AC07]"></div>

        <div className="flex flex-col w-[min(80vw,325px)] text-center py-8 gap-4 px-8 cairo ">
          <MdFormatQuote className=" rotateReview mx-auto text-[min(10vw,40px)]" />

          <div className="text-[min(5vw,15.5px)] font-normal">
            {description}
          </div>

          <div className="flex text-[min(4.5vw,19px)] text-[#49B581] gap-1 mx-auto mt-12">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </div>

          <div className="  uppercase font-semibold text-[min(5vw,16px)] text-[#49B581] mt-2">
            {name}
          </div>
          <div className="mt-[-12px]  text-[min(4vw,15px)] text-[#b6b7b8] font-medium tracking-wide">
            {type}
          </div>
        </div>
      </div>
    </Tilt>
  );
};
export default ContainerReview;
