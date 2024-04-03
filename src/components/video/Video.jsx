import React from 'react'
import "./video.css"
import { useTranslation } from 'react-i18next'
import veryBadVideo from "../../assets/LSVideo.mp4"

const Video = () => {
    const [t, i18next] = useTranslation();
    return (
        <div id="master-container">
            <div id="video-container">
                <video autoPlay muted loop src={veryBadVideo}>

                </video>

            </div>


        </div>
    )
}

export default Video