import React from 'react'
import banner from '../../assets/product-banner.jpg'
import TrendingProductsCard from '../TrendingProductsCard/TrendingProductsCard'

const Sportswear = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="md:w-1/2">
                    <img className='w-full' src={banner} alt="Banner" />
                </div>
                <div className="md:w-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
                        {
                            [1, 1, 1, 1,].map(product => (
                                <TrendingProductsCard />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sportswear