import React from 'react';

const Button = (props)=>{
    return(
        <div className="button-layout">
            {props.source ? 
                <input type="image" value={props.label} src={window.location.origin + `/assets/${props.source}`} className={`button orange_btn ${props.className}`} onClick={props.getClick} /> 
                : 
                <input type="button" className={`button ${props.className}`} value={props.label} onClick={props.getClick} />}
            
        </div>
    )
}

export default Button;
