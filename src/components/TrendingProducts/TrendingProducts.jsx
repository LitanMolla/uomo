import React from 'react'
import Container from '../Container/Container'
import TrendingProductsCard from '../TrendingProductsCard/TrendingProductsCard'
import { Link } from 'react-router'
import Sportswear from '../Sportswear/Sportswear'

const TrendingProducts = () => {
    return (
        <>
            <div className="my-10 md:my-20">
                <Container>
                    <h4 className='uppercase font-medium text-3xl text-center'>Trending <span className='font-bold'>Products</span></h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
                        {
                            [1, 1, 1, 1, 1, 1, 1, 1].map(product => (
                                <TrendingProductsCard />
                            ))
                        }
                    </div>
                    <div className="text-center">
                        <Link to={'/shop'} className='uppercase  font-medium duration-300 hover:border-b-2'>See All Products</Link>
                    </div>
                    <div className="my-10">
                        <Sportswear/>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default TrendingProducts