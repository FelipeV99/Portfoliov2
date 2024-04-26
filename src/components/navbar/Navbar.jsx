import React, { useEffect, useState, useRef } from 'react'
import './navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useLenis } from '@studio-freight/react-lenis';


const Navbar = () => {
    const navigation = useNavigate();
    const location = useLocation();

    const lenis = useLenis(({ scroll }) => {  

    });

    const navRef = useRef();

    const [t, i18next] = useTranslation();

    const { contextSafe } = useGSAP({ scope: navRef.current });

    const [areWeHome, setAreWeHome] = useState(true);

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
    }, []);

    useEffect(()=>{
        if(location.pathname === "/"){
            setAreWeHome(true);
        }else{
            setAreWeHome(false);
        }

    },[location.pathname]);

    const handleOnClickLogo = () =>{
        if(location.pathname === "/"){

            lenis.scrollTo("#mask-nav");

        }else{
            navigation("/", { state: { targetId: "mask-nav" } });
        }
    }

    const handleOnClickHome = () =>{
        if(location.pathname === "/"){

            lenis.scrollTo("#mask-nav");

        }else{
            navigation("/", { state: { targetId: "mask-nav" } });
        }
    }

    const handleOnClickWork = () =>{
        if(location.pathname === "/"){

            lenis.scrollTo("#case-container-olab");

        }else{
            navigation("/", { state: { targetId: "case-container-olab" } });
        }
    }

    const handleOnClickContact = () =>{
        if(location.pathname === "/"){

            lenis.scrollTo("#connect-container");

        }else{
            navigation("/", { state: { targetId: "connect-container" } });        }
    }


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
                <div id="nav-left" onClick={handleOnClickLogo}>
                    <img src={require("../../assets/new-logo.svg").default} alt="" />
                </div>
                <div id="nav-right">
                    <a className='nav-optn' onClick={handleOnClickHome}>
                        <p className='small-p' style={{ color: "#272727" }}>{t("navHome")}</p>
                        <div className='space-btwn'></div>
                        <img src={require("../../assets/star-nav.svg").default} alt="" />
                    </a>
                    <a className='nav-optn' onClick={handleOnClickWork}>                        <p className='small-p' style={{ color: "#272727" }}>{t("navWork")}</p>
                        <div className='space-btwn'></div>
                        <img src={require("../../assets/star-nav.svg").default} alt="" />
                    </a>
                    <a className='nav-optn' onClick={handleOnClickContact}>                        <p className='small-p' style={{ color: "#272727" }}>{t("navContact")}</p>
                        <div className='space-btwn'></div>
                        <img src={require("../../assets/star-nav.svg").default} alt="" />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar