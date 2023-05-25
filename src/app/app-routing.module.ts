import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicadoresComponent } from './pages/indicadores/indicadores.component';
import { ListaLinhasComponent } from './pages/lista-linhas/lista-linhas.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { ListaPontosComponent } from './pages/pontos/lista-pontos/lista-pontos.component';


const routes: Routes = [
  { path: '', component: MapaComponent },
  { path: 'linhas', component: ListaLinhasComponent },
  { path: 'pontos', component: ListaPontosComponent },
  { path: 'indicadores', component: IndicadoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
