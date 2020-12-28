import React from 'react';
import { useQuery } from 'graphql-hooks'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import Navbar from './components/Navbar'
import HeaderImage from './components/HeaderImage'
import Footer from './components/Footer'


const TERMS_QUERY = `query {
  termsOfUse(locale: en) {
    title
    description(markdown: true)
  }
}`

export default function Terms() {
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
      <section className="bg-gray-900">
        <Navbar />
        <HeaderImage />
          <div className="container px-5 py-24 mx-auto">
            <div className="pt-32 relative mr-4 ml-4" key={text.id}>
              <h1 className="sm:text-3xl text-center text-2xl font-medium title-font text-white">{text.title}</h1>
              <div className="lg:w-1/3 mx-auto pt-20 pb-16 text-gray-400 " dangerouslySetInnerHTML={{ __html: text.description }} />
            </div>
          </div>
        <Footer />
        </section>
    </>
  )
}