import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              to="/"
            >
              Studio:icvn.tech
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#about"
                >
                  {" "}
                  About
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#portfolio"
                >
                  {" "}
                  Portfolio
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#services"
                >
                  {" "}
                  Services
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#contact"
                >
                  {" "}
                  Contact
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://linkedin.com/in/vicentereyes0888" target="_blank" rel="noopener noreferrer">
                  <i className="lg:text-gray-300 text-gray-500 fab fa-linkedin text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">LinkedIn</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/reyesvicente" target="_blank" rel="noopener noreferrer">
                  <i className="lg:text-gray-300 text-gray-500 fab fa-github-alt text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Github</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/@highcenburg" target="_blank" rel="noopener noreferrer">
                  <i className="lg:text-gray-300 text-gray-500 fab fa-medium text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Medium</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://dev.to/highcenburg" target="_blank" rel="noopener noreferrer">
                  <i className="lg:text-gray-300 text-gray-500 fab fa-dev text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">DEV.to</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/highcenbugtv" target="_blank" rel="noopener noreferrer">
                  <i className="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/highcenburg" target="_blank" rel="noopener noreferrer">
                  <i className="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Twitter</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://instagram.com/highcenbugtv" target="_blank" rel="noopener noreferrer">
                  <i className="lg:text-gray-300 text-gray-500 fab fa-instagram text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Instagram</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://open.spotify.com/artist/7oujeUrwgwhYUQFRW7VlIR" target="_blank" rel="noopener noreferrer">
                  <i className="lg:text-gray-300 text-gray-500 fab fa-spotify text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Spotify</span>
                </a>
              </li>

              <li className="flex items-center">
                <form>
                  <button
                    className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="submit" formaction="https://cutt.ly/GgTzQ1m" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-arrow-alt-circle-down"></i> Book a Call
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
