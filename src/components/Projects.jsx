import React from "react";
import IMG1 from "../assets/Untitled design (5)-b88e32d1.png"
import IMG2 from "../assets/Untitled design (6)-42785a75.png"
import IMG3 from "../assets/Untitled design (7)-74e073ed.png"
import IMG4 from "../assets/Untitled design (8)-49b45d91.png"

const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500 aos-init"
      >
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <img
          data-aos="fade-up"
          height="250"
          width="250"
          className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow aos-init"
          src={IMG1}
          alt=""
        />
        <img
          data-aos="fade-down"
          height="250"
          width="250"
          className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow aos-init"
          src={IMG2}
          alt=""
        />
        <img
          data-aos="fade-up"
          height="250"
          width="250"
          className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow aos-init"
          src={IMG3}
          alt=""
        />
        <img
          data-aos="fade-down"
          height="250"
          width="250"
          className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow aos-init"
          src={IMG4}
          alt=""
        />
      </div>
    </div>
  );
};

export default Projects;
