import React, { useState } from "react";
import { Link } from "react-scroll";


const Nav = () => {
    const [click, setClick] = useState(false);

    const handalClick = () => {
        setClick(!click);
    }
    const contents = (
      <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
          <ul className="text-center text-xl p-20">
            <Link spy={true} smooth={true} to="home">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
            </Link>
            <Link spy={true} smooth={true} to="about">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">about</li>
            </Link>
            <Link spy={true} smooth={true} to="services">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Services</li>
            </Link>
            <Link spy={true} smooth={true} to="project">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
            </Link>
            <Link spy={true} smooth={true} to="contact">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
            </Link>
          </ul>
        </div>
      </>
    );
  return (
    

    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className=" flex items-center flex-1">
          <span className=" text-3xl font-bold">Logo</span>
        </div>

        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className=" flex-18">
            <ul className="flex gap-8 mr-16 text-[18px]">

              <Link spy={true} smooth={true} to="home">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Home</li>
              </Link>
              <Link spy={true} smooth={true} to="about">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">about</li>
              </Link>
              <Link spy={true} smooth={true} to="services">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Services</li>
              </Link>
              <Link spy={true} smooth={true} to="project">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Projects</li>
              </Link>
              <Link spy={true} smooth={true} to="contact">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contact</li>
              </Link>

            </ul>
          </div>
        </div>
        <div className="">
        {click && contents}
        </div>

        <button className="block sm:hidden transition" onClick={handalClick}>
            {click ?  <i className="ri-close-line"></i>:  <i className="ri-menu-line"></i>}
        </button>
      </div>
    </nav>
    
  );
};

export default Nav;
