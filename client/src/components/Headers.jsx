import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import {useSelector} from "react-redux";

const Headers = () => {
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to="/">
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
               <span className='text-slate-500'>Real</span>
               <samp className='text-slate-700'>Estates</samp>
            </h1>
          </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
              <input type="text" placeholder='Search Property' className='bg-transparent w-30 sm:64 focus:outline-none'/>
              <FaSearch className='text-slate-600' />
            </form>
           <ul className='flex gap-4  px-2'>
            <Link to="/">
            <li className='text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to="/about">
            <li className='text-slate-700 hover:underline'>About</li>
            </Link>

            <Link to="/profile">
           
              {currentUser ? (
                <img src={currentUser.avatar} alt className='rounded-full h-7 w-7 object-cover' />
              ) :(
              <li className='text-slate-700 hover:underline'>SignIn</li>
              )}
            
            </Link>
            
           </ul>
      </div>
    </header>
  )
}

export default Headers
