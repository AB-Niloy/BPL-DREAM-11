import React from "react";

const Banner = () => {
  return (
    // <div className="container mx-auto relative">
    //   <img src="/src/assets/bg-shadow.png" alt="" className="w-full"/>
    //   <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-5">
    //     <img src="/src/assets/banner-main.png" alt=""/>
    //     <h1 className="text-4xl font-bold">
    //       Assemble Your Ultimate Dream 11 Cricket Team
    //     </h1>

    //     <p className="mt-2 text-2xl">Beyond Boundaries Beyond Limits</p>

    //     <button className="btn mt-4 px-6 py-2 bg-[#E7FE29] rounded-lg">
    //       Claim Free Credit
    //     </button>
    //   </div>
    // </div>
    <div className="container mx-auto relative bg-[#06091A] rounded-2xl">
      {/* Background */}
      <img
        src="/src/assets/bg-shadow.png"
        alt=""
        className="w-full h-[300px] md:h-[500px] object-cover rounded-xl"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-3 md:space-y-5 px-2">
        {/* Image */}
        <img
          src="/src/assets/banner-main.png"
          alt=""
          className="w-40 md:w-64"
        />

        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold leading-tight">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* Subtitle */}
        <p className="text-[#f9fffffa] text-sm sm:text-base md:text-2xl">
          Beyond Boundaries Beyond Limits
        </p>

        {/* Button */}
        <div className="border border-[#E7FE29] p-2 rounded-2xl">
          <button className="btn px-4 py-2 md:px-6 md:py-2 bg-[#E7FE29] rounded-lg text-sm md:text-base">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
