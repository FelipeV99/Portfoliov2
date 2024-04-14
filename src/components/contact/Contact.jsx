import React, { useRef, useEffect } from 'react'
import "./contact.css"
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const [t, i18next] = useTranslation();

    const connectRef = useRef();

    gsap.registerPlugin(useGSAP, ScrollTrigger);


    const { contextSafe } = useGSAP({ scope: connectRef.current, revertOnUpdate: true });

    const runRunRUn = contextSafe(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: connectRef.current,
                start: "0% 55%",
                end: "0% 45%",
                scrub: true,
                markers: { startColor: "black", endColor: "orange", fontSize: "18px", fontWeight: "bold", indent: 120 },
            }
        });

        tl.to(".App", {
            backgroundColor: "#272727",
            onComplete: () => { 
                // console.log("tween from contact");
                // ScrollTrigger.refresh();
             }
        });
    });
    useEffect(() => {
        runRunRUn();
    }, []);
    return (

        <section id="connect-container" ref={connectRef}>
            <div id="connect-inner-container">


                <div id="title-cta" >
                    <div className='socials-asterisk'>
                        <svg className='asterisk' width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FFF2EB"  d="M12.3242 3.63977L11.2367 6.97727L14.0492 4.83977L16.0742 4.23977C16.2742 4.18977 16.4117 4.16477 16.4867 4.16477C16.9367 4.16477 17.2742 4.51477 17.4992 5.21477L18.3617 7.87727C18.4617 8.17727 18.5117 8.43977 18.5117 8.66477C18.5117 9.13977 18.2992 9.43977 17.8742 9.56477L15.7742 10.1648H12.2117L15.1367 12.2273L16.3742 13.9898C16.5242 14.2398 16.5992 14.4773 16.5992 14.7023C16.5992 14.9273 16.3492 15.2398 15.8492 15.6398L13.5992 17.2898C13.2242 17.5898 12.8867 17.7398 12.5867 17.7398C12.2867 17.7398 12.0367 17.6023 11.8367 17.3273L10.2617 15.5273L9.43672 12.4523L8.46172 15.5648L7.18672 17.2898C6.98672 17.5648 6.73672 17.7023 6.43672 17.7023C6.16172 17.7023 5.83672 17.5648 5.46172 17.2898L3.17422 15.6398C2.64922 15.2648 2.38672 14.9523 2.38672 14.7023C2.38672 14.4273 2.46172 14.1898 2.61172 13.9898L3.92422 12.2273L6.66172 10.2398H3.24922L1.18672 9.56477C0.736719 9.43977 0.511719 9.13977 0.511719 8.66477C0.511719 8.43977 0.561719 8.18977 0.661719 7.91477L1.52422 5.21477C1.77422 4.48977 2.11172 4.12727 2.53672 4.12727C2.63672 4.12727 2.76172 4.15227 2.91172 4.20227L5.01172 4.87727L7.78672 6.93977L6.69922 3.63977V1.46477C6.69922 0.789771 7.16172 0.452271 8.08672 0.452271H10.9367C11.8617 0.452271 12.3242 0.789771 12.3242 1.46477V3.63977Z" />
                        </svg>
                        <p className='p2 whiten'>{t("socials")}</p>

                    </div>


                    <div id="text-container">
                        <h1>{t("connect")}</h1>
                        <div>
                            <p className='p1 whiten' id="connect-copy">{t("connectCopy")}</p>
                        </div>

                    </div>

                </div>
                <div id="top-socials">
                    <div id="socials-text">
                        {/* <div className='pill'>
                            <p className='p2 letter-s1'>{t("socials")}</p>
                        </div> */}
                        <div className='social-row'>
                            <p className='bolden p2 whiten'>mail</p>
                            <div className='link-icon'>
                                <p className='p2 whiten'>afelipea99@gmail.com</p>
                                <a href="mailto:afelipea99@gmail.com">
                                    <img className="social-icon" src={require("../../assets/external-arrow.svg").default} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className='social-row' >
                            <p className='bolden p2 whiten'>behance</p>
                            <div className='link-icon'>
                                <p className='p2 whiten'>www.behance.net/felipeandrade27</p>
                                <img className="social-icon" src={require("../../assets/external-arrow.svg").default} onClick={() => { window.open("https://www.behance.net/felipeandrade27") }} alt="" />
                            </div>
                        </div>
                        <div className='social-row'>
                            <p className='bolden p2 whiten'>linkedin</p>
                            <div className='link-icon'>
                                <p className='p2 whiten'>www.linkedin.com/in/felipe-a-411294138/</p>
                                <img className="social-icon" src={require("../../assets/external-arrow.svg").default} alt="" onClick={() => { window.open("https://www.linkedin.com/in/felipe-a-411294138/") }} />


                            </div>
                        </div>
                    </div>
                    <div id="back-top">
                        <a href="https://felipeandradeux.netlify.app/#mask-nav">
                            <div id="back-top-inception">
                                <p className='p2 whiten'>{t("backTop")}</p>
                                <img src={require("../../assets/arrow-up.svg").default} alt="" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact