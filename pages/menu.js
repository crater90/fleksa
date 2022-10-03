import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Main from '../components/Main'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'

function menu({ data }) {
    const { locale, asPath } = useRouter();

    return (
        <div className='h-screen overflow-y-scroll'>
            <Header />
            <Hero offers={data.offers} />
            <Main categories={data.categories} />
            <Footer />
        </div>
    )
}

export default menu

export async function getStaticProps() {
    // Call to an external API endpoint to get data.
    const res = await fetch('https://myqa.fleksa.com/pyapi/43/menu')
    const data = await res.json()
    return {
        props: {
            data
        },
    }
}