import React from 'react'
import { useQuery } from 'graphql-hooks'


const ABOUT_QUERY = `query {
  about{
    title
    subtitle
    list
    image{
      url
      alt
    }
  }
}`

export default function About() {
  const { loading, error, data } = useQuery(ABOUT_QUERY, {
    variables: {
      limit: 5
    }
  })

  if (loading) return ""
  if (error) return ""

  		return (
        <>
        <section className="relative py-20 pb-40 px-8" id="about">
          <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style={{ transform: "translateZ(0)" }}>
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-8 ml-auto mr-auto mb-12">
                <img
                  alt={data.about.image.alt}
                  className="max-w-full rounded-lg shadow-lg lazyload"
                  src={data.about.image.url}
                />
              </div>
              <div className="w-full lg:w-6/12 ml-auto mr-auto px-6">
                <div className="md:pr-12">
                  <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">{data.about.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    {data.about.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
		)

}