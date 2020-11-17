import React, { Component } from 'react'


class Feature extends Component {
	render() {
		return(
			<div class="pb-20 bg-gray-300 -mt-32">
				<div class="container mx-auto">
		            <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" 
		            	style={{ transform: "translateZ(0)" }}>
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
			        <div className="flex flex-wrap" id="features">
			            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
				            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
				              <div className="px-4 py-5 flex-auto">
				                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
				                  <i className="fas fa-edit ml-1"></i>
				                </div>
				                <h6 className="text-xl font-semibold">Custom-fit UI/UX Design</h6>
				                <p className="mt-2 mb-4 text-gray-600">
				                  A dedicated UI/UX Designer that translates your defined user persona into a well thought-off design system.
				                </p>
				              </div>
				            </div>
			            </div>

			            <div className="w-full md:w-4/12 px-4 text-center">
				            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
				              <div className="px-4 py-5 flex-auto">
				                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
				                  <i className="fas fa-keyboard"></i>
				                </div>
				                <h6 className="text-xl font-semibold">Custom Admin Panel</h6>
				                <p className="mt-2 mb-4 text-gray-600">
				                  No more boring admin panels by default. We build you a custom admin panel that fit your everyday needs.
				                </p>
				              </div>
				            </div>
			            </div>

			            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
				            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
				              <div className="px-4 py-5 flex-auto">
				                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
				                  <i className="fas fa-shield-alt"></i>
				                </div>
				                <h6 className="text-xl font-semibold">Secured by Default</h6>
				                <p className="mt-2 mb-4 text-gray-600">
				                  All websites we develop are use by Cloudflare by default, no more untrusting websites that pushes customers away!
				                </p>
				              </div>
				            </div>
			            </div>
			        </div>
			    </div>
			</div>
		)
	}
}

export default Feature