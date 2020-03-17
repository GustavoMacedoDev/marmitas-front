import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/services/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { Lancamento } from 'src/app/models/lancamento';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent implements OnInit {
  public titulo: String;
  public pedidos: Pedido[] = new Array();

  itens: Lancamento[];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    /*SETA O TÍTULO */
    this.titulo = "Pedidos Cadastrados";

    //this.pedidoService.getPedido(1).subscribe(res => this.pedidos = res);
    console.log(this.pedidos);
  }

  
}
