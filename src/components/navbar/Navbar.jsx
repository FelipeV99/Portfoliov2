import React, { useEffect, useState, useRef } from 'react'
import './navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { useGSAP } from '@gsap/react'

const Navbar = () => {
    const navigation = useNavigate();
    const location = useLocation();

    const navRef = useRef();
    const logoRef = useRef();
    const svgLogoRef = useRef();

    // const [logoColor, setLogoColor] = useState("");
    // const [navOptColor, setNavOptColor] = useState("#FFF2EB");
    // const [asteriskColor, setAsteriskColor] = useState("FFF2EB");


    const [t, i18next] = useTranslation();

    // useEffect(() => {

    //     if (location.pathname === "/case-study/olab") {

    //         if (svgLogoRef.current != null) {
    //             navRef.current.style.backgroundColor = "#FFF2EB";
    //             setLogoColor("#471D02");
    //             setNavOptColor("#471D02");
    //             setAsteriskColor("#471D02");

    //         }
    //     } else if (location.pathname === "/") {
    //         if (svgLogoRef.current != null) {
    //             setLogoColor("#FFF2EB");
    //             setNavOptColor("#FFF2EB");
    //             setAsteriskColor("#FFF2EB");

    //             navRef.current.style.backgroundColor = "#272727";

    //         }
    //     }

    // }, [location.pathname])


    const { contextSafe } = useGSAP({ scope: navRef.current });

    useEffect(() => {
        if (navRef.current != null) {

            const runRunRUn = contextSafe(() => {
                const tl = gsap.timeline();

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
            });
            runRunRUn();
        }
    }, [navRef.current]);




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
                    <img src={require("../../assets/new-logo.svg").default} alt="" />




                </div>
                <div id="nav-right">

                    <a className='nav-optn' onClick={() => {
                        navigation("/", { state: { targetId: "mask-nav" } });
                    }}>
                        <p className='small-p' style={{ color: "#272727" }}>{t("navHome")}</p>
                        <div className='space-btwn'></div>
                        <img src={require("../../assets/star-nav.svg").default} alt="" />


                        {/* <img className="asterisk" src={require("../../assets/asterisk-white.svg").default} alt="" /> */}
                    </a>
                    <a className='nav-optn' onClick={() => {
                        navigation("/", { state: { targetId: "case-container-olab" } });
                    }}>                        <p className='small-p' style={{ color: "#272727" }}>{t("navWork")}</p>
                        <div className='space-btwn'></div>
                        <img src={require("../../assets/star-nav.svg").default} alt="" />


                    </a>
                    <a className='nav-optn' onClick={() => {
                        navigation("/", { state: { targetId: "connect-container" } });
                    }}>                        <p className='small-p' style={{ color: "#272727" }}>{t("navContact")}</p>
                        <div className='space-btwn'></div>
                        <img src={require("../../assets/star-nav.svg").default} alt="" />


                    </a>


                </div>

            </nav>
        </div>
    )
}

export default Navbar