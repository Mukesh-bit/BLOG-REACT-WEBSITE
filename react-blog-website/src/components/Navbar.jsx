import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from './Modal'
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaXmark } from 'react-icons/fa6'


const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggeleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/about", link: "About" },
    { path: "/services", link: "Services" },
    { path: "/contact", link: "Contact" },
  ]

  // MODAL DETAILS
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
      <nav className='px-4 py-4 max-w-7xl mx-auto justify-between items-center flex'>
        <a href="/" className='text-xl font-bold text-white'>BLOG</a>

        <ul className='md:flex gap-12 text-lg hidden'>
          {
            navItems.map(({ path, link }) => <li className='text-white' key={path}> <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""} to={path}>{link}</NavLink> </li>)
          }
        </ul>

        <div className='text-white lg:flex gap-4 items-center hidden'>
          <a href="/" className='hover:text-orange-500'><FaFacebook /></a>
          <a href="/" className='hover:text-orange-500'><FaInstagram /></a>
          <a href="/" className='hover:text-orange-500'><FaTwitter /></a>
          <button onClick={openModal} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log In</button>
        </div>

        {/* MODAL COMPONENT */}
        <Modal isOpen={isModalOpen} onClose={closeModal}/>

          {/* MOBILE MENU BTN , DISPLAY MOBILE SCREEN */}
        <div className='md:hidden'>
          <button className='cursor-pointer' onClick={toggeleMenu}>
            {
              isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
            }
          </button>
        </div>
      </nav>

      <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
          {
            navItems.map(({ path, link }) => <li className='text-black' key={path}> <NavLink onClick={toggeleMenu} to={path}>{link}</NavLink> </li>)
          }
        </ul>
      </div>
    </header>
  )
}

export default NavBar