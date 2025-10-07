import React from 'react'
import Container from '../Container/Container'
import TrendingProductsCard from '../TrendingProductsCard/TrendingProductsCard'
import banner from '../../assets/banner.jpg'

const ElementsofStyle = () => {
    return (
        <>
            <div className="my-10 md:my-20">
                <Container>
                    <div className="flex justify-between flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                            <h3 className='text-3xl uppercase mb-8'>Elements of <span className='font-semibold'>Style</span></h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <TrendingProductsCard />
                                <TrendingProductsCard />
                            </div>
                        </div>
                        <div className="md:w-1/2 relative">
                            <img className='w-full' src={banner} alt="banner" />
                            <p className='text-xl uppercase font-medium absolute top-7 -right-15 -rotate-90 hidden md:block'>Women</p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ElementsofStyle