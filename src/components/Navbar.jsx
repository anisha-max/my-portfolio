import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiUser, FiFolder, FiGithub, FiMail } from "react-icons/fi";

 const navItem = [
  {
    link: '/home',
    icon: <FiHome />,
  },
  {
    link: '/about',
    icon: <FiUser />,
  },
  {
    link: '/projects',
    icon: <FiFolder />,
  },
  {
    link: '/github',
    icon: <FiGithub />,
  },
  {
    link: '/contact',
    icon: <FiMail />,
  },
];

export function Mylist({classes}){
  return(
    <>
       <ul className={classes}>
            {navItem.map(({ link, icon }, key) => (
              <li key={key} className="mb-4 last:mb-0">
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    ` text-2xl font-bold hover:text-sky-400 transition duration-300 ease-in-out ${isActive ? 'text-sky-400 bg-zinc-800' : 'text-zinc-50'
                    }`
                  }
                >
                  {icon}
                </NavLink>
              </li>
            ))}
          </ul>
          </>
  )
}

function Navbar() {
  return (
    <>
         <div className='ml-auto my-auto bg-[#111] p-3 rounded-lg  border border-sky-400'>
       <Mylist/>
        </div>
    </>
  )
}

export default Navbar
