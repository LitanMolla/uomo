import React from 'react'
import lookbook from '../../assets/lookbook-bg.jpg'
const Lookbook = () => {
    return (
        <>
            <div className="relative">
                <img className="w-full" src={lookbook} alt="lookbook" />
                <div className="absolute text-center left-1/2 top-1/2 -translate-1/2">
                    <h4 className='text-3xl md:text-5xl font-medium'>MAN</h4>
                    <h4 className='text-3xl md:text-5xl font-medium text-[#B9A16B]'>LOOKBOOK</h4>
                </div>
            </div>
        </>
    )
}

export default Lookbook