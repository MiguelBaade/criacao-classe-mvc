export class Cliente{
   //atributos
    id: number;
    nome: string;
    CPF: string;
    RG: string;
    anoNascimento: Date;

    //método construtor
    //responsavel por criar o objeto
    constructor(id: number, nome: string, CPF: string, RG: string, anoNascimento: Date){
        //instancia os atributos
        this.id = id;
        this.nome = nome;
        this.CPF = CPF;
        this.RG = RG;
        this.anoNascimento = anoNascimento;
    }

    getCPF(): string{
        return this.CPF;
    };

    getNome(): string{
        return this.nome;
    };

    getRG(): string{
        return this.RG;
    };

    getAnoNascimento(): number{
        return this.anoNascimento.getFullYear();
    };

    getIdade(): number{
        return new Date().getFullYear() - this.getAnoNascimento();
    };
}