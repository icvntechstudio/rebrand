import React, { Component } from 'react'
import HubspotForm from 'react-hubspot-form'


class Contact extends Component {
	render() {
		return (
	        <section className="relative block py-24 lg:pt-0 bg-gray-900">
	            <div className="container mx-auto px-4">
		            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
		              <div className="w-full lg:w-8/12 px-4">
		                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
		                    <div className="flex-auto p-5 lg:p-10">
			                    <h4 className="text-2xl font-semibold">
			                      Want to work with us?
			                    </h4>
			                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
			                      Complete this form and we will get back to you in 24
			                      hours.
			                    </p>
								<HubspotForm
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
	        </section>
		)
	}
}

export default Contact