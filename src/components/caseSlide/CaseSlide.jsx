import React, { useRef, useEffect } from 'react';
import "./caseSlide.css";
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import OlabThumb from "../../assets/olabNewHero.png";
import OlabPlaceholder from "../../assets/placeholderOlab.png";
import ProgressiveImage from '../progressiveImage/ProgressiveImg';

const CaseSlide = () => {
    const [t, i18next] = useTranslation();
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const caseSlideRef = useRef();
    const bottomRef = useRef();

    const navigation = useNavigate();

    const { contextSafe } = useGSAP({ scope: caseSlideRef.current });

    useEffect(() => {
        if (caseSlideRef.current != null) {

            const runRunRUn = contextSafe(() => {
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
            });
            runRunRUn();
        }
    }, [caseSlideRef.current]);



    return (
        <section id="case-container-olab" ref={caseSlideRef}>

            <div id="case-inner-container">

                <div className='text-case-olab'>
                    <div className='project-type'>
                        <img id="asterisk" src={require("../../assets/asterisk.svg").default} alt="" />
                        <p id="asterisk-p">Industry experience</p>
                    </div>
                    <div className="bottom-text" ref={bottomRef}>


                        <div className='enumerator-container'>
                            <div className='line-for-number'>

                            </div>
                            <p id="num-p">01/02</p>
                        </div>
                        <h1 id="temp-title">O-lab</h1>
                        <p id="temp-p">{t("ThumbCopyOlab")}</p>
                        <button id="new-main-btn" onClick={() => {
                            
                            navigation("/case-study/olab");
                        }}>
                            {t("CaseButton")}
                        </button>
                    </div>
                </div >
                <div id="case-img-container">
                    <ProgressiveImage src={OlabThumb} placeholderSrc={OlabPlaceholder} />
                    {/* <img className='img-case' src={require("../../assets/olabNewHero.png")} alt="" /> */}

                </div>
            </div>
        </section>
    )
}

export default CaseSlide