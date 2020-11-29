import React, { useState } from 'react'
import Select from 'react-select'


export default function Contact() {
	const [formData, setFormData] = useState({})

	const services = [
		{ value: 'shopify', label: 'Shopify Development' },
		{ value: 'uxd', label: 'UX Design' },
		{ value: 'api', label: 'System Integration' },
		{ value: 'marketing', label: 'Marketing Campaign Management' },
	]

	const handleInput = (e) => {
		const pushFormData = { ...formData }
		pushFormData[e.target.name] = e.target.value
		setFormData(pushFormData)
	}

	const sendData = async (e) => {
		e.preventDefault()
		try {
			const response = await fetch(
				"https://v1.nocodeapi.com/vgreyes/airtable/sKFLOPcLejLRbplo?tableName=inquiries",
				{
					method: "POST",
					body: JSON.stringify([formData]),
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			const json = await response.json()
			console.log("Success:", JSON.stringify(json))
		} catch (error) {
			console.log("Error:", error)
		}
	}

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
				          Complete this form and we will get back to you in 24 hours.
				        </p>
			        </div>
							<form className="input-form" name="contact" required onSubmit={sendData}>
							  <div className="relative w-full mb-3 mt-8">
								  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
									<input
                    type="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="name@company.com"
                  />
								</div>
								<div className="relative w-full mb-3 mt-8">
								  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="first-name"
                  >
                    First Name
                  </label>
									<input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="First Name"
                  />
								</div>
								<div className="relative w-full mb-3 mt-8">
								  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="last-name"
                  >
                    Last Name
                  </label>
									<input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Last Name"
                  />
								</div>
								<div className="relative w-full mb-3 mt-8">
								  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="select"
                  >
                    Service Needed
                  </label>
									<Select
										className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
										onChange={handleInput}
										options={services}
									/>
								</div>
							</form>
			    	</div>
		    	</div>
		  	</div>
	  	</div>
		</section>
		)
	}