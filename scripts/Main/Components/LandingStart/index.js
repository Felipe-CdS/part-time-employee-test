import React from 'react';
import CommonButton from '../CommonButton';

import './styles.css';

function LandingStart(){
    return(
        <div id="landing">
            <header>
                <a href="#">
                    <img src={"./Assets/conecta.svg"}></img>
                </a>
                <div>
                    <a href="https://www.instagram.com/conecta.oficial/">
                        <img src={"./Assets/instagram.svg"}></img>
                    </a>
                    <a href="https://www.facebook.com/conectaai.oficial/">
                        <img src={"./Assets/facebook.svg"}></img>
                    </a>
                </div>
            </header>

            <section>
                <div>
                    <h1>Aqui um título <br/> de duas linhas</h1>
                    <CommonButton color="green" text="Aqui um CTA" href="404"/>
                </div>
                <img src={"./Assets/lata.png"}/>
            </section>
        </div>
    );
}

export default LandingStart;