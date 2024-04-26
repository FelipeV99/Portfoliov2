import React, { useRef, useEffect, useState } from 'react';
import "./tempVitacanStudy.css";
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import VitacanThumb from "../../assets/vitacanNewHero.png";
import VitacanPlaceholder from "../../assets/placeholderVitacan.png";
import ProgressiveImage from '../progressiveImage/ProgressiveImg';


const TempVitacanStudy = () => {
    const [t, i18next] = useTranslation();
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const caseSlideVitacanRef = useRef();
    const bottomRef = useRef();
    const caseImgContainerRef = useRef();
    const imgCaseColorRef = useRef();
    const [caseImgContainerHeight, setCaseImgContainerHeight] = useState("");



    // const navigation = useNavigate();
    // console.log(caseImgContainerHeight);

    const { contextSafe } = useGSAP({ scope: caseSlideVitacanRef.current, revertOnUpdate: true });


    const runRunRUn = contextSafe(() => {


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: caseSlideVitacanRef.current,
                start: "0% 65%",
                end: "100% 35%",
                scrub: true,
                markers: { startColor: "green", endColor: "blue", fontSize: "18px", fontWeight: "bold", indent: 200 }
            }
        });

        // tl.to(caseImgContainerRef.current, {
        //     clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)"

        // });
        tl.to(".App", {
            backgroundColor: "#ECF5F4",
            // onComplete: () => {
            //     console.log("tween from vitacan");
            //     ScrollTrigger.refresh();
            // }


        });

    });

    const imgReveal = contextSafe(() => {


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: imgCaseColorRef.current,
                start: "0% 70%",
                end: "50% 50%",
                // scrub: true,
                markers: { startColor: "black", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 100 }
            }
        });

        // tl.to(caseImgContainerRef.current, {
        //     clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)"

        // });
        tl.fromTo(imgCaseColorRef.current,{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        },{
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            duration: 1,
            ease: "power2.inOut"

        }, 0);

        tl.fromTo(imgCaseColorRef.current,{
            scale:1.5
        },{
            scale:1,
            duration: 1.4,
            ease: "power3.inOut"

        }, 0);
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1000);

    });



    useEffect(() => {

        runRunRUn();
        imgReveal();

    }, [caseImgContainerHeight]);

    useEffect(() => {

        runRunRUn();

    }, []);

    // useEffect(() => {

    //     runRunRUn();
    // }, []);

    // useEffect(()=>{
    //     console.log("prog img dependency changed")
    // }, [progImgRef]);

    const [caseStudyLink, setCaseStudyLink] = useState("");

    useEffect(() => {
        if (i18next.language != null) {
            const language = i18next.language.slice(0, 2);

            if (language == 'en') {
                setCaseStudyLink("https://www.behance.net/gallery/195967355/Vitacan-Case-Study-English");
            } else if (language == 'es') {
                setCaseStudyLink("https://www.behance.net/gallery/143997259/Caso-de-Estudio-Vitacan");
            }
        }
    }, [i18next.language]);

    return (
        <div id="outer-container-vitacan" ref={caseSlideVitacanRef}>

            <section id="case-container-vitacan" >

                <div id="case-inner-container">

                    <div className='text-case-olab'>
                        <div className='project-type'>
                            <img src={require("../../assets/star-nav.svg").default} alt="" />                            <p id="asterisk-p">{t("CP")}</p>
                        </div>
                        <div className="bottom-text" ref={bottomRef}>


                            <div className='enumerator-container'>
                                <div className='line-for-number-v'>

                                </div>
                                <p id="num-p-v">02/02</p>
                            </div>
                            <h1 id="temp-title">Vitacan</h1>
                            <p id="temp-p">{t("ThumbCopyVita")}</p>
                            <button id="new-main-btn-v" onClick={() => { window.open(caseStudyLink) }}>
                                {t("CaseButton")}
                                   
                                <img src={require("../../assets/external-arrow-white.svg").default} alt="" />
                            </button>
                        </div>
                    </div >
                    <div id="case-img-container-vitacan" ref={caseImgContainerRef}>
                        {/* <ProgressiveImage className='img-case' src={VitacanThumb} placeholderSrc={VitacanPlaceholder} actualizeHeight={() => { setCaseImgContainerHeight(Math.random()) }} /> */}

                        <img className='img-case-vitacan' src={require("../../assets/vitacanColored.png")} alt="" ref={imgCaseColorRef} />

                    </div>
                </div>
            </section>
        </div>
    )
}

export default TempVitacanStudy