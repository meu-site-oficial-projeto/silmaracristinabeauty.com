import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0; /* Remove a margem padrão de todos os elementos */
    padding: 0; /* Remove o padding padrão de todos os elementos */
    box-sizing: border-box; /* Define o box-sizing como border-box para todos os elementos */
    font-family: 'Roboto', sans-serif; /* Define a fonte padrão como Roboto */
}

body {
overflow-x: hidden; /* Garante que não haverá rolagem horizontal */
 background-image: linear-gradient( rgb(253, 173, 147, 1) 2%, rgb(255, 207, 224, 1) 20%, rgb(241, 173, 151, 1) 41%, rgb(255, 207, 224, 1) 64%, rgb(238, 168, 146, 1) 81%, rgb(255, 207, 224, 1) 100%);
background-repeat:no-repeat;
background-size:contain;
}

/* css do app.js*/

.container-tratamentos {
 margin-left: 60px;
 margin-right: 40px;
 padding-bottom: 30px;
}

.container-cuidados {
  margin-top: 160px;
  text-align: center;
  border-style: double;
  color: rgb(219, 54, 95);
  padding: 15px;
  margin-left: 85px;
  margin-right: 85px;

}
.container-sobrancelha h3 {
 margin-top: 60px;
 color: rgb(219, 54, 95);
 margin-left: 120px;
 margin-bottom: 20px;
}

.container-sobrancelhaI {
 margin-left: 100px;
 margin-right: 60px;
 padding-bottom: 50px;
}

.imagem-dica img {
 border-radius: 180px;
 height: 150px;
 width: 170px;
 margin-top: 25px;
 margin-bottom: 25px;
 margin-left: 50px;
}

.imagem22 img {
 margin-top: 35px;
 margin-bottom: 25px;
 margin-left: 50px;
 
}

.container-picture {
 margin-left: 40px;
 border-style: double;
 width: 1200px;
 height: 280px;
 padding-top: 30px;
 padding-left: 15px;
 
}

.container-profissional{
  margin-left:200px;
  margin-top: -220px;
  margin-right: 80px;
  margin-bottom: 200px;
 }

.container-pictureI img {
   height: 250px;
   width: 250px;
   margin-left:50px;
   margin-bottom: 200px;
   padding-top: 40px;
 }
  
 .container-profissionalI {
  margin-bottom: -310px; 
  margin-left:320px;
  margin-top: -400px;
  margin-right: 80px;
  margin-bottom: 200px;
   }

 .container-conjunto {
  border-style: double;
  margin-left: 40px;
  width: 1200px;
  height: 280px;
  padding-top: 0px;
  padding-left: 15px;
  margin-top: 20px;
 }

 @media screen and (max-width: 768px) {
  .container-picture {
    margin-left: 18px;
    border-style: double;
    width: 90%;
    height: auto;
    padding-top: 20px;
    padding-left: 0px;
  }

  .container-profissional {
    margin-left: 20px;
    margin-top: -180px;
    margin-right: 20px;
    margin-bottom: 150px;
  }

  .container-pictureI img {
    height: 200px;
    width: 220px;
    margin-left: 70px;
    margin-bottom: 370px;
    padding-top: 60px;
  }

  .container-picture img {
    height: 250px;
    width: 220px;
    margin-left: 70px;
    margin-bottom: 270px;
    padding-top: 60px;
  }

  .container-profissionalI {
    margin-bottom: -250px; 
    margin-left: 20px;
    margin-top: -300px;
    margin-right: 20px;
    margin-bottom: 150px;
  }

  .container-conjunto {
    border-style: double;
    margin-left: 20px;
    width: 90%;
    height: auto;
    padding-top: 0px;
    padding-left: 10px;
    margin-top: 10px;
  }
}

.container-social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 200px; /* Para centralizar o conteúdo na tela */
  }

  /* Estilo para os links (imagens) */
  .container-social ul {
    display: flex;
    justify-content: center;
    gap: 20px; /* Espaçamento entre as imagens */
    padding: 0;
    margin: 0;
  }

  .container-social li {
    list-style-type: none;
  }

  .container-social img {
    width: 40px; /* Tamanho das imagens */
    height: auto;
  }

  /* Estilo para o endereço */
  .container-social p {
    margin-top: 20px; /* Espaço entre as imagens e o endereço */
  }

  `