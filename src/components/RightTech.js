import React from "react"
import { useQuery } from "graphql-hooks"
import { Link } from "react-router-dom";


const RIGHT_TECH = `query {
  allTechStacks(orderBy: id_DESC,first: 3) {
    language
    logo{
      url
      alt
    }
    website
  }
}`

export default function LeftTech() {
  const { loading, error, data } = useQuery(RIGHT_TECH, {
    variables: {
      limit: 4
    }
  })

  if (loading) return ""
  if (error) return ""

  return (
    <>
    <div className="w-full px-4 lg:w-6/12 sm:w-6/12 lg:mt-16 xs:mt-0" >
      {data.allTechStacks.map(left => (
        <div key={left.id}>
          <Link to={left.website} target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-100 shadow-lg rounded-lg text-center p-8 mt-8">
              <img alt={left.logo.alt} className="max-w-full w-16 mx-auto p-4 bg-gray-100 lazyload" src={left.logo.url} />
                <p className="text-lg text-grey mt-4 font-semibold">
                  {left.language}
                </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
    </>
  )
}