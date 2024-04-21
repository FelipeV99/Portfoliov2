import React, { useRef, useEffect } from 'react'
import "./contact.css"
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const [t, i18next] = useTranslation();

    const connectRef = useRef();

    gsap.registerPlugin(useGSAP, ScrollTrigger);


    const { contextSafe } = useGSAP({ scope: connectRef.current, revertOnUpdate: true });

    const runRunRUn = contextSafe(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: connectRef.current,
                start: "0% 55%",
                end: "0% 45%",
                scrub: true,
                // markers: { startColor: "red", endColor: "purple", fontSize: "18px", fontWeight: "bold", indent: 120 },
            }
        });

        tl.to(".App", {
            backgroundColor: "#F7F5EE",
            // onComplete: () => { 
            //     // console.log("tween from contact");
            //     // ScrollTrigger.refresh();
            //  }
        });
        setTimeout(() => {
            ScrollTrigger.refresh();
            
        }, 2000);
    });
    useEffect(() => {

        runRunRUn();
    }, []);
    return (

        <section id="connect-container" ref={connectRef}>
            <div id="connect-inner-container">


                <div id="title-cta" >
                    <div className='socials-asterisk'>
                    <img src={require("../../assets/star-nav.svg").default} alt="" />
                        <p className='p2 off-black-800'>{t("socials")}</p>

                    </div>


                    <div id="text-container">
                        <h1 className='off-black-800'>{t("connect")}</h1>
                        <div>
                            <p className='p1 off-black-800' id="connect-copy">{t("connectCopy")}</p>
                        </div>

                    </div>

                </div>
                <div id="top-socials">
                    <div id="socials-text">
                        {/* <div className='pill'>
                            <p className='p2 letter-s1'>{t("socials")}</p>
                        </div> */}
                        <div className='social-row'>
                            <p className='bolden p2 off-black-800'>mail</p>
                            <div className='link-icon'>
                                <p className='p2 off-black-800'>afelipea99@gmail.com</p>
                                <a href="mailto:afelipea99@gmail.com">
                                    <img className="social-icon" src={require("../../assets/external-arrow.svg").default} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className='social-row' >
                            <p className='bolden p2 off-black-800'>behance</p>
                            <div className='link-icon'>
                                <p className='p2 off-black-800'>www.behance.net/felipeandrade27</p>
                                <img className="social-icon" src={require("../../assets/external-arrow.svg").default} onClick={() => { window.open("https://www.behance.net/felipeandrade27") }} alt="" />
                            </div>
                        </div>
                        <div className='social-row'>
                            <p className='bolden p2 off-black-800'>linkedin</p>
                            <div className='link-icon'>
                                <p className='p2 off-black-800'>www.linkedin.com/in/felipe-a-411294138/</p>
                                <img className="social-icon" src={require("../../assets/external-arrow.svg").default} alt="" onClick={() => { window.open("https://www.linkedin.com/in/felipe-a-411294138/") }} />


                            </div>
                        </div>
                    </div>
                    <div id="back-top">
                        <a href="#mask-nav">
                            <div id="back-top-inception">
                                <p className='p2 off-black-800'>{t("backTop")}</p>
                                <img src={require("../../assets/arrow-up.svg").default} alt="" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact