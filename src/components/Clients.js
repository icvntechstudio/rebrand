import React from 'react'
import { useQuery } from "graphql-hooks"


const PARTNER_QUERY = `query {
  allPartners {
    name
		website
		logo{
			url
			alt
			id
		}
	}
  partnerHeading {
	id
    title
    subtitle
  }
}`


export default function Clients() {
	const { loading, error, data } = useQuery(PARTNER_QUERY, {
		variables: {
			limit: 5
		}
	})

  if (loading) return ""
  if (error) return " "

	return (
		<>
		<div className="bg-gray-300">
			<div className="container mx-auto">
				<section className="pt-20 pb-32">
					<div className="container mx-auto">
						<div className="flex flex-wrap justify-center text-center mb-24">
							<div className="w-full xl:w-8/12 lg:w-8/12 md:w-8/12 px-6" key={data.partnerHeading.id}>
								<h2 className="text-4xl font-semibold">{data.partnerHeading.title}</h2>
								<p className="text-lg leading-relaxed m-4 text-gray-600">
			            {data.partnerHeading.subtitle}
			          </p>
							</div>
						</div>
						<div className="flex flex-wrap justify-center items-center mx-auto p-8">
							{data.allPartners.map((partner) => (
								<div className="w-full md:w-6/12 lg:w-4/12 sm:w-1/2 lg:mb-0 mb-12 px-6 mt-12">
										<div className="mx-auto my-auto mb-4 w-40 h-40" key={partner.id}>
											<img
												alt={partner.logo.alt}
												src={partner.logo.url}
												className="max-w-full mx-auto lazyload"
											/>
										</div>
										<div className="pt-6 text-center">
											<h5 className="text-xl font-bold">{partner.name}</h5>
										</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
		</>
	)
}
