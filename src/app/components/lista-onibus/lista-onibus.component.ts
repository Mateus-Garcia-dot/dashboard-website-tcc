import { Component, Input, OnInit } from '@angular/core';
import { MapaService } from 'src/app/services/mapa.service';
import { VeiculosService } from 'src/app/services/veiculos.service';

@Component({
  selector: 'app-lista-onibus',
  templateUrl: './lista-onibus.component.html',
  styleUrls: ['./lista-onibus.component.scss']
})
export class ListaOnibusComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'situacao', 'adaptado'];
  dataSource?: any;

  @Input() linhaId?: string;

  linha: any;

  constructor(
    private veiculoService: VeiculosService,
    private mapaService: MapaService
  ) { }

  ngOnInit(): void {
    this.mapaService.linhaSelecionada?.subscribe(linha => {
      this.dataSource = null;
      this.linha = linha;
      this.mapaService.listaOnibus?.subscribe(onibus => {
        this.dataSource = onibus;
      })
      // this.veiculoService.buscarLocalizacaoVeiculoLinha(filtros?.linha)
      //   .subscribe((veiculos: any) => {
      //     this.dataSource = veiculos;
      //   })
    });
  }
}
