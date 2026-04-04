import React from "react";
import { GoDot } from "react-icons/go";

const Footer = () => {
  return (
    <div className="mt-40">
        <div className="">
      <div className="bg-[#06091A] min-h-[60vh] mt-10">
        <div className="flex justify-center items-center pt-40">
          <img src="/src/assets/logo-footer.png" alt="" />
        </div>
        {/* <div className="text-white grid grid-cols-3 justify-items-center mt-10"> */}
        <div className="text-white grid grid-cols-1 md:grid-cols-3 gap-12 mt-10 text-center md:text-left px-6 justify-items-center">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-[#ffffff99]">
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="text-[#ffffff99] flex flex-col">
              <div className="flex items-center gap-1">
                <GoDot></GoDot>
                <a href="">Home</a>
              </div>
              <div className="flex items-center gap-1">
                <GoDot></GoDot>
                <a href="">Fixture</a>
              </div>
              <div className="flex items-center gap-1">
                <GoDot></GoDot>
                <a href="">Teams</a>
              </div>
              <div className="flex items-center gap-1">
                <GoDot></GoDot>
                <a href="">Schedules</a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Subscribe</h3>
            <p className="text-[#ffffff99]">
              Subscribe to our newsletter for the <br /> latest updates.
            </p>
            <div>
              <div className="join mt-4">
                <div>
                  <label className="input validator join-item">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </g>
                    </svg>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="rounded-l-md text-black"
                      required
                    />
                  </label>
                  <div className="validator-hint hidden">
                    Enter valid email address
                  </div>
                </div>
                <button className="btn bg-linear-to-r from-yellow-200 to-pink-400 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-10" />
        <p className="text-[#ffffff99] text-center py-8">
          @2026 Your Company All Rights Reserved.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
