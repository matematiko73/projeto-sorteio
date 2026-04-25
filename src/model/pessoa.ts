//1 - Modelagem do dado recebido
//quando se tem uma interface nos criamos a estrutura,
//como a assinatura de um método e tipo de entrada e 
//saída de dados - não é possível criar o corpo do método,
//por exemplo - em uma classe é possível implementar as 
//regras dentro de seu corpo

export default class Pessoa{
    constructor(readonly nome: string, readonly email: string){}

    toString(){
        return `${this.nome} <${this.email}> `;
    }
}