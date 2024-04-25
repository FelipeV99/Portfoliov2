import React, { useRef, useEffect, useState } from 'react';
import "./caseSlide.css";
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import OlabThumb from "../../assets/olabMockup.png";
import OlabPlaceholder from "../../assets/placeholderOlab.png";
import ProgressiveImage from '../progressiveImage/ProgressiveImg';

const CaseSlide = () => {
    const [t, i18next] = useTranslation();
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const caseSlideRef = useRef();
    const bottomRef = useRef();

    const [caseImgContainerHeight, setCaseImgContainerHeight] = useState("");


    const navigation = useNavigate();



    return (
        <div id="outer-container-olab" ref={caseSlideRef} data-scroll-section>


            <section id="case-container-olab" >

                <div  id="case-inner-container">
                    <div className='enumerator-container op-class' data-scroll
                    data-scroll-class="fadeIn"
                    data-scroll-repeat="true"
                    data-scroll-speed="2">
                        <div className='line-for-number'>

                        </div>
                        <p id="num-p">01/02</p>
                    </div>

                    <div className='text-case-olab op-class' data-scroll
                    data-scroll-class="fadeIn"
                    data-scroll-repeat="true"
                    data-scroll-speed="2">

                        <div className="bottom-text" ref={bottomRef}>



                            <h1 className="off-black-800">O-lab</h1>
                            <p id="temp-p">UX Case study, industry experience</p>
                            <a className="btn-main btn-a-fix" onClick={() => {

                                navigation("/case-study/olabNew");
                            }}>
                                {t("CaseButton")}
                            </a>
                        </div>
                    </div >
                    <div id="case-img-container">
                        {/* <ProgressiveImage className='img-case' src={OlabThumb} placeholderSrc={OlabPlaceholder} actualizeHeight={() => { setCaseImgContainerHeight(Math.random()) }}  /> */}
                        {/* <img className='img-case' src={require("../../assets/olabNewHero.png")} alt="" /> */}
                        <img data-scroll data-scroll-class="parallax-img" data-scroll-repeat="true"
                    data-scroll-speed="2" className='img-case' src={require("../../assets/olabMockup.png")} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CaseSlide
