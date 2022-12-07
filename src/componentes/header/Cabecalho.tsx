//Padrão
import React, {useContext} from "react"; 
import { Link, NavLink } from "react-router-dom"


//Componetes
import Switch from 'react-switch';

//CSS
import { Container } from "./styles";
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

//Páginas
import PaginaInicial from '../../paginas/paginaInicial';
import PaginaDosMoletons from '../../paginas/paginaDosMoletons';

/** 
 * essa interface tá typando(informando para outro componente da aplicação) que a tag header pode receber um função chamada toggleTheme.
 * 
 * qual o formato das propriedades que essa componente pode receber?(essa é uma das funções de uma interface.)
 * 
 * Void tá sendo (e acho que geralmente serve pra isso mesmo) pra preencher as propriedades de uma função que não faz nada nesse componente mas que em outro tem alguma funcionalidade.
 */
interface props {toggleTheme(): void;}

const Header: React.FC<props> = ({ toggleTheme }) => {
    /*
     * com o import/metodo {useContext} posso usar com ele pra pegar "contextos(propriedades?)" de outras aplicações
     e usar nesta:
            -explicação oficial é: Aceita um objeto de contexto (o valor retornado de React.createContext)
            e retorna o valor de contexto atual, conforme fornecido pelo provedor de contexto mais próximo 
            para o contexto fornecido.

     * Daí usando o outro import {ThemeContext} que parece ser usado como prop eu consigo puxar colors da
     aplica que eu criei:
            -explicação oficial é: React.Context<DefaultTheme>

     * Shade é uma aplicação de biblioteca propria polished@3.4.4 
     neste caso ela está aplicando um shade de 10% na cor primaria light mode (0.1) escurecendo 
    */
    const {colors, title} = useContext(ThemeContext); 
return(
    <Container>         
        <h1><img src="../public/img/logo-branco.png"/></h1>
        
        <ul>
            <li><Link to="/paginas/paginaInicial">Home</Link></li>
            <li><Link to="/paginas/paginaDosMoletons">Blusas</Link></li>
            <li>Sobre</li>
            <li>Contato</li>
        </ul> 
        
        
        <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.secundary}
            />
    </Container>

    );
};

export default Header;