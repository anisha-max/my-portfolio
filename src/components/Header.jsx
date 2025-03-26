import React, { useCallback, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Header() {
  const [openNav , setOpenNav] = useState(false)
  const [hidden , setHidden] = useState(false)


  useEffect(() => {
    const handleResize =() => {
      setHidden(window.innerWidth < 768)
    }
  
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <header className='fixed-top relative bg-zinc-800 h-12 w-100 flex justify-between items-center px-5'>
        <div>
          <h1>
            <Link to={"/"}>
              Logo
            </Link>
          </h1>
        </div>
       
<div>
  
<button
          className='md:hidden bg-zinc-600 p-1 rounded-sm hover:bg-zinc-500 '
          onClick={()=> setOpenNav((prev)=> !prev)}
        >
         {openNav ? <IoCloseSharp/> : <FaBars/>}
        </button>
          <Navbar openNav={openNav} />
</div>
   
   <button  className={`${hidden? "hidden" : "block"}`}>Contact</button>

      </header>
    </div>
  )
}

export default Header
