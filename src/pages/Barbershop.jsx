import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ContainerInfo from "@/components/ContainerInfo";
import ContainerTitle from "@/components/ContainerTitle";
import ContainerBarbers from "@/components/ContainerBarbers";
import ContainerReview from "@/components/ContainerReview";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiMail } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";
import { motion as m } from "framer-motion";

{
  /* Popular Haircuts Structure----------------------- */
}
const Circle = ({ hidden, bg }) => {
  return (
    <div
      className={`${hidden} ${bg} h-[min(25vw,128px)] w-[min(25vw,128px)] rounded-full my-auto`}
    ></div>
  );
};

{
  /* Prices Structure----------------------- */
}
const Prices = ({ name, price, description }) => {
  return (
    <div>
      <div className="justify-between flex ">
        {" "}
        <div className="overhold text-[min(7vw,20px)] mb-[-10px] paper pr-3">
          {name}
        </div>{" "}
        <div className=" cairo text-[min(4vw,17px)] font-semibold mb-[-10px] paper pl-3">
          {price}
        </div>
      </div>
      <div className="cairo text-[min(4vw,15px)] font-medium text-[#b6b7b8] border-dashed border-t-2 border-[#F4AC07] pt-2">
        {description}
      </div>
    </div>
  );
};

{
  /* Days Structure----------------------- */
}
const Date = ({ day, time }) => {
  return (
    <div className=" justify-between flex border-[#2C2C2C] border-b-[2.5px] py-2 font-semibold">
      <div>{day}:</div>
      <div>{time}</div>
    </div>
  );
};

const Barbershop = () => {
  const [language, setLanguage] = useState(true);

  {
    /* POPULAR HAIRCUTS CIRCLES FUNCTIONALITY-------------------------------------------------------------------------------------------- */
  }
  const page = ["1", "2", "3"];
  const delay = 5000;

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === page.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div
      id="/"
      className="min-h-screen w-full bg-[#121212] flex flex-col text-white"
    >
      {/* BANNER DIV-------------------------------------------------------------------------------------------- */}
      <div className="w-full md:h-[882px] h-screen banner">
        {/* HEADER DIV-------------------------------------------------------------------------------------------- */}
        <div className="h-full w-full bannerShadowTop flex flex-col">
          {/* NAVBAR DIV-------------------------------------------------------------------------------------------- */}
          <Navbar setLanguage={setLanguage} language={language} />

          {/* TITLE DIV-------------------------------------------------------------------------------------------- */}
          <div className=" flex flex-col absolute md:min-h-[875px] min-h-screen w-full">
            <m.div
              initial={{ y: "200px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.1,
                type: "spring",
              }}
              className=" m-auto text-center"
            >
              <div className="text-[min(14vw,115px)] overhold">
                {language ? <div>BEST BARBER</div> : <div>LA MEJOR</div>}
              </div>
              <div className="text-[min(14vw,115px)] text-[#F4AC07] overhold md:mt-[-45px] mt-[-25px]">
                {language ? <div>SHOP</div> : <div>BARBERIA</div>}
              </div>
              <div className="text-[min(4.5vw,30px)] cairo font-bold md:mt-[-25px] mt-[-5px]">
                {language ? (
                  <div>in Panama City</div>
                ) : (
                  <div>en Ciudad de Panamá</div>
                )}
              </div>
              {/* BUTTON DIV-------------------------------------------------------------------------------------------- */}
              <div className=" rounded-sm flex mt-8">
                <Link
                  to="contactSpy"
                  smooth={true}
                  offset={-150}
                  duration={700}
                  className="cairo cursor-pointer text-[min(3.5vw,12px)] m-auto font-bold px-10 py-3 bg-[#000000a1] border-[#F4AC07] border-2 hover:bg-[#F4AC07] hover:text-black transition-all rounded-sm"
                >
                  {language ? (
                    <div>BOOK AN APPOINTMENT</div>
                  ) : (
                    <div>RESERVAR UNA CITA</div>
                  )}
                </Link>
              </div>
            </m.div>
          </div>
        </div>
      </div>

      {/* INFO DIV-------------------------------------------------------------------------------------------- */}
      <div className="bg-[#121212] w-full lg:justify-evenly lg:flex lg:flex-row flex flex-col gap-y-16 py-10 cairo font-bold xl:px-40">
        <m.div
          initial={{ y: "200px", opacity: 0 }}
          animate={{ y: "0px", opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.1,
            type: "spring",
          }}
          className="flex mx-auto"
        >
          {/* ICON DIV-------------------------------------------------------------------------------------------- */}
          <div className=" mr-6 mt-1 text-[#F4AC07]">
            <FaWhatsapp className="text-[min(8vw,30px)]" />
          </div>
          {/* DESCRIPTION DIV-------------------------------------------------------------------------------------------- */}
          <div>
            <div className="text-[min(5vw,16px)]">+507 6203-5670</div>
            <div className="text-[min(4vw,15px)] text-[#818084] font-semibold ">
              {language ? (
                <div>Customer Care</div>
              ) : (
                <div>Atención al Cliente</div>
              )}
            </div>
          </div>
        </m.div>
        <m.div
          initial={{ y: "200px", opacity: 0 }}
          animate={{ y: "0px", opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
            type: "spring",
          }}
          className="flex mx-auto"
        >
          {/* ICON DIV-------------------------------------------------------------------------------------------- */}
          <div className=" mr-6 mt-1 text-[#F4AC07]">
            <FaMapMarkedAlt className="text-[min(8vw,30px)]" />
          </div>
          {/* DESCRIPTION DIV-------------------------------------------------------------------------------------------- */}
          <div>
            <div className="text-[min(5vw,16px)]">Condado del Rey</div>
            <div className="text-[min(4vw,15px)] text-[#818084] font-semibold ">
              {language ? <div>Location</div> : <div>Ubicación</div>}
            </div>
          </div>
        </m.div>
        <m.div
          initial={{ y: "200px", opacity: 0 }}
          animate={{ y: "0px", opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.3,
            type: "spring",
          }}
          className="flex mx-auto"
        >
          {/* ICON DIV-------------------------------------------------------------------------------------------- */}
          <div className=" mr-6 mt-1 text-[#F4AC07]">
            <FiClock className="text-[min(8vw,30px)]" />
          </div>
          {/* DESCRIPTION DIV-------------------------------------------------------------------------------------------- */}
          <div>
            <div className="text-[min(5vw,16px)]">
              {language ? (
                <div>Open Monday to Sunday</div>
              ) : (
                <div>Abierto de Lunes a Domingo</div>
              )}
            </div>
            <div className="text-[min(4vw,15px)] text-[#818084] font-semibold ">
              <div>10 am - 5 pm </div>
            </div>
          </div>
        </m.div>
      </div>

      {/* MAIN DIV-------------------------------------------------------------------------------------------- */}
      <div className="bg-[#1C1C1C] w-full flex flex-col">
        {/* ABOUT DIV-------------------------------------------------------------------------------------------- */}
        <div
          id="about"
          className="w-full flex flex-col py-20 xl:w-[1265px] mx-auto md:px-16 px-5"
        >
          {/* POPULAR HAIRCUTS DIV-------------------------------------------------------------------------------------------- */}
          <div className="slideshow flex flex-col">
            <div className=" mx-auto cairo font-semibold text-[min(4vw,15px)] sm:mb-6 mb-0 tracking-wider">
              {language ? (
                <div>POPULAR HAIRCUTS FOR MEN</div>
              ) : (
                <div>CORTES DE CABELLO POPULARES</div>
              )}
            </div>
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              <div className="slide h-48 w-full relative">
                <div className=" absolute fixedCenterXnY flex justify-between w-full lg:px-24 md:px-14 px-1">
                  <Circle bg="popular1" hidden="" />
                  <Circle bg="popular2" hidden="" />
                  <Circle bg="popular3" hidden="" />
                  <Circle bg="popular4" hidden="lg:flex hidden" />
                </div>
              </div>
              <div className="slide h-48 w-full relative">
                <div className=" absolute fixedCenterXnY flex justify-between w-full lg:px-24 md:px-14 px-1">
                  <Circle bg="popular5" hidden="" />
                  <Circle bg="popular6" hidden="" />
                  <Circle bg="popular7" hidden="" />
                  <Circle bg="popular8" hidden="lg:flex hidden" />
                </div>
              </div>
              <div className="slide h-48 w-full relative">
                <div className=" absolute fixedCenterXnY flex justify-between w-full lg:px-24 md:px-14 px-1">
                  <Circle bg="popular9" hidden="" />
                  <Circle bg="popular10" hidden="" />
                  <Circle bg="popular11" hidden="" />
                  <Circle bg="popular12" hidden="lg:flex hidden" />
                </div>
              </div>
            </div>

            <div className="slideshowDots">
              {page.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* OUR STORY DIV-------------------------------------------------------------------------------------------- */}
          <div className=" w-full mt-20">
            {/* POINT DIV-------------------------------------------------------------------------------------------- */}
            <div className="flex ">
              <div className="point w-[min(5vw,18px)] h-[min(5vw,18px)] my-auto mr-2 "></div>
              <div className="cairo font-bold text-[#F4AC07] text-[min(5vw,18px)]">
                {language ? <div>OUR STORY</div> : <div>NUESTRA HISTORIA</div>}
              </div>
            </div>
            {/* TITLLE DIV-------------------------------------------------------------------------------------------- */}
            <div className="flex relative">
              <div className="overhold textShadow text-[min(15vw,50px)] z-40 bg-[#1C1C1C] pr-4 tracking-wide">
                {language ? <div>About us </div> : <div>Nosotros</div>}
              </div>
              <div className=" w-full h-[2px] bg-[#F4AC07] absolute mt-14"></div>
            </div>
            {/* PARAGRAPH DIV-------------------------------------------------------------------------------------------- */}
            <div className=" grid sm:grid-cols-2 gap-10 gap-x-20 mt-6 xl:mr-40 font-normal cairo text-[min(5vw,16px)]">
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
          <div id="aboutSpy"></div>
        </div>

        {/* PICTURES DIV-------------------------------------------------------------------------------------------- */}
        <div className="w-full h-[700px] mt-20 relative">
          <div className="w-full h-full grid xl:grid-cols-4 lg:grid-cols-2 grid-rows-2">
            <div className="w-full h-full bannerShadowBot2 absolute mt-[2px]"></div>
            <div className="w-full h-full bannerShadowTop2 absolute mt-[-2px]"></div>
            <div className="picture2 w-full h-full"></div>
            <div className="picture6 w-full h-full"></div>
            <div className="picture3 w-full h-full"></div>
            <div className="picture4 w-full h-full"></div>
            <div className="picture8 w-full h-full"></div>
            <div className="picture7 w-full h-full"></div>
            <div className="picture1 w-full h-full"></div>
            <div className="picture5 w-full h-full"></div>
          </div>
        </div>

        {/* NUMBERS DIV-------------------------------------------------------------------------------------------- */}
        <div className="flex sm:gap-16 gap-9 mx-auto mb-20 mt-10 text-center cairo font-bold flex-wrap justify-evenly text-[min(9vw,40px)]">
          <div>
            <div className="text-[#49B581]">2003</div>
            <div className="text-[min(4vw,17px)] font-normal">
              {language ? (
                <div>Established Since</div>
              ) : (
                <div>Establecido Desde</div>
              )}
            </div>
          </div>
          <div>
            <div className="text-[#49B581]">+7</div>
            <div className="text-[min(4vw,17px)] font-normal">
              {language ? (
                <div>Affiliated Brands</div>
              ) : (
                <div>Marcas Afiliadas</div>
              )}
            </div>
          </div>
          <div>
            <div className="text-[#49B581]">12</div>
            <div className="text-[min(4vw,17px)] font-normal">
              {language ? (
                <div>Professional Barbers</div>
              ) : (
                <div>Barberos Profesionales</div>
              )}
            </div>
          </div>
          <div>
            <div className="text-[#49B581]">21</div>
            <div className="text-[min(4vw,17px)] font-normal">
              {language ? (
                <div>Years Experience </div>
              ) : (
                <div>Años de Experiencia</div>
              )}
            </div>
          </div>
        </div>

        {/* CARDS DIV-------------------------------------------------------------------------------------------- */}
        <div className=" flex justify-center gap-10 mt-16 mb-24 flex-wrap px-10">
          <ContainerInfo
            title={language ? "HAIRCUT" : "CORTE DE PELO"}
            description="Lorem Ipsum is simply dummy text of the printing."
            image="haircut"
          />
          <ContainerInfo
            title={language ? "LONG CUT" : "CORTE LARGO"}
            description="Lorem Ipsum is simply dummy text of the printing."
            image="long"
          />
          <ContainerInfo
            title={language ? "SKIN FADE" : "CORTE DEGRADADO"}
            description="Lorem Ipsum is simply dummy text of the printing."
            image="bread"
          />
          <ContainerInfo
            title={language ? "BEARD TRIM" : "CORTE DE BARBA"}
            description="Lorem Ipsum is simply dummy text of the printing."
            image="skin"
          />
        </div>

        {/* BARBER SERVICES DIV-------------------------------------------------------------------------------------------- */}
        <div id="services" className=" w-full paper relative">
          {/* BOT ARROW DIV-------------------------------------------------------------------------------------------- */}
          <div className="w-[100%] h-[3px] bg-[#1C1C1C] bottom-0 absolute mb-[-2px]"></div>
          <div className="w-[100%] h-[3px] bg-[#1C1C1C] top-0 absolute mt-[-2px]"></div>
          <div className="elementor-shape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              className="shapeSvg mt-[0px]"
            >
              <path d="M194,99c186.7,0.7,305-78.3,306-97.2c1,18.9,119.3,97.9,306,97.2c114.3-0.3,194,0.3,194,0.3s0-91.7,0-100c0,0,0,0,0-0 L0,0v99.3C0,99.3,79.7,98.7,194,99z"></path>
            </svg>{" "}
          </div>

          {/* TOP ARROW DIV-------------------------------------------------------------------------------------------- */}
          <div className="elementor-shape2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              className="shapeSvg mt-[50px]"
            >
              <path
                className=" "
                d="M806,94.7C619.5,90,500,20.3,500,1.7c-1,18.6-117.5,88.3-306,93C92,97.2,0,97.9,0,97.9v-0l0,0v2.3h1000v-2.3 C1000,97.7,920.3,97.6,806,94.7z M350,65.1L350,65.1L350,65.1L350,65.1z"
              ></path>
            </svg>{" "}
          </div>

          {/* CONTENT DIV-------------------------------------------------------------------------------------------- */}
          <div className=" w-full h-full flex flex-col">
            {/* TITLE DIV-------------------------------------------------------------------------------------------- */}
            <div className="flex flex-col sm:mt-36 mt-28">
              <ContainerTitle
                content={
                  language ? "BARBERSHOP SERVICES" : "SERVICIOS DE LA BARBERIA"
                }
                color="text-black"
              />
            </div>

            {/* LIST OF PRICES DIV-------------------------------------------------------------------------------------------- */}
            <div className=" grid lg:grid-cols-2 grid-cols-1 text-black xl:gap-0 gap-x-20 gap-y-12 xl:px-40 lg:px-16 sm:px-12 px-5 mt-24">
              {/* LEFT PRICES DIV-------------------------------------------------------------------------------------------- */}
              <div
                id="servicesSpy"
                className="flex flex-col w-full gap-12 mb-0 lg:mb-40 xl:px-20"
              >
                <Prices
                  name={
                    language ? "Simple Haircut" : "Corte de Cabello Sencillo"
                  }
                  price="$20"
                />
                <Prices
                  name={language ? "Fade Cut" : "Corte Degradado"}
                  price="$25"
                />
                <Prices
                  name={language ? "Long Cut" : "Corte Largo"}
                  price="$10"
                />
                <Prices
                  name={language ? "Hair Dye" : "Tinte de Cabello"}
                  price="$15"
                />
              </div>

              {/* RIGHT PRICES DIV-------------------------------------------------------------------------------------------- */}
              <div className="flex flex-col w-full gap-12 mb-40 xl:px-20">
                <Prices
                  name={language ? "Face Shave" : "Afeitado"}
                  price="$10"
                />
                <Prices
                  name={language ? "Mustache Trim" : "Recorte de Bigote"}
                  price="$10"
                />
                <Prices
                  name={language ? "Hair Dryer" : "Secado de Cabello"}
                  price="$36"
                />
                <Prices
                  name={language ? "Hair Washing" : "Lavado de Cabello"}
                  price="$18"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MEET BARBERS DIV-------------------------------------------------------------------------------------------- */}
        <div>
          {/* TITLE DIV-------------------------------------------------------------------------------------------- */}
          <div className="flex flex-col sm:mt-20 mt-16 ">
            <ContainerTitle
              content={language ? "MEET BARBERS" : "CONOCE A LOS BARBEROS"}
              color="text-white"
            />
          </div>

          {/* BARBERS CARDS DIV-------------------------------------------------------------------------------------------- */}
          <div id="barbersSpy" className="flex mt-5 mx-4 sm:px-10 ">
            <div className="mx-auto">
              <div className="flex justify-center gap-28 mt-24 flex-wrap border-[#2C2C2C] border-b-[3px] pb-48">
                <ContainerBarbers
                  name="James"
                  position={language ? "Owner" : "Dueño"}
                  image="barber1"
                />
                <ContainerBarbers
                  name="David"
                  position={language ? "Barber" : "Barbero"}
                  image="barber2"
                />
                <ContainerBarbers
                  name="Hector"
                  position={language ? "Barber" : "Barbero"}
                  image="barber3"
                />
                <ContainerBarbers
                  name="Ron"
                  position={language ? "Stylist" : "Estilista"}
                  image="barber4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* REVIEWS DIV-------------------------------------------------------------------------------------------- */}
        <div id="reviewsSpy">
          {/* TITLE DIV-------------------------------------------------------------------------------------------- */}
          <div className="flex flex-col sm:mt-24 mt-20 ">
            <ContainerTitle
              content={language ? "REVIEWS" : "COMENTARIOS"}
              color="text-white"
            />
          </div>
          {/* REVIEW CARDS DIV-------------------------------------------------------------------------------------------- */}
          <div className="flex mt-5 mx-4 sm:px-10">
            <div className="mx-auto">
              <div className=" flex justify-center gap-10 mt-16 mb-24 flex-wrap border-[#2C2C2C] border-b-[3px] pb-64 relative">
                <ContainerReview
                  name="Freddie"
                  description=" Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley specimen book."
                  type={language ? "Customer" : "Cliente"}
                />
                <ContainerReview
                  name="Emma"
                  description=" Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley specimen book."
                  type={language ? "Customer" : "Cliente"}
                />
                <ContainerReview
                  name="Robert"
                  description=" Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley specimen book."
                  type={language ? "Customer" : "Cliente"}
                />

                <div className=" absolute bottom-0 flex mb-[125px]">
                  <div className="font-semibold cairo text-[min(5vw,15.5px)]">
                    {language ? (
                      <div>Based of 5,281 reviews </div>
                    ) : (
                      <div>Basado en 5,281 comentarios</div>
                    )}
                  </div>
                </div>

                {/* RATING DIV-------------------------------------------------------------------------------------------- */}
                <div className="text-[#b6b7b8] absolute bottom-0 flex mb-40">
                  <div className="flex text-[min(5vw,20px)] text-[#F7B849] gap-1 my-auto mr-2">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </div>
                  <div className=" flex flex-wrap cairo text-[min(5vw,15.5px)]">
                    {" "}
                    <div className=" font-medium mr-1">4.5</div>
                    <div className="font-semibold text-white">
                      {language ? <div>out of 5</div> : <div>de 5</div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT US DIV-------------------------------------------------------------------------------------------- */}
        <div
          id="contactSpy"
          className="w-full flex flex-col xl:w-[1265px] mx-auto sm:px-16 px-6 mb-32"
        >
          {/* TITLE DIV-------------------------------------------------------------------------------------------- */}
          <div className=" w-full ">
            {/* POINT DIV-------------------------------------------------------------------------------------------- */}
            <div className="flex ">
              <div className="point w-[min(5vw,18px)] h-[min(5vw,18px)] my-auto mr-2 "></div>
              <div className="cairo font-bold text-[#F4AC07] text-[min(5vw,18px)] ">
                {language ? <div>CONTACT US</div> : <div>CONTÁCTANOS</div>}
              </div>
            </div>

            {/* CONTENT DIV-------------------------------------------------------------------------------------------- */}
            <div className=" grid xl:grid-cols-2 grid-cols-1 flex-wrap mt-6 font-normal cairo text-[min(5vw,16px)] ">
              {/* LEFT CONTENT DIV-------------------------------------------------------------------------------------------- */}
              <div className=" overhold text-[min(10vw,50px)] w-full">
                <div className=" tracking-wide mt-[-15px]">
                  {language ? (
                    <div>PANAMA CITY,</div>
                  ) : (
                    <div>CIUDADE PANAMA,</div>
                  )}{" "}
                </div>
                <div className="tracking-wide mt-[-15px]">CONDADO DEL REY</div>

                <div className="grid md:grid-cols-2 grid-cols-1 cairo text-[min(5vw,15.5px)] mt-6">
                  {/* LEFT INFO DIV-------------------------------------------------------------------------------------------- */}
                  <div className="md:ml-6 flex flex-col gap-8">
                    <div className="flex">
                      {/* ICON DIV-------------------------------------------------------------------------------------------- */}
                      <div className=" mr-6 mt-1 text-[#F4AC07]">
                        <FaMapMarkedAlt className="text-[min(8vw,30px)]" />
                      </div>
                      {/* DESCRIPTION DIV-------------------------------------------------------------------------------------------- */}
                      <div>
                        <div className="text-[min(5vw,16px)] font-semibold">
                          {language ? (
                            <div> Ave. Centennial, Panama City</div>
                          ) : (
                            <div> Ave. Centennial, Ciudad de Panamá</div>
                          )}
                        </div>
                        <div className="text-[min(4vw,15px)] text-[#818084] font-semibold ">
                          {language ? (
                            <div>Location</div>
                          ) : (
                            <div> Ubicación</div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      {/* ICON DIV-------------------------------------------------------------------------------------------- */}
                      <div className=" mr-6 mt-1 text-[#F4AC07]">
                        <FaWhatsapp className="text-[min(8vw,30px)]" />
                      </div>
                      {/* DESCRIPTION DIV-------------------------------------------------------------------------------------------- */}
                      <div>
                        <div className="text-[min(5vw,16px)] font-semibold">
                          +507 6203-5670
                        </div>
                        <div className="text-[min(4vw,15px)] text-[#818084] font-semibold ">
                          {language ? (
                            <div>Customer Care </div>
                          ) : (
                            <div> Atención al Cliente</div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      {/* ICON DIV-------------------------------------------------------------------------------------------- */}
                      <div className=" mr-6 mt-1 text-[#F4AC07]">
                        <FiMail className="text-[min(8vw,30px)]" />
                      </div>
                      {/* DESCRIPTION DIV-------------------------------------------------------------------------------------------- */}
                      <div>
                        <div className="text-[min(5vw,16px)] font-semibold">
                          info@barbershop.com
                        </div>
                        <div className="text-[min(4vw,15px)] text-[#818084] font-semibold ">
                          {language ? <div> Mail</div> : <div> Correo</div>}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* RIGHT INFO DIV-------------------------------------------------------------------------------------------- */}
                  <div className=" gap-2 flex flex-col md:ml-8 md:mt-0 mt-6">
                    <Date day={language ? "Mon" : "Lun"} time="10 am - 8 pm" />
                    <Date day={language ? "Tues" : "Mar"} time="10 am - 8 pm" />
                    <Date
                      day={language ? "Wed" : "Miérc"}
                      time="10 am - 8 pm"
                    />
                    <Date
                      day={language ? "Thurs" : "Juev"}
                      time="10 am - 8 pm"
                    />
                    <Date day={language ? "Fri" : "Vier"} time="10 am - 8 pm" />
                    <Date day={language ? "Sat" : "Sáb"} time="10 am - 5 pm" />
                    <Date day={language ? "Sun" : "Dom"} time="10 am - 5 pm" />
                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT DIV-------------------------------------------------------------------------------------------- */}
              <div className="w-full map ml-6"></div>
            </div>
          </div>
        </div>

        {/* FOOTER DIV-------------------------------------------------------------------------------------------- */}
        <div className=" bg-[#121212] w-full relative flex flex-col">
          {/* TOP ARROW DIV-------------------------------------------------------------------------------------------- */}
          <div className="elementor-shape2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              className="shapeSvg mt-[50px]"
            >
              <path
                className=" "
                d="M806,94.7C619.5,90,500,20.3,500,1.7c-1,18.6-117.5,88.3-306,93C92,97.2,0,97.9,0,97.9v-0l0,0v2.3h1000v-2.3 C1000,97.7,920.3,97.6,806,94.7z M350,65.1L350,65.1L350,65.1L350,65.1z"
              ></path>
            </svg>{" "}
          </div>

          {/* CONTENT DIV-------------------------------------------------------------------------------------------- */}
          <div className=" flex flex-col">
            {/* LIST DIV-------------------------------------------------------------------------------------------- */}
            <div className=" justify-center flex sm:gap-16 gap-9 py-2 cairo flex-wrap text-[min(4vw,15.5px)] font-medium text-[#F4AC07] mt-28 px-6">
              <Link
                to="about"
                smooth={true}
                offset={300}
                duration={700}
                className=" tracking-wide cursor-pointer"
              >
                {language ? <div> About</div> : <div> Nosotros</div>}
              </Link>
              <Link
                to="services"
                smooth={true}
                offset={-75}
                duration={700}
                className=" tracking-wide cursor-pointer"
              >
                {language ? <div> Services</div> : <div> Servicios</div>}
              </Link>
              <Link
                to="barbersSpy"
                smooth={true}
                offset={-275}
                duration={700}
                className=" tracking-wide cursor-pointer"
              >
                {language ? <div> Barbers</div> : <div> Barberos</div>}
              </Link>
              <Link
                to="reviewsSpy"
                smooth={true}
                offset={-25}
                duration={700}
                className=" tracking-wide cursor-pointer"
              >
                {language ? <div> Reviews</div> : <div> Comentarios</div>}
              </Link>
              <Link
                to="contactSpy"
                smooth={true}
                offset={-150}
                duration={700}
                className=" tracking-wide cursor-pointer"
              >
                {language ? <div> Contact us </div> : <div> Contáctanos</div>}
              </Link>
            </div>

            {/* PICTURES AND IG DIV-------------------------------------------------------------------------------------------- */}
            <div className=" flex gap-2 w-full flex-wrap mx-auto justify-center mt-14 relative">
              <div className=" sm:w-52 sm:h-36 w-[40vw] h-[30vw] picture1">
                <div className="w-full h-full bg-[#000000b8]"></div>
              </div>
              <div className=" sm:w-52 sm:h-36 w-[40vw] h-[30vw] picture2">
                <div className="w-full h-full bg-[#000000b8]"></div>
              </div>
              <div className=" w-52 h-36  md:flex hidden picture3">
                <div className="w-full h-full bg-[#000000b8]"></div>
              </div>
              <div className=" w-52 h-36 lg:flex hidden picture4">
                <div className="w-full h-full bg-[#000000b8]"></div>
              </div>
              <div className=" w-52 h-36 xl:flex hidden picture5">
                <div className="w-full h-full bg-[#000000b8]"></div>
              </div>

              {/* IG BUTTON-------------------------------------------------------------------------------------------- */}
              <div className=" rounded-sm absolute fixedCenterY transition-all bg-[#49B581] hover:bg-[#00ff84] text-black cairo tracking-wide font-semibold py-3 px-8 flex cursor-pointer">
                <BsInstagram className=" my-auto text-[min(9vw,20px)] mr-3" />{" "}
                <div className=" my-auto text-[min(4vw,12px)]">INSTAGRAM</div>
              </div>
            </div>
          </div>

          <div className=" py-4 text-center cairo text-[min(3vw,13px)] font-medium text-[#ffffff] border-[#2C2C2C] border-t-[2.5px] mt-20">
            {language ? (
              <div> ©2023 CarlosBaso. All rights reserved. </div>
            ) : (
              <div> ©2023 CarlosBaso. Todos los derechos reservados.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Barbershop;
