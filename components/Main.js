import React from 'react'
import Cart from './Cart'
import Categories from './Categories'
import { useRouter } from 'next/router'

function Main({ categories }) {
    const { locale } = useRouter();
    return (
        <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-12 md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto'>
                <div className='col-span-3'>
                    <div className='hidden lg:inline sticky top-20 mt-10 h-[80vh] overflow-y-auto'>
                        <div className='mt-5 flex items-center border-2 border-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 p-0.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <input placeholder='Search Here' className='border-black border-l-2 outline-none pl-2 py-1' />
                        </div>

                        {categories.map(category => {
                            return (
                                <ul key={category.id} className='appearance-none flex lg:flex-col mr-2 mt-4'>
                                    <li className='flex lg:justify-end '><a className='curson-pointer active:active-dropdown'>{locale === 'en-US' ? category.name_json.english : category.name_json.german}</a></li>
                                </ul>
                            )
                        })}
                    </div>
                </div>

                <div className='col-span-5'>
                    <Categories categories={categories} />
                </div>

                <div className='col-span-4'>
                    <div className='hidden lg:inline sticky top-20'>

                        <Cart />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Main