import React, { useRef, useEffect, useState } from 'react';
import "./tempVitacanStudy.css";
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import VitacanThumb from "../../assets/vitacanMockup.png";
import VitacanPlaceholder from "../../assets/placeholderVitacan.png";
import ProgressiveImage from '../progressiveImage/ProgressiveImg';


const TempVitacanStudy = () => {
    const [t, i18next] = useTranslation();
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const caseSlideVitacanRef = useRef();
    const bottomRef = useRef();
    const caseImgContainerRef = useRef();

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
        <div id="outer-container-vitacan" ref={caseSlideVitacanRef} data-scroll-section>

            <section id="case-container-vitacan" >

                <div id="case-inner-container">
                <div className='enumerator-container'>
                                <div className='line-for-number-v'>

                                </div>
                                <p id="num-p-v">02/02</p>
                            </div>

                    <div className='text-case-olab'>
                        <div className="bottom-text" ref={bottomRef}>


                            
                            <h1 className="off-black-800">Vitacan</h1>
                            <p id="temp-p">UX case study, conceptual project</p>
                            <a className="btn-main btn-a-fix" onClick={() => { window.open(caseStudyLink) }}>
                                {t("CaseButton")}
                                   
                                {/* <img src={require("../../assets/external-arrow-white.svg").default} alt="" /> */}
                            </a>
                        </div>
                    </div >
                    <div id="case-img-container" ref={caseImgContainerRef}>
                        <ProgressiveImage className='img-case' src={VitacanThumb} placeholderSrc={VitacanPlaceholder} />

                        {/* <img className='img-case' src={require("../../assets/placeholderVitacan.png")} alt="" /> */}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default TempVitacanStudy