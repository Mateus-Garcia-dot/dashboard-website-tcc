import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgApexchartsModule } from "ng-apexcharts";
import { IndicadoresComponent } from './indicadores.component';

@NgModule({
  declarations: [IndicadoresComponent],
  imports: [
    CommonModule,
    NgApexchartsModule
  ], exports: [ IndicadoresComponent ]
})
export class IndicadoresModule { }
