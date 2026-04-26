//1 - Modelagem do dado recebido
//quando se tem uma interface nos criamos a estrutura,
//como a assinatura de um método e tipo de entrada e 
//saída de dados - não é possível criar o corpo do método,
//por exemplo - em uma classe é possível implementar as 
//regras dentro de seu corpo

export default class Pessoa{
    constructor(readonly nome: string, readonly email: string) {}

    //utilizando REGEX - Expressão Regular, 
    //criaremos grupos de captura
    //para mascarar o email da pessoa

    get emailMascarado(){
        const regex = /(.{1,3})(.*)(@.*)/;
        return this.email.replace(regex, (_, g1, g2, g3) =>{
            return g1 + "***" + g3;
        })
    }


    toString(){
        return `${this.nome} <${this.emailMascarado}> `;
    }
}