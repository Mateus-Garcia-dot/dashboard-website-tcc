import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { NavbarModule } from './components/navbar/navbar.module';
import { MapaModule } from './pages/mapa/mapa.module';
import { CustomPaginator } from './services/translate.service';
import { LinhaModule } from './pages/linhas/linha.module';
import { PontosModule } from './pages/pontos/pontos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MapaModule,
    NavbarModule,
    LinhaModule,
    PontosModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
