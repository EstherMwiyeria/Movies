import React from "react";
import './style.css';
const IMAGE_BASE_URL=process.env.REACT_APP_IMAGE_BASE_URL;


const ImageContainer = ({props,onClick}) =>{
    return(
        <div className="image-container" onClick={onClick}>
                
                <img src={`${IMAGE_BASE_URL}${props.poster_path}`} alt={props.title}></img>
                
        </div>
    )
}
export default ImageContainer;