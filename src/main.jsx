import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'
import Github from './components/Github.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path :"home",
        element: <Home/>
      },
      {
        path :"about",
        element: <About/>
      },
      {
        path :"skills",
        element: <Skill/>
      },
      {
        path :"github",
        element: <Github/>
      },
      {
        path :"projects",
        element: <ProjectCard/>
      },
      {
        path :"contact",
        element: <Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
