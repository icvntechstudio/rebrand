import React, { Component } from 'react'


class Header extends Component {
  render() {
    return (
        <div className="pt-16 flex content-center items-center justify-center min-h-screen-75">
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
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap pt-24">
              <div className="w-full lg:w-8/12 px-4 mx-auto text-center">
                <div className="">
                  <h1 className="text-white font-bold text-6xl">
                    We build well-designed, conversion optimized products
                  </h1>
                  <p className="mt-3 text-xl px-3 text-gray-300">
                    A design and technology studio turning pain points into design.
                    We help startups launch fast.
                  </p>{/* secure and converting websites */}
                </div>
                <div className="text-center mt-4 pb-16">
                <form target="_blank" rel="noopener noreferrer">
                  <button
                    className="bg-green-500 text-gray-900 active:bg-green-900 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg hover::bg-green-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit" formAction="https://share.hsforms.com/1hy5KUSAbS1GKx5oD7sVhoQ57353"
                  >
                    Get in Touch
                  </button>
                </form>
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
