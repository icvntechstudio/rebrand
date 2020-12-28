import React from 'react';
import { useQuery } from 'graphql-hooks'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import Navbar from './components/Navbar'
import HeaderImage from './components/HeaderImage'
import Footer from './components/Footer'


const PRIVACY_QUERY = `query {
  privacyPolicy(locale: en){
    title
    details(markdown: true)
  }
}`

export default function Privacy() {
  const { loading, error, data } = useQuery(PRIVACY_QUERY, {
    variables: {
      limit: 10
    }
  })

  if (loading) return ""
  if (error) return ""

  return (
    <>
      <section className="body-font bg-gray-900">
        <Navbar />
        <HeaderImage />
          <div className="container px-5 py-24 mx-auto relative">
            <div className="flex flex-col pt-32">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white">{data.privacyPolicy.title}</h1>
              <div className="lg:w-2/3 mx-auto text-base pt-20 pb-16 text-gray-400" dangerouslySetInnerHTML={{ __html: data.privacyPolicy.details }} />
            </div>
          </div>
        <Footer />
        </section>
    </>
  )
}