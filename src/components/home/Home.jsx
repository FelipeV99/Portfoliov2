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
import CaseSlide from '../caseSlide/CaseSlide';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Lottie from 'react-lottie';
// import PreloaderAnimation from "../../assets/PreloaderAnimation"



// import { useFontFaceObserver } from 'use-font-face-observer';


const Home = (props) => {



    gsap.registerPlugin(useGSAP, ScrollTrigger);

    // const isFontLoaded = useFontFaceObserver([
    //     { family: 'IDGSemi' }, // Same name you have in your CSS
    // ]);

    // useEffect(() => {
    //     console.log("Is font loaded?", isFontLoaded);
    //   }, [isFontLoaded]);

    const designertext = useRef();
    const felipetext = useRef();
    const buttonscta = useRef();
    const ctatext = useRef();
    const numeratorRef = useRef();
    const cvRef = useRef();
    const heroRef = useRef();
    const pageRef = useRef();

    const heroRightRef = useRef();

    const prOverlayRef = useRef();

    const [t, i18next] = useTranslation();

    const { state } = useLocation();
    const { targetId } = state || {};

    useEffect(() => {
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView();
        }
    }, [targetId]);

    document.body.style.overflow = "auto";




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


    // const defaultOptions = {
    //     loop:true,
    //     autoplay:true,
    //     animationData: PreloaderAnimation
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





        // gsap.to(".App", {
        //     backgroundColor: "#000000",
        //     duration: 1,
        //     scrollTrigger: {
        //         trigger: ".shithero",
        //         start: "1%",
        //         end: "60%",

        //     },

        // });

        // const tl = gsap.timeline();

        // if (homeAnimated == null) {

        // tl.fromTo(designertext.current,
        //     {
        //         y: -100,
        //         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        //     },
        //     {
        //         y: 0,
        //         clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        //         duration: 1,
        //         ease: "power2.inOut"
        //     },
        //     0);

        // tl.fromTo(felipetext.current,
        //     {
        //         y: -100,
        //         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        //     },
        //     {
        //         y: 0,
        //         clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        //         duration: 1,
        //         ease: "power2.inOut"
        //     },
        //     0);
        // tl.fromTo(ctatext.current,
        //     {
        //         y: -30,
        //         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        //     },
        //     {
        //         y: 0,
        //         clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        //         duration: 1,
        //         ease: "power2.inOut"
        //     },
        //     0);

        // tl.fromTo(buttonscta.current,
        //     {
        //         y: -30,
        //         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        //     },
        //     {
        //         y: 0,
        //         clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        //         duration: 1,
        //         ease: "power2.inOut",
        //         // onComplete: () => { localStorage.setItem("homeAnimated", true); }
        //     },
        //     0);
        // tl.fromTo(numeratorRef.current,
        //     {
        //         y: -30,
        //         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        //     },
        //     {
        //         y: 0,
        //         clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        //         duration: 1,
        //         ease: "power2.inOut"
        //     },
        //     0);

        console.log(heroRightRef.current);

        useEffect(() => {
            if(heroRef.current != null){
                const tl = gsap.timeline({
                    scrollTrigger:{
                        trigger: "#hero",
                        start: "30% 100%",
                        end: "38% 0%",
                        scrub: true,
                        // markers: true
                    }
                });
        
                tl.to(".App",{
                    backgroundColor: "#272727",
                    
                });
                
    
            }
        }, [heroRef.current]);



            // tl.to(".App", {

            //     backgroundColor: "#000000",


            //     scrollTrigger: {
            //         trigger: "#hero-left",
            //         start: "top top",
            //         end: "bottom bottom",
            //         scrub: true,
            //         markers: true
    
            //     },
    
            // });
            // tl.to(".App", {

            //     backgroundColor: "#ffffff",


            //     scrollTrigger: {
            //         trigger:".abstract-design",
            //         start: "top 20%",
            //         end: "bottom 80%",
            //         scrub: true,
            //         markers: true
    
            //     },
    
            // });

        // }

    // console.log(pageRef.current);

    // window.onscroll(()=>{console.log("crolling.rolling")});

    // const handleScroll = contextSafe(() => {
    //     console.log("being scrolled rn");
    //     gsap.to(pageRef.current, {backgroundColor: "#272727", duration:2});
    //    });




    // console.log(prCounter);
    // console.log(counterStorage);
    return (
        <div id="page-container" ref={pageRef} >
            {/* 
            <div className="pr-overlay">
            <Lottie options={defaultOptions} height={37} width={166} />
            </div> */}



            <section id="hero" className='shithero' ref={heroRef}>

                <div id="number-container">
                    {/* <p className='p2' ref={numeratorRef}>[ 01 ]</p> */}
                </div>
                <div id="hero-helper">
                    <div id="hero-left" >
                        <div id="felipe-title">
                            <div ref={felipetext}>
                                <h1 id="felipe-h1" >Felipe Andrade</h1>
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
                        <div id="button-cta" ref={buttonscta}>
                            <a className='btn-main' target="_blank" ref={cvRef}>{t("cvDownload")}</a>
                            <a className='btn-sec' href='#connect-container'>{t("connect")}</a>
                        </div>
                    </div>
                    <div id="hero-space"></div>
                    <div id="hero-right" ref={heroRightRef}>
                        <img className="abstract-design" src={require("../../assets/hero-abstract-design.svg").default} alt="" />



                    </div>
                </div>
            </section>
            {/* <Projects /> */}
            <CaseSlide />
            {/* <ProjectsAlt /> */}
            <Contact />
            {/* </main>
        </LocomotiveScrollProvider> */}
        </div>
    )
}

export default Home