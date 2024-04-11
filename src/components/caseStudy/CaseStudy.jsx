import React from 'react'
import './caseStudy.css'
import { AppTagContext } from '../../App';
import { useTranslation } from 'react-i18next'
import { useRef, useEffect, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'


const CaseStudy = () => {

    gsap.registerPlugin(useGSAP);


    const [t, i18next] = useTranslation();

    const navigation = useNavigate();
    const location = useLocation();

    const metric1Ref = useRef();
    const metric2Ref = useRef();
    const metric3Ref = useRef();

    useEffect(() => {
        if (i18next.language != null) {
            const language = i18next.language.slice(0, 2);

            if (language == 'en') {
                metric1Ref.current.src = require("../../assets/courseMetricsEN.png");
                metric2Ref.current.src = require("../../assets/createUserMetricsEN.png");
                metric3Ref.current.src = require("../../assets/reportsMetricsEN.png");
            } else if (language == 'es') {
                metric1Ref.current.src = require("../../assets/courseMetricsES.png");
                metric2Ref.current.src = require("../../assets/createUserMetricsES.png");
                metric3Ref.current.src = require("../../assets/reportsMetricsES.png");
            }
        }
    }, [i18next.language]);

    // const { contextSafe } = useGSAP();

    // const fixBackground = contextSafe(() => {
    //     const tl = gsap.timeline();
        
    //     tl.to(".App",{
    //         backgroundColor: "#272727",
    //         duration:0
            
    //     });
    // });

    
    const appTag = useContext(AppTagContext);

    useEffect(()=>{
        appTag.current.removeAttribute('style');
    }, [])
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
            <section id="case-container-olab">

                <div id="case-inner-container">

                    <div className='text-case-olab'>
                        <div className='project-type'>
                            <img id="asterisk" src={require("../../assets/asterisk.svg").default} alt="" />
                            <p id="asterisk-p">Industry experience</p>
                        </div>
                        <div className="bottom-text" >


                            <div className='enumerator-container'>
                                <div className='line-for-number'>

                                </div>
                                <p id="num-p">01/02</p>
                            </div>
                            <h1 id="temp-title">O-lab</h1>
                            <p id="temp-p">Advancing the experience of educaional content. O-lab, un Sistema de Administración y Monitoreo, y consumo de Contenido para comunidades vulnerables y empresas.</p>
                            
                        </div>
                    </div >
                    <div id="case-img-container">
                        <img className='img-case' src={require("../../assets/olabNewHero.png")} alt="" />

                    </div>
                </div>
            </section>
            <div className='case-slide'>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t('oCContext')}</h2>
                    <div className="space-12"></div>
                    <p className='p2 bolden color-orange-dark'>{t('oCRole')}</p>
                    <div className="space-6"></div>
                    <p>{t("ocContextp")}</p>
                    <div className="space-12"></div>
                    <p className='p2 bolden color-orange-dark'>{t('oCAbout')}</p>
                    <div className='space-6'></div>
                    <p>{t('oCAboutp')}</p>
                </div>
                <div className='img-side'>
                    <figure>
                        <img className="case-img" src={require("../../assets/contexto.png")} alt="Página de login de la CMS (diseño original previo)" />
                        <figcaption>{t('oCCCaption')}</figcaption>

                    </figure>
                </div>
            </div>
            <div className='case-slide' id="context-pr">
                <div id="left-side-obj" className='text-side'>
                    <h2 className='color-orange-dark'>{t("oCBusiness")}</h2>
                    <div className='space-6'></div>
                    <ul id="bullet-objectives">
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCB1")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCB2")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCB3")}</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div id="right-side-obj" className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCProblems")}</h2>
                    <div className='space-6'></div>
                    <p>{t("OCProblemsp")}</p>
                </div>

            </div>
            <div id="process-container">
                <div id="inner-container">


                    <h2 className='color-orange-dark'>{t("OCProcess")}</h2>
                    <div className='space-12'></div>
                    <div id="card-container">


                        <div className='process-card'>
                            <div className='icon-div'>
                                <img id="search-svg" src={require("../../assets/bx-search-alt.svg").default} alt="" />

                            </div>
                            <div>
                                <p className="number">1</p>
                                <div className='space-12'></div>

                                <h2 className='h-card'>{t("OCStep1")}</h2>
                                <div className='space-6'></div>

                                <p className='p-card'>{t("OCStep1D")}</p>
                            </div>

                        </div>
                        <div className='process-card'>
                            <div className='icon-div'>
                                <img id="filter-svg" src={require("../../assets/bx-filter-alt.svg").default} alt="" />

                            </div>
                            <div>
                                <p className="number">2</p>
                                <div className='space-12'></div>

                                <h2 className='h-card'>{t("OCStep2")}</h2>
                                <div className='space-6'></div>

                                <p className='p-card'>{t("OCStep2D")}</p>
                            </div>

                        </div>
                        <div className='process-card'>
                            <div className='icon-div'>
                                <img id="pencil-svg" src={require("../../assets/bx-pencil.svg").default} alt="" />

                            </div>
                            <div>
                                <p className="number">3</p>
                                <div className='space-12'></div>

                                <h2 className='h-card'>{t("OCStep3")}</h2>
                                <div className='space-6'></div>

                                <p className='p-card'>{t("OCStep3D")}</p>
                            </div>

                        </div>

                        <div className='process-card'>
                            <div className='icon-div'>
                                <img id="tube-svg" src={require("../../assets/bx-test-tube.svg").default} alt="" />

                            </div>
                            <div>
                                <p className="number">4</p>
                                <div className='space-12'></div>

                                <h2 className='h-card'>{t("OCStep4")}</h2>
                                <div className='space-6'></div>

                                <p className='p-card'>{t("OCStep4D")}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='process-step'>
                <img className="svg-step" src={require("../../assets/search-bg.svg").default} alt="" />
                <div className='foreground'>


                    <div>
                        <p className='whiten step-number'>01 /</p>
                    </div>
                    <div>
                        <h2 className='whiten'>{t("OCStep1")}</h2>
                        <div className='space-6'></div>
                        <p className='whiten step-text'>{t("OCStep1D")}</p>
                    </div>
                </div>
            </div>

            <div className='case-slide'>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCResearch")}</h2>
                    <div className='space-12'></div>
                    <p className='bolden p2'>{t("OCRGoals")}</p>
                    <div className='space-6'></div>
                    <ul>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRG1")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRG2")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRG3")}</p>
                            </div>
                        </li>
                    </ul>
                    <p className='bolden p2'>{t("OCRM")}</p>
                    <div className='space-6'></div>
                    <ul>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRM1")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRM2")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRM3")}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='img-side'>
                    <figure>
                        <img id="graph-img" className="case-img" src={require("../../assets/researchGraph.png")} alt="Página de login de la CMS (diseño original previo)" />
                        {/* <figcaption>{t('OCRCaption')}</figcaption> */}

                    </figure>

                </div>

            </div>
            <div className='case-slide'>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCRU")}</h2>
                    <div className='space-6'></div>
                    <p>{t("OCRUp")}</p>
                    <div className='space-12'></div>
                    <p className='bolden p2'>{t("OCRUT")}</p>
                    <div className='space-6'></div>
                    <ul>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRUT1")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRUT2")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRUT3")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRUT4")}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='img-side'>
                    <img id="graph-img" className="case-img" src={require("../../assets/usabilityTest.png")} alt="Página de login de la CMS (diseño original previo)" />
                </div>
            </div>

            <div id="opinions-big-container">
                <div id="opinions-inner-container">
                    <h2 className='color-orange-dark'>{t("OCRO")}</h2>
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
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCRBS")}</h2>
                    <div className='space-6'></div>
                    <p>{t("OCRBSp")}</p>
                    <div className='space-12'></div>
                    <p className='bolden p2'>{t("OCRBSO")}</p>
                    <div className='space-6'></div>
                    <ul>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRBSO1")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRBSO2")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRBSO3")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRBSO4")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCRBSO5")}</p>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className='img-side'>
                    <img className="case-img" src={require("../../assets/stakeholdersFirst.png")} alt="Página de login de la CMS (diseño original previo)" />

                </div>

            </div>
            <div className='case-slide reverse-flex-col'>
                <div className='img-side'>
                    <img className="case-img" src={require("../../assets/stakeholdersSecond.png")} alt="Página de login de la CMS (diseño original previo)" />

                </div>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCRBS")}</h2>
                    <div className='space-12'></div>
                    <p className='bolden p2'>{t("OCBRStake")}</p>
                    <div className='space-6'></div>
                    <ul>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCBRStake1")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCBRStake2")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCBRStake3")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCBRStake4")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCBRStake5")}</p>
                            </div>
                        </li>
                    </ul>
                    <div className='space-12'></div>
                    <p className='bolden p2'>{t("OCBRSD")}</p>
                    <div className='space-6'></div>
                    <ul>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCBRSD1")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCBRSD2")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCBRSD3")}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='case-slide'>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCBRCA")}</h2>
                    <div className='space-6'></div>
                    <p>{t("OCBRCAp")}</p>
                    <div className='space-12'></div>
                    <p className='bolden p2'>{t("OCBRCAD")}</p>
                    <div className='space-6'></div>
                    <ul>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCBRCAD1")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCBRCAD2")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCBRCAD3")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCBRCAD4")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCBRCAD5")}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='img-side'>
                    <figure>
                        <img className="case-img" id="comp-img" src={require("../../assets/competition.png")} alt="Página de login de la CMS (diseño original previo)" />
                        <figcaption>{t('OCBRCACaption')}</figcaption>
                    </figure>


                </div>
            </div>
            <div className='process-step'>
                <img className="svg-step" src={require("../../assets/filter-bg.svg").default} alt="" />
                <div className='foreground'>


                    <div>
                        <p className='whiten step-number'>02 /</p>
                    </div>
                    <div>
                        <h2 className='whiten'>{t("OCStep2")}</h2>
                        <div className='space-6'></div>
                        <p className='whiten step-text'>{t("OCStep2D")}</p>
                    </div>
                </div>
            </div>
            <div className='case-slide reverse-flex-col'>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCC1")}</h2>
                    <div className='space-6'></div>
                    <p className='color-orange-dark'>{t("OCC1p")}</p>

                </div>
                <div className='img-side'>
                    <figure>
                        <img className="case-img" src={require("../../assets/jerarquia.png")} alt="Página de login de la CMS (diseño original previo)" />
                        <figcaption>{t('OCC1Caption')}</figcaption>

                    </figure>

                </div>

            </div>
            <div className='case-slide reverse-flex-col'>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCC2")}</h2>
                    <div className='space-6'></div>
                    <p>{t("OCC2p")}</p>
                </div>
                <div className='img-side'>
                    <figure>
                        <img className="case-img" src={require("../../assets/inconsistentDesignFirst.png")} alt="Página de login de la CMS (diseño original previo)" />
                        <figcaption>{t('OCC2Caption')}</figcaption>

                    </figure>
                </div>
            </div>

            <div id='case-slide-flows'>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCC3")}</h2>
                    <div className='space-6'></div>
                    <p>{t("OCC3p")}</p>

                </div>
                <div id="flow-img-pr-container">
                    <figure>
                        <img id="flow-img-pr" src={require("../../assets/flowProblem.png")} alt="Página de login de la CMS (diseño original previo)" />
                        <figcaption>{t('OCC3Caption')}</figcaption>

                    </figure>

                </div>

            </div>
            <div className='case-slide reverse-flex-col'>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCC4")}</h2>
                    <div className='space-6'></div>
                    <p>{t("OCC4p")}</p>

                </div>

                <div className='img-side'>
                    <img className="case-img" src={require("../../assets/reportsFirst.png")} alt="Página de login de la CMS (diseño original previo)" />

                </div>
            </div>
            <div className='case-slide reverse-flex-col'>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCC5")}</h2>
                    <div className='space-6'></div>
                    <p>{t("OCC5p")}</p>
                </div>
                <div>
                    <img className="case-img" src={require("../../assets/chat.png")} alt="Página de login de la CMS (diseño original previo)" />

                </div>
            </div>
            <div className='process-step'>
                <img className="svg-step" src={require("../../assets/pencil-bg.svg").default} alt="" />
                <div className='foreground'>


                    <div>
                        <p className='whiten step-number'>03 /</p>
                    </div>
                    <div>
                        <h2 className='whiten'>{t("OCStep3")}</h2>
                        <div className='space-6'></div>
                        <p className='whiten step-text'>{t("OCStep3D")}</p>
                    </div>
                </div>
            </div>
            <div className='solution-container'>
                <h2 className='color-orange-dark'>{t("OCC1")}</h2>
                <div className='space-24'></div>
                <div className='solution-slide'>
                    <div>
                        <p className='bolden p2'>{t("OCDBefore")}</p>
                        <div className='space-6'></div>
                        <img className="case-img" src={require("../../assets/jerarquia.png")} alt="Página de login de la CMS (diseño original previo)" />

                    </div>
                    <div>
                        <p className='bolden p2'>{t("OCDAfter")}</p>
                        <div className='space-12'></div>
                        <img className="case-img" src={require("../../assets/jerarquiaNew.png")} alt="Página de login de la CMS (diseño original previo)" />

                    </div>

                </div>
            </div>
            <div className='solution-container'>
                <h2 className='color-orange-dark'>{t("OCC2")}</h2>
                <div className='space-24'></div>
                <div className='solution-slide'>
                    <div>
                        <p className='bolden p2'>{t("OCDBefore")}</p>
                        <div className='space-6'></div>
                        <img className="case-img" src={require("../../assets/inconsistentDesign.png")} alt="Página de login de la CMS (diseño original previo)" />

                    </div>
                    <div>
                        <p className='bolden p2'>{t("OCDAfter")}</p>
                        <div className='space-12'></div>
                        <img className="case-img" src={require("../../assets/inconsistentDesignNew.png")} alt="Página de login de la CMS (diseño original previo)" />

                    </div>

                </div>
            </div>
            <div className='solution-container'>
                <h2 className='color-orange-dark'>{t("OCC3")}</h2>
                <div className='space-24'></div>
                <div id='solution-slide-vertical'>
                    <div>
                        <p className='bolden p2'>{t("OCDBefore")}</p>
                        <div className='space-6'></div>
                        <img className='flow-img' src={require("../../assets/flow.png")} alt="Página de login de la CMS (diseño original previo)" />

                    </div>
                    <div>
                        <p className='bolden p2'>{t("OCDAfter")}</p>
                        <div className='space-12'></div>
                        <img className='flow-img' src={require("../../assets/flowNew.png")} alt="Página de login de la CMS (diseño original previo)" />

                    </div>

                </div>
            </div>
            <div className='solution-container'>
                <h2 className='color-orange-dark'>{t("OCC4")}</h2>
                <div className='space-24'></div>
                <div className='solution-slide'>
                    <div>
                        <p className='bolden p2'>{t("OCDBefore")}</p>
                        <div className='space-6'></div>
                        <img className="case-img" src={require("../../assets/reports.png")} alt="Página de login de la CMS (diseño original previo)" />

                    </div>
                    <div>
                        <p className='bolden p2'>{t("OCDAfter")}</p>
                        <div className='space-12'></div>
                        <img className="case-img" src={require("../../assets/automaticReports.png")} alt="Página de login de la CMS (diseño original previo)" />

                    </div>

                </div>
            </div>
            <div className='solution-container'>
                <h2 className='color-orange-dark'>{t("OCC5")}</h2>
                <div className='space-24'></div>
                <div className='solution-slide'>
                    <div>
                        <p className='bolden p2'>{t("OCDBefore")}</p>
                        <div className='space-6'></div>
                        <img className="case-img" src={require("../../assets/chat.png")} alt="Página de login de la CMS (diseño original previo)" />

                    </div>
                    <div>
                        <p className='bolden p2'>{t("OCDAfter")}</p>
                        <div className='space-12'></div>
                        <img className="case-img" src={require("../../assets/chatNew.png")} alt="Página de login de la CMS (diseño original previo)" />

                    </div>

                </div>
            </div>
            <div className='process-step'>
                <img className="svg-step" src={require("../../assets/tube-bg.svg").default} alt="" />
                <div className='foreground'>


                    <div>
                        <p className='whiten step-number'>04 /</p>
                    </div>
                    <div>
                        <h2 className='whiten'>{t("OCStep4")}</h2>
                        <div className='space-6'></div>
                        <p className='whiten step-text'>{t("OCStep4D")}</p>
                    </div>
                </div>
            </div>
            <div className='case-slide reverse-flex-col'>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCV1")}</h2>
                    <div className='space-8'></div>

                    <p>{t("OCV1p")}</p>
                </div>
                <div className='img-side'>
                    <img className="case-img" src={require("../../assets/courseMetricsEN.png")} ref={metric1Ref} />
                </div>

            </div>
            <div className='case-slide reverse-flex-col'>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCV2")}</h2>
                    <div className='space-8'></div>

                    <p>{t("OCV2p")}</p>
                </div>
                <div className='img-side'>
                    <img className="case-img" src={require("../../assets/createUserMetricsES.png")} ref={metric2Ref} />

                </div>

            </div>
            <div className='case-slide reverse-flex-col'>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCV3")}</h2>
                    <div className='space-8'></div>

                    <p>{t("OCV3p")}</p>

                </div>
                <div className='img-side'>
                    <img className="case-img" src={require("../../assets/reportsMetricsEN.png")} ref={metric3Ref} />
                </div>

            </div>
            <div className='case-slide reverse-flex-col'>

                <div>
                    <img className="case-img" src={require("../../assets/metrics.png")} alt="Página de login de la CMS (diseño original previo)" />

                </div>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCV4")}</h2>
                    <div className='space-8'></div>

                    <ul>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCV41")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCV42")}</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-div'>
                                <img src={require("../../assets/li-dot.svg").default} alt="" />
                                <p>{t("OCV43")}</p>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>

            <div className='case-slide'>
                <div className='text-side'>
                    <h2 className='color-orange-dark'>{t("OCVC")}</h2>
                    <div className='space-8'></div>
                    <p>{t("OCVCp1")}</p>
                    <div className='space-12'></div>
                    <p>{t("OCVCp2")}</p>
                </div>

                <div>
                    <img className="case-img" src={require("../../assets/finalThoughts.png")} alt="Página de login de la CMS (diseño original previo)" />

                </div>

            </div>

            <div id="cta-finish-case">
                <button onClick={() => {
                    navigation("/", { state: { targetId: "work-container" } });
                }}>Back to list of work</button>
                <button onClick={() => {
                    navigation("/", { state: { targetId: "connect-container" } });
                }}>Contact</button>
            </div>
        </div>
    )
}

export default CaseStudy