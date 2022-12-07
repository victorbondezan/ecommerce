import 'styled-components';

/**
 * Isto se trata de um arquivo de definições de tipos..
 * acho que o d. desse aquivo significa isso
 * 
 * "ele irá subescrever uma definição de tipos"
 * este irá subescrever dentro de styled-components.. ou seja, irá acrescentar uma nova funcionalidade, através de tipagem pelo que parece.
 * 
 * o proximo passo será informar ao Typescript quem compile o arquivo junto desta nova aplicação.
 * para isso: (passo a passo para fazer uma interface funcionar??)
 *  1- ir em tsconfig.json e criar um array lá nomeado por boas praticas de files: "files":[] (lá dentro é onde as coisas são compiladas, então os novos itens serão compilados lá.)
 *  2- dentro do array deve ser passado o caminho do aquivo que será compilado.
 *  3- não esquecer de importar o arquivo principal a nova aplicação vai subscrever todo o arquivo, na pratica o substituindo
*/
declare module 'styled-components' {
    export interface DefaultTheme{
        title: string;

        colors: {
            primary: string;
            secundary: string;
    
            background: string;
            text: string;
        }
    }
}

