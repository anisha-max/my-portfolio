import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'
import Github from './components/Github.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import Contact from './components/Contact.jsx'
import GitLoader from './components/GitLoader.js'
import AchievementsPage from './components/AchievementsPage.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'skills', element: <Skill /> },
      { path: 'github', element: <Github />, loader: GitLoader },
      { path: 'projects', element: <ProjectCard /> },
      { path: 'contact', element: <Contact /> },
      { path: 'achivements', element: <AchievementsPage /> },
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
