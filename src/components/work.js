import React from "react";
import Bookmark from "../assets/Bookmark.jpg"
import Clipboard from "../assets/Clipboard.jpg"
import Fylo from "../assets/Fylo.jpg"
import Loopstudios from "../assets/Loopstudios.jpg"
import Shortly from "../assets/Shortly.jpg"

const Work = () => {
  return (
    <div name="work" className=" md:h-screen text-gray-300 bg-[#0a192f] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full  h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#ccd6f6]">
            Work
          </p>
          <p className="py-6 ">Check out some of my recent work</p>
        </div>

        {/*    Container       */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*        Grid Item 1        */}
          <div
            style={{ backgroundImage: `url(${Bookmark})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS + TailwindCSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://mdwajidali-bookmark.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MdWajidAli/Bookmark-landingpage">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*        Grid Item  2      */}
          <div
            style={{ backgroundImage: `url(${Clipboard})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS + TailwindCSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://mdwajidali-clipboard.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MdWajidAli/Clipboard-landingpage">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*        Grid Item    3    */}
          <div
            style={{ backgroundImage: `url(${Fylo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS + TailwindCSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://mdwajidali-fylo.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MdWajidAli/fylo-landingpage">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*        Grid Item   4     */}
          <div
            style={{ backgroundImage: `url(${Loopstudios})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS + TailwindCSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://mdwajidali-loopstudio.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MdWajidAli/loopstudios-landing-page">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*        Grid Item    5    */}
          <div
            style={{ backgroundImage: `url(${Shortly})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS + TailwindCSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://mdwajidali-shortly.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MdWajidAli/shortly">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Work;
