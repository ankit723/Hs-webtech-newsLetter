import React from "react";

export function TopImageBottomText(props){
    return(
        <div className="App">
            <div className="d-flex-flex-column vidTab m-2"style={{maxWidth:"20rem"}}>
                <img src={props.topImg} alt="New Blog Image" style={{width:`${props.imgSize}`, maxWidth:"100%", height:"auto"}}/>
                <h4 style={{fontSize:`${props.headTextSize}`}}>{props.bottomText}</h4>
                <h6 style={{fontSize:`${props.footTextSize}`}}>{`${props.date}`}</h6>
                <p style={{fontSize:`${props.paraTextSize}`}}>{props.paragraph}</p>
            </div>
        </div>
        
    )
}

export default TopImageBottomText;
