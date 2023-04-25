import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapaModule } from './shared/mapa/mapa.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { HomeComponent } from './core/home/home.component';
import { ListaPontosComponent } from './core/pontos/lista-pontos/lista-pontos.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListaLinhasComponent } from './core/lista-linhas/lista-linhas.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
