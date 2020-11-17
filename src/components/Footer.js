import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6" id="footer">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
        <div className="container mx-auto">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-2">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Send a message via our <a href="#contact">form</a> or in any of our social media accounts, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formaction="https://linkedin.com/in/vicentereyes0888"
                      >
                        <i className="fab fa-linkedin"></i>
                      </button>
                    </form>
                  </li>
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formaction="https://github.com/reyesvicente"
                      >
                        <i className="fab fa-github-alt"></i>
                      </button>
                    </form>
                  </li>
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formaction="https://dev.to/highcenburg"
                      >
                        <i className="fab fa-dev"></i>
                      </button>
                    </form>
                  </li>
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formaction="https://medium.com/@highcenburg"
                      >
                        <i className="fab fa-medium"></i>
                      </button>
                    </form>
                  </li>
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formaction="https://facebook.com/highcenbugtv"
                      >
                        <i className="fab fa-facebook-square"></i>
                      </button>
                    </form>
                  </li>
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formaction="https://twitter.com/highcenburg"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                    </form>
                  </li>
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formaction="https://instagram.com/highcenbugtv"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </form>
                  </li>
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formaction="https://open.spotify.com/artist/7oujeUrwgwhYUQFRW7VlIR"
                      >
                        <i className="fab fa-spotify"></i>
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="http://localhost:3000/?ref=studio-footer"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" 
                        href="http://localhost:3000/?ref=studio-footer" target="_blank" rel="noopener noreferrer"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="http://localhost:3000/?ref=studio-footer"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="http://localhost:3000/?ref=studio-footer"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-react/blob/master/LICENSE.md?ref=nr-footer"
                      >
                        Digital Ocean
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="http://localhost:3000/terms?ref=studio-footer"
                      >
                        Mailchimp
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="http://localhost:3000/privacy?ref=studio-footer"
                      >
                        ButterCMS
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="http://localhost:3000/contact?ref=studio-footer"
                      >
                        Book A Call
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()} icvn.tech by{" "}
                <a
                  href="https://www.studio.icvn.tech"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Vicente G. Reyes
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
