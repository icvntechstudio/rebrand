import React, { Component } from 'react'


class Contact extends Component {
	render() {
		return (
	        <section className="relative block py-20 lg:pt-0 bg-gray-900">
	            <div className="container mx-auto px-4">
		            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
		                <div className="w-full lg:w-6/12 px-4">
			                <div className="relative flex flex-auto min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 px-4 py-8">
			                    <div className="flex-auto py-5 lg:p-10">
				                    <h4 className="text-4xl font-bold text-center">
				                      Want to work with us?
				                    </h4>
				                    <p className="leading-relaxed mt-2 mb-4 text-gray-600 text-center text-lg">
				                      Complete this form and we will get back to you in 24
				                      hours.
				                    </p>
			                    </div>
			                </div>
		                </div>
		            </div>
	            </div>
	        </section>
		)
	}
}

export default Contact