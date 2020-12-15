import React from "react";


export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6 px-8" id="footer">
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
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full 2xl:w-6/12 xl:w-6/12 lg:w-6/12 px-6">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Send a message via our <a href="#contact">form</a> or in any of our social media accounts, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <ul className="flex flex-row lg:flex-row list-none lg:ml-auto items-center md:justify-between justify-center">
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-blue-400 shadow-2xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formAction="https://linkedin.com/in/vicentereyes0888"
                      >
                        <i className="fab fa-linkedin text-blue-700"></i>
                      </button>
                    </form>
                  </li>
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-blue-600 shadow-2xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formAction="https://github.com/reyesvicente"
                      >
                        <i className="fab fa-github-alt text-gray-900"></i>
                      </button>
                    </form>
                  </li>
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-pink-400 shadow-2xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formAction="https://dev.to/highcenburg"
                      >
                        <i className="fab fa-dev text-gray-900"></i>
                      </button>
                    </form>
                  </li>
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-gray-900 shadow-2xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formAction="https://medium.com/@highcenburg"
                      >
                        <i className="fab fa-medium"></i>
                      </button>
                    </form>
                  </li>
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-blue-400 shadow-2xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formAction="https://facebook.com/highcenbugtv"
                      >
                        <i className="fab fa-facebook-square text-blue-600"></i>
                      </button>
                    </form>
                  </li>
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-blue-400 shadow-2xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formAction="https://twitter.com/highcenburg"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                    </form>
                  </li>
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-pink-400 shadow-2xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formAction="https://instagram.com/highcenbugtv"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </form>
                  </li>
                  <li className="flex items-center">
                    <form target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-gray-900 shadow-2xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="submit" formAction="https://open.spotify.com/artist/7oujeUrwgwhYUQFRW7VlIR"
                      >
                        <i className="fab fa-spotify text-green-500"></i>
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full xs:w-6/12 lg:w-6/12">
              <div className="flex flex-row items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled items-center">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://cutt.ly/studio-discovery-call" target="_blank" rel="noopener noreferrer"
                      >
                        Book A Call
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://studio.icvn.tech/#about"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://studio.icvn.tech/#solutions" target="_blank" rel="noopener noreferrer"
                      >
                        Solutions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://studio.icvn.tech/terms"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://studio.icvn.tech/privacy"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-6">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://cutt.ly/9hts8uv" target="_blank" rel="noopener noreferrer"
                      >
                        Digital Ocean
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://mailchimp.com" target="_blank" rel="noopener noreferrer"
                      >
                        Mailchimp
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://bit.ly/3boZDaS" target="_blank" rel="noopener noreferrer"
                      >
                        Webflow
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://icons8.com" target="_blank" rel="noopener noreferrer"
                      >
                        icons8
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://unsplash.com" target="_blank" rel="noopener noreferrer"
                      >
                        Unsplash
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://lottiefiles.com/" target="_blank" rel="noopener noreferrer"
                      >
                        Lottiefiles
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-6 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                <span>Copyright © {new Date().getFullYear()} </span>
                <a
                  href="https://www.studio.icvn.tech?ref=internal_footer"
                  className="text-gray-600 hover:text-gray-900"
                >
                studio.icvn.tech {" "}
                </a>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
