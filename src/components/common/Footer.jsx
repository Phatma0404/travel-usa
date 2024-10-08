import React from "react";
import NYC from "../../assets/img/nycity.png";
import { FaGithub, FaLinkedinIn, FaMedium, FaMediumM } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer class="w-full py-14">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto">
            <a href="https://pagedone.io/" class="flex justify-center">
              <img src={NYC} alt="" width={200} />
            </a>
            <ul class="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
              <li>
                <a href="#" class="text-gray-800 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class=" text-gray-800 hover:text-gray-900">
                  New York
                </a>
              </li>
              <li>
                <a href="#" class=" text-gray-800 hover:text-gray-900">
                  Travel
                </a>
              </li>
              <li>
                <a href="#" class=" text-gray-800 hover:text-gray-900">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" class=" text-gray-800 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
            <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span class="text-sm text-gray-500 ">
                ©<a href="https://pagedone.io/">Nycity</a> 2024, All rights
                reserved.
              </span>
              <div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                <a
                  href="javascript:;"
                  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-[#84aedf]"
                >
                  <FaLinkedinIn color="white" />
                </a>
                <a
                  href="javascript:;"
                  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-[#84aedf]"
                >
                  <FaMediumM color="white" />
                </a>
                {/* <a
                  href="javascript:;"
                  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-[#1f6bc2]"
                >
                  
                </a> */}
                <a
                  href="javascript:;"
                  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-[#84aedf]"
                >
                  <FaGithub color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
