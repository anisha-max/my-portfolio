import React from 'react'
import { NavLink } from 'react-router-dom'

// Navigation Items
const navItem = [
  {
    link: '/home',
    lable: 'Home'
  },
  {
    link: '/about',
    lable: 'About'
  },
  {
    link: '/projects',
    lable: 'Projects'
  },
  {
    link: '/github',
    lable: 'GitHub'
  },
  {
    link: '/contact',
    lable: 'Contact'
  }
]

function Navbar({ openNav }) {
  return (
    <>
      <div
        className={`min-w-40 flex-col flex right-0 absolute ring-inset bg-zinc-700/90 ring-1 ring-zinc-500 p-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out md:flex-row md:top-1 ${openNav ? 'block' : 'hidden'
          } md:static md:block`}
      >
        {navItem.map(({ link, lable }, key) => (
          <NavLink
            to={link}
            key={key}
            className={({ isActive }) =>
              `px-3 py-2 text-zinc-50 text-sm font-medium rounded-lg hover:text-sky-400 transition duration-300 ease-in-out ${isActive ? 'text-sky-400 bg-zinc-800' : 'text-zinc-50'}`
            }
          >
            {lable}
          </NavLink>
        ))}
      </div>
    </>
  )
}

export default Navbar
