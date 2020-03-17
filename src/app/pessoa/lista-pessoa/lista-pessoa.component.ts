import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Response } from 'src/app/services/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

  public titulo: String;
  public cliente: Cliente = new Cliente();
  public clientes: Cliente[] = new Array();

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    /*SETA O TÍTULO */
    this.titulo = "Clientes Cadastrados";

    /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
    this.clienteService.getClientes().subscribe(res => this.clientes = res);

  }

  editar(id:number):void{

    this.router.navigate(['/cadastro-pessoa',id]);
    
  }


  
}
