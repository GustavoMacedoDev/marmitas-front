import { ProdutoDto } from './produto.dto';

export interface Lancamento{
    quantidade: number;
    produto: ProdutoDto;
}