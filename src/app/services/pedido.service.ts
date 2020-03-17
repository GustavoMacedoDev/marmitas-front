import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  
  private baseUrlService:string = '';
  private headers: HttpHeaders;

    constructor(private httpClient: HttpClient,
                private configService: ConfigService) { 
        
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/pedido/';

        this.headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' });

    }

    getPedidos() : Observable<Pedido[]>{        
      return this.httpClient.get<Pedido[]>(this.baseUrlService);
    } 

    getPedido(idPedido:number){
     
      return this.httpClient.get(this.baseUrlService + idPedido);
  }


}
