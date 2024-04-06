import React from 'react'
import "./contact.css"
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const [t, i18next] = useTranslation();

    return (
        
            <section id="connect-container" data-scroll-section>
                <div id="title-cta">
                    <div>
                        <p className='p2'>[ 03 ]</p>

                    </div>


                    <div id="text-container">
                        <h1>{t("connect")}</h1>
                        <div>
                            <p className='p1' id="connect-copy">{t("connectCopy")}</p>
                        </div>

                    </div>

                </div>
                <div id="top-socials">
                    <div id="socials-text">
                        <div className='pill'>
                            <p className='p2 letter-s1'>{t("socials")}</p>
                        </div>
                        <div className='social-row'>
                            <p className='bolden p2'>mail</p>
                            <div className='link-icon'>
                                <p className='p2'>afelipea99@gmail.com</p>
                                <a href="mailto:afelipea99@gmail.com">
                                <img className="social-icon" src={require("../../assets/external-arrow.svg").default} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className='social-row' >
                            <p className='bolden p2'>behance</p>
                            <div className='link-icon'>
                                <p className='p2'>www.behance.net/felipeandrade27</p>
                                <img className="social-icon" src={require("../../assets/external-arrow.svg").default} onClick={()=>{window.open("https://www.behance.net/felipeandrade27")}} alt="" />
                            </div>
                        </div>
                        <div className='social-row'>
                            <p className='bolden p2'>linkedin</p>
                            <div className='link-icon'>
                                <p className='p2'>www.linkedin.com/in/felipe-a-411294138/</p>
                                <img className="social-icon" src={require("../../assets/external-arrow.svg").default} alt=""  onClick={()=>{window.open("https://www.linkedin.com/in/felipe-a-411294138/")}} />


                            </div>
                        </div>
                    </div>
                    <div id="back-top">
                        <a href="#hero">
                            <div id="back-top-inception">
                                <p className='p2'>{t("backTop")}</p>
                                <img src={require("../../assets/arrow-up.svg").default} alt="" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        
    )
}

export default Contact