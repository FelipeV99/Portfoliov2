import "./preloader.css"
import React, { useState,useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Preloader = () => {

    const navigation = useNavigate();

    gsap.registerPlugin(useGSAP);
    const prOverlayRef = useRef();

    const prBarRef = useRef();

    const prCounterRef = useRef();
    const [prCounter, setPrCounter] = useState(0);
    
    const { contextSafe } = useGSAP(() => {


    }, 1);


    useEffect(() => {
        if (prCounter == 100) {
            return;
        } else {

            if (prCounter > 100) {
                setPrCounter(100)
            }else{
                setTimeout(() => {
                    setPrCounter(prCounter + Math.floor(Math.random() * 2) + 1);
    
                }, 10);
            }

        }
    }, [prCounter]);

    const startMovingBars = contextSafe(() => {
        const tl = gsap.timeline();


        tl.to(prOverlayRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: "power3.inOut"
        },0);
//944
        // tl.to(prOverlayRef.current, {
        //     opacity: 0,
        //     duration: 1.1,
        //     stagger:0.5

        // },1.1);


    });


    if(prCounter == 100){
        startMovingBars();
    }

    setTimeout(() => {
        navigation("/");
        
    }, 2000);
    return (
        <div id="overlay-mask" className='pr-overlay' ref={prOverlayRef}>
            <h1 className="pr-counter" ref={prCounterRef}>{prCounter}</h1>
            <div className='pr-bar'></div>
            <div className='pr-bar'></div>
            <div className='pr-bar'></div>
            <div className='pr-bar'></div>
            <div className='pr-bar'></div>
            <div className='pr-bar'></div>
            <div className='pr-bar'></div>
            <div className='pr-bar'></div>
            <div className='pr-bar'></div>
            <div className='pr-bar'></div>

        </div>
    )
}

export default Preloader