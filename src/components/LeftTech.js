import React from "react"
import { useQuery } from "graphql-hooks"
import { Link } from "react-router-dom";


const LEFT_TECH = `query {
  allTechStacks(first: 3) {
    language
    logo{
      id
      url
      alt
    }
    website
  }
}`

export default function LeftTech() {
  const { loading, error, data } = useQuery(LEFT_TECH, {
    variables: {
      limit: 3
    }
  })

  if (loading) return ""
  if (error) return " "

  return (
    <>
    <div className="w-full px-4 lg:w-6/12 sm:w-6/12" >
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