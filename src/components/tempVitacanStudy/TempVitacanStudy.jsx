import React, { useRef, useEffect } from 'react';
import "./tempVitacanStudy.css";
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TempVitacanStudy = () => {
    const [t, i18next] = useTranslation();
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const caseSlideVitacanRef = useRef();
    const bottomRef = useRef();

    const navigation = useNavigate();

    const { contextSafe } = useGSAP({container:caseSlideVitacanRef.current});

    useEffect(() => {
        if(caseSlideVitacanRef.current != null){

            const runRunRUn = contextSafe(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#case-container-vitacan",
                        start: "-120px 25%",
                        end: "-60px 5%",
                        scrub: true,
                        markers: {startColor: "green", endColor: "blue", fontSize: "18px", fontWeight: "bold", indent: 480}
                    }
                });
    
                tl.to(".App", {
                    backgroundColor: "#ECF5F4",
    
                });
               });
            runRunRUn();    
        }
    }, [caseSlideVitacanRef.current]);

    return (
        <section id="case-container-vitacan" ref={caseSlideVitacanRef}>

            <div id="case-inner-container">

                <div className='text-case-olab'>
                    <div className='project-type'>
                        <img id="asterisk" src={require("../../assets/asterisk.svg").default} alt="" />
                        <p id="asterisk-p">conceptual project</p>
                    </div>
                    <div className="bottom-text" ref={bottomRef}>


                        <div className='enumerator-container'>
                            <div className='line-for-number-v'>

                            </div>
                            <p id="num-p-v">02/02</p>
                        </div>
                        <h1 id="temp-title">Vitacan</h1>
                        <p id="temp-p">Keeping Dogs Healthy with Vitacan. This is the journey of designing an app to track the wellness of your dog with a smart collar.</p>
                        <button id="new-main-btn-v" onClick={()=>{window.open("https://www.behance.net/gallery/195967355/Vitacan-Case-Study-English")}}>View case study</button>
                    </div>
                </div >
                <div id="case-img-container">
                    <img className='img-case' src={require("../../assets/vitacanNewHero.png")} alt="" />

                </div>
            </div>
        </section>
    )
}

export default TempVitacanStudy