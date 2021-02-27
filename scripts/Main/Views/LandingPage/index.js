import React from 'react';

import LandingStart from '../../Components/LandingStart'
import Footer from '../../Components/Footer';
import Product from '../../Components/Product';
import TextCarousel from '../../Components/TextCarousel';

import './styles.css'

function LandingPage(){
    return(
        <div>
            <LandingStart />

            <div id="middle">
                <h1>Produtos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper, tortor sed vehicula.</p>
                <div id="midle-products">
                    <Product id="1" title="Garrafa 350ml" text="Lorem Epsilum" img="garrafa.png"/>
                    <Product id="2" title="Lata 100ml" text="Lorem Epsilum" img="lata.png"/>
                </div>

                <div id="midle-banner">
                    <div id="banner-1"></div>
                    <TextCarousel />
                    <div id="banner-3">
                        <div>
                            <span>Peça para seu bar</span>
                        </div>
                    </div>
                    
                    
                    
                </div> 
            </div>

            <Footer />
        </div>
        
    );
}

export default LandingPage;