import React from 'react'
import Container from '../Container/Container'
import { FaTruck } from 'react-icons/fa'
import { MdOutlineSecurity, MdOutlineSupportAgent } from 'react-icons/md'

const Features = () => {
    return (
        <>
            <div className="my-10 md:my-20">
                <Container>
                    <div className="flex justify-center md:justify-between flex-col md:flex-row gap-8">
                        <div className="text-center space-y-2">
                            <FaTruck className='text-5xl mx-auto' />
                            <h4 className='font-medium text-xl uppercase'>Fast And Free Delivery</h4>
                            <p className='text-gray-900/60'>Free delivery for all orders over $140</p>
                        </div>
                        <div className="text-center space-y-2">
                            <MdOutlineSupportAgent className='text-5xl mx-auto' />
                            <h4 className='font-medium text-xl uppercase'>24/7 Customer Support</h4>
                            <p className='text-gray-900/60'>Friendly 24/7 customer support</p>
                        </div>
                        <div className="text-center space-y-2">
                            <MdOutlineSecurity className='text-5xl mx-auto' />
                            <h4 className='font-medium text-xl uppercase'>Money Back Guarantee</h4>
                            <p className='text-gray-900/60'>We return money within 30 days</p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Features