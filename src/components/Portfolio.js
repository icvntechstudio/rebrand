import React from 'react'
import { useQuery } from 'graphql-hooks'


const PORTFOLIO_QUERY = `query {
  allPortfolios {
    portfolioName
    screenshot{
      url
    }
    website
  }
}`


export default function Portfolio() {
	const { loading, error, data } = useQuery(PORTFOLIO_QUERY, {
		variables: {
			variables: 3
		}
	})

	if (loading) return "Loading..."
	if (error) return "Check the logs for error"

	return (
		<div className="bg-gray-300" id="portfolio">
	    <div className="container mx-auto justify-center text-center flex flex-wrap">
		    <div className="w-full xl:w-8/12 lg:w-8/12 md:w-8/12 px-8">
		      <h2 className="font-semibold text-4xl">Some of our past works</h2>
		      <p className="text-lg leading-relaxed mt-4 mb-20 text-gray-600">
		        Majority of our projects had a Non-Disclosure Agreement signed by both our client and us. In total, we have developed about 16 products in the past 2 years.
		      </p>
		    </div>
	    </div>

	    <div className="container mx-auto py-20">
		    <div className="justify-center flex flex-wrap">
		      <div className="w-full lg:w-12/12 px-4">
			      <div className="flex flex-wrap">
							{data.allPortfolios.map(portfolio => (
								<div className="w-full lg:w-4/12 px-4" key={portfolio.id}>
									<h5 className="text-xl font-semibold pb-4 text-center">
										{portfolio.portfolioName}
									</h5>
									<a href={portfolio.website} target="_blank" rel="noopener noreferrer">
										<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
											<img alt="..." className="align-middle border-none max-w-full h-auto rounded-lg" src={portfolio.screenshot.url} />
										</div>
									</a>
								</div>
							))}
			      </div>
		      </div>
		    </div>
	    </div>
    </div>
	)
}