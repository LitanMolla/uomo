import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router'

const TrendingProductsCard = () => {
    return (
        <>
            <div className="border border-gray-200 duration-300 hover:shadow-xl">
                <div className="h-80">
                    <img className='w-full h-full object-cover' src="https://uomo-html.flexkitux.com/images/home/demo7/product-3-2.jpg" alt="" />
                </div>
                <div className="p-4">
                    <p className='text-gray-900/60'>Dresses</p>
                    <p>Cropped Faux Leather Jacket</p>
                    <p>$29</p>
                    <div className="flex justify-between items-center">
                        <Link className='uppercase font-medium duration-300 hover:border-b-2'>Add to cart</Link>
                        <Link className='uppercase font-medium duration-300 hover:border-b-2'>Quick View</Link>
                        <Link className='uppercase font-medium'><FaRegHeart/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingProductsCard