import React from 'react'
import Container from '../../components/Container/Container'
import { Link } from 'react-router'
import logo from '../../assets/logo.png'
import payment from '../../assets/payment-options.png'
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer className='bg-gray-200 shadow'>
                <Container>
                    <div className="pt-10 md:pt-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

                            <div className="">
                                <Link to={'/'} className='inline-block mb-8'>
                                    <img src={logo} alt="Logo" />
                                </Link>
                                <p>1418 River Drive, Suite 35 Cottonhall, CA 9622 United States</p>
                                <div className="my-5">
                                    <p className='font-semibold'>sale@uomo.com</p>
                                    <p className='font-semibold'>+1 246-345-0695</p>
                                </div>
                                <ul className='flex gap-5'>
                                    <li><Link><FaFacebookF /></Link></li>
                                    <li><Link><FaTwitter /></Link></li>
                                    <li><Link><FaInstagram /></Link></li>
                                    <li><Link><FaYoutube /></Link></li>
                                    <li><Link><FaPinterest /></Link></li>
                                </ul>
                            </div>

                            <div className="">
                                <h4 className='font-medium uppercase mb-8'>Company</h4>
                                <ul className='space-y-3'>
                                    <li><Link className='duration-300 hover:border-b-2'>About Us</Link></li>
                                    <li><Link className='duration-300 hover:border-b-2'>Careers</Link></li>
                                    <li><Link className='duration-300 hover:border-b-2'>Affiliates</Link></li>
                                    <li><Link className='duration-300 hover:border-b-2'>Blog</Link></li>
                                    <li><Link className='duration-300 hover:border-b-2'>Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="">
                                <h4 className='font-medium uppercase mb-8'>Shop</h4>
                                <ul className='space-y-3'>
                                    <li><Link className='duration-300 hover:border-b-2'>New Arrivals</Link></li>
                                    <li><Link className='duration-300 hover:border-b-2'>Accessories</Link></li>
                                    <li><Link className='duration-300 hover:border-b-2'>Men</Link></li>
                                    <li><Link className='duration-300 hover:border-b-2'>Women</Link></li>
                                    <li><Link className='duration-300 hover:border-b-2'>Shop All</Link></li>
                                </ul>
                            </div>
                            <div className="">
                                <h4 className='font-medium uppercase mb-8'>Help</h4>
                                <ul className='space-y-3'>
                                    <li><Link className='duration-300 hover:border-b-2'>Customer Service</Link></li>
                                    <li><Link className='duration-300 hover:border-b-2'>My Account</Link></li>
                                    <li><Link className='duration-300 hover:border-b-2'>Find a Store</Link></li>
                                    <li><Link className='duration-300 hover:border-b-2'>Legal & Privacy</Link></li>
                                    <li><Link className='duration-300 hover:border-b-2'>Contact</Link></li>
                                    <li><Link className='duration-300 hover:border-b-2'>Gift Card</Link></li>
                                </ul>
                            </div>
                            <div className="">
                                <h4 className='font-medium uppercase mb-8'>Subscribe</h4>
                                <p className='my-5'>Be the first to get the latest news about trends, promotions, and much more!</p>
                                <div className="w-full bg-gray-50 flex items-center">
                                    <input type="text" placeholder='Your Email' className='flex-1 outline-0 p-4' />
                                    <Link className='uppercase mr-4 font-medium'>Join</Link>
                                </div>
                                <div className="mt-8">
                                    <p className='font-medium'>Secure payments</p>
                                    <img className='w-full' src={payment} alt="payment-options.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='border-gray-300 mt-12 mb-5' />
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center pb-5 gap-3">
                        <p>©2025 Uomo</p>
                        <div className="flex gap-5">
                            <p><span className='text-gray-900/60'>Language</span> United Kingdom | English</p>
                            <p><span className='text-gray-900/60'>Currency</span> $ USD</p>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer