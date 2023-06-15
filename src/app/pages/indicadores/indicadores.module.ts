import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgApexchartsModule } from "ng-apexcharts";
import { IndicadoresComponent } from './indicadores.component';
import { LinhasMaisMovimentadasGraficoComponent } from './linhas-mais-movimentadas-grafico/linhas-mais-movimentadas-grafico.component';
import { EstadoOnibusGraficoComponent } from './estado-onibus-grafico/estado-onibus-grafico.component';

@NgModule({
  declarations: [IndicadoresComponent, LinhasMaisMovimentadasGraficoComponent, EstadoOnibusGraficoComponent],
  imports: [
    CommonModule,
    NgApexchartsModule
  ], exports: [ IndicadoresComponent ]
})
export class IndicadoresModule { }
