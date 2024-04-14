import React, { useEffect, useState } from "react";
import './progressiveImg.css'



const ProgressiveImage = (props) => {
    const [imgSrc, setImgSrc] = useState(props.placeholderSrc);
    // const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(()=>{
        const img = new Image();
        img.src = props.src;
        img.onload = () => {
            setImgSrc(props.src);
            // props.actualizeHeight;
            // console.log("image has loaded");
        };

    }, [props.src]);
    // console.log(imgSrc);

    return(
        <img className="prog-img" src={imgSrc} onLoad={props.actualizeHeight} />
    )

};
export default ProgressiveImage
