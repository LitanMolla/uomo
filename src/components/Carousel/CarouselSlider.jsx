import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import slider4 from '../../assets/slider4.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider1 from '../../assets/slider1.jpg'
import { Link } from 'react-router';

const CarouselSlider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
  return (
    <>
        <div className="">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                    deviceType={true}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className='mx-[1px] relative'>
                        <img className='w-full h-full ' src={slider1} alt="Slider img" />
                        <div className="absolute inset-0 flex items-end">
                            <div className="p-5 md:p-10">
                                <h4 className='text-2xl uppercase font-medium'>New In</h4>
                                <Link to={'/shop'} className='uppercase duration-300 hover:border-b-2'>Browse All</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mx-[1px] relative'>
                        <img className='w-full h-full ' src={slider2} alt="Slider img" />
                        <div className="absolute inset-0 flex items-end">
                            <div className="p-5 md:p-10">
                                <h4 className='text-2xl uppercase font-medium'>Coats</h4>
                                <Link to={'/shop'} className='uppercase duration-300 hover:border-b-2'>Browse All</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mx-[1px] relative'>
                        <img className='w-full h-full ' src={slider3} alt="Slider img" />
                        <div className="absolute inset-0 flex items-end">
                            <div className="p-5 md:p-10">
                                <h4 className='text-2xl uppercase font-medium'>Shoes</h4>
                                <Link to={'/shop'} className='uppercase duration-300 hover:border-b-2'>Browse All</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mx-[1px] relative'>
                        <img className='w-full h-full ' src={slider4} alt="Slider img" />
                        <div className="absolute inset-0 flex items-end">
                            <div className="p-5 md:p-10">
                                <h4 className='text-2xl uppercase font-medium'>Accessories</h4>
                                <Link to={'/shop'} className='uppercase duration-300 hover:border-b-2'>Browse All</Link>
                            </div>
                        </div>
                    </div>
                </Carousel>;
            </div>
    </>
  )
}

export default CarouselSlider;