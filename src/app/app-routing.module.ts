import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './pessoa/cadastro/cadastro.component';
import { ListaPessoaComponent } from './pessoa/lista-pessoa/lista-pessoa.component';
import { ListaPedidoComponent } from './pedido/lista-pedido/lista-pedido.component';
import { CadastraPedidoComponent } from './pedido/cadastra-pedido/cadastra-pedido.component';


const routes: Routes = [
  { path : 'lista-pessoa', component: ListaPessoaComponent},
  { path : 'cliente/editar/:id', component: CadastroComponent},
  { path : 'pedidos', component: ListaPedidoComponent},
  { path : 'cadastra-pedido', component: CadastraPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
