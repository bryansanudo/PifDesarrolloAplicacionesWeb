import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


import logoPoli from "@/assets/logoPoli.png";

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "Portada",
    },
    {
      id: 2,
      link: "Problematica",
    },
    {
      id: 3,
      link: "Descripcion",
    },
    {
      id: 4,
      link: "Justificacion",
    },
    {
      id: 5,
      link: "Estado del arte",
    },
  ];

  return (
    <div className="pb-52">
      <div className="fixed w-full h-40 md:h-48 bg-[#173557] text-white z-20 ">
        <div className="flex justify-between lg:justify-center md:gap-5 items-center max-w-screen-xl mx-auto px-4 h-full">
          <a
            href="https://medellin.poli.edu.co/?switch_domain=medellin_poli_edu_co"
            target="_blank"
            rel="noreferrer"
          >
            
              
              <img
                src={logoPoli}
                alt=""
                className="rounded-full object-cover md:w-80 md:h-32 h-28 w-[280px] duration-300  cursor-pointer hover:shadow-[#3db2de] shadow-lg"
              />
           
          </a>

          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <Link key={id} to={link} smooth duration={500}>
                  <li className="p-4 uppercase duration-300 hover:text-[#3db2de] cursor-pointer">
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
         
        </div>
      </div>

      <div
        className={`fixed w-full bg-[#173557] text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl " : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <Link
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              smooth
              duration={500}
              key={id}
            >
              <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
                {link}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
