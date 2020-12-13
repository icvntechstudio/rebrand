
import LottieFeature from '../components/Lottie/LottieFeature'
import { useQuery } from 'graphql-hooks'

const FEATURE_QUERY = `query {
  allFeatures{
    name
    description
    lottie
  }
}`

export default function Feature() {
	const { loading, error, data } = useQuery(FEATURE_QUERY, {
		variables: {
			limit: 3
		}
	})

	if (loading) return ""
	if (error) return ""
			return(
			<div className="pb-12 bg-gray-300">
				<div className="container mx-auto px-4">
			        <div className="flex flex-wrap" id="features">
								{data.allFeatures.map((feature) => (
			            <div className="w-full md:w-4/12 px-4 text-center pt-10">
				            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl rounded-lg">
				              <div className="px-4 py-5 flex-auto">
				                <div className="text-white text-center inline-flex items-center justify-center w-40 h-40 mb-5 shadow-2xl rounded-full">
				                  <LottieFeature lotti={feature.lottie} height={100} width={120} />
				                </div>
				                <h6 className="text-xl font-semibold">{feature.name}</h6>
				                <p className="mt-2 mb-4 text-gray-600">
				                  {feature.description}
				                </p>
				              </div>
				            </div>
			            </div>
								))}
			        </div>
			    </div>
			</div>
		)
}
