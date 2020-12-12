import React from "react"
import { useQuery } from "graphql-hooks"


const RIGHT_TECH = `query {
  allTechStacks(orderBy: id_ASC,first: 3) {
    language
    logo{
      url
    }
  }
}`

export default function LeftTech() {
  const { loading, error, data } = useQuery(RIGHT_TECH, {
    variables: {
      limit: 3
    }
  })

  if (loading) return "Loading..."
  if (error) return "Sam Ting Wong..."

  return (
    <div className="my-4 w-full px-4 lg:w-6/12 sm:w-6/12 lg:mt-16" >
      {data.allTechStacks.map(left => (
        <div key={left.id}>
          <a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-100 shadow-lg rounded-lg text-center p-8 mt-8">
              <img alt="..." className="max-w-full w-16 mx-auto p-4 bg-gray-100" src={left.logo.url} />
                <p className="text-lg text-grey mt-4 font-semibold">
                  {left.language}
                </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}