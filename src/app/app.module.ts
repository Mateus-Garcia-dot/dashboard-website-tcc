import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FiltroMapaComponent } from './components/filtro-mapa/filtro-mapa.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { ListaLinhasComponent } from './pages/lista-linhas/lista-linhas.component';
import { MapaModule } from './pages/mapa/mapa.module';
import { ListaPontosComponent } from './pages/pontos/lista-pontos/lista-pontos.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPontosComponent,
    ListaLinhasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MapaModule,
    NavbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
