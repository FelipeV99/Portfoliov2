import React, { useState } from 'react'
import './caseStudyNew.css'
import { AppTagContext } from '../../App';
import { useTranslation } from 'react-i18next'
import { useRef, useEffect, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import Lottie from 'react-lottie';
import PreloaderAnimationDark from "../../assets/PreloaderAnimationDark.json";



const CaseStudyNew = () => {

    gsap.registerPlugin(useGSAP);


    const [t, i18next] = useTranslation();

    const navigation = useNavigate();
    const location = useLocation();

    // const metric1Ref = useRef();
    // const metric2Ref = useRef();
    // const metric3Ref = useRef();
    const prOverlayOlabRef = useRef();

    // useEffect(() => {
    //     if (i18next.language != null) {
    //         const language = i18next.language.slice(0, 2);

    //         if (language == 'en') {
    //             metric1Ref.current.src = require("../../assets/courseMetricsEN.png");
    //             metric2Ref.current.src = require("../../assets/createUserMetricsEN.png");
    //             metric3Ref.current.src = require("../../assets/reportsMetricsEN.png");
    //         } else if (language == 'es') {
    //             metric1Ref.current.src = require("../../assets/courseMetricsES.png");
    //             metric2Ref.current.src = require("../../assets/createUserMetricsES.png");
    //             metric3Ref.current.src = require("../../assets/reportsMetricsES.png");
    //         }
    //     }
    // }, [i18next.language]);

    // const { contextSafe } = useGSAP();

    // const fixBackground = contextSafe(() => {
    //     const tl = gsap.timeline();

    //     tl.to(".App",{
    //         backgroundColor: "#272727",
    //         duration:0

    //     });
    // });


    const appTag = useContext(AppTagContext);

    useEffect(() => {
        appTag.current.removeAttribute('style');
    }, []);




    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: PreloaderAnimationDark
    }

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


    const { contextSafe } = useGSAP({ scope: prOverlayOlabRef.current });

    useEffect(() => {
        document.documentElement.style.overflowY = "hidden";
        // const yMovement = prOverlayOlabRef.current.offsetHeight;
        // console.log(yMovement);
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
    // const normalizeAppBackground = () => {
    //     console.log("normalizing app color from case study");
    //     appTag.current.removeAttribute('style');
    //     // console.log(appTag.current.style.backgroundColor);
    //     gsap.set(appTag.current, {clearProps: true});

    //     // appTag.current.style.backgroundColor = "#000000";
    // };



    // useEffect(() => {
    //     console.log("restoring bg");

    //     fixBackground();

    // }, [location.pathname])


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
                        <img className='img-case-hero' src={require("../../assets/olabNewHero.png")} alt="" />

                    </div>
                </div>
            </section>
            <div className='case-slide'>
                <h2 className='off-black-800'>{t('oCContext')}</h2>
                <div className="space-16"></div>
                <p className='p2 bolden off-black-800'>{t('oCRole')}</p>
                <div className="space-8"></div>
                <p className='off-black-700 paragraph'>{t("ocContextp")}</p>
                <div className="space-32"></div>
                <p className='p2 bolden off-black-800'>{t('oCAbout')}</p>
                <div className='space-8'></div>
                <p className='off-black-700 paragraph'>{t('oCAboutp')}</p>
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
                <p className='off-black-700 paragraph'>{t('OCProblemsp')}</p>
            </div>

            <div className='case-slide'>
                <h2 className='off-black-800'>{t('oCBusiness')}</h2>
                <div className="space-16"></div>
                <ul className="bullet-points">
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCB1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCB2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCB3")}</p>
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
                            <div className='icon-div'>
                                <img id="search-svg" src={require("../../assets/process-understand-icon.svg").default} alt="" />

                            </div>
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

                        </div>

                        <div className='process-card'>
                            <div className='icon-div'>
                                <img id="filter-svg" src={require("../../assets/process-converge-icon.svg").default} alt="" />

                            </div>
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

                        </div>

                        <div className='process-card'>

                            <div className='icon-div'>
                                <img id="pencil-svg" src={require("../../assets/process-design-icon.svg").default} alt="" />

                            </div>
                            <div>
                                <h2 className='off-black-800'>3</h2>
                                <div className='space-12'></div>

                                <h3 className='off-black-800'>{t("OCStep3")}</h3>
                                <div className='space-6'></div>

                                <p className='p-card'>{t("OCStep3D")}</p>
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
                            <p className='off-black-700'>{t("OCRG1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCRG2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCRG3")}</p>
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
                            <p className='off-black-700'>{t("OCRM1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCRM2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCRM3")}</p>
                        </div>
                    </li>
                </ul>

            </div>


            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCRU')}</h2>
                <div className="space-16"></div>
                <p className='off-black-700 paragraph'>{t('OCRUp')}</p>
                <div className='space-32'></div>
                <p className='p2 bolden off-black-800'>{t('OCRUT')}</p>
                <div className='space-8'></div>

                <ul className="bullet-points">
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCRUT1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCRUT2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCRUT3")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCRUT4")}</p>
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
                <p className='p2 off-black-700 paragraph'>{t('OCRBSp')}</p>
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
                        <p className='p2 bolden off-black-800'>{t("OCBRStake4")}</p>

                    </div>
                    <div className='methodology-card'>


                        <div className='icon-container'>
                            <img src={require("../../assets/stkh-icon-directors.svg").default} alt="" />


                        </div>
                        <div className='space-8'></div>
                        <p className='p2 bolden off-black-800'>{t("OCBRStake5")}</p>

                    </div>
                    <div className='methodology-card'>


                        <div className='icon-container'>
                            <img src={require("../../assets/stkh-icon-sales.svg").default} alt="" />


                        </div>
                        <div className='space-8'></div>
                        <p className='p2 bolden off-black-800'>Marketing</p>

                    </div>

                </div>
                <div className='space-32'></div>
                <p className='p2 bolden off-black-800'>{t("OCRBSO")}</p>

                <div className='space-8'></div>

                <ul className="bullet-points">
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCRBSO1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCRBSO2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCRBSO3")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCRBSO4")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCRBSO5")}</p>
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
                            <p className='off-black-700'>{t("OCBRSD1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCBRSD2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCBRSD3")}</p>
                        </div>
                    </li>
                </ul>

            </div>
            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCBRCA')}</h2>
                <div className="space-16"></div>
                <p className='off-black-700 paragraph'>{t('OCBRCAp')}</p>
                <div className='space-16'></div>
                <p className='p2 bolden off-black-800'>Some of Olab's direct and indirect competitors</p>
                <div className='space-16'></div>
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
                            <p className='off-black-700'>{t("OCBRCAD1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCBRCAD2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCBRCAD3")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCBRCAD4")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <img src={require("../../assets/star-bullet.svg").default} alt="" />
                            <p className='off-black-700'>{t("OCBRCAD5")}</p>
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
                <h2 className='off-black-800'>{t('OCC1')}</h2>
                <div className="space-16"></div>
                <p className='off-black-700 paragraph'>{t('OCC1p')}</p>
                <div className='space-16'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/jerarquia.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>
                    <figcaption>{t('OCC1Caption')}</figcaption>

                </figure>
            </div>

            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCC2')}</h2>
                <div className="space-16"></div>
                <p className='off-black-700 paragraph'>{t('OCC2p')}</p>
                <div className='space-16'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/inconsistentDesignFirst.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>
                    <figcaption>{t('OCC2Caption')}</figcaption>

                </figure>
            </div>

            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCC3')}</h2>
                <div className="space-16"></div>
                <p className='off-black-700 paragraph'>{t('OCC3p')}</p>
                <div className='space-16'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/flowProblem.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>
                    <figcaption>{t('OCC3Caption')}</figcaption>

                </figure>
            </div>

            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCC4')}</h2>
                <div className="space-16"></div>
                <p className='off-black-700 paragraph'>{t('OCC4p')}</p>
                <div className='space-16'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/reportsFirst.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>

                </figure>
            </div>

            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCC5')}</h2>
                <div className="space-16"></div>
                <p className='off-black-700 paragraph'>{t('OCC5p')}</p>
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
                <h2 className='off-black-800'>{t('OCC1')}</h2>
                <div className="space-16"></div>
                <p className='off-black-700 paragraph'>{t('OCC1S')}</p>
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
                <h2 className='off-black-800'>{t('OCC2')}</h2>
                <div className="space-16"></div>
                <p className='off-black-700 paragraph'>{t('OCC2S')}</p>
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

            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCC3')}</h2>
                <div className="space-16"></div>
                <p className='off-black-700 paragraph'>{t('OCC3S')}</p>
                <div className='space-16'></div>

                <p className='p2 bolden off-black-800'>{t("OCDAfter")}</p>
                <div className='space-8'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/flowNew.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>

                </figure>
                <div className='space-32'></div>

                <p className='p2 bolden off-black-800'>{t("OCDBefore")}</p>
                <div className='space-8'></div>

                <figure>
                    <div className='img-case-container'>
                        <img className="case-img" src={require("../../assets/flow.png")} alt="Página de login de la CMS (diseño original previo)" />
                    </div>
                </figure>
            </div>
            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCC4')}</h2>
                <div className="space-16"></div>
                <p className='off-black-700 paragraph'>{t('OCC4S')}</p>
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
                <h2 className='off-black-800'>{t('OCC5')}</h2>
                <div className="space-16"></div>
                <p className='off-black-700 paragraph'>{t('OCC5S')}</p>
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
                <h2 className='off-black-800'>Metrics</h2>
                <div className="space-16"></div>
                <ul className="bullet-points">
                    <li>
                        <div className='li-div'>
                            <p className='p2 bolden off-black-800'>1</p>
                            <p className='off-black-700'>{t("OCV1")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <p className='p2 bolden off-black-800'>2</p>
                            <p className='off-black-700'>{t("OCV2")}</p>
                        </div>
                    </li>
                    <li>
                        <div className='li-div'>
                            <p className='p2 bolden off-black-800'>3</p>
                            <p className='off-black-700'>{t("OCV3")}</p>
                        </div>
                    </li>


                </ul>

                <div className='space-32'></div>
                <div className='metrics-container'>
                    <div className='tot-container'>
                        <img id="tot-img" src={require("../../assets/duracionCompletarTarea.png")} />


                    </div>
                    <div className='sr-container'>
                        <img id="sr-img" src={require("../../assets/tasaDeExito.png")} />
                    </div>

                </div>

            </div>

            <div className='case-slide'>
                <h2 className='off-black-800'>{t("OCV4")}</h2>
                <div className="space-16"></div>
                <p className='p2 off-black-700 paragraph'>Sobre 10 participantes, se obtuvieron los siguientes resultados, sin embargo se identificó un bias en las comunidades vulnerables por lo que....</p>

                <div className='space-16'></div>
                <div className='NPS-SUS-container'>
                    <div className='NPS-SUS'>
                        <img src={require("../../assets/NPSGraph.svg").default} />
                        <h3 className='off-black-800'>NPM</h3>
                    </div>
                    <div className='NPS-SUS'>
                        <img src={require("../../assets/SUSGraph.svg").default} />
                        <h3 className='off-black-800'>SUS</h3>

                    </div>




                </div>

            </div>

            <div className='case-slide'>
                <h2 className='off-black-800'>{t('OCVC')}</h2>
                <div className="space-16"></div>
                <p className='off-black-700 paragraph'>{t('OCVCp1')}</p>
                <div className='space-16'></div>
                <p className='off-black-700 paragraph' >{t("OCVCp2")}</p>
            </div>

            <div className='process-step'>
                <div className='top-step'>
                    <h2 className='off-white-100'>00.</h2>
                    <img className="svg-step" src={require("../../assets/star-pointy.svg").default} alt="" />
                </div>

                <div className='bottom-step'>


                    <h2 className='off-white-100 step-heading'>Thanks for reading!</h2>

                    <div id="buttons-final">
                        <button id="main-btn-final" className="case-finish-btn" onClick={() => {
                            navigation("/", { state: { targetId: "connect-container" } });
                        }}>Contact</button>

                        <button className="case-finish-btn" onClick={() => { window.open(caseStudyLink) }}>Go to next case study</button>

                        <button className="case-finish-btn" onClick={() => {
                            navigation("/", { state: { targetId: "mask-nav" } });
                        }}>Back to home</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CaseStudyNew