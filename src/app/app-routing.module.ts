import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPontosComponent } from './core/pontos/lista-pontos/lista-pontos.component';
import { ListaLinhasComponent } from './core/lista-linhas/lista-linhas.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'linhas', component: ListaLinhasComponent },
  { path: 'pontos', component: ListaPontosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
