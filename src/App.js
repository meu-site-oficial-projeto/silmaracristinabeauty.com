import './styled.js';
import React from 'react';
import { GlobalCSS } from "../../sbeauty/src/styled.js"; 
import Header from "../../sbeauty/src/Components/Header";
import Footer from "../../sbeauty/src/Components/Footer"
import Carrocel from "../../sbeauty/src/Components/Carrocel";
import dicaII from "../../sbeauty/src/assets/parte2/dicaII.jpg";
import dicas from "../../sbeauty/src/assets/parte2/dicas.png";
import silmara from "../../sbeauty/src/assets/parte2/silmara.jpg";
import local from "../../sbeauty/src/assets/parte2/local.jpg";
import insta from "../../sbeauty/src/assets/social.images/insta.png";
import wtz from "../../sbeauty/src/assets/social.images/wtz.png";

function App() {
  return (
    <>
    <GlobalCSS />
    <Header />    
    <div className='container-tratamentos'>
      <p>
      Como especialista em beleza, tenho o prazer de oferecer uma gama de serviços para realçar sua aparência e elevar sua confiança. Meu foco principal está no design de sobrancelhas, onde trabalho para esculpir a forma perfeita que se harmoniza com seus traços faciais únicos. Além disso, ofereço a técnica de rena nas sobrancelhas, adicionando cor e definição para um olhar ainda mais marcante e expressivo. Além disso, realizo depilação corporal profissional, utilizando métodos seguros e eficazes para remover os pelos de forma suave e duradoura. Meu objetivo é proporcionar a você uma experiência relaxante e satisfatória, deixando-o(a) com uma sensação de renovação e confiança em sua própria pele. Venha desfrutar de um tratamento personalizado e descubra o poder transformador de uma aparência cuidadosamente trabalhada.
      Veja alguns procedimentos que foram realizados:
      </p>
    </div>    
    <Carrocel />
    <div className='container-cuidados'>
    <h2>Dicas e cuidados</h2>
    </div>    
    <div className='container-sobrancelha'>
    <h3>
      Sobrancelhas
    </h3>
    </div>    
      <div className='container-sobrancelhaI'>
        <p>
        Formato adequado ao rosto: O primeiro passo é encontrar o formato de sobrancelha que melhor se adapte ao seu rosto. Manutenção regular: Mantenha as sobrancelhas sempre bem cuidadas, removendo os pelos indesejados ao redor para manter o formato desejado. Visita ao profissional: Se não se sente seguro em moldar suas sobrancelhas, considere uma visita a um profissional. Eles podem ajudar a definir o melhor formato e realizar a manutenção de forma mais precisa.
        </p>
        <div className='imagem-dica'>
        <img src={ dicaII } alt="SC Beauty" />
          <p>
          Em caso de Henna Opte por uma tonalidade que combine bem com a cor do seu cabelo e da sua pele. Para prolongar a cor da henna, evite esfregar as sobrancelhas ao lavar o rosto e aplique protetor solar ao redor da área para evitar desbotamento.
          </p>
        </div>
      </div>
      <div className='container-sobrancelha'>
       <h3>
       Depilação
       </h3>
       </div>
       <div className='container-sobrancelhaI'>
       <p>
        Após a depilação com cera, é importante cuidar da pele para minimizar irritações e manter uma boa saúde da pele, após a depilação, limpe a área delicadamente com água morna e um sabonete suave. Hidrate a pele e evite usar produtos que contenham álcool, evite a exposição direta ao sol por pelo menos 24 horas após a depilação.
       </p>
       <div className='imagem22'>
       <img src={ dicas } alt="SC Beauty" />
       </div>       
       </div>      
      <section>
        <div className="container-picture">
          <img src={ silmara } alt="SC Beauty" />
        <div className="container-profissional">
          <h2><b>A profissional</b></h2>
          <p>
            Ser uma profissional da beleza é entrar em um mundo repleto de criatividade, cuidado e transformação. Cada dia traz consigo a oportunidade de ajudar as pessoas a realçarem sua beleza única e a se sentirem confiantes. Você tem o poder de criar momentos especiais para seus clientes, onde eles se sentem mimados e revitalizados. É um trabalho que exige habilidade técnica, sensibilidade para entender as necessidades e desejos de cada pessoa, e uma paixão por fazer com que todos se sintam bem consigo mesmos. Ao mesmo tempo, ser uma profissional da beleza é também lidar com os altos e baixos da indústria, ficando por dentro das últimas tendências e técnicas, e sempre se esforçando para aprimorar suas habilidades. No final do dia, ver o sorriso no rosto de um cliente satisfeito é a maior recompensa, tornando cada desafio e esforço valer a pena.
          </p>
        </div>
        </div>
      </section>
      <section className='container-conjunto'>
        <div className="container-pictureI">
          <img src={ local } alt="SC Beauty" />
        </div>
        <div className="container-profissionalI">
          <h2><b>O espaço</b></h2>
          <p>
            Ser uma profissional da beleza é entrar em um mundo repleto de criatividade, cuidado e transformação. Cada dia traz consigo a oportunidade de ajudar as pessoas a realçarem sua beleza única e a se sentirem confiantes. Você tem o poder de criar momentos especiais para seus clientes, onde eles se sentem mimados e revitalizados. É um trabalho que exige habilidade técnica, sensibilidade para entender as necessidades e desejos de cada pessoa, e uma paixão por fazer com que todos se sintam bem consigo mesmos. Ao mesmo tempo, ser uma profissional da beleza é também lidar com os altos e baixos da indústria, ficando por dentro das últimas tendências e técnicas, e sempre se esforçando para aprimorar suas habilidades. No final do dia, ver o sorriso no rosto de um cliente satisfeito é a maior recompensa, tornando cada desafio e esforço valer a pena.
          </p>
        </div>        
      </section>
      <section>
        <div className='container-social'>
          <ul>
            <li>
            <img src={ insta } alt="SC Beauty" />
            </li>
            <li>
            <img src={ wtz } alt="SC Beauty" />
            </li>
          </ul>
          <p>
          R. Alberto Nepomuceno, 61 Parque Res. Versailles Sumaré - SP, 13171-780          
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;