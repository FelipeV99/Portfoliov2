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

    const navigation = useNavigate();

    const { contextSafe } = useGSAP({container:caseSlideVitacanRef.current});

    // useEffect(() => {
    //     if(caseSlideVitacanRef.current != null){

    //         const runRunRUn = contextSafe(() => {
    //             const tl = gsap.timeline({
    //                 scrollTrigger: {
    //                     trigger: "#case-container-vitacan",
    //                     start: "-15% 25%",
    //                     end: "-5% 5%",
    //                     scrub: true,
    //                     markers: {startColor: "green", endColor: "blue", fontSize: "18px", fontWeight: "bold", indent: 200}
    //                 }
    //             });
    
    //             tl.to(".App", {
    //                 backgroundColor: "#ECF5F4",
    
    //             });
    //            });
    //         runRunRUn();    
    //     }
    // }, [caseSlideVitacanRef.current]);

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
        <section id="case-container-vitacan" ref={caseSlideVitacanRef}>

            <div id="case-inner-container">

                <div className='text-case-olab'>
                    <div className='project-type'>
                        <img id="asterisk" src={require("../../assets/asterisk.svg").default} alt="" />
                        <p id="asterisk-p">{t("CP")}</p>
                    </div>
                    <div className="bottom-text" ref={bottomRef}>


                        <div className='enumerator-container'>
                            <div className='line-for-number-v'>

                            </div>
                            <p id="num-p-v">02/02</p>
                        </div>
                        <h1 id="temp-title">Vitacan</h1>
                        <p id="temp-p">{t("ThumbCopyVita")}</p>
                        <button id="new-main-btn-v" onClick={()=>{window.open(caseStudyLink)}}>{t("CaseButton")}</button>
                    </div>
                </div >
                <div id="case-img-container">
                    <ProgressiveImage className='img-case' src={VitacanThumb} placeholderSrc={VitacanPlaceholder} />

                    {/* <img className='img-case' src={require("../../assets/placeholderVitacan.png")} alt="" /> */}

                </div>
            </div>
        </section>
    )
}

export default TempVitacanStudy