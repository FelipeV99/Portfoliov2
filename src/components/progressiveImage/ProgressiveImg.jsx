import React, { useEffect, useState } from "react";
import './progressiveImg.css'



const ProgressiveImage = (props) => {
    const [imgSrc, setImgSrc] = useState(props.placeholderSrc);

    useEffect(()=>{
        const img = new Image();
        img.src = props.src;
        img.onload = () => {
            setImgSrc(props.src);
            // console.log("image has loaded");
        };

    }, [props.src]);
    // console.log(imgSrc);

    return(
        <img className="prog-img" src={imgSrc} />
    )

};
export default ProgressiveImage
