
import imgs from "../assets/profile-5cdb43f1.jpg";

const About = () => {

  return (
    <div>
      <div className="lg:px-56 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        {" "}
        <img
          data-aos="fade-up-right"
          src={imgs}
          alt="Img"
          width={290}
          height={290}
          className="border-2 border-fuchsia-500 p-1 img-glow"
        />
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
          <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">
          About me
          </h1>
          <p data-aos="fade-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            praesentium autem itaque fugiat, dignissimos pariatur ducimus
            voluptate, iure cupiditate nihil molestias magnam minima temporibus
            tempora corporis. Illo quaerat enim porro.
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex- items-center justify-center">
              <div className="flex space-x-2">
                 <button data-aos="fade-up" className=" memo_btn shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                    RESUME
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
