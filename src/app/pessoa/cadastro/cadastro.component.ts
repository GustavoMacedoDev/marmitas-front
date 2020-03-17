import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Response } from 'src/app/services/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cliente : Cliente = new Cliente();
  public clientes : Cliente[] = new Array();

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    
  }

  salvar():void {
    
    /*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
    if(this.cliente.id == undefined){
      
      /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA PESSOA */
      this.clienteService.addCliente(this.cliente).subscribe(response => {
          
         //PEGA O RESPONSE DO RETORNO DO SERVIÇO
         let res:Response = <Response>response;
              
         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
         E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
         if(res.id == 1){
          alert(res.mensagem);
          this.cliente = new Cliente();
          
         }
         else{
           /*
           ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
           NO SERVIDOR (CODIGO = 0)*/
           alert(res.mensagem);
         }
       },
       (erro) => {   
         /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
           EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
          alert(erro);
       });

    } else{

      /*AQUI VAMOS ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
      this.clienteService.atualizarCliente(this.cliente).subscribe(response => {
        
      //PEGA O RESPONSE DO RETORNO DO SERVIÇO
      let res:Response = <Response>response;
            
       /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
         E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
      if(res.id == 1){
        alert(res.mensagem);
        this.router.navigate(['/lista-pessoa']);
      }
       else{
        /*ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
        NO SERVIDOR (CODIGO = 0)*/
         alert(res.mensagem);
       }
     },
     (erro) => {                    
       /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
        EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
        alert(erro);
     });
    }

  }
     
  }
