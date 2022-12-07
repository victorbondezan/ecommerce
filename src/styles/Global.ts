import {createGlobalStyle} from 'styled-components'


/**
 * Caso importar styled-components não estiver dando certo o problema ocorre por não ter instalado as definições do pacote
 * 
 * para instala-las escrevemos no terminal "yarn add @tipes/styled-components -D" esse problema pode ocorrer com qualquer nova dependência e para resolver basta repetir a formula escrevendo o nome da dependência depois da barra "/"
*/
export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.background};
    font-family: sans-sarif;
    
  }
`;

//o nome dessa forma de codificação entre `` é relative type.. usado para se escrever com styled components.