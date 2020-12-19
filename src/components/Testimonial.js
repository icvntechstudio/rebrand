import React from 'react'
import { useQuery } from 'graphql-hooks'


const TESTIMONIAL_QUERY = `query {
  allTestimonials{
    clientName
    clientLogo {
      url
      alt
    }
    clientRole
    clientTestimonial
  }
  testimonialHeading{
    title
    subtitle
  }
}`

export default function Testimonial() {
	const { loading, error, data } = useQuery(TESTIMONIAL_QUERY, {
		variables: {
			limit: 10
		}
	})

  if (loading) return ""
  if (error) return " "

	return(
		<>
		<div className="bg-gray-300 px-6">
			<div className="mb-24">
				<div className="container mx-auto flex flex-wrap justify-center text-center">
					<div className="w-full xl:w-8/12 lg:w-8/12 md:w-8/12 px-8">
						<h1 className="font-semibold text-4xl">{data.testimonialHeading.title}</h1>
						<p className="text-lg leading-relaxed mt-4 mb-20 text-gray-600">
	            {data.testimonialHeading.subtitle}
	          </p>
					</div>
					<div className="flex flex-wrap m-4 container mx-auto">
						{data.allTestimonials.map(testimonial => (
							<div className="lg:pt-12 pt-6 w-full md:w-6/12 px-6" key={testimonial.id}>
							<div className="h-full bg-gray-100 p-8 rounded">
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
									<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
								</svg>
								<p className="leading-relaxed mb-6" >{testimonial.clientTestimonial}
								</p>
									<img alt="" src={testimonial.clientLogo.url} className="lazyload w-24 h-20 rounded-full flex-shrink-0 object-cover object-center mx-auto" />
									<span className="flex-grow flex flex-col pl-4">
										<span className="title-font font-medium text-gray-900">{testimonial.clientName}</span>
										<span className="text-gray-500 text-sm">{testimonial.clientRole}</span>
									</span>
							</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
		</>
	)
}
