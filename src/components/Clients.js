import React, { Component } from 'react'


class Clients extends Component {
	render() {
		return (
            <div className="container mx-auto px-4" id="about">
              {/* Clients partners */ }
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  <h2 className="text-4xl font-semibold mt-24">Our clients and friends</h2>
                  <p className="text-lg leading-relaxed m-4 text-gray-600">
                    These companies and people are all that have trusted us with our capabilities in providing top notch services.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                      <img
                        alt="..."
                        src={require("../assets/img/team-1-800x800.jpg")}
                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                      />
                      <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">Ryan Tompson</h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                          Web Developer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                      <img
                        alt="..."
                        src={require("../assets/img/team-2-800x800.jpg")}
                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                      />
                      <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">Romina Hadid</h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                          Marketing Specialist
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                      <img
                        alt="..."
                        src={require("../assets/img/team-3-800x800.jpg")}
                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                      />
                      <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">Alexa Smith</h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                          UI/UX Designer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                      <img
                        alt="..."
                        src={require("../assets/img/team-4-470x470.png")}
                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                      />
                      <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">Jenna Kardi</h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                          Founder and CEO
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
		)
	}
}

export default Clients
