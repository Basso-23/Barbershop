const ContainerTitle = ({ content, color }) => {
  return (
    <div className="flex flex-col">
      <div className=" mx-auto flex flex-col">
        <div className="flex mx-auto">
          <div className="w-[min(10vw,50px)] h-[1.6px] bg-[#F4AC07] my-auto glowLogo rounded-full"></div>
          <div className="rounded-full bg-[#F4AC07] w-[min(2vw,9px)] h-[min(2vw,9px)] mx-2 my-auto glowLogo"></div>
          <div className="w-[min(10vw,50px)] h-[1.6px] bg-[#F4AC07] my-auto glowLogo rounded-full"></div>
        </div>
        <div className="w-[min(40vw,225px)] h-[1.5px] bg-[#F4AC07] mx-auto mt-2 glowLogo rounded-full"></div>
      </div>

      <div
        className={` mx-auto ${color} overhold textShadow text-[min(10vw,50px)] my-1 tracking-wider text-center`}
      >
        {content}
      </div>

      <div className=" mx-auto flex flex-col">
        <div className="w-[min(40vw,225px)] h-[1.6px] bg-[#F4AC07] mx-auto glowLogo rounded-full"></div>
        <div className="flex mx-auto mt-2">
          <div className="w-[min(10vw,50px)] h-[1.5px] bg-[#F4AC07] my-auto glowLogo rounded-full"></div>
          <div className="rounded-full bg-[#F4AC07] w-[min(2vw,9px)] h-[min(2vw,9px)] mx-2 my-auto glowLogo"></div>
          <div className="w-[min(10vw,50px)] h-[1.5px] bg-[#F4AC07] my-auto glowLogo rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
export default ContainerTitle;
