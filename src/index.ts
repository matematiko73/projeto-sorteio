import carregarPessoas from "./function/carregar-pessoas";
import sortearAzarado from "./function/sortear-azarado";
import terminal from "./ui/terminal";

async function rodar(){

    const pessoas = carregarPessoas("src/data/dados.csv");

    //pessoas.forEach(p => console.log(p.toString()));

    console.log(`Vamos para o sorteio final!!!`);
    const duracaoEmSegundos = 20;
    const azarado = await sortearAzarado(pessoas, duracaoEmSegundos);

    terminal.clear();

    terminal.white("\n\nO").brightRed(" AZARADO");
    terminal.bold.brightGreen(" MAIS SORTUDO").white(" é: \n");
    terminal.bold.brightYellow(azarado.toString());
    terminal("\n\n 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉");

    console.log();
}

rodar()
//console.log(azarado.toString());