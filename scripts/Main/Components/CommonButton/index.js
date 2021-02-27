import React from 'react';
import './styles.css'

function CommonButton(props){

    var styles = {
        backgroundColor: `var(--${props.color})`,
        color: "#FFFFFF"

    }

    //change font color on green button
    if(props.color == "green"){
        styles.color = "var(--black)"
    }

    return(
        //possible colors: green / black
        <a className="link-button" style={styles} href={`#/${props.href}`}>{props.text}</a>
    );
}
export default CommonButton;