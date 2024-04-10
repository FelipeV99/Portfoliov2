import React, { useRef, useEffect } from 'react';
import "./caseSlide.css";
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CaseSlide = () => {
    const [t, i18next] = useTranslation();
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const caseSlideRef = useRef();
    const bottomRef = useRef();

    useEffect(() => {
        if (caseSlideRef.current != null) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#case-container-olab",
                    start: "-120px 25%",
                    end: "-60px 5%",
                    scrub: true,
                    // markers: {startColor: "yellow", endColor: "purple", fontSize: "18px", fontWeight: "bold", indent: 120}
                }
            });

            tl.to(".App", {
                backgroundColor: "#FFF2EB",

            });


        }
    }, [caseSlideRef.current]);

    // gsap.to(".App", {
    //     backgroundColor: "#000000",
    //     duration: 1,
    //     scrollTrigger: {
    //         trigger: caseSlideRef.current,

    //     },

    // });

    // console.log("using case slide rn")

    // useGSAP(() => {

    //     // gsap.to(".App", {
    //     //     backgroundColor: "#000000",
    //     //     duration: 1,
    //     //     scrollTrigger: {
    //     //         trigger: ".shithero",
    //     //         start: "1%",
    //     //         end: "60%",

    //     //     },

    //     // });

    //     // const tl = gsap.timeline();

    //         gsap.to(".App", {
    //             backgroundColor: "#272727",
    //             duration: 1,
    //             scrollTrigger: {
    //                 trigger: ".another-shit",
    //                 // start: "1%",
    //                 // end: "60%",

    //             }   
    //         });

    //     // }
    // });


    // useGSAP(() => {
    //     gsap.to(".App", {
    //         scrollTrigger: bottomRef.current,
    //         start: "100%",
    //         end: "120%",
    //         backgroundColor: "#EE24A9",
    //         duration: 1
    //     })
    //     // }
    // });


    return (
        <section id="case-container-olab" ref={caseSlideRef}>

            <div id="case-inner-container">

                <div className='text-case-olab'>
                    <div className='project-type'>
                        <img id="asterisk" src={require("../../assets/asterisk.svg").default} alt="" />
                        <p id="asterisk-p">ux project</p>
                    </div>
                    <div className="bottom-text" ref={bottomRef}>


                        <div className='enumerator-container'>
                            <div className='line-for-number'>

                            </div>
                            <p id="num-p">01/02</p>
                        </div>
                        <h1 id="temp-title">O-lab</h1>
                        <p id="temp-p">Advancing the experience of educaional content. O-lab, un Sistema de Administración y Monitoreo, y consumo de Contenido para comunidades vulnerables y empresas.</p>
                        <button id="new-main-btn">View case study</button>
                    </div>
                </div >
                <div id="case-img-container">
                    <img className='img-case' src={require("../../assets/olabNewHero.png")} alt="" />

                </div>
            </div>
        </section>
    )
}

export default CaseSlide