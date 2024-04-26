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
    const imgCaseColorRef = useRef();
    const imgContainerRef = useRef();
    const enumeratorRef = useRef();
    const caseButtonRef = useRef();
    const caseSubtextRef = useRef();
    const caseTitleRef = useRef();

    const [caseImgContainerHeight, setCaseImgContainerHeight] = useState("");


    const navigation = useNavigate();

    const { contextSafe } = useGSAP({ scope: caseSlideRef.current, revertOnUpdate: true });

    const imgReveal = contextSafe(() => {


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: caseSlideRef.current,
                start: "0% 50%",
                // scrub: true,
                // markers: { startColor: "purple", fontSize: "24px", fontWeight: "bold", indent: 100 }
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
            ease: "power1.inOut"

        }, 0);

        tl.fromTo(imgCaseColorRef.current,{
            scale:1.8
        },{
            scale:1.1,
            duration: 1.4,
            ease: "power2.inOut"

        }, 0);

        
        tl.fromTo(caseTitleRef.current,{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",


        },{
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            duration:1,
            ease: "power1.inOut"
        }, 0);

        tl.fromTo(caseTitleRef.current,{

            y:-60
        },{

            y:0,
            duration:1.4,
            ease: "power2.inOut"
        }, 0);

        tl.fromTo(caseSubtextRef.current,{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",


        },{
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            duration:1,
            ease: "power1.inOut"
        }, 0);

        tl.fromTo(caseSubtextRef.current,{

            y:-60
        },{

            y:0,
            duration:1.4,
            ease: "power2.inOut"
        }, 0);

        tl.fromTo(caseButtonRef.current,{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",


        },{
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            duration:1,
            ease: "power1.inOut"
        }, 0);

        tl.fromTo(caseButtonRef.current,{

            y:-60
        },{

            y:0,
            duration:1.4,
            ease: "power2.inOut"
        }, 0);



        tl.fromTo(enumeratorRef.current,{
            opacity:0,
        },{
            opacity:1,
            duration:1,
            ease: "power1.inOut"
        }, 0);

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: caseSlideRef.current,
                start: "20% 70%",
                end: "80% 50%",
                scrub: true,
                // markers: { startColor: "red", endColor: "orange", fontSize: "24px", fontWeight: "bold", indent: 180 }
            }
        });

        // tl.to(caseImgContainerRef.current, {
        //     clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)"

        // });
        tl2.fromTo(imgCaseColorRef.current,{
            y:40
        },{
            y:-40
        }, 0);

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1000);

    });

    useEffect(()=>{
        imgReveal()
    }, []);


    return (
        <div id="outer-container-olab" ref={caseSlideRef}>


            <section id="case-container-olab" >

                <div  id="case-inner-container">
                    <div className='enumerator-container' ref={enumeratorRef}>
                        <div className='line-for-number'>

                        </div>
                        <p id="num-p">01/02</p>
                    </div>

                    <div className='text-case-olab'>

                        <div className="bottom-text" ref={bottomRef}>



                            <h1 className="off-black-800" ref={caseTitleRef}>O-lab</h1>
                            <p id="temp-p" ref={caseSubtextRef}>UX Case study, industry experience</p>
                            <a className="btn-main btn-a-fix" 
                                ref={caseButtonRef}
                                onClick={() => {

                                navigation("/case-study/olabNew");
                            }}>
                                {t("CaseButton")}
                            </a>
                        </div>
                    </div >
                    <div id="case-img-container" ref={imgContainerRef}>
                        {/* <ProgressiveImage className='img-case' src={OlabThumb} placeholderSrc={OlabPlaceholder} actualizeHeight={() => { setCaseImgContainerHeight(Math.random()) }}  /> */}
                        {/* <img className='img-case' src={require("../../assets/olabNewHero.png")} alt="" /> */}
                        <img className='img-case' src={require("../../assets/olabMockup.png")} ref={imgCaseColorRef} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CaseSlide
