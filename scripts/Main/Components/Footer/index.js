import React from 'react';
import CommonButton from '../CommonButton';

import './styles.css';

function Footer(){
    return(
        <div>
            <div id="footer-top-banner">

                <p>Quer Experimentar?</p>
                <CommonButton color="black" text="Aqui um CTA" href="404"/>

                <div>
                    <img id="footer-can-one" src={"./Assets/lata.png"}></img>
                    <img id="footer-can-two" src={"./Assets/lata.png"}></img>
                    <img id="footer-can-three" src={"./Assets/lata.png"}></img>
                </div>
            </div>
            <div id="footer-contact-us">
                <div id="footer-contact-us-left">
                    <div>  
                        <h2>Fale Conosco.</h2>
                        <div>
                        <a href="https://www.instagram.com/conecta.oficial/">
                            <img src={"./Assets/instagram.svg"}></img>
                        </a>
                        <a href="https://www.facebook.com/conectaai.oficial/">
                            <img src={"./Assets/facebook.svg"}></img>
                        </a>
                            <span> | REDES SOCIAIS</span>
                        </div>
                    </div>
                    
                    <span id="rights-span">Todos os direitos reservados © 2020 Conecta</span>
                </div>
                <div id="footer-contact-us-right">
                    <form name="contact" method="post">
                                <div className="name-container">
                                    <div>
                                        <label htmlFor="fname">NOME</label>
                                        <input type="text" id="fname" name="fname" placeholder="Daniel Maciel"/>
                                    </div>
                                </div>

                                <div className="name-container">
                                    <div>
                                        <label htmlFor="email">EMAIL</label>
                                        <input type="email" id="email" name="email" placeholder="email@email.com.br"/>
                                    </div>
                                    <div>
                                        <label htmlFor="phone">TELEFONE</label>
                                        <input type="text" id="phone" name="phone" placeholder="(21)00000-0000"/>
                                    </div>
                                </div>

                                <div className="name-container">
                                    <div>
                                        <label htmlFor="subject">ASSUNTO</label>
                                        <select id="subject" name="subject" placeholder="Assunto">
                                            <option selected></option>
                                            <option value="subject1">Assunto 1</option>
                                            <option value="subject2">Assunto 2</option>
                                            <option value="subject3">Assunto 3</option>
                                            <option value="subject4">Assunto 4</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="name-container">
                                    <div>
                                        <label htmlFor="message">MENSAGEM</label>
                                        <textarea id="message" name="message" placeholder="Escreva aqui sua mensagem"></textarea>
                                    </div>
                                </div>
                        </form>
                        <CommonButton color="green" text="Aqui um CTA" href="404"/>
                        <span id="rights-span-mobile">Todos os direitos reservados © 2020 Conecta</span>
                        <div id="conecta-span">
                            <span>PRODUZIDO POR</span>
                            <img src="./Assets/conecta.svg"></img>
                        </div>
                </div>

            </div>
            
        </div>
    );
}

export default Footer;