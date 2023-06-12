import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { HomeComponent } from './componentes/home/home.component';
import { AbastecerComponent } from './servicos/abastecer/abastecer.component';
import { LavagemComponent } from './servicos/lavagem/lavagem.component';
import { RouterModule } from '@angular/router';
import { rotasConfig } from './app.routes';
import { ClientesComponent } from './servicos/clientes/clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    AbastecerComponent,
    LavagemComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rotasConfig)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
