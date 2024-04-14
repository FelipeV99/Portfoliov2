import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import Contact from '../contact/Contact';
import { useTranslation } from 'react-i18next';
import CaseSlide from '../caseSlide/CaseSlide';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TempVitacanStudy from '../tempVitacanStudy/TempVitacanStudy';


const Home = () => {

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const designertext = useRef();
    const felipetext = useRef();
    const buttonscta = useRef();
    const ctatext = useRef();
    const cvRef = useRef();
    const heroRef = useRef();
    const pageRef = useRef();
    const heroRightRef = useRef();
    const prOverlayRef = useRef();

    const [t, i18next] = useTranslation();

    // const { state } = useLocation();
    // const { targetId } = state || {};

    // useEffect(() => {
    //     const el = document.getElementById(targetId);
    //     if (el) {
    //         el.scrollIntoView();
    //     }
    // }, [targetId]);

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

    const { contextSafe } = useGSAP({ scope: heroRef.current });

    useEffect(() => {
        const maskHeroElements = contextSafe(() => {
            const tl = gsap.timeline();

            tl.fromTo(prOverlayRef.current,
                {
                    clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                },
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    duration: 0.8,
                },
                0
            );
            tl.fromTo(designertext.current,
                {
                    y: -120,
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
                    y: -120,
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
                    y: -60,
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
                    y: -60,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                },
                {
                    y: 0,
                    clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                    duration: 1,
                    ease: "power2.inOut",
                },
                0);
            tl.fromTo(".abstract-design",
                {
                    y: -90,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                },
                {
                    y: 0,
                    clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                    duration: 1,
                    ease: "power2.inOut",
                },
                0);
        });
        maskHeroElements();
    }, [pageRef.current]);

    return (
        <div id="page-container" ref={pageRef} >
            <div className="pr-overlay" ref={prOverlayRef}></div>
            <section id="hero" ref={heroRef}>
                <div id="number-container">
                    {/* <p className='p2' ref={numeratorRef}>[ 01 ]</p> */}
                </div>
                <div id="hero-helper">
                    <div id="hero-left" >
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
                            <p id="cta-copy" className='p1 whiten'>
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
            <CaseSlide />
            <TempVitacanStudy />
            <Contact />
        </div>
    )
}

export default Home