import React from 'react';
import { useQuery } from 'graphql-hooks'


const TERMS_QUERY = `query {
  termsOfUse(locale: en) {
    title
    description(markdown: true)
  }
}`

export default function TermsBody() {

  const { loading, error, data } = useQuery(TERMS_QUERY, {
    variables: {
      limit: 10
    }
  })

  if (loading) return ""
  if (error) return ""

  const text = data.termsOfUse

  return (
    <>
        <section className="flex flex-wrap justify-center text-center -mb-64">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                    {text.title}
                  </h3>
                </div>
                <div className="mt-20 py-20 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-20 mt-20 text-lg leading-relaxed text-gray-800" dangerouslySetInnerHTML={{ __html: text.description }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}