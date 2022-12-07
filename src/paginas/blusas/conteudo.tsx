import React from "react";
import { Container } from "../../componentes/body/styles";

const Moletons: React.FC = () => {
    return(
        <Container>
            <li>
                <h2>Com gorro estendido</h2>
                <img src="../../public/img/cabelo.png"></img>
                <p>Na tesoura ou máquina, como o cliente preferir.</p>
                <p>R$ 125,00</p>
            </li>
            <li>
                <h2>Moleton de Gatim</h2>
                <img src="../../public/img/moletom-orelha-de-gatim.png"></img>
                <p>Corte e desenho profissional de barba.</p>
                <p>R$ 148,00</p>
            </li>
            <li>
                <h2>Moleton brilhante</h2>
            <img src="../../public/img/cabeloEbarba.png"></img>
                <p>Pacote completo de cabelo e barba.</p>
                <p>R$ 135,00</p>
            </li>         
        </Container>
    )
}

export default Moletons