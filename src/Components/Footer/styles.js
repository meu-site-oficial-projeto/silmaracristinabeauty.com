import '../../styled';
import styled from 'styled-components';

export const Rodape = styled.div`
  text-aligh: center;
  margin-bottom: 14px;
      
  .container-rodape img {
    background-repeat: no-repeat;
    background-size: cover;
    width: 1366px;
    margin-bottom: -45px;
    height: 100px;
  }

  .container-co{
    text-aligh: center;
    margin-left: 320px;
    font-size: 12px;

  }
    
  /* Estilo responsivo para telas com largura máxima de 768px */
  @media screen and (max-width: 768px) {
    .container-rodape img {
      width: 100%; /* Ajusta a largura da imagem para 100% da largura da tela */
      height: 100px; /* Mantém a proporção da imagem */
      margin-bottom: 0; /* Remove o espaço negativo */
    }

    .container-co {
      margin-left: 10px; /* Remove o deslocamento à esquerda */
      font-size: 10px; /* Diminui o tamanho da fonte para telas menores */
      margin-top: -30px;
    }
  
  `