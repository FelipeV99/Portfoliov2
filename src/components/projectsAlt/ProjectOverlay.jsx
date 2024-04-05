import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LSVideo from "../../assets/LSVideo.mp4"
import CabbageVideo from "../../assets/CabbageVideo.mp4"
import LogoAnimation from "../../assets/Logo Animation"
import Lottie from 'react-lottie'
import ReactDom from 'react-dom'
import './projectsAlt.css'
import sitra from "../../assets/Sitra.png";
import sitraPlaceholder from "../../assets/SitraSmall.png";

const ProgressiveImage = (props) => {
    const [imgSrc, setImgSrc] = useState(props.placeholderSrc || props.src);

    useEffect(()=>{
        const img = new Image();
        img.src = props.src;
        img.onload = () => {
            setImgSrc(props.src);
        };

    }, [props.src]);
    return(
        <img className="prog-img" src={imgSrc} />
    )

};


const ProjectOverlay = (props) => {
    const [t, i18next] = useTranslation();
    if (props.open === false) return null;

    const defaultOptions = {
        loop:true,
        autoplay:true,
        animationData: LogoAnimation
    }
    document.body.style.overflow = "hidden";
    return (ReactDom.createPortal(
        <>
            <div className='overlay-style'>
                <div className="div-close-overlay" onClick={props.close} ><img src={require("../../assets/Close.svg").default} alt="" /></div>
                <div className="modal-style">
                    {props.whichProject === "Lawless Seating" ?
                        <div>
                            <div className='text-overlay'>
                                <h2>Lawless Seating</h2>
                                <p className='p2'>Conceptual project</p>
                                {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
                            </div>
                            <div className="master-container">
                                <div className="video-container">
                                    <video autoPlay muted loop src={LSVideo}>

                                    </video>


                                </div>


                            </div>
                            <img className='img-ui' src={require("../../assets/LS Hero.png")} />
                            <img className='img-ui' src={require("../../assets/LS Product.png")} />
                        </div>
                        :
                        <div></div>
                    }
                    {props.whichProject === "Sitra" ?
                        <div>
                            <div className='text-overlay'>
                                <h2>Sitra Fashion</h2>
                                <p className='p2'>Conceptual project</p>
                            </div>
                            <ProgressiveImage src={sitra} placeholderSrc={sitraPlaceholder} />

                            {/* <img className='img-ui' src={require("../../assets/Sitra.png")} /> */}
                        </div>
                        :
                        <div></div>
                    }
                    {props.whichProject === "Cabbage" ?
                        <div>
                            <div className='text-overlay'>
                                <h2>The Making of Cabbage Chair</h2>
                                <p className='p2'>Conceptual project</p>
                            </div>

                            <div className="master-container">
                                <div className="video-container">
                                    <video autoPlay muted loop src={CabbageVideo}>

                                    </video>


                                </div>


                            </div>
                            {/* <img className='img-ui' src={require("../../assets/LS Hero.png")} />
                            <img className='img-ui' src={require("../../assets/LS Product.png")} /> */}
                        </div>
                        :
                        <div></div>
                    }


                </div>
            </div>

        </>,
        document.getElementById('portal'))
    )
}

export default ProjectOverlay