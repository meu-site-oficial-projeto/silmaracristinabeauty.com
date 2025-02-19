import React, { useState, useEffect } from 'react';
import { CarrocelStilo } from "./styles.js"; // Estilos personalizados
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importando as setas do react-icons
import cilios from "../../assets/parte2/cilios.jpg";
import cilios1 from "../../assets/parte2/cilios1.jpg";
import cilios2 from "../../assets/parte2/cilios2.jpg";
import designerII from "../../assets/parte2/designer II.jpg";
import designerIII from "../../assets/parte2/designer III.jpg";
import designerIV from "../../assets/parte2/designer IV.jpg";
import designerV from "../../assets/parte2/designer V.jpg";
import designerVI from "../../assets/parte2/designer VI.jpg";
import designerVII from "../../assets/parte2/designer VII.jpg";
import designerX from "../../assets/parte2/designer X.jpg";
import designerXI from "../../assets/parte2/designerXI.jpg";
import designerXII from "../../assets/parte2/designerXII.jpg";

// Aqui estão as imagens que são realmente arquivos de imagem
const imagens = [
  cilios,
  cilios1,
  cilios2,
  designerII,
  designerIII,
  designerIV,
  designerV,
  designerVI,
  designerVII,
  designerX,
  designerXI,
  designerXII
  
];

function Carrocel() {
  const [indice, setIndice] = useState(0);

  // Função para passar para a próxima imagem
  const proximaImagem = () => {
    setIndice((prevIndice) => (prevIndice + 1) % imagens.length);
  };

  // Função para ir para a imagem anterior
  const imagemAnterior = () => {
    setIndice((prevIndice) =>
      prevIndice === 0 ? imagens.length - 1 : prevIndice - 1
    );
  };

  // Autoplay: muda a imagem automaticamente a cada 3 segundos (3000ms)
  useEffect(() => {
    const intervalo = setInterval(proximaImagem, 3000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalo);
  }, []); // O array vazio [] significa que o efeito ocorre apenas uma vez quando o componente é montado.

  return (
    <CarrocelStilo className="carrossel-imagens">
      <div className="carrossel">
        <button className="botao" onClick={imagemAnterior}>
          <FaArrowLeft /> {/* Ícone de seta para a esquerda */}
        </button>
        <div className="imagem">
          <img src={imagens[indice]} alt={`Imagem ${indice}`} />
        </div>
        <button className="botao" onClick={proximaImagem}>
          <FaArrowRight /> {/* Ícone de seta para a direita */}
        </button>
      </div>
    </CarrocelStilo>
  );
}

export default Carrocel;

