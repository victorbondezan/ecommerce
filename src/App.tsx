//Padrão e Frameworks 
import React, {useState} from 'react';
import { BrowserRouter as Routes, Switch, Route, Link, Router, BrowserRouter } from 'react-router-dom';

//Método criado manualmente
import userPersistedState from './utils/userPersistedState';
//import Navbar from './componentes/Navbar';
//import config from "../config/App.js";

//CSS
import Global from './styles/Global'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light';
import dark from './styles/themes/dark';

//componentes
import Header from './componentes/header/Cabecalho'
import Footer from './componentes/footer/Rodape'

//Paginas
import PaginaInicial from './paginas/paginaInicial'
//import Moletons from './paginas/blusas/conteudo';
import PaginaDosMoletons from "../src/paginas/paginaDosMoletons";

function App() {
  const [theme, setTheme] = userPersistedState<DefaultTheme>('theme',light);
/**
 * setTheme verifica se theme.title é igual a light..
 * se não for ele troca por dark, mas se for ele troca pra light de volta.
 * tipo de verificação comum.. bom decorar.(pode adotar muitos contextos.)
 * 
 * é mais facil passar essa função direto para a tag do header.. mas daria pra passar via context.. 
 * mais um metodo que serve como interface ou type..(pq não fazer essa função direto no header então?)
 * 
 * (1)(essa explicação se complementa com a explicação do type no componente userPersistedState)
 * <DefaultTheme> é o formato(modelo(Type)) que e a função tem, que é original de styled-components; 
 * O retornono da função userPersistedState() é uma resposta(O Response) que é uma lista que na primeira chave corrensponde a T(geralmente se referindo ao estado natural(current) e a segunda chave é <SetStateAction<T> (o dispatch))
 */
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  };

  /*

  */
  return (
    <div>
       {/* <BrowserRouter basename={config.basename}> */}
       
        <ThemeProvider theme={theme}> 
            <Global/>
            <Header toggleTheme={toggleTheme} />
            <Switch>{/* A tag Swith retorna o primeiro caso de true, o primeiro que estiver na frente, ele se baseia no primeiro path */}
              <Route path="/paginas/paginaDosMoletons" component={PaginaDosMoletons} /> 
              <Route path="/" component={PaginaInicial} />
            </Switch> 
            <Footer/> 
        </ThemeProvider>  
      {/* </BrowserRouter> */}
    </div>
  )

}



export default App

// vamos copiar esse site aqui: https://www.miranty.com.br/ , mas com tematica nerd.. que tal?

/*
    A video aula propõem uma mudança de estado, no caso do exemplo quando é usado o elementoSet.. 
  ativado com o click em ok do formulário o projeto retorna os campos de preencher do usuario limpos
  novamente.. mas isso é adapatavel no meu projeto?  
  
  não, pq o Switch faz exatamente mas focado em trocar de pagina.. 
*/

/** 
 * dicas do guga pra passar em testes de entrevistas 
 * 
 * react i18n internacionalização.. 
 * scrool infinito.. 
 * usar o bootstrap para ter um resultado mais bonito mais rapido.  
 * steak overflow é onde o guga se consulta sobre como fazer as coisas 
*/