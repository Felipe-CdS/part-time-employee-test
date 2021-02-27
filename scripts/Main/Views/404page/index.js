import React from 'react';
import CommonButton from '../../Components/CommonButton'

import './styles.css'

function ErrorPage(){
    return(
        <div id="root-404">
           <h1>Nothing to see here. <br/> Just a  placeholder.</h1>
           <CommonButton color="green" text="go back" href=""/>
        </div> 
    );
}

export default ErrorPage;