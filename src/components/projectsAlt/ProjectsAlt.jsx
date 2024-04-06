import React from 'react';
import './projectsAlt.css';
import { useRef, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import ProjectOverlay from './ProjectOverlay';
const ProjectsAlt = () => {
    const projectsRef = useRef();
    const previewRef = useRef();
    const previewImgRef = useRef();

    const projectsUXRef = useRef();
    const previewUXRef = useRef();
    const previewUXImgRef = useRef();

    const [t, i18next] = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [openProject, setOpenProject] = useState("");

    const navigation = useNavigate()

    const { contextSafe } = useGSAP(() => {
    });

    //this tracks wheter mouse is hovering over a project or not
    // let isInside = false;
    const bgPositions = {
        p1: "0 0",
        p2: "0 50%",
        p3: "0 100%",
    }

    const bgUXPositions = {
        pu1: "0 0",
        pu2: "0 100%"
    }

    const moveProject = (e) => {

        // const previewRect = previewRef.current.getBoundingClientRect();
        // const offsetX = previewRect.width / 2;
        // const offsetY = previewRect.height / 2;
       
        const offsetX = previewRef.current.clientWidth / 2;
        const offsetY = previewRef.current.clientHeight / 2;

        previewRef.current.style.left = e.pageX - offsetX + "px";
        previewRef.current.style.top = e.pageY - offsetY + "px";
    }

    const moveProjectImg = (project) => {
        const projectId = project.id;
        gsap.to(previewImgRef.current, {
            duration: 0.4,
            backgroundPosition: bgPositions[projectId] || "0 0",
        });
    }

    const moveUXProject = (e) => {
        
        // const previewRect = previewUXRef.current.getBoundingClientRect();

        // const offsetX = previewRect.width / 2;
        // const offsetY = previewRect.height / 2;

        const offsetX = previewUXRef.current.clientWidth / 2;
        const offsetY = previewUXRef.current.clientHeight / 2;

        previewUXRef.current.style.left = e.pageX - offsetX + "px";
        previewUXRef.current.style.top = e.pageY - offsetY + "px";
    }

    const moveUXProjectImg = (project) => {
        const projectId = project.id;
        gsap.to(previewUXImgRef.current, {
            duration: 0.4,
            backgroundPosition: bgUXPositions[projectId] || "0 0",
        });
    }

    const handleUXMouseMove = contextSafe(() => {
        gsap.to(previewUXRef.current, {
            scale: 1,
            duration: 0.3
        });
    });

    const handleUXMouseEnter = contextSafe((e) => {
        handleUXMouseMoveRow(e);
        gsap.to(previewUXRef.current, {
            scale: 1,
            duration: 0.3
        });
        

    });

    const handleUXMouseMoveRow = (e) => {
        // console.log(e);
        moveUXProject(e);
        moveUXProjectImg(e.currentTarget);
    }

    const handleUXMouseLeave = contextSafe(() => {
        gsap.to(previewUXRef.current, {
            scale: 0,
            duration: 0.3
        });
    });

    const handleMouseMove = contextSafe(() => {
        gsap.to(previewRef.current, {
            scale: 1,
            duration: 0.3
        });
    });

    const handleMouseEnter = contextSafe((e) => {
        handleMouseMoveRow(e);
        gsap.to(previewRef.current, {
            scale: 1,
            duration: 0.3
        });
    });

    const handleMouseMoveRow = (e) => {
        moveProject(e);
        moveProjectImg(e.currentTarget)
    }

    const handleMouseLeave = contextSafe(() => {
        gsap.to(previewRef.current, {
            scale: 0,
            duration: 0.3
        });
    });

    return (
        <div id="real-work-container">
            <ProjectOverlay
                open={isOpen}
                whichProject={openProject}
                close={() => {
                    setIsOpen(false);
                    document.body.style.overflow = "scroll";
                    setOpenProject("");
                }}
            />

            <section id="work-container">
                <div id="top-row">
                    <div id="work-text">
                        <div className='pill'>
                            <p className='p2 letter-s1'>{t("selectedWork")}</p>
                        </div>
                        <p className='p2'>{t("SWp")}</p>
                    </div>
                    <div>
                        <p className='p2'>[ 02 ]</p>
                    </div>

                </div>
                <div id="bottom-row">
                    <div id="work-title">
                        <h1 id="work-h1">{t("work")}</h1>

                    </div>

                    <div id="table-container">
                        <div className='projects' ref={projectsUXRef} onMouseLeave={handleUXMouseLeave} onMouseEnter={handleUXMouseEnter} onMouseMove={handleUXMouseMove}>
                            <p className='p2 bolden letter-s1 project-type'>{t("ux-projects")}</p>
                            <div className='space-12'></div>
                            <div className='project-row' id="pu1" onClick={() => { navigation("/case-study") }} onMouseMove={handleUXMouseMoveRow}>
                                <div className='number-title'>
                                    <p className='p2 bolden table-number'>*X0.1</p>
                                    <div className='text-w-star'>
                                        <p id="nowrap-project-text" className='p2'>O-lab</p>
                                        <img src={require("../../assets/Star.svg").default} alt="" />
                                    </div>


                                </div>
                                <div>
                                    <img src={require("../../assets/external-arrow.svg").default} alt="" />                                </div>
                            </div>

                            <div className='project-row' onClick={() => { window.open("https://www.behance.net/gallery/143997259/UXUI-Case-Study-Vitacan") }} onMouseMove={handleUXMouseMoveRow} id="pu2" >
                                <div className='number-title'>
                                    <p className='p2 bolden table-number'>*X0.2</p>
                                    <p className='p2'>Vitacan</p>

                                </div>
                                <div>
                                    <img src={require("../../assets/external-arrow.svg").default} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className='space-32'></div>
                        <div className="projects" ref={projectsRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>

                            <p className='p2 bolden letter-s1 project-type'>{t("ui-projects")}</p>
                            <div className='space-12'></div>
                            <div id="p1" className='project-row'
                                onClick={() => {
                                    setIsOpen(true);
                                    setOpenProject("Lawless Seating");
                                }}
                                onMouseMove={handleMouseMoveRow}
                            >

                                <div className='number-title'>
                                    <p className='p2 bolden table-number'>*I0.1</p>
                                    <p className='p2'>Lawless Seating</p>
                                </div>
                                <div>
                                    <img src={require("../../assets/play-icon.svg").default} alt="" />                                </div>

                            </div>


                            <div className='project-row' id="p2"
                                onClick={() => {
                                    setIsOpen(true);
                                    setOpenProject("Sitra");
                                }}
                                onMouseMove={handleMouseMoveRow}
                            >

                                <div className='number-title'>
                                    <p className='p2 bolden table-number'>*I0.2</p>
                                    <p className='p2'>Sitra Fashion</p>

                                </div>
                                <div className='number-title'>
                                    <img src={require("../../assets/play-icon.svg").default} alt="" />                                </div>
                            </div>

                            <div className='project-row' id="p3"
                                onClick={() => {
                                    setIsOpen(true);
                                    setOpenProject("Cabbage");
                                }}
                                onMouseMove={handleMouseMoveRow}
                            >
                                <div className='number-title'>
                                    <p className='p2 bolden table-number'>*I0.3</p>
                                    <p className='p2'>Cabbage Chair</p>

                                </div>
                                <div>
                                    <img src={require("../../assets/play-icon.svg").default} alt="" />                                </div>
                            </div>
                        </div>

                    </div>


                </div>



            </section>
            <div className="preview" ref={previewRef}>
                <div className="preview-img" ref={previewImgRef}>

                </div>
            </div>

            <div className="preview-ux" ref={previewUXRef}>
                <div className="preview-ux-img" ref={previewUXImgRef}>

                </div>
            </div>
        </div>


    )
}

export default ProjectsAlt