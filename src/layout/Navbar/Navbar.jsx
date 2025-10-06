import React from 'react'
import Container from '../../components/Container/Container'
import { Link, NavLink } from 'react-router'
import logo from '../../assets/logo.png'
import { Heart, Menu, Search, ShoppingBag, User } from 'lucide-react'
const Navbar = () => {
    return (
        <>
            <header className='py-3 shadow'>
                <Container>
                    <div className="flex justify-between items-center">
                        <Link className='md:hidden'><Menu /></Link>
                        <Link>
                            <img src={logo} alt="Logo" />
                        </Link>
                        <ul className='hidden md:flex gap-5'>
                            <li><NavLink to='/' className={({ isActive }) => isActive ? 'uppercase block font-medium border-b-2' : 'font-medium duration-300 hover:border-b-2 uppercase'}>Home</NavLink></li>
                            <li><NavLink to='/shop' className={({ isActive }) => isActive ? 'uppercase block font-medium border-b-2' : 'font-medium duration-300 hover:border-b-2 uppercase'}>Shop</NavLink></li>
                            <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'uppercase block font-medium border-b-2' : 'font-medium duration-300 hover:border-b-2 uppercase'}>Blog</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'uppercase block font-medium' : 'font-medium duration-300 hover:border-b-2 uppercase'}>Pages</NavLink></li>
                            <li><NavLink to='/about' className={({ isActive }) => isActive ? 'uppercase block font-medium border-b-2' : 'font-medium duration-300 hover:border-b-2 uppercase'}>About</NavLink></li>
                            <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'uppercase block font-medium border-b-2' : 'font-medium duration-300 hover:border-b-2 uppercase'}>Contact</NavLink></li>
                        </ul>
                        <div className="flex gap-5">
                            <Link className='hidden md:inline-block'><Search /></Link>
                            <Link className='hidden md:inline-block'><User /></Link>
                            <Link className='hidden md:inline-block'><Heart /></Link>
                            <Link className='relative'><ShoppingBag /><span className='absolute -bottom-2 -right-2 text-gray-100 bg-red-600 text-xs h-5 min-w-5 flex justify-center items-center rounded-full'>20</span></Link>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Navbar;