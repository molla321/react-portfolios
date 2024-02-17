import React from "react";

const Services = () => {
  return (
    // <div>
    //   <h1 classNameName=" text-center text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">
    //     Services
    //   </h1>

    //   <div classNameName="lg:px-56 px-10 py-20 grid grid-cols-4 gap-4">
    //     <div classNameName="wth rounded-t-2xl">
    //       <h1 classNameName="text-white text-center items-center mt-12 ">HTML</h1>
    //     </div>
    //     <div classNameName="wth rounded-t-2xl"
    //     >
    //       <h1 classNameName="text-white text-center items-center mt-12 ">JavaScript</h1>
    //     </div>
    //     <div classNameName="wth">
    //       <h1 classNameName="text-white text-center items-center mt-12 ">React Js</h1>
    //     </div>
    //     <div classNameName="wth">
    //       <h1 classNameName="text-white text-center items-center mt-12 ">Bootstrap</h1>
    //     </div>
    //   </div>
    // </div>

    <div id="Services" className="p-20 flex flex-col items-center justify-center">
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500 aos-init aos-animate"
      >
        Services
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <h2
          data-aos="fade-up"
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow aos-init aos-animate"
        >
          HTML5
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow aos-init aos-animate"
        >
          CSS3
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow aos-init aos-animate"
        >
          Javascript
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow aos-init aos-animate"
        >
          React
        </h2>
      </div>
    </div>
  );
};

export default Services;
