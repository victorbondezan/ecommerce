import { useEffect, useState, Dispatch, SetStateAction } from "react";

/**
 * (2)(essa explicação se complementa com a explicação do type no componente App, o principal mesmo)
 * o retorno da função userPersistedState() é nesse Type.
 * 
 * Aparentemente usar realmente uma interface para Typar uma função(ou qualquer outra coisa?), não funciona, precisa ser um Type mesmo (e não uma interface).
 * lendo mais claramente type Response<T> é igual aquele array de baixo ali, então <T> é igual o Type e o type é igual o array
 */
type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
];

/**
 * É como um useState(um método que moda o estado de uma propriedade(current(estado atual) Vs NewState, nomes costumisaveis.)) mas ele continua lá quando se dá refresh na página.
 * 
 * sobre parametros:
 * 
 *      (parametro:type) -> é isso que um parametro pede prioritariamente;
 * 
 *      -> key: um parametro que sei lá; strig: um type original que engloba tudo que tem a inteção de ser escrito sem pensar em calcular(type(number) que calcula)
 * 
 *      ->  defaultValeu: é o valor padrão(current); any: geralmente usado quando não se quer definir nada de especial, mais garantido pra não dar erro pq não é necessario saber exatamente o que a pessoa quer armazenar;
 * 
 *      -> <generics> é um tipo de parametro, aparentemente ele "pode ser" recebido, acho que ele funciona sendo opicional.. mas o <generics> tb é forçar um função a ser typada.
 *          -> pra mais informações sobre typagem é bom estudar os metodos Dispatch e SetStateAction clicando neles com o crtl
 * 
 *      -> depois do primeiro (parenteses(parametro)) o : Response<T> quer dizer que userPersistedState<T>, TA RETORNANDO Response<T>
 * */
function userPersistedState<T>(key:string, inicialState:any): Response<T> {
    const [state, setState] = useState(() => {
/**
 * localStorage: È uma variavel de Storage.. então quando acesso getItem através dela atribuo sua habilidade a storageValue de armazenar uma informação em um local externo a função (a chave do type Response<T>)
 *      O que faz o Storage (que é igual a localStorage) -> 
Essa interface da API de armazenamento da Web fornece acesso a uma sessão ou armazenamento local de um domínio específico. Ele permite, por exemplo, a adição, modificação ou exclusão de itens de dados armazenados.(O type Response é a armazenagem criada, armazena em T o storageValue e armazena em  Dispatch<SetStateAction<T>> o inicialState)
 *  
 * set/getItem: Get -> Retorna o valor atual associado à chave fornecida ou null se a chave fornecida não existir. set -> Define o valor do par identificado por chave para valor, criando um novo par chave/valor se não existia para a chave anteriormente.
ou
Lança uma exceção DOMException "QuotaExceededError" se o novo valor não puder ser definido. (A configuração pode falhar se, por exemplo, o usuário tiver desabilitado o armazenamento para o site ou se a cota tiver sido excedida.)
ou
Envia um evento de armazenamento em objetos Window que contêm um objeto Storage equivalente.
 * JSON.parse: Converte uma string JavaScript Object Notation (JSON) em um objeto.
 */
        const storageValue = localStorage.getItem(key); //acrescenta state(light), setState(dark)
        
        if (storageValue) {
            return JSON.parse(storageValue) //estado mudado ou 
        } else {
            return inicialState; //estado inicial
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state]);

    return [state, setState];
}

export default userPersistedState

