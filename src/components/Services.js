import React from 'react'
import { useQuery } from "graphql-hooks"


const SOLUTION_QUERY = `query {
  allSolutions{
    title
    description
    icon{
			url
		}
	}
  solutionHeading{
    title
    subtitle
  }
}`

export default function Services() {
	const { loading, error, data } = useQuery(SOLUTION_QUERY, {
		variables: {
			limit: 5
		}
	})

	if (loading) return ""
	if (error) return ""

	return (
		<>
	        <section className="pb-32 relative block bg-gray-900" id="solutions">
	          <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style={{ transform: "translateZ(0)" }}>
	            <svg
	              className="absolute bottom-0 overflow-hidden"
	              xmlns="http://www.w3.org/2000/svg"
	              preserveAspectRatio="none"
	              version="1.1"
	              viewBox="0 0 2560 100"
	              x="0"
	              y="0">
	              <polygon
	                className="text-gray-900 fill-current"
	                points="2560 0 2560 100 0 100">
								</polygon>
	            </svg>
	          </div>
	          <div className="container mx-auto lg:pt-24 lg:pb-64 px-12" id="solutions">
	            <div className="flex flex-wrap text-center justify-center">
	              <div className="w-full xl:w-8/12 lg:w-8/12 md:w-8/12 px-4">
	                <h2 className="text-4xl font-semibold text-white">
	                  {data.solutionHeading.title}
	                </h2>
	                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
	                  {data.solutionHeading.subtitle}
	                </p>
	              </div>
	            </div>
	            <div className="flex flex-wrap mt-12 justify-center">
								{data.allSolutions.map((solution) => (
	              <div className="w-full lg:w-4/12 px-4 text-center">
	                <div className="text-gray-900 p-3 w-40 h-40 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
											<img
												alt="..."
												src={solution.icon.url}
												className="max-w-full mx-auto lazyload"
											/>
	                </div>
	                <h6 className="text-xl mt-5 font-semibold text-white">
	                  {solution.title}
	                </h6>
	                <p className="mt-2 mb-4 text-gray-500">
	                  {solution.description}
	                </p>
	              </div>
								))}
	            </div>
	          </div>
	        </section>
		</>
	)
}
