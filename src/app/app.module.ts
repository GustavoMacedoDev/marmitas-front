import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './pessoa/cadastro/cadastro.component';
import { ClienteService } from './services/cliente.service';
import { ConfigService } from './services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaPessoaComponent } from './pessoa/lista-pessoa/lista-pessoa.component';
import { MenuComponent } from './menu/menu.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ListaPedidoComponent } from './pedido/lista-pedido/lista-pedido.component';
import { PedidoService } from './services/pedido.service';
import { CadastraPedidoComponent } from './pedido/cadastra-pedido/cadastra-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListaPessoaComponent,
    MenuComponent,
    BarraNavegacaoComponent,
    ListaPedidoComponent,
    CadastraPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ConfigService, ClienteService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
