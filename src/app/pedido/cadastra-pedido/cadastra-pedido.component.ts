import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProdutoDto } from 'src/app/models/produto.dto';

@Component({
  selector: 'app-cadastra-pedido',
  templateUrl: './cadastra-pedido.component.html',
  styleUrls: ['./cadastra-pedido.component.css']
})
export class CadastraPedidoComponent implements OnInit {

  public clientes: Cliente[] = new Array();
  public lanches: ProdutoDto[] = new Array();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {

      /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.clienteService.getClientes().subscribe(res => this.clientes = res);

  }

}
