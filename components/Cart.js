import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

function Cart() {
    const { locale } = useRouter();
    return (
        <div className='mt-10 px-2 max-h-[600px]'>
            <h1 className='text-2xl font-semibold text-center'>{locale === 'en-US' ? 'Your Cart' : 'Warenkorb'}</h1>
            <hr className='mt-5' />
            <img src='/cart-empty.svg' />
            <p className='text-xl text-gray-500 text-center'>{locale === 'en-US' ? 'Please select at least one product to place an order' : 'Bitte wählen Sie mindestens ein Produkt aus, um eine Bestellung aufzugeben'}</p>
            <div className='mt-5 flex items-center justify-center gap-x-4'>
                <div className='relative h-4 w-10'>
                    <Image src='/visa.png' layout='fill' />
                </div>
                <div className='relative h-4 w-10'>
                    <Image src='/sofort.png' layout='fill' />
                </div>
                <div className='relative h-5 w-8'>
                    <Image src='/mastercard.png' layout='fill' />
                </div>
                <div className='relative h-4 w-10'>
                    <Image src='/paypal.png' layout='fill' />
                </div>
                <div className='relative h-4 w-10'>
                    <Image src='/gpay.png' layout='fill' />
                </div>
                <div className='relative h-4 w-10'>
                    <Image src='/applepay.png' layout='fill' />
                </div>

            </div>

        </div>
    )
}

export default Cart