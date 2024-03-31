import React from 'react'
import "./projects.css"
import { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const Projects = () => {
    const link1 = useRef();
    const hoverReveal1 = useRef();
    const img1 = useRef();
    // link1.current.addEventListener('.mousemove',(e) =>{
    //     hoverReveal1.current.style.opacity = 1;
    //     hoverReveal1.current.style.transform = `translate(-100%,-50%) rotate(5deg)`;
    // })
    // console.log(link1);
    const { contextSafe } = useGSAP(() => {


    }, 1);
    
    const handleMouseMove = contextSafe((e) => {
        gsap.to(link1.current, {
            y: 10
        })
        gsap.to(hoverReveal1.current, {
            opacity: 1,
            x: e.clientX - 500,
            y: -50,
            duration: 0.2

        })
        // hoverReveal1.current.style.opacity = 1;
        // hoverReveal1.current.style.transform = `translate(-1%,-5%)`;
        img1.current.style.transform = 'scale(1,1)';
        // hoverReveal1.current.style.left = e.clientX + "px";
        // hoverReveal1.current.style.top = e.clientY + "px";


        // console.log(img1.current);
        // console.log(e)        
    });
    const handleMouseLeave = contextSafe((e) => {
        gsap.to(link1.current, {
            y: 0
        })
        gsap.to(hoverReveal1.current, {
            opacity: 0,
            x: 0,
            y: 0,
            duration: 0.2
        })
        // hoverReveal1.current.style.opacity = 0;
        // hoverReveal1.current.style.transform = `translate(0%,0%)`;
        img1.current.style.transform = 'scale(0.8,0.8)';
    });

    // function handleMouseEnter() {

    // };
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <div className='link' ref={link1} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                            <span>Rae Klein</span>
                            <div className='hover-reveal rae-img' ref={hoverReveal1}>
                                <img ref={img1} className='hidden-img' src={require("../../assets/Rae Klein.png")} alt="" />
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className='link'>
                            <span>Evan Fay</span>
                            <div className='hover-reveal evan-img'>
                                <img className='hidden-img' src={require("../../assets/Rae Klein.png")} alt="" />
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className='link'>
                            <span>Ovlt Collective</span>
                            <div className='hover-reveal ovlt-img'>
                                <img className='hidden-img' src={require("../../assets/Rae Klein.png")} alt="" />
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className='link'>
                            <span>Sitra</span>
                            <div className='hover-reveal sitra-img'>
                                <img className='hidden-img' src={require("../../assets/Rae Klein.png")} alt="" />
                            </div>

                        </div>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Projects