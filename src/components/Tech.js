import React, { Component } from 'react'
import LeftTech from './LeftTech'
import RightTech from './RightTech'

class Tech extends Component {
	render() {
		return (
				<section className="overflow-hidden pb-32 bg-gray-300 -mt-24 mx-auto px-8 py-20">
		      <div className="container mx-auto flex flex-wrap items-center pt-18">
						<div className="w-full xs:w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:px-16 xl:px-12 lg:px-10 px-10 md:px-4 sm:px-4 xs:px-12 mr-auto ml-auto xs:mt-32 sm:mt-32 md:mt-12">
			        <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
			          <i className="fas fa-drafting-compass text-xl"></i>
			        </div>
							<h3 className="text-3xl mb-2 font-semibold leading-normal">
								Our Tech Stack
							</h3>
							<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
								In order to create a great User Experience some components require JavaScript. In this way you can manipulate the elements on the page and give more options to your users.
							</p>
							<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
								We created a set of Components that are dynamic and come to help you.
							</p>
			        <div className="block pb-6">
			          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white last:mr-0 mr-2 mt-2">
			            Alerts
			          </span>
			          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white last:mr-0 mr-2 mt-2">
			            Dropdowns
			          </span>
			          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white last:mr-0 mr-2 mt-2">
			            Menus
			          </span>
			          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white last:mr-0 mr-2 mt-2">
			            Modals
			          </span>
			          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white last:mr-0 mr-2 mt-2">
			            Navbars
			          </span>
			          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white last:mr-0 mr-2 mt-2">
			            Popovers
			          </span>
			          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white last:mr-0 mr-2 mt-2">
			            Tabs
			          </span>
			          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white last:mr-0 mr-2 mt-2">
			            Tooltips
			          </span>
			        </div>
			        <a href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150">
			          View all{" "}
			          <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
			        </a>
		      	</div>
			      <div className="w-full xs:w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:px-16 xl:px-12 lg:px-10 px-6 md:px-4 sm:px-4 xs:px-12 mr-auto ml-auto xs:mt-32 sm:mt-32 md:mt-12">
			        <div className="justify-center flex flex-wrap relative">
			          <LeftTech />
			          <RightTech />
			        </div>
			      </div>
		      </div>
		    </section>
		)
	}
}

export default Tech