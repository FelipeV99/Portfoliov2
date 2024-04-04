import React, { useState } from 'react'
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { CustomEase } from "gsap/CustomEase";
import ProjectsAlt from '../projectsAlt/ProjectsAlt';
import Contact from '../contact/Contact';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
const Home = () => {

    gsap.registerPlugin(useGSAP);

    const designertext = useRef();
    const felipetext = useRef();
    const buttonscta = useRef();
    const ctatext = useRef();
    const cvRef = useRef();

    const prOverlayRef = useRef();
    const prBarRef = useRef();

    const prCounterRef = useRef();
    const [prCounter, setPrCounter] = useState(0);

    const [t, i18next] = useTranslation();

    const { contextSafe } = useGSAP(() => {


    }, 1);

    document.body.style.overflow ="hidden";


    useEffect(() => {
        if (prCounter == 100) {
            return;
        } else {

            if (prCounter > 100) {
                setPrCounter(100)
            }else{
                setTimeout(() => {
                    setPrCounter(prCounter + Math.floor(Math.random() * 3) + 1);
    
                }, 10);
            }

        }
    }, [prCounter]);

    const startMovingBars = contextSafe(() => {
        const tl = gsap.timeline();


        tl.to(prOverlayRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 0.6
        },0.2);
        
        
    });

    if(prCounter == 100){
        startMovingBars();
        document.body.style.overflow ="scroll";

    }


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




    // const locoRef = useRef(null);

    // const options = {
    //   smooth: true,
    // }

    useGSAP(() => {
        gsap.registerPlugin(CustomEase);
        // gsap code here...
        const tl = gsap.timeline();

        tl.to(designertext.current, {
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            duration: 1,
            // repeat:5,
            ease: "power3.inOut"
        }, 2);

        tl.to(designertext.current, {
            y: 100,
            duration: 1.2,
            // repeat:5,
            ease: "power3.inOut"
        }, 2);

        tl.to(felipetext.current, {
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            duration: 1,
            // repeat:5,
            ease: "power3.inOut"

        }, 2);

        tl.to(felipetext.current, {
            y: 100,
            duration: 1.2,
            // repeat:5,
            ease: "power3.inOut"
        }, 2);

        tl.to(ctatext.current, {
            x: 0,
            ease: "power3.out",
            duration: 1,

        }, 2.7);

        tl.to(buttonscta.current, {
            x: 0,
            ease: "power3.out",
            duration: 1,
        }, 2.9);
        //for opacity

        tl.to(ctatext.current, {
            opacity: 1,
            ease: "power3.out",
            duration: 2,

        }, 2.7);

        tl.to(buttonscta.current, {
            opacity: 1,
            ease: "power3.out",
            duration: 2,
        }, 2.9);
    });



    return (
        <div id="page-container">

            <div id="overlay-mask" className='pr-overlay' ref={prOverlayRef}>
                <h1 className="pr-counter" ref={prCounterRef}>{prCounter}</h1>
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

            </div>
            <section id="hero">
                <div id="number-container">
                    <p className='p2'>[ 01 ]</p>
                </div>
                <div id="hero-helper">
                    <div id="hero-left">
                        <div id="felipe-title">
                            <div id='mask-fa' ref={felipetext}>
                                <h1 id="felipe-h1">Felipe Andrade</h1>
                            </div>
                        </div>
                        <div id="designer-title">
                            <div id="mask-dt" ref={designertext}>
                                <h1 id="ux-h1">{t('designerTitle')}</h1>
                            </div>
                        </div>
                        <div className='space-12'></div>
                        <div className='mask-cta cta-copy-container' ref={ctatext}>
                            <p id="cta-copy" className='p1'>
                                {t("heroCopy")}
                            </p>
                        </div>
                    </div>
                    <div id="hero-space"></div>
                    <div id="hero-right">
                        <div id="button-cta" className='mask-cta' ref={buttonscta}>
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