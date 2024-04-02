import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigation = useNavigate()


    return (
        <div>               
            <nav>
            <div id="nav-left" onClick={() => { navigation("/") }}>
                <img id="logo" src={require("../../assets/logo.svg").default} alt="" />


            </div>
            <div id="nav-right">

                <a className='nav-optn' onClick={() => { navigation("/") }}>
                    <p className='small-p'>Home</p>
                    <div className='space-btwn'></div>
                    <img src={require("../../assets/nav-dot.svg").default} alt="" />
                </a>
                <a className='nav-optn' href="#work-container">
                    <p className='small-p'>Work</p>
                    <div className='space-btwn'></div>

                    <img src={require("../../assets/nav-dot.svg").default} alt="" />
                </a>
                <a className='nav-optn' href="#connect-container">
                    <p className='small-p'>Contact</p>
                    <div className='space-btwn'></div>

                    <img src={require("../../assets/nav-dot.svg").default} alt="" />
                </a>


            </div>

        </nav>
        </div>
    )
}

export default Navbar