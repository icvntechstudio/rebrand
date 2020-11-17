import React, { Component } from 'react'


class Header extends Component {
  render() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-83">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1603533867307-b354255e3c32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto mt-10">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="px-14 sm:px-4 md:px-8 lg:px-12 xl:px-14">
                  <h1 className="text-white font-bold text-5xl">
                    We build well-designed, conversion optimized products
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    A design and technology studio turning pain points into design.
                    We help startups launch fast, secure and converting websites.
                  </p>
                </div>
                <div className="text-center mt-6">
                <button
                  className="bg-yellow-500 text-gray-900 active:bg-yellow-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Get in Touch
                </button>
              </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
    )
  }
}

export default Header
