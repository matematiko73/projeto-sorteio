//modulo do próprio NODEJS para carregamento de arquivos
//npm i -D @types/node vai instalar uma dependencia para acessar os métodos
//e funções do FS, aliás, toda a definição de "tipos" do nodeJS

import fs from "fs"; 

import Pessoa from "../model/pessoa"

//essa função vai retornar um array de pessoas baseado no modelo que criei
//arquivo é o CAMINHO DO ARQUIVO A SER CARREGADO
export default function carregarPessoas(arquivo: string): Pessoa[]{
    const conteudo = fs.readFileSync(arquivo, "utf-8");
    const linhas = conteudo.split("\n");
    const pessoas = linhas
        .filter(l => l.trim().length > 0)
        .map((linha) => {
            const [nome, email] = linha.split(";");
            return new Pessoa(nome.trim(), email.trim());
        });

    return pessoas;
}