import React, { useEffect, useState } from 'react'
import './navbar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { CustomEase } from "gsap/CustomEase";
import { ReactComponent as LogoHero } from '../../assets/logo-hero.svg';



const Navbar = () => {
    const navigation = useNavigate();
    const location = useLocation();

    const navRef = useRef();
    const logoRef = useRef();
    const svgLogoRef = useRef();

    const [logoColor, setLogoColor] = useState("");
    // const [navBgColor, setnavBgColor] = useState("");

    const [t, i18next] = useTranslation();

    const navAnimated = localStorage.getItem("navAnimated");

    console.log(location.pathname);

    useEffect(() => {

        if (location.pathname === "/case-study/olab") {

            if (svgLogoRef.current != null) {



                navRef.current.style.backgroundColor = "#FFF2EB";

                setLogoColor("#471D02");

            }
        } else if (location.pathname === "/") {
            if (svgLogoRef.current != null) {
                setLogoColor("#FFF2EB");

                navRef.current.style.backgroundColor = "#272727";

            }
        } else {
            console.log("noneofthat");
        }

    }, [location.pathname])






    useGSAP(() => {
        gsap.registerPlugin(CustomEase);
        // gsap code here...
        const tl = gsap.timeline();
        if (navAnimated == null) {

            localStorage.setItem("navAnimated", true);

            tl.fromTo(navRef.current, {

                // clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                y: -60,
                // repeat:5,

            },
                {
                    y: 0,
                    duration: 1,
                    ease: "power2.inOut",

                },
                0);

        }
    });

    console.log(LogoHero);





    // useGSAP(() => {
    //     gsap.registerPlugin(CustomEase);
    //     // gsap code here...
    //     const tl = gsap.timeline();
    //     if (navAnimated == null) {

    //         localStorage.setItem("navAnimated", true);

    //         tl.to(navRef.current, {
    //             duration: 1,
    //             // clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    //             y: 0,
    //             // repeat:5,
    //             ease: "power3",
    //         }, 2.2);

    //     }else{
    //         tl.to(navRef.current, {
    //             duration: 0,
    //             // clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    //             y: 0,
    //             // repeat:5,
    //             ease: "power3",
    //         }, 0);
    //     }
    // });




    return (
        <div id="mask-nav">
            <nav ref={navRef}>
                <div id="nav-left" onClick={() => {
                    navigation("/", { state: { targetId: "mask-nav" } });
                }}>
                    {/* <LogoHero id="logo-component"/> */}
                    <svg ref={svgLogoRef} width="88" height="37" viewBox="0 0 88 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="logo-path" d="M18.45 0C28.6401 9.61969e-07 36.9009 8.26075 36.9009 18.4509C36.9009 28.641 28.6401 36.9018 18.45 36.9018L18.45 0Z" fill={logoColor} />
                        <path className="logo-path" d="M6.14701 6.14978C12.9405 6.14978 18.4477 11.657 18.4477 18.4505C18.4477 25.244 12.9405 30.7512 6.147 30.7512L6.14701 6.14978Z" fill={logoColor} />
                        <path className="logo-path" d="M3.07543 15.3757C4.77394 15.3757 6.15086 16.7527 6.15086 18.4512C6.15086 20.1497 4.77394 21.5266 3.07543 21.5266C1.37692 21.5266 -1.37504e-07 20.1497 0 18.4512C1.37518e-07 16.7527 1.37692 15.3757 3.07543 15.3757Z" fill={logoColor} />
                        <path className="logo-path" d="M69.2805 0C59.0904 9.61969e-07 50.8296 8.26075 50.8296 18.4509C50.8296 28.641 59.0904 36.9018 69.2805 36.9018V0Z" fill={logoColor} />
                        <path className="logo-path" d="M81.5835 6.14978C74.79 6.14978 69.2827 11.657 69.2827 18.4505C69.2827 25.244 74.79 30.7512 81.5835 30.7512V6.14978Z" fill={logoColor} />
                        <path className="logo-path" d="M84.655 15.3757C82.9565 15.3757 81.5796 16.7527 81.5796 18.4512C81.5796 20.1497 82.9565 21.5266 84.655 21.5266C86.3536 21.5266 87.7305 20.1497 87.7305 18.4512C87.7305 16.7527 86.3536 15.3757 84.655 15.3757Z" fill={logoColor}/>
                    </svg>



                </div>
                <div id="nav-right">

                    <a className='nav-optn' onClick={() => {
                        navigation("/", { state: { targetId: "mask-nav" } });
                    }}>
                        <p className='small-p'>{t("navHome")}</p>
                        <div className='space-btwn'></div>
                        <img className="asterisk" src={require("../../assets/asterisk-white.svg").default} alt="" />
                    </a>
                    <a className='nav-optn' onClick={() => {
                        navigation("/", { state: { targetId: "case-container-olab" } });
                    }}>
                        <p className='small-p'>{t("navWork")}</p>
                        <div className='space-btwn'></div>

                        <img className="asterisk" src={require("../../assets/asterisk-white.svg").default} alt="" />
                    </a>
                    <a className='nav-optn' onClick={() => {
                        navigation("/", { state: { targetId: "connect-container" } });
                    }}>
                        <p className='small-p'>{t("navContact")}</p>
                        <div className='space-btwn'></div>

                        <img className="asterisk" src={require("../../assets/asterisk-white.svg").default} alt="" />
                    </a>


                </div>

            </nav>
        </div>
    )
}

export default Navbar