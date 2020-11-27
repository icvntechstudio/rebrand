import React, { Component } from 'react'
import LottieFeature from '../components/Lottie/LottieFeature'
import growth from '../assets/lottie/growth.json'
import integrations from '../assets/lottie/integrations.json'
import security from '../assets/lottie/security.json'


class Feature extends Component {
	render() {
		return(
			<div className="pb-12 bg-gray-300">
				<div className="container mx-auto px-4">
			        <div className="flex flex-wrap" id="features">
			            <div className="lg:pt-12 pt-10 w-full md:w-4/12 px-4 text-center">
				            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl rounded-lg">
				              <div className="px-4 py-5 flex-auto">
				                <div className="text-white text-center inline-flex items-center justify-center w-40 h-40 mb-5 shadow-2xl rounded-full">
				                  <LottieFeature lotti={security} height={100} width={120} />
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
				                <div className="text-white text-center inline-flex items-center justify-center w-40 h-40 mb-5 shadow-2xl rounded-full">
				                  <LottieFeature lotti={integrations} height={100} width={120} />
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
				                <div className="text-white text-center inline-flex items-center justify-center w-40 h-40 mb-5 shadow-2xl rounded-full">
				                  <LottieFeature lotti={growth} height={100} width={120} />
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