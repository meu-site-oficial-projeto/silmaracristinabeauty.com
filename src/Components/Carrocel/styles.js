import styled from 'styled-components';

export const CarrocelStilo = styled.div`
  /* Centralizando a div do carrossel */
  .carrossel-imagens {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px; /* Faz a altura do container ocupar toda a altura da tela */
 }
  

  /* Centralizando a div interna do carrossel */
  .carrossel {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px; /* Espaço entre os botões e a imagem */
    margin-left: -100px;
  }

  /* Estilo da imagem */
  .imagens {
    width: 400px; /* Garante que a imagem não ultrapasse o tamanho do contêiner */
    height: 300px; /* Limita a altura da imagem, você pode ajustar conforme necessário */
    margin-left: -100px;
  }

  /* Estilo dos botões */
  .botao {
    background-color:rgb(150, 8, 86); /* Cor de fundo */
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 8px;
    margin: 120px;
  }

  .botao:hover {
    background-color:rgb(233, 208, 66); /* Cor do botão ao passar o mouse */
  }

  @media screen and (max-width: 768px) {
  /* Centralizando a div do carrossel */
  .carrossel-imagens {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px; /* Ajustado para telas menores */
  }

  /* Centralizando a div interna do carrossel */
  .carrossel {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; /* Reduzi o espaço entre os botões e a imagem */
    margin-left: 0; /* Removido o deslocamento negativo */
  }

  /* Estilo da imagem */
  .imagem img {
    width: 250px; /* Ajustado para melhor se adaptar em dispositivos móveis */
    height: 180px; /* Ajustado para um tamanho mais adequado */
    object-fit: cover; /* Garante que a imagem ocupe o espaço sem distorcer */
  }

  /* Estilo dos botões */
  .botao {
    background-color: rgb(150, 8, 86); /* Cor de fundo */
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 6px;
    margin: 10px;
  }

  .botao:hover {
    background-color: rgb(233, 208, 66); /* Cor do botão ao passar o mouse */
  }
}
`
