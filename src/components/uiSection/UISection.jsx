import React, { useRef, useEffect, useState } from 'react';
import "./uiSection.css";
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";




const UISection = () => {
    const [t, i18next] = useTranslation();
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const uiSectionRef = useRef();


    // const { contextSafe } = useGSAP({ scope: uiSectionRef.current, revertOnUpdate: true });

    // const runRunRUn = contextSafe(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: uiSectionRef.current,
    //             start: "0% 55%",
    //             end: "0% 45%",
    //             scrub: true,
    //             markers: { startColor: "black", endColor: "orange", fontSize: "18px", fontWeight: "bold", indent: 60 },
    //         }
    //     });

    //     tl.to(".App", {
    //         backgroundColor: "#F7F5EE",
    //         // onComplete: () => { 
    //         //     // console.log("tween from contact");
    //         //     // ScrollTrigger.refresh();
    //         //  }
    //     });
    //     setTimeout(() => {
    //         ScrollTrigger.refresh();
            
    //     }, 2000);
    // });
    // useEffect(() => {

    //     runRunRUn();
    // }, []);


    return (
        <div className="ui-section-container" ref={uiSectionRef}>
            <div className='ui-inner-container'>
                <div className='enumerator-container'>
                    <div className='horizontal-line'>

                    </div>
                    <p className='p2 off-black-800 bolden'>{t("UISubheader")}</p>
                </div>
                <h2 className='off-black-800 permissive-h2'>{t("UIDesign")}</h2>
                <div className='space-8'></div>
                <p className='ui-text'>{t("UIDesignp")}</p>
                <div className='space-16'></div>
                <button id="new-main-btn-ui" onClick={() => { window.open("https://www.behance.net/felipeandrade27") }}>
                {t("UIDesignCTA")}
                <img src={require("../../assets/external-arrow-white.svg").default} alt="" />

                </button>
            </div>
        </div>
    )
}

export default UISection