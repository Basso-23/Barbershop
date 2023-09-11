import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { BsScissors } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-scroll";
import { motion as m } from "framer-motion";

import Scrollspy from "react-scrollspy";

const Navbar = ({ setLanguage, language }) => {
  const [scroll, setScroll] = useState(true);
  const [toggle, setToggle] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  return (
    <div>
      {/* NAVBAR DIV-------------------------------------------------------------------------------------------- */}
      <div
        className={
          scroll
            ? " transition-colors w-full xl:flex justify-center hidden gap-x-36 py-6 cairo font-bold text-[min(3.5vw,14px)] fixed z-50"
            : " transition-colors w-full xl:flex justify-center hidden gap-x-36 py-6 cairo font-bold text-[min(3.5vw,14px)] fixed z-50 bg-[#131313]"
        }
      >
        {/* LOGO DIV-------------------------------------------------------------------------------------------- */}
        <Link
          to="/"
          smooth={true}
          duration={700}
          className="absolute left-0 flex ml-6 overhold text-[min(4vw,16px)] fixedCenterY text-[#ffb300] cursor-pointer"
        >
          <BsScissors className="rotateScisssors text-[min(10vw,35px)]" />{" "}
          <div className=" mt-2 ml-3">BARBERSHOP</div>
        </Link>

        {/* LIST DIV-------------------------------------------------------------------------------------------- */}
        <Scrollspy
          offset={-151}
          items={[
            "aboutSpy",
            "servicesSpy",
            "barbersSpy",
            "reviewsSpy",
            "contactSpy",
          ]}
          currentClassName="is-current"
          className=" justify-center flex gap-32 py-2"
        >
          <Link
            to="about"
            smooth={true}
            offset={300}
            duration={700}
            className="my-auto link link--metis px-1"
          >
            <m.div
              initial={{ y: "-200px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.1,
                type: "spring",
              }}
            >
              {language ? <div>ABOUT</div> : <div>NOSOTROS</div>}
            </m.div>
          </Link>

          <Link
            to="services"
            smooth={true}
            offset={-75}
            duration={700}
            className="my-auto link link--metis px-1"
          >
            <m.div
              initial={{ y: "-200px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.2,
                type: "spring",
              }}
            >
              {language ? <div>SERVICES</div> : <div>SERVICIOS</div>}
            </m.div>
          </Link>

          <Link
            to="barbersSpy"
            smooth={true}
            offset={-275}
            duration={700}
            className="my-auto link link--metis px-1"
          >
            <m.div
              initial={{ y: "-200px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.3,
                type: "spring",
              }}
            >
              {language ? <div>BARBERS</div> : <div>BARBEROS</div>}
            </m.div>
          </Link>
          <Link
            to="reviewsSpy"
            smooth={true}
            offset={-25}
            duration={700}
            className="my-auto link link--metis px-1"
          >
            <m.div
              initial={{ y: "-200px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.4,
                type: "spring",
              }}
            >
              {language ? <div>REVIEWS</div> : <div>COMENTARIOS</div>}
            </m.div>
          </Link>
          <Link
            to="contactSpy"
            smooth={true}
            offset={-150}
            duration={700}
            className="my-auto link link--metis px-1"
          >
            <m.div
              initial={{ y: "-200px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.5,
                type: "spring",
              }}
            >
              {language ? <div>CONTACT US</div> : <div>CONTÁCTANOS</div>}
            </m.div>
          </Link>
        </Scrollspy>

        {/* LANGUAGES DIV-------------------------------------------------------------------------------------------- */}
        <div className="absolute right-0 flex mr-6 overhold text-[min(4vw,16px)] fixedCenterY">
          <div
            onClick={() => {
              setLanguage(true);
            }}
            className={
              language
                ? "text-[#ffb300] tracking-wider cursor-pointer"
                : "tracking-wider cursor-pointer"
            }
          >
            ENG
          </div>
          <div className="mx-2">/</div>
          <div
            onClick={() => {
              setLanguage(false);
            }}
            className={
              language
                ? "tracking-wider cursor-pointer"
                : "text-[#ffb300] tracking-wider cursor-pointer"
            }
          >
            ESP
          </div>
        </div>
      </div>

      {/* NAVBAR MOBILE-------------------------------------------------------------------------------------------- */}
      <div
        className={
          scroll
            ? " transition-colors justify-between flex xl:hidden py-[22.5px] px-4 fixed w-full z-50 "
            : " transition-colors justify-between flex xl:hidden py-[22.5px] px-4 fixed w-full z-50  bg-[#131313]"
        }
      >
        <div className=" w-full flex justify-between">
          {/* LOGO DIV-------------------------------------------------------------------------------------------- */}
          <Link
            to="/"
            smooth={true}
            duration={700}
            className="flex overhold text-[min(4vw,16px)] text-[#ffb300]"
          >
            <BsScissors className="rotateScisssors text-[min(10vw,35px)]" />{" "}
            <div className=" mt-2 ml-3">BARBERSHOP</div>
          </Link>

          {/* MENU DIV-------------------------------------------------------------------------------------------- */}
          {toggle ? null : (
            <div>
              <RiMenu3Fill
                onClick={() => setToggle(!toggle)}
                className="text-[min(8.5vw,37px)] cursor-pointer z-50 p-[2px]"
              />
            </div>
          )}
        </div>

        {/* CONTENT DIV-------------------------------------------------------------------------------------------- */}
        {toggle ? (
          <div className="fixed w-full h-screen top-0 left-0">
            {/* GLASS DIV-------------------------------------------------------------------------------------------- */}
            <div className=" w-full h-full glass"></div>
            {/* CLOSE MENU DIV-------------------------------------------------------------------------------------------- */}
            <div className="absolute top-0 right-0 mt-[22px] mr-4">
              <RiCloseFill
                onClick={() => setToggle(!toggle)}
                className="text-[min(9vw,37px)] cursor-pointer z-50 text-[#ffb300]"
              />
            </div>

            <m.div
              initial={{ x: "-100px", opacity: 1 }}
              animate={{ x: "0px", opacity: 1 }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
                delay: 0,
              }}
              className=" h-full w-[min(65vw,250px)] bg-[#131313] absolute top-0 left-0"
            >
              {/* LOGO DIV-------------------------------------------------------------------------------------------- */}
              <div className=" flex ml-4 overhold text-[min(4vw,16px)] text-[#ffb300] mt-[22px]">
                <BsScissors className="rotateScisssors text-[min(10vw,35px)]" />{" "}
                <div className=" mt-2 ml-3">BARBERSHOP</div>
              </div>
              {/* LIST DIV-------------------------------------------------------------------------------------------- */}
              <Scrollspy
                offset={-151}
                items={[
                  "aboutSpy",
                  "servicesSpy",
                  "barbersSpy",
                  "reviewsSpy",
                  "contactSpy",
                ]}
                currentClassName="is-current"
                className="flex flex-col gap-2 text-center cairo font-medium text-[min(4vw,15px)] mt-12 px-2"
              >
                <Link
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  to="about"
                  smooth={true}
                  offset={300}
                  duration={700}
                  className=" flex w-full justify-between px-2 py-4 border-b-2 border-[#1e1e1e] text-[#696969] cursor-pointer"
                >
                  <div className="my-auto">
                    {language ? <div>About</div> : <div>Nosotros</div>}
                  </div>
                  <IoIosArrowForward className="text-[min(8.5vw,20px)] my-auto" />{" "}
                </Link>
                <Link
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  to="services"
                  smooth={true}
                  offset={-75}
                  duration={700}
                  className=" flex w-full justify-between px-2 py-4 border-b-2 border-[#1e1e1e] text-[#696969] cursor-pointer"
                >
                  <div className="my-auto">
                    {language ? <div>Services</div> : <div>Servicios</div>}
                  </div>
                  <IoIosArrowForward className="text-[min(8.5vw,20px)] my-auto" />{" "}
                </Link>
                <Link
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  to="barbersSpy"
                  smooth={true}
                  offset={-275}
                  duration={700}
                  className=" flex w-full justify-between px-2 py-4 border-b-2 border-[#1e1e1e] text-[#696969] cursor-pointer"
                >
                  <div className="my-auto">
                    {language ? <div>Barbers</div> : <div>Barberos</div>}
                  </div>
                  <IoIosArrowForward className="text-[min(8.5vw,20px)] my-auto" />{" "}
                </Link>
                <Link
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  to="reviewsSpy"
                  smooth={true}
                  offset={-25}
                  duration={700}
                  className=" flex w-full justify-between px-2 py-4 border-b-2 border-[#1e1e1e] text-[#696969] cursor-pointer"
                >
                  <div className="my-auto">
                    {language ? <div>Reviews</div> : <div>Comentarios</div>}
                  </div>
                  <IoIosArrowForward className="text-[min(8.5vw,20px)] my-auto" />{" "}
                </Link>
                <Link
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  to="contactSpy"
                  smooth={true}
                  offset={-150}
                  duration={700}
                  className=" flex w-full justify-between px-2 py-4 border-b-2 border-[#1e1e1e] text-[#696969] cursor-pointer"
                >
                  <div className="my-auto">
                    {language ? <div>Contact Us</div> : <div>Contáctanos</div>}
                  </div>
                  <IoIosArrowForward className="text-[min(8.5vw,20px)] my-auto" />{" "}
                </Link>
              </Scrollspy>
              {/* LANGUAGES DIV-------------------------------------------------------------------------------------------- */}
              <div className="absolute fixedCenterX bottom-0 flex overhold text-[min(4vw,16px)] mb-24">
                <div
                  onClick={() => {
                    setLanguage(true);
                  }}
                  className={
                    language
                      ? "text-[#ffb300] tracking-wider cursor-pointer"
                      : "tracking-wider cursor-pointer"
                  }
                >
                  ENG
                </div>
                <div className="mx-2">/</div>
                <div
                  onClick={() => {
                    setLanguage(false);
                  }}
                  className={
                    language
                      ? "tracking-wider cursor-pointer"
                      : "text-[#ffb300] tracking-wider cursor-pointer"
                  }
                >
                  ESP
                </div>
              </div>
            </m.div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Navbar;
