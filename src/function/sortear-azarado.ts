import Pessoa from "../model/pessoa";
import carregarPessoas from "./carregar-pessoas";

export default function sortearAzarado(pessoas: Pessoa[]): Pessoa {
    let restantes = [...pessoas]; //gerou um clone com spread
    
    for(let i = 0; i < pessoas.length; i++){
        restantes = todosMenosUm(restantes);
    }
    return restantes[0];
}

function todosMenosUm(pessoas: Pessoa[]): Pessoa[]{
    if(pessoas.length === 1) return pessoas;

    const sorteado = Math.floor(Math.random()* pessoas.length);
    pessoas.splice(sorteado, 1);
    return pessoas
}