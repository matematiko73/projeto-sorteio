//Matriz Grande em que a cada rodada entre 0 e 200:
//1 - retira um elemento da Matriz
//2 - apresenta esse elemento
//3 - matriz se mantem, sem este elemento
//4 - ocorre o ressorteio até o ultimo elemento
import Pessoa from "../model/pessoa" 

export default function sortearAzarado(matriz: Pessoa[]): string{
    let contador = 0;
    let linha = 0;
    let sorteio = matriz;
    while(sorteio.length > 1){
        linha = Math.floor(Math.random()*(sorteio.length+1));
        if(sorteio[linha]?.toString() != undefined){
            contador++; 
            console.log(`O ${contador}º sorteado é:`);
            console.log(sorteio[linha]?.toString());
            sorteio = sorteio.filter(item => item !== sorteio[linha]);
            sorteio = sorteio.filter(item => item !== undefined);
        }
    }

    return `O vencedor mais azarado é ${sorteio[0]?.toString()}`;

}