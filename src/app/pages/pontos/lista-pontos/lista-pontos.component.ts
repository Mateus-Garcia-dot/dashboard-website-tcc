import { Component } from '@angular/core';
import { PontosService } from 'src/app/services/pontos.service';

@Component({
  selector: 'app-lista-pontos',
  templateUrl: './lista-pontos.component.html',
  styleUrls: ['./lista-pontos.component.scss']
})
export class ListaPontosComponent {

  pontos: any[] = [];

  displayedColumns: string[] = ['NUM', 'NOME', 'SENTIDO', 'TIPO'];
  dataSource?: any;

  constructor(private pontosService: PontosService) {
    this.buscarPontosPorLinha();
  }

  buscarPontosPorLinha() {
    this.pontosService.buscarPontosPorLinha('022').subscribe(result => {
      this.pontos = result.data;
      this.dataSource = this.pontos;
    });
  }
}
