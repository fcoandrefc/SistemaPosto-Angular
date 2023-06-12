import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AbastecerComponent } from './servicos/abastecer/abastecer.component';
import { LavagemComponent } from './servicos/lavagem/lavagem.component';
import { ClientesComponent } from './servicos/clientes/clientes.component';

export const rotasConfig: Routes = [ 

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'abastecer', component: AbastecerComponent },
    { path: 'lavagem', component: LavagemComponent},
    { path: 'clientes', component: ClientesComponent}
    

    
];