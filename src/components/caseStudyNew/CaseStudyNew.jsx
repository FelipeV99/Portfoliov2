import React, { useState } from 'react'
import './caseStudyNew.css'
import { AppTagContext } from '../../App';
import { useTranslation } from 'react-i18next'
import { useRef, useEffect, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import Lottie from 'react-lottie';
import SneakPeakDesktopVid from "../../assets/SneakPeakGood.mp4"
import PreloaderAnimationDark from "../../assets/PreloaderAnimationDark.json";



const CaseStudyNew = () => {

    gsap.registerPlugin(useGSAP);

    const [t, i18next] = useTranslation();
    const [caseStudyLink, setCaseStudyLink] = useState("");

    const navigation = useNavigate();

    const totRef = useRef();
    const srRef = useRef();
    const NPSRef = useRef();
    const SUSRef = useRef();
    const flowProblemRef = useRef();
    const flowBeforeRef = useRef();
    const flowAfterRef = useRef();
    const prOverlayOlabRef = useRef();

    const appTag = useContext(AppTagContext);

    useEffect(() => {
        appTag.current.removeAttribute('style');
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: PreloaderAnimationDark
    }

    useEffect(() => {
        if (i18next.language != null) {
            const language = i18next.language.slice(0, 2);
            if (language == 'en') {
                setCaseStudyLink("https://www.behance.net/gallery/195967355/Vitacan-Case-Study-English");
                totRef.current.src = require("../../assets/timeOnTask.png");
                srRef.current.src = require("../../assets/successRate.png");
                NPSRef.current.src = require("../../assets/NPSGraph.png");
                SUSRef.current.src = require("../../assets/SUSGraph.png");
                flowProblemRef.current.src = require("../../assets/UserFlowProblemEN.png");
                flowBeforeRef.current.src = require("../../assets/UserFlowProblemEN.png");
                flowAfterRef.current.src = require("../../assets/UserFlowProblemAfterEN.png");
            } else if (language == 'es') {
                setCaseStudyLink("https://www.behance.net/gallery/143997259/Caso-de-Estudio-Vitacan");
                totRef.current.src = require("../../assets/duracionCompletarTarea.png");
                srRef.current.src = require("../../assets/tasaDeExito.png");
                NPSRef.current.src = require("../../assets/NPSGraphES.png");
                SUSRef.current.src = require("../../assets/SUSGraphES.png");
                flowProblemRef.current.src = require("../../assets/UserFlowProblemES.png");
                flowBeforeRef.current.src = require("../../assets/UserFlowProblemES.png");
                flowAfterRef.current.src = require("../../assets/UserFlowProblemAfterES.png");
            }
        }
    }, [i18next.language]);

    const { contextSafe } = useGSAP({ scope: prOverlayOlabRef.current });

    useEffect(() => {
        document.documentElement.style.overflowY = "hidden";

        const maskOlab = contextSafe(() => {
            const tl = gsap.timeline();

            tl.fromTo(prOverlayOlabRef.current,
                {
                    // clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                    // y:0,
                    opacity: 1

                },
                {
                    // clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    // y: -yMovement,
                    opacity: 0,
                    duration: 0.4,
                    onComplete: () => {
                        document.documentElement.style.overflowY = "visible";
                        prOverlayOlabRef.current.style.display = "none";
                    }
                },
                0
            );
        });
        setTimeout(() => {
            maskOlab();
        }, 2500);

    }, [prOverlayOlabRef.current]);

    return (
        <div id="case-study-container">
            <div className="pr-overlay-olab" ref={prOverlayOlabRef}>
                <Lottie options={defaultOptions} height={37} width={166} />
                <p className='p2 bolden color-dark-grey'>{t("loadingCS")}</p>
            </div>
            <section id="case-hero">

                <div id="i-case-inner-container">

                    <div className='text-case-olab-hero'>
                        <div className='project-type'>
                            {/* <img id="asterisk" src={require("../../assets/asterisk.svg").default} alt="" />
                            <p id="asterisk-p">Industry experience</p> */}
                        </div>
                        <div className="bottom-text" >


                            <div className='enumerator-container'>
                                <div id='line-title'>

                                </div>
                                <p className='p2 bolden off-black-800'>01/02</p>
                            </div>
                            <h2 className='off-black-800'>O-lab</h2>
                            <p className='color-light-grey'>{t("ThumbCopyOlab")}</p>

                        </div>
                    </div >
                    <div id="case-img-container-olab">
                        <img className='img-case-hero' src={require("../../assets/olabMockupCompressed.webp")} alt="" />

                    </div>
                </div>
            </section>
            <div className='sp-outer-container'>
                <div className='sp-inner-container'>


                    <h3 className='off-black-800'>{t('Preview')}</h3>

                    <div className='space-4'></div>
                    <p className='off-black-600 p2'>{t('Previewp')}</p>
                    <div className='space-16'></div>
                    <div className="sp-container">
                        <video id="sp-video" autoPlay muted loop src={SneakPeakDesktopVid}>

                        </video>


                    </div>
                </div>
            </div>
            <div className='case-slide'>
                <h2 className='off-black-800'>{t('oCContext')}</h2>
                <div className="space-16"></div>
                <p className='p2 bolden off-black-800'>{t('oCRole')}</p>
                <div className="space-8"></div>
                <p className='off-black-600 paragraph'>{t("ocContextp")}</p>
                <div className="space-32"></div>
                <p className='p2 bolden off-black-800'>{t('oCAbout')}</p>
                <div className='space-8'></div>
                <p className='off-black-600 paragraph'>{t('oCAboutp')}</p>
                <div className="space-32"></div>
                <p className='p2 bolden off-black-800'>{t('ocTeam')}</p>
                <div className='space-16'></div>
                <div id="team-container">
                    <div className='subTeam'>
                        <h2 className='off-black-800'>2</h2>
                        <p className='p2 off-black-800'>{t("oCUI")}</p>

                    </div>
                    <div className='subTeam'>
                        <h2 className='off-black-800'>6</h2>
                        <p className='p2 off-black-800'>{t("oCDev")}</p>

                    </div>
                    <div className='subTeam'>
                        <h2 className='off-black-800'>1</h2>
                        <p className='p2 off-black-800'>{t("oCUX")}</p>

                    </div>
                </div>


            </div>

            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCProblems')}</h2>
                <div className="space-16"></div>
                <p className='off-black-600 paragraph'>{t('OCProblemsp')}</p>
            </div>

            <div className='case-slide'>
                <h2 className='off-black-800'>{t('oCBusiness')}</h2>
                <div className="space-16"></div>
                <ul className="bullet-points">
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCB1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCB2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCB3")}</p>
                        </div>
                    </li>
                </ul>

            </div>




            <div className="grid-container">
                <div id="inner-container">


                    <h2 className='off-black-800'>{t("OCProcess")}</h2>
                    <div className='space-32'></div>

                    <div id="card-container">


                        <div className='process-card'>

                            <div className='process-card-text'>
                                <div className='card-top'>
                                    <h2 className='off-black-800'>1</h2>

                                </div>
                                <div className='card-bottom'>
                                    <div className='space-32'></div>

                                    <h3 className='off-black-800'>{t("OCStep1")}</h3>
                                    <div className='space-6'></div>

                                    <p className='p-card'>{t("OCStep1D")}</p>

                                </div>

                            </div>

                            <div className='icon-div'>
                                <img id="search-svg" src={require("../../assets/process-understand-icon.svg").default} alt="" />

                            </div>

                        </div>

                        <div className='process-card'>

                            <div className='process-card-text'>
                                <div className='card-top'>
                                    <h2 className='off-black-800'>2</h2>

                                </div>
                                <div className='card-bottom'>
                                    <div className='space-32'></div>

                                    <h3 className='off-black-800'>{t("OCStep2")}</h3>
                                    <div className='space-6'></div>

                                    <p className='p-card'>{t("OCStep2D")}</p>

                                </div>

                            </div>
                            <div className='icon-div'>
                                <img id="filter-svg" src={require("../../assets/process-converge-icon.svg").default} alt="" />

                            </div>

                        </div>

                        <div className='process-card'>

                            <div>
                                <h2 className='off-black-800'>3</h2>
                                <div className='space-12'></div>

                                <h3 className='off-black-800'>{t("OCStep3")}</h3>
                                <div className='space-6'></div>

                                <p className='p-card'>{t("OCStep3D")}</p>
                            </div>

                            <div className='icon-div'>
                                <img id="pencil-svg" src={require("../../assets/process-design-icon.svg").default} alt="" />

                            </div>

                        </div>

                        <div className='process-card'>
                            <div className='icon-div'>
                                <img id="tube-svg" src={require("../../assets/process-validate-icon.svg").default} alt="" />

                            </div>
                            <div>
                                <h2 className='off-black-800'>4</h2>
                                <div className='space-12'></div>

                                <h3 className='off-black-800'>{t("OCStep4")}</h3>
                                <div className='space-6'></div>

                                <p className='p-card'>{t("OCStep4D")}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='process-step'>
                <div className='process-step-inner-container'>


                    <div className='top-step'>
                        <h2 className='off-white-100'>01.</h2>
                        <h3 className='off-white-100 all-caps'>{t("OCStep1")}</h3>
                        <img className="svg-step" src={require("../../assets/star-pointy.svg").default} alt="" />
                    </div>

                    <div className='bottom-step'>


                        <h2 className='off-white-100 step-heading'>{t("OCStep1Title")}</h2>

                        <div className='right-side-process-step'>
                            <div className='process-avatar'>

                                <img className='avatar-img' src={require("../../assets/UnderstandAvatar.png")} alt="" />

                            </div>
                            <div className='summary-container'>
                                <div className='summary-title-line'>
                                    <div className='line-for-summary'>
                                    </div>
                                    <p className='p2 bolden off-white-100'>{t("Summary")}</p>
                                </div>
                                <div className='space-8'></div>
                                <p className='step-text off-white-100 bolden'>{t("OCStep1Sum")}</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCResearch')}</h2>
                <div className="space-16"></div>
                <p className='p2 bolden off-black-800'>{t('OCRGoals')}</p>
                <div className='space-8'></div>
                <ul className="bullet-points">
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRG1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRG2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRG3")}</p>
                        </div>
                    </li>
                </ul>
                <div className='space-32'></div>
                <p className='p2 bolden off-black-800'>{t('OCRM')}</p>

                <div className='space-16'></div>
                <div className='methodology-outer-container'>
                    <div className='methodology-card'>


                        <div className='icon-container'>
                            <img src={require("../../assets/methodology-surveys-icon.svg").default} alt="" />


                        </div>
                        <div className='space-8'></div>
                        <p className='p2 bolden off-black-800'>Surveys</p>

                    </div>
                    <div className='methodology-card'>


                        <div className='icon-container'>
                            <img src={require("../../assets/methodology-usability-icon.svg").default} alt="" />


                        </div>
                        <div className='space-8'></div>
                        <p className='p2 bolden off-black-800'>Usability Testing</p>

                    </div>
                    <div className='methodology-card'>


                        <div className='icon-container'>
                            <img src={require("../../assets/methodology-interviews-icon.svg").default} alt="" />


                        </div>
                        <div className='space-8'></div>
                        <p className='p2 bolden off-black-800'>Interviews</p>

                    </div>

                </div>
                <div className='space-32'></div>
                <ul className="bullet-points">
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRM1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRM2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRM3")}</p>
                        </div>
                    </li>
                </ul>

            </div>


            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCRU')}</h2>
                <div className="space-16"></div>
                <p className='off-black-600 paragraph'>{t('OCRUp')}</p>
                <div className='space-32'></div>
                <p className='p2 bolden off-black-800'>{t('OCRUT')}</p>
                <div className='space-8'></div>

                <ul className="bullet-points">
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRUT1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRUT2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRUT3")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRUT4")}</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='grid-container'>
                <div id="opinions-inner-container">
                    <h2 className='off-black-800'>{t("OCRO")}</h2>
                    <div className='space-32'></div>
                    <div id="opinions-container">

                        <div className='opinion-card'>
                            <div>
                                <img src={require("../../assets/quote-icon.svg").default} alt="" />
                            </div>
                            <p>{t("OCRO1")}</p>
                        </div>
                        <div className='opinion-card'>
                            <div>
                                <img src={require("../../assets/quote-icon.svg").default} alt="" />
                            </div>
                            <p>{t("OCRO2")}</p>
                        </div>
                        <div className='opinion-card'>
                            <div>
                                <img src={require("../../assets/quote-icon.svg").default} alt="" />
                            </div>
                            <p>{t("OCRO3")}</p>
                        </div>
                        <div className='opinion-card'>
                            <div>
                                <img src={require("../../assets/quote-icon.svg").default} alt="" />
                            </div>
                            <p>{t("OCRO4")}</p>
                        </div>
                        <div className='opinion-card'>
                            <div>
                                <img src={require("../../assets/quote-icon.svg").default} alt="" />
                            </div>
                            <p>{t("OCRO5")}</p>
                        </div>
                        <div className='opinion-card'>
                            <div>
                                <img src={require("../../assets/quote-icon.svg").default} alt="" />
                            </div>
                            <p>{t("OCRO6")}</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCRBS')}</h2>
                <div className="space-16"></div>
                <p className='p2 off-black-600 paragraph'>{t('OCRBSp')}</p>
                <div className='space-32'></div>
                <p className='p2 bolden off-black-800'>{t("OCBRStake")}</p>

                <div className='space-16'></div>
                <div className='stakeholders-outer-container'>
                    <div className='methodology-card'>


                        <div className='icon-container'>
                            <img src={require("../../assets/stkh-icon-clients.svg").default} alt="" />


                        </div>
                        <div className='space-8'></div>
                        <p className='p2 bolden off-black-800'>{t("OCBRStake1")}</p>

                    </div>
                    <div className='methodology-card'>


                        <div className='icon-container'>
                            <img src={require("../../assets/stkh-icon-donors.svg").default} alt="" />


                        </div>
                        <div className='space-8'></div>
                        <p className='p2 bolden off-black-800'>{t("OCBRStake2")}</p>

                    </div>
                    <div className='methodology-card'>


                        <div className='icon-container'>
                            <img src={require("../../assets/stkh-icon-devs.svg").default} alt="" />


                        </div>
                        <div className='space-8'></div>
                        <p className='p2 bolden off-black-800'>{t("OCBRStake3")}</p>

                    </div>
                    <div className='methodology-card'>


                        <div className='icon-container'>
                            <img src={require("../../assets/stkh-icon-directors.svg").default} alt="" />


                        </div>
                        <div className='space-8'></div>
                        <p className='p2 bolden off-black-800'>{t("OCBRStake4")}</p>

                    </div>
                    <div className='methodology-card'>


                        <div className='icon-container'>
                            <img src={require("../../assets/stkh-icon-sales.svg").default} alt="" />


                        </div>
                        <div className='space-8'></div>
                        <p className='p2 bolden off-black-800'>{t("OCBRStake5")}</p>

                    </div>

                </div>
                <div className='space-32'></div>
                <p className='p2 bolden off-black-800'>{t("OCRBSO")}</p>

                <div className='space-8'></div>

                <ul className="bullet-points">
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRBSO1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRBSO2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRBSO3")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRBSO4")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCRBSO5")}</p>
                        </div>
                    </li>
                </ul>
                <div className='space-32'></div>
                <p className='p2 bolden off-black-800'>{t("OCBRSD")}</p>

                <div className='space-8'></div>

                <ul className="bullet-points">
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600 paragraph'>{t("OCBRSD1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600 paragraph'>{t("OCBRSD2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600 paragraph'>{t("OCBRSD3")}</p>
                        </div>
                    </li>
                </ul>

            </div>
            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCBRCA')}</h2>
                <div className="space-8"></div>
                <p className='off-black-600 paragraph'>{t('OCBRCAp')}</p>
                <div className='space-32'></div>
                {/* <p className='p2 bolden off-black-800'>Some of Olab's direct and indirect competitors</p> */}
                {/* <div className='space-16'></div> */}
                <div className='img-side'>
                    <figure>
                        <img className="case-img" src={require("../../assets/competition.png")} alt="Página de login de la CMS (diseño original previo)" />
                        <figcaption>{t('OCBRCACaption')}</figcaption>
                    </figure>


                </div>
                <div className='space-32'></div>
                <p className='p2 bolden off-black-800'>{t("OCBRCAD")}</p>
                <div className='space-8'></div>
                <ul className="bullet-points">
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCBRCAD1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCBRCAD2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCBRCAD3")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCBRCAD4")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-600'>{t("OCBRCAD5")}</p>
                        </div>
                    </li>
                </ul>


            </div>
            <div className='process-step'>
                <div className='process-step-inner-container'>


                    <div className='top-step'>
                        <h2 className='off-white-100'>02.</h2>
                        <h3 className='off-white-100 all-caps'>{t("OCStep2")}</h3>
                        <img className="svg-step" src={require("../../assets/star-pointy.svg").default} alt="" />
                    </div>

                    <div className='bottom-step'>


                        <h2 className='off-white-100 step-heading'>{t("OCStep2Title")}</h2>

                        <div className='right-side-process-step'>
                            <div className='process-avatar'>

                                <img className='avatar-img' src={require("../../assets/ConvergeAvatar.png")} alt="" />

                            </div>
                            <div className='summary-container'>
                                <div className='summary-title-line'>
                                    <div className='line-for-summary'>
                                    </div>
                                    <p className='p2 bolden off-white-100'>{t("Summary")}</p>
                                </div>
                                <div className='space-8'></div>
                                <p className='step-text off-white-100 bolden'>{t("OCStep2Sum")}</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className='case-slide'>
                <div className='subheader-container'>
                    <div className='subheader-line'>

                    </div>
                    <p className='p2 bolden off-black-800'>{t("AreaImpr")} 1</p>
                </div>
                <div className='space-8'></div>

                <h2 className='off-black-800'>{t('OCC1')}</h2>
                <div className="space-16"></div>
                <p className='off-black-600 paragraph'>{t('OCC1p')}</p>
                <div className='space-16'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/jerarquia.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>
                    <figcaption>{t('OCC1Caption')}</figcaption>

                </figure>
            </div>

            <div className='case-slide'>
                <div className='subheader-container'>
                    <div className='subheader-line'>

                    </div>
                    <p className='p2 bolden off-black-800'>{t("AreaImpr")} 2</p>
                </div>
                <div className='space-8'></div>

                <h2 className='off-black-800'>{t('OCC2')}</h2>
                <div className="space-16"></div>
                <p className='off-black-600 paragraph'>{t('OCC2p')}</p>
                <div className='space-16'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/inconsistentDesignFirst.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>
                    <figcaption>{t('OCC2Caption')}</figcaption>

                </figure>
            </div>

            <div className='case-slide-extended'>
                <div className='text-extended-container'>


                    <div className='subheader-container'>
                        <div className='subheader-line'>

                        </div>
                        <p className='p2 bolden off-black-800'>{t("AreaImpr")} 3</p>
                    </div>
                    <div className='space-8'></div>

                    <h2 className='off-black-800'>{t('OCC3')}</h2>
                    <div className="space-16"></div>
                    <p className='off-black-600 paragraph'>{t('OCC3p')}</p>
                    <div className='space-16'></div>
                </div>
                <figure>
                    <div className='svg-container'>
                        <img className='svg-img' ref={flowProblemRef} alt="" />

                    </div>
                    <figcaption>{t('OCC3Caption')}</figcaption>

                </figure>
            </div>

            <div className='case-slide'>
                <div className='subheader-container'>
                    <div className='subheader-line'>

                    </div>
                    <p className='p2 bolden off-black-800'>{t("AreaImpr")} 4</p>
                </div>
                <div className='space-8'></div>

                <h2 className='off-black-800'>{t('OCC4')}</h2>
                <div className="space-16"></div>
                <p className='off-black-600 paragraph'>{t('OCC4p')}</p>
                <div className='space-16'></div>

                <figure>

                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/reportsFirst.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>
                    <figcaption>{t('OCC4Caption')}</figcaption>


                </figure>
            </div>

            <div className='case-slide'>
                <div className='subheader-container'>
                    <div className='subheader-line'>

                    </div>
                    <p className='p2 bolden off-black-800'>{t("AreaImpr")} 5</p>
                </div>
                <div className='space-8'></div>
                <h2 className='off-black-800'>{t('OCC5')}</h2>
                <div className="space-16"></div>
                <p className='off-black-600 paragraph'>{t('OCC5p')}</p>
                <div className='space-16'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/chat.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>
                    <figcaption>{t('OCC5Caption')}</figcaption>

                </figure>
            </div>

            <div className='process-step'>
                <div className='process-step-inner-container'>


                    <div className='top-step'>
                        <h2 className='off-white-100'>03.</h2>
                        <h3 className='off-white-100 all-caps'>{t("OCStep3")}</h3>
                        <img className="svg-step" src={require("../../assets/star-pointy.svg").default} alt="" />
                    </div>

                    <div className='bottom-step'>


                        <h2 className='off-white-100 step-heading'>{t("OCStep3Title")}</h2>

                        <div className='right-side-process-step'>
                            <div className='process-avatar'>

                                <img className='avatar-img' src={require("../../assets/DesignAvatar.png")} alt="" />

                            </div>
                            <div className='summary-container'>
                                <div className='summary-title-line'>
                                    <div className='line-for-summary'>
                                    </div>
                                    <p className='p2 bolden off-white-100'>{t("Summary")}</p>
                                </div>
                                <div className='space-8'></div>
                                <p className='step-text off-white-100 bolden'>{t("OCStep3Sum")}</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <div className='case-slide'>
                <div className='subheader-container'>
                    <div className='subheader-line'>

                    </div>
                    <p className='p2 bolden off-black-800'>{t("AreaImpr")} 1</p>
                </div>
                <div className='space-8'></div>
                <h2 className='off-black-800'>{t('OCC1')}</h2>
                <div className="space-16"></div>
                <p className='off-black-600 paragraph'>{t('OCD1')}</p>
                <div className='space-16'></div>

                <p className='p2 bolden off-black-800'>{t("OCDAfter")}</p>
                <div className='space-8'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/jerarquiaNew.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>

                </figure>
                <div className='space-32'></div>

                <p className='p2 bolden off-black-800'>{t("OCDBefore")}</p>
                <div className='space-8'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/jerarquia.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>
                </figure>
            </div>

            <div className='case-slide'>
                <div className='subheader-container'>
                    <div className='subheader-line'>

                    </div>
                    <p className='p2 bolden off-black-800'>{t("AreaImpr")} 2</p>
                </div>
                <div className='space-8'></div>
                <h2 className='off-black-800'>{t('OCC2')}</h2>
                <div className="space-16"></div>
                <p className='off-black-600 paragraph'>{t('OCD2')}</p>
                <div className='space-16'></div>

                <p className='p2 bolden off-black-800'>{t("OCDAfter")}</p>
                <div className='space-8'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/inconsistentDesignNew.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>

                </figure>
                <div className='space-32'></div>

                <p className='p2 bolden off-black-800'>{t("OCDBefore")}</p>
                <div className='space-8'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/inconsistentDesignFirst.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>
                </figure>
            </div>

            <div className='case-slide-extended'>
                <div className='text-extended-container'>



                    <div className='subheader-container'>
                        <div className='subheader-line'>

                        </div>
                        <p className='p2 bolden off-black-800'>{t("AreaImpr")} 3</p>
                    </div>
                    <div className='space-8'></div>
                    <h2 className='off-black-800'>{t('OCC3')}</h2>
                    <div className="space-16"></div>
                    <p className='off-black-600 paragraph'>{t('OCD3')}</p>
                    <div className='space-16'></div>

                    <p className='p2 bolden off-black-800'>{t("OCDAfter")}</p>
                    <div className='space-8'></div>
                </div>

                <figure>
                    <div className='svg-container'>
                        <img className='svg-img' ref={flowAfterRef} alt="" />
                    </div>

                </figure>
                <div className='text-extended-container'>
                    <div className='subheader-container'>



                        <div className='space-32'></div>


                        <p className='p2 bolden off-black-800'>{t("OCDBefore")}</p>
                        <div className='space-8'></div>
                    </div>
                </div>

                <figure>
                    <div className='svg-container'>
                        <img className='svg-img' ref={flowBeforeRef} alt="" />
                    </div>
                </figure>
            </div>
            <div className='case-slide'>
                <div className='subheader-container'>
                    <div className='subheader-line'>

                    </div>
                    <p className='p2 bolden off-black-800'>{t("AreaImpr")} 4</p>
                </div>
                <div className='space-8'></div>
                <h2 className='off-black-800'>{t('OCC4')}</h2>
                <div className="space-16"></div>
                <p className='off-black-600 paragraph'>{t('OCD4')}</p>
                <div className='space-16'></div>

                <p className='p2 bolden off-black-800'>{t("OCDAfter")}</p>
                <div className='space-8'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/automaticReports.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>

                </figure>
                <div className='space-32'></div>

                <p className='p2 bolden off-black-800'>{t("OCDBefore")}</p>
                <div className='space-8'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/reportsFirst.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>
                </figure>
            </div>

            <div className='case-slide'>
                <div className='subheader-container'>
                    <div className='subheader-line'>

                    </div>
                    <p className='p2 bolden off-black-800'>{t("AreaImpr")} 5</p>
                </div>
                <div className='space-8'></div>
                <h2 className='off-black-800'>{t('OCC5')}</h2>
                <div className="space-16"></div>
                <p className='off-black-600 paragraph'>{t('OCD5')}</p>
                <div className='space-16'></div>

                <p className='p2 bolden off-black-800'>{t("OCDAfter")}</p>
                <div className='space-8'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/chatNew.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>

                </figure>
                <div className='space-32'></div>

                <p className='p2 bolden off-black-800'>{t("OCDBefore")}</p>
                <div className='space-8'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/chat.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>
                </figure>
            </div>

            <div className='process-step'>
                <div className='process-step-inner-container'>


                    <div className='top-step'>
                        <h2 className='off-white-100'>04.</h2>
                        <h3 className='off-white-100 all-caps'>{t("OCStep4")}</h3>
                        <img className="svg-step" src={require("../../assets/star-pointy.svg").default} alt="" />
                    </div>

                    <div className='bottom-step'>


                        <h2 className='off-white-100 step-heading'>{t("OCStep4Title")}</h2>

                        <div className='right-side-process-step'>
                            <div className='process-avatar'>

                                <img className='avatar-img' src={require("../../assets/ValidateAvatar.png")} alt="" />

                            </div>
                            <div className='summary-container'>
                                <div className='summary-title-line'>
                                    <div className='line-for-summary'>
                                    </div>
                                    <p className='p2 bolden off-white-100'>{t("Summary")}</p>
                                </div>
                                <div className='space-8'></div>
                                <p className='step-text off-white-100 bolden'>{t("OCStep4Sum")}</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>



            <div className='case-slide'>
                <h2 className='off-black-800'>{t("oCVMetrics")}</h2>
                <div className="space-16"></div>
                <ul className="bullet-points">
                    <li>
                        <div className='li-div'>
                            <p className='p2 bolden off-black-800'>1</p>
                            <p className='off-black-600'>{t("OCV1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <p className='p2 bolden off-black-800'>2</p>
                            <p className='off-black-600'>{t("OCV2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <p className='p2 bolden off-black-800'>3</p>
                            <p className='off-black-600'>{t("OCV3")}</p>
                        </div>
                    </li>


                </ul>

                <div className='space-32'></div>
                <div className='metrics-container'>
                    <div className='tot-container'>
                        <img id="tot-img" src={require("../../assets/timeOnTask.png")} ref={totRef} />


                    </div>
                    <div className='sr-container'>
                        <img id="sr-img" src={require("../../assets/successRate.png")} ref={srRef} />
                    </div>

                </div>

            </div>

            <div className='case-slide'>
                <h2 className='off-black-800'>{t("OCV4")}</h2>
                <div className="space-16"></div>
                <p className='p2 off-black-600 paragraph'>{t("OCV4p")}</p>

                <div className='space-32'></div>
                <div className='NPS-SUS-container'>
                    <div className='NPS-SUS'>
                        <img className='NPS-SUS-imgs' src={require("../../assets/NPSGraph.png")} ref={NPSRef} />
                        <h3 className='off-black-800'>NPS</h3>
                    </div>
                    <div className='NPS-SUS'>
                        <img className='NPS-SUS-imgs' src={require("../../assets/SUSGraph.png")} ref={SUSRef} />
                        <h3 className='off-black-800'>SUS</h3>

                    </div>




                </div>

            </div>

            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCVC')}</h2>
                <div className="space-16"></div>
                <p className='off-black-600 paragraph'>{t('OCVCp1')}</p>
                <div className='space-16'></div>
                <p className='off-black-600 paragraph' >{t("OCVCp2")}</p>
            </div>

            <div className='process-step'>
                <div className='process-step-inner-container'>


                    <div className='top-step'>
                        <h2 className='off-white-100'>00.</h2>
                        {/* <h3 className='off-white-100 all-caps'>{t("OCStep2")}</h3> */}
                        <img className="svg-step" src={require("../../assets/star-pointy.svg").default} alt="" />
                    </div>

                    <div className='bottom-step'>


                        <h2 className='off-white-100 step-heading'>{t("TyR")}</h2>

                        <div className='right-side-process-step'>
                            <div className='process-avatar'>

                                {/* <img className='avatar-img' src={require("../../assets/ThanksAvatar.png")} alt="" /> */}

                            </div>
                            <div id="buttons-final">
                                <button id="main-btn-final" className="case-finish-btn" onClick={() => {
                                    navigation("/", { state: { targetId: "connect-container" } });
                                }}>{t("FinalContact")}</button>

                                <button className="case-finish-btn" onClick={() => { window.open(caseStudyLink) }}>
                                    {t("FinalNextCase")}
                                    <img src={require("../../assets/external-arrow-white.svg").default} alt="" />
                                </button>

                                <button className="case-finish-btn" onClick={() => {
                                    navigation("/", { state: { targetId: "mask-nav" } });
                                }}>{t("FinalBackHome")}</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default CaseStudyNew