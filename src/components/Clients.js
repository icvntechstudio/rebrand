import React, { Component } from 'react'
import LottieFeature from '../components/Lottie/LottieFeature'
import shopify from '../assets/lottie/shopify.json'
import mailchimp from '../assets/lottie/mailchimp.json'


class Clients extends Component {
	render() {
		return (
			<div className="bg-gray-300">
	            <div className="container mx-auto">
			        <section className="pt-20 pb-32">
			          <div className="container mx-auto" id="about">
			            <div className="flex flex-wrap justify-center text-center mb-24">
			              <div className="w-full xl:w-8/12 lg:w-8/12 md:w-8/12 px-6">
			                <h2 className="text-4xl font-semibold">Our Partners</h2>
			                <p className="text-lg leading-relaxed m-4 text-gray-600">
			                  We are privileged to be trusted by our partners to help us deliver excellence
			                </p>
			              </div>
			            </div>
			            <div className="flex flex-wrap justify-center items-center ">
			              <div className="w-full md:w-6/12 lg:w-3/12 sm:w-1/2 lg:mb-0 mb-12 px-6">
			                <div>
												<LottieFeature lotti={shopify} height={160} width={140} />
			                  <div className="pt-6 text-center">
			                    <h5 className="text-xl font-bold">Shopify Partners</h5>
			                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
			                      Lorem Ipsum Dolor
			                    </p>
			                  </div>
			                </div>
			              </div>
			              <div className="w-full md:w-6/12 lg:w-3/12 sm:w-1/2 xs:w-1/2 xs:-px-5 lg:mb-0 mb-12 px-8 p-6">
			                <div className="-mb-7 -px-3">
												<img alt="..." src="https://assets.freelancersunion.org/static/images/member-badge.5309fe6e0c7a.gif" className="shadow-lg rounded-full mx-auto max-w-120-px h-35 w-40"
			                  />
			                  <div className="pt-6 text-center">
			                    <h5 className="text-xl font-bold">Freelance Union</h5>
			                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
			                      Lorem Ipsum Dolor
			                    </p>
			                  </div>
			                </div>
			              </div>
			              <div className="w-full md:w-6/12 lg:w-3/12 sm:w-1/2 lg:mb-0 mb-12 px-6">
			                <div>
			                  <LottieFeature lotti={mailchimp} height={160} width={140} />
			                  <div className="pt-6 text-center">
			                    <h5 className="text-xl font-bold">Mailchimp & Co.</h5>
			                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
			                      Lorem Ipsum Dolor
			                    </p>
			                  </div>
			                </div>
			              </div>

			            </div>
			          </div>
			        </section>
	        </div>
			</div>

		)
	}
}

export default Clients
