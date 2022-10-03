import React from 'react'
import { useRouter } from 'next/router'

function Categories({ categories }) {
    const { locale } = useRouter();
    return (
        <div className='relative'>
            <div className='px-4 mt-10'>
                {categories.map(category => {
                    return (
                        <div>
                            <h1 className=' bg-yellow-100 text-xl text-center py-2'>{locale === 'en-US' ? category.name_json.english : category.name_json.german}</h1>
                            {category.products.map(product => {
                                return (
                                    <div className='my-5 p-5 border-t border-gray-200 flex items-center justify-between transition duration-200 hover:shadow-lg cursor-pointer'>
                                        <div className='w-8/12'>
                                            <h4 className='font-bold'>{locale === 'en-US' ? product.name_json.english : product.name_json.german}</h4>
                                            <p className='text-sm'>{locale === 'en-US' ? product.description_json.english : product.name_json.german}</p>
                                            <p className='font-bold'>{product.price}{` `}€</p>
                                        </div>
                                        <div className='flex'>
                                            <button className='font-bold rounded-lg py-2 px-3 bg-yellow-300'>ADD +</button>

                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    )
                })}
                {locale === 'en-US' ?
                    <div className='text-xs px-2 my-5'>
                        <p>Prices include VAT (excluding additional shipping costs that may apply).</p>
                        <p>If you have allergies or other dietary restrictions, please contact our team. We will provide food-specific information upon request.</p>
                    </div> :
                    <div className='text-xs px-2 my-5'>
                        <p>Preise inkl. MwSt. (zzgl. ggf. anfallender Lieferkosten)</p>
                        <p>Wenn du Allergien oder Ernährungseinschränkungen hast, dann wende dich bitte direkt an uns. Wir stellen auf Anfrage Informationen über unser Gerichte bereit.</p>
                    </div>
                }


            </div>
        </div>
    )
}

export default Categories