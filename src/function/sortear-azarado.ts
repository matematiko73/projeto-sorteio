import Pessoa from "../model/pessoa";
import carregarPessoas from "./carregar-pessoas";
import Progresso from "../ui/progresso";

export default async function sortearAzarado(pessoas: Pessoa[], duracaoEmSEgundos:number): Promise<Pessoa> {
    let restantes = [...pessoas]; //gerou um clone com spread
    const progresso = new Progresso(pessoas.length);
    const tempoEspera = (duracaoEmSEgundos/pessoas.length)*1000
    
    for(let i = 0; i < pessoas.length; i++){
        restantes = todosMenosUm(restantes);
        await esperar(tempoEspera)
        progresso.atualizar(i+1)
    }
    return restantes[0];
}

function todosMenosUm(pessoas: Pessoa[]): Pessoa[]{
    if(pessoas.length === 1) return pessoas;

    const sorteado = Math.floor(Math.random()* pessoas.length);
    pessoas.splice(sorteado, 1);
    return pessoas
}

function esperar(ms: number): Promise<void>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },ms)
    })
}