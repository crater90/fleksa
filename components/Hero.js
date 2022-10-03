import { useRouter } from 'next/router'
import React from 'react'

function Hero({ offers }) {
    const { locale } = useRouter();
    return (
        <div className='relative bg-hero-image h-[500px] lg:h-[400px] text-white'>
            <div className='flex gap-x-2 p-2 lg:hidden absolute top-0'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <p>Back</p>
            </div>
            <div className='py-14 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto'>
                <div className='p-3 lg:p-0 grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <h1 className='font-semibold text-4xl md:text-4xl lg:text-5xl'>Nidda Restaurant</h1>
                        <p className='pb-4'>{locale === 'en-US' ? 'English shop category' : 'German shop category'}</p>
                    </div>
                    <div>
                        <h1 className='uppercase underline underline-offset-4 decoration-yellow-400 pb-2'>{locale === 'en-US' ? 'Offers' : 'Rabatte'}</h1>
                        <div className='max-h-[240px] sm:max-h-[250px] overflow-y-auto'>
                            {offers.map(offer => {
                                return (
                                    <div key={offer.code} className='flex p-2'>
                                        <div className='h-5 w-5'>
                                            <svg viewBox="0 0 24 24" fill='white' aria-hidden="true"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path></svg>
                                        </div>
                                        {locale === 'en-US' ?
                                            <p>
                                                <span className='text-black font-bold bg-white px-2 mr-2'>
                                                    {offer.code}
                                                </span>
                                                Discount of {offer.provided}{offer.offer_type_ === 'PERCENTAGE' ? '%' : '€'} on orders above {offer.min_amount} €
                                            </p> : <p>
                                                <span className='text-black font-bold bg-white px-2 mr-2'>
                                                    {offer.code}
                                                </span>
                                                {offer.provided}{offer.offer_type_ === 'PERCENTAGE' ? '%' : '€'} Rabatt auf Bestellungen über {offer.min_amount} €
                                            </p>
                                        }

                                    </div>
                                )
                            })}

                        </div>
                    </div>

                </div>

            </div>


        </div >
    )
}

export default Hero