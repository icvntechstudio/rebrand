import React, { Component } from 'react'
import HubspotForm from 'react-hubspot-form'


class Contact extends Component {
	render() {
		return (
	        <section className="relative block py-20 lg:pt-0 bg-gray-900 mx-10">
	            <div className="container mx-auto">
		            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
		                <div className="container w-full lg:w-full px-10">
			                <div className="relative flex flex-auto min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 px-4 x-8">
			                    <div className="flex-auto py-6">
				                    <h4 className="text-4xl font-bold text-center">
				                      Want to work with us?
				                    </h4>
				                    <p className="leading-relaxed mt-2 mb-4 text-gray-600 text-center text-lg">
				                      Complete this form and we will get back to you in 24
				                      hours.
				                    </p>
														<div className="">
															<HubspotForm
															className='px-auto'
															portalId='8728743'
															formId='872e4a51-201b-4b51-8ac7-9a03eec561a1'
															onSubmit={() => console.log('Submit!')}
															onReady={(form) => console.log('Form ready!')}
															loading={<div>Loading...</div>}
															/>
														</div>
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