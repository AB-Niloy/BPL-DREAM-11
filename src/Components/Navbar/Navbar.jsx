import React from "react";

const Navbar = ({ coin }) => {
  return (
    // <div className="navbar bg-base-100 shadow-sm container mx-auto mt-16 mb-5">
    //   <div className="flex-1">
    //     <img src="/src/assets/logo.png" alt="" />
    //   </div>
    //   <div className="flex-none">
    //     <button className="flex justify-center items-center gap-2 font-bold text-xl">
    //       <div className="flex flex-row gap-5 px-10 font-normal">
    //         <a href="">Home</a>
    //         <a href="">Fixture</a>
    //         <a href="">Teams</a>
    //         <a href="">Schedules</a>
    //       </div>
    //       ${coin} Coins
    //       <img src={dollarImg} alt="" />
    //     </button>
    //   </div>
    // </div>
    <div className="navbar bg-base-100 shadow-sm container mx-auto mt-6 mb-5 px-4">
      {/* Left: Logo */}
      <div className="flex-1">
        <img src="/logo.png" alt="logo" className="w-28 md:w-32" />
      </div>

      {/* Right */}
      <div className="flex-none flex items-center gap-3">
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-normal">
          <a href="">Home</a>
          <a href="">Fixture</a>
          <a href="">Teams</a>
          <a href="">Schedules</a>
        </div>

        {/* Coins */}
        <div className="flex items-center gap-2 font-bold text-sm md:text-xl">
          
          <span className="border border-[#E7FE29] bg-[#E7FE29] rounded-xl shadow-md px-2 py-3 flex items-center gap-2"><img src='/dollar 1.png' alt="" className="w-5 md:w-6 " /> {coin} Coins</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost text-xl">
            ☰
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
          >
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Fixture</a>
            </li>
            <li>
              <a href="">Teams</a>
            </li>
            <li>
              <a href="">Schedules</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
