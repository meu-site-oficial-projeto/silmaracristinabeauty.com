import React from 'react';
import { HeaderBar } from "./styles.js";
import cabecalho from "../../assets/parte1/cabecalho.jpg";

const Header = () => (
    <HeaderBar>
        <div className='imagem'>
        <img src={cabecalho} alt="SC Beauty" />
        </div>
        <div>
        <h1>SC Silmara Cristina</h1>
        </div>  
        <div className="container-contact">
            <nav>
                <ul>                    
                    <li>
                    <a href="https://wa.me//5535997494247" target="_blank" rel="noopener noreferrer">Clique aqui para agendar</a>
                    </li>                                 
                </ul>
            </nav>
            </div>         
    </HeaderBar>
  )
  
  export default Header
