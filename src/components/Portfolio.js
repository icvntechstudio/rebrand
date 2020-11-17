import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Portfolio extends Component {
	render() {
		return (
			<>
	            <div className="justify-center text-center flex flex-wrap mt-24">
		            <div className="w-full md:w-6/12 px-12 md:px-4">
		              <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
		              <p className="text-lg leading-relaxed mt-4 mb-20 text-gray-600">
		                Notus React is a completly new product built using our past
		                experience in web templates. Take the examples we made for you and
		                start playing with them.
		              </p>
		            </div>
	            </div>

	            <div className="container mx-auto py-20">
		            <div className="justify-center flex flex-wrap">
		                <div className="w-full lg:w-12/12 px-4">
			                <div className="flex flex-wrap">
			                    <div className="w-full lg:w-4/12 px-4">
				                    <h5 className="text-xl font-semibold pb-4 text-center">
				                      Login Page
				                    </h5>
				                    <Link to="/auth/login">
				                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
				                        <img
				                          alt="..."
				                          className="align-middle border-none max-w-full h-auto rounded-lg"
				                          src={require("assets/img/login.jpg")}
				                        />
				                      </div>
				                    </Link>
			                    </div>

			                    <div className="w-full lg:w-4/12 px-4">
				                    <h5 className="text-xl font-semibold pb-4 text-center">
				                      Profile Page
				                    </h5>
				                    <Link to="/profile">
				                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
				                        <img
				                          alt="..."
				                          className="align-middle border-none max-w-full h-auto rounded-lg"
				                          src={require("assets/img/profile.jpg")}
				                        />
				                        </div>
				                    </Link>
			                    </div>

			                    <div className="w-full lg:w-4/12 px-4 ">
				                    <h5 className="text-xl font-semibold pb-4 text-center">
				                      Landing Page
				                    </h5>
				                    <Link to="/landing">
				                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
					                        <img
					                          alt="..."
					                          className="align-middle border-none max-w-full h-auto rounded-lg"
					                          src={require("assets/img/landing.jpg")}
					                        />
				                        </div>
				                    </Link>
			                    </div>
			                </div>
		                </div>
		            </div>
	            </div>
          </>
		)
	}
}

export default Portfolio