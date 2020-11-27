import React, { Component } from 'react'


class Feature extends Component {
	render() {
		return(
			<div className="pb-12 bg-gray-300">
				<div className="container mx-auto px-4">
			        <div className="flex flex-wrap" id="features">
			            <div className="lg:pt-12 pt-10 w-full md:w-4/12 px-4 text-center">
				            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl rounded-lg">
				              <div className="px-4 py-5 flex-auto">
				                <div className="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-2xl rounded-full">
				                  <img src="https://img.icons8.com/color/48/000000/change-theme.png" alt="ui ux designer" />
				                </div>
				                <h6 className="text-xl font-semibold">Web UX Design</h6>
				                <p className="mt-2 mb-4 text-gray-600">
				                  A dedicated UX Designer that translates your defined user persona into a well thought-off design system.
				                </p>
				              </div>
				            </div>
			            </div>

			            <div className="w-full md:w-4/12 px-4 text-center">
				            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl rounded-lg">
				              <div className="px-4 py-5 flex-auto">
				                <div className="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-2xl rounded-full">
				                  <img src="https://img.icons8.com/fluent/48/000000/management.png" alt="administrator" />
				                </div>
				                <h6 className="text-xl font-semibold">Systems Integration</h6>
				                <p className="mt-2 mb-4 text-gray-600">
				                  Finding the right system and embedding systems to improve everyday workflow
				                </p>
				              </div>
				            </div>
			            </div>

			            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
				            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl rounded-lg">
				              <div className="px-4 py-5 flex-auto">
				                <div className="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-2xl rounded-full">
				                  <img src="https://img.icons8.com/color/48/000000/web-shield.png" alt="security" />
				                </div>
				                <h6 className="text-xl font-semibold">Improvements & Growth</h6>
				                <p className="mt-2 mb-4 text-gray-600">
				                  Affordable monthly retainers to improve your system for consistent growth
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