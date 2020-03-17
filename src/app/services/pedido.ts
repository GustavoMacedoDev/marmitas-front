export class Pedido {
    id: number;
    instante: Date;
    desconto: number;
    quantidade: number;
    preco:number;
    itens: any[];

    constructor(itens : any[]) {
        this.itens = itens;
    }

}

