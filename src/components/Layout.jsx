import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import BackgroundMusic from './BackgroundMusic'
import HexagonBackground from './HexagonBackground';

function Layout() {
    return (
        <>
        <BackgroundMusic />
        <HexagonBackground />
            <Header />
            <main >
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
