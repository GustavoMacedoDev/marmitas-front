import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrlService:string = '';
  private headers: HttpHeaders;

    constructor(private httpClient: HttpClient,
                private configService: ConfigService) { 
        
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/cliente/';

        this.headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' });

    }

    addCliente(cliente: Cliente){
      console.log(cliente);
      return this.httpClient.post(this.baseUrlService, JSON.stringify(cliente), { headers: this.headers});
  }

  /**CONSULTA TODAS AS PESSOAS CADASTRADAS */
  getClientes() : Observable<Cliente[]>{        
    return this.httpClient.get<Cliente[]>(this.baseUrlService);
    console.log(this.httpClient.get<Cliente[]>(this.baseUrlService));
  } 

  /**ATUALIZA INFORMAÇÕES DA PESSOA */
  atualizarCliente(cliente:Cliente){

    return this.httpClient.put(this.baseUrlService, JSON.stringify(cliente), { headers: this.headers});
}

}
