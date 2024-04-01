import React from 'react'
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { CustomEase } from "gsap/CustomEase";
import ProjectsAlt from '../projectsAlt/ProjectsAlt';
import Contact from '../contact/Contact';
import { useTranslation } from 'react-i18next';

const Home = () => {
    gsap.registerPlugin(useGSAP);


    const uxtext = useRef();
    const designertext = useRef();
    const felipetext = useRef();
    const andradetext = useRef();
    const buttonscta = useRef();
    const ctatext = useRef();

    const [t, i18next] = useTranslation();

    console.log(i18next.language);


    // const locoRef = useRef(null);

    // const options = {
    //   smooth: true,
    // }

    // useGSAP(() => {
    //     gsap.registerPlugin(CustomEase);
    //     // gsap code here...
    //     const tl = gsap.timeline();
    //     tl.to(uxtext.current, {
    //         y: -60,
    //         duration: 1,
    //         // repeat:5,
    //         ease: CustomEase.create("custom", "M0,0 C0.728,-0.057 0.352,1.073 1,1 "),
    //     }, 0.5)
    //     tl.to(designertext.current, {
    //         y: -60,
    //         duration: 1,
    //         // repeat:5,
    //         ease: CustomEase.create("custom", "M0,0 C0.728,-0.057 0.352,1.073 1,1 "),
    //     }, 0.55)
    //     tl.to(uxtext.current, {
    //         clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    //         duration: 1,
    //         // repeat:5,
    //         ease: CustomEase.create("custom", "M0,0 C0.728,-0.057 0.352,1.073 1,1 "),
    //     }, 0.5);
    //     tl.to(designertext.current, {
    //         clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    //         duration: 1,
    //         // repeat:5,
    //         ease: CustomEase.create("custom", "M0,0 C0.728,-0.057 0.352,1.073 1,1 "),
    //     }, 0.55);

    //     tl.to(felipetext.current, {
    //         clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    //         y: -60,
    //         duration: 1,
    //         // repeat:5,
    //         ease: CustomEase.create("custom", "M0,0 C0.728,-0.057 0.352,1.073 1,1 "),
    //     }, 0.5)

    //     tl.to(andradetext.current, {
    //         clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    //         y: -60,
    //         duration: 1,
    //         // repeat:5,
    //         ease: CustomEase.create("custom", "M0,0 C0.728,-0.057 0.352,1.073 1,1 "),
    //     }, 0.5)

    //     tl.to(andradetext.current, {
    //         clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    //         y: -60,
    //         duration: 1,
    //         // repeat:5,
    //         ease: CustomEase.create("custom", "M0,0 C0.728,-0.057 0.352,1.073 1,1 "),
    //     }, 0.5)

    //     tl.to(ctatext.current, {
    //         clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    //         y: 60,
    //         duration: 1,
    //         // repeat:5,
    //         ease: CustomEase.create("custom", "M0,0 C0.728,-0.057 0.352,1.073 1,1 "),
    //     }, 1.1)

    //     tl.to(buttonscta.current, {
    //         clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    //         y: 60,
    //         duration: 1,
    //         // repeat:5,
    //         ease: CustomEase.create("custom", "M0,0 C0.728,-0.057 0.352,1.073 1,1 "),
    //     }, 1.1)
    // });

    function Resume() {
        if (i18next.language == 'en') {
            return <a className='btn-main' href={require("../../assets/Felipe Andrade CV.pdf")} target="_blank">Download CV</a>;

        } else {
            return <a className='btn-main' href={require("../../assets/Felipe Andrade HV.pdf")} target="_blank">Descargar CV</a>

        }

    }

    return (
        <div>
            <section id="hero">
                    <div id="number-container">
                        <p className='p2'>[ 01 ]</p>
                    </div>

                    <div  id="hero-helper">
                        <div id="hero-left">





                            <div id="felipe-title">
                                <div id='mask-fa' ref={felipetext}>
                                    <h1 id="felipe-h1">Felipe Andrade</h1>
                                </div>
                            </div>
                            <div id="designer-title">
                                <div id="mask-dt" ref={designertext}>
                                    <h1 id="ux-h1">{t('designerTitle')}</h1>
                                </div>
                            </div>
                            <div className='space-12'></div>
                            <div className='mask-cta cta-copy-container' ref={ctatext}>
                                <p id="cta-copy" className='p1'>
                                    {t("heroCopy")}
                                </p>
                            </div>
                        </div>
                        <div id="hero-right">
                            <div id="button-cta" className='mask-cta' ref={buttonscta}>

                                <Resume />
                                <a className='btn-sec' href="#connect-container">Connect</a>
                            </div>

                        </div>
                    </div>



            </section>
            {/* <Projects /> */}
            <ProjectsAlt />
            <Contact />
            {/* </main>
        </LocomotiveScrollProvider> */}
        </div>
    )
}

export default Home