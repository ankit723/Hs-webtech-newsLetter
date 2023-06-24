import React from "react";

export function LeftImageRightText(props){
    return(
        <div className="d-flex">
            <iframe src={props.videoUrl} sandbox="allow-same-origin allow-scripts" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{width:`${props.videoSize}`, maxWidth:"100%", height:"auto"}}/>
            <h6 className="mx-3" style={{fontSize:`${props.textSize}`, overflow:"hidden"}}>{props.rightText}<h6>{`${props.author} - ${props.date}`}</h6></h6>
        </div>
    )
}

export default LeftImageRightText;