import React from 'react'
import './navbar.css'


const Navbar = () => {

    return (
        <div>               
            <nav>
            <div id="nav-left">
                <img src={require("../../assets/logo.svg").default} alt="" />


            </div>
            <div id="nav-right">

                <a className='nav-optn' href='#hero'>
                    <p className='small-p'>Home</p>
                    <img src={require("../../assets/nav-dot.svg").default} alt="" />
                </a>
                <a className='nav-optn' href="#work-container">
                    <p className='small-p'>Work</p>
                    <img src={require("../../assets/nav-dot.svg").default} alt="" />
                </a>
                <a className='nav-optn' href="#connect-container">
                    <p className='small-p'>Contact</p>
                    <img src={require("../../assets/nav-dot.svg").default} alt="" />
                </a>


            </div>

        </nav>
        </div>
    )
}

export default Navbar