import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  salvar():void {
    
    /*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
    if(this.pessoa.codigo == undefined){
      
      /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA PESSOA */
      this.pessoaService.addPessoa(this.pessoa).subscribe(response => {
          
         //PEGA O RESPONSE DO RETORNO DO SERVIÇO
         let res:Response = <Response>response;
              
         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
         E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
         if(res.codigo == 1){
          alert(res.mensagem);
          this.pessoa = new Pessoa();
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

    }

}
