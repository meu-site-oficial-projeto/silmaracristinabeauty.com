import React from 'react';
import { Rodape } from "./styles.js";
import cabecalho from "../../assets/parte1/cabecalho.jpg";

const Footer = () => (
    < Rodape>
    <div className='container-rodape'>
      <img src={cabecalho} alt="SC Beauty" />
      <div className='container-co'>
      <p>
        &copy; SC Silmara Cristina - Todos os direitos reservados - 2025 | Desenvolvido por <a href="https://www.linkedin.com/in/tha%C3%ADs-lima-silva/">Medusa_2.7</a>
      </p>
     </div> 
        
    </div>        
    </ Rodape>
)

export default Footer
        