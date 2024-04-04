import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { CustomEase } from "gsap/CustomEase";



const Navbar = () => {
    const navigation = useNavigate();

    const navRef = useRef();

    const [t, i18next] = useTranslation();

    const navAnimated = localStorage.getItem("navAnimated");

    useGSAP(() => {
        gsap.registerPlugin(CustomEase);
        // gsap code here...
        const tl = gsap.timeline();
        if (navAnimated == null) {

            localStorage.setItem("navAnimated", true);

            tl.to(navRef.current, {
                duration: 1,
                // clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                y: 0,
                // repeat:5,
                ease: "power3",
            }, 2.8);

        }else{
            tl.to(navRef.current, {
                duration: 0,
                // clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                y: 0,
                // repeat:5,
                ease: "power3",
            }, 0);
        }
    });




    return (
        <div id="mask-nav">
            <nav ref={navRef}>
                <div id="nav-left" onClick={() => { 
                    navigation("/", { state: { targetId: "hero" } });
                    }}>
                    <img id="logo-nav" src={require("../../assets/logo.svg").default} alt="" />


                </div>
                <div id="nav-right">

                    <a className='nav-optn' onClick={() => { 
                    navigation("/", { state: { targetId: "hero" } });
                    }}>
                        <p className='small-p'>{t("navHome")}</p>
                        <div className='space-btwn'></div>
                        <img src={require("../../assets/nav-dot.svg").default} alt="" />
                    </a>
                    <a className='nav-optn' onClick={() => { 
                    navigation("/", { state: { targetId: "work-container" } });
                    }}>
                        <p className='small-p'>{t("navWork")}</p>
                        <div className='space-btwn'></div>

                        <img src={require("../../assets/nav-dot.svg").default} alt="" />
                    </a>
                    <a className='nav-optn' onClick={() => { 
                    navigation("/", { state: { targetId: "connect-container" } });
                    }}>
                        <p className='small-p'>{t("navContact")}</p>
                        <div className='space-btwn'></div>

                        <img src={require("../../assets/nav-dot.svg").default} alt="" />
                    </a>


                </div>

            </nav>
        </div>
    )
}

export default Navbar