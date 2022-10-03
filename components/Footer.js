import React from 'react'

function Footer() {
    return (
        <div className='hidden lg:flex justify-between items-center bg-neutral-900 text-gray-300 px-4 py-5 text-sm min-h-[140px]'>

            <div className='w-1/3'>
                <ul className='appearance-none'>
                    <li>Ludwig-Landmann-Straße 326</li>
                    <li>60488 Frankfurt am Main</li>
                    <li>nidda@fleksa.great</li>
                    <li>+49 6927295936</li>
                </ul>
            </div>
            <div className='w-1/3 text-center'>
                <h5>Online ordering system</h5>
                <p>Powered by</p>
                <img className='h-6 text-center mx-auto mt-2' src='/fleksa-logo.svg' />
            </div>
            <div className='w-1/3 px-4'>
                <div className='flex gap-x-2 items-center justify-center'>
                    <a className='border-2 border-gray-300 rounded-full h-8 w-8 flex items-center justify-center'><img height={16} width={16} src='/twitter.svg' /></a>
                    <a className='border-2 border-gray-300 rounded-full h-8 w-8 flex items-center justify-center'><img height={12} width={12} src='/facebook.svg' /></a>
                    <a className='border-2 border-gray-300 rounded-full h-8 w-8 flex items-center justify-center'><img height={16} width={16} src='/instagram.svg' /></a>
                    <a className='border-2 border-gray-300 rounded-full h-8 w-8 flex items-center justify-center'><img height={16} width={16} src='/google-playstore.svg' /></a>
                    <a className='border-2 border-gray-300 rounded-full h-8 w-8 flex items-center justify-center'><img height={16} width={16} src='/apple-appstore.svg' /></a>
                    <a className='border-2 border-gray-300 rounded-full h-8 w-8 flex items-center justify-center'><img height={16} width={16} src='/eatarian.svg' /></a>
                </div>
                <p className='mt-10'>©️2021 Fleksa | Terms & Conditions | Privacy Policy | Imprint</p>
            </div>

        </div>
    )
}

export default Footer