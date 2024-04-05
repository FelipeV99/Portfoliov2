import React, { useState } from 'react'
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { CustomEase } from "gsap/CustomEase";
import ProjectsAlt from '../projectsAlt/ProjectsAlt';
import Contact from '../contact/Contact';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Home = () => {

    gsap.registerPlugin(useGSAP);

    const designertext = useRef();
    const felipetext = useRef();
    const buttonscta = useRef();
    const ctatext = useRef();
    const cvRef = useRef();
    const heroRef = useRef();

    const prOverlayRef = useRef();
    // const [prCounter, setPrCounter] = useState(0);

    const [t, i18next] = useTranslation();

    const { contextSafe } = useGSAP();

    const homeAnimated = localStorage.getItem("homeAnimated");
    // const counterStorage = localStorage.getItem("counterStorage");

    const { state } = useLocation();
    const { targetId } = state || {};

    useEffect(() => {
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView();
        }
    }, [targetId]);

    //next following lines are all related to preloader, until the useGsap()

    // document.body.style.overflow = "hidden";

    //I could add a counter to the local storage and set it to 100 once the state gets to 100
    // useEffect(() => {
    //     if (prCounter == 100 || counterStorage == 100) {
    //         localStorage.setItem("counterStorage", 100);
    //         console.log("enter here one time");
    //         document.body.style.overflow = "scroll";

    //         startMovingPreloader();
    //         return;
    //     } else {

    //         if (prCounter >= 100) {
    //             setPrCounter(100);
    //             localStorage.setItem("counterStorage", 100);
    //         } else {
    //             setTimeout(() => {
    //                 setPrCounter(prCounter + Math.floor(Math.random() * 3) + 1);

    //             }, 10);
    //         }

    //     }
    // }, [prCounter]);

    // const startMovingPreloader = contextSafe(() => {
    //     const tl = gsap.timeline();
    //     // if (homeAnimated == null) {
    //     //     console.log("gonna run animated");
    //     //     tl.to(prOverlayRef.current, {
    //     //         opacity: 0.5,
    //     //         // clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    //     //         duration: 1,

    //     //     }, 0.2);
    //     // }
    //     // else {
    //     //     console.log("gonna run asap");
    //     //     tl.to(prOverlayRef.current, {
    //     //         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    //     //         duration: 0,
    //     //     }, 0);
    //     // }
    //     if (homeAnimated == null) {
    //         tl.fromTo(prOverlayRef.current,
    //             {
    //                 clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //                 opacity: 1
    //             },
    //             {
    //                 clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    //                 opacity: 0,
    //                 duration: 1,
    //                 ease: "power1.in"
    //             },
    //             0);
    //     }
    // });
    // console.log(counterStorage);

    // if (counterStorage==100) {
    //     console.log("execute it now")
    //     startMovingPreloader();
    //     //i could run this on complete of the prOverlayref animation
    //     document.body.style.overflow = "scroll";
    // }

    useEffect(() => {
        if (i18next.language != null) {
            const language = i18next.language.slice(0, 2);

            if (language == 'en') {
                cvRef.current.href = require("../../assets/Felipe Andrade CV.pdf");


            } else if (language == 'es') {
                cvRef.current.href = require("../../assets/Felipe Andrade HV.pdf");
            }
        }
    }, [i18next.language]);
    


    useGSAP(() => {
        const tl = gsap.timeline();

        if (homeAnimated == null) {

            tl.fromTo(designertext.current,
                {
                    y: -100,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                },
                {
                    y: 0,
                    clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                    duration: 1,
                    ease: "power2.inOut"
                },
                0);

            tl.fromTo(felipetext.current,
                {
                    y: -100,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                },
                {
                    y: 0,
                    clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                    duration: 1,
                    ease: "power2.inOut"
                },
                0);
            tl.fromTo(ctatext.current,
                {
                    y: -30,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                },
                {
                    y: 0,
                    clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                    duration: 1,
                    ease: "power2.inOut"
                },
                0);

            tl.fromTo(buttonscta.current,
                {
                    y: -30,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                },
                {
                    y: 0,
                    clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                    duration: 1,
                    ease: "power2.inOut",
                    onComplete: () => { localStorage.setItem("homeAnimated", true); }
                },
                0);
        }
    });

    
    // console.log(prCounter);
    // console.log(counterStorage);
    return (
        <div id="page-container">
            {/* <div id="overlay-mask" className='pr-overlay' ref={prOverlayRef}>
                <h1 className="pr-counter">{prCounter}</h1>
                <div className='pr-bar'></div>
                <div className='pr-bar'></div>
                <div className='pr-bar'></div>
                <div className='pr-bar'></div>
                <div className='pr-bar'></div>
                <div className='pr-bar'></div>
                <div className='pr-bar'></div>
                <div className='pr-bar'></div>
                <div className='pr-bar'></div>
                <div className='pr-bar'></div>
            </div> */}


            <section id="hero" ref={heroRef}>
                <div id="number-container">
                    <p className='p2'>[ 01 ]</p>
                </div>
                <div id="hero-helper">
                    <div id="hero-left">
                        <div id="felipe-title">
                            <div ref={felipetext}>
                                <h1 id="felipe-h1">Felipe Andrade</h1>
                            </div>
                        </div>
                        <div id="designer-title">
                            <div ref={designertext}>
                                <h1 id="ux-h1">{t('designerTitle')}</h1>
                            </div>
                        </div>
                        <div className='space-12'></div>
                        <div className='cta-copy-container' ref={ctatext}>
                            <p id="cta-copy" className='p1'>
                                {t("heroCopy")}
                            </p>
                        </div>
                    </div>
                    <div id="hero-space"></div>
                    <div id="hero-right">
                        <div id="button-cta" ref={buttonscta}>
                            <a className='btn-main' target="_blank" ref={cvRef}>{t("cvDownload")}</a>
                            <a className='btn-sec' href='#connect-container'>{t("connect")}</a>
                        </div>

                    </div>
                </div>
            </section>
            {/* <Projects /> */}
            <ProjectsAlt />
            <Contact />
            {/* </main>
        </LocomotiveScrollProvider> */}
        </div>
    )
}

export default Home