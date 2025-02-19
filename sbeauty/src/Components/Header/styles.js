import '../../styled';
import styled from 'styled-components';

export const HeaderBar = styled.div`

  margin-bottom: 100px;
      
  .imagem img {
    background-repeat: no-repeat;
    background-size: cover;
    width: 1466px;
    margin-bottom: -45px;
    height: 180px;
  }

  h1 {
    margin-top: -105px;
    margin-left: 50px;
    margin-bottom: 50px;
    color: rgb(207, 8, 58);
    font-family: "Roboto";
  }
    
  nav {
   padding-left: 50px;
   padding-right: 120px;   
   font-size: 16px;
  }

  nav ul {
    list-style: none; /* Remove os pontos da lista */
    padding: 0; /* Remove o padding da lista */
    display: flex; /* Define que os itens vão ficar em linha */
    justify-content: space-between; /* Espaçamento entre os itens */
    
}

nav ul li a {
    text-decoration: none; /* Remove o sublinhado do link */
    margin-right: 12px; /* Espaçamento entre os itens (opcional) */
    color: rgb(207, 8, 58);  
    font-size: 14px;
    
    
}

nav ul li a:hover {
    background-color:rgb(75, 3, 69); /* Cor de fundo quando o link é hovered */
    color:rgb(236, 224, 234); /* Cor do texto quando o link é hovered */
    transform: scale(1.7);
    transition: all ease 0.3s;
    transform: scale(1.8);
    transition: all ease 0.3s;
     border-radius: 4px;
  }

   @media screen and (max-width: 768px) {
      header {
        background-image: url(./backfround.jpg);
        background-repeat:no-repeat;
        background-size: cover;
        color: rgb(107, 12, 35);
        padding: 8px ; 
        padding-top: 45px; 
        margin-bottom: 15px;
        margin-right: -75px;                    
    }

      @media screen and (max-width: 768px) {
        .imagem img {
            width: 100%;
            background-image: url(./backfround.jpg);
            background-repeat:no-repeat;
            background-size: cover;                                        
        }
    @media screen and (max-width: 768px) {
      nav ul li a {
      font-size: 16px;
      text-align: center;
      margin-left: 25px;
      margin-top: -15px;

    }
     }
     

`;
