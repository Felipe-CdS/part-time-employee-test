import React from 'react';

import './styles.css'

class TextCarousel extends React.Component{
    constructor(props){
        super(props);
    }

    state = {
        positionIndex: 0,
        texts: [
            ['“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.”', "@DanielMaciel"],
            ['“Aliquam elementum arcu et dui posuere varius, Vestibulum pulvinar.”', "@Random1"],
            ['“Sed tristique mattis finibus. Praesent dignissim dui quis nibh porttitor.”', "@Random2"],
            ['“Curabitur placerat, ligula tempus tristique maximus.”', "@Random3"],
            ['“Nunc lobortis cursus gravida. Sed non nisi eget dolor interdum tempor.”', "@Random4"]
        ]
    }

    /*This function removes the "selected" classname from all buttons and 
    adds this classname to the button who called the function.*/
    selectText(){
        var element = document.getElementById("carousel-controller").getElementsByClassName("selected")[0];
        element.classList.remove("selected");
        this.classList.add("selected");
    }

    /*adds the eventListener to all buttons on carousel.*/
    componentDidMount(){    
       (document.getElementById("carousel-controller").childNodes)
            .forEach(element => { element.addEventListener("click", this.selectText) });
    }

    render(){        
        return(
            <div id="text-carousel">
                <span>{this.state.texts[this.state.positionIndex][0]}</span>
                <span>{this.state.texts[this.state.positionIndex][1]}</span>
    
                <div id="carousel-controller">
                    <button onClick={() => this.setState({ positionIndex: 0 })} className="selected"></button>
                    <button onClick={() => this.setState({ positionIndex: 1 })}></button>
                    <button onClick={() => this.setState({ positionIndex: 2 })}></button>
                    <button onClick={() => this.setState({ positionIndex: 3 })}></button>
                    <button onClick={() => this.setState({ positionIndex: 4 })}></button>
                </div>
            </div>
        );
    }
}

export default TextCarousel;