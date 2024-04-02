import React from 'react'
import "./video.css"
import { useTranslation } from 'react-i18next'

const Video = () => {
    const [t, i18next] = useTranslation();
    return (
        <div>
            <h1>this is my video</h1>
            <video autoplay loop width="100%" height="100%">
                <source src="../../assets/badvideo.mp4" type="video/mp4" />
                    Sorry, this browser cannot play mp4 files.
            </video>

        </div>
    )
}

export default Video