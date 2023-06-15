import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexXAxis, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};


@Component({
  selector: 'app-linhas-mais-movimentadas-grafico',
  templateUrl: './linhas-mais-movimentadas-grafico.component.html',
  styleUrls: ['./linhas-mais-movimentadas-grafico.component.scss']
})
export class LinhasMaisMovimentadasGraficoComponent {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Pessoas",
          data: [400, 430, 448]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Inter 2",
          "Estudantes",
          "Vermelhão",
        ]
      }
    };
  }
}
