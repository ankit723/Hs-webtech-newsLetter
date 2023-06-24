import React from "react";

export function TopVideoBottomText(props){
    return(
        <div className="App">
            <div className="d-flex-flex-column"style={{maxWidth:"20rem"}}>
                <iframe src={props.videoUrl} sandbox="allow-same-origin allow-scripts" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{width:`${props.videoSize}`, maxWidth:"100%", height:"auto"}}/>
                <h5 style={{fontSize:`${props.headTextSize}`}}>{props.bottomText}</h5>
                <h6>{`${props.author} - ${props.date}`}</h6>
                <p style={{fontSize:`${props.paraTextSize}`}}>{props.paragraph}</p>
            </div>
        </div>
        
    )
}

export default TopVideoBottomText;