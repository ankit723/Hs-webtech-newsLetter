import React from "react";

export function TopImageBottomText(props){
    return(
        <div className=""style={{maxWidth:"20rem"}}>
            <img src={props.topImg} alt="New Blog Image" style={{width:`${props.imgSize}`}}/>
            <h4 style={{fontSize:`${props.headTextSize}`}}>{props.bottomText}</h4>
            <h6>{`${props.author} - ${props.date}`}</h6>
            <p style={{fontSize:`${props.paraTextSize}`}}>{props.paragraph}</p>
        </div>
    )
}

export default TopImageBottomText;