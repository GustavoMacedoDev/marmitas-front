import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/services/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent implements OnInit {
  public titulo: String;
  public pedidos: Pedido[] = new Array();
  public itens: Pedido[] = new Array();

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    /*SETA O TÍTULO */
    this.titulo = "Pedidos Cadastrados";

    

    /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
    this.pedidoService.getPedidos().subscribe(res => this.pedidos = res);

  }

  
}
