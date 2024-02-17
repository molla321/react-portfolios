import React, { useEffect } from "react";
import imgs from "../assets/profile-5cdb43f1.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'
const Banner = () => {

 useEffect(()=>{
        AOS.init({
            easing: 'ease-in-out',
            delay: 0,
            duration: 750
        })
    },[2000]);
  return (
    <div className="lg:px-56 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right"  className="text-[52px] font-semibold mb-8 leading-normal">
          Welcome to <span className=" text-fuchsia-500">My WebSite</span>
        </h1>
        <p data-aos="fade-left" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          praesentium autem itaque fugiat, dignissimos pariatur ducimus
          voluptate, iure cupiditate nihil molestias magnam minima temporibus
          tempora corporis. Illo quaerat enim porro.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex- items-center justify-center">
            <div className="flex space-x-2">
              <a
                href=""
                className=" text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <i className="ri-reactjs-line text-[28px]"></i>
              </a>
              <a
                href=""
                className=" text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <i className="ri-messenger-fill text-[28px]"></i>
              </a>
              <a
                href=""
                className=" text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <i className="ri-facebook-circle-line text-[28px]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img data-aos='zoom-in' src={imgs} alt="Img" width={290} height={290} className="rounded-full border-2 border-fuchsia-500 p-1 img-glow" />
    </div>
  );
};

export default Banner;
