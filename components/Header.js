import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Header() {
    const { locale, asPath, pathname } = useRouter();

    return (
        <header className='sticky top-0 z-30 bg-white shadow-md'>
            <div className='hidden lg:flex justify-between pt-4 pb-3 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto'>
                <div className='relative h-12 w-12'>
                    <Image src='/icon.webp' layout='fill' />
                </div>

                <div className='flex gap-x-6 items-center'>
                    <ul className='flex items-center uppercase gap-x-6 font-bold'>
                        <li>{locale === 'en-US' ? 'Home' : 'Home'}</li>
                        <Link href='/menu'><li className={pathname === '/menu' ? 'active-nav cursor-pointer' : 'cursor-pointer'}>{locale === 'en-US' ? 'Menu' : 'Speisekarte'}</li></Link>
                        <li>{locale === 'en-US' ? 'Discover' : 'Entdecken'}</li>
                        <li>{locale === 'en-US' ? 'Reservation' : 'Reservierung'}</li>
                        <li>{locale === 'en-US' ? 'Gallery' : 'Galerie'}</li>
                        <li>{locale === 'en-US' ? 'Contact' : 'Kontakt'}</li>
                        <li>{locale === 'en-US' ? 'Login' : 'Anmelden'}</li>
                    </ul>
                    <div className='relative border rounded-full h-12 w-12 cursor-pointer'>
                        {locale === 'en-US' ?
                            <Link locale='de-DE' href={asPath}>
                                <Image className='rounded-full' objectFit='cover' src='/flag-united-kingdom.svg' layout='fill' />
                            </Link>
                            : <Link locale='en-US' href={asPath}>
                                <Image className='rounded-full' objectFit='cover' src='/flag-german.svg' layout='fill' />
                            </Link>
                        }

                    </div>

                </div>




            </div>

        </header>
    )
}

export default Header