import React from 'react';
import CommonButton from '../CommonButton';

import './styles.css';

function Product(props){
    return(
        <div className="product-card" id={`product-${props.id}`}>

            <img src={`./Assets/${props.img}`}/>
            <span>{props.title}</span>
            <p>{props.text}</p>
            <CommonButton color="green" text="Aqui um CTA" href="404"/>
        </div>
    );

}

export default Product;