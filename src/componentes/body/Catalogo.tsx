import React from "react";
import { Container } from "./styles";

const Catalog: React.FC = () => {
    return(
      
        <Container>
            <li>
                <h2>Cabelo</h2>
                <img src="../../public/img/cabelo.png"></img>
                <p>Na tesoura ou máquina, como o cliente preferir.</p>
                <p>R$ 25,00</p>
            </li>
            <li>
                <h2>Barba</h2>
                <img src="../../public/img/barba.png"></img>
                <p>Corte e desenho profissional de barba.</p>
                <p>R$ 18,00</p>
            </li>
            <li>
                <h2>Cabelo + Barba</h2>
            <img src="../../public/img/cabeloEbarba.png"></img>
                <p>Pacote completo de cabelo e barba.</p>
                <p>R$ 35,00</p>
            </li>
        </Container>
    );
}

export default Catalog;