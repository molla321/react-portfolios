import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className=" bg-slate-800 justify-center h-[100vh] flex items-center">
      <CirclesWithBar
        height="300"
        width="300"
        color="#d946ef"
        outerCircleColor="#d946ef"
        innerCircleColor="#d946ef"
        barColor="#d946ef"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
