import React from 'react'
import { NavLink } from 'react-router-dom'

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
    link: '/project',
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
      <div className={`min-w-40 flex-col flex right-0 absolute  ring-inset bg-zinc-600 ring-1 ring-zinc-500 p-2 rounded-xl  md:flex-row md:top-1  ${openNav ? 'block' : 'hidden'
        } md:static md:block`}>
        {navItem.map(({ link, lable }, key) =>
          <NavLink to={link} key={key} className={({ isActive }) =>
            `px-1 text-zinc-50 hover:text-zinc-400 ${isActive ? "text-zinc-500 " : "text-zinc-50"}`

          }>
           {lable}

          </NavLink>
        )}
      </div>
    </>
  )
}

export default Navbar
