import React from 'react'
import './projectsAlt.css'
import { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'
const ProjectsAlt = () => {
    const projectsRef = useRef();
    const previewRef = useRef();
    const previewImgRef = useRef();

    const navigation = useNavigate()

    const { contextSafe } = useGSAP(() => {


    }, 1);

    //this tracks wheter mouse is hovering over a project or not
    // let isInside = false;
    const bgPositions = {
        p1: "0 0",
        p2: "0 33.3%",
        p3: "0 66.6%",
        p4: "0 99.9%",
    }
    //manage the scaling
    // const moveStuff = (e) => {
    //     const mouseInside = isMouseInsideContainer(e);

    //     if (mouseInside !== isInside) {
    //         isInside = mouseInside;
    //         if (isInside) {
    //             gsap.to(previewRef.current, {
    //                 scale: 1,
    //                 duration: 0.3
    //             });
    //         } else {
    //             gsap.to(previewRef.current, {
    //                 scale: 0,
    //                 duration: 0.3
    //             });
    //         }

    //     }

    // }

    const moveProject = (e) => {

        const previewRect = previewRef.current.getBoundingClientRect();
        const offsetX = previewRect.width / 2;
        const offsetY = previewRect.height / 2;
        // const offsetY = previewRect.height;
        // console.log("im moving stuff to"+ offsetX +  " x and" + offsetY + "y");

        previewRef.current.style.left = e.pageX - offsetX + "px";
        previewRef.current.style.top = e.pageY - offsetY + "px";

    }

    const moveProjectImg = (project) => {
        // console.log("i-m being executed too!");
        // console.log(project)
        const projectId = project.id;
        gsap.to(previewImgRef.current, {
            duration: 0.4,
            backgroundPosition: bgPositions[projectId] || "0 0",
        });

    }

    // const isMouseInsideContainer = (e) => {
    //     const containerRect = projectsRef.current.getBoundingClientRect();
    //     return (
    //         e.pageX >= containerRect.left &&
    //         e.pageX >= containerRect.right &&
    //         e.pageY >= containerRect.top &&
    //         e.pageY >= containerRect.bottom
    //     );
    // }


    const handleMouseMove = contextSafe(() => {
        gsap.to(previewRef.current, {
            scale: 1,
            duration: 0.3
        });

    });

    const handleMouseEnter = contextSafe(() => {
        gsap.to(previewRef.current, {
            scale: 1,
            duration: 0.3
        });

    });

    const handleMouseMoveRow = (e) => {
        // console.log("this is the event")
        // console.log(e.currentTarget.id);
        moveProject(e);
        moveProjectImg(e.currentTarget)
    }

    const handleMouseLeave = contextSafe(() => {
        gsap.to(previewRef.current, {
            scale: 0,
            duration: 0.3
        });
    });
    //    Array.from(projectsRef.current.children).forEach((project) => {
    //     console.log(project)
    //    })


    return (
        <div>
            <div className="preview" ref={previewRef}>
                <div className="preview-img" ref={previewImgRef}>

                </div>
            </div>

            <section id="work-container">
                <div id="top-row">
                    <div id="work-text">
                        <div className='pill'>
                            <p className='p2 letter-s1'>SELECTED WORK</p>
                        </div>
                        <p className='p2'>Comprised of work in the industry and conceptual projects</p>
                    </div>
                    <div>
                        <p className='p2'>[ 02 ]</p>
                    </div>

                </div>
                <div id="bottom-row">
                    <div id="work-title">
                        <h1>Work</h1>

                    </div>

                    <div id="table-container">
                        <div className='projects'>
                            <p className='p2 bolden letter-s1'>UX PROJECTS</p>
                            <div className='space-12'></div>
                            <div className='project-row' onMouseMove={handleMouseMoveRow} id="p3">
                                <div className='number-title'>
                                    <p className='p2 bolden table-number'>*X0.1</p>
                                    <p className='p2'>O-lab</p>
                                    

                                </div>
                                <div>
                                    <img src={require("../../assets/play-icon.svg").default} alt="" />
                                </div>
                            </div>

                            <div className='project-row' onMouseMove={handleMouseMoveRow} id="p3">
                                <div className='number-title'>
                                    <p className='p2 bolden table-number'>*X0.2</p>
                                    <p className='p2'>Vitacan</p>

                                </div>
                                <div>
                                    <img src={require("../../assets/play-icon.svg").default} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className='space-32'></div>
                        <div className="projects" ref={projectsRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>

                            <p className='p2 bolden letter-s1'>UI PROJECTS</p>
                            <div className='space-12'></div>
                            <div className='project-row' onClick={() => { navigation("/case-study") }} onMouseMove={handleMouseMoveRow} id="p1">
                                <div className='number-title'>
                                    <p className='p2 bolden table-number'>*I0.1</p>
                                    <p className='p2'>Rae Klein</p>
                                </div>
                                <div>
                                    <img src={require("../../assets/play-icon.svg").default} alt="" />
                                </div>

                            </div>
                            

                            <div className='project-row' onClick={() => { navigation("/case-study2") }} onMouseMove={handleMouseMoveRow} id="p2">
                                <div className='number-title'>
                                    <p className='p2 bolden table-number'>*I0.2</p>
                                    <p className='p2'>Evan Fay</p>

                                </div>
                                <div className='number-title'>
                                    <img src={require("../../assets/play-icon.svg").default} alt="" />
                                </div>
                            </div>

                            <div className='project-row' onMouseMove={handleMouseMoveRow} id="p3">
                                <div className='number-title'>
                                    <p className='p2 bolden table-number'>*I0.3</p>
                                    <p className='p2'>Ovlt Collective</p>

                                </div>
                                <div>
                                    <img src={require("../../assets/play-icon.svg").default} alt="" />
                                </div>
                            </div>
                            <div className='project-row' onMouseMove={handleMouseMoveRow} id="p4">
                                <div className='number-title'>
                                    <p className='p2 bolden table-number'>*I0.4</p>
                                    <p className='p2'>Sitra</p>

                                </div>
                                <div>
                                    <img src={require("../../assets/play-icon.svg").default} alt="" />

                                </div>
                            </div>
                        </div>

                    </div>


                </div>



            </section>
        </div>


    )
}

export default ProjectsAlt