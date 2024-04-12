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

        
    const { contextSafe } = useGSAP({scope:connectRef.current});

    // useEffect(() => {
    //     if(connectRef.current != null){

    //         const runRunRUn = contextSafe(() => {
    //             const tl = gsap.timeline({
    //                 scrollTrigger:{
    //                     trigger: "#connect-container",
    //                     start: "0% 70%",
    //                     end: "10% 50%",
    //                     scrub: true,
    //                     markers: {startColor: "black", endColor: "orange", fontSize: "18px", fontWeight: "bold", indent: 120},
    
    //                 }
    //             });
        
    //             tl.to(".App",{
    //                 backgroundColor: "#272727",
                    
    //             });
    //            });
    //         runRunRUn();    
    //     }
    // }, [connectRef.current]);


    return (
        
            <section id="connect-container" ref={connectRef}  onScroll={()=>{console.log("scrolling")}} >
                <div id="connect-inner-container">

                
                <div  id="title-cta" >
                    <div>
                        <p className='p2 whiten'>[ 03 ]</p>

                    </div>


                    <div id="text-container">
                        <h1>{t("connect")}</h1>
                        <div>
                            <p className='p1 whiten' id="connect-copy">{t("connectCopy")}</p>
                        </div>

                    </div>

                </div>
                <div id="top-socials">
                    <div id="socials-text">
                        <div className='pill'>
                            {/* <p className='p2 letter-s1'>{t("socials")}</p> */}
                        </div>
                        <div className='social-row'>
                            <p className='bolden p2 whiten'>mail</p>
                            <div className='link-icon'>
                                <p className='p2 whiten'>afelipea99@gmail.com</p>
                                <a href="mailto:afelipea99@gmail.com">
                                <img className="social-icon" src={require("../../assets/external-arrow.svg").default} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className='social-row' >
                            <p className='bolden p2 whiten'>behance</p>
                            <div className='link-icon'>
                                <p className='p2 whiten'>www.behance.net/felipeandrade27</p>
                                <img className="social-icon" src={require("../../assets/external-arrow.svg").default} onClick={()=>{window.open("https://www.behance.net/felipeandrade27")}} alt="" />
                            </div>
                        </div>
                        <div className='social-row'>
                            <p className='bolden p2 whiten'>linkedin</p>
                            <div className='link-icon'>
                                <p className='p2 whiten'>www.linkedin.com/in/felipe-a-411294138/</p>
                                <img className="social-icon" src={require("../../assets/external-arrow.svg").default} alt=""  onClick={()=>{window.open("https://www.linkedin.com/in/felipe-a-411294138/")}} />


                            </div>
                        </div>
                    </div>
                    <div id="back-top">
                        <a href="#mask-nav">
                            <div id="back-top-inception">
                                <p className='p2 whiten'>{t("backTop")}</p>
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