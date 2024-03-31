import React from 'react'
import "./contact.css"
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const [t, i18next] = useTranslation();
    return (
        <div>
            <section id="connect-container">
                <div id="title-cta">
                <div>
                        <p className='p2'>[ 03 ]</p>

                    </div>


                    <div id="text-container">
                        <h1>{t("connect")}</h1>
                        <div>
                            <p className='p1'>{t("connectCopy")}</p>
                        </div>

                    </div>

                </div>
                <div id="top-socials">
                    <div id="back-top">
                        <a href="#hero">
                            <div id="back-top-inception">

                                <img src={require("../../assets/projectsArrowUp.svg").default} alt="" />

                                <p className='p2'>back to top</p>

                            </div>
                        </a>
                    </div>
                    <div id="socials-text">
                        <div className='social-row'>
                            <p  className='bolden p2'>mail</p>
                            <p className='p2'>afelipea99@gmail.com</p>
                        </div>
                        <div className='social-row'>
                            <p  className='bolden p2'>behance</p>
                            <p className='p2'>www.behance.net/felipeandrade27</p>
                        </div>
                        <div className='social-row '>
                            <p className='bolden p2'>linkedin</p>
                            <p className='p2'>www.linkedin.com/in/felipe-a-411294138/</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact