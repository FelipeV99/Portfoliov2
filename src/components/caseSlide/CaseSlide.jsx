import React, { useRef, useEffect, useState } from 'react';
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

    const [caseImgContainerHeight, setCaseImgContainerHeight] = useState("");


    const navigation = useNavigate();

    const { contextSafe } = useGSAP({ scope: caseSlideRef.current, revertOnUpdate: true });


    const runRunRUn = contextSafe(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: caseSlideRef.current,
                start: "0% 55%",
                end: "0% 45%",
                scrub: true,
                // markers: { startColor: "yellow", endColor: "purple", fontSize: "18px", fontWeight: "bold", indent: 60 }
            }
        });

        tl.to(".App", {
            backgroundColor: "#FFF2EB",
            // onComplete: () => {
            //     // console.log("tween from case slide");
            //     // ScrollTrigger.refresh();
            // }


        });
    });
    useEffect(() => {
        runRunRUn();

    }, [caseImgContainerHeight]);

    // useEffect(() => {
    //     if (caseSlideRef.current != null) {

    //         const runRunRUn = contextSafe(() => {
    //             const tl = gsap.timeline({
    //                 scrollTrigger: {
    //                     trigger: "#case-container-olab",
    //                     start: "-15% 25%",
    //                     end: "-5% 5%",
    //                     scrub: true,
    //                     markers: {startColor: "yellow", endColor: "purple", fontSize: "18px", fontWeight: "bold", indent: 60}
    //                 }
    //             });

    //             tl.to(".App", {
    //                 backgroundColor: "#FFF2EB",

    //             });
    //         });
    //         runRunRUn();
    //     }
    // }, [caseSlideRef.current]);



    return (
        <div id="outer-container-olab" ref={caseSlideRef}>


            <section id="case-container-olab" >

                <div id="case-inner-container">

                    <div className='text-case-olab'>
                        <div className='project-type'>
                            <img id="asterisk" src={require("../../assets/asterisk.svg").default} alt="" />
                            <p id="asterisk-p">{t("IE")}</p>
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
                    <div id="olab-gap">

                    </div>
                    <div id="case-img-container">
                        <ProgressiveImage className='img-case' src={OlabThumb} placeholderSrc={OlabPlaceholder} actualizeHeight={()=>{setCaseImgContainerHeight(Math.random())}} />
                        {/* <img className='img-case' src={require("../../assets/olabNewHero.png")} alt="" /> */}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default CaseSlide